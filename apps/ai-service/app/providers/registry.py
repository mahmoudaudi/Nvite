"""Provider registry — resolves the configured provider by name (later phases)."""

from app.providers.base import AIProvider

_registry: dict[str, type[AIProvider]] = {}


def register_provider(name: str, cls: type[AIProvider]) -> None:
    _registry[name] = cls


def get_provider_class(name: str) -> type[AIProvider] | None:
    return _registry.get(name)


def list_providers() -> list[str]:
    return sorted(_registry.keys())
