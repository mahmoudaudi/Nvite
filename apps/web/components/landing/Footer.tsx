import { CONTAINER } from './theme';

const COLUMNS: { heading: string; links: string[] }[] = [
  { heading: 'Product', links: ['AI Generation', 'Templates', 'RSVP Management', 'Pricing'] },
  {
    heading: 'Resources',
    links: ['Documentation', 'Design Guidelines', 'API Reference', 'System Status'],
  },
  { heading: 'Company', links: ['About', 'Careers', 'Privacy Policy', 'Terms of Service'] },
];

const SOCIALS = ['Twitter', 'GitHub', 'LinkedIn', 'Discord'];

/** Professional footer (links are placeholders for now). */
export function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant/30 pt-16 pb-12">
      <div className={`${CONTAINER} grid grid-cols-1 md:grid-cols-5 gap-12 mb-16`}>
        <div className="md:col-span-2">
          <div className="text-headline-sm font-headline-sm text-primary mb-4">Nvite</div>
          <p className="text-body-md text-on-surface-variant max-w-sm mb-6">
            The AI-powered event invitation platform designed for modern hosts, creators, and
            executive teams.
          </p>
          <div className="flex items-center gap-4 text-on-surface-variant">
            {SOCIALS.map((social) => (
              <a key={social} className="hover:text-primary transition-colors" href="#">
                {social}
              </a>
            ))}
          </div>
        </div>
        {COLUMNS.map((column) => (
          <div key={column.heading}>
            <h4 className="text-title font-title text-on-surface mb-4">{column.heading}</h4>
            <ul className="space-y-3 text-body-md text-on-surface-variant">
              {column.links.map((link) => (
                <li key={link}>
                  <a className="hover:text-on-surface transition-colors" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className={`${CONTAINER} pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between text-body-sm text-on-surface-variant`}
      >
        <div>© 2025 Nvite Inc. All rights reserved.</div>
        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          {['Privacy', 'Terms', 'Security'].map((link) => (
            <a key={link} className="hover:text-on-surface transition-colors" href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
