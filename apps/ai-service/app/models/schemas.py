"""Shared pydantic schemas — setup phase only (no generation schemas yet)."""

from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str = "ok"
    service: str = "ai-service"
