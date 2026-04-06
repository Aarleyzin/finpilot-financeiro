import { prisma } from "../../lib/prisma.js";
import { comparePassword, hashPassword } from "../../lib/password.js";
import { signAuthToken } from "../../lib/jwt.js";
import { z } from "zod";

const authSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email(),
  password: z.string().min(6),
});

function mapUser(user: { id: string; name: string; email: string; createdAt: Date }) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
}

export async function registerService(payload: unknown) {
  const data = authSchema.parse(payload);
  const existing = await prisma.user.findUnique({ where: { email: data.email } });

  if (existing) {
    throw Object.assign(new Error("Email already in use"), { status: 409 });
  }

  const user = await prisma.user.create({
    data: {
      name: data.name?.trim() || data.email.split("@")[0],
      email: data.email.toLowerCase(),
      passwordHash: await hashPassword(data.password),
    },
  });

  const token = signAuthToken(user.id);

  return {
    user: mapUser(user),
    token,
  };
}

export async function loginService(payload: unknown) {
  const data = authSchema.omit({ name: true }).parse(payload);
  const user = await prisma.user.findUnique({ where: { email: data.email.toLowerCase() } });

  if (!user?.passwordHash) {
    throw Object.assign(new Error("Invalid credentials"), { status: 401 });
  }

  const ok = await comparePassword(data.password, user.passwordHash);
  if (!ok) {
    throw Object.assign(new Error("Invalid credentials"), { status: 401 });
  }

  return {
    user: mapUser(user),
    token: signAuthToken(user.id),
  };
}

export async function meService(userId?: string) {
  if (!userId) {
    throw Object.assign(new Error("Unauthorized"), { status: 401 });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw Object.assign(new Error("Unauthorized"), { status: 401 });
  }

  return {
    user: mapUser(user),
  };
}
