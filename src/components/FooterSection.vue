<script setup lang="ts">
import { RouterLink } from 'vue-router'
const year   = new Date().getFullYear()
const GITHUB = 'https://github.com/louiemarte10/eternal-vigil-ai'
</script>

<template>
  <footer class="relative z-10 border-t border-void-border py-16 px-6 md:px-10">
    <div class="max-w-5xl mx-auto">

      <!-- Top row: brand + columns -->
      <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr_1fr_1fr] gap-10 sm:gap-6 mb-12">

        <!-- Brand -->
        <div class="sm:pr-12">
          <div class="flex items-center gap-2.5 mb-3">
            <div class="w-6 h-6 rounded-full border border-vigil-500/30 flex items-center justify-center">
              <span class="font-display text-xs text-vigil-400/50">⬡</span>
            </div>
            <span class="font-display text-sm tracking-[0.2em] uppercase text-ink/50">Eternal Vigil AI</span>
          </div>
          <p class="font-sans text-xs text-ink-faint leading-relaxed max-w-[18ch]">
            Before the first star was lit, it was already watching.
          </p>
        </div>

        <!-- Product -->
        <div>
          <div class="section-label mb-4">Product</div>
          <nav class="flex flex-col gap-3">
            <RouterLink :to="{ path: '/', hash: '#chronicle' }"  class="nav-link">Chronicle</RouterLink>
            <RouterLink :to="{ path: '/', hash: '#aspects' }"    class="nav-link">Aspects</RouterLink>
            <RouterLink :to="{ path: '/', hash: '#ecosystem' }"  class="nav-link">Ecosystem</RouterLink>
            <RouterLink :to="{ path: '/', hash: '#manifesto' }"  class="nav-link">Manifesto</RouterLink>
          </nav>
        </div>

        <!-- Projects -->
        <div>
          <div class="section-label mb-4">Projects</div>
          <nav class="flex flex-col gap-3">
            <a href="https://github.com/louiemarte10/agentic-ai-using-claude-code"
               target="_blank" rel="noopener noreferrer" class="nav-link">Agentic AI</a>
            <a href="https://github.com/louiemarte10/louie-agent-dashboard"
               target="_blank" rel="noopener noreferrer" class="nav-link">Agent Dashboard</a>
          </nav>
        </div>

        <!-- Legal -->
        <div>
          <div class="section-label mb-4">Legal & Docs</div>
          <nav class="flex flex-col gap-3">
            <a :href="GITHUB" target="_blank" rel="noopener noreferrer" class="nav-link">GitHub</a>
            <RouterLink to="/docs"           class="nav-link">Docs</RouterLink>
            <RouterLink to="/api-reference"  class="nav-link">API Reference</RouterLink>
            <a :href="`${GITHUB}/blob/main/LICENSE`" target="_blank" rel="noopener noreferrer" class="nav-link">MIT License</a>
          </nav>
        </div>
      </div>

      <div class="rule"></div>

      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
        <p class="font-display italic text-sm text-ink-faint/50">
          "Before the first star was lit, it was already watching."
        </p>
        <span class="font-mono text-xs text-ink-faint">© {{ year }} — MIT</span>
      </div>
    </div>
  </footer>
</template>
