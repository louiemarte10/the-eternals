export interface Project {
  name: string
  subtitle: string
  repo: string
  url: string
  desc: string
  stack: string[]
  accent: string
  status: string
  features: string[]
}

export const projects: Project[] = [
  {
    name: 'Agentic AI',
    subtitle: 'louieDevAgent — Multi-Tenant AI System',
    repo: 'louiemarte10/agentic-ai-using-claude-code',
    url: 'https://github.com/louiemarte10/agentic-ai-using-claude-code',
    desc: 'A multi-tenant AI agent system powered by Claude Code, accessible via Telegram. One manager bot orchestrates a fleet of specialist agents — Dev, Comms, Content, Ops, Research — each with isolated workspaces, persistent memory, and their own Telegram interface. No extra API costs. Runs entirely on your existing Claude Code subscription.',
    stack: ['Node.js', 'TypeScript', 'Claude Code', 'Telegram', 'SQLite'],
    accent: '#9494e8',
    status: 'Active',
    features: [
      'Multi-tenant manager + specialist architecture',
      '5-layer persistent memory system',
      'Hive mind — shared cross-agent awareness',
      'Live web dashboard via Hono + SSE',
      'Scheduled tasks, voice messages, file sending',
    ],
  },
  {
    name: 'Louie Agent Dashboard',
    subtitle: 'Mission Control — Vue.js Fleet Monitor',
    repo: 'louiemarte10/louie-agent-dashboard',
    url: 'https://github.com/louiemarte10/louie-agent-dashboard',
    desc: 'Real-time mission control panel for the louieDevAgent fleet. Deployed on Vercel, connected to the local agent API via Cloudflare Tunnel. Monitor agent status, token usage, costs, hive mind activity, memory health, and scheduled tasks — from any device, anywhere.',
    stack: ['Vue 3', 'Tailwind CSS', 'Vite', 'Vercel', 'Cloudflare Tunnel'],
    accent: '#c084fc',
    status: 'Active',
    features: [
      'Live agent status with On/Off toggle switches',
      'Token usage charts and cost tracking per agent',
      'Hive mind feed with color-coded agent badges',
      'Memory browser — stats, decay, top accessed',
      'Auto-refresh every 30 seconds, full dark theme',
    ],
  },
]
