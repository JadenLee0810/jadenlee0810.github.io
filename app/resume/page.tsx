import type { Metadata } from 'next';
import ResultCard from '@/components/ResultCard';
import SerpShell from '@/components/SerpShell';
import { profile, skills } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Jaden Lee Resume — AboutMe',
  description: 'Resume of Jaden Lee — view in the browser or download the PDF.',
};

export default function ResumePage() {
  return (
    <SerpShell query="Jaden Lee Resume" activeTab="/resume" resultCount={1}>
      <ResultCard
        entry={{
          id: 'resume-pdf',
          source: 'AboutMe',
          breadcrumb: 'https://aboutme › resume.pdf',
          title: 'Jaden J. Lee — Resume (PDF)',
          href: profile.resumePdf,
          snippet:
            'One page: UC Berkeley Statistics & Applied Mathematics, Legali AI, Lyrn AI, NASA SEES, and projects. Click the title to open, or browse it below.',
          icon: 'pdf',
        }}
      />

      <object
        data={profile.resumePdf}
        type="application/pdf"
        aria-label="Embedded resume PDF"
        className="h-[75dvh] min-h-[480px] w-full max-w-[820px] rounded-lg border border-hairline-light dark:border-hairline-dark"
      >
        <p className="p-4 text-[14px] text-serp-snippet-light dark:text-serp-snippet-dark">
          Your browser can&apos;t display PDFs inline —{' '}
          <a
            href={profile.resumePdf}
            className="text-serp-link-light hover:underline dark:text-serp-link-dark"
          >
            download the resume
          </a>{' '}
          instead.
        </p>
      </object>
      <section aria-label="Skills" className="max-w-[600px]">
        <h2 className="mb-2 text-[16px] font-medium text-ink-light dark:text-ink-dark">Skills</h2>
        <div className="flex flex-col gap-3">
          {skills.map((group) => (
            <div key={group.label}>
              <p className="mb-1 text-[13px] text-muted-light dark:text-muted-dark">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-hairline-light px-3 py-1 text-[13px] text-ink-light dark:border-hairline-dark dark:text-ink-dark"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-full border border-dashed border-hairline-light px-3 py-1 text-[13px] italic text-muted-light dark:border-hairline-dark dark:text-muted-dark">
                  and more…
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SerpShell>
  );
}
