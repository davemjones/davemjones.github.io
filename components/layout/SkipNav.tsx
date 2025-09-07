export default function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only skip-nav absolute top-0 left-0 z-[100] bg-[var(--vscode-blue)] text-white px-4 py-2 font-mono text-sm rounded-br outline-none focus:ring-2 focus:ring-[var(--vscode-yellow)]"
    >
      Skip to main content
    </a>
  );
}
