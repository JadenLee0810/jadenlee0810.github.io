import type { ResultEntry } from '@/lib/content';
import SiteIcon from './SiteIcon';

/**
 * One entry styled like a Google search result: favicon + breadcrumb row,
 * blue title link, snippet with optional bullets, sitelinks, and chips.
 */
export default function ResultCard({ entry }: { entry: ResultEntry }) {
  const {
    source,
    breadcrumb,
    title,
    href,
    meta,
    snippet,
    bullets,
    chips,
    links,
  } = entry;

  const titleClasses =
    'text-[20px] leading-[26px] text-serp-link-light dark:text-serp-link-dark';

  return (
    <article className="max-w-[600px]">
      <div className="mb-1 flex items-center gap-3">
        <SiteIcon entry={entry} />
        <div className="min-w-0 leading-tight">
          <div className="truncate text-[14px] text-ink-light dark:text-ink-dark">{source}</div>
          <div className="truncate text-[12px] text-muted-light dark:text-muted-dark">
            {breadcrumb}
          </div>
        </div>
      </div>

      {href ? (
        <a
          href={href}
          target={href.startsWith('/') || href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noreferrer"
          className={`${titleClasses} hover:underline`}
        >
          {title}
        </a>
      ) : (
        <span className={titleClasses}>{title}</span>
      )}

      <p className="mt-1 text-[14px] leading-[22px] text-serp-snippet-light dark:text-serp-snippet-dark">
        {meta && <span className="text-muted-light dark:text-muted-dark">{meta} </span>}
        {snippet}
      </p>

      {entry.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={entry.image.src}
          alt={entry.image.alt}
          className="mt-3 w-full rounded-xl border border-hairline-light dark:border-hairline-dark"
        />
      )}

      {bullets && bullets.length > 0 && (
        <ul className="mt-1 list-disc space-y-1 pl-5 text-[14px] leading-[22px] text-serp-snippet-light dark:text-serp-snippet-dark">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {links && links.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-5 text-[14px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-serp-link-light hover:underline dark:text-serp-link-dark"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {chips && chips.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-hairline-light px-3 py-1 text-[13px] text-ink-light dark:border-hairline-dark dark:text-ink-dark"
            >
              {chip}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
