"""Foundation health tests — verify FastAPI boots and /health works."""

from fastapi.testclient import TestClient

from app.main import app
from app.providers import AIProvider, GenerateRequest, GenerateResponse
from app.providers.registry import list_providers, register_provider

client = TestClient(app)


def test_health():
    res = client.get("/health")
    assert res.status_code == 200
    assert res.json()["status"] == "ok"


def test_health_v1():
    res = client.get("/api/v1/health")
    assert res.status_code == 200
    assert res.json()["status"] == "ok"


def test_provider_abstraction_is_replaceable():
    class DummyProvider(AIProvider):
        name = "dummy"

        async def generate(self, request: GenerateRequest) -> GenerateResponse:
            return GenerateResponse(content=f"echo:{request.prompt}", provider=self.name)

    register_provider("dummy", DummyProvider)
    assert "dummy" in list_providers()
    assert issubclass(DummyProvider, AIProvider)
