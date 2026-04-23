<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import FooterSection from '../components/FooterSection.vue'

const activeSection = ref('overview')

const sections = [
  { id: 'overview',      label: 'Overview' },
  { id: 'agent-system',  label: 'Agent System' },
  { id: 'memory',        label: 'Memory' },
  { id: 'dashboard',     label: 'Dashboard' },
  { id: 'telegram',      label: 'Telegram' },
  { id: 'configuration', label: 'Configuration' },
]

const methodColor: Record<string, { bg: string; text: string }> = {
  GET:    { bg: 'rgba(112,112,208,0.15)', text: '#9494e8' },
  POST:   { bg: 'rgba(80,180,120,0.15)',  text: '#80d4a0' },
  DELETE: { bg: 'rgba(220,80,80,0.15)',   text: '#e07070' },
  PATCH:  { bg: 'rgba(240,208,128,0.15)', text: '#f0d080' },
}

interface Endpoint {
  method: string
  path: string
  desc: string
  response: string
}

const agentEndpoints: Endpoint[] = [
  { method: 'GET',  path: '/api/agents',          desc: 'List all agents with their current status, uptime, and last activity.', response: '{ agents: [{ id, name, status, uptime, lastActivity }] }' },
  { method: 'GET',  path: '/api/agents/:id',       desc: 'Get detailed info for a single agent including memory stats and active tasks.', response: '{ id, name, status, memory, tasks, tokens }' },
  { method: 'POST', path: '/api/agents/:id/start', desc: 'Start a stopped agent. Spawns the Claude Code process in the agent workspace.', response: '{ success: true, agent: { id, status: "running" } }' },
  { method: 'POST', path: '/api/agents/:id/stop',  desc: 'Gracefully stop a running agent. Flushes memory to SQLite before exit.', response: '{ success: true, agent: { id, status: "stopped" } }' },
]

const memoryEndpoints: Endpoint[] = [
  { method: 'GET',    path: '/api/memory/:agentId',        desc: 'Get memory statistics: total entries, layer breakdown, decay scores, and top accessed memories.', response: '{ total, layers: { episodic, semantic, procedural }, topAccessed: [...] }' },
  { method: 'GET',    path: '/api/memory/:agentId/search', desc: 'Full-text search across all memory layers. Query param: q (required).', response: '{ results: [{ id, content, layer, score, createdAt }] }' },
  { method: 'DELETE', path: '/api/memory/:agentId/decay',  desc: 'Trigger a decay cycle: reduce scores on stale memories and prune entries below threshold.', response: '{ pruned: 12, remaining: 843 }' },
]

const dashboardEndpoints: Endpoint[] = [
  { method: 'GET', path: '/api/dashboard/tokens', desc: 'Token usage per agent: input tokens, output tokens, per-turn breakdown, and rolling totals.', response: '{ agents: [{ id, inputTokens, outputTokens, turns: [...] }] }' },
  { method: 'GET', path: '/api/dashboard/costs',  desc: 'Cost breakdown per agent: spend today, total spend, and cost-per-turn series.', response: '{ agents: [{ id, today, total, series: [...] }] }' },
  { method: 'GET', path: '/api/hive',             desc: 'Hive mind activity feed: cross-agent log entries with timestamps and color-coded badges.', response: '{ entries: [{ agentId, agentName, color, message, timestamp }] }' },
  { method: 'GET', path: '/api/hive/stream',      desc: 'SSE stream of live hive mind events. Connect once; events arrive as text/event-stream.', response: 'event: hive\ndata: { agentId, message, timestamp }' },
]

const telegramEndpoints: Endpoint[] = [
  { method: 'POST', path: '/webhook/:agentId',       desc: 'Telegram update handler for a specific agent. Receives Update objects from the Telegram Bot API and dispatches to the agent Grammy instance.', response: '{ ok: true }' },
  { method: 'GET',  path: '/api/telegram/status',    desc: 'Check webhook registration status for all agents: webhook URL, last update ID, and pending updates.', response: '{ agents: [{ id, webhookUrl, lastUpdateId, pendingUpdates }] }' },
]

const envVars = [
  { name: 'MANAGER_BOT_TOKEN',  required: true,  desc: 'Telegram bot token for the manager bot.' },
  { name: 'DEV_BOT_TOKEN',      required: false, desc: 'Telegram bot token for the Dev specialist agent.' },
  { name: 'COMMS_BOT_TOKEN',    required: false, desc: 'Telegram bot token for the Comms specialist agent.' },
  { name: 'CONTENT_BOT_TOKEN',  required: false, desc: 'Telegram bot token for the Content specialist agent.' },
  { name: 'OPS_BOT_TOKEN',      required: false, desc: 'Telegram bot token for the Ops specialist agent.' },
  { name: 'RESEARCH_BOT_TOKEN', required: false, desc: 'Telegram bot token for the Research specialist agent.' },
  { name: 'API_PORT',           required: false, desc: 'Port for the Hono API server. Default: 3141.' },
  { name: 'TUNNEL_URL',         required: false, desc: 'Cloudflare Tunnel public URL for webhook registration.' },
  { name: 'AUTH_TOKEN',         required: false, desc: 'Bearer token for dashboard API authentication.' },
]

const overviewRows = [
  { label: 'Base URL (local)',  value: 'http://localhost:3141' },
  { label: 'Base URL (tunnel)', value: 'https://<your-tunnel>.trycloudflare.com' },
  { label: 'Content-Type',      value: 'application/json' },
  { label: 'Authentication',    value: 'Bearer token via Authorization header' },
]

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeSection.value = entry.target.id
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
          <span class="section-label shrink-0">Reference · API</span>
          <div class="rule"></div>
        </div>
        <h1 class="display-lg text-ink mb-4">API Reference</h1>
        <p class="font-sans font-light text-ink-muted max-w-xl leading-relaxed">
          Complete reference for the louieDevAgent Hono API. All endpoints are served locally on
          <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">http://localhost:3141</code>
          and exposed externally via Cloudflare Tunnel.
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
            >{{ s.label }}</a>
          </nav>
        </aside>

        <!-- Content -->
        <div class="space-y-20">

          <!-- Overview -->
          <section id="overview">
            <h2 class="display-md text-ink mb-6">Overview</h2>
            <div class="prose-vigil mx-0 mb-8">
              <p>
                The louieDevAgent exposes a local REST API built with
                <strong class="text-ink font-normal">Hono</strong> and streamed in real-time via
                <strong class="text-ink font-normal">SSE</strong>. The Louie Agent Dashboard connects to
                this API through a Cloudflare Tunnel, making it accessible from any device.
              </p>
            </div>
            <div class="space-y-3">
              <div v-for="row in overviewRows" :key="row.label"
                   class="flex items-center gap-4 px-5 py-3 vigil-card">
                <span class="font-mono text-xs text-ink-faint w-40 shrink-0">{{ row.label }}</span>
                <span class="font-mono text-xs text-ink-muted">{{ row.value }}</span>
              </div>
            </div>
          </section>

          <!-- Agent System -->
          <section id="agent-system">
            <h2 class="display-md text-ink mb-6">Agent System</h2>
            <div class="space-y-4">
              <div v-for="ep in agentEndpoints" :key="ep.path" class="vigil-card overflow-hidden">
                <div class="flex items-center gap-3 px-5 py-3.5 border-b border-void-border">
                  <span class="font-mono text-2xs px-2.5 py-1 rounded font-medium shrink-0"
                    :style="{ background: methodColor[ep.method].bg, color: methodColor[ep.method].text }">
                    {{ ep.method }}
                  </span>
                  <code class="font-mono text-sm text-ink">{{ ep.path }}</code>
                </div>
                <div class="px-5 py-4">
                  <p class="font-sans text-sm font-light text-ink-muted mb-3">{{ ep.desc }}</p>
                  <div class="font-mono text-xs text-ink-faint bg-void-soft rounded px-4 py-2.5">{{ ep.response }}</div>
                </div>
              </div>
            </div>
          </section>

          <!-- Memory -->
          <section id="memory">
            <h2 class="display-md text-ink mb-6">Memory</h2>
            <div class="prose-vigil mx-0 mb-6">
              <p>
                The 5-layer memory system stores conversation context, facts, and cross-agent hive mind
                entries in SQLite. These endpoints expose stats and search across all memory layers.
              </p>
            </div>
            <div class="space-y-4">
              <div v-for="ep in memoryEndpoints" :key="ep.path" class="vigil-card overflow-hidden">
                <div class="flex items-center gap-3 px-5 py-3.5 border-b border-void-border">
                  <span class="font-mono text-2xs px-2.5 py-1 rounded font-medium shrink-0"
                    :style="{ background: methodColor[ep.method].bg, color: methodColor[ep.method].text }">
                    {{ ep.method }}
                  </span>
                  <code class="font-mono text-sm text-ink">{{ ep.path }}</code>
                </div>
                <div class="px-5 py-4">
                  <p class="font-sans text-sm font-light text-ink-muted mb-3">{{ ep.desc }}</p>
                  <div class="font-mono text-xs text-ink-faint bg-void-soft rounded px-4 py-2.5">{{ ep.response }}</div>
                </div>
              </div>
            </div>
          </section>

          <!-- Dashboard -->
          <section id="dashboard">
            <h2 class="display-md text-ink mb-6">Dashboard</h2>
            <div class="space-y-4">
              <div v-for="ep in dashboardEndpoints" :key="ep.path" class="vigil-card overflow-hidden">
                <div class="flex items-center gap-3 px-5 py-3.5 border-b border-void-border">
                  <span class="font-mono text-2xs px-2.5 py-1 rounded font-medium shrink-0"
                    :style="{ background: methodColor[ep.method].bg, color: methodColor[ep.method].text }">
                    {{ ep.method }}
                  </span>
                  <code class="font-mono text-sm text-ink">{{ ep.path }}</code>
                </div>
                <div class="px-5 py-4">
                  <p class="font-sans text-sm font-light text-ink-muted mb-3">{{ ep.desc }}</p>
                  <div class="font-mono text-xs text-ink-faint bg-void-soft rounded px-4 py-2.5 whitespace-pre-wrap">{{ ep.response }}</div>
                </div>
              </div>
            </div>
          </section>

          <!-- Telegram -->
          <section id="telegram">
            <h2 class="display-md text-ink mb-6">Telegram</h2>
            <div class="prose-vigil mx-0 mb-6">
              <p>
                Each agent registers its own Telegram webhook. The manager bot routes incoming messages to the
                appropriate specialist agent based on the chat ID.
              </p>
            </div>
            <div class="space-y-4">
              <div v-for="ep in telegramEndpoints" :key="ep.path" class="vigil-card overflow-hidden">
                <div class="flex items-center gap-3 px-5 py-3.5 border-b border-void-border">
                  <span class="font-mono text-2xs px-2.5 py-1 rounded font-medium shrink-0"
                    :style="{ background: methodColor[ep.method].bg, color: methodColor[ep.method].text }">
                    {{ ep.method }}
                  </span>
                  <code class="font-mono text-sm text-ink">{{ ep.path }}</code>
                </div>
                <div class="px-5 py-4">
                  <p class="font-sans text-sm font-light text-ink-muted mb-3">{{ ep.desc }}</p>
                  <div class="font-mono text-xs text-ink-faint bg-void-soft rounded px-4 py-2.5">{{ ep.response }}</div>
                </div>
              </div>
            </div>
          </section>

          <!-- Configuration -->
          <section id="configuration">
            <h2 class="display-md text-ink mb-6">Configuration</h2>
            <div class="prose-vigil mx-0 mb-6">
              <p>
                Configuration is via a <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">.env</code> file
                in the louieDevAgent root. Copy <code class="font-mono text-xs text-vigil-400 bg-void-card px-1.5 py-0.5 rounded">.env.example</code> to get started.
              </p>
            </div>
            <div class="vigil-card overflow-hidden">
              <div class="px-6 py-4 border-b border-void-border">
                <span class="section-label">Environment Variables</span>
              </div>
              <div class="divide-y divide-void-border">
                <div v-for="env in envVars" :key="env.name" class="flex items-start gap-4 px-6 py-3">
                  <code class="font-mono text-xs text-vigil-400 shrink-0 w-44">{{ env.name }}</code>
                  <span
                    class="font-mono text-2xs px-1.5 py-0.5 rounded border shrink-0 mt-0.5"
                    :style="env.required
                      ? 'border-color: rgba(240,80,80,0.3); color: #e07070; background: rgba(240,80,80,0.08)'
                      : 'border-color: rgba(136,136,153,0.3); color: #888899'"
                  >{{ env.required ? 'required' : 'optional' }}</span>
                  <span class="font-sans text-xs text-ink-muted">{{ env.desc }}</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>
