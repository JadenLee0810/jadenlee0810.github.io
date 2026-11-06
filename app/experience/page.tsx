import type { Metadata } from 'next';
import ResultCard from '@/components/ResultCard';
import SerpShell from '@/components/SerpShell';
import { experience } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Jaden Lee Experience — AboutMe',
  description:
    'Work experience: Data Engineering Intern at Legali AI, Founder of Lyrn AI, Research Intern at NASA SEES.',
};

export default function ExperiencePage() {
  return (
    <SerpShell
      query="Jaden Lee Work Experience"
      activeTab="/experience"
      resultCount={experience.length}
    >
      {experience.map((entry) => (
        <ResultCard key={entry.id} entry={entry} />
      ))}
    </SerpShell>
  );
}
