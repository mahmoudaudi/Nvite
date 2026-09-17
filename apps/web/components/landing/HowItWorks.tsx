import { CONTAINER } from './theme';

const STEPS = [
  {
    number: '01',
    title: 'Describe',
    text: 'Type your event idea, tone, and guest count into our intelligent prompt bar.',
  },
  {
    number: '02',
    title: 'AI Generates',
    text: 'Watch as custom layouts, color grading, and copy are crafted instantly.',
  },
  {
    number: '03',
    title: 'Customize',
    text: 'Fine-tune details, add ticketing, or adjust visual styles with intuitive controls.',
  },
  {
    number: '04',
    title: 'Share & RSVP',
    text: 'Distribute via web link, SMS, or email and track real-time attendance analytics.',
  },
];

/** How Nvite Works — four-step workflow. */
export function HowItWorks() {
  return (
    <section className="py-24 bg-surface">
      <div className={CONTAINER}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label-sm text-primary uppercase tracking-wider block mb-2">
            Seamless Workflow
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mb-4">
            How Nvite Works
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            From concept to guest list management in four lightning-fast steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {STEPS.map((step) => (
            <div key={step.number} className="bg-surface-container-low p-8 rounded-2xl relative">
              <div className="text-mono-metric font-mono-metric text-primary/40 mb-4">
                {step.number}
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                {step.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
