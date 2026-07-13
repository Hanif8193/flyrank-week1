<div align="center">

<img src="public/Hero.png" alt="FlowPilot Dashboard" width="700" />

# FlowPilot

### AI-Powered Workflow Automation Platform

A production-ready SaaS landing page built with Next.js 16, React 19, and Tailwind CSS 4 — featuring authentication, a waitlist API, animated UI, dark/light themes, and comprehensive SEO & accessibility.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38BDF8?logo=tailwindcss)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma-7.8-2D3748?logo=prisma)](https://www.prisma.io)
[![Jest](https://img.shields.io/badge/Jest-30-C21325?logo=jest)](https://jestjs.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.18%2B-339933?logo=node.js)](https://nodejs.org)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel)](https://flyrank-week1.vercel.app)

</div>

---

## Table of Contents

- [Project Overview](#project-overview)
- [Assignment Information](#assignment-information)
- [Live Demo](#live-demo)
- [Project Highlights](#project-highlights)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Performance Optimizations](#performance-optimizations)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [Testing](#testing)
- [Browser Support](#browser-support)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

---

## Project Overview

**FlowPilot** is a complete, production-ready SaaS landing page for an AI-powered workflow automation platform. It showcases modern frontend engineering across nine distinct page sections, user authentication with a PostgreSQL database, a functional waitlist API, and 46 automated tests.

The project demonstrates best practices in performance (dynamic code splitting, image optimization), accessibility (WCAG AA, keyboard navigation, screen reader support), SEO (structured data, sitemap, metadata), and developer experience (TypeScript strict mode, ESLint 9 flat config, Prettier, Jest 30).

---

## Assignment Information

| | |
|---|---|
| **Program** | FlyRank Frontend AI Engineering Internship |
| **Deliverable** | Week 1 Assignment |
| **Objective** | Build a fully functional, accessible, SEO-optimized SaaS landing page with authentication, database integration, and automated testing |
| **Author** | [Mohammad Hanif Memon](https://github.com/Hanif8193) |

---

## Live Demo

| | Link |
|---|---|
| **Live Website** | [flyrank-week1.vercel.app](https://flyrank-week1.vercel.app) |
| **Demo Video** | [Watch on Google Drive](https://drive.google.com/file/d/1_hcIcl-OrxRd3zeMHW-sUgifKePOSBvP/view?usp=drive_link) |
| **GitHub Repository** | [Hanif8193/flyrank-week1](https://github.com/Hanif8193/flyrank-week1) |

---

## Project Highlights

| Area | Achievement |
|---|---|
| **Sections** | 9 landing page sections with scroll-triggered animations |
| **Authentication** | NextAuth v5 with credentials provider, JWT sessions, and Prisma adapter |
| **API** | RESTful waitlist endpoint with Zod validation and duplicate detection |
| **Database** | PostgreSQL via Prisma 7.8 with 5 models and 2 migrations |
| **Tests** | 46 tests passing across 8 suites (Jest 30 + React Testing Library) |
| **Accessibility** | WCAG AA compliant — skip-to-content, ARIA labels, focus trapping, reduced motion |
| **SEO** | Structured data (JSON-LD), auto-generated sitemap/robots, OpenGraph & Twitter Cards |
| **Performance** | Dynamic code splitting, AVIF/WebP images, font preload, lazy-loaded mobile menu |
| **Security** | 6 HTTP security headers including HSTS, CSP-compatible, X-Frame-Options |

---

## Features

### User Experience

- **9-Section Landing Page** — Hero, Trusted By, Features, Workflow, Dashboard Preview, Pricing, Testimonials, FAQ, and Waitlist
- **Responsive Design** — Fully responsive from 320px to 2560px with 6 breakpoints
- **Dark / Light Theme** — System preference detection with manual toggle via `next-themes`
- **Scroll Animations** — Framer Motion with `prefers-reduced-motion` support
- **Pricing Toggle** — Monthly/annual billing switch with animated price transitions
- **FAQ Accordion** — Expandable questions with keyboard navigation via `@base-ui/react`
- **Dashboard Preview** — CSS/HTML mockup with analytics cards, bar chart, and activity table
- **Waitlist Form** — Email validation with Zod, localStorage deduplication, and POST to `/api/waitlist`

### Authentication

- **NextAuth v5** — Credentials provider with JWT strategy and Prisma adapter
- **Login & Signup** — React Hook Form + Zod validation with ARIA error announcements
- **Password Hashing** — bcryptjs with 12 salt rounds
- **Session Management** — JWT-based with role support (Customer / Admin)
- **Server Action Signup** — Secure server-side user creation with duplicate email checks

### Performance

- **Dynamic Code Splitting** — Below-the-fold sections loaded via `next/dynamic`
- **Lazy Loading** — Mobile menu drawer loaded on first open
- **Image Optimization** — AVIF/WebP formats, priority loading, responsive `sizes`
- **Font Optimization** — Inter via `next/font/google` with `display: 'swap'` and `preload`
- **Package Optimization** — `optimizePackageImports` for `framer-motion` and `lucide-react`

### Accessibility

- **Skip-to-content link** — Keyboard users bypass navigation directly to `<main>`
- **ARIA labels** — All interactive elements have descriptive accessible names
- **Focus management** — Mobile drawer traps focus, returns focus on close
- **Keyboard navigation** — All components operable via Tab, Enter, Space, and Escape
- **Reduced motion** — `prefers-reduced-motion` disables all Framer Motion animations
- **Semantic HTML** — Proper heading hierarchy, landmark elements, `aria-hidden` on decoratives
- **Color contrast** — WCAG AA compliant (4.5:1 normal text, 3:1 large text)

### SEO

- **Metadata** — Template-based titles, OpenGraph, Twitter Cards, canonical URLs
- **Structured Data** — JSON-LD for WebSite and Organization schemas
- **Sitemap & Robots** — Auto-generated `sitemap.xml` and `robots.txt`
- **PWA Support** — `manifest.json` for installability on mobile and desktop

### Developer Experience

- **TypeScript** — Strict mode with `@/*` path aliases
- **ESLint 9** — Flat config with `core-web-vitals` and `typescript` rules
- **Prettier** — Zero-config with Tailwind CSS class sorting
- **Unit Testing** — 46 tests across 8 suites with Jest 30 and React Testing Library
- **Security Headers** — X-Frame-Options, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.10 | React framework with App Router |
| React | 19.2.4 | UI library |
| TypeScript | 5.8.3 | Strict type safety |
| Tailwind CSS | 4.1.8 | Utility-first CSS (CSS-first config) |
| Framer Motion | 12.42.2 | Scroll animations and transitions |
| Lucide React | 1.23.0 | Icon library |
| next-themes | 0.4.6 | Dark/light theme switching |
| @base-ui/react | 1.6.0 | Accessible accordion primitive |
| class-variance-authority | 0.7.1 | Component variant management |
| clsx + tailwind-merge | 2.1 + 3.6 | Conditional class merging |
| shadcn | 4.13.0 | UI component system |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| Next.js API Routes | — | REST API endpoints |
| Prisma ORM | 7.8.0 | Type-safe database ORM |
| PostgreSQL | — | Primary database (Neon compatible) |
| NextAuth v5 | 5.0.0-beta.31 | Authentication |
| bcryptjs | 3.0.3 | Password hashing |
| @prisma/adapter-pg | 7.8.0 | PostgreSQL driver adapter |

### Validation

| Technology | Version | Purpose |
|---|---|---|
| Zod | 4.4.3 | Schema validation |
| React Hook Form | 7.81.0 | Form state management |
| @hookform/resolvers | 5.4.0 | Zod integration for React Hook Form |

### Testing

| Technology | Version | Purpose |
|---|---|---|
| Jest | 30.4.2 | Test runner |
| ts-jest | 29.4.11 | TypeScript support for Jest |
| @testing-library/react | 16.3.2 | Component testing |
| @testing-library/user-event | 14.6.1 | User interaction simulation |
| @testing-library/jest-dom | 6.9.1 | Custom DOM matchers |
| jest-environment-jsdom | 30.4.1 | Browser environment simulation |

### Code Quality

| Technology | Version | Purpose |
|---|---|---|
| ESLint | 9.22.0 | Linting (flat config) |
| eslint-config-next | 16.2.10 | Next.js ESLint rules |
| Prettier | 3.9.5 | Code formatting |
| prettier-plugin-tailwindcss | 0.8.0 | Tailwind class sorting |

---

## Screenshots

### Hero Section

![Hero Section](public/Hero.png)

> The hero section features a gradient headline, dual CTAs, and a dashboard preview image with priority loading for optimal LCP.

---

## Installation

### Prerequisites

- **Node.js** 18.18+ (recommended: 20.x or 22.x)
- **PostgreSQL** database (local or hosted on [Neon](https://neon.tech))
- **npm**, **yarn**, **pnpm**, or **bun**

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Hanif8193/flyrank-week1.git
   cd flyrank-week1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your database credentials and secrets. See [Environment Variables](#environment-variables) for details.

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

### Database Setup

For a quick local database, use Docker:

```bash
docker run --name flowpilot-db \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=flowpilot \
  -p 5432:5432 \
  -d postgres
```

Then set `DATABASE_URL=postgresql://postgres:password@localhost:5432/flowpilot` in your `.env.local`.

---

## Environment Variables

Create a `.env.local` file in the project root:

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string (e.g. `postgresql://user:pass@host:5432/db`) |
| `AUTH_SECRET` | Yes | Secret key for NextAuth (generate with `npx auth secret`) |
| `AUTH_URL` | Yes | Base URL for authentication callbacks (e.g. `http://localhost:3000`) |
| `NEXT_PUBLIC_SITE_URL` | No | Public site URL for metadata (defaults to `http://localhost:3000`) |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |

> Never commit `.env.local` or expose secrets. The `.gitignore` excludes all `.env*` files.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm test` | Run all 46 tests across 8 suites |
| `npm run lint` | Run ESLint |
| `npm run format` | Auto-format source files with Prettier |
| `npm run format:check` | Check formatting without modifying files |

---

## Project Structure

```
flyrank-week1/
├── public/
│   ├── Hero.png                                    # Hero section dashboard image
│   ├── manifest.json                               # PWA manifest
│   ├── file.svg / globe.svg / window.svg           # UI assets
│   ├── next.svg / vercel.svg                       # Framework logos
├── prisma/
│   ├── schema.prisma                               # Database schema (5 models)
│   └── migrations/                                 # 2 migrations
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts         # NextAuth endpoint
│   │   │   └── waitlist/
│   │   │       ├── route.ts                        # Waitlist POST endpoint
│   │   │       └── route.test.ts                   # API tests (4)
│   │   ├── login/
│   │   │   ├── page.tsx                            # Login page
│   │   │   └── login-form.tsx                      # Login form
│   │   ├── signup/
│   │   │   ├── page.tsx                            # Signup page
│   │   │   ├── signup-form.tsx                     # Signup form
│   │   │   └── actions.ts                          # Server action
│   │   ├── privacy-policy/page.tsx                 # Privacy policy
│   │   ├── terms/page.tsx                          # Terms of service
│   │   ├── globals.css                             # Tailwind + theme tokens
│   │   ├── layout.tsx                              # Root layout
│   │   ├── page.tsx                                # Homepage
│   │   ├── favicon.ico                             # Favicon
│   │   ├── robots.ts                               # Robots.txt generator
│   │   └── sitemap.ts                              # Sitemap generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.tsx                      # Navigation bar
│   │   │   │   ├── Navbar.test.tsx                 # Navbar tests (6)
│   │   │   │   └── MobileMenu.tsx                  # Mobile drawer
│   │   │   └── Footer/
│   │   │       ├── Footer.tsx                      # Site footer
│   │   │       └── Footer.test.tsx                 # Footer tests (5)
│   │   ├── providers/
│   │   │   ├── Providers.tsx                       # Session + Theme providers
│   │   │   └── ThemeProvider.tsx                   # next-themes wrapper
│   │   ├── sections/
│   │   │   ├── Hero/Hero.tsx                       # Hero with CTA buttons
│   │   │   ├── Trusted/Trusted.tsx                 # Company logos strip
│   │   │   ├── Features/Features.tsx               # 6 feature cards
│   │   │   ├── Workflow/Workflow.tsx               # 4-step process
│   │   │   ├── Dashboard/Dashboard.tsx             # Dashboard preview mockup
│   │   │   ├── Pricing/
│   │   │   │   ├── Pricing.tsx                     # Pricing cards + toggle
│   │   │   │   └── Pricing.test.tsx                # Pricing tests (5)
│   │   │   ├── Testimonials/Testimonials.tsx       # 3 testimonial cards
│   │   │   ├── FAQ/
│   │   │   │   ├── FAQ.tsx                         # Accordion FAQ
│   │   │   │   └── FAQ.test.tsx                    # FAQ tests (6)
│   │   │   └── Waitlist/
│   │   │       ├── Waitlist.tsx                    # Waitlist section wrapper
│   │   │       ├── Waitlist.test.tsx               # Waitlist tests (6)
│   │   │       └── WaitlistForm.tsx                # Email form
│   │   └── ui/
│   │       ├── accordion.tsx                       # Base UI accordion
│   │       ├── badge.tsx                           # Badge component
│   │       ├── button.tsx                          # Button variants
│   │       ├── input.tsx                           # Input component
│   │       ├── label.tsx                           # Label component
│   │       ├── AnimatedSection/
│   │       │   ├── AnimatedSection.tsx             # Scroll animation wrapper
│   │       │   └── AnimatedSection.test.tsx        # Animation tests (3)
│   │       ├── BillingToggle/BillingToggle.tsx     # Monthly/annual switch
│   │       └── ThemeToggle/
│   │           ├── ThemeToggle.tsx                 # Dark/light toggle
│   │           └── ThemeToggle.test.tsx            # Theme tests (11)
│   ├── hooks/
│   │   └── useWaitlistForm.ts                      # Waitlist form state hook
│   ├── lib/
│   │   ├── animations.ts                           # Framer Motion variants
│   │   ├── constants.ts                            # Site config, nav links, social links
│   │   ├── metadata.ts                             # Metadata & JSON-LD builder
│   │   ├── prisma.ts                               # Prisma client singleton
│   │   ├── utils.ts                                # cn() utility (clsx + twMerge)
│   │   ├── validations.ts                          # Zod schemas
│   │   └── waitlist-store.ts                       # localStorage CRUD
│   ├── data/
│   │   └── faq.ts                                  # 6 FAQ items
│   ├── types/
│   │   ├── site.ts                                 # SiteConfig, NavLink, SocialLink
│   │   └── waitlist.ts                             # WaitlistEntry type
│   ├── auth.ts                                     # NextAuth v5 configuration
│   └── generated/prisma/                           # Auto-generated Prisma client
├── .env.example                                    # Environment variable template
├── eslint.config.mjs                               # ESLint flat config
├── jest.config.ts                                  # Jest configuration
├── next.config.ts                                  # Next.js configuration
├── package.json                                    # Dependencies and scripts
├── postcss.config.mjs                              # PostCSS (Tailwind plugin)
├── prisma.config.ts                                # Prisma configuration
├── prettier.config.mjs                             # Prettier config
└── tsconfig.json                                   # TypeScript configuration
```

---

## Architecture

### App Router

FlowPilot uses the Next.js **App Router** (`src/app/`) for file-based routing:

| Route | Type | Description |
|---|---|---|
| `/` | Page | Homepage with 9 dynamic sections |
| `/login` | Page | Login with credentials form |
| `/signup` | Page | Signup with server action |
| `/privacy-policy` | Page | Static privacy policy |
| `/terms` | Page | Static terms of service |
| `/api/waitlist` | API | Waitlist email signup (POST) |
| `/api/auth/[...nextauth]` | API | NextAuth handlers (GET/POST) |

### Component Architecture

- **`sections/`** — Page sections (Hero, Features, Pricing, etc.) — mostly client components with animations
- **`layout/`** — Persistent layout elements (Navbar, Footer)
- **`ui/`** — Reusable primitives (Button, Badge, Input, Accordion, ThemeToggle, AnimatedSection)
- **`providers/`** — Context wrappers (SessionProvider, ThemeProvider)

### Database Schema

Prisma 7.8 with PostgreSQL — 5 models:

| Model | Purpose |
|---|---|
| `User` | Authentication with email/password, roles (Customer/Admin) |
| `Account` | OAuth account linkage |
| `Session` | Active sessions |
| `VerificationToken` | Email verification tokens |
| `Waitlist` | Waitlist email entries with unique constraint |

The Prisma client is instantiated as a singleton with a `globalThis` caching pattern to prevent multiple instances in development.

### Authentication Flow

**NextAuth v5** provides credentials-based authentication:

1. User submits email/password on `/login`
2. `authorize()` looks up user in PostgreSQL via Prisma
3. Password verified with `bcryptjs.compare()`
4. JWT token issued with user ID
5. Session accessible via `auth()` in Server Components

---

## Performance Optimizations

| Optimization | Implementation |
|---|---|
| Dynamic Code Splitting | 7 below-the-fold sections loaded via `next/dynamic` |
| Lazy Loading | Mobile menu drawer loaded on first open |
| Package Optimization | `optimizePackageImports` for `framer-motion` and `lucide-react` |
| Image Formats | AVIF and WebP via `images.formats` in `next.config.ts` |
| Font Preloading | Inter loaded with `preload: true` |
| Font Display | `font-display: swap` prevents FOIT |
| Hero Image Priority | Above-the-fold image uses `priority` loading |
| Responsive Images | `sizes` attribute for optimal image serving |

### Core Web Vitals Targets

| Metric | Target | Strategy |
|---|---|---|
| **LCP** | < 2.5s | Hero image priority, font preload, optimized formats |
| **CLS** | < 0.1 | Explicit `width`/`height` on images, font-display swap |
| **TBT** | < 200ms | Dynamic imports, code-split framer-motion, lazy mobile menu |

---

## Accessibility

### Keyboard Navigation

- All interactive elements are reachable and operable via keyboard
- Mobile drawer traps focus while open and returns focus on close
- FAQ accordion supports Enter, Space, and Escape keys
- Pricing toggle operable with arrow keys

### Focus Management

- Visible `:focus-visible` outlines on all interactive elements
- Skip-to-content link allows keyboard users to bypass navigation
- Focus is managed in the mobile menu dialog

### ARIA Support

- All buttons and links have descriptive accessible names
- Form inputs use `aria-describedby` for error messages
- `aria-invalid` marks fields with validation errors
- Mobile menu uses `role="dialog"` and `aria-modal="true"`

### Semantic HTML

- Proper heading hierarchy (`<h1>` through `<h3>`)
- Landmark elements: `<header>`, `<nav>`, `<main>`, `<footer>`
- Decorative elements marked with `aria-hidden="true"`

### Color Contrast

- WCAG AA compliant (4.5:1 for normal text, 3:1 for large text)
- Dark and light themes both meet contrast requirements

### Reduced Motion

- `prefers-reduced-motion: reduce` disables all Framer Motion animations
- AnimatedSection respects the system preference automatically

---

## SEO

### Metadata

- **Title** — Template-based (`%s | FlowPilot`) with homepage default
- **Description** — From `SITE_CONFIG.description`
- **Canonical URLs** — Generated via `metadataBase`

### Open Graph & Twitter

- Full OG tags: title, description, images (1200x630), type (`website`), locale (`en_US`)
- `summary_large_image` Twitter card type

### Structured Data

- **WebSite** — Schema.org `WebSite` with `SearchAction` potential action
- **Organization** — Schema.org `Organization` with logo and social profiles

### Files

| File | Purpose |
|---|---|
| `/sitemap.xml` | Auto-generated sitemap (3 routes: `/`, `/privacy-policy`, `/terms`) |
| `/robots.txt` | Allow all crawlers, link to sitemap |
| `/manifest.json` | PWA manifest for installability |

---

## Testing

### Framework

- **Jest 30** with `ts-jest` and `jsdom` environment
- **React Testing Library** for component testing
- **@testing-library/user-event** for interaction simulation
- **@testing-library/jest-dom** for custom DOM matchers

### Test Suites

| Suite | Tests | What It Tests |
|---|---|---|
| ThemeToggle | 11 | Theme switching, system preference, localStorage persistence, ARIA labels, icon states |
| Navbar | 6 | Logo rendering, navigation links, CTA buttons, hamburger toggle, Escape key, scroll behavior |
| Waitlist | 6 | Email validation, loading state, success state, duplicate detection, error handling |
| FAQ | 6 | Question rendering, accordion expand/collapse, keyboard navigation |
| Pricing | 5 | Monthly/annual toggle, price updates, plan names, accessibility attributes |
| Footer | 5 | Navigation links, social icons, external link `rel` attributes, copyright year |
| AnimatedSection | 3 | Scroll animation variants, reduced motion preference handling |
| API Route | 4 | Successful creation (201), duplicate email (409), validation error (422), server error (500) |
| **Total** | **46** | **All passing** |

### Running Tests

```bash
npm test                        # Run all tests
npm test -- --coverage          # Run with coverage report
npm test -- --watch             # Watch mode
npm test -- ThemeToggle          # Run a specific suite
```

---

## Browser Support

| Browser | Minimum Version | Status |
|---|---|---|
| Chrome | 100+ | Full support |
| Firefox | 100+ | Full support |
| Safari | 15+ | Full support |
| Edge | 100+ | Full support |
| iOS Safari | 15+ | Full support |
| Chrome Android | 100+ | Full support |

**Not supported:** Internet Explorer 11

### Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | 320px – 639px | Single column, stacked layout |
| Tablet | 640px – 767px | 2-column grids |
| Laptop | 768px – 1023px | Dashboard sidebar, 2-col pricing |
| Desktop | 1024px – 1279px | Desktop nav, 3-col pricing, 2-col sections |
| Large | 1280px – 1535px | Max-width container |
| XL | 1536px+ | Full-width with constraints |

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [vercel.com/new](https://vercel.com/new)
3. Configure environment variables:
   - `DATABASE_URL` — Your PostgreSQL connection string
   - `AUTH_SECRET` — Generate with `npx auth secret`
   - `AUTH_URL` — Your production URL (e.g. `https://flyrank-week1.vercel.app`)
   - `NEXT_PUBLIC_SITE_URL` — Same as `AUTH_URL`
4. Deploy — Vercel auto-detects Next.js and configures build settings

### Local Production Build

```bash
npm run build
npm start
```

Ensure the production database has the schema pushed via `npx prisma db push`.

---

## Future Improvements

- [ ] **Stripe Payments** — Real subscription billing with Stripe Checkout
- [ ] **Admin Dashboard** — User profile, settings, and session management
- [ ] **AI Integrations** — Connect to OpenAI/Claude APIs for workflow automation
- [ ] **Team Management** — Invite members, roles, and permissions
- [ ] **Workflow Builder** — Drag-and-drop interface for creating automation flows
- [ ] **Real Analytics** — Usage metrics replacing the mock dashboard
- [ ] **Email Notifications** — Waitlist confirmation and update emails
- [ ] **Admin Panel** — View and manage waitlist entries
- [ ] **Internationalization** — Multi-language support with `next-intl`
- [ ] **E2E Testing** — Playwright tests for critical user flows

---

## Contributing

Contributions are welcome! Please see the [Contributing Guide](CONTRIBUTING.md) for detailed information.

### Quick Start

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes following [Conventional Commits](https://www.conventionalcommits.org/)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Quality Gates

Before submitting, ensure all checks pass:

```bash
npx tsc --noEmit            # Type check
npx eslint .                # Lint
npm run format:check        # Format check
npm test                    # Tests (46 passing)
npm run build               # Production build
```

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Author

**Mohammad Hanif Memon**

- GitHub: [@Hanif8193](https://github.com/Hanif8193)

---

## Acknowledgements

- [FlyRank](https://flyrank.com) — Frontend AI Engineering Internship program
- [Next.js](https://nextjs.org) — React framework with App Router
- [React](https://react.dev) — UI library
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS framework
- [Prisma](https://www.prisma.io) — Type-safe database ORM
- [NextAuth](https://next-auth.js.org) — Authentication for Next.js
- [Vercel](https://vercel.com) — Deployment platform

---

<div align="center">

**Built with Next.js 16 + React 19 + Tailwind CSS 4 + Prisma 7**

</div>
