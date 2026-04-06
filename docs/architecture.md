# Arquitetura

## Visão geral

- `apps/web`: interface do usuário
- `apps/api`: API REST
- `packages/shared`: tipos compartilhados
- `apps/api/prisma`: schema do banco

## Fluxo principal

1. Usuário faz login.
2. Frontend consulta a API.
3. API valida regra de negócio.
4. Banco persiste receitas, despesas, categorias e limites.
5. Dashboard consolida os dados.
