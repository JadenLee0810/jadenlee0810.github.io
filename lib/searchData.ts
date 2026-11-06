export type SearchRichResult = {
  id: string;
  type: 'rich-result';
  name: string;
  subtitle: string;
  imageUrl: string;
  url: string;
};

export type SearchLink = {
  id: string;
  type: 'link';
  text: string;
  url: string;
};

export type SearchItem = SearchRichResult | SearchLink;

/** A row the keyboard can land on and Enter can follow. */
export type SearchTarget = {
  id: string;
  url: string;
  /** Flattened label — what free-text queries are matched against. */
  text: string;
};

export const searchData: SearchItem[] = [
  {
    id: 'profile',
    type: 'rich-result',
    name: 'Jaden Lee',
    subtitle: 'Statistics & Applied Math at UC Berkeley · Founder of Lyrn AI',
    imageUrl: '/headshot.jpg',
    url: '/about',
  },
  { id: 'edu', type: 'link', text: 'Jaden Lee Education', url: '/education' },
  {
    id: 'exp',
    type: 'link',
    text: 'Jaden Lee Work Experience (Legali AI, Lyrn AI, NASA)',
    url: '/experience',
  },
  {
    id: 'proj',
    type: 'link',
    text: 'Jaden Lee Projects (SafePics, Vigil AI, BeWear)',
    url: '/projects',
  },
  { id: 'socials', type: 'link', text: 'Jaden Lee Socials', url: '/socials' },
  { id: 'resume', type: 'link', text: 'Jaden Lee Resume', url: '/resume' },
];

/** Narrowing helpers so consumers stay type-safe without repeated casts. */
export const isLink = (item: SearchItem): item is SearchLink => item.type === 'link';
export const isRichResult = (item: SearchItem): item is SearchRichResult =>
  item.type === 'rich-result';

/**
 * Every navigable row, in visual order — the keyboard traversal order. The rich
 * result leads, so ArrowDown lands on the profile first, exactly like Google.
 */
export const searchTargets: SearchTarget[] = searchData.map((item) =>
  isRichResult(item)
    ? { id: item.id, url: item.url, text: `${item.name} — ${item.subtitle}` }
    : { id: item.id, url: item.url, text: item.text },
);
