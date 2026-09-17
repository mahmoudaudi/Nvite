import { HealthService } from '../src/health/health.service';

describe('HealthService (unit)', () => {
  it('returns ok status', () => {
    const svc = new HealthService();
    const result = svc.check();
    expect(result.status).toBe('ok');
    expect(result.service).toBe('api');
  });
});
