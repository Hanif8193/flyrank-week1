<div align="center">

# FlowPilot

### AI-Powered Workflow Automation Platform

A modern, production-ready SaaS landing page for an AI workflow automation platform, built with Next.js 16, React 19, and Tailwind CSS 4.

Features include dynamic imports, dark/light theme switching, animated UI, waitlist form with API validation, FAQ accordion, pricing toggle, authentication, and full SEO & accessibility compliance.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38BDF8?logo=tailwindcss)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma-7.8-2D3748?logo=prisma)](https://www.prisma.io)
[![Jest](https://img.shields.io/badge/Jest-30-C21325?logo=jest)](https://jestjs.io)
[![MIT License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.18%2B-339933?logo=node.js)](https://nodejs.org)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://vercel.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen)](CONTRIBUTING.md)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-blue)](CONTRIBUTING.md)

</div>

---

## Table of Contents

- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
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

**FlowPilot** is a production-ready SaaS landing page for an AI-powered workflow automation platform. Built as part of the **FlyRank Frontend AI Engineering Week 1** assignment, it demonstrates modern web development best practices across performance, accessibility, SEO, authentication, and developer experience.

The project serves as a complete marketing site with nine distinct sections — Hero, Trusted By, Features, Workflow, Dashboard Preview, Pricing, Testimonials, FAQ, and Waitlist — along with user authentication (login/signup), a functional waitlist API, and a comprehensive test suite.

**Target audience:** Frontend engineers, technical recruiters, and FlyRank evaluation reviewers looking for production-quality code.

**Assignment objective:** Build a fully functional, accessible, SEO-optimized SaaS landing page with authentication, database integration, and automated testing.

---

## Live Demo

> **Note:** Deploy the project to see it live.

- **Live Demo:** [https://your-demo-url.vercel.app](https://your-demo-url.vercel.app)
- **Repository:** [https://github.com/Hanif8193/flyrank-week1](https://github.com/Hanif8193/flyrank-week1)

---

## Features

### User Experience

- **AI SaaS Landing Page** — Complete marketing page with 9 sections (Hero, Trusted, Features, Workflow, Dashboard, Pricing, Testimonials, FAQ, Waitlist)
- **Responsive Design** — Fully responsive from 320px to 2560px across all breakpoints
- **Dark / Light Theme** — System preference detection with manual toggle via `next-themes`
- **Animated UI** — Scroll-triggered animations with Framer Motion, respects `prefers-reduced-motion`
- **Pricing Toggle** — Monthly/annual billing switch with animated price transitions
- **FAQ Accordion** — Expandable questions with keyboard navigation via `@base-ui/react`
- **Dashboard Preview** — Decorative CSS/HTML dashboard mockup with analytics cards and activity table
- **Waitlist Form** — Email validation with Zod, localStorage deduplication, and POST to `/api/waitlist`

### Authentication

- **NextAuth v5** — Credentials provider with JWT strategy and Prisma adapter
- **Login / Signup** — Full forms with React Hook Form + Zod validation, error handling, and ARIA support
- **Password Hashing** — bcryptjs with 12 salt rounds
- **Session Management** — JWT-based sessions with role support (Customer / Admin)

### Performance

- **Dynamic Code Splitting** — Below-the-fold sections loaded via `next/dynamic`, mobile menu lazy-loaded
- **Image Optimization** — Next.js `<Image>` with AVIF/WebP formats, priority loading, responsive `sizes`
- **Font Optimization** — Inter loaded via `next/font/google` with `display: 'swap'` and `preload: true`
- **Package Optimization** — `optimizePackageImports` for `framer-motion` and `lucide-react`

### Accessibility

- **Skip-to-content link** — Keyboard users can skip to `<main>` landmark
- **ARIA labels** — All interactive elements have accessible names
- **Focus management** — Mobile drawer traps focus, returns focus on close
- **Keyboard navigation** — All components operable via Tab, Enter, Space, and Escape
- **Reduced motion** — `prefers-reduced-motion` disables animations
- **Semantic HTML** — Proper use of `<header>`, `<nav>`, `<main>`, `<footer>`, heading hierarchy
- **Color contrast** — WCAG AA compliant (4.5:1 for normal text, 3:1 for large text)

### SEO

- **Metadata** — Template-based titles, OpenGraph, Twitter Cards, canonical URLs
- **Structured Data** — JSON-LD for WebSite and Organization schemas
- **Sitemap & Robots** — Auto-generated `sitemap.xml` and `robots.txt`
- **PWA Support** — `manifest.json` for installability on mobile and desktop

### Developer Experience

- **TypeScript** — Strict mode with path aliases
- **ESLint 9** — Flat config with Next.js core-web-vitals and TypeScript rules
- **Prettier** — Auto-formatting with Tailwind CSS class sorting
- **Unit Testing** — 46 automated tests across 8 suites using Jest 30 and React Testing Library
- **Security Headers** — X-Frame-Options, HSTS, CSP-compatible headers, Permissions-Policy

---

## Tech Stack

### Frontend

| Technology       | Version  | Purpose                              |
| ---------------- | -------- | ------------------------------------ |
| Next.js          | 16.2.10  | React framework with App Router      |
| React            | 19.2.4   | UI library                           |
| TypeScript       | 5.8.3    | Type safety                          |
| Tailwind CSS     | 4.1.8    | Utility-first CSS (CSS-first config) |
| Framer Motion    | 12.42.2  | Scroll animations and transitions    |
| Lucide React     | 1.23.0   | Icon library                         |
| next-themes      | 0.4.6    | Dark/light theme switching           |
| @base-ui/react   | 1.6.0    | Accessible accordion primitive       |
| class-variance-authority | 0.7.1 | Component variant management |
| clsx + tailwind-merge | 2.1 + 3.6 | Conditional class merging |

### Backend

| Technology         | Version       | Purpose                            |
| ------------------ | ------------- | ---------------------------------- |
| Next.js API Routes | —             | REST API endpoints                 |
| Prisma ORM         | 7.8.0         | Database ORM                       |
| PostgreSQL         | —             | Primary database (Neon compatible) |
| NextAuth v5        | 5.0.0-beta.31 | Authentication                     |
| bcryptjs           | 3.0.3         | Password hashing                   |

### Validation

| Technology          | Version | Purpose                 |
| ------------------- | ------- | ----------------------- |
| Zod                 | 4.4.3   | Schema validation       |
| React Hook Form     | 7.81.0  | Form state management   |
| @hookform/resolvers | 5.4.0   | Zod integration for RHF |

### Testing

| Technology                  | Version | Purpose                        |
| --------------------------- | ------- | ------------------------------ |
| Jest                        | 30.4.2  | Test runner                    |
| @testing-library/react      | 16.3.2  | Component testing              |
| @testing-library/user-event | 14.6.1  | User interaction simulation    |
| @testing-library/jest-dom   | 6.9.1   | Custom DOM matchers            |
| jest-environment-jsdom      | 30.4.1  | Browser environment simulation |

### Formatting & Linting

| Technology                  | Version | Purpose                    |
| --------------------------- | ------- | -------------------------- |
| ESLint                      | 9.22.0  | Code linting (flat config) |
| eslint-config-next          | 16.2.10 | Next.js ESLint rules       |
| Prettier                    | 3.9.5   | Code formatting            |
| prettier-plugin-tailwindcss | 0.8.0   | Tailwind class sorting     |

---

## Screenshots

### Hero Section

![Hero Section](public/hero-dashboard.png)

### Dashboard Preview

_Dashboard mockup with analytics cards, workflow chart, and activity table — rendered entirely in CSS/HTML._

### Features

_Six feature cards showcasing AI automation, version control, collaboration, analytics, security, and performance._

### Pricing

_Three-tier pricing grid (Starter, Pro, Enterprise) with monthly/annual toggle._

### FAQ

_Expandable accordion with 6 questions about FlowPilot features and pricing._

### Waitlist

_Email signup form with validation, loading states, and success/duplicate/error feedback._

### Mobile View

_Fully responsive layout optimized for mobile devices with hamburger menu navigation._

---

## Installation

### Prerequisites

- **Node.js** 18.18+ (recommended: 20.x or 22.x)
- **PostgreSQL** database (local or hosted on [Neon](https://neon.tech))
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Hanif8193/flyrank-week1.git
   cd flyrank-week1
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your database credentials and other settings. See [Environment Variables](#environment-variables) for details.

4. **Generate Prisma client and push the schema:**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. **Open your browser** to [http://localhost:3000](http://localhost:3000)

### Database Setup

If you're using a new PostgreSQL database, you can use [Neon](https://neon.tech) for a free hosted database, or run PostgreSQL locally via Docker:

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

Create a `.env.local` file in the project root with the following variables:

| Variable               | Required | Description                                                               |
| ---------------------- | -------- | ------------------------------------------------------------------------- |
| `DATABASE_URL`         | Yes      | PostgreSQL connection string (e.g. `postgresql://user:pass@host:5432/db`) |
| `AUTH_SECRET`          | Yes      | Secret key for NextAuth (generate with `npx auth secret`)                 |
| `AUTH_URL`             | Yes      | Base URL for authentication callbacks (e.g. `http://localhost:3000`)      |
| `NEXT_PUBLIC_SITE_URL` | No       | Public site URL for metadata (defaults to `http://localhost:3000`)        |
| `NEXT_PUBLIC_GA_ID`    | No       | Google Analytics measurement ID                                           |

> **Note:** Never commit `.env.local` or expose secrets. The `.gitignore` excludes all `.env*` files.

---

## Available Scripts

| Command               | Description                              |
| --------------------- | ---------------------------------------- |
| `npm run dev`         | Start the Next.js development server     |
| `npm run build`       | Create a production build                |
| `npm run start`       | Start the production server              |
| `npm test`            | Run all tests (46 tests across 8 suites) |
| `npm run lint`        | Run ESLint                               |
| `npm run format`      | Auto-format source files with Prettier   |
| `npm run format:check`| Check formatting without modifying files |

---

## Project Structure

```
flowpilot-app/
├── public/
│   ├── hero-dashboard.png                    # Hero section dashboard image
│   ├── manifest.json                         # PWA manifest
│   └── favicon.ico                           # Favicon
├── prisma/
│   ├── schema.prisma                         # Database schema (User, Account, Session, Waitlist)
│   └── migrations/                           # Database migrations
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts   # NextAuth endpoint
│   │   │   └── waitlist/route.ts             # Waitlist POST endpoint
│   │   ├── login/
│   │   │   ├── page.tsx                      # Login page
│   │   │   └── login-form.tsx                # Login form component
│   │   ├── signup/
│   │   │   ├── page.tsx                      # Signup page
│   │   │   ├── signup-form.tsx               # Signup form component
│   │   │   └── actions.ts                    # Server action for signup
│   │   ├── privacy-policy/page.tsx           # Privacy policy page
│   │   ├── terms/page.tsx                    # Terms of service page
│   │   ├── globals.css                       # Tailwind + shadcn theme tokens
│   │   ├── layout.tsx                        # Root layout (metadata, providers)
│   │   ├── page.tsx                          # Homepage
│   │   ├── robots.ts                         # Robots.txt generator
│   │   └── sitemap.ts                        # Sitemap generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.tsx                # Desktop + mobile navigation
│   │   │   │   ├── Navbar.test.tsx           # Navbar tests
│   │   │   │   └── MobileMenu.tsx            # Mobile drawer (lazy-loaded)
│   │   │   └── Footer/
│   │   │       ├── Footer.tsx                # Footer with social links
│   │   │       └── Footer.test.tsx           # Footer tests
│   │   ├── providers/
│   │   │   ├── Providers.tsx                 # SessionProvider + ThemeProvider
│   │   │   └── ThemeProvider.tsx             # next-themes provider
│   │   ├── sections/
│   │   │   ├── Hero/Hero.tsx                 # Hero with CTA buttons
│   │   │   ├── Trusted/Trusted.tsx           # Company logos strip
│   │   │   ├── Features/Features.tsx         # 6 feature cards
│   │   │   ├── Workflow/Workflow.tsx         # 4-step process
│   │   │   ├── Dashboard/Dashboard.tsx       # Dashboard preview mockup
│   │   │   ├── Pricing/
│   │   │   │   ├── Pricing.tsx               # Pricing cards with toggle
│   │   │   │   └── Pricing.test.tsx          # Pricing tests
│   │   │   ├── Testimonials/Testimonials.tsx # 3 testimonial cards
│   │   │   ├── FAQ/
│   │   │   │   ├── FAQ.tsx                   # Accordion FAQ
│   │   │   │   └── FAQ.test.tsx              # FAQ tests
│   │   │   └── Waitlist/
│   │   │       ├── Waitlist.tsx              # Waitlist section wrapper
│   │   │       ├── Waitlist.test.tsx         # Waitlist tests
│   │   │       └── WaitlistForm.tsx          # Waitlist email form
│   │   └── ui/
│   │       ├── Accordion/accordion.tsx       # Base UI accordion
│   │       ├── AnimatedSection/
│   │       │   ├── AnimatedSection.tsx       # Scroll animation wrapper
│   │       │   └── AnimatedSection.test.tsx  # Animation tests
│   │       ├── BillingToggle/BillingToggle.tsx # Monthly/annual switch
│   │       ├── ThemeToggle/
│   │       │   ├── ThemeToggle.tsx           # Dark/light toggle
│   │       │   └── ThemeToggle.test.tsx      # Theme tests
│   │       ├── badge.tsx                     # Badge component
│   │       ├── button.tsx                    # Button variants
│   │       ├── input.tsx                     # Input component
│   │       └── label.tsx                     # Label component
│   ├── hooks/
│   │   └── useWaitlistForm.ts                # Waitlist form state hook
│   ├── lib/
│   │   ├── animations.ts                     # Framer Motion variants
│   │   ├── constants.ts                      # Site config, nav links, social links
│   │   ├── metadata.ts                       # Page metadata & JSON-LD builder
│   │   ├── prisma.ts                         # Prisma client singleton
│   │   ├── utils.ts                          # cn() utility (clsx + twMerge)
│   │   ├── validations.ts                    # Zod schemas (waitlist, signup, login)
│   │   └── waitlist-store.ts                 # localStorage CRUD for waitlist
│   ├── data/
│   │   └── faq.ts                            # 6 FAQ items
│   ├── types/
│   │   ├── site.ts                           # SiteConfig, NavLink, SocialLink
│   │   └── waitlist.ts                       # WaitlistEntry type
│   ├── auth.ts                               # NextAuth v5 configuration
│   └── generated/
│       └── prisma/                           # Auto-generated Prisma client (do not edit)
├── .env.example                              # Environment variable template
├── .gitignore                                # Git ignore rules
├── .nvmrc                                    # Node version manager config
├── CONTRIBUTING.md                           # Contribution guidelines
├── eslint.config.mjs                         # ESLint flat config
├── jest.config.ts                            # Jest test configuration
├── jest.setup.ts                             # Jest setup file
├── next.config.ts                            # Next.js configuration
├── package.json                              # Dependencies and scripts
├── postcss.config.mjs                        # PostCSS (Tailwind plugin)
├── prisma.config.ts                          # Prisma configuration
├── prettier.config.mjs                       # Prettier config
└── tsconfig.json                             # TypeScript configuration
```

---

## Architecture

### App Router

FlowPilot uses Next.js **App Router** (`src/app/`) for file-based routing. Pages are organized by route:

- `/` — Homepage with 9 dynamic sections
- `/login` — Login page with credentials form
- `/signup` — Signup page with server action
- `/privacy-policy` — Static privacy policy
- `/terms` — Static terms of service

### Component Architecture

Components follow a three-tier structure:

- **`sections/`** — Page sections (Hero, Features, Pricing, etc.) — mostly client components with animations
- **`layout/`** — Persistent layout elements (Navbar, Footer)
- **`ui/`** — Reusable primitives (Button, Badge, Input, Accordion, ThemeToggle, AnimatedSection)
- **`providers/`** — Context wrappers (SessionProvider, ThemeProvider)

### API Routes

| Endpoint                   | Method | Description                                    |
| -------------------------- | ------ | ---------------------------------------------- |
| `/api/waitlist`            | POST   | Waitlist email signup with validation           |
| `/api/auth/[...nextauth]`  | GET/POST | NextAuth authentication handlers             |

### Prisma

The database layer uses **Prisma 7.8** with PostgreSQL. The schema defines five models:

- **User** — Authentication with email/password, roles (Customer/Admin)
- **Account** — OAuth account linkage
- **Session** — Active sessions
- **VerificationToken** — Email verification tokens
- **Waitlist** — Waitlist email entries with unique constraint

The Prisma client is instantiated as a singleton via `@prisma/adapter-pg` with a `globalThis` caching pattern to prevent multiple instances in development.

### Authentication

**NextAuth v5** (beta) provides:

- **Credentials provider** — Email/password login with bcrypt verification
- **JWT strategy** — Stateless sessions with role information in tokens
- **Prisma adapter** — User, Account, and Session persistence
- **Custom pages** — `/login` for sign-in, `/signup` for registration via server action

### State Management

- **Server Components** — Default for pages and static content
- **Client Components** — Used for interactive features (forms, toggles, animations)
- **React Context** — Session (NextAuth) and Theme (next-themes) providers
- **localStorage** — Client-side waitlist email caching with `waitlist-store.ts`
- **React Hook Form** — Form state for login, signup, and waitlist forms

---

## Performance Optimizations

| Optimization           | Implementation                                                  |
| ---------------------- | --------------------------------------------------------------- |
| Dynamic Code Splitting | 7 below-the-fold sections loaded via `next/dynamic`             |
| Lazy Loading           | Mobile menu drawer lazy-loaded on first open                    |
| Package Optimization   | `optimizePackageImports` for `framer-motion` and `lucide-react` |
| Image Formats          | AVIF and WebP via `images.formats` in `next.config.ts`          |
| Font Preloading        | Inter font loaded with `preload: true`                          |
| Font Display           | `font-display: swap` prevents FOIT                              |
| Hero Image Priority    | Above-the-fold image uses `priority` loading                    |
| Responsive Images      | `sizes` attribute for optimal image serving                     |
| Code Splitting         | Client components only load what they need                      |

### Core Web Vitals Targets

| Metric  | Target  | Strategy                                                    |
| ------- | ------- | ----------------------------------------------------------- |
| **LCP** | < 2.5s  | Hero image priority, font preload, optimized formats        |
| **CLS** | < 0.1   | Explicit `width`/`height` on images, font-display swap      |
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
- Focus is managed in modal dialogs (mobile menu)

### ARIA Labels

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

### Open Graph

- Full OG tags: title, description, images (1200x630), type (`website`), locale (`en_US`)
- Site name from constants

### Twitter Cards

- `summary_large_image` card type

### Structured Data

- **WebSite** — Schema.org `WebSite` with `SearchAction` potential action
- **Organization** — Schema.org `Organization` with logo and social profiles

### Files

| File             | Purpose                                                             |
| ---------------- | ------------------------------------------------------------------- |
| `/sitemap.xml`   | Auto-generated sitemap (3 routes: `/`, `/privacy-policy`, `/terms`) |
| `/robots.txt`    | Allow all crawlers, link to sitemap                                 |
| `/manifest.json` | PWA manifest for installability                                     |

---

## Testing

### Test Framework

- **Jest 30** with `ts-jest` and `jsdom` environment
- **React Testing Library** for component testing
- **@testing-library/user-event** for interaction simulation
- **@testing-library/jest-dom** for custom DOM matchers

### Test Suites

| Suite           | Tests | What It Tests                                                                                |
| --------------- | ----- | -------------------------------------------------------------------------------------------- |
| ThemeToggle     | 11    | Theme switching, system preference, localStorage persistence, ARIA labels, icon states       |
| Navbar          | 6     | Logo rendering, navigation links, CTA buttons, hamburger toggle, Escape key, scroll behavior |
| Waitlist        | 6     | Email validation, loading state, success state, duplicate detection, error handling          |
| FAQ             | 6     | Question rendering, accordion expand/collapse, keyboard navigation                           |
| Pricing         | 5     | Monthly/annual toggle, price updates, plan names, accessibility attributes                   |
| Footer          | 5     | Navigation links, social icons, external link `rel` attributes, copyright year               |
| AnimatedSection | 3     | Scroll animation variants, reduced motion preference handling                                |
| API Route       | 4     | Successful creation (201), duplicate email (409), validation error (422), server error (500) |
| **Total**       | **46**| **All passing**                                                                              |

### Running Tests

```bash
npm test                          # Run all tests
npm test -- --coverage            # Run with coverage report
npm test -- --watch               # Watch mode
npm test -- ThemeToggle           # Run a specific test suite
```

---

## Browser Support

| Browser        | Minimum Version | Status       |
| -------------- | --------------- | ------------ |
| Chrome         | 100+            | Full support |
| Firefox        | 100+            | Full support |
| Safari         | 15+             | Full support |
| Edge           | 100+            | Full support |
| iOS Safari     | 15+             | Full support |
| Chrome Android | 100+            | Full support |

**Not supported:** IE 11

### Responsive Breakpoints

| Breakpoint | Width           | Behavior                                   |
| ---------- | --------------- | ------------------------------------------ |
| Mobile     | 320px – 639px   | Single column, stacked layout              |
| Tablet     | 640px – 767px   | 2-column grids                             |
| Laptop     | 768px – 1023px  | Dashboard sidebar, 2-col pricing           |
| Desktop    | 1024px – 1279px | Desktop nav, 3-col pricing, 2-col sections |
| Large      | 1280px – 1535px | Max-width container                        |
| XL         | 1536px+         | Full-width with constraints                |

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [vercel.com/new](https://vercel.com/new)
3. Configure environment variables:
   - `DATABASE_URL` — Your PostgreSQL connection string
   - `AUTH_SECRET` — Generate with `npx auth secret`
   - `AUTH_URL` — Your production URL (e.g. `https://flowpilot.vercel.app`)
   - `NEXT_PUBLIC_SITE_URL` — Same as `AUTH_URL`
4. Deploy — Vercel auto-detects Next.js and configures build settings

### Local Production

```bash
npm run build
npm start
```

Ensure the production database has the schema pushed via `npx prisma db push`.

---

## Future Improvements

- [ ] Stripe Payments — Real subscription billing with Stripe Checkout
- [ ] Admin Dashboard — User profile, settings, and session management
- [ ] Real AI Integrations — Connect to OpenAI/Claude APIs for workflow automation
- [ ] Team Management — Invite members, roles, and permissions
- [ ] Workflow Builder — Drag-and-drop interface for creating automation flows
- [ ] Analytics Dashboard — Real usage metrics replacing the mock dashboard
- [ ] Email Notifications — Waitlist confirmation and update emails
- [ ] Admin Panel — View and manage waitlist entries
- [ ] Internationalization — Multi-language support with `next-intl`
- [ ] E2E Testing — Playwright tests for critical user flows

---

## Contributing

Contributions are welcome! Please see our [Contributing Guide](CONTRIBUTING.md) for detailed information.

### Quick Start

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes following [Conventional Commits](https://www.conventionalcommits.org/)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Quality

Before submitting, ensure all quality gates pass:

```bash
npx tsc --noEmit            # Type check
npx eslint .                # Lint
npx prettier --check .      # Format check
npm test                    # Tests (46 passing)
npm run build               # Production build
```

All five checks must pass with zero errors before submitting a PR.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Author

**Mohammad Hanif Memon**

- GitHub: [https://github.com/Hanif8193](https://github.com/Hanif8193)
- LinkedIn: [Add your LinkedIn URL here](https://linkedin.com/in/your-profile)

---

## Acknowledgements

- [FlyRank](https://flyrank.com) — Frontend AI Engineering Week 1 assignment
- [Next.js](https://nextjs.org) — React framework with App Router
- [React](https://react.dev) — UI library
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS framework
- [Prisma](https://www.prisma.io) — Database ORM
- [NextAuth](https://next-auth.js.org) — Authentication for Next.js
- [Vercel](https://vercel.com) — Deployment platform

---

<div align="center">

Built with Next.js 16 + React 19 + Tailwind CSS 4

</div>
