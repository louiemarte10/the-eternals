<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { search, type SearchItem } from '../composables/useSearch'

const emit = defineEmits(['close'])
const router = useRouter()

const query = ref('')
const results = ref<SearchItem[]>([])
const selected = ref(0)
const inputRef = ref<HTMLInputElement | null>(null)

const categoryColor: Record<string, string> = {
  Aspects:   '#9494e8',
  Ecosystem: '#c084fc',
  Docs:      '#f0d080',
  API:       '#c0c8ff',
  Home:      '#888899',
}

watch(query, q => {
  results.value = search(q)
  selected.value = 0
})

function go(item: SearchItem) {
  router.push({ path: item.route, hash: item.hash ?? '' })
  emit('close')
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') { emit('close'); return }
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selected.value = Math.min(selected.value + 1, results.value.length - 1)
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    selected.value = Math.max(selected.value - 1, 0)
  }
  if (e.key === 'Enter' && results.value[selected.value]) {
    go(results.value[selected.value])
  }
}

onMounted(() => {
  nextTick(() => inputRef.value?.focus())
  window.addEventListener('keydown', onKey)
})
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <!-- Backdrop -->
  <div
    class="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4"
    style="background: rgba(8,8,16,0.85); backdrop-filter: blur(8px);"
    @click.self="emit('close')"
  >
    <!-- Modal card -->
    <div class="w-full max-w-xl rounded-2xl border border-void-border bg-void-card shadow-2xl overflow-hidden">

      <!-- Input -->
      <div class="flex items-center gap-3 px-5 py-4 border-b border-void-border">
        <svg class="w-4 h-4 text-ink-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"/>
        </svg>
        <input
          ref="inputRef"
          v-model="query"
          type="text"
          placeholder="Search documentation, aspects, projects…"
          class="flex-1 bg-transparent font-sans font-light text-sm text-ink placeholder:text-ink-faint outline-none"
        />
        <kbd class="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded border border-void-border font-mono text-2xs text-ink-faint">ESC</kbd>
      </div>

      <!-- Results -->
      <div class="max-h-80 overflow-y-auto">
        <div v-if="query && results.length === 0" class="px-5 py-8 text-center font-sans text-sm text-ink-faint">
          No results for <span class="text-ink">"{{ query }}"</span>
        </div>

        <div v-else-if="!query" class="px-5 py-8 text-center font-sans text-sm text-ink-faint">
          Type to search across all docs, aspects, and projects.
        </div>

        <button
          v-for="(item, i) in results"
          :key="`${item.route}${item.hash ?? ''}`"
          class="w-full text-left flex items-start gap-4 px-5 py-3.5 transition-colors duration-100"
          :class="selected === i ? 'bg-void-soft' : 'hover:bg-void-soft/50'"
          @click="go(item)"
          @mousemove="selected = i"
        >
          <span
            class="shrink-0 mt-0.5 font-mono text-2xs px-2 py-0.5 rounded border"
            :style="{
              color: categoryColor[item.category] + 'cc',
              borderColor: categoryColor[item.category] + '40',
              background: categoryColor[item.category] + '10',
            }"
          >{{ item.category }}</span>
          <div class="min-w-0">
            <div class="font-sans text-sm text-ink truncate">{{ item.title }}</div>
            <div class="font-sans text-xs text-ink-muted mt-0.5 line-clamp-1">{{ item.excerpt }}</div>
          </div>
        </button>
      </div>

      <!-- Footer hint -->
      <div class="px-5 py-3 border-t border-void-border flex items-center gap-4 text-2xs font-mono text-ink-faint">
        <span><kbd class="px-1.5 py-0.5 rounded border border-void-border">↑↓</kbd> navigate</span>
        <span><kbd class="px-1.5 py-0.5 rounded border border-void-border">↵</kbd> open</span>
        <span><kbd class="px-1.5 py-0.5 rounded border border-void-border">ESC</kbd> close</span>
      </div>
    </div>
  </div>
</template>
