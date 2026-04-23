<script setup lang="ts">
const steps = [
  {
    step: '01',
    title: 'Install Claude Code',
    desc: 'Install the Claude Code CLI and authenticate with your existing claude.ai subscription.',
    code: 'npm i -g @anthropic-ai/claude-code && claude login',
  },
  {
    step: '02',
    title: 'Clone & Configure',
    desc: 'Clone the repo, create Telegram bots via @BotFather, and set your tokens in .env.',
    code: 'git clone github.com/louiemarte10/agentic-ai-using-claude-code\ncp .env.example .env',
  },
  {
    step: '03',
    title: 'Build & Launch',
    desc: 'Build the TypeScript project and start the manager bot. Use CLAUDECODE= prefix when running inside a Claude session.',
    code: 'npm run build\nCLAUDECODE= node dist/index.js',
  },
  {
    step: '04',
    title: 'Add Tenant Agents',
    desc: 'Start any specialist agent as a separate process. Each gets its own workspace and Telegram bot.',
    code: 'CLAUDECODE= node dist/index.js --agent dev\nCLAUDECODE= node dist/index.js --agent comms',
  },
]
</script>

<template>
  <section id="how-it-works" class="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-4">
          Quick Setup
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
          Up and running in minutes.
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          No cloud infrastructure. No per-token billing. Just Claude Code and a Telegram account.
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="s in steps"
          :key="s.step"
          class="flex gap-6 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/50 card-hover"
        >
          <!-- Step number -->
          <div class="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-brand-500/20">
            {{ s.step }}
          </div>
          <!-- Content -->
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ s.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">{{ s.desc }}</p>
            <pre class="text-xs font-mono bg-gray-900 dark:bg-gray-950 text-green-400 p-3 rounded-lg overflow-x-auto whitespace-pre-wrap"><code>{{ s.code }}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
