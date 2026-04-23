<script setup lang="ts">
const GITHUB_REPO = 'https://github.com/louiemarte10/agentic-ai-using-claude-code'
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div class="absolute inset-0 hero-grid-dark dark:block hidden"></div>
      <div class="absolute inset-0 hero-grid-light dark:hidden block"></div>
    </div>

    <!-- Glow orbs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-glow-pulse pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-600/20 rounded-full blur-3xl animate-glow-pulse pointer-events-none" style="animation-delay:1.5s"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-8 animate-fade-in">
        <span class="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
        Powered by Claude Code · Multi-Tenant AI Agent System
      </div>

      <!-- Headline -->
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-white dark:text-white text-gray-950 mb-6 animate-fade-up leading-none">
        Your AI team,<br/>
        <span class="gradient-text">in your pocket.</span>
      </h1>

      <!-- Subheadline -->
      <p class="text-lg md:text-xl text-gray-400 dark:text-gray-400 text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style="animation-delay:0.1s">
        louieDevAgent turns your Claude Code subscription into a fleet of specialized AI agents — accessible from Telegram, no extra API costs, with persistent memory and a live dashboard.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up" style="animation-delay:0.2s">
        <a
          href="#how-it-works"
          class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-600 rounded-xl hover:from-brand-500 hover:to-accent-500 transition-all shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5"
        >
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
          </svg>
        </a>
        <a
          :href="GITHUB_REPO"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-300 dark:text-gray-300 text-gray-700 bg-white/5 dark:bg-white/5 bg-gray-100 border border-gray-200/20 dark:border-gray-700/50 border-gray-200 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 hover:bg-gray-200 transition-all hover:-translate-y-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>

      <!-- Terminal Preview -->
      <div class="mt-16 max-w-2xl mx-auto animate-fade-up" style="animation-delay:0.3s">
        <div class="rounded-2xl border border-gray-700/50 dark:border-gray-700/50 border-gray-200 bg-gray-900 dark:bg-gray-900 bg-gray-50 shadow-2xl shadow-black/40 overflow-hidden animate-float">
          <!-- Terminal header -->
          <div class="flex items-center gap-1.5 px-4 py-3 bg-gray-800/80 dark:bg-gray-800/80 bg-gray-100 border-b border-gray-700/40 dark:border-gray-700/40 border-gray-200">
            <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span class="ml-2 text-xs text-gray-500 font-mono">Telegram → louieDevAgent</span>
          </div>
          <!-- Terminal body -->
          <div class="p-5 text-left font-mono text-sm space-y-2">
            <div class="flex gap-3">
              <span class="text-blue-400 shrink-0">you</span>
              <span class="text-gray-300">@dev: fix the auth bug in my FastAPI project</span>
            </div>
            <div class="flex gap-3">
              <span class="text-purple-400 shrink-0">dev</span>
              <span class="text-gray-400">Reading src/auth.py... found the issue on line 47</span>
            </div>
            <div class="flex gap-3">
              <span class="text-purple-400 shrink-0">dev</span>
              <span class="text-gray-400">Fixed JWT expiry check. Tests passing. PR ready.</span>
            </div>
            <div class="flex gap-3 mt-1">
              <span class="text-blue-400 shrink-0">you</span>
              <span class="text-gray-300">check my inbox for anything urgent</span>
            </div>
            <div class="flex gap-3">
              <span class="text-green-400 shrink-0">louie</span>
              <span class="text-gray-400">3 unread. 1 from client re: deployment deadline <span class="text-yellow-400">⚠</span></span>
            </div>
            <div class="flex items-center gap-1 mt-2">
              <span class="text-gray-600">▋</span>
              <span class="w-2 h-4 bg-brand-400 animate-pulse rounded-sm"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
