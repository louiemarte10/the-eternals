<script setup lang="ts">
const GITHUB_LANDING = 'https://github.com/louiemarte10/louiedevagent-landing'
const GITHUB_AGENT = 'https://github.com/louiemarte10/agentic-ai-using-claude-code'
const GITHUB_DASHBOARD = 'https://github.com/louiemarte10/louie-agent-dashboard'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-12 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
              <span class="text-white text-xs font-bold">L</span>
            </div>
            <span class="font-semibold text-gray-900 dark:text-white text-sm">louieDevAgent</span>
          </div>
          <p class="text-xs text-gray-400 max-w-xs leading-relaxed">
            Multi-tenant AI agent system powered by Claude Code. Built on ClaudeClaw architecture.
          </p>
        </div>

        <!-- Links -->
        <div class="flex flex-col sm:flex-row gap-8">
          <div>
            <div class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Repositories</div>
            <ul class="space-y-2">
              <li><a :href="GITHUB_AGENT" target="_blank" class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Agentic AI</a></li>
              <li><a :href="GITHUB_DASHBOARD" target="_blank" class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Agent Dashboard</a></li>
              <li><a :href="GITHUB_LANDING" target="_blank" class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">This Landing Page</a></li>
            </ul>
          </div>
          <div>
            <div class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Stack</div>
            <ul class="space-y-2">
              <li class="text-sm text-gray-500 dark:text-gray-400">Claude Code CLI</li>
              <li class="text-sm text-gray-500 dark:text-gray-400">Node.js / TypeScript</li>
              <li class="text-sm text-gray-500 dark:text-gray-400">Vue 3 + Tailwind</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-gray-400">© {{ year }} louieDevAgent. MIT License.</p>
        <p class="text-xs text-gray-400">Built with <a href="https://claude.ai/claude-code" target="_blank" class="text-brand-400 hover:text-brand-300 transition-colors">Claude Code</a> by Anthropic</p>
      </div>
    </div>
  </footer>
</template>
