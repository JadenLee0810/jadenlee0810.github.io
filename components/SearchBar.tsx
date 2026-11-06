'use client';

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';
import SearchDropdown from './SearchDropdown';
import { CameraIcon, MicIcon, PlusIcon } from './icons';
import { searchData, searchTargets } from '@/lib/searchData';

export default function SearchBar() {
  const router = useRouter();
  const rawId = useId();
  const listboxId = `${rawId}-listbox`;
  const optionId = useCallback((itemId: string) => `${rawId}-option-${itemId}`, [rawId]);

  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  // Escape suppresses the panel until the pointer/focus leaves and returns.
  const [isDismissed, setIsDismissed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const isOpen = (isHovered || isFocused) && !isDismissed;

  // Re-arm Escape once the user has fully left the control.
  useEffect(() => {
    if (!isHovered && !isFocused) setIsDismissed(false);
  }, [isHovered, isFocused]);

  // Never leave a stale highlight behind a closed panel.
  useEffect(() => {
    if (!isOpen) setActiveIndex(-1);
  }, [isOpen]);

  const go = useCallback(
    (url: string) => {
      setIsHovered(false);
      setIsFocused(false);
      router.push(url);
    },
    [router],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        if (!isOpen) {
          setIsDismissed(false);
          setActiveIndex(0);
          return;
        }
        setActiveIndex((index) => (index + 1) % searchTargets.length);
        return;
      }
      case 'ArrowUp': {
        event.preventDefault();
        if (!isOpen) {
          setIsDismissed(false);
          setActiveIndex(searchTargets.length - 1);
          return;
        }
        setActiveIndex((index) => (index <= 0 ? searchTargets.length - 1 : index - 1));
        return;
      }
      case 'Enter': {
        if (activeIndex >= 0 && searchTargets[activeIndex]) {
          event.preventDefault();
          go(searchTargets[activeIndex].url);
        }
        return;
      }
      case 'Escape': {
        event.preventDefault();
        setIsDismissed(true);
        setActiveIndex(-1);
        return;
      }
      default:
    }
  };

  const handleSearchMe = () => {
    if (activeIndex >= 0 && searchTargets[activeIndex]) {
      go(searchTargets[activeIndex].url);
      return;
    }
    const needle = query.trim().toLowerCase();
    const match = needle
      ? searchTargets.find((target) => target.text.toLowerCase().includes(needle))
      : undefined;
    go((match ?? searchTargets[0]).url);
  };

  const handleFeelingLucky = () => {
    const pick = searchTargets[Math.floor(Math.random() * searchTargets.length)];
    go(pick.url);
  };

  const activeTarget = activeIndex >= 0 ? searchTargets[activeIndex] : undefined;

  return (
    <div className="w-full max-w-[584px]">
      {/*
        Spacer keeps the 44px field in normal flow so the buttons below never
        shift. The real control is absolutely positioned on top of it and grows
        downward — exactly how Google's suggestion box overlays the page.
      */}
      <div className="relative h-11 w-full">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={(event) => {
            // Only close when focus actually leaves the whole control.
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsFocused(false);
            }
          }}
          className={[
            'absolute inset-x-0 top-0 z-20 overflow-hidden rounded-3xl',
            'bg-field-light dark:bg-field-dark',
            'transition-shadow duration-100',
            // One shadow on the shared wrapper => searchbar and dropdown read
            // as a single floating surface.
            isOpen ? 'shadow-google dark:shadow-google-dark' : 'shadow-none',
          ].join(' ')}
        >
          <div
            className={[
              'flex h-11 w-full items-center gap-3 rounded-3xl border px-4',
              // No transition on border-radius: the bottom corners must square
              // off instantly, in lockstep with the dropdown appearing.
              isOpen
                ? 'rounded-b-none border-transparent'
                : 'border-hairline-light dark:border-hairline-dark',
            ].join(' ')}
          >
            <button
              type="button"
              aria-label="Add to search"
              className="shrink-0 rounded-full p-1 text-[#9AA0A6] outline-none transition-colors hover:bg-row-light focus-visible:ring-2 focus-visible:ring-google-blue dark:hover:bg-row-dark"
            >
              <PlusIcon label="Add to search" className="h-5 w-5" />
            </button>

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Hover me"
              autoComplete="off"
              spellCheck={false}
              role="combobox"
              aria-expanded={isOpen}
              aria-controls={listboxId}
              aria-autocomplete="list"
              aria-label="Search this portfolio"
              aria-activedescendant={activeTarget ? optionId(activeTarget.id) : undefined}
              className="h-full min-w-0 flex-1 bg-transparent text-[16px] text-ink-light outline-none placeholder:text-muted-light dark:text-ink-dark dark:placeholder:text-muted-dark"
            />

            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                aria-label="Search by voice"
                className="rounded-full p-1 outline-none transition-colors hover:bg-row-light focus-visible:ring-2 focus-visible:ring-google-blue dark:hover:bg-row-dark"
              >
                <MicIcon label="Search by voice" className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Search by image"
                className="rounded-full p-1 outline-none transition-colors hover:bg-row-light focus-visible:ring-2 focus-visible:ring-google-blue dark:hover:bg-row-dark"
              >
                <CameraIcon label="Search by image" className="h-[22px] w-[22px]" />
              </button>
            </div>
          </div>

          <SearchDropdown
            open={isOpen}
            items={searchData}
            targets={searchTargets}
            activeIndex={activeIndex}
            onActiveIndexChange={setActiveIndex}
            listboxId={listboxId}
            optionId={optionId}
          />
        </div>
      </div>

      <div className="mt-[29px] flex items-center justify-center gap-3">
        <GoogleButton onClick={handleSearchMe}>Search Me</GoogleButton>
        <GoogleButton onClick={handleFeelingLucky}>I&apos;m Feeling Lucky</GoogleButton>
      </div>
    </div>
  );
}

function GoogleButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'h-9 rounded border px-4 text-[14px] leading-[27px]',
        'border-[#F8F9FA] bg-[#F8F9FA] text-[#3C4043]',
        'hover:border-[#DADCE0] hover:shadow-google-btn hover:text-[#202124]',
        'focus-visible:border-google-blue focus-visible:outline-none',
        'dark:border-[#303134] dark:bg-[#303134] dark:text-[#E8EAED]',
        'dark:hover:border-[#5F6368] dark:hover:text-[#E8EAED]',
        'transition-[border-color,box-shadow,color] duration-100',
      ].join(' ')}
    >
      {children}
    </button>
  );
}
