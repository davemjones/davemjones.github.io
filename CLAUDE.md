# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is Dave M. Jones's portfolio website built with Next.js 15.5.2, configured for static site generation and deployment to GitHub Pages (https://davemjones.github.io). The site features a VSCode-inspired dark terminal theme with comprehensive accessibility and performance optimizations.

## Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Font**: JetBrains Mono
- **Deployment**: GitHub Pages via GitHub Actions
- **Development**: VSCode devcontainer with Node.js 22

## Common Development Commands

```bash
# Development server with Turbopack
npm run dev

# Build static site for production
npm run build

# Code quality checks
npm run lint          # Run ESLint
npm run lint:fix      # Auto-fix linting issues
npm run type-check    # TypeScript validation
npm run format        # Prettier formatting
npm run format:check  # Check formatting

# Bundle analysis
npm run analyze       # Analyze bundle size (opens browser)
```

## Testing Locally

```bash
# Development server
npm run dev
# Site available at http://localhost:3000

# Test production build
npm run build
npx serve out
# Static site served from the 'out' directory
```

## Code Architecture

### App Router Structure

- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Home/About page
  - `layout.tsx` - Root layout with metadata and providers
  - `globals.css` - Global styles and Tailwind directives
  - `experience/`, `hobbies/`, `people/` - Individual route pages

### Component Organization

- `components/layout/` - Header, Navigation, Footer, SkipNav
- `components/seo/` - JsonLd for structured data
- `components/ui/` - Reusable UI components (LazyImage)
- `lib/` - Utility functions (performance monitoring)

### Key Configuration Files

- `next.config.mjs` - Static export configuration with GitHub Pages optimizations
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint rules for Next.js and TypeScript
- `postcss.config.mjs` - PostCSS with Tailwind CSS v4

## GitHub Pages Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch:

1. GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers
2. Runs lint and type checks
3. Builds static site (`npm run build`)
4. Deploys `out/` directory to GitHub Pages

Important:

- Static export is configured in `next.config.mjs` with `output: 'export'`
- `.nojekyll` file ensures proper client-side routing
- All pages must be statically generated (no dynamic server-side rendering)

## Development Workflow

### Git Hooks

Pre-commit hooks via Husky automatically:

- Run ESLint on staged files
- Format code with Prettier
- Validate TypeScript types

### Making Changes

1. Run `npm run dev` to start development server
2. Make changes (hot reload via Turbopack)
3. Run `npm run lint` and `npm run type-check` before committing
4. Commit changes (hooks will auto-format and validate)
5. Push to main branch for automatic deployment

### Adding New Pages

Create new pages in the `app/` directory:

```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return <main>Content</main>
}
```

### Performance Considerations

- All images should use the `LazyImage` component for optimization
- Keep bundle size minimal (use `npm run analyze` to check)
- Ensure all pages pass Core Web Vitals metrics
- Maintain accessibility standards (semantic HTML, ARIA labels)

## VSCode Theme Colors

The site uses a custom VSCode-inspired color palette defined in `globals.css`:

- Background: `#1e1e1e`
- Foreground: `#d4d4d4`
- Accent: `#007acc`
- Success: `#4ec9b0`
- Warning: `#ce9178`
- Error: `#f48771`
