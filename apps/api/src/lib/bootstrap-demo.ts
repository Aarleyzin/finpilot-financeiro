import { TransactionKind } from "@prisma/client";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma.js";

const shouldSeed = process.env.DEMO_SEED_ON_START !== "false";

function currentMonthStart() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
}

function atDay(base: Date, day: number, hour = 12) {
  return new Date(base.getFullYear(), base.getMonth(), day, hour, 0, 0, 0);
}

async function seedDemoUser(email: string, name: string, password: string) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: { name, passwordHash },
    create: { name, email, passwordHash },
  });

  await prisma.transaction.deleteMany({ where: { userId: user.id } });
  await prisma.monthlyLimit.deleteMany({ where: { userId: user.id } });
  await prisma.category.deleteMany({ where: { userId: user.id } });

  const categories = {
    salary: await prisma.category.create({
      data: { userId: user.id, name: "Salario", kind: TransactionKind.INCOME, color: "#0f766e" },
    }),
    freelance: await prisma.category.create({
      data: { userId: user.id, name: "Freela", kind: TransactionKind.INCOME, color: "#14b8a6" },
    }),
    home: await prisma.category.create({
      data: { userId: user.id, name: "Moradia", kind: TransactionKind.EXPENSE, color: "#0f172a" },
    }),
    food: await prisma.category.create({
      data: { userId: user.id, name: "Alimentacao", kind: TransactionKind.EXPENSE, color: "#f59e0b" },
    }),
    transport: await prisma.category.create({
      data: { userId: user.id, name: "Transporte", kind: TransactionKind.EXPENSE, color: "#38bdf8" },
    }),
    subscriptions: await prisma.category.create({
      data: { userId: user.id, name: "Assinaturas", kind: TransactionKind.EXPENSE, color: "#8b5cf6" },
    }),
    leisure: await prisma.category.create({
      data: { userId: user.id, name: "Lazer", kind: TransactionKind.EXPENSE, color: "#ef4444" },
    }),
  } as const;

  const now = currentMonthStart();

  await prisma.monthlyLimit.createMany({
    data: [
      { userId: user.id, categoryId: categories.home.id, month: now.getMonth() + 1, year: now.getFullYear(), limitAmount: 2800 },
      { userId: user.id, categoryId: categories.food.id, month: now.getMonth() + 1, year: now.getFullYear(), limitAmount: 1200 },
      { userId: user.id, categoryId: categories.transport.id, month: now.getMonth() + 1, year: now.getFullYear(), limitAmount: 700 },
      { userId: user.id, categoryId: categories.subscriptions.id, month: now.getMonth() + 1, year: now.getFullYear(), limitAmount: 240 },
    ],
  });

  await prisma.transaction.createMany({
    data: [
      {
        userId: user.id,
        categoryId: categories.salary.id,
        title: "Salario CLT",
        amount: 9200,
        kind: TransactionKind.INCOME,
        occurredAt: atDay(now, 5),
        notes: "Recebimento principal do mes.",
      },
      {
        userId: user.id,
        categoryId: categories.freelance.id,
        title: "Projeto de consultoria",
        amount: 1350,
        kind: TransactionKind.INCOME,
        occurredAt: atDay(now, 12),
        notes: "Projeto recorrente fechado com cliente novo.",
      },
      {
        userId: user.id,
        categoryId: categories.home.id,
        title: "Aluguel",
        amount: 2800,
        kind: TransactionKind.EXPENSE,
        occurredAt: atDay(now, 6),
        notes: "Pagamento do mes vigente.",
      },
      {
        userId: user.id,
        categoryId: categories.food.id,
        title: "Mercado da semana",
        amount: 640,
        kind: TransactionKind.EXPENSE,
        occurredAt: atDay(now, 10),
        notes: "Compras de casa e reposicao.",
      },
      {
        userId: user.id,
        categoryId: categories.transport.id,
        title: "Apps de corrida",
        amount: 186,
        kind: TransactionKind.EXPENSE,
        occurredAt: atDay(now, 14),
        notes: "Deslocamentos da semana.",
      },
      {
        userId: user.id,
        categoryId: categories.subscriptions.id,
        title: "Assinatura de design",
        amount: 89,
        kind: TransactionKind.EXPENSE,
        occurredAt: atDay(now, 18),
        notes: "Ferramenta de produtividade.",
      },
      {
        userId: user.id,
        categoryId: categories.leisure.id,
        title: "Jantar fora",
        amount: 214,
        kind: TransactionKind.EXPENSE,
        occurredAt: atDay(now, 21),
        notes: "Saida do fim de semana.",
      },
      {
        userId: user.id,
        categoryId: categories.food.id,
        title: "Padaria",
        amount: 48,
        kind: TransactionKind.EXPENSE,
        occurredAt: atDay(now, 24),
        notes: "Cafe e lanches.",
      },
    ],
  });
}

export async function bootstrapDemoUsers() {
  if (!shouldSeed) return;
  await seedDemoUser("ana@finpilot.com", "Ana Pereira", "123456");
  await seedDemoUser("arlindo@finpilot.com", "Arlindo Silva", "258012");
}
