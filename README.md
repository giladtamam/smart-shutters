# Smart Electric Shutters Website (תריסים חשמליים חכמים)

SEO-optimized, RTL Hebrew lead-generation website for smart electric shutter services.

## Tech Stack

- **Next.js 16** (App Router) with TypeScript
- **Tailwind CSS 4** with full RTL support
- **Heebo** Hebrew web font via `next/font/google`
- Static site generation for maximum performance

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── blog/               # Blog listing + [slug] articles
│   ├── services/           # 5 service pages
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   └── robots.ts           # Auto-generated robots.txt
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, FAQ, Reviews, CTA, ContactForm, etc.
│   ├── ui/                 # WhatsAppButton, PhoneButton, ServiceCard
│   └── seo/                # JSON-LD schema markup components
└── lib/
    ├── content/            # Hebrew content for services and blog
    ├── site-config.ts      # Business info placeholders
    └── utils.ts            # WhatsApp URL builder, helpers
```

## Pages

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `/` | Main landing, converts + ranks for primary keywords |
| Installation | `/services/installation` | התקנת תריסים חשמליים |
| Repair | `/services/repair` | תיקון תריס חשמלי |
| Motors | `/services/motors` | מנועים לתריסים חשמליים |
| Smart Shutter | `/services/smart-shutter` | תריס חכם לבית חכם |
| Emergency | `/services/emergency` | שירות חירום 24/7 |
| About | `/about` | Company background |
| Blog | `/blog` | 10 SEO articles |
| Sitemap | `/sitemap.xml` | Auto-generated |
| Robots | `/robots.txt` | Auto-generated |

## Customization

### Business Details

Edit `src/lib/site-config.ts` to update:
- Business name
- Phone number
- WhatsApp number
- Email
- Address
- Service areas
- Social media links

### Content

- Service page content: `src/lib/content/services.ts`
- Blog articles: `src/lib/content/blog-posts.ts`

### Domain

Update `metadataBase` in `src/app/layout.tsx` and the `BASE_URL` in `src/app/sitemap.ts` with your actual domain.

## SEO Features

- Full Hebrew RTL support
- Optimized H1-H3 heading structure
- JSON-LD schema markup (LocalBusiness, Service, FAQPage, BlogPosting)
- Unique meta titles and descriptions per page
- Open Graph tags
- Auto-generated sitemap.xml and robots.txt
- Canonical URLs via Next.js metadata API
- Internal linking between services and blog posts
- Static generation for fast load times

## Lead Generation

- Sticky header with click-to-call phone button
- Floating WhatsApp button
- Contact form that redirects to WhatsApp
- CTA sections placed every 2 sections
- Scarcity elements ("זמינות מוגבלת היום")
- Trust badges and social proof

## Build

```bash
npm run build
```

## Deploy

Deploy to Vercel, Netlify, or any Node.js hosting. The site is statically generated for optimal performance.
