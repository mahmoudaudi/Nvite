/** Shared API envelope + health types used across web/api in later phases. */
export type HealthStatus = {
  status: 'ok';
  service: string;
  timestamp: string;
};

export type ApiEnvelope<T> = {
  data: T;
  timestamp: string;
};

export type ApiErrorEnvelope = {
  statusCode: number;
  message: string | string[];
  error: string;
  timestamp: string;
  path?: string;
};
