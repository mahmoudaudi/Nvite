"""Replaceable AI provider abstraction.

Contract:
    AIProvider (abstract)
      └── concrete implementations (added in a later phase)

No vendor is chosen or hard-coded here. The backend calls the AI service,
which delegates to whichever provider is configured via AI_PROVIDER.
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass


@dataclass
class GenerateRequest:
    """Minimal placeholder — real fields arrive with the feature spec."""

    prompt: str


@dataclass
class GenerateResponse:
    content: str
    provider: str
    model: str = ""


class AIProvider(ABC):
    """Interface every AI provider must implement."""

    name: str = "base"

    @abstractmethod
    async def generate(self, request: GenerateRequest) -> GenerateResponse:
        """Generate content for the given request."""
        raise NotImplementedError

    def health(self) -> dict:
        return {"provider": self.name, "configured": False}
