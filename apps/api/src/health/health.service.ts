import { Injectable } from '@nestjs/common';

export type HealthResult = {
  status: 'ok';
  service: string;
  timestamp: string;
};

@Injectable()
export class HealthService {
  check(): HealthResult {
    return {
      status: 'ok',
      service: 'api',
      timestamp: new Date().toISOString(),
    };
  }
}
