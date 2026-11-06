import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { label: string };

/**
 * Every icon takes an explicit `label` and renders as role="img" so screen
 * readers announce it. `role` is required alongside aria-label — an <svg>
 * without it is not mapped to an image role in all AT/browser pairs.
 */

export function PlusIcon({ label, className, ...rest }: IconProps) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={className}
      {...rest}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function SearchIcon({ label, className, ...rest }: IconProps) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...rest}
    >
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
}

/** Google's four-colour voice-search microphone. */
export function MicIcon({ label, className, ...rest }: IconProps) {
  return (
    <svg role="img" aria-label={label} viewBox="0 0 24 24" className={className} {...rest}>
      <path
        fill="#4285F4"
        d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z"
      />
      <path fill="#34A853" d="M11 18.08h2V22h-2z" />
      <path
        fill="#FBBC05"
        d="M7.05 16.87A6.94 6.94 0 0 1 5 12h2c0 1.45.56 2.42 1.47 3.38l-1.42 1.49z"
      />
      <path
        fill="#EA4335"
        d="M12 16.93a4.97 4.97 0 0 1-3.53-1.55l-1.42 1.49A6.94 6.94 0 0 0 12 18.92v-1.99z"
      />
      <path
        fill="#4285F4"
        d="M12 16.93v1.99a6.94 6.94 0 0 0 4.95-2.05l-1.42-1.49A4.97 4.97 0 0 1 12 16.93z"
      />
      <path
        fill="#EA4335"
        d="M19 12a6.94 6.94 0 0 1-2.05 4.87l-1.42-1.49C16.44 14.42 17 13.45 17 12h2z"
      />
    </svg>
  );
}

/** Google Lens ("search by image") camera glyph. */
export function CameraIcon({ label, className, ...rest }: IconProps) {
  return (
    <svg role="img" aria-label={label} viewBox="0 0 192 192" className={className} {...rest}>
      <circle cx="144.07" cy="144" r="16" fill="#34A853" />
      <circle cx="96.07" cy="104" r="24" fill="#4285F4" />
      <path
        fill="#EA4335"
        d="M24 135.2c0 18.11 14.69 32.8 32.8 32.8H96v-16l-40.1-.1c-8.8 0-15.9-8.19-15.9-17.9v-18H24v19.2z"
      />
      <path
        fill="#FBBC05"
        d="M168 72h16V56.8c0-18.11-14.69-32.8-32.8-32.8H136v16h15.2c9.71 0 16.8 7.1 16.8 16.8V72z"
      />
      <path
        fill="#4285F4"
        d="M112 24H80L69.6 40H56.8C38.69 40 24 54.69 24 72.8V112h16V72.8c0-9.71 7.1-16.8 16.8-16.8h81.6c.11 0 .2-.09.2-.2V40h-16L112 24z"
      />
      <path
        fill="#34A853"
        d="M168 112v22.1c0 9.71-7.1 17.9-16.8 17.9H136v16h15.2c18.11 0 32.8-14.69 32.8-32.8V112h-16z"
      />
    </svg>
  );
}

export function AppsGridIcon({ label, className, ...rest }: IconProps) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...rest}
    >
      <path d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
}

/** Material "location_on" pin — the glyph Google puts beside its footer city. */
export function LocationIcon({ label, className, ...rest }: IconProps) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...rest}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}
