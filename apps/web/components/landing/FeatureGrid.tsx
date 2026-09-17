import { CONTAINER } from './theme';

const FEATURES = [
  {
    icon: 'bolt',
    title: 'Instant Generation',
    text: 'Create unique invitation pages in under 5 seconds with context-aware AI styling.',
  },
  {
    icon: 'groups',
    title: 'Smart Guest Lists',
    text: 'Automated RSVP reminders, dietary requirement collection, and plus-one tracking.',
  },
  {
    icon: 'analytics',
    title: 'Live Analytics',
    text: 'Monitor open rates, geographic reach, and engagement metrics in real time.',
  },
];

/** Feature grid — host capabilities. */
export function FeatureGrid() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className={CONTAINER}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label-sm text-primary uppercase tracking-wider block mb-2">
            Engineered for Hosts
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mb-4">
            Everything you need to host flawlessly
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Powerful capabilities wrapped in an uncompromisingly clean interface.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-fixed/30 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                {feature.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
