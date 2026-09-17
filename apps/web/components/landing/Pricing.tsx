import { GRADIENT_BUTTON, CONTAINER } from './theme';

type Tier = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  cta: string;
  featured: boolean;
};

const TIERS: Tier[] = [
  {
    name: 'Starter',
    price: '$0',
    blurb: 'Perfect for single events and birthdays.',
    features: ['3 AI Invitations per month', 'Up to 50 guests per event', 'Basic RSVP tracking'],
    cta: 'Get Started Free',
    featured: false,
  },
  {
    name: 'Professional',
    price: '$29',
    blurb: 'For active hosts, planners, and community builders.',
    features: [
      'Unlimited AI Invitations',
      'Up to 500 guests per event',
      'Advanced analytics & custom domains',
      'Zero branding watermark',
    ],
    cta: 'Start Pro Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    blurb: 'For tech companies, agencies, and large summits.',
    features: [
      'Everything in Professional',
      'Unlimited guests & team seats',
      'Dedicated account manager',
      'Custom API integrations',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
];

/** Pricing tiers (static showcase — checkout comes in a later phase). */
export function Pricing() {
  return (
    <section className="py-24 bg-surface">
      <div className={CONTAINER}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label-sm text-primary uppercase tracking-wider block mb-2">
            Transparent Pricing
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mb-4">
            Plans for every scale
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Whether you&apos;re hosting an intimate dinner or a global tech summit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.featured
                  ? 'bg-surface-container-lowest p-8 rounded-2xl border-2 border-primary relative flex flex-col justify-between shadow-xl'
                  : 'bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 flex flex-col justify-between'
              }
            >
              {tier.featured && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 ${GRADIENT_BUTTON} px-3 py-1 rounded-full text-label-sm font-bold`}
                >
                  Most Popular
                </div>
              )}
              <div>
                <div
                  className={`text-label-sm uppercase tracking-wider mb-2 ${tier.featured ? 'text-primary' : 'text-on-surface-variant'}`}
                >
                  {tier.name}
                </div>
                <div className="text-headline-lg font-headline-lg text-on-surface mb-4">
                  {tier.price}{' '}
                  <span className="text-body-md text-on-surface-variant font-normal">/ month</span>
                </div>
                <p className="text-body-md text-on-surface-variant mb-8">{tier.blurb}</p>
                <ul className="space-y-4 text-body-md text-on-surface mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">check</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className={
                  tier.featured
                    ? `w-full py-3 rounded-xl ${GRADIENT_BUTTON} font-title text-label-md hover:opacity-95 transition-all`
                    : 'w-full py-3 rounded-xl border border-outline-variant text-on-surface font-title text-label-md hover:bg-surface-container transition-all'
                }
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
