import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().default(3001),
  API_PREFIX: Joi.string().default('api'),
  NODE_ENV: Joi.string().valid('development', 'test', 'production').default('development'),
  CORS_ORIGINS: Joi.string().default('http://localhost:3000'),
  JWT_SECRET: Joi.string().min(16).required(),
  DATABASE_URL: Joi.string().uri().required(),
  AI_SERVICE_URL: Joi.string().uri().default('http://localhost:8000'),
});
