import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hobbies & Side Projects - Dave M. Jones',
  description:
    'Personal projects and hobbies that fuel my passion for development.',
};

export default function HobbiesPage() {
  return (
    <div className="animate-fade-in">
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--vscode-text-primary)] mb-4 font-mono">
          <span className="text-[var(--vscode-text-disabled)]">{'/*'}</span>{' '}
          <span className="text-[var(--vscode-green)]">
            Side Projects & Hobbies
          </span>{' '}
          <span className="text-[var(--vscode-text-disabled)]">{'*/'}</span>
        </h1>

        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 mb-6">
          <p className="text-[var(--vscode-text-primary)] leading-relaxed">
            Beyond my professional work, I love exploring new technologies and
            building projects that challenge me to learn and grow. Here are some
            of my recent side projects and ongoing hobbies.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Project 1 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-3 font-mono">
            🚀 Open Source CLI Tool
          </h2>
          <p className="text-[var(--vscode-text-secondary)] mb-3">
            A command-line tool for automating development workflows, written in
            Go.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              Go
            </span>
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              CLI
            </span>
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              Open Source
            </span>
          </div>
          <a
            href="#"
            className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] transition-colors text-sm font-mono"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-3 font-mono">
            📊 Data Visualization Dashboard
          </h2>
          <p className="text-[var(--vscode-text-secondary)] mb-3">
            Interactive dashboard for visualizing complex datasets using D3.js
            and React.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              React
            </span>
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              D3.js
            </span>
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              TypeScript
            </span>
          </div>
          <a
            href="#"
            className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] transition-colors text-sm font-mono"
          >
            Live Demo →
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-3 font-mono">
            🤖 Machine Learning Experiments
          </h2>
          <p className="text-[var(--vscode-text-secondary)] mb-3">
            Exploring ML algorithms and building predictive models with Python
            and TensorFlow.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              Python
            </span>
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              TensorFlow
            </span>
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              Jupyter
            </span>
          </div>
          <a
            href="#"
            className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] transition-colors text-sm font-mono"
          >
            View Notebooks →
          </a>
        </div>

        {/* Project 4 */}
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6 hover:border-[var(--vscode-blue)] transition-colors">
          <h2 className="text-xl font-semibold text-[var(--vscode-blue)] mb-3 font-mono">
            🎮 Game Development
          </h2>
          <p className="text-[var(--vscode-text-secondary)] mb-3">
            Building indie games using Unity and C# in my spare time.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              Unity
            </span>
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              C#
            </span>
            <span className="text-xs px-2 py-1 bg-[var(--vscode-bg-tertiary)] border border-[var(--vscode-border-light)] rounded text-[var(--vscode-teal)]">
              Game Dev
            </span>
          </div>
          <a
            href="#"
            className="text-[var(--vscode-blue)] hover:text-[var(--vscode-blue-hover)] transition-colors text-sm font-mono"
          >
            Play on itch.io →
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[var(--vscode-text-primary)] mb-4 font-mono">
          <span className="text-[var(--vscode-text-disabled)]">#</span> Other
          Interests
        </h2>
        <div className="bg-[var(--vscode-bg-secondary)] border border-[var(--vscode-border-primary)] rounded p-6">
          <ul className="grid md:grid-cols-2 gap-3 text-[var(--vscode-text-primary)]">
            <li className="flex items-center">
              <span className="text-[var(--vscode-purple)] mr-2">●</span>
              Contributing to open source projects
            </li>
            <li className="flex items-center">
              <span className="text-[var(--vscode-purple)] mr-2">●</span>
              Writing technical blog posts
            </li>
            <li className="flex items-center">
              <span className="text-[var(--vscode-purple)] mr-2">●</span>
              Attending tech meetups and conferences
            </li>
            <li className="flex items-center">
              <span className="text-[var(--vscode-purple)] mr-2">●</span>
              Learning new programming languages
            </li>
            <li className="flex items-center">
              <span className="text-[var(--vscode-purple)] mr-2">●</span>
              Building home automation projects
            </li>
            <li className="flex items-center">
              <span className="text-[var(--vscode-purple)] mr-2">●</span>
              Photography and digital art
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
