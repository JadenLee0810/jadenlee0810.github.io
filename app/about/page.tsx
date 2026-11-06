import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ResultCard from '@/components/ResultCard';
import SerpShell from '@/components/SerpShell';
import { profile, socials } from '@/lib/content';
import SiteIcon from '@/components/SiteIcon';

export const metadata: Metadata = {
  title: 'Jaden Lee — AboutMe',
  description:
    'Jaden J. Lee — Statistics & Applied Mathematics at UC Berkeley, Data Engineering Intern at Legali AI, and founder of Lyrn AI.',
};

/** The knowledge-panel fact tiles, mirroring Google's Age / Net worth cards. */
const FACTS = [
  {
    label: 'Education',
    value: 'UC Berkeley',
    detail: 'B.A. Statistics · B.A. Applied Math · Class of 2028',
  },
  {
    label: 'Currently',
    value: 'Legali AI',
    detail: 'Data Engineering Intern · StartX F26, SkyDeck Pad-13',
  },
  {
    label: 'Founder',
    value: 'Lyrn AI',
    detail: 'AI music education · NVIDIA Inception',
  },
  {
    label: 'Project',
    value: 'SafePics',
    detail: 'Post-quantum image editing · safepics.us',
  },
];

/** Google-style "Born / Education" rows in the overview panel. */
const PANEL_FACTS = [
  { label: 'Born', value: 'August 10, 2006' },
  { label: 'Education', value: 'UC Berkeley (Present)' },
];

const RELATED = [
  { label: 'Jaden Lee education', href: '/education' },
  { label: 'Jaden Lee experience', href: '/experience' },
  { label: 'Jaden Lee projects', href: '/projects' },
  { label: 'Jaden Lee resume', href: '/resume' },
];

export default function AboutPage() {
  return (
    <SerpShell query="Jaden Lee" activeTab="/about">
      {/* Left column: header, portrait, results. Right column: sticky overview. */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,652px)_minmax(280px,380px)]">
        <div className="flex flex-col gap-8">
          <header>
            <h2 className="text-[32px] leading-[40px] text-ink-light dark:text-ink-dark">
              {profile.name}
            </h2>
            <p className="mt-1 text-[14px] text-muted-light dark:text-muted-dark">
              Statistics &amp; Applied Mathematics at UC Berkeley · Founder of Lyrn AI
            </p>
          </header>

          {/* Portrait + fact tiles — Google's image mosaic row. */}
          <div className="grid max-w-[652px] gap-3 sm:grid-cols-[200px_minmax(0,1fr)_minmax(0,1fr)]">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-[#E8EAED] dark:bg-[#3C4043] sm:row-span-2">
              <Image
                src="/headshot.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="200px"
                priority
                className="object-cover object-top"
              />
            </div>

            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-hairline-light p-4 dark:border-hairline-dark"
              >
                <p className="text-[13px] text-muted-light dark:text-muted-dark">{fact.label}</p>
                <p className="mt-1 text-[20px] leading-[26px] text-ink-light dark:text-ink-dark">
                  {fact.value}
                </p>
                <p className="mt-1 text-[13px] leading-[18px] text-muted-light dark:text-muted-dark">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>

          {socials.map((entry) => (
            <ResultCard key={entry.id} entry={entry} />
          ))}

          <section aria-labelledby="related-heading">
            <h3
              id="related-heading"
              className="mb-3 text-[18px] text-ink-light dark:text-ink-dark"
            >
              People also search for
            </h3>
            <div className="flex flex-wrap gap-2">
              {RELATED.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-hairline-light px-4 py-2 text-[13px] text-ink-light transition-colors hover:bg-row-light dark:border-hairline-dark dark:text-ink-dark dark:hover:bg-row-dark"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-lg border border-hairline-light p-5 dark:border-hairline-dark lg:sticky lg:top-4">
          <h3 className="text-[20px] leading-[26px] text-ink-light dark:text-ink-dark">Overview</h3>

          <p className="mt-3 text-[14px] leading-[22px] text-serp-snippet-light dark:text-serp-snippet-dark">
            Jaden J. Lee is a{' '}
            <mark className="bg-[#D3E3FD] text-inherit dark:bg-[#394457]">
              statistics and applied mathematics student at UC Berkeley
            </mark>{' '}
            who builds AI infrastructure for legal, healthcare, and music-education products.
          </p>

          <p className="mt-3 text-[14px] leading-[22px] text-serp-snippet-light dark:text-serp-snippet-dark">
            He is currently a Data Engineering Intern at Legali AI, where he shipped an attorney
            verification service and LLM-powered contract review pipelines, and the founder of Lyrn
            AI, an NVIDIA Inception startup replacing legacy dynamic time-warp methods with audio AI
            agents. He previously analyzed grid-scale solar generation as a NASA SEES research
            intern.
          </p>

          <dl className="mt-4 divide-y divide-white rounded-xl bg-[#F1F3F4] text-[14px] leading-[20px] dark:divide-[#202124] dark:bg-[#303134]">
            {PANEL_FACTS.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[100px_minmax(0,1fr)] gap-3 px-4 py-4">
                <dt className="text-muted-light dark:text-muted-dark">{fact.label}</dt>
                <dd className="text-ink-light dark:text-ink-dark">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="my-4 h-px bg-[#E8EAED] dark:bg-[#3C4043]" />

          <h4 className="text-[14px] font-medium text-ink-light dark:text-ink-dark">Profiles</h4>
          <ul className="mt-2 flex flex-col gap-2">
            {socials.filter((entry) => !entry.id.endsWith('-site')).map((entry) => (
              <li key={entry.id}>
                <a
                  href={entry.href}
                  target={entry.href?.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-3 text-[14px] text-serp-link-light hover:underline dark:text-serp-link-dark"
                >
                  <SiteIcon entry={entry} size={24} />
                  {entry.source}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[14px] text-serp-link-light hover:underline dark:text-serp-link-dark"
              >
                <SiteIcon entry={{ source: 'Instagram', icon: 'instagram' }} size={24} />
                Instagram
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </SerpShell>
  );
}
