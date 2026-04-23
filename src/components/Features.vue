<script setup lang="ts">
const features = [
  {
    icon: '🤖',
    title: 'Multi-Tenant Agents',
    desc: 'Manager bot + specialist tenants for Dev, Comms, Content, Ops, and Research. Each agent has its own personality, workspace, and Telegram bot.',
    color: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20',
  },
  {
    icon: '🧠',
    title: '5-Layer Memory',
    desc: 'Session context, persistent SQLite memory, full-text search, consolidation every 30 minutes, and automatic decay for old context.',
    color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20',
  },
  {
    icon: '📱',
    title: 'Telegram Interface',
    desc: 'Message any agent from anywhere. Voice messages, file attachments, session persistence — full Claude Code power from your phone.',
    color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20',
  },
  {
    icon: '📊',
    title: 'Live Dashboard',
    desc: 'Vue.js mission control panel. Real-time agent status, token usage charts, cost tracking, hive mind feed — deployed on Vercel for free.',
    color: 'from-green-500/10 to-teal-500/10 border-green-500/20',
  },
  {
    icon: '🔗',
    title: 'Hive Mind',
    desc: 'All agents share a SQLite activity log. Ask any agent what the others have been doing. True cross-agent awareness.',
    color: 'from-orange-500/10 to-red-500/10 border-orange-500/20',
  },
  {
    icon: '⚡',
    title: 'No Extra API Costs',
    desc: 'Runs entirely on your existing Claude Code subscription. Bash, file system, web search, browser automation — all included.',
    color: 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20',
  },
]
</script>

<template>
  <section id="features" class="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-4">
          Core Features
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          Everything you need,<br/>nothing you don't.
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Built on ClaudeClaw architecture — giving Claude Code a persistent body you can reach from anywhere.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="f in features"
          :key="f.title"
          :class="[
            'p-6 rounded-2xl border bg-gradient-to-br card-hover',
            f.color,
            'bg-white dark:bg-gray-900'
          ]"
        >
          <div class="text-3xl mb-4">{{ f.icon }}</div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ f.title }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
