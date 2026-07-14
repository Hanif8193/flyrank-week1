# Portfolio Voice Card

> Direct, thoughtful, technical, humble, no buzzwords, first-person, focused on decisions and learning.

---

# Professional Bio

Mohammad Hanif Memon is a Frontend AI Engineering intern at FlyRank who builds production-ready web applications with a focus on completeness over complexity. His work spans responsive UI, authentication, database integration, API design, accessibility, testing, and deployment — all within a single codebase. He is particularly interested in learning how to work with AI as a development partner, using it to accelerate implementation while maintaining architectural control. His projects are not demos — they are built to shipping standard.

---

# FlowPilot — Portfolio Case Study

**Author:** Mohammad Hanif Memon

**Program:** FlyRank Frontend AI Engineering Internship — Week 1 Assignment

**Live:** [flyrank-week1.vercel.app](https://flyrank-week1.vercel.app)

**GitHub:** [Hanif8193/flyrank-week1](https://github.com/Hanif8193/flyrank-week1)

---

## Problem

The FlyRank Week 1 assignment asked me to build a SaaS landing page. I could have built something small and moved on. Instead, I used the opportunity to build something that reflected the kind of frontend engineer I want to become — someone who doesn't just make UIs that look good, but builds systems that work like real products.

I chose FlowPilot, an AI-powered workflow automation platform, because it gave me room to work across the full stack: responsive UI, reusable components, authentication, API routes, database integration, testing, accessibility, SEO, and deployment. The real question I was answering for myself: can I build something production-ready using modern tools and AI-assisted workflows, and understand every decision along the way?

---

## Approach

FlowPilot is a 9-section landing page with authentication, a waitlist API backed by PostgreSQL, and 46 automated tests. The sections are Hero, Trusted By, Features, Workflow, Dashboard Preview, Pricing, Testimonials, FAQ, and Waitlist. I used Next.js 16 with the App Router, React 19, Tailwind CSS 4, Prisma 7.8, and NextAuth v5 beta.

The waitlist is the primary user interaction, so I built it as a complete production feature. The dashboard section is a static CSS/HTML mockup — it communicates the product vision without requiring backend logic for a feature that wasn't part of the landing page's core goal. That decision came down to priorities: spend effort where users actually interact.

I used AI throughout the project, but I learned to use it as a collaborator rather than an autopilot. AI helped me move faster on repetitive work — UI components, boilerplate, test scaffolding — but I reviewed every change, tested locally, and made sure each piece fit the existing architecture before accepting it.

---

## Technical Decisions

### Bleeding-edge versions

I chose Next.js 16, React 19, Tailwind CSS 4, Prisma 7.8, and NextAuth v5 beta because I wanted hands-on experience with the technologies shaping current frontend development. For a learning project, the trade-off was worth it — I gained experience solving real integration problems instead of following tutorials.

### Custom hook for form logic

I extracted waitlist form logic into `useWaitlistForm`, separating presentation from business logic. The hook handles validation, API calls, localStorage caching, and state management. This made the component easier to test and maintain.

### localStorage for UX, database for truth

The waitlist uses localStorage to cache entries client-side, preventing unnecessary API requests for duplicate submissions. PostgreSQL remains the authoritative source of data. This gave me a responsive user experience on the client side and reliable data integrity on the server side.

### Dynamic code splitting

I used `next/dynamic` to split below-the-fold sections, reducing initial bundle size. The mobile menu drawer is lazy-loaded on first open.

### Quality gates

Before every commit, I ran TypeScript checks, ESLint, Prettier, and all 46 tests. This discipline caught issues early and gave me confidence that the code was reliable.

---

## Challenges

### Connecting the pieces

Building individual UI components was straightforward. But once I had to connect authentication, API routes, Prisma, and the frontend into a single flow, I realized that generating code was the easy part — making everything work together cleanly was much harder.

### NextAuth v5 beta

The documentation was still evolving, and AI often suggested solutions that looked correct but didn't match the latest APIs. I had to read GitHub discussions, compare documentation, and adapt implementations myself instead of copying solutions.

### WSL environment issue

The `lightningcss` native module caused a Bus error during builds in WSL. AI suggested several fixes, but none worked because the issue was environment-specific. I documented it as a known limitation and used Windows PowerShell for builds instead.

### AI code inconsistency

Early in the project, I accepted larger AI suggestions without fully checking whether they matched the project's architecture. The waitlist implementation initially mixed UI and business logic. I refactored it by extracting the logic into a custom hook.

---

## Outcome

FlowPilot is deployed on Vercel and passes all quality gates: zero TypeScript errors, zero ESLint errors, all 46 tests passing, and a clean production build. The application includes authentication with NextAuth v5, a functional waitlist API with PostgreSQL, WCAG AA accessibility, full SEO optimization with structured data and sitemap, and responsive design from 320px to 2560px.

The project taught me more than just technical skills. I learned how to plan architecture before coding, how to use AI within constraints, and how to make intentional trade-offs between scope and quality.

---

## Lessons Learned

### Finishing is a skill

Many developers focus on starting — choosing technologies, building components, making the UI look good. The real challenge is everything after: architecture, edge cases, testing, performance, deployment. A project becomes valuable when you can explain why you built something a certain way, not just that you built it.

### AI works best with a clear plan

When I defined the user flow, component hierarchy, and feature scope upfront, every AI prompt had clear context and the output was more useful. AI is a partner, not a replacement for thinking.

### Test behavior, not appearance

I focused my 46 tests on features users interact with and logic that could break during changes. I didn't test visual styling, animations, or static content. Meaningful coverage beats 100% coverage.

### Prioritize where users interact

The dashboard is a mockup because visitors don't need a real one. The waitlist is production-ready because it's the primary CTA. Spending effort where it creates the most value is a product decision, not just a technical one.

### Architecture is about tomorrow

If I started over, I would organize by feature-based modules instead of type-based folders. This project taught me that architecture isn't just about making today's code work — it's about making tomorrow's changes easier.

---

## Contact

- **GitHub:** [@Hanif8193](https://github.com/Hanif8193)
- **Live Project:** [flyrank-week1.vercel.app](https://flyrank-week1.vercel.app)

---

# Before / After AI Writing

## Before (Generic AI)

FlowPilot is a modern SaaS application built with Next.js and React. It provides authentication, database integration, testing, and responsive design.

## After (My Voice)

I built FlowPilot because I wanted to know if I could create something that works like a real product, not just something that looks like one.

The waitlist is not a placeholder. It is a complete feature with validation, API integration, database storage, and error handling.

The 46 tests are not decoration — they are the reason I trusted the application enough to deploy it.

Every technical decision was intentional.
