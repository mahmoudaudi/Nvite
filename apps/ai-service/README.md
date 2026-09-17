# apps/ai-service — FastAPI AI service foundation

Setup-phase only. No AI generation implemented. No vendor chosen.

## Layout

- `app/main.py` — FastAPI app, `GET /health` + `GET /api/v1/health`
- `app/api/` — versioned router foundation
- `app/core/` — settings + logging
- `app/models/` — pydantic schemas foundation
- `app/services/` — reserved for later phases
- `app/providers/` — replaceable `AIProvider` abstraction + registry

## Run

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt -r requirements-dev.txt
uvicorn app.main:app --reload --port 8000 --app-dir apps/ai-service
# from repo root: npm run dev:ai
```

## Test

```bash
pytest apps/ai-service/tests -v
```
