import { GRADIENT_BUTTON, CONTAINER } from './theme';

const QUICK_PROMPTS = ['Tech Founder Dinner', '30th Rooftop Birthday', 'Series A Celebration'];

/** Hero — badge, headline, AI prompt box (visual only, generation comes later). */
export function Hero() {
  return (
    <section className="relative w-full pt-16 pb-24 overflow-hidden bg-surface">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className={`${CONTAINER} relative z-10 flex flex-col items-center text-center`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-surface-container border border-outline-variant/30 text-label-sm text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Powered by Advanced Generative AI
        </div>
        <h1 className="text-display-mobile md:text-display font-display text-on-surface tracking-tight max-w-4xl mb-6">
          Create unforgettable events with AI
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mb-12">
          Design breathtaking, high-converting digital invitations and manage RSVPs effortlessly for
          weddings, tech summits, and private gatherings in seconds.
        </p>
        <div className="w-full max-w-2xl bg-surface-container-lowest p-2 rounded-2xl shadow-xl border border-outline-variant/50 flex flex-col sm:flex-row items-center gap-2 transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
          <div className="flex items-center pl-3 w-full sm:w-auto flex-1 gap-3">
            <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
            <input
              className="w-full bg-transparent border-none text-body-lg text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none"
              placeholder="What are you celebrating? (e.g. Sarah & John's wedding)"
              type="text"
            />
          </div>
          <button
            type="button"
            className={`w-full sm:w-auto px-6 py-3 rounded-xl ${GRADIENT_BUTTON} font-title text-label-md hover:opacity-95 transition-all flex items-center justify-center gap-2`}
          >
            Generate Invite
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-body-sm text-on-surface-variant">
          <span className="text-on-surface-variant/60">Popular:</span>
          {QUICK_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              className="px-3 py-1 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
