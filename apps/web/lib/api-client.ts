import { getApiUrl } from './env';

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

/**
 * Minimal typed API client foundation.
 * Usage (later phases): apiClient<HealthResponse>('/health')
 */
export async function apiClient<T>(path: string, init?: RequestInit): Promise<T> {
  const base = getApiUrl().replace(/\/$/, '');
  const res = await fetch(`${base}${path.startsWith('/') ? path : `/${path}`}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
  });
  if (!res.ok) {
    throw new ApiError(res.status, `API request failed: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as T;
}

export type HealthResponse = {
  status: 'ok';
  service: string;
  timestamp: string;
};
