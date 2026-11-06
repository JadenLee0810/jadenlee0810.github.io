import type { ResultEntry } from '@/lib/content';

type BrandIcon = NonNullable<ResultEntry['icon']>;

/** Brand marks drawn inline so no external image requests are needed. */
function Mark({ icon }: { icon: BrandIcon }) {
  switch (icon) {
    case 'github':
      return (
        <svg viewBox="0 0 16 16" className="h-[62%] w-[62%]" fill="#24292F">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 16 16" className="h-[62%] w-[62%]">
          <rect width="16" height="16" rx="2.5" fill="#0A66C2" />
          <path
            fill="#fff"
            d="M3.6 6.3h1.9V12H3.6zM4.55 3.4a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2zM6.7 6.3h1.8v.8c.3-.5.9-.95 1.9-.95 1.9 0 2.3 1.25 2.3 2.9V12h-1.9V9.4c0-.6 0-1.4-.85-1.4s-1 .65-1 1.35V12H6.7z"
          />
        </svg>
      );
    case 'gmail':
      return (
        <svg viewBox="0 0 24 24" className="h-[62%] w-[62%]">
          <path fill="#4285F4" d="M2 6.8V18c0 1.1.9 2 2 2h3.2v-9.6z" />
          <path fill="#34A853" d="M16.8 20H20c1.1 0 2-.9 2-2V6.8l-5.2 3.6z" />
          <path
            fill="#EA4335"
            d="M2 6.8V6c0-1.8 2-2.8 3.5-1.7L12 8.8l6.5-4.5C20 3.2 22 4.2 22 6v.8l-10 6.9z"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" className="h-[62%] w-[62%]">
          <defs>
            <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#FEDA77" />
              <stop offset=".35" stopColor="#F58529" />
              <stop offset=".6" stopColor="#DD2A7B" />
              <stop offset="1" stopColor="#515BD4" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)" />
          <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
        </svg>
      );
    case 'pdf':
      return (
        <svg viewBox="0 0 16 16" className="h-[62%] w-[62%]">
          <path fill="#EA4335" d="M3 1h6.5L13 4.5V14a1 1 0 01-1 1H3a1 1 0 01-1-1V2a1 1 0 011-1z" />
          <path fill="#fff" fillOpacity=".45" d="M9.5 1L13 4.5H10.5a1 1 0 01-1-1z" />
          <text x="7.5" y="12" fontSize="4.2" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily="Arial, sans-serif">
            PDF
          </text>
        </svg>
      );
  }
}

/**
 * Google-style result favicon: a white circle with a hairline border holding
 * the site's mark. Entries without a brand mark keep their colored letter.
 */
export default function SiteIcon({
  entry,
  size = 26,
}: {
  entry: Pick<ResultEntry, 'icon' | 'iconSrc' | 'favicon' | 'faviconClass' | 'source'>;
  size?: number;
}) {
  const { icon, iconSrc, favicon, source, faviconClass = 'bg-[#F1F3F4] text-muted-light dark:bg-[#3C4043] dark:text-muted-dark' } = entry;
  const style = { width: size, height: size };
  const base =
    'flex shrink-0 items-center justify-center rounded-full border border-hairline-light dark:border-hairline-dark';

  if (iconSrc) {
    return (
      <span aria-hidden="true" style={style} className={`${base} overflow-hidden bg-white`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconSrc} alt="" className="h-[62%] w-[62%] object-contain" />
      </span>
    );
  }

  if (icon) {
    return (
      <span aria-hidden="true" style={style} className={`${base} bg-white`}>
        <Mark icon={icon} />
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      style={{ ...style, fontSize: Math.round(size * 0.46) }}
      className={`${base} font-medium ${faviconClass}`}
    >
      {favicon ?? source[0]}
    </span>
  );
}
