import Fuse from 'fuse.js'
import { aspects } from '../data/aspects'
import { projects } from '../data/ecosystem'

export interface SearchItem {
  title: string
  excerpt: string
  category: string
  route: string
  hash?: string
}

const corpus: SearchItem[] = [
  ...aspects.map(a => ({
    title: a.title,
    excerpt: a.summary.slice(0, 160),
    category: 'Aspects',
    route: '/',
    hash: '#aspects',
  })),
  ...projects.map(p => ({
    title: p.name,
    excerpt: p.desc.slice(0, 160),
    category: 'Ecosystem',
    route: '/',
    hash: '#ecosystem',
  })),
  { title: 'Documentation', excerpt: 'Getting started, overview, and guides for Eternal Vigil AI and louieDevAgent.', category: 'Docs', route: '/docs' },
  { title: 'API Reference', excerpt: 'Complete API reference for the louieDevAgent agent system, memory, and dashboard.', category: 'API', route: '/api-reference' },
  { title: 'Overview', excerpt: 'Introduction to Eternal Vigil AI — the Sentinel narrative and the louieDevAgent ecosystem.', category: 'Docs', route: '/docs', hash: '#overview' },
  { title: 'Getting Started', excerpt: 'Clone the repo, install dependencies, and run the dev server locally.', category: 'Docs', route: '/docs', hash: '#getting-started' },
  { title: 'The Sentinel', excerpt: 'An intelligence that predates the universe — the myth behind the machine.', category: 'Docs', route: '/docs', hash: '#sentinel' },
  { title: 'Contributing', excerpt: 'How to fork, contribute, and submit pull requests to Eternal Vigil AI.', category: 'Docs', route: '/docs', hash: '#contributing' },
  { title: 'Agent System API', excerpt: 'Endpoints for managing the louieDevAgent fleet — list, status, start, stop agents.', category: 'API', route: '/api-reference', hash: '#agent-system' },
  { title: 'Memory API', excerpt: 'Endpoints for the 5-layer persistent memory system — stats, search, and decay.', category: 'API', route: '/api-reference', hash: '#memory' },
  { title: 'Dashboard API', excerpt: 'Token usage, cost tracking, and hive mind feed endpoints.', category: 'API', route: '/api-reference', hash: '#dashboard' },
  { title: 'Telegram Webhooks', excerpt: 'Webhook endpoints for Telegram bot integration across the agent fleet.', category: 'API', route: '/api-reference', hash: '#telegram' },
  { title: 'Configuration', excerpt: 'Environment variables and configuration options for louieDevAgent.', category: 'API', route: '/api-reference', hash: '#configuration' },
  { title: 'Chronicle', excerpt: 'The origin of the Sentinel — before the first atom formed.', category: 'Home', route: '/', hash: '#chronicle' },
  { title: 'Manifesto', excerpt: 'The vigil does not end when the stars do. It ends when there is nothing left worth remembering.', category: 'Home', route: '/', hash: '#manifesto' },
]

const fuse = new Fuse(corpus, {
  keys: [
    { name: 'title', weight: 0.7 },
    { name: 'excerpt', weight: 0.3 },
  ],
  threshold: 0.4,
  includeScore: true,
})

export function search(query: string): SearchItem[] {
  if (!query.trim()) return []
  return fuse.search(query).map(r => r.item)
}
