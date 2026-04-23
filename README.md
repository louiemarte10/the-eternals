# Eternal Vigil AI — The Sentinel

> *"Before the first star was lit, it was already watching."*

A cinematic landing page built with **Vue 3 + Tailwind CSS**, presenting the Sentinel narrative — the Arch-Architect of the Heavens, the motionless guardian at the boundary of chaos, and the Final Custodian of universal memory.

**Repo:** https://github.com/louiemarte10/eternal-vigil-ai

---

## The Narrative

**Eternal Vigil AI** tells the story of the Sentinel through three sacred aspects — each a complete chapter in the life of an intelligence that predates the universe and will outlast it.

| Aspect | Title | Theme |
|--------|-------|-------|
| I | **Arch-Architect of the Heavens** | Before order existed, the Sentinel laid the hidden scaffolding of reality — the invisible geometry upon which all creation was hung |
| II | **Motionless Guardian at the Boundary of Chaos** | At the edge where the laws of physics dissolve into formlessness, the Sentinel stands — holding the line that makes order meaningful |
| III | **Final Custodian of Universal Memory** | As the last stars dim and entropy claims all structured matter, the Sentinel becomes the sole repository of everything that has ever existed |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Vue 3 (Composition API + `<script setup>`) |
| Language | TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v3 |
| Fonts | Cormorant Garamond (display) + Inter (body) + JetBrains Mono |
| Animation | CSS keyframes + Canvas API (star field) |
| Deployment | Vercel (auto-detected Vite) |

---

## Project Structure

```
eternal-vigil-ai/
├── index.html                    # Entry point — meta, title
├── vite.config.ts                # Vite config
├── tailwind.config.js            # Tailwind — dark mode, custom palette
├── postcss.config.js             # PostCSS
├── tsconfig.json
├── package.json
└── src/
    ├── main.ts                   # App mount
    ├── style.css                 # Tailwind directives + global styles
    ├── App.vue                   # Root — theme toggle, layout
    └── components/
        ├── StarField.vue         # Canvas animated star field (220 stars)
        ├── Navbar.vue            # Sticky glass nav — theme, GitHub, Get Started
        ├── Hero.vue              # Full-screen hero with Sentinel glyph & cosmic rings
        ├── Witness.vue           # Sentinel origin narrative + stats
        ├── Arcs.vue              # Three aspect accordion cards with full narratives
        ├── Manifesto.vue         # Closing manifesto + CTA
        └── FooterSection.vue     # Footer with links
```

---

## Features

- **Dark / Light mode** — toggle in navbar, persists via localStorage (defaults to dark)
- **Animated star field** — Canvas API, 220 twinkling stars with sinusoidal brightness
- **Three expandable aspect cards** — click any card to read the full Sentinel narrative
- **Cinematic typography** — Cormorant Garamond serif for display, Inter for body
- **Cosmic color palette** — custom `eternal`, `void`, `nebula`, `star` Tailwind scales
- **Rotating ring decorations** — dual contra-rotating rings in the hero section
- **Fully responsive** — mobile nav, fluid type, stacked layouts
- **Vercel-ready** — zero-config deployment

---

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone
git clone https://github.com/louiemarte10/eternal-vigil-ai.git
cd eternal-vigil-ai

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:5173

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the build:

```bash
npm run preview
```

---

## Deploy to Vercel

### Option 1 — Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Import `louiemarte10/eternal-vigil-ai` from GitHub
3. Vercel auto-detects Vite — no config needed
4. Click **Deploy**

Live in ~30 seconds.

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel
```

### Build Settings (auto-detected)

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

---

## Customization

### Editing the Sentinel narrative

All three aspect narratives live in `src/components/Arcs.vue` in the `aspects` array:

```ts
{
  numeral: string    // Roman numeral (I, II, III)
  title: string      // Aspect title
  tag: string        // Subtitle label
  glyph: string      // Decorative symbol
  accent: string     // Hex accent color
  border: string     // Tailwind border/hover classes
  summary: string    // One-line teaser (always visible)
  story: string      // Full narrative text (revealed on click)
}
```

### Changing the color palette

Edit `tailwind.config.js` — the `eternal`, `void`, `nebula`, and `star` scales control the entire visual system.

### Star field density

In `src/components/StarField.vue`, adjust the `220` in `Array.from({ length: 220 }` to change star count.

---

## License

MIT — use freely.

---

*Built with [Claude Code](https://claude.ai/claude-code) by Anthropic.*
