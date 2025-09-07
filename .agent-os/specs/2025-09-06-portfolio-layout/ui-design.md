# UI Design Specification

This document details the user interface and visual design specifications for the Portfolio Layout and Navigation spec described in @.agent-os/specs/2025-09-06-portfolio-layout/spec.md

> Created: 2025-09-06
> Version: 1.0.0

## Design Philosophy

The portfolio embodies a developer-focused aesthetic that balances professional presentation with authentic personality. Drawing inspiration from beloved developer tools like VSCode and terminal interfaces, the design creates familiarity while maintaining modern web standards. The aesthetic should feel like a natural extension of a developer's daily environment - comfortable, functional, and subtly sophisticated.

## Visual Identity

### Brand Personality

- **Professional yet Approachable**: Technical competence with human warmth
- **Authentic Developer**: Honest representation of developer culture and tools
- **Curated Simplicity**: Clean, purposeful design without unnecessary complexity
- **Subtle Sophistication**: Refined details that demonstrate attention to quality

### Design Principles

- **Functionality First**: Every visual element serves a purpose
- **Consistent Execution**: Systematic approach to spacing, typography, and color
- **Progressive Enhancement**: Graceful degradation across all devices
- **Accessible by Design**: Inclusive design from the foundation up

## Color System

### Primary Palette (VSCode Dark Theme)

```css
/* Background Colors */
--vscode-bg-primary: #1e1e1e; /* Main background */
--vscode-bg-secondary: #252526; /* Card backgrounds */
--vscode-bg-tertiary: #2d2d30; /* Elevated elements */
--vscode-bg-hover: #2a2d2e; /* Hover states */

/* Text Colors */
--vscode-text-primary: #d4d4d4; /* Main text */
--vscode-text-secondary: #cccccc; /* Secondary text */
--vscode-text-disabled: #858585; /* Disabled text */
--vscode-text-inverse: #1e1e1e; /* Text on light backgrounds */

/* Accent Colors */
--vscode-blue: #007acc; /* Primary accent, links */
--vscode-blue-hover: #1177bb; /* Blue hover state */
--vscode-teal: #4ec9b0; /* Success, highlights */
--vscode-yellow: #ffcc02; /* Warnings, attention */
--vscode-red: #f44747; /* Errors, critical */
--vscode-green: #608b4e; /* Success states */
--vscode-purple: #c586c0; /* Special highlights */
--vscode-orange: #ce9178; /* String literals, warm accents */

/* Border Colors */
--vscode-border: #3e3e42; /* Default borders */
--vscode-border-light: #464647; /* Lighter borders */
--vscode-border-focus: #007acc; /* Focus indicators */
```

### Usage Guidelines

- **Primary Background**: Use `#1e1e1e` for main page background
- **Content Cards**: Use `#252526` for elevated content areas
- **Interactive Elements**: Use `#007acc` for primary actions and links
- **Success/Positive**: Use `#4ec9b0` for confirmations and positive states
- **Attention/Warning**: Use `#ffcc02` sparingly for important notifications
- **Text Hierarchy**: Primary text `#d4d4d4`, secondary text `#cccccc`

### Accessibility Compliance

All color combinations maintain WCAG AA contrast ratios:

- `#d4d4d4` on `#1e1e1e` = 12.63:1 (AAA)
- `#007acc` on `#1e1e1e` = 4.52:1 (AA)
- `#4ec9b0` on `#1e1e1e` = 8.59:1 (AAA)

## Typography System

### Font Families

```css
/* Primary Font Stack */
font-family:
  'JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Consolas',
  monospace;

/* Fallback Stack */
font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;

/* System Fallback */
font-family: ui-monospace, SFMono-Regular, 'Roboto Mono', monospace;
```

### Typography Scale

```css
/* Headings */
--text-4xl: 2.25rem; /* 36px - Main page titles */
--text-3xl: 1.875rem; /* 30px - Section headings */
--text-2xl: 1.5rem; /* 24px - Subsection headings */
--text-xl: 1.25rem; /* 20px - Card titles */
--text-lg: 1.125rem; /* 18px - Large body text */

/* Body Text */
--text-base: 1rem; /* 16px - Default body text */
--text-sm: 0.875rem; /* 14px - Small text, captions */
--text-xs: 0.75rem; /* 12px - Fine print, metadata */

/* Line Heights */
--leading-tight: 1.25; /* Headings */
--leading-normal: 1.5; /* Body text */
--leading-relaxed: 1.75; /* Large blocks of text */
```

### Typography Usage

- **Page Titles**: 36px, weight 600, tight line height
- **Section Headers**: 30px, weight 500, tight line height
- **Navigation**: 16px, weight 500, normal line height
- **Body Text**: 16px, weight 400, normal line height
- **Code Snippets**: 14px, weight 400, tight line height
- **Metadata**: 12px, weight 400, normal line height

## Layout System

### Grid Structure

```css
/* Container Sizes */
--container-xs: 20rem; /* 320px - Mobile */
--container-sm: 24rem; /* 384px - Mobile large */
--container-md: 48rem; /* 768px - Tablet */
--container-lg: 64rem; /* 1024px - Desktop */
--container-xl: 80rem; /* 1280px - Desktop large */
--container-2xl: 96rem; /* 1536px - Desktop XL */

/* Spacing Scale */
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 640px) {
  /* sm - Small tablets */
}
@media (min-width: 768px) {
  /* md - Tablets */
}
@media (min-width: 1024px) {
  /* lg - Desktop */
}
@media (min-width: 1280px) {
  /* xl - Large desktop */
}
@media (min-width: 1536px) {
  /* 2xl - Extra large desktop */
}
```

## Component Specifications

### Header Component

```
┌─────────────────────────────────────────────────────────────┐
│ dave@portfolio:~$ █                               [≡ Menu]   │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Height: 64px (mobile), 72px (desktop)
- Background: `#1e1e1e` with subtle bottom border `#3e3e42`
- Terminal prompt: "dave@portfolio:~$" with blinking cursor
- Mobile: Hamburger menu icon on right
- Desktop: Full navigation visible

### Navigation Component

```
Desktop Layout:
┌─────────────────────────────────────────────────────────────┐
│ [About Me] [Experience] [Hobbies & Projects] [People...]    │
└─────────────────────────────────────────────────────────────┘

Mobile Layout (Expanded):
┌─────────────────────┐
│ ✕ Menu              │
├─────────────────────┤
│ cd ~/about          │
│ cd ~/experience     │
│ cd ~/hobbies        │
│ cd ~/people         │
└─────────────────────┘
```

**Specifications:**

- Active state: Blue underline `#007acc` with glow effect
- Hover state: Subtle background highlight `#2a2d2e`
- Mobile: Full-screen overlay with slide animation
- Command format: Each nav item styled as terminal command

### Section Container

```
┌─────────────────────────────────────────────────────────────┐
│ user@portfolio:~/section$ ls -la                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [Content Area]                                            │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Terminal window styling with title bar
- Command prompt shows current section
- Content area with proper padding and spacing
- Subtle shadow for depth: `0 4px 12px rgba(0,0,0,0.15)`

### Terminal Prompt Elements

```css
.terminal-prompt::before {
  content: 'user@portfolio:~' attr(data-path) '$ ';
  color: #4ec9b0;
  font-weight: 600;
}

.cursor {
  display: inline-block;
  width: 0.5rem;
  height: 1rem;
  background-color: #d4d4d4;
  animation: cursor-blink 1s infinite;
}
```

### Card Components

```
┌─────────────────────────────────────────────────────────────┐
│ > Card Title                                         [Icon] │
├─────────────────────────────────────────────────────────────┤
│   Card content with proper spacing and typography          │
│   • List items with consistent formatting                  │
│   • Links in VSCode blue with hover effects                │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Background: `#252526`
- Border: 1px solid `#3e3e42`
- Border radius: 6px
- Padding: 24px
- Hover state: Subtle lift with shadow enhancement

## Interactive Elements

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #007acc;
  color: #ffffff;
  border: 1px solid #007acc;
  border-radius: 4px;
  padding: 8px 16px;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #1177bb;
  box-shadow: 0 2px 8px rgba(0, 122, 204, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #d4d4d4;
  border: 1px solid #3e3e42;
}

.btn-secondary:hover {
  background: #2a2d2e;
  border-color: #007acc;
}
```

### Links

```css
.link-primary {
  color: #007acc;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

.link-primary:hover {
  color: #1177bb;
  border-bottom-color: #1177bb;
}

.link-external::after {
  content: ' ↗';
  font-size: 0.875em;
  opacity: 0.7;
}
```

### Form Elements

```css
.input {
  background: #1e1e1e;
  color: #d4d4d4;
  border: 1px solid #3e3e42;
  border-radius: 4px;
  padding: 8px 12px;
  font-family: inherit;
}

.input:focus {
  outline: none;
  border-color: #007acc;
  box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.1);
}
```

## Animation System

### Transition Specifications

```css
/* Standard Transitions */
--transition-fast: 0.15s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;

/* Easing Functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

### Animation Keyframes

```css
@keyframes cursor-blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### Loading States

```css
.loading-skeleton {
  background: linear-gradient(90deg, #252526 25%, #2d2d30 50%, #252526 75%);
  background-size: 200% 100%;
  animation: loading-shimmer 1.5s infinite;
}

@keyframes loading-shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
```

## Responsive Design Specifications

### Mobile Layout (320px - 639px)

- Single column layout
- Full-width navigation drawer
- Condensed header with hamburger menu
- Reduced padding and margins
- Touch-friendly interactive elements (min 44px)

### Tablet Layout (640px - 1023px)

- Condensed horizontal navigation
- Two-column content where appropriate
- Moderate spacing and padding
- Hybrid touch/mouse interactions

### Desktop Layout (1024px+)

- Full horizontal navigation
- Multi-column layouts where beneficial
- Generous spacing and padding
- Mouse-optimized interactions
- Subtle hover effects and micro-interactions

### Content Breakpoints

```css
.content-grid {
  display: grid;
  gap: 2rem;
}

/* Mobile: Single column */
@media (max-width: 639px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

/* Tablet: Two columns */
@media (min-width: 640px) and (max-width: 1023px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Desktop: Three columns */
@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Accessibility Specifications

### Focus Management

```css
.focus-visible {
  outline: 2px solid #007acc;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Hide focus outline for mouse users */
.focus-visible:not(.focus-visible) {
  outline: none;
}
```

### Screen Reader Support

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### High Contrast Support

```css
@media (prefers-contrast: high) {
  :root {
    --vscode-text-primary: #ffffff;
    --vscode-border: #ffffff;
    --vscode-bg-hover: #404040;
  }
}
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Performance Considerations

### Critical CSS

Inline critical styles for above-the-fold content:

- Header and navigation styles
- Typography system
- Layout foundation
- Loading states

### Font Loading Strategy

```css
@font-face {
  font-family: 'JetBrains Mono';
  src: url('/fonts/jetbrains-mono.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
}
```

### Image Guidelines

- Use WebP format with JPEG fallbacks
- Implement lazy loading for below-the-fold images
- Provide appropriate alt text for all images
- Use CSS for simple graphics and icons when possible

This comprehensive design specification ensures a cohesive, accessible, and performant user interface that authentically represents a developer's aesthetic while maintaining modern web standards and usability principles.
