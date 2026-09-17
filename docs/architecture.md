# Architecture (setup phase)

```
apps/web (Next.js :3000)
  │  NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
  ▼
apps/api (NestJS :3001, prefix /api + URI version v1)
  │  GET /api/v1/health
  ├──► PostgreSQL :5432 (docker compose `db`, Prisma in /prisma)
  └──► apps/ai-service (FastAPI :8000, GET /health, /api/v1/health)
```

- `packages/shared` — cross-app types/utils (no framework deps)
- `packages/config` — shared non-secret defaults
- `prisma/` — generator + datasource only (no models until ERD)

Later phases add: Auth, Invitations, AI Generation, Editor, RSVP, Guests,
Notifications, Analytics, Subscriptions, Payments, Admin Dashboard.
None of those are implemented now.
