import { prisma } from "../lib/prisma.js";

export async function databaseStatus() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return {
      connected: true,
    };
  } catch {
    return {
      connected: false,
    };
  }
}
