import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience - Dave M. Jones',
  description: 'Professional experience and career journey of Dave M. Jones.',
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
            My professional journey has been focused on building scalable,
            maintainable solutions that solve real-world problems. Here&apos;s a
            timeline of my career progression and key achievements.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        {/* Example Experience Entry 1 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-semibold text-[var(--vscode-blue)] font-mono">
              Senior Software Engineer
            </h2>
            <span className="text-[var(--vscode-text-disabled)] text-sm font-mono">
              2022 - Present
            </span>
          </div>
          <h3 className="text-[var(--vscode-teal)] mb-3 font-mono">
            Tech Company Inc.
          </h3>
          <ul className="space-y-2 text-[var(--vscode-text-primary)]">
            <li className="flex items-start">
              <span className="text-[var(--vscode-green)] mr-2">✓</span>
              Led development of microservices architecture serving 1M+ users
            </li>
            <li className="flex items-start">
              <span className="text-[var(--vscode-green)] mr-2">✓</span>
              Improved application performance by 40% through optimization
            </li>
            <li className="flex items-start">
              <span className="text-[var(--vscode-green)] mr-2">✓</span>
              Mentored junior developers and conducted code reviews
            </li>
          </ul>
        </div>

        {/* Example Experience Entry 2 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-semibold text-[var(--vscode-blue)] font-mono">
              Full Stack Developer
            </h2>
            <span className="text-[var(--vscode-text-disabled)] text-sm font-mono">
              2020 - 2022
            </span>
          </div>
          <h3 className="text-[var(--vscode-teal)] mb-3 font-mono">
            StartUp Solutions
          </h3>
          <ul className="space-y-2 text-[var(--vscode-text-primary)]">
            <li className="flex items-start">
              <span className="text-[var(--vscode-green)] mr-2">✓</span>
              Built React-based dashboard for real-time data visualization
            </li>
            <li className="flex items-start">
              <span className="text-[var(--vscode-green)] mr-2">✓</span>
              Developed RESTful APIs using Node.js and Express
            </li>
            <li className="flex items-start">
              <span className="text-[var(--vscode-green)] mr-2">✓</span>
              Implemented CI/CD pipelines reducing deployment time by 60%
            </li>
          </ul>
        </div>

        {/* Example Experience Entry 3 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-semibold text-[var(--vscode-blue)] font-mono">
              Junior Developer
            </h2>
            <span className="text-[var(--vscode-text-disabled)] text-sm font-mono">
              2018 - 2020
            </span>
          </div>
          <h3 className="text-[var(--vscode-teal)] mb-3 font-mono">
            Digital Agency Co.
          </h3>
          <ul className="space-y-2 text-[var(--vscode-text-primary)]">
            <li className="flex items-start">
              <span className="text-[var(--vscode-green)] mr-2">✓</span>
              Developed responsive websites for various clients
            </li>
            <li className="flex items-start">
              <span className="text-[var(--vscode-green)] mr-2">✓</span>
              Collaborated with design team to implement pixel-perfect UIs
            </li>
            <li className="flex items-start">
              <span className="text-[var(--vscode-green)] mr-2">✓</span>
              Learned best practices for version control and agile development
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-8 text-[var(--vscode-text-primary)] font-mono">
        <span className="text-[var(--vscode-text-primary)]">{'}'}</span>
      </div>
    </div>
  );
}
