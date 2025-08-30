# Café Coco

A modern, static café website built with Next.js 14+, TypeScript, and Tailwind CSS. This marketing and menu discovery site drives online orders through Toast POS integration.

## Features

- **Static Site Generation** - Fast, SEO-optimized pages
- **Mobile-First Design** - Responsive across all devices
- **Toast POS Integration** - Seamless online ordering
- **Modern Stack** - Next.js 14+ App Router, TypeScript, Tailwind CSS
- **Accessible** - WCAG compliant with semantic HTML and proper contrast
- **Performance Optimized** - Fast loading with Next.js Image optimization

## Pages

- **Homepage** - Hero section, featured menu items, café story, location info
- **Menu** - SEO-friendly menu overview organized by categories
- **About** - Café story, team introductions, values and mission
- **Contact** - Location, hours, contact form, and map integration

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Deployment

The site is configured for static export and can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **AWS S3 + CloudFront**
- Any static hosting service

To build for static deployment:

```bash
npm run build
```

This generates a static export in the `out` directory.

## Menu Content

The menu data is located in `src/lib/menu-data.ts` and includes:

- **Pastries** - Croissants, Kouign-Amann, Fruit Tarts
- **Tartines** - Avocado, Smoked Salmon, Caprese options
- **Egg Dishes** - Breakfast Sandwich, Zucchini Pancakes, Omelettes
- **Smoothies** - Green Power, Berry Blast, Tropical Paradise
- **Bowls** - Acai Bowl, Greek Yogurt Granola Bowl

Popular items are highlighted throughout the site based on the "REALLY POPULAR" notation from the original menu.

## Design System

### Colors
- **Coffee Palette** - Warm browns and earth tones
- **Cream Palette** - Light, creamy backgrounds
- **Forest Green** - Accent color for highlights and CTAs

### Typography
- **Inter** - Clean, modern sans-serif for body text
- **Playfair Display** - Elegant serif for headings

### Components
- Reusable components in `src/components/`
- Consistent spacing and sizing
- Hover effects and smooth transitions

## Toast POS Integration

The "Order Online" buttons are configured to open Toast POS in a new tab. Update the URL in `src/components/OrderButton.tsx` to point to your actual Toast ordering page.

## Image Assets

Place your images in the `public` directory:

- `public/hero-cafe.jpg` - Homepage hero background
- `public/menu/[item-id].jpg` - Menu item photos
- `public/team/[name].jpg` - Team member photos
- `public/about-hero.jpg` - About page hero image

All images should be optimized for web (WebP format recommended).

## SEO & Analytics

- Meta tags and Open Graph data configured
- Semantic HTML structure
- Optimized for local search
- Ready for Google Analytics integration

## License

MIT License - see LICENSE file for details.
