# Flame Proof — Fire Protection Solutions

Landing page for **Flame Proof**, a fire protection services company offering Annual Maintenance Contracts (AMC), fire pump installation & commissioning, fire alarm & hydrant systems, and 24/7 emergency breakdown support.

## Tech

A dependency-free, single-page static site — plain HTML, CSS, and vanilla JS. No build step.

| File | Purpose |
|------|---------|
| `index.html` | Markup + structured data (JSON-LD) |
| `styles.css` | All styling, dark/light themes, responsive layout |
| `script.js` | Theme toggle, mobile menu, nav shrink, scroll reveal, contact-form validation + WhatsApp compose |
| `images/` | Hero background & About section imagery |

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

Replace the placeholder details across `index.html`, `script.js`, and the JSON-LD:

- Phone / WhatsApp (`919082096962`)
- Email (`info@flameproof.com`)
- Address & geo coordinates
- Social profile URLs

The Open Graph / Twitter image tags already point at the absolute deploy URL (`https://www.flameproof.com/images/hero-bg.png`) — update the domain to match where you host it.
