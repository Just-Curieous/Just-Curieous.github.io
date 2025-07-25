# GitHub Pages Deployment Guide

## Setup for GitHub Pages

### 1. Repository Settings
1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. This will enable automatic deployment when you push to main branch

### 2. Configuration Changes Made

#### Next.js Config (`next.config.js`)
- Added `basePath` for production builds to match your repository name
- Kept `output: "export"` for static generation
- Kept `images: { unoptimized: true }` for static compatibility

#### GitHub Actions (`.github/workflows/deploy.yml`)
- Automatic build and deployment on push to main branch
- Uses Node.js 18
- Builds static files and deploys to GitHub Pages

### 3. Local Development vs Production

**Local Development:**
```bash
npm run dev          # No basePath, serves from root
npm run build        # Development build
```

**Production (GitHub Pages):**
```bash
npm run build:prod   # Production build with basePath
```

### 4. Your GitHub Pages URL
Your site will be available at: `https://[your-username].github.io/Just-Curieous.github.io/`

### 5. Deployment Process
1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Your site updates within a few minutes

### 6. Troubleshooting
- If assets don't load, check that `basePath` matches your repository name
- Ensure all internal links use relative paths
- Check GitHub Actions logs for build errors 