"""Versioned API router — health only in the setup phase."""

from fastapi import APIRouter

router = APIRouter(tags=["health"])


@router.get("/health")
def api_health() -> dict:
    return {"status": "ok", "service": "ai-service"}
