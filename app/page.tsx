import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import Image from 'next/image';

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
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--vscode-text-primary)] mb-4 font-mono">
            <span className="text-[var(--vscode-teal)]">const</span>{' '}
            <span className="text-[var(--vscode-blue)]">developer</span>{' '}
            <span className="text-[var(--vscode-text-primary)]">=</span>{' '}
            <span className="text-[var(--vscode-orange)]">{`"Dave Jones"`}</span>
            ;
          </h1>

          <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 mb-6">
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
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
            <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-3 font-mono">
              <span className="text-[var(--vscode-text-disabled)]">{'//'}</span>{' '}
              Quick Facts
            </h2>
            <ul className="space-y-2 text-[var(--vscode-text-primary)]">
              <li className="flex items-start">
                <span className="text-[var(--vscode-teal)] mr-2">→</span>
                Senior software engineer with Air Force and defense contractor
                background
              </li>
              <li className="flex items-start">
                <span className="text-[var(--vscode-teal)] mr-2">→</span>
                Technical lead with experience stepping into management roles
                when needed
              </li>
              <li className="flex items-start">
                <span className="text-[var(--vscode-teal)] mr-2">→</span>
                Security-focused developer with CSSLP certification and
                compliance expertise
              </li>
              <li className="flex items-start">
                <span className="text-[var(--vscode-teal)] mr-2">→</span>
                Introduced AI integration to development team and presented at
                government tech conference
              </li>
            </ul>
          </div>

          <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
            <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-3 font-mono">
              <span className="text-[var(--vscode-text-disabled)]">{'//'}</span>{' '}
              Tech Stack
            </h2>
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
                <span
                  key={tech}
                  className="px-3 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-sm text-[var(--vscode-text-primary)] hover:border-[var(--vscode-teal)] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
            <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-3 font-mono">
              <span className="text-[var(--vscode-text-disabled)]">{'//'}</span>{' '}
              Certifications
            </h2>
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
          </div>
        </section>
      </div>
    </>
  );
}
