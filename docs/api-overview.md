# API overview (setup phase)

| Service | Endpoint | Result |
|---|---|---|
| backend | `GET /api/v1/health` | `{ status: "ok", service: "api", timestamp }` |
| ai-service | `GET /health` | `{ status: "ok", service: "ai-service", provider }` |
| ai-service | `GET /api/v1/health` | same as above (versioned alias) + router `/api/v1/health` |

No product endpoints exist yet.
