# apps/api — NestJS backend foundation

Setup-phase only. No business features implemented.

## Endpoint

- `GET /api/v1/health` → `{ "status": "ok", "service": "api", "timestamp": "..." }`

## Scripts

- `npm run start:dev --workspace=@app/api` — dev server on :3001
- `npm run build --workspace=@app/api`
- `npm run test --workspace=@app/api` — unit tests
- `npm run test:e2e --workspace=@app/api` — API e2e test (health)

## Conventions

- Global prefix `api` + URI versioning (`v1`)
- CORS allowlist via `CORS_ORIGINS`
- `ValidationPipe` (whitelist/transform), `HttpExceptionFilter` envelope
- Config via `@nestjs/config` + Joi validation
