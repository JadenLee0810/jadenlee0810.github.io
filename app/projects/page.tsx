import type { Metadata } from 'next';
import ResultCard from '@/components/ResultCard';
import SerpShell from '@/components/SerpShell';
import { projects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Jaden Lee Projects — AboutMe',
  description:
    'Projects: SafePics (post-quantum image editing), Vigil AI (patient monitoring OS), BeWear (ethical fashion AI).',
};

export default function ProjectsPage() {
  return (
    <SerpShell query="Jaden Lee Projects" activeTab="/projects" resultCount={projects.length}>
      {projects.map((entry) => (
        <ResultCard key={entry.id} entry={entry} />
      ))}
    </SerpShell>
  );
}
