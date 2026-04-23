<script setup lang="ts">
import { ref } from 'vue'
import { aspects } from '../data/aspects'
const open = ref<number | null>(0)
</script>

<template>
  <section id="aspects" class="relative py-28 px-6 md:px-10">
    <div class="max-w-5xl mx-auto">

      <!-- Header -->
      <div class="flex items-center gap-6 mb-16">
        <div class="rule"></div>
        <span class="section-label shrink-0">Three Aspects · The Vigil</span>
        <div class="rule"></div>
      </div>

      <div class="mb-12">
        <h2 class="display-md text-ink mb-4">One Sentinel.<br/>Three truths.</h2>
        <p class="font-sans font-light text-ink-muted max-w-lg leading-relaxed">
          Each aspect is a complete account. They cannot be understood in isolation — but they can only be approached one at a time.
        </p>
      </div>

      <!-- Accordion -->
      <div class="space-y-px border border-void-border rounded-xl overflow-hidden">
        <div v-for="(a, i) in aspects" :key="a.n">
          <!-- Header row -->
          <button
            class="w-full text-left flex items-start gap-6 p-6 md:p-8 bg-void-card hover:bg-void-soft transition-colors duration-200"
            :class="open === i ? 'bg-void-soft' : ''"
            @click="open === i ? open = null : open = i"
          >
            <span class="font-mono text-xs shrink-0 mt-0.5" :style="{ color: a.accent + '80' }">{{ a.n }}</span>
            <div class="flex-1 min-w-0">
              <div class="section-label mb-2" :style="{ color: a.accent + '90' }">{{ a.sub }}</div>
              <h3 class="font-display text-xl md:text-2xl font-light text-ink mb-2">{{ a.title }}</h3>
              <p class="font-sans text-sm font-light text-ink-muted leading-relaxed">{{ a.summary }}</p>
            </div>
            <div class="shrink-0 w-7 h-7 rounded-full border border-void-border flex items-center justify-center transition-transform duration-300"
                 :class="open === i ? 'rotate-45' : ''">
              <svg class="w-3 h-3 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
              </svg>
            </div>
          </button>

          <!-- Body -->
          <div v-if="open === i" class="bg-void-soft border-t border-void-border px-6 md:px-8 py-8">
            <div class="max-w-prose">
              <div class="h-px mb-8" :style="{ background: `linear-gradient(90deg, ${a.accent}50, transparent)` }"></div>
              <div class="aspect-body space-y-6">
                <p v-for="(para, pi) in a.body" :key="pi">{{ para }}</p>
              </div>
            </div>
          </div>

          <!-- Divider between items -->
          <div v-if="i < aspects.length - 1" class="h-px bg-void-border"></div>
        </div>
      </div>
    </div>
  </section>
</template>
