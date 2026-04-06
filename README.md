# FinPilot Financeiro

Plataforma de gestão financeira para organizar receitas, despesas, metas e limites em um dashboard visual, simples e profissional.

## Destaques

- autenticação de usuário com sessão persistida
- CRUD de receitas, despesas, categorias e limites mensais
- dashboard com visão consolidada de saldo, entradas e saídas
- base pronta para recorrências, metas e análises inteligentes
- arquitetura separada entre frontend, API e camada compartilhada

## Preview

O FinPilot Financeiro foi pensado para apresentar no portfólio uma aplicação com cara de produto real:

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

- [GitHub privado](https://github.com/Aarleyzin/finpilot-financeiro)

## Como rodar

1. Copie `.env.example` para `.env` e preencha `JWT_SECRET`.
2. Rode:

```bash
pnpm install
pnpm db:generate
pnpm db:migrate
pnpm dev
```

## Próximos passos

- adicionar seed com dados de exemplo
- publicar frontend e API em ambiente online
- incluir screenshots do dashboard no README
- evoluir para PostgreSQL em produção

## Observação

O dashboard inicial usa dados mockados na interface, enquanto as telas de
receitas, despesas, categorias e limites já conversam com a API real.

Para produção, você pode trocar o `DATABASE_URL` para PostgreSQL mais tarde
sem alterar a camada de domínio.
