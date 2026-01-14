# Getting Started with Your Digital Garden Blog

## What You Have

Your blog is now fully set up with:

✅ **Astro + MDX + Tailwind** - Modern, fast, type-safe stack
✅ **Beautiful Design** - Warm organic colors inspired by Maggie Appleton
✅ **Custom MDX Components** - Callout, ImageGallery, InteractiveDemo
✅ **Sample Blog Post** - "Hello World: Building a Garden of Ideas"
✅ **Responsive Layout** - Works beautifully on all screen sizes
✅ **Type-Safe Content** - Schema validation for all blog posts

## Quick Start

### 1. Start the Development Server

```bash
npm run dev
```

Then open http://localhost:4321 in your browser.

### 2. View Your Blog

- **Homepage**: http://localhost:4321
- **Blog listing**: http://localhost:4321/blog
- **Sample post**: http://localhost:4321/blog/hello-world

### 3. Add a New Blog Post

Create a new file in `src/content/blog/`:

```bash
# Create a new post
touch src/content/blog/my-second-post.mdx
```

Add this content:

```mdx
---
title: 'My Second Post'
description: 'Learning how to use this blog system'
publishDate: 2025-12-31
tags: ['tutorial', 'getting-started']
---

import Callout from '@/components/mdx/Callout.astro';

# My Second Post

This is my second post! I can use **markdown** and custom components.

<Callout type="tip" title="Quick Tip">
  You can use all the custom MDX components in your posts!
</Callout>

## Code Blocks

```typescript
const greeting = "Hello, world!";
console.log(greeting);
```

Easy!
```

Save the file and it will automatically appear on your blog.

## Available MDX Components

### Callout

```mdx
<Callout type="info" title="Information">
  Important information here
</Callout>
```

Types: `info`, `warning`, `success`, `tip`

### ImageGallery

```mdx
<ImageGallery
  images={[
    { src: '/images/blog/image1.png', alt: 'Description', caption: 'Caption' },
    { src: '/images/blog/image2.png', alt: 'Description', caption: 'Caption' }
  ]}
  columns={2}
/>
```

### InteractiveDemo

```mdx
<InteractiveDemo title="My Demo">
  <div>Your interactive content here</div>
</InteractiveDemo>
```

## Design System

### Colors

- **Backgrounds**: cream, sand
- **Text**: ink, forest
- **Accents**: sage, clay, rust
- **Highlights**: sky, lavender, peach

### Typography

- **Headings**: Merriweather (serif)
- **Body**: Inter (sans-serif)
- **Code**: Space Mono (monospace)

## Building for Production

```bash
npm run build
```

This creates a static site in the `dist/` folder ready for deployment.

### Deploy To:

- **Vercel**: `npx vercel`
- **Netlify**: `npx netlify deploy --prod`
- **GitHub Pages**: Push to GitHub and enable Pages

## Next Steps

1. **Customize the Design**
   - Edit colors in `tailwind.config.mjs`
   - Modify styles in `src/styles/global.css`

2. **Update Site Info**
   - Change site name in `src/layouts/BaseLayout.astro`
   - Update author name in `src/content/config.ts`

3. **Add More Features**
   - Create an About page
   - Add RSS feed
   - Implement search
   - Add reading time estimates

4. **Replace Placeholders**
   - Add real images to `public/images/blog/`
   - Update the sample blog post
   - Add your own content!

## File Structure Quick Reference

```
src/
├── components/mdx/     → Custom MDX components
├── content/blog/       → Your blog posts (.mdx)
├── layouts/            → Page layouts
├── pages/              → Routes (index, blog)
└── styles/             → Global CSS

public/
└── images/blog/        → Blog post images
```

## Tips

- Use `draft: true` in frontmatter to hide posts in production
- Images in `public/` are referenced as `/images/blog/filename.png`
- Path aliases like `@/components` are configured in `tsconfig.json`
- Run `npm run astro check` to validate TypeScript

Happy blogging! 🌱
