import { z } from "zod";
import { prisma } from "../../lib/prisma.js";

const categorySchema = z.object({
  name: z.string().min(2),
  kind: z.enum(["income", "expense"]),
  color: z.string().optional().nullable(),
});

function toPrismaKind(kind: "income" | "expense") {
  return kind === "income" ? "INCOME" : "EXPENSE";
}

async function ensureAuth(userId?: string) {
  if (!userId) {
    throw Object.assign(new Error("Unauthorized"), { status: 401 });
  }
  return userId;
}

async function resolveCategoryOrThrow(userId: string, id: string) {
  const category = await prisma.category.findFirst({ where: { id, userId } });
  if (!category) {
    throw Object.assign(new Error("Category not found"), { status: 404 });
  }
  return category;
}

export async function listCategoriesService(userId?: string) {
  const authUserId = await ensureAuth(userId);
  const items = await prisma.category.findMany({
    where: { userId: authUserId },
    orderBy: [{ kind: "asc" }, { name: "asc" }],
  });

  return {
    items: items.map((category: { id: string; name: string; kind: string; color: string | null }) => ({
      id: category.id,
      name: category.name,
      kind: category.kind === "INCOME" ? "income" : "expense",
      color: category.color,
    })),
  };
}

export async function createCategoryService(userId: string | undefined, payload: unknown) {
  const authUserId = await ensureAuth(userId);
  const data = categorySchema.parse(payload);

  const item = await prisma.category.create({
    data: {
      userId: authUserId,
      name: data.name,
      kind: toPrismaKind(data.kind),
      color: data.color ?? null,
    },
  });

  return {
    item: {
      id: item.id,
      name: item.name,
      kind: item.kind === "INCOME" ? "income" : "expense",
      color: item.color,
    },
  };
}

export async function updateCategoryService(
  userId: string | undefined,
  id: string,
  payload: unknown,
) {
  const authUserId = await ensureAuth(userId);
  await resolveCategoryOrThrow(authUserId, id);
  const data = categorySchema.partial().parse(payload);

  const item = await prisma.category.update({
    where: { id },
    data: {
      ...(data.name ? { name: data.name } : {}),
      ...(data.kind ? { kind: toPrismaKind(data.kind) } : {}),
      ...(data.color !== undefined ? { color: data.color } : {}),
    },
  });

  return {
    item: {
      id: item.id,
      name: item.name,
      kind: item.kind === "INCOME" ? "income" : "expense",
      color: item.color,
    },
  };
}

export async function deleteCategoryService(userId: string | undefined, id: string) {
  const authUserId = await ensureAuth(userId);
  await resolveCategoryOrThrow(authUserId, id);
  await prisma.category.delete({ where: { id } });
}
