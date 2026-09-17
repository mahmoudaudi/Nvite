# Development workflow

1. `cp .env.example .env` (and `apps/web/.env.local`, `apps/api/.env`, `apps/ai-service/.env` as needed)
2. `npm install`
3. `docker compose up -d db` (PostgreSQL)
4. Run services (separate terminals):
   - `npm run dev:web` (Next.js :3000)
   - `npm run dev:api` (NestJS :3001)
   - `npm run dev:ai` (FastAPI :8000)
5. Verify:
   - web: http://localhost:3000
   - api: http://localhost:3001/api/v1/health
   - ai: http://localhost:8000/health

Work on the `develop` branch; `main` stays clean until releases.
