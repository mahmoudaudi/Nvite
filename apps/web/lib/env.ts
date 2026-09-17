/** Central access to public env vars. Never put secrets here. */
export function getApiUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1';
}
