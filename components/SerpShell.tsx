import Link from 'next/link';
import type { ReactNode } from 'react';
import Footer from './Footer';
import Logo from './Logo';
import { CameraIcon, MicIcon, SearchIcon } from './icons';

const TABS = [
  { label: 'All', href: '/about' },
  { label: 'Education', href: '/education' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Socials', href: '/socials' },
  { label: 'Resume', href: '/resume' },
];

type SerpShellProps = {
  /** Text shown inside the search field, e.g. "Jaden Lee Work Experience". */
  query: string;
  /** Which tab is highlighted — match against the route, e.g. "/experience". */
  activeTab: string;
  /** Result count for the stats line. Omit to hide the line entirely. */
  resultCount?: number;
  children: ReactNode;
};

/**
 * Google search-results-page chrome: small logo + query field up top, section
 * tabs, a stats line, then the results column. Left-aligned like the real SERP.
 */
export default function SerpShell({ query, activeTab, resultCount, children }: SerpShellProps) {
  // Deterministic per-page "search time" so the flavour text is stable.
  const seconds = (
    0.2 +
    (Array.from(query).reduce((sum, char) => sum + char.charCodeAt(0), 0) % 50) / 100
  ).toFixed(2);

  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <div>
        <header className="flex flex-col gap-4 px-5 pt-6 sm:flex-row sm:items-center sm:gap-8 sm:px-8">
          <Link href="/" aria-label="Back to AboutMe home" className="shrink-0">
            <Logo className="!text-[28px]" />
          </Link>

          {/* Static query field — clicking it returns you to the real one. */}
          <Link
            href="/"
            className="flex h-11 w-full max-w-[584px] items-center gap-3 rounded-3xl border border-hairline-light px-4 transition-shadow hover:shadow-google dark:border-hairline-dark dark:bg-field-dark dark:hover:shadow-google-dark"
          >
            <span className="min-w-0 flex-1 truncate text-[16px] text-ink-light dark:text-ink-dark">
              {query}
            </span>
            {/* Decorative inside the link — the query text is the name. */}
            <span className="flex shrink-0 items-center gap-3" aria-hidden="true">
              <MicIcon label="" role="presentation" className="h-6 w-6" />
              <CameraIcon label="" role="presentation" className="h-[22px] w-[22px]" />
              <SearchIcon label="" role="presentation" className="h-6 w-6 text-google-blue" />
            </span>
          </Link>
        </header>

        <nav
          aria-label="Portfolio sections"
          className="mt-4 flex gap-6 overflow-x-auto border-b border-hairline-light px-5 text-[13px] dark:border-[#3C4043] sm:px-8 md:pl-[178px]"
        >
          {TABS.map((tab) => {
            const isActive = tab.href === activeTab;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'whitespace-nowrap border-b-[3px] pb-2 pt-1',
                  isActive
                    ? 'border-google-blue font-medium text-google-blue'
                    : 'border-transparent text-muted-light hover:text-ink-light dark:text-muted-dark dark:hover:text-ink-dark',
                ].join(' ')}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <main className="px-5 pb-16 sm:px-8 md:pl-[178px]">
        {resultCount !== undefined && (
          <p className="py-4 text-[13px] text-muted-light dark:text-muted-dark">
            About {resultCount} result{resultCount === 1 ? '' : 's'} ({seconds} seconds)
          </p>
        )}
        <div className={`flex flex-col gap-8 ${resultCount === undefined ? 'pt-6' : ''}`}>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
