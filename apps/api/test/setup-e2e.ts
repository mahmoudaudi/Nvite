/**
 * E2E setup — runs before test files are imported.
 * Provides the required env so Joi config validation passes at module load.
 * Test-only dummy values; never real secrets.
 */
process.env.JWT_SECRET ??= 'test-secret-min-16-chars-ok';
process.env.DATABASE_URL ??=
  'postgresql://postgres:postgres@localhost:5432/event_invitation?schema=public';
process.env.PORT ??= '3001';
process.env.CORS_ORIGINS ??= 'http://localhost:3000';
process.env.AI_SERVICE_URL ??= 'http://localhost:8000';
