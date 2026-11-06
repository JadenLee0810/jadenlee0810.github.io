import type { Metadata } from 'next';
import ResultCard from '@/components/ResultCard';
import SerpShell from '@/components/SerpShell';
import { education } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Jaden Lee Education — AboutMe',
  description:
    'UC Berkeley — B.A. Statistics (CS Concentration) and B.A. Applied Mathematics (Economics Concentration), Class of 2028.',
};

export default function EducationPage() {
  return (
    <SerpShell query="Jaden Lee Education" activeTab="/education" resultCount={education.length}>
      {education.map((entry) => (
        <ResultCard key={entry.id} entry={entry} />
      ))}
    </SerpShell>
  );
}
