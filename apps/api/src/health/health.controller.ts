import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller({
  path: 'health',
  version: '1',
})
export class HealthController {
  constructor(private readonly health: HealthService) {}

  /** GET /api/v1/health — liveness probe, no auth, no business logic. */
  @Get()
  check() {
    return this.health.check();
  }
}
