# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

# indeliCraft

A modern, responsive marketing and portfolio site for indeliCraft — a handcrafted goods studio.

## Overview

This repository contains the front-end application for the indeliCraft website. It is built with Vite, React, and TypeScript, and uses Tailwind CSS and shadcn-ui for styling and UI components.

## Features

- Responsive layout and accessible UI
- Fast dev experience with Vite
- Reusable UI components in `src/components` and `src/components/ui`
- Supabase integration for forms (see `supabase/`)

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui
- Supabase (optional integrations)

## Local development

Prerequisites: Node.js (16+ recommended) and npm or pnpm.

Clone and run locally:

```sh
git clone <YOUR_GIT_URL>
cd indeliCraft
npm install
npm run dev
```

Available scripts:

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build locally
- `npm test` — run tests (vitest)

## Environment

If you use Supabase or other services, put keys and URLs into a `.env` file or your platform's environment settings. Example env vars:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Deployment

You can deploy the production build to platforms like Vercel, Netlify, or any static hosting that supports single-page apps. Build the site with `npm run build` and follow your host's deployment steps.

## Contributing

Contributions are welcome. Open an issue or submit a PR with a clear description of the change and why it's needed.

## License

Add your license information here (e.g., MIT).

---

For implementation details and code, see the `src/` folder and `supabase/` integration.
