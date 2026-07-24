# Workflow Comparison

## 1. Overview

This document compares two implementation approaches for a Settings page feature in a Next.js application. The experiment contrasts a **vague-prompt workflow** (Round 1) with a **detailed-prompt workflow** (Round 2) to demonstrate how prompt specificity, constraints, and verification instructions affect code quality.

## 2. Round 1: Vague Prompt

**Branch:** `round-1-vague`
**Commit:** `8ab165c`

Round 1 built the initial Settings feature with a vague prompt. It produced a working implementation across six files:

- `src/app/settings/actions.ts` — Server actions for profile update and password change
- `src/app/settings/page.tsx` — Server-rendered page with session-based auth guard
- `src/app/settings/settings-form.tsx` — Client form with react-hook-form + Zod validation
- `src/lib/validations.ts` — Added `UpdateProfileSchema` and `ChangePasswordSchema`
- `src/components/layout/Navbar/Navbar.tsx` — Added Settings link to desktop nav
- `src/components/layout/Navbar/MobileMenu.tsx` — Added Settings link to mobile nav

**What it achieved:**
- Functional profile and password update flows with proper server-side validation
- Zod schemas with field-level error messages
- Loading states and success feedback for both forms
- Read-only email field with appropriate disabled styling
- Basic ARIA attributes (`aria-invalid`, `aria-describedby`, `role="alert"`)
- Auth-gated server actions with session checks

**What it failed to catch:**
- Server-level errors (e.g., database failures) were silently consumed — the `catch` blocks in both form handlers had empty comments with no user-facing feedback
- No NextAuth TypeScript augmentation for `Session.user.id`, relying on untyped access

## 3. Round 2: Detailed Prompt

**Branch:** `round-2-detailed`
**Commit:** `9d68efd`

Round 2 used a detailed prompt containing:

- Explicit file references (e.g., `src/app/settings/settings-form.tsx`, `src/types/next-auth.d.ts`)
- Detailed requirements for error handling and type safety
- Security constraints (session checks, password hashing, read-only email)
- Expected behavior (success/error feedback, loading states, form reset)
- Accessibility requirements (ARIA attributes, screen-reader feedback)
- Verification instructions (`npx tsc --noEmit`, `npx eslint` on changed files)

Round 2 first reviewed the existing Round 1 code, identified two concrete issues, then fixed and verified them.

## 4. Concrete Differences

| Dimension | Round 1 | Round 2 |
|---|---|---|
| **Correctness** | Forms worked for the happy path; server errors were swallowed silently | Both forms now surface server errors to the user |
| **Error handling** | `catch` blocks contained only a comment (`// Server action handles errors`) | `catch` blocks set a `serverError` state that renders a visible alert; server-side `error` messages without `fieldErrors` are also displayed |
| **Type safety** | `session.user.id` used without TypeScript augmentation; relies on runtime truthiness | Added `next-auth.d.ts` augmenting `Session.user.id` and `JWT.id` for compile-time type safety |
| **Accessibility** | Basic ARIA attributes on inputs; no feedback for server-level errors | New error alerts include `role="alert"` and `aria-live="polite"` for screen-reader announcement |
| **Security** | Already present in Round 1: session guards, bcrypt hashing, read-only email | No new security changes; Round 2 preserved the existing security posture |
| **Verification** | No automated verification step | Ran `npx tsc --noEmit` and `npx eslint` on the two changed files to confirm correctness |
| **Review effort** | Implemented in a single pass | Implemented in two passes: review-first to identify issues, then targeted fixes |

## 5. Issues Found and Fixed

### 5.1 Missing Server-Error Display

**File:** `src/app/settings/settings-form.tsx`

In Round 1, when a server action returned a non-success result with an `error` message but no `fieldErrors`, the error was silently ignored. Similarly, if the client-side `try/catch` caught an unexpected exception, the catch block contained only a comment.

**Why it mattered:** A user changing their password could encounter a database error and receive no feedback — the form would simply do nothing. This is a poor user experience and makes debugging difficult in production.

**Round 2 fix:** Added `profileServerError` and `passwordServerError` state variables. Both `onSubmitProfile` and `onSubmitPassword` now:
1. Clear the server error at the start of each submission
2. Set the server error when `result.error` exists without `fieldErrors`
3. Set a fallback server error in the `catch` block
4. Render a styled alert with `role="alert"` and `aria-live="polite"` when a server error is present

### 5.2 Missing NextAuth TypeScript Augmentation

**File:** `src/types/next-auth.d.ts` (new file)

Round 1 used `session.user.id` in server actions without declaring the `id` property on the NextAuth `Session` type. This works at runtime because NextAuth populates the `id` field, but TypeScript does not know about it.

**Why it mattered:** Without the type augmentation, `session.user.id` would produce a TypeScript error in strict mode. The code only compiled because the `session?.user?.id` check implicitly narrowed the type, but this is fragile and would fail under stricter configurations.

**Round 2 fix:** Created `src/types/next-auth.d.ts` augmenting both the `Session` interface (adding `id: string`) and the `JWT` interface (adding `id?: string`).

## 6. Git Evidence

### Branches
- `round-1-vague` — based on commit `8ab165c`
- `round-2-detailed` — based on commit `9d68efd`

### Commits
| Round | Hash | Message |
|---|---|---|
| 1 | `8ab165c` | Round 1: build settings form with vague prompt |
| 2 | `9d68efd` | Round 2: improve settings error handling and auth types |

### Diff Summary (Round 1 → Round 2)
- **2 files changed**
- **47 insertions**
- **2 deletions**

Files modified:
- `src/app/settings/settings-form.tsx` — Added server-error state, display logic, and catch-block error handling
- `src/types/next-auth.d.ts` — New file with NextAuth type augmentation

## 7. Workflow Lessons

### Vague vs. Detailed Prompts
The vague prompt produced a working feature but missed edge cases that required a second pass. The detailed prompt with explicit requirements ensured the reviewer knew exactly what to look for and where.

### Explicit File References
By naming the exact files involved, Round 2 could target its review and fixes precisely. This avoided time spent searching the codebase and reduced the chance of overlooking relevant code.

### Constraints
Security constraints (session checks, password hashing) were already implemented in Round 1. The detailed prompt's constraints served more as confirmation criteria than as discovery triggers. Constraints become most valuable when they catch gaps that the implementation naturally omits.

### Expected Behavior
Specifying that both success and error feedback must be visible to the user made the missing server-error display a clear deficiency. Without this expectation, the silent error handling might have gone unnoticed.

### Verification Instructions
Running `npx tsc --noEmit` and `npx eslint` on the changed files provided a mechanical check that the fixes were correct. This caught no additional issues in this case, but the verification step itself adds confidence and would catch regressions in future iterations.

### Review-First Workflows
Round 2's approach of reviewing the existing code before writing any changes allowed it to identify exactly two issues rather than reimplementing the entire feature. This is more efficient than rewriting code that already works.

## 8. Conclusion

Both workflows produced a functional Settings feature. Round 1 alone would have shipped with two defects: silent server errors and a missing type augmentation. Round 2, with its detailed prompt, review-first approach, and verification instructions, caught and fixed both issues in a focused 47-line diff.

The experiment demonstrates that prompt detail and structured verification do not replace implementation skill — Round 1 already handled the complex parts correctly (server actions, Zod schemas, auth guards). What the detailed workflow added was **completeness**: it ensured edge cases and type safety were addressed before shipping, rather than discovered after deployment.
