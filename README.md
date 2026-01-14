# Digital Garden Blog

A beautiful, scalable MDX blog built with Astro, inspired by the organic aesthetics of Maggie Appleton and the thoughtful design of Ink & Switch.

## Features

- **MDX Support**: Write rich, interactive content with custom components
- **Type-Safe Content**: Content collections with Zod schema validation
- **Beautiful Design**: Warm color palette, thoughtful typography, generous whitespace
- **Custom Components**: Callout boxes, image galleries, interactive demos
- **Performance First**: Static site generation, minimal JavaScript
- **Easy to Extend**: Add new posts by creating `.mdx` files

## 🚀 Project Structure

```text
/
├── public/
│   └── images/blog/        # Blog post images
├── src/
│   ├── components/
│   │   ├── mdx/           # Custom MDX components
│   │   └── ui/            # UI components
│   ├── content/
│   │   ├── config.ts      # Content schema
│   │   └── blog/          # Blog posts (MDX)
│   ├── layouts/           # Page layouts
│   ├── pages/
│   │   ├── blog/          # Blog routes
│   │   └── index.astro    # Homepage
│   └── styles/            # Global styles
└── package.json
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## ✍️ Adding New Blog Posts

1. Create a new `.mdx` file in `src/content/blog/`
2. Add frontmatter with title, description, date, etc.
3. Import and use custom MDX components as needed
4. Save and the blog will automatically update!

Example:

```mdx
---
title: 'My New Post'
description: 'A brief description'
publishDate: 2025-12-31
tags: ['tag1', 'tag2']
---

import Callout from '@/components/mdx/Callout.astro';

Your content here...

<Callout type="tip" title="Pro Tip">
  This is a callout!
</Callout>
```
## 📚 Tech Stack

- **Astro**: Static site generator
- **MDX**: Markdown + React components
- **Tailwind CSS**: Utility-first styling
- **TypeScript**: Type safety
# situated-systems
