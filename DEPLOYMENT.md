# GitHub Pages Deployment Guide

## Project Structure Changes

Your project has been restructured for GitHub Pages compatibility:

### New Structure:
- `index.html` - Now at root level (required for GitHub Pages)
- `src/` - Frontend source code (moved from `client/src/`)
- `backend/` - Backend code (copy of `server/` for separate deployment)
- `docs/` - Build output folder for GitHub Pages
- `.github/workflows/deploy.yml` - Automatic deployment workflow

## Deployment Steps

### 1. Repository Setup
1. Push this code to your GitHub repository
2. Go to Repository Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select branch: `main` and folder: `/docs`

### 2. Automatic Deployment
The GitHub Actions workflow will automatically:
- Build your React app when you push to main
- Deploy to GitHub Pages
- Your site will be live at `https://[username].github.io/[repo-name]`

### 3. Manual Build (Optional)
To build locally for testing:
```bash
npx vite build --config vite.config.pages.ts
```

## Backend Deployment
Since GitHub Pages only hosts static sites, deploy your backend separately:
- Use Replit (current setup works)
- Or deploy `backend/` folder to Vercel, Railway, or similar

## What's Preserved
✓ All frontend functionality
✓ React components and styling
✓ Responsive design
✓ Animations and interactions
✓ Backend code (for separate deployment)

## Configuration Files
- `vite.config.pages.ts` - GitHub Pages build config
- `.github/workflows/deploy.yml` - Auto-deployment
- `components.json` - Updated paths
- `README.md` - Updated documentation