import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'People Smarter than Me - Dave M. Jones',
  description:
    'Amazing developers and thought leaders who inspire me to keep learning.',
};

export default function PeoplePage() {
  return (
    <div className="animate-fade-in">
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--vscode-text-primary)] mb-4 font-mono">
          <span className="text-[var(--vscode-teal)]">import</span>{' '}
          <span className="text-[var(--vscode-text-primary)]">{'{'}</span>{' '}
          <span className="text-[var(--vscode-blue)]">inspiration</span>{' '}
          <span className="text-[var(--vscode-text-primary)]">{'}'}</span>{' '}
          <span className="text-[var(--vscode-teal)]">from</span>{' '}
          <span className="text-[var(--vscode-orange)]">{`'./amazing-people'`}</span>
          ;
        </h1>

        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 mb-6">
          <p className="text-[var(--vscode-text-primary)] leading-relaxed">
            The tech community is filled with brilliant minds who share their
            knowledge generously. Here are some of the developers, thought
            leaders, and creators who inspire me to keep learning and pushing
            boundaries.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {/* Person 1 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-2 font-mono">
            Kent C. Dodds
          </h2>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @kentcdodds
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            JavaScript educator and Testing Library creator. His approach to
            testing and teaching has transformed how I think about code quality.
          </p>
          <div className="flex gap-3">
            <a
              href="https://kentcdodds.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Website →
            </a>
            <a
              href="https://twitter.com/kentcdodds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Twitter →
            </a>
          </div>
        </div>

        {/* Person 2 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-2 font-mono">
            Dan Abramov
          </h2>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @dan_abramov
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            React core team member and Redux creator. His deep dives into React
            internals have been invaluable for understanding modern frontend
            development.
          </p>
          <div className="flex gap-3">
            <a
              href="https://overreacted.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Blog →
            </a>
            <a
              href="https://twitter.com/dan_abramov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Twitter →
            </a>
          </div>
        </div>

        {/* Person 3 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-2 font-mono">
            Sarah Drasner
          </h2>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @sarah_edo
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            VP of Developer Experience at Netlify. Her work on animations,
            Vue.js, and developer tooling has been incredibly influential.
          </p>
          <div className="flex gap-3">
            <a
              href="https://sarahdrasnerdesign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Website →
            </a>
            <a
              href="https://twitter.com/sarah_edo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Twitter →
            </a>
          </div>
        </div>

        {/* Person 4 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-2 font-mono">
            Addy Osmani
          </h2>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @addyosmani
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            Engineering Manager at Google Chrome. His insights on web
            performance and JavaScript patterns have shaped modern best
            practices.
          </p>
          <div className="flex gap-3">
            <a
              href="https://addyosmani.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Website →
            </a>
            <a
              href="https://twitter.com/addyosmani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Twitter →
            </a>
          </div>
        </div>

        {/* Person 5 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-2 font-mono">
            Wes Bos
          </h2>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @wesbos
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            Full-stack developer and educator. His courses and podcasts have
            helped countless developers level up their skills.
          </p>
          <div className="flex gap-3">
            <a
              href="https://wesbos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Website →
            </a>
            <a
              href="https://twitter.com/wesbos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Twitter →
            </a>
          </div>
        </div>

        {/* Person 6 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-2 font-mono">
            Cassidy Williams
          </h2>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @cassidoo
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            CTO at Contenda. Her newsletter, coding challenges, and developer
            advocacy work inspire developers worldwide.
          </p>
          <div className="flex gap-3">
            <a
              href="https://cassidoo.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Website →
            </a>
            <a
              href="https://twitter.com/cassidoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] text-sm font-mono"
            >
              Twitter →
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6">
          <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-3 font-mono">
            <span className="text-[var(--vscode-text-disabled)]">{'//'}</span>{' '}
            And Many More...
          </h2>
          <p className="text-[var(--vscode-text-primary)]">
            This is just a small sample of the amazing people in our community.
            Every day, I learn from developers on Twitter, GitHub, Stack
            Overflow, and in countless blog posts and tutorials. Thank you all
            for sharing your knowledge and making the web a better place! 🙏
          </p>
        </div>
      </section>
    </div>
  );
}
