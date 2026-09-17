import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { getApiUrl } from '@/lib/env';

/**
 * Foundation verification page ONLY.
 * This is not a product screen — it simply proves Next.js + Tailwind render.
 * Real UI will be implemented once the final design is provided.
 */
export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 p-8">
      <Card title="Frontend foundation is running">
        <p className="text-sm text-slate-600">
          Next.js (App Router) + TypeScript + Tailwind CSS are configured. Backend API base:{' '}
          <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">{getApiUrl()}</code>
        </p>
        <div className="mt-4">
          <Button>Setup OK</Button>
        </div>
      </Card>
      <p className="text-xs text-slate-400">Setup phase only — no product features implemented.</p>
    </main>
  );
}
