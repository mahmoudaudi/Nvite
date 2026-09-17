/** Minimal reusable card — layout foundation only, no design system yet. */
export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="mt-2">{children}</div>
    </section>
  );
}
