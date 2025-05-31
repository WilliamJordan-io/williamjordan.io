# William Jordan Portfolio - GitHub Pages Ready

A cutting-edge professional portfolio and AI customer support solution showcasing William Jordan's expertise in advanced AI technologies and full-stack web development.

## Project Structure

The project has been restructured for GitHub Pages compatibility:

```
/
├── index.html              # Main entry point (required for GitHub Pages)
├── src/                    # Frontend source code (moved from client/src/)
│   ├── components/         # React components
│   ├── pages/             # Application pages
│   ├── lib/               # Utilities and configurations
│   └── hooks/             # Custom React hooks
├── backend/               # Backend code (for separate deployment)
├── shared/                # Shared types and schemas
├── docs/                  # Built static files (GitHub Pages deployment)
├── .github/workflows/     # GitHub Actions for automatic deployment
└── vite.config.pages.ts   # Vite configuration for GitHub Pages
```

## Technologies

- **Frontend**: React with TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, PostgreSQL (separate deployment)
- **Deployment**: GitHub Pages (frontend), Replit/Vercel (backend)
- **Build Tool**: Vite
- **UI Components**: Radix UI with shadcn/ui

## GitHub Pages Deployment

### Automatic Deployment

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://[username].github.io/[repository-name]`

### Manual Deployment

1. Build the static files:
   ```bash
   npx vite build --config vite.config.pages.ts
   ```

2. The built files will be in the `docs/` folder

3. In your GitHub repository settings:
   - Go to Pages section
   - Set Source to "Deploy from a branch"
   - Select branch: `main`
   - Select folder: `/docs`

### Local Development

For full-stack development (with backend):
```bash
npm run dev
```

For frontend-only development:
```bash
npx vite --config vite.config.pages.ts
```

## Backend Deployment

The backend code is in the `backend/` folder and needs separate deployment:

1. **Replit**: Use the existing configuration
2. **Vercel/Netlify**: Deploy the backend folder separately
3. **Railway/Render**: Deploy as a Node.js application

## Configuration Notes

- Frontend is configured to work as a static site
- Backend API endpoints would need to be updated to point to your deployed backend
- Environment variables for production should be configured in your deployment platform

## Features

- Responsive design optimized for all devices
- Interactive animations with Framer Motion
- Professional portfolio sections
- AI customer support showcase
- Performance optimized for fast loading
- SEO optimized with proper meta tags