# FinPilot Financeiro

Plataforma de gestão financeira com dashboard, controle de receitas e despesas, metas, limites e análise inteligente de gastos.

## Estrutura

```text
finpilot-financeiro/
├─ apps/
│  ├─ web/        # React + Tailwind
│  └─ api/        # Node.js + Express
├─ packages/
│  └─ shared/     # Tipos compartilhados
├─ docs/          # Documentação do produto e da arquitetura
└─ infra/         # Arquivos de suporte para deploy e ambiente
```

## MVP

- autenticação de usuário
- dashboard com resumo financeiro
- cadastro de receitas e despesas
- categorias
- filtro por período
- gráficos de entrada x saída
- limites mensais por categoria
- persistência em banco

## Stack

- Frontend: React + Tailwind
- Backend: Node.js + Express
- Banco: Prisma com SQLite no desenvolvimento
- Auth: JWT
- Gráficos: Recharts
- Deploy: Vercel + Railway/Render

## Como rodar

1. Copie `.env.example` para `.env` e preencha `JWT_SECRET`.
2. Rode:

```bash
pnpm install
pnpm db:generate
pnpm db:migrate
pnpm dev
```

## Observação

O dashboard inicial usa dados mockados na interface, enquanto as telas de
receitas, despesas, categorias e limites já conversam com a API real.

Para produção, você pode trocar o `DATABASE_URL` para PostgreSQL mais tarde
sem alterar a camada de domínio.
