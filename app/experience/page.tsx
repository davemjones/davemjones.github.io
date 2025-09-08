import { Metadata } from 'next';
import experienceData from './experience.json';

export const metadata: Metadata = {
  title: 'Experience - Dave Jones',
  description: 'Professional experience and career journey of Dave Jones.',
};

export default function ExperiencePage() {
  return (
    <div className="animate-fade-in">
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--vscode-text-primary)] mb-4 font-mono">
          <span className="text-[var(--vscode-teal)]">function</span>{' '}
          <span className="text-[var(--vscode-blue)]">getExperience</span>
          <span className="text-[var(--vscode-text-primary)]">()</span>{' '}
          <span className="text-[var(--vscode-text-primary)]">{'{'}</span>
        </h1>

        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 mb-6">
          <p className="text-[var(--vscode-text-primary)] leading-relaxed">
            Over 15 years of professional experience building mission-critical
            applications for government and enterprise clients. From Air Force
            systems to defense contractor solutions, here&apos;s my career
            journey.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        {experienceData.map((job, index) => (
          <div
            key={index}
            className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-semibold text-[var(--vscode-blue)] font-mono">
                {job.jobTitle}
              </h2>
              <span className="text-[var(--vscode-text-disabled)] text-sm font-mono">
                {job.startDate} - {job.endDate}
              </span>
            </div>
            <h3 className="text-[var(--vscode-teal)] mb-2 font-mono">
              {job.company}
            </h3>
            <p className="text-[var(--vscode-text-secondary)] text-sm mb-4 font-mono">
              {job.location}
            </p>
            <ul className="space-y-2 text-[var(--vscode-text-primary)] mb-4">
              {job.accomplishments.map((accomplishment, accIndex) => (
                <li key={accIndex} className="flex items-start">
                  <span className="text-[var(--vscode-green)] mr-2">✓</span>
                  {accomplishment}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-xs text-[var(--vscode-text-secondary)] hover:border-[var(--vscode-teal)] transition-colors font-mono"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="mt-8 text-[var(--vscode-text-primary)] font-mono">
        <span className="text-[var(--vscode-text-primary)]">{'}'}</span>
      </div>
    </div>
  );
}
