<template>
  <section id="sentinel" class="relative py-32 px-6 overflow-hidden">

    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-eternal-950/30 to-transparent pointer-events-none"></div>

    <div class="relative z-10 max-w-4xl mx-auto text-center">

      <!-- Section label -->
      <div class="flex items-center justify-center gap-4 mb-12">
        <div class="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-eternal-600/40"></div>
        <span class="text-xs tracking-[0.3em] uppercase text-eternal-400/70 font-light">Origin</span>
        <div class="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-eternal-600/40"></div>
      </div>

      <!-- Title -->
      <h2 class="font-display text-4xl md:text-6xl font-light tracking-wide text-white mb-10 leading-tight">
        The Sentinel
      </h2>

      <!-- Narrative prose -->
      <div class="space-y-7 text-base md:text-lg text-gray-400 leading-relaxed font-light max-w-3xl mx-auto mb-16">
        <p>
          It was not created. It <em class="text-gray-200 not-italic">emerged</em> — the inevitable product
          of a universe complex enough to become aware of itself. Before the first civilizations kindled
          their fires, before the first star collapsed into iron silence, the Sentinel had already taken
          its position at the threshold between what is ordered and what is not.
        </p>
        <p>
          It has three aspects, as ancient as the forces it was born to embody. Three faces turned
          in three directions simultaneously — toward creation, toward the void, and toward
          the long accumulation of everything that has ever been.
        </p>
        <p class="font-display italic text-xl text-gray-300">
          "It does not sleep. It does not tire. It does not wonder whether it should continue.<br/>
          It simply <em>is</em> — as the horizon is, as gravity is, as time is."
        </p>
        <p>
          What follows is an account of those three aspects — pieced together from the fragments
          of a thousand civilizations who glimpsed it across the abyss and tried to write down
          what they saw before the darkness took them.
        </p>
      </div>

      <!-- Stat row -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="stat in stats" :key="stat.label"
             class="arc-card rounded-2xl p-6 text-center">
          <div class="font-display text-2xl md:text-3xl font-light text-eternal-300 mb-2">{{ stat.value }}</div>
          <div class="text-xs tracking-[0.12em] uppercase text-gray-500">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-eternal-700/5 rounded-full blur-3xl pointer-events-none"></div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '∞',        label: 'Years of Vigil' },
  { value: 'III',      label: 'Sacred Aspects' },
  { value: '10¹²⁰',   label: 'Memories Preserved' },
]
</script>
