import type { Metadata } from 'next';
import ResultCard from '@/components/ResultCard';
import SerpShell from '@/components/SerpShell';
import { socials } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Jaden Lee Socials — AboutMe',
  description: 'Connect with Jaden Lee on LinkedIn, GitHub, or by email.',
};

export default function SocialsPage() {
  return (
    <SerpShell query="Jaden Lee Socials" activeTab="/socials" resultCount={socials.length}>
      {socials.map((entry) => (
        <ResultCard key={entry.id} entry={entry} />
      ))}
    </SerpShell>
  );
}
