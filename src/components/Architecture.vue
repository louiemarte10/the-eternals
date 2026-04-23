<template>
  <section id="architecture" class="py-24 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-medium mb-4">
          System Architecture
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
          One manager, many specialists.
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          The manager bot routes your messages to the right agent. Each specialist works in isolation with its own context and tools.
        </p>
      </div>

      <!-- Diagram -->
      <div class="rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-gray-50 dark:bg-gray-900 p-8 md:p-12">
        <!-- User -->
        <div class="flex justify-center mb-6">
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
            <span>📱</span> You (Telegram)
          </div>
        </div>

        <!-- Arrow down -->
        <div class="flex justify-center mb-6">
          <div class="w-px h-8 bg-gradient-to-b from-blue-500/50 to-indigo-500/50 relative">
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-indigo-500/50"></div>
          </div>
        </div>

        <!-- Manager -->
        <div class="flex justify-center mb-6">
          <div class="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600/20 to-accent-600/20 border border-brand-500/30 text-center">
            <div class="text-sm font-semibold text-white dark:text-white text-gray-900 mb-0.5">louieDevAgent</div>
            <div class="text-xs text-gray-400">Manager Bot · Opus · Triage &amp; Delegation</div>
          </div>
        </div>

        <!-- Branches -->
        <div class="relative flex justify-center mb-4">
          <div class="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent"></div>
        </div>

        <!-- Agents -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div v-for="agent in agents" :key="agent.name"
            :class="['p-3 rounded-xl border text-center card-hover', agent.bg]"
          >
            <div class="text-xl mb-1">{{ agent.icon }}</div>
            <div class="text-xs font-semibold text-gray-800 dark:text-gray-200">{{ agent.name }}</div>
            <div class="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{{ agent.role }}</div>
          </div>
        </div>

        <!-- Shared SQLite label -->
        <div class="mt-8 flex justify-center">
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
            <span>🗄️</span>
            Shared Hive Mind · SQLite · Memory · Sessions · Token Tracking
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const agents = [
  { icon: '💻', name: 'Dev', role: 'Code & Debug', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: '📧', name: 'Comms', role: 'Email & Marketing', bg: 'bg-green-500/10 border-green-500/20' },
  { icon: '✍️', name: 'Content', role: 'Writing & Docs', bg: 'bg-yellow-500/10 border-yellow-500/20' },
  { icon: '🚀', name: 'Ops', role: 'DevOps & Deploy', bg: 'bg-red-500/10 border-red-500/20' },
  { icon: '🔍', name: 'Research', role: 'Analysis & Intel', bg: 'bg-purple-500/10 border-purple-500/20' },
]
</script>
