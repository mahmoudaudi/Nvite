import Image from 'next/image';
import { CONTAINER } from './theme';

type Preview = {
  tag: string;
  kicker: string;
  title: string;
  meta: string;
  rsvp: string;
  image: string;
  imageAlt: string;
  avatars: string[];
};

const PREVIEWS: Preview[] = [
  {
    tag: 'Wedding',
    kicker: 'Save The Date',
    title: 'Elena & Marcus',
    meta: 'Oct 14, 2025 • Como, Italy',
    rsvp: '98% RSVP Rate',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAISzPyU5EzNMgnAg0SUMSitHMPjSnC7McBl6lv37AMTbEnkugzoh_CA9XG1DQ2k1ExvnsV0ldBohwSXyIL9SD-1ieQxG1ccU7ZCHewHLB-AEXF-cANO8PTBIu3_5xiKUwLYOjpNwAwQ5qDsG38ox0iGJzP5kgUL7AS0-f9h4ta7c7VdAPMwkATtX2vbL5P73mnbneac7f7-WiAAsdwco7cZxmyo92-HKcYkiGOBmWUdv0_xboNBHUZ',
    imageAlt:
      'Minimalist elegant wedding invitation featuring sophisticated serif typography, soft cream background, and botanical line art accents.',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBd8ZkVe7ZfNz9q_rw7DHAmZXrN1zlNrLyEXFklHdPUE_KBtJdsi7-Aczn5FOc-a9DgWo1DTsGaBoFzyxEfGRKiKYFReMFinggA-BHshUNWmX4nr7mcmiPn8kzjbFlo9cixoglHLRYy1XsUV5HGCGI5qOVFaTlZuGG3xgF2Od_OsBYhNaXy8Y6QdOLnksacnvdBblBPEoHetbi22UW-_lWXUEciHiooj6VrWPouwdcYopL7zNYdU2Rb',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvUBVkXWGKVtIIfV_wIE6mMplBLxdwvnIaqiyIzFu6a4e1-92p-sAv2uMeM0BzlIO0gqcLEFXJtqdi1LvbRYs0PqxxZKXSBK9k3YY0ZTycm23bQU_ze8_Ici2scHOjzt519YfUgTM3KuYKCirTT7UkqZiROby2-jJsqLxASSTcsIObA6Ux0bEJIY8CFGAwTywm7MmdCan9ndAWJWW9_nRPBwALwoFa9NtK1NGZMN29v2kd7NrvmVKQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwHMZDnwICz5JeSol3PljGmSHmxFwT33IlUArvGJdi7SOg-gIBcEiZmiuH7A_k20yA_APqObRGB-vcxGnhdD5xaWU_fFaCR0z1ChtERhDhLvMyNsnH8ah30D4RWhPwnu6_rRMyIGN-mFXuUvWwUO1g_w6rRd1sZjIz4olFDSdsH8dZavJ0fnenAavWOmvIeHCM0w1xfA0ooPgrtv6NmgTEzSl2t6EBpPUbJ_4eT7o5KwIOMc-fhNJ6',
    ],
  },
  {
    tag: 'Birthday',
    kicker: 'Private Party',
    title: "Julian's 30th Sunset Rooftop",
    meta: 'Nov 02, 2025 • Austin, TX',
    rsvp: '100% RSVP Rate',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAscwDDXgSUeAd0Lm3_JpoH1FL36kcOUl18wpIGvtO8IphTTb7OWyXuo9iq_4v2anweod3WQuEN6nqL0fwhBn3LX47iu89Jctc9rn3qfPUvwrR933718DiTPDstuc6MAwnKuu-2A6LekXC4XF4ERtyG3_0dwif7jDiiguU9-7wM706rc_a0nH2qNcZUurM-YwPdKpbDeBNPUlrPnHR1_lbq26m7pLvP82VZms3ihcyps6UntTEarl8M',
    imageAlt:
      'Vibrant modern birthday celebration invite with high-contrast typography, dark moody aesthetic, and neon coral highlights.',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPGNpaUb2vJCD5Hj5cBJpcAaEh74wwmRhIulyj40a3TD4d_LqFOl1H4r5yEgErIj3z38-oApJBxnRHt6_MnrNQlT1GDf6qAmPG3M7q5SAhiJ_oWhnp3KScjIDSmGugKCxVwvt4AJJPxT7G4HlYk4CaJuxUKinZ7S4Nz3zgTuL1s5dSzj8Ywlm_aps5sD-TLWdKBeHzN4FmXN9kdj5y-S73t-97he3LeAo9SAKXv_cpy3XNF_648Frg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGnDR9t49VWqKCBXPVHsD-CpmCXscHbKcPmp4c-wdRvFcjuAMbizsa5OMRRqJL523fmg26Wqvt6ggDycYT1RBHdy_5mUdxkGixeprXI5GGn6lnhH7baJ5tX6z-d7gzDVR5ffp80NbggNBwRLe2g_KWALJn1K3_TScEr2HnlyBK52zVcokLETGE4KPeLExjT264KDCZftAgO7_qazjVyJl2a4IYtm4fUmMEGpgwgRE4u_hl_H34J5Nu',
    ],
  },
  {
    tag: 'Private Dinner',
    kicker: 'Founder Circle',
    title: 'AI Architecture Summit',
    meta: 'Dec 01, 2025 • San Francisco, CA',
    rsvp: '92% RSVP Rate',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9lW3QjxFByHbE8pBLLjM5svyxEPB-1gUzJF7Kst54UmN0dTL8-1yt8eKZKRWU4avwB7dd-TAp31fsYYfJhq_WFawuIKc-HjQhJvHmAplWXyKweFAIg7LvWBB4m8O8HUkclV5eOkL4CLt6MgN-tPBF0PrbspDXbJIslT9DcdLtrkYfhJPqJriquzru72tXo4kn-VwwITf55GLpDvR3rM_xEzQvCNBsj2M4fU_ZDn4d-UsTPInDc5XH',
    imageAlt:
      'Exclusive executive private dinner invitation with minimalist brutalist typography, charcoal texture, and subtle gold foil elements.',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBABsLZFpBye0A5nDanad_dGKxjwUUKijyzDs5CkosrnWC8e6yTdAEbcwdZcBkERBxrb2GSw1L1TTN_8nfCYicHR0Afna75DYrq8qyFKzgGOkOWUyofAHhSVJppXKK0_nAYLkoFWyKUUaWkrYJdMk-l06xFTuUt931FRlYVxX0yJRmAKKmRyWWe8_SOKdjM4DlHNVeGX1GNH4lQBkHWPoAi66LJkkh_JDd_RQw_u5xOyrNdDjRin2Mi',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAh6Zyfiq3FFiyTSLx7jbk4T6FdIheLaJBFK2VtI66fX99RSFsmyt_QVhw8S1aeV8fMBVgw5yp6as-Zopj-ZRq3E9ZTnjdFzInJ2g_EtoUpW6A1W3fon5ct-7xfqavy9Kq4NSzBFgwhy0YA7zkUYFyKqNCc52JFSF0QyioZD7IQ8ZxnXE9K2t3hIhVF4HsEx64v81UfcciT8fef7HrdlLITUzwbj41Ati_4LPzvYRHtA1ebgRLsLMUg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3Gjfs3jdqjJlg_g0a3JUXkL4b0W1bWajsYrHT2Qn9EDhU08Ij0ZVKKdD_-KCjcheF_n21anU-ggYJHkyG1GCTQDwh7OpFh_CeT1G0Vi3stS2af6aX91ob7iPVUq-uKffPAmmcrmFZ7A0dFAi5kHVewhF36sMheqmLWiB__ba-yg4jI9u88A8iTBc05TLs1yFvq54Z0dkAG6-PQZPkLfeDe7X010TYDZWn5Xj91t-Gi8POLDb_-z9A',
    ],
  },
];

/** Live AI preview cards (static showcase data for now). */
export function PreviewCards() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className={CONTAINER}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-label-sm text-primary uppercase tracking-wider block mb-2">
              Live AI Previews
            </span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface">
              Curated by Intelligence
            </h2>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-md mt-4 md:mt-0">
            Every invite adapts typography, layout, and motion harmoniously based on your prompt and
            event tone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PREVIEWS.map((preview) => (
            <article
              key={preview.title}
              className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 hover:shadow-xl transition-all group"
            >
              <div
                className="h-72 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url('${preview.image}')` }}
                role="img"
                aria-label={preview.imageAlt}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-label-sm text-on-surface">
                  {preview.tag}
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                  <span className="text-label-sm uppercase tracking-widest text-primary-fixed">
                    {preview.kicker}
                  </span>
                  <h3 className="text-headline-sm font-headline-sm mt-1">{preview.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-body-sm text-on-surface-variant mb-4">
                  <span>{preview.meta}</span>
                  <span className="text-primary font-medium">{preview.rsvp}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                  <div className="flex -space-x-2">
                    {preview.avatars.map((avatar) => (
                      <Image
                        key={avatar}
                        className="w-7 h-7 rounded-full border-2 border-surface object-cover"
                        alt="Attendee avatar thumbnail showing smiling guest."
                        src={avatar}
                        width={28}
                        height={28}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="text-label-md text-on-surface hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Preview <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
