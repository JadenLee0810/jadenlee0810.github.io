/**
 * The classic Google wordmark colour sequence. "AboutMe" is 7 glyphs and the
 * sequence is 6 long, so we wrap with a modulo — the 7th letter restarts at
 * blue, exactly how Google extends the palette on longer wordmarks.
 */
const GOOGLE_LETTER_COLORS = [
  '#4285F4', // blue
  '#EA4335', // red
  '#FBBC05', // yellow
  '#4285F4', // blue
  '#34A853', // green
  '#EA4335', // red
] as const;

type LogoProps = {
  /** Wordmark text. Colours cycle automatically for any length. */
  text?: string;
  className?: string;
};

export default function Logo({ text = 'AboutMe', className = '' }: LogoProps) {
  return (
    // The <h1> carries the accessible name; the per-letter spans are hidden
    // from AT so the wordmark isn't spelled out one character at a time.
    <h1
      aria-label={text}
      className={[
        'select-none font-logo font-medium leading-none',
        'text-[56px] tracking-[-0.02em] sm:text-[76px] md:text-[92px]',
        className,
      ].join(' ')}
    >
      {Array.from(text).map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          aria-hidden="true"
          style={{ color: GOOGLE_LETTER_COLORS[index % GOOGLE_LETTER_COLORS.length] }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
}
