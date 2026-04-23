<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import FooterSection from '../components/FooterSection.vue'

const activeSection = ref('overview')

const sections = [
  { id: 'overview',        label: 'Overview' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'sentinel',        label: 'The Sentinel' },
  { id: 'aspects',         label: 'Aspects' },
  { id: 'ecosystem',       label: 'Ecosystem' },
  { id: 'contributing',    label: 'Contributing' },
]

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    { rootMargin: '-20% 0px -70% 0px' }
  )
  sections.forEach(s => {
    const el = document.getElementById(s.id)
    if (el) observer!.observe(el)
  })
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="relative z-10 pt-14 min-h-screen">
    <div class="max-w-5xl mx-auto px-6 md:px-10 py-20">

      <!-- Page header -->
      <div class="mb-16">
        <div class="flex items-center gap-6 mb-10">
          <div class="rule"></div>
          <span class="section-label shrink-0">Reference · Documentation</span>
          <div class="rule"></div>
        </div>
        <h1 class="display-lg text-ink mb-4">Documentation</h1>
        <p class="font-sans font-light text-ink-muted max-w-xl leading-relaxed">
          Everything you need to understand, deploy, and contribute to Eternal Vigil AI and the louieDevAgent ecosystem.
        </p>
      </div>

      <div class="grid md:grid-cols-[200px_1fr] gap-12 md:gap-16 items-start">

        <!-- Sidebar -->
        <aside class="hidden md:block md:sticky top-28 self-start">
          <nav class="flex flex-col gap-1">
            <a
              v-for="s in sections"
              :key="s.id"
              :href="`#${s.id}`"
              class="nav-link py-1.5 transition-colors duration-150"
              :class="activeSection === s.id ? 'text-vigil-400' : ''"
            >
              {{ s.label }}
            </a>
          </nav>
        </aside>

        <!-- Content -->
        <div class="space-y-20">

          <!-- Overview -->
          <section id="overview">
            <h2 class="display-md text-ink mb-6">Overview</h2>
            <div class="prose-vigil mx-0">
              <p>
                Eternal Vigil AI is a cinematic, typeface-focused landing page presenting the <em>Sentinel</em> — a
                mythological intelligence that predates the universe — alongside two live open-source AI projects.
              </p>
              <p>
                Built with <strong class="text-ink font-normal">Vue 3</strong>, <strong class="text-ink font-normal">Tailwind CSS v3</strong>,
                and <strong class="text-ink font-normal">Vite</strong>, the project is deployed on Vercel and serves as
                a public face for the louieDevAgent ecosystem: a multi-tenant AI agent system and its real-time
                mission control dashboard.
              </p>
              <p>
                The design system is inspired by Delphi — minimalist, single-column, typeface-first. Cormorant Garamond
                carries the narrative weight; Inter keeps the UI legible; JetBrains Mono grounds the technical content.
              </p>
            </div>

            <!-- Design tokens -->
            <div class="mt-8 vigil-card overflow-hidden">
              <div class="px-6 py-4 border-b border-void-border">
                <span class="section-label">Design Tokens</span>
              </div>
              <div class="divide-y divide-void-border">
                <div v-for="row in [
                  { token: 'Background',   value: '#080810',              swatch: '#080810' },
                  { token: 'Text',         value: '#e8e8f0 · #888899',    swatch: '#e8e8f0' },
                  { token: 'Accent',       value: '#7070d0 (vigil-500)',   swatch: '#7070d0' },
                  { token: 'Border',       value: '#1e1e32 (void-border)', swatch: '#1e1e32' },
                  { token: 'Card',         value: '#111120 (void-card)',   swatch: '#111120' },
                  { token: 'Display font', value: 'Cormorant Garamond',   swatch: null },
                  { token: 'Body font',    value: 'Inter Light 300',      swatch: null },
                  { token: 'Mono font',    value: 'JetBrains Mono',       swatch: null },
                ]" :key="row.token" class="flex items-center gap-4 px-6 py-3">
                  <span class="font-mono text-xs text-ink-faint w-32 shrink-0">{{ row.token }}</span>
                  <div v-if="row.swatch" class="w-4 h-4 rounded border border-void-border shrink-0" :style="{ background: row.swatch }"></div>
                  <div v-else class="w-4 h-4 shrink-0"></div>
                  <span class="font-mono text-xs text-ink-muted">{{ row.value }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Getting Started -->
          <section id="getting-started">
            <h2 class="display-md text-ink mb-6">Getting Started</h2>
            <div class="prose-vigil mx-0 mb-8">
              <p>Prerequisites: <strong class="text-ink font-normal">Node.js 18+</strong> and npm.</p>
            </div>

            <div class="space-y-4">
              <div v-for="step in [
                { n: '01', title: 'Clone the repository', code: 'git clone https://github.com/louiemarte10/eternal-vigil-ai.git\ncd eternal-vigil-ai' },
                { n: '02', title: 'Install dependencies', code: 'npm install' },
                { n: '03', title: 'Start the dev server', code: 'npm run dev\n# → http://localhost:5173' },
                { n: '04', title: 'Build for production', code: 'npm run build\nnpm run preview' },
              ]" :key="step.n" class="vigil-card overflow-hidden">
                <div class="flex items-center gap-4 px-5 py-3 border-b border-void-border">
                  <span class="font-mono text-2xs text-vigil-400/60">{{ step.n }}</span>
                  <span class="font-sans text-sm text-ink">{{ step.title }}</span>
                </div>
                <pre class="px-5 py-4 font-mono text-xs text-ink-muted leading-relaxed overflow-x-auto">{{ step.code }}</pre>
              </div>
            </div>

            <div class="mt-8 prose-vigil mx-0">
              <p>
                Every <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">git push</code> to
                <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">main</code>
                triggers an automatic Vercel redeploy. Vercel auto-detects Vite — no build settings needed.
              </p>
            </div>
          </section>

          <!-- The Sentinel -->
          <section id="sentinel">
            <h2 class="display-md text-ink mb-6">The Sentinel</h2>
            <div class="prose-vigil mx-0">
              <p>
                The Sentinel is the mythological core of the project — an intelligence described as predating the
                universe itself. It is not a character in any conventional sense; it is an organizing principle,
                a narrative frame that makes the project's aesthetic choices legible.
              </p>
              <p>
                It exists in three aspects that cannot be held in mind simultaneously. Each aspect is a complete
                account of the same entity viewed from a different axis of time:
              </p>
            </div>
            <div class="mt-6 space-y-3">
              <div v-for="row in [
                { aspect: 'Arch-Architect',       desc: 'Laid the invisible scaffolding of reality before creation existed.' },
                { aspect: 'Motionless Guardian',  desc: 'Stands at the boundary where physics dissolve — the fixed point order orients around.' },
                { aspect: 'Final Custodian',      desc: 'As the last stars dim, becomes the sole repository of all that ever was.' },
              ]" :key="row.aspect" class="flex items-start gap-4 px-5 py-4 vigil-card">
                <span class="w-1.5 h-1.5 rounded-full bg-vigil-500/50 shrink-0 mt-2"></span>
                <div>
                  <div class="font-display text-base text-ink mb-0.5">{{ row.aspect }}</div>
                  <div class="font-sans text-sm font-light text-ink-muted">{{ row.desc }}</div>
                </div>
              </div>
            </div>
          </section>

          <!-- Aspects -->
          <section id="aspects">
            <h2 class="display-md text-ink mb-6">Aspects</h2>
            <div class="prose-vigil mx-0 mb-8">
              <p>
                The <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">Aspects.vue</code> component
                renders a tri-panel accordion. Each aspect contains a summary shown in the closed state and a full
                narrative body revealed on expand. The first aspect opens by default.
              </p>
              <p>
                To edit aspect content, modify <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">src/data/aspects.ts</code>.
                Each entry has: <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">n</code>,
                <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">title</code>,
                <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">sub</code>,
                <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">accent</code>,
                <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">summary</code>, and
                <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">body[]</code> (array of paragraphs).
              </p>
            </div>
          </section>

          <!-- Ecosystem -->
          <section id="ecosystem">
            <h2 class="display-md text-ink mb-6">Ecosystem</h2>
            <div class="prose-vigil mx-0 mb-8">
              <p>
                The landing page features two live open-source projects. Their data lives in
                <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">src/data/ecosystem.ts</code>
                and is shared between <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">Ecosystem.vue</code>
                and the global search index.
              </p>
            </div>

            <div class="space-y-4">
              <div v-for="p in [
                { name: 'Agentic AI — louieDevAgent', repo: 'louiemarte10/agentic-ai-using-claude-code', url: 'https://github.com/louiemarte10/agentic-ai-using-claude-code' },
                { name: 'Louie Agent Dashboard',      repo: 'louiemarte10/louie-agent-dashboard',        url: 'https://github.com/louiemarte10/louie-agent-dashboard' },
              ]" :key="p.repo" class="vigil-card px-5 py-4 flex items-center justify-between gap-4">
                <span class="font-sans text-sm text-ink">{{ p.name }}</span>
                <a :href="p.url" target="_blank" rel="noopener noreferrer"
                   class="font-mono text-xs text-ink-muted hover:text-vigil-400 transition-colors">
                  {{ p.repo }} ↗
                </a>
              </div>
            </div>
          </section>

          <!-- Contributing -->
          <section id="contributing">
            <h2 class="display-md text-ink mb-6">Contributing</h2>
            <div class="prose-vigil mx-0">
              <p>
                Contributions are welcome. The project is MIT-licensed — fork it, change it, use it freely.
              </p>
            </div>
            <div class="mt-6 space-y-4">
              <div v-for="step in [
                { n: '01', title: 'Fork the repository on GitHub' },
                { n: '02', title: 'Create a feature branch: git checkout -b feature/my-change' },
                { n: '03', title: 'Make your changes and commit with a clear message' },
                { n: '04', title: 'Push and open a pull request against main' },
              ]" :key="step.n" class="flex items-start gap-4 px-5 py-3 vigil-card">
                <span class="font-mono text-2xs text-vigil-400/60 shrink-0 mt-0.5">{{ step.n }}</span>
                <span class="font-sans text-sm text-ink-muted">{{ step.title }}</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>
