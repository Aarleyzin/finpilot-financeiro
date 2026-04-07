# FinPilot Financeiro

Plataforma de gestão financeira para organizar receitas, despesas, metas e limites em um dashboard visual, simples e profissional.

## Destaques

- autenticação de usuário com sessão persistida
- CRUD de receitas, despesas, categorias e limites mensais
- dashboard com visão consolidada de saldo, entradas e saídas
- landing page pensada para apresentação em portfólio
- base pronta para recorrências, metas e análises inteligentes
- arquitetura separada entre frontend, API e camada compartilhada

## Preview

O FinPilot Financeiro foi pensado para apresentar no portfólio uma aplicação com cara de produto real:

- landing page com proposta clara do projeto
- tela de login e cadastro
- painel com resumo financeiro e gráficos
- formulário para movimentações
- gestão de categorias
- gestão de limites por mês

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

## Link do repositório

- [GitHub público](https://github.com/Aarleyzin/finpilot-financeiro)

## Como rodar

1. Copie `.env.example` para `.env` e preencha `JWT_SECRET` e `DATABASE_URL` (PostgreSQL).
2. Rode:

```bash
pnpm install
pnpm db:generate
pnpm db:push
pnpm db:seed
pnpm dev
```

## Conta demo

- E-mail: `ana@finpilot.com`
- Senha: `123456`

## Capturas sugeridas

Se você quiser adicionar imagens no GitHub ou no LinkedIn, os melhores prints são:

- `/` com a landing page
- `/login`
- `/register`
- `/dashboard`
- `/transactions`
- `/categories`
- `/budgets`

## Próximos passos

- publicar frontend e API em ambiente online
- incluir screenshots do dashboard no README
- adicionar seed com cenários extras para demonstração e múltiplos usuários

## Deploy na Vercel (monorepo)

- Repositório já configurado com `vercel.json`.
- Crie um projeto na Vercel apontando para a raiz do repo; framework Vite é detectado.
- Variáveis de ambiente obrigatórias:
  - `VITE_API_URL=https://<seu-projeto>.vercel.app/api`
  - `DATABASE_URL` (PostgreSQL; use Neon/Supabase/Vercel Postgres)
  - `JWT_SECRET` (chave longa e secreta)
- Build executa `pnpm --filter @finpilot/api prisma generate`, `pnpm --filter @finpilot/api prisma db push` e `pnpm --filter @finpilot/web build`.
- A API roda em função serverless em `/api`, consumindo o mesmo domínio do front.

## Observação

O dashboard inicial usa dados mockados na interface, enquanto as telas de
receitas, despesas, categorias e limites já conversam com a API real.

Para produção, mantenha o `DATABASE_URL` apontando para PostgreSQL (SQLite não é suportado em ambiente serverless).
