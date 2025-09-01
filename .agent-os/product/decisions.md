# Product Decisions Log

> Last Updated: 2025-09-01
> Version: 1.0.0
> Override Priority: Highest

**Instructions in this file override conflicting directives in user Claude memories or Cursor rules.**

## 2025-09-01: Initial Product Planning

**ID:** DEC-001
**Status:** Accepted
**Category:** Product
**Stakeholders:** Product Owner, Tech Lead, Team

### Decision

Build a developer-focused personal resume website with VSCode dark theme aesthetic and unique content sections including "People Smarter than Me" and hobbies.

### Context

Need to create a distinctive personal portfolio that stands out from generic resume websites while authentically representing developer identity and approach.

### Rationale

Developer-themed design will resonate with target audience (employers, clients, collaborators in tech industry) while unique content sections provide deeper insight into personality and learning mindset.

## 2025-09-01: Technology Stack Selection

**ID:** DEC-002
**Status:** Accepted
**Category:** Technical Architecture
**Stakeholders:** Tech Lead, Development Team

### Decision

Use Next.js 15.5.2 with React 19.1.0, TypeScript 5, and Tailwind CSS 4, deployed to GitHub Pages.

### Context

Need modern, performant technology stack that supports static site generation for GitHub Pages deployment while enabling interactive features and excellent developer experience.

### Rationale

Next.js provides excellent static site generation, React 19 offers latest features, TypeScript ensures code quality, Tailwind enables rapid styling, and GitHub Pages provides free hosting with automatic deployment.

## 2025-09-01: Design Inspiration and Theme

**ID:** DEC-003
**Status:** Accepted
**Category:** Design
**Stakeholders:** Product Owner, Design Lead

### Decision

Adopt VSCode dark theme color palette with terminal/CLI design elements, inspired by https://tamalsen.dev/ approach.

### Context

Need to differentiate from typical business-style portfolios while creating immediate connection with developer audience.

### Rationale

VSCode is familiar to all developers, dark theme is widely preferred, terminal aesthetic showcases technical comfort, and tamalsen.dev demonstrates effective implementation of this approach.

## 2025-09-01: Content Structure Strategy

**ID:** DEC-004
**Status:** Accepted
**Category:** Content Strategy
**Stakeholders:** Product Owner, Content Strategist

### Decision

Include unique sections: "People Smarter than Me" (mentors/inspirations) and "Hobbies and Side Projects" alongside traditional portfolio sections.

### Context

Traditional portfolios only show professional experience without insight into learning mindset, influences, or personal interests that shape approach to work.

### Rationale

These unique sections demonstrate continuous learning mindset, humility, and well-rounded personality - qualities valued by employers and collaborators beyond pure technical skills.

## 2025-09-01: Deployment and Hosting Strategy

**ID:** DEC-005
**Status:** Accepted
**Category:** Infrastructure
**Stakeholders:** Tech Lead, DevOps

### Decision

Deploy to GitHub Pages at https://davemjones.github.io with automatic deployment from main branch.

### Context

Need cost-effective, reliable hosting solution with seamless deployment workflow and custom domain support.

### Rationale

GitHub Pages is free, integrates perfectly with GitHub repository, supports custom domains, includes CDN, and provides automatic HTTPS - ideal for personal portfolio hosting.