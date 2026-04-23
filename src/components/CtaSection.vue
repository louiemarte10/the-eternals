<script setup lang="ts">
const GITHUB_REPO = 'https://github.com/louiemarte10/agentic-ai-using-claude-code'
const DASHBOARD_REPO = 'https://github.com/louiemarte10/louie-agent-dashboard'
</script>

<template>
  <section class="py-24 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <div class="relative rounded-3xl overflow-hidden p-12 bg-gradient-to-br from-brand-600/20 via-accent-600/10 to-brand-600/20 border border-brand-500/20">
        <!-- Background glow -->
        <div class="absolute inset-0 bg-gradient-to-r from-brand-600/5 to-accent-600/5 blur-3xl"></div>

        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            Ready to build your AI team?
          </h2>
          <p class="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Both repos are open source. Star them, fork them, build your own fleet.
          </p>

          <div class="flex flex-col sm:flex-row justify-center gap-3">
            <a
              :href="GITHUB_REPO"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-600 rounded-xl hover:from-brand-500 hover:to-accent-500 transition-all shadow-xl shadow-brand-500/30 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Agentic AI Repo
            </a>
            <a
              :href="DASHBOARD_REPO"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Dashboard Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
