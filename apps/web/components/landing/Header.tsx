import Image from 'next/image';

const NAV_ITEMS = ['Dashboard', 'Events', 'Templates', 'Analytics', 'Settings'] as const;

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAjvEc0A29CVaxAn5tzyQYvXmsDQaw-bZCL1QFlpiBgUuqWKnYeOk-LFShMemc-0HXQFgFZNKR8PINdy-2ls-udj2XmpPmqhujwkcKN7l9oD-YJdwci1UqyWUPDfq3lh5SOlsW9bzY4r32fC8fVKXPqJ2MB7ZW_6q93hGKQNAFFTovQeuiY6reqLB0m92ihsWcVewrdzCI9RFNLtFJarY5ci18ngrAwULQgMfOGvM6erfsEqR9PxS2hQy-bnDtjVBMkBQ';

/** Fixed top header — logo + nav (visual only, links are placeholders). */
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 px-gutter flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="text-headline-sm font-headline-sm text-primary tracking-tight">
          <div className="flex items-center gap-2">
            <Image
              alt="Nvite Logo"
              className="w-7 h-7 rounded-lg object-cover"
              src={LOGO_URL}
              width={28}
              height={28}
            />
            <span>Nvite</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) =>
            item === 'Dashboard' ? (
              <a
                key={item}
                aria-current="page"
                data-path="dashboard"
                href="#"
                className={`px-3 py-2 transition-all ${GRADIENT_ACTIVE}`}
              >
                {item}
              </a>
            ) : (
              <a
                key={item}
                data-path={item.toLowerCase()}
                href="#"
                className="px-3 py-2 rounded-lg text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block"></div>
      </div>
    </header>
  );
}

const GRADIENT_ACTIVE =
  'bg-[linear-gradient(135deg,#FF9A4D_0%,#FF5A4F_35%,#FF1744_70%,#F50057_100%)] text-on-primary font-bold shadow-[0_2px_8px_rgba(255,23,68,0.25)] rounded-lg';
