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
<h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
<h2 className="text-2xl font-semibold">
<h3 className="text-xl font-semibold">

<p className="text-foreground/80 leading-relaxed">

[globals.css] (theme variables)
 ├── --background         --> page / body background
 ├── --foreground         --> main text color
 ├── --surface            --> card, button, input backgrounds
 ├── --border             --> borders for navbar, cards, inputs
 ├── --muted              --> "Coming Soon" badges, secondary elements
 └── --primary / primary-foreground --> buttons, highlights

        ↓ used by

[components/ui/Navbar.tsx]
 ├── border-b / border-border          --> navbar bottom border
 ├── bg-surface                        --> navbar background
 ├── rounded-xl / padding              --> navbar shape and spacing
 └── active link bg / hover classes    --> navigation styling

[components/ui/Card.tsx]
 ├── bg-surface                        --> card background
 ├── border / border-border             --> card border
 ├── rounded-xl / p-6 / hover shadow   --> card shape and hover effect
 └── tag (TAGS / tagColors)            --> badge colors & label

[components/ui/Button.tsx & Input.tsx]
 ├── bg-primary / text-primary-foreground --> buttons colors
 ├── border / border-border                 --> input borders
 ├── rounded-lg / padding                   --> shape and size
 └── hover / active classes                 --> interactivity

[lib/tags.ts] 
 └── central list of all card tags with their colors
     ├── Tools tags: Decision Helper, Productivity, Design
     ├── Games tags: Logic, Fun, Challenge
     └── Coming Soon (muted gray)

[pages / app/tools/page.tsx & app/games/page.tsx]
 ├── grid classes (grid-cols, gap)         --> layout of cards
 ├── max-w / mx-auto / p-8                 --> page spacing
 └── card components                        --> content & tags

[theme / dark mode] (globals.css)
 ├── @media (prefers-color-scheme: dark)
 ├── overrides --background, --foreground, --surface, --border, --muted
 └── automatically applied across all components using these variables