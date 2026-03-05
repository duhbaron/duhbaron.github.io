# ✈ Aerolux Aviation — Angular Website

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm start
# → Open http://localhost:4200
```

## Deploy to GitHub Pages

```bash
# Build + deploy in one command
npm run deploy
```

## Project Structure

```
src/app/components/
  navbar/         ← Navigation bar
  hero/           ← Landing hero section
  booking/        ← Service booking form
  gallery/        ← Before & after gallery
  testimonials/   ← Client reviews
  contact/        ← Quote request form
  footer/         ← Footer links
```

## How to Edit Content

### Change your phone / email / address
→ Open `src/app/components/contact/contact.component.ts`
→ Edit the `contactItems` array

### Add gallery photos (real images)
→ Upload photos to [cloudinary.com](https://cloudinary.com)
→ Open `src/app/components/gallery/gallery.component.ts`
→ Add `solidImage: 'YOUR_CLOUDINARY_URL'` to any gallery item

### Edit testimonials
→ Open `src/app/components/testimonials/testimonials.component.ts`
→ Edit the `testimonials` array

### Change services list
→ Open `src/app/components/hero/hero.component.ts`
→ Edit the `services` array

### Edit booking packages
→ Open `src/app/components/booking/booking.component.ts`
→ Edit the `packages` array

## Colors & Branding
→ Open `src/styles.css`
→ Edit CSS variables at the top (--navy, --gold, --sky, etc.)
