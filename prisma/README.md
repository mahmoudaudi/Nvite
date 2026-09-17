# Prisma — PostgreSQL infrastructure (setup phase)

No application models yet. The final ERD will be implemented in the next phase.

## Files

- `schema.prisma` — generator + datasource only (no models by design)

## Commands (run from repo root)

- `docker compose up -d db` — start PostgreSQL 16 locally
- `npm run prisma:validate` — validate schema
- `npm run prisma:generate` — generate Prisma Client
- `npm run prisma:studio` — open Prisma Studio

`DATABASE_URL` is read from the environment (see root `.env.example`).
