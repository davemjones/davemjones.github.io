import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Me - Dave Jones',
  description:
    'Learn about Dave Jones, a passionate developer focused on creating elegant solutions.',
};

export default function AboutPage() {
  // Structured data for the person/developer
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dave Jones',
    jobTitle: 'Software Developer',
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
      'Web Development',
      'Software Engineering',
    ],
    description:
      'Passionate developer who loves building elegant solutions to complex problems.',
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
                  Welcome to my portfolio! I&apos;m a passionate developer who
                  loves building elegant solutions to complex problems. With a
                  focus on clean code and user experience, I strive to create
                  applications that are both powerful and intuitive.
                </p>
                <p className="text-[var(--vscode-text-secondary)] leading-relaxed">
                  This site showcases my professional journey, side projects,
                  and the amazing developers who inspire me to keep learning and
                  growing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
            <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-3 font-mono">
              <span className="text-[var(--vscode-text-disabled)]">{'//'}</span>{' '}
              Quick Facts
            </h2>
            <ul className="space-y-2 text-[var(--vscode-text-primary)]">
              <li className="flex items-start">
                <span className="text-[var(--vscode-teal)] mr-2">→</span>
                Full-stack developer with modern web technologies
              </li>
              <li className="flex items-start">
                <span className="text-[var(--vscode-teal)] mr-2">→</span>
                Passionate about clean code and best practices
              </li>
              <li className="flex items-start">
                <span className="text-[var(--vscode-teal)] mr-2">→</span>
                Always learning and exploring new technologies
              </li>
              <li className="flex items-start">
                <span className="text-[var(--vscode-teal)] mr-2">→</span>
                Open source contributor and community advocate
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
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Python',
                'Docker',
                'AWS',
                'Git',
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
        </section>
      </div>
    </>
  );
}
