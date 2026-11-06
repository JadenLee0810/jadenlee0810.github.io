import Link from 'next/link';
import { AppsGridIcon } from './icons';

const NAV_LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
];

export default function TopNav() {
  return (
    <header className="flex w-full items-center justify-end gap-5 px-5 py-[6px] text-[13px]">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="underline-offset-2 hover:underline text-ink-light dark:text-ink-dark"
        >
          {link.label}
        </Link>
      ))}

      <button
        type="button"
        aria-label="Portfolio sections"
        className="rounded-full p-2 transition-colors hover:bg-row-light dark:hover:bg-row-dark"
      >
        <AppsGridIcon
          label="Portfolio sections"
          className="h-6 w-6 text-[#5F6368] dark:text-[#E8EAED]"
        />
      </button>

      <Link
        href="/socials"
        className="rounded bg-google-blue px-6 py-[9px] text-[14px] font-medium text-white transition-shadow hover:shadow-google-btn"
      >
        Connect
      </Link>
    </header>
  );
}
