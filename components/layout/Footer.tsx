export default function Footer() {
  return (
    <footer className="border-t border-[var(--vscode-border-primary)] bg-[var(--vscode-bg-primary)] mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-[var(--vscode-text-disabled)] text-xs md:text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} Dave M. Jones</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com/davemjones"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--vscode-blue)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/davemjones"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--vscode-blue)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dave@example.com"
              className="hover:text-[var(--vscode-blue)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
