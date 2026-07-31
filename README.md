# Flame Proof — Fire Protection Solutions

Landing page for **Flame Proof**, a fire protection services company offering Annual Maintenance Contracts (AMC), fire pump installation & commissioning, fire alarm & hydrant systems, and 24/7 emergency breakdown support.

## Tech

A dependency-free, single-page static site — plain HTML, CSS, and vanilla JS. No build step.

| File | Purpose |
|------|---------|
| `index.html` | Markup + structured data (JSON-LD) |
| `styles.css` | All styling, dark/light themes, responsive layout |
| `script.js` | Theme toggle, mobile menu, nav shrink, scroll reveal, contact-form validation + WhatsApp compose |
| `images/` | Hero background (WebP), About photo (WebP+PNG), 1200×630 social image |
| `robots.txt` | Crawl rules for search engines |
| `sitemap.xml` | Sitemap for search engines |

## Run locally

Open `index.html` directly, or serve it (recommended, so paths/JS behave like production):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Features

- Dark / light theme toggle (persists via `localStorage`, respects system preference)
- Fully responsive (desktop → mobile) with a hamburger menu under 900px
- Accessible: skip link, ARIA labels, keyboard-focusable, reduced-motion support
- SEO-ready: meta tags, Open Graph / Twitter cards, LocalBusiness + FAQ + Breadcrumb JSON-LD
- Contact form validates input and composes a pre-filled WhatsApp message

## Before going live

Phone/WhatsApp is set to `+91 90820 96962`. Still confirm/replace across `index.html` and the JSON-LD:

- Email (`info@flameproof.in`) — confirm the mailbox
- Street address (`streetAddress` is a placeholder; locality is set to Mumbai, Maharashtra)
- Social profile URLs (`facebook.com/flameproof`, `instagram.com/flameproof`, etc. are placeholders)

The canonical URL, Open Graph / Twitter tags, and JSON-LD all use `https://flameproof.in`, and the social share image is `https://flameproof.in/images/og-image.png` (1200×630). Point the `flameproof.in` domain at your host (e.g. GitHub Pages custom domain) so those URLs resolve — `robots.txt` and `sitemap.xml` at the site root advertise the sitemap to search engines.
