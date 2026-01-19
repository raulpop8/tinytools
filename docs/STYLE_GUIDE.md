# Style Guide

Personal reference for design, layout, and UI decisions.

Minimal UI
Strong typography
Lots of whitespace
Few colors, used intentionally
Soft backgrounds (not pure white)
High-contrast text
Subtle borders instead of heavy shadows
Rounded corners, but not cartoonish
Calm accent color (used sparingly)

Backgrounds
Light: warm off-white
Dark: near-black with a hint of blue

Text
Almost-black (not pure black)
Soft white in dark mode

Accent
Single accent color (used for buttons & links only)

---

## Typography

### Headings

```tsx
<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
<h2 className="text-2xl font-semibold">
<h3 className="text-xl font-semibold">

Body text
<p className="text-foreground/80 leading-relaxed">

Layout & Spacing

Max width: max-w-6xl
Section padding: p-8
Vertical spacing: mb-12
Grid gap: gap-8

<section className="max-w-6xl mx-auto p-8">

<div className="rounded-xl border border-border bg-background p-6 hover:bg-muted transition">
<button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
<header className="border-b border-border bg-background">
links: className="text-sm hover:underline underline-offset-4"

