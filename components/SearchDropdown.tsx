'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { SearchIcon } from './icons';
import {
  isRichResult,
  type SearchItem,
  type SearchLink,
  type SearchRichResult,
  type SearchTarget,
} from '@/lib/searchData';

type SearchDropdownProps = {
  open: boolean;
  items: SearchItem[];
  /** Navigable rows in traversal order — index space for `activeIndex`. */
  targets: SearchTarget[];
  /** -1 when nothing is highlighted. */
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  listboxId: string;
  optionId: (itemId: string) => string;
};

export default function SearchDropdown({
  open,
  items,
  targets,
  activeIndex,
  onActiveIndexChange,
  listboxId,
  optionId,
}: SearchDropdownProps) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="search-dropdown"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
          // Height animates from 0 -> auto, so the content must be clipped
          // while it grows.
          style={{ overflow: 'hidden' }}
        >
          <ul id={listboxId} role="listbox" aria-label="Portfolio suggestions" className="pb-2">
            {items.map((item) => {
              const targetIndex = targets.findIndex((target) => target.id === item.id);
              const isActive = targetIndex === activeIndex;

              return (
                <li
                  key={item.id}
                  id={optionId(item.id)}
                  role="option"
                  aria-selected={isActive}
                  onMouseEnter={() => onActiveIndexChange(targetIndex)}
                  onMouseLeave={() => onActiveIndexChange(-1)}
                >
                  <Link
                    href={item.url}
                    // Focus stays in the input so aria-activedescendant drives
                    // the a11y story; the row is still mouse-clickable.
                    tabIndex={-1}
                    className={[
                      // Every row shares one gutter and one padding rhythm, so
                      // the rich result reads as part of the list rather than a
                      // section above it.
                      'flex w-full items-center gap-3 px-4 py-[6px] outline-none',
                      isActive
                        ? 'bg-row-light dark:bg-row-dark'
                        : 'hover:bg-row-light dark:hover:bg-row-dark',
                    ].join(' ')}
                  >
                    {isRichResult(item) ? (
                      <RichResultRow item={item} />
                    ) : (
                      <LinkRow item={item} />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Leading slot — fixed width so icons and thumbnails share a text baseline. */
function Gutter({ children }: { children: React.ReactNode }) {
  return <div className="flex w-10 shrink-0 items-center justify-center">{children}</div>;
}

function LinkRow({ item }: { item: SearchLink }) {
  return (
    <>
      <Gutter>
        <SearchIcon
          label="Search"
          className="h-[18px] w-[18px] text-[#9AA0A6] dark:text-[#9AA0A6]"
        />
      </Gutter>
      <span className="truncate text-[16px] leading-[24px] text-ink-light dark:text-ink-dark">
        {item.text}
      </span>
    </>
  );
}

function RichResultRow({ item }: { item: SearchRichResult }) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = item.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <>
      <Gutter>
        <div className="relative h-10 w-10 overflow-hidden rounded-[4px] bg-[#E8EAED] dark:bg-[#3C4043]">
          {imageFailed ? (
            <span className="flex h-full w-full items-center justify-center text-[13px] font-medium text-muted-light dark:text-muted-dark">
              {initials}
            </span>
          ) : (
            <Image
              src={item.imageUrl}
              alt={`Portrait of ${item.name}`}
              fill
              sizes="40px"
              className="object-cover"
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
      </Gutter>

      <div className="min-w-0">
        <p className="truncate text-[16px] leading-[22px] text-ink-light dark:text-ink-dark">
          {item.name}
        </p>
        {item.subtitle && (
          <p className="truncate text-[13px] leading-[18px] text-muted-light dark:text-muted-dark">
            {item.subtitle}
          </p>
        )}
      </div>
    </>
  );
}
