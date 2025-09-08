import { Metadata } from 'next';
import experienceData from './experience.json';
import BaseCard from '@/components/ui/BaseCard';
import TechTag from '@/components/ui/TechTag';
import CodeHeader from '@/components/ui/CodeHeader';
import BulletList from '@/components/ui/BulletList';

export const metadata: Metadata = {
  title: 'Experience - Dave Jones',
  description: 'Professional experience and career journey of Dave Jones.',
};

export default function ExperiencePage() {
  return (
    <div className="animate-fade-in">
      <section className="mb-8">
        <CodeHeader
          syntax={[
            { text: 'function', color: 'teal' },
            { text: ' ', color: 'text-primary' },
            { text: 'getExperience', color: 'blue' },
            { text: '()', color: 'text-primary' },
            { text: ' ', color: 'text-primary' },
            { text: '{', color: 'text-primary' },
          ]}
        />

        <BaseCard className="mb-6" hover={false}>
          <p className="text-[var(--vscode-text-primary)] leading-relaxed">
            Over 15 years of professional experience building mission-critical
            applications for government and enterprise clients. From Air Force
            systems to defense contractor solutions, here&apos;s my career
            journey.
          </p>
        </BaseCard>
      </section>

      <section className="space-y-6">
        {experienceData.map((job, index) => (
          <BaseCard key={index}>
            <div className="flex justify-between items-start mb-3">
              <CodeHeader level="h2" className="mb-0">
                {job.jobTitle}
              </CodeHeader>
              <span className="text-[var(--vscode-text-disabled)] text-sm font-mono">
                {job.startDate} - {job.endDate}
              </span>
            </div>
            <h3 className="text-[var(--vscode-blue)] mb-2 font-mono">
              {job.company}
            </h3>
            <p className="text-[var(--vscode-text-secondary)] text-sm mb-4 font-mono">
              {job.location}
            </p>
            <BulletList
              items={job.accomplishments}
              bulletStyle="check"
              className="mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </div>
          </BaseCard>
        ))}
      </section>

      <div className="mt-8 text-[var(--vscode-text-primary)] font-mono">
        <span className="text-[var(--vscode-text-primary)]">{'}'}</span>
      </div>
    </div>
  );
}
