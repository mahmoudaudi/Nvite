import {
  Header,
  Hero,
  PreviewCards,
  HowItWorks,
  FeatureGrid,
  Pricing,
  Footer,
} from '@/components/landing';

/**
 * Nvite landing page — implemented from the approved design.
 * Copy is English for now; localization + improvements land in later phases.
 * Interactive actions (generation, checkout, auth) are visual-only placeholders.
 */
export default function HomePage() {
  return (
    <div className="w-full bg-surface font-body-md text-on-surface">
      <Header />
      <main className="w-full pt-16 bg-surface">
        <div className="flex flex-col w-full">
          <Hero />
          <PreviewCards />
          <HowItWorks />
          <FeatureGrid />
          <Pricing />
          <Footer />
        </div>
      </main>
    </div>
  );
}
