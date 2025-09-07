# Technical Specification

This document outlines the technical implementation details for the Portfolio Layout and Navigation spec described in @.agent-os/specs/2025-09-06-portfolio-layout/spec.md

> Created: 2025-09-06
> Version: 1.0.0

## Technology Stack

### Core Framework

- **Next.js**: 15.5.2 with App Router
- **React**: 19.1.0 with TypeScript
- **TypeScript**: Latest stable version
- **Node.js**: 18.x or higher

### Styling and UI

- **Tailwind CSS**: 4.x (latest)
- **PostCSS**: For CSS processing
- **Autoprefixer**: Browser compatibility
- **Custom CSS**: Minimal, component-specific overrides

### Development Tools

- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Husky**: Git hooks for code quality
- **TypeScript**: Type checking and IDE support

### Deployment

- **GitHub Pages**: Static site hosting
- **GitHub Actions**: CI/CD pipeline
- **Next.js Static Export**: Static file generation

## Architecture Overview

### Project Structure

```
/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page (About Me)
│   ├── experience/              # Experience section
│   ├── hobbies/                 # Hobbies and Side Projects
│   ├── people/                  # People Smarter than Me
│   └── globals.css              # Global styles
├── components/                   # Reusable UI components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/                      # UI primitives
│   │   ├── Terminal.tsx
│   │   ├── CommandPrompt.tsx
│   │   └── Section.tsx
│   └── common/                  # Common components
├── lib/                         # Utilities and helpers
│   ├── utils.ts
│   ├── constants.ts
│   └── types.ts
├── styles/                      # Additional stylesheets
├── public/                      # Static assets
└── next.config.js              # Next.js configuration
```

### Component Architecture

#### Layout Components

**Header Component**

```typescript
interface HeaderProps {
  currentSection: string;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  isMenuOpen,
  onMenuToggle,
}) => {
  // Terminal-style header with navigation
};
```

**Navigation Component**

```typescript
interface NavigationItem {
  id: string;
  label: string;
  href: string;
  command: string; // Terminal command representation
}

interface NavigationProps {
  items: NavigationItem[];
  currentPath: string;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  currentPath,
  className,
}) => {
  // Horizontal navigation with active states
};
```

**Terminal Component**

```typescript
interface TerminalProps {
  prompt?: string;
  children: React.ReactNode;
  className?: string;
  showCursor?: boolean;
}

export const Terminal: React.FC<TerminalProps> = ({
  prompt = 'dave@portfolio:~$',
  children,
  className,
  showCursor = false,
}) => {
  // Terminal window wrapper component
};
```

### State Management

#### Navigation State

```typescript
interface NavigationState {
  currentSection: string;
  isMenuOpen: boolean;
  isTransitioning: boolean;
}

// Using React Context for navigation state
export const NavigationContext = React.createContext<{
  state: NavigationState;
  dispatch: React.Dispatch<NavigationAction>;
}>(null!);
```

#### Theme State

```typescript
interface ThemeState {
  isDark: boolean; // Always true for VSCode theme
  accentColor: string;
  terminalSettings: {
    prompt: string;
    cursorBlink: boolean;
  };
}
```

### Routing Strategy

#### App Router Implementation

- **Home Route** (`/`): About Me section
- **Experience Route** (`/experience`): Professional background
- **Hobbies Route** (`/hobbies`): Personal projects and interests
- **People Route** (`/people`): Curated resources and inspirations

#### Dynamic Imports

```typescript
// Lazy load section components for performance
const ExperienceSection = dynamic(() => import('@/components/sections/Experience'), {
  loading: () => <TerminalLoader />,
  ssr: true
});
```

### Styling Implementation

#### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vscode: {
          bg: '#1e1e1e',
          bgSecondary: '#252526',
          bgTertiary: '#2d2d30',
          text: '#d4d4d4',
          textSecondary: '#cccccc',
          blue: '#007acc',
          teal: '#4ec9b0',
          yellow: '#ffcc02',
          red: '#f44747',
          green: '#608b4e',
          purple: '#c586c0',
          orange: '#ce9178',
        },
      },
      fontFamily: {
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'SF Mono',
          'Monaco',
          'Inconsolata',
          'monospace',
        ],
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s infinite',
        'fade-in': 'fade-in 0.3s ease-in-out',
        'slide-up': 'slide-up 0.3s ease-out',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
```

#### CSS Custom Properties

```css
:root {
  --vscode-bg: #1e1e1e;
  --vscode-bg-secondary: #252526;
  --vscode-text: #d4d4d4;
  --vscode-blue: #007acc;
  --vscode-teal: #4ec9b0;
  --terminal-font: 'JetBrains Mono', monospace;
}
```

### Performance Optimization

#### Code Splitting

- Route-based code splitting using Next.js dynamic imports
- Component-level splitting for large UI components
- Lazy loading for non-critical sections

#### Image Optimization

- Next.js Image component for automatic optimization
- WebP format with fallbacks
- Responsive image loading
- Lazy loading for below-the-fold content

#### Bundle Optimization

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    };
    return config;
  },
};
```

### SEO Implementation

#### Meta Tags Strategy

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: '%s | Dave M. Jones',
    default: 'Dave M. Jones | Developer Portfolio',
  },
  description:
    'Portfolio showcasing development expertise, projects, and curated resources from the developer community.',
  keywords: ['developer', 'portfolio', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Dave M. Jones' }],
  creator: 'Dave M. Jones',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://davemjones.github.io',
    siteName: 'Dave M. Jones Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dave M. Jones Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@davemjones', // If applicable
  },
};
```

#### Structured Data

```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dave M. Jones',
  jobTitle: 'Software Developer',
  url: 'https://davemjones.github.io',
  sameAs: [
    // Social media profiles
  ],
};
```

### Accessibility Implementation

#### Semantic HTML

```typescript
// Proper heading hierarchy
const SectionHeading: React.FC<{ level: 1 | 2 | 3; children: React.ReactNode }> = ({
  level,
  children
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return <HeadingTag className="text-vscode-text font-mono">{children}</HeadingTag>;
};
```

#### Keyboard Navigation

```typescript
const Navigation: React.FC = () => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Handle navigation
    }
  };

  return (
    <nav role="navigation" aria-label="Main navigation">
      {/* Navigation items with proper ARIA attributes */}
    </nav>
  );
};
```

#### Screen Reader Support

```typescript
// Live regions for dynamic content updates
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {announcements}
</div>
```

### Testing Strategy

#### Unit Testing

- Jest for component testing
- React Testing Library for DOM testing
- TypeScript type checking

#### Integration Testing

- Cypress for end-to-end testing
- Accessibility testing with axe-core
- Performance testing with Lighthouse CI

#### Manual Testing

- Cross-browser compatibility testing
- Mobile device testing
- Screen reader testing

### Deployment Configuration

#### GitHub Actions Workflow

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

#### Build Configuration

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "export": "next export"
  }
}
```

### Security Considerations

#### Content Security Policy

```typescript
// next.config.js security headers
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline';",
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];
```

#### Dependency Management

- Regular dependency updates using Dependabot
- Security auditing with npm audit
- Minimal external dependencies to reduce attack surface
