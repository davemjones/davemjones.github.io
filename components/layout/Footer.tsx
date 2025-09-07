import { profile } from '@/lib/profile';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--vscode-border-primary)] bg-[var(--vscode-bg-primary)] mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-[var(--vscode-text-disabled)] text-xs md:text-sm font-mono">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {profile.github.url && (
              <a
                href={profile.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--vscode-blue)] transition-colors"
              >
                GitHub
              </a>
            )}
            {profile.linkedin.url && (
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--vscode-blue)] transition-colors"
              >
                LinkedIn
              </a>
            )}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-[var(--vscode-blue)] transition-colors"
              >
                Email
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
