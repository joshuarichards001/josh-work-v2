# AGENTS.md

Personal portfolio website built with Astro, React, and TailwindCSS. Deployed on Vercel.

## Tech Stack

- **Framework**: Astro 5 with React integration
- **Styling**: TailwindCSS
- **Language**: TypeScript (strict mode)
- **Package Manager**: npm
- **Deployment**: Vercel

## Project Structure

```
src/
├── components/     # Astro/React components (Layout.astro, ChipLink.astro)
├── content/        # Astro content collections + images
│   ├── blog/       # Markdown blog posts
│   └── config.ts   # Content collection schema
├── icons/          # SVG icons
├── pages/          # Astro pages (file-based routing)
│   ├── index.astro # Homepage
│   └── blog/       # Blog pages
├── projects.json   # Portfolio project data
└── works.json      # Work experience data
public/             # Static assets
```

## Commands

```bash
npm dev      # Start dev server
npm build    # Type-check and build for production
npm preview  # Preview production build
```

## Content

- **Blog posts**: Add Markdown files to `src/content/blog/` with frontmatter: `title`, `description`, `date`
- **Projects**: Edit `src/projects.json` to add/modify portfolio projects
- **Work experience**: Edit `src/works.json` to update work history

## Code Style

- Use Astro components (`.astro`) for static content
- Use React components (`.tsx`) only when client-side interactivity is needed
- Follow existing TailwindCSS patterns for styling
- Keep TypeScript strict mode compliance