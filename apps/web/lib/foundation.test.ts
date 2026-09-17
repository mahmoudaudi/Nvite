import { describe, expect, it } from 'vitest';
import { cn } from '@/lib/utils';
import { getApiUrl } from '@/lib/env';

describe('frontend foundation', () => {
  it('joins class names', () => {
    expect(cn('a', false, 'b')).toBe('a b');
  });

  it('provides a default API url', () => {
    expect(typeof getApiUrl()).toBe('string');
  });
});
