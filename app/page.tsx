import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import Image from 'next/image';
import BaseCard from '@/components/ui/BaseCard';
import TechTag from '@/components/ui/TechTag';
import CodeHeader from '@/components/ui/CodeHeader';
import BulletList from '@/components/ui/BulletList';

export const metadata: Metadata = {
  title: 'Senior Software Engineer - Dave Jones',
  description:
    'Senior software engineer with 15+ years experience building mission-critical applications for Air Force and defense contractors. Expertise in full-stack development, security, and AI integration.',
};

export default function AboutPage() {
  // Structured data for the person/developer
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dave Jones',
    jobTitle: 'Senior Software Engineer',
    url: 'https://davemjones.github.io',
    sameAs: [
      'https://github.com/davemjones',
      'https://linkedin.com/in/davemjones',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'Java',
      'Spring Framework',
      '.NET',
      'Oracle',
      'SQL',
      'Azure DevOps',
      'Software Security',
      'CSSLP',
      'Government Systems',
      'Defense Contracting',
      'AI Integration',
      'Legacy System Modernization',
      'Web Development',
      'Software Engineering',
    ],
    description:
      'Senior software engineer with 15+ years experience building mission-critical applications for Air Force and defense contractors, specializing in security-focused development and AI integration.',
  };

  return (
    <>
      <JsonLd data={personSchema} />
      <div className="animate-fade-in">
        <section className="mb-8">
          <CodeHeader
            syntax={[
              { text: 'const', color: 'teal' },
              { text: ' ', color: 'text-primary' },
              { text: 'developer', color: 'blue' },
              { text: ' = ', color: 'text-primary' },
              { text: '"Dave Jones"', color: 'orange' },
              { text: ';', color: 'text-primary' },
            ]}
          />

          <BaseCard className="mb-6" hover={false}>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[var(--vscode-border-light)] hover:border-[var(--vscode-blue)] transition-colors overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Dave Jones - Software Developer"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[var(--vscode-text-primary)] leading-relaxed mb-4">
                  An accomplished software engineer with 15+ years of experience
                  building mission-critical applications for government and
                  enterprise clients. Expertise spans full-stack development,
                  legacy system modernization, and secure software practices,
                  with a proven track record of leading teams and delivering
                  high-stakes solutions for Air Force operations and defense
                  contractors.
                </p>
                <p className="text-[var(--vscode-text-secondary)] leading-relaxed">
                  Currently maintaining Air Force promotion systems for the DoD,
                  while leading AI integration initiatives within the
                  development team. Background includes work in cybersecurity,
                  network defense analysis, and compliance frameworks, bringing
                  a unique perspective to modern software development
                  challenges.
                </p>
              </div>
            </div>
          </BaseCard>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BaseCard>
            <CodeHeader
              level="h2"
              syntax={[
                { text: '//', color: 'text-disabled' },
                { text: ' Quick Facts', color: 'text-primary' },
              ]}
              className="mb-3"
            />
            <BulletList
              items={[
                'Senior software engineer with Air Force and defense contractor background',
                'Technical lead with experience stepping into management roles when needed',
                'Security-focused developer with CSSLP certification and compliance expertise',
                'Introduced AI integration to development team and presented at government tech conference',
              ]}
              bulletStyle="arrow"
            />
          </BaseCard>

          <BaseCard>
            <CodeHeader
              level="h2"
              syntax={[
                { text: '//', color: 'text-disabled' },
                { text: ' Tech Stack', color: 'text-primary' },
              ]}
              className="mb-3"
            />
            <div className="flex flex-wrap gap-2">
              {[
                'React/Redux',
                'TypeScript',
                'JavaScript',
                'Java',
                'Spring',
                '.NET',
                'Oracle',
                'SQL',
                'Node.js',
                'Python',
                'Azure DevOps',
                'Checkmarx',
                'Git',
                'Docker',
                'AWS',
              ].map((tech) => (
                <TechTag key={tech} variant="hover" size="md">
                  {tech}
                </TechTag>
              ))}
            </div>
          </BaseCard>

          <BaseCard>
            <CodeHeader
              level="h2"
              syntax={[
                { text: '//', color: 'text-disabled' },
                { text: ' Certifications', color: 'text-primary' },
              ]}
              className="mb-3"
            />
            <div className="space-y-3">
              <div className="border-l-2 border-[var(--vscode-teal)] pl-4">
                <h3 className="text-[var(--vscode-text-primary)] font-semibold">
                  CSSLP
                </h3>
                <p className="text-[var(--vscode-text-secondary)] text-sm">
                  Certified Secure Software Lifecycle Professional
                </p>
                <p className="text-[var(--vscode-text-disabled)] text-xs mt-1">
                  2017 - Present
                </p>
                <p className="text-[var(--vscode-text-disabled)] text-xs">
                  ISC² Member ID: 367144
                </p>
              </div>
            </div>
          </BaseCard>
        </section>
      </div>
    </>
  );
}
