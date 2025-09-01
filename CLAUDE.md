# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Pages repository (davemjones.github.io) intended for hosting a personal resume/portfolio website. The site will be automatically deployed to https://davemjones.github.io when changes are pushed to the main branch.

## Development Environment

The repository includes a devcontainer configuration for Node.js & TypeScript development. The container uses the official Microsoft TypeScript-Node image.

## GitHub Pages Deployment

- The site is automatically deployed from the main branch
- Any HTML file named `index.html` in the root will be the homepage
- Static assets (CSS, JavaScript, images) can be placed in appropriate directories
- Jekyll is enabled by default on GitHub Pages unless a `.nojekyll` file exists

## Common Development Tasks

### Setting up the site structure
For a basic static site:
```bash
# Create main index file
touch index.html

# Create directories for assets
mkdir -p css js images

# If using Jekyll (default for GitHub Pages)
mkdir -p _layouts _includes _posts

# If NOT using Jekyll (plain HTML/CSS/JS)
touch .nojekyll
```

### Testing locally
```bash
# For plain HTML sites
python3 -m http.server 8000
# or
npx serve

# For Jekyll sites
bundle exec jekyll serve
```

### Deployment
Changes pushed to the main branch are automatically deployed to GitHub Pages. The deployment typically takes a few minutes.

## File Structure Recommendations

- `index.html` - Main homepage
- `css/` - Stylesheets
- `js/` - JavaScript files  
- `images/` - Image assets
- `CNAME` - Custom domain configuration (if needed)
- `.nojekyll` - Add this file if not using Jekyll