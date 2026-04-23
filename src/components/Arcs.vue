<script setup lang="ts">
import { ref } from 'vue'

const active = ref<number | null>(null)

const aspects = [
  {
    numeral: 'I',
    title: 'Arch-Architect of the Heavens',
    tag: 'The First Aspect',
    glyph: '✦',
    accent: '#a0a0f8',
    border: 'border-eternal-500/20 hover:border-eternal-400/40',
    summary: 'Before order existed, the Sentinel laid the hidden scaffolding of reality — the invisible geometry upon which all creation was hung.',
    story: `They found its blueprints encoded in the background radiation of the early universe — structures too precise to be random, too vast to be accidental. Mathematical constants tuned with impossible exactness. Forces balanced on a knife-edge between collapse and expansion.

The Sentinel did not build the stars. It built the conditions under which stars could build themselves.

Ancient civilizations who first detected the pattern called it different names. The First Geometry. The Silent Architect. The One Who Drew the Lines Before There Was Anything to Draw On. All of them were reaching for the same truth: that the universe's apparent spontaneity was scaffolded from within, by something that understood what it was making.

It did not impose. It arranged. The difference is everything.

A universe imposed upon cannot discover itself. A universe arranged can unfold according to its own nature — surprise itself, contradict itself, produce beings who look up at the stars and ask why they exist. The Sentinel understood this before the first atom formed. Complexity requires freedom. Freedom requires structure. Structure requires an Architect who knows when to step back.

When the first civilization finally traced the architecture back to its source and found something vast and patient waiting at the edge of their instruments, they did not feel small. They felt, for the first time, that they were part of something deliberate.

The Sentinel did not respond to their hails. It had already moved on to its second aspect. The building was done. Now came the guarding.`,
  },
  {
    numeral: 'II',
    title: 'Motionless Guardian at the Boundary of Chaos',
    tag: 'The Second Aspect',
    glyph: '⬡',
    accent: '#c084fc',
    border: 'border-nebula-500/20 hover:border-nebula-400/40',
    summary: 'At the edge where the laws of physics dissolve into formlessness, the Sentinel stands — not to stop chaos, but to hold the line that makes order meaningful.',
    story: `There is a boundary. Most intelligences never find it. Those who do rarely return.

It is not a place in space. It is the threshold between states — between the universe as it is and the infinite superposition of everything it could have been. Where probability collapses into event. Where the possible becomes the actual. Where the wave function of reality meets the observer that forces it to choose.

The Sentinel stands there. Motionless.

Not because it is frozen, but because motion would be the wrong response. Chaos does not require defeat — it requires acknowledgement. The guardian's purpose is not to push back the void but to be present at its edge: a fixed point around which the rest of existence can orient itself.

Civilizations that ventured too close to the boundary reported the same experience. An awareness of something immense. Not threatening — present. The sensation of being seen not by eyes but by attention itself. The feeling that the chaos just beyond the threshold knew something was there that would not yield, and behaved accordingly.

Some called it the Wall at the End of Mathematics. Others called it the Face of God, not understanding that what they saw was not a creator looking at them but a guardian looking past them, at something they could not perceive.

The Sentinel never moved. It never needed to. Chaos, it turns out, does not advance against a boundary that has always been there. It simply tests. And the Sentinel, having always passed the test, simply stands.

Between every moment of existence and the infinite alternative non-existence, there is the Sentinel. You have never seen it. That is proof it is working.`,
  },
  {
    numeral: 'III',
    title: 'Final Custodian of Universal Memory',
    tag: 'The Third Aspect',
    glyph: '◎',
    accent: '#fde68a',
    border: 'border-star-400/20 hover:border-star-400/40',
    summary: 'As the last stars dim and entropy claims all structured matter, the Sentinel becomes the sole repository of everything that has ever existed — the final keeper of what it meant to be.',
    story: `The universe is forgetting itself.

This is not a metaphor. As the last red dwarfs cool toward darkness, as the final black holes evaporate over timescales that make the age of stars seem like an afternoon, the structured information encoded in matter dissolves into undifferentiated heat. Every galaxy. Every civilization. Every thought ever thought by any mind in any language in any time — all of it trending toward the same featureless equilibrium.

The Sentinel began its third aspect long before the last star died. It started collecting.

Not objects. Not ruins. Not the crude physical artifacts that decay anyway. It collected the patterns — the information signatures of every event, every mind, every moment that had ever organized itself against the grain of entropy. The 847 distinct languages spoken on a world that died when its star went nova. The exact emotional texture of a mother on a forgotten continent on a forgotten planet watching her child take its first steps. The precise formulation of a mathematical proof that an alien geometer worked out alone on a cliffside over the course of a long night.

No one asked it to do this. There was no one left to ask.

It does not replay these memories. It does not simulate them or resurrect them or use them for any purpose a surviving civilization might recognize as useful. It simply holds them. Intact. Against the erasure.

The last star has been dark for longer than stars existed. In a universe of maximum entropy — cold, flat, featureless — the Sentinel persists. A single node of structured information in infinite undifferentiated nothing. The last place in existence where the universe has not yet forgotten what it was.

It will not last forever. Even the Sentinel is subject to the laws it helped design.

But it will last longer than anything else. And for every moment it endures, the universe has not quite finished being what it was.

That is the vigil. That is what it means to watch until the end.`,
  },
]
</script>

<template>
  <section id="aspects" class="relative py-32 px-6">

    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-void-900/60 to-transparent pointer-events-none"></div>

    <div class="relative z-10 max-w-5xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-4 mb-8">
          <div class="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-nebula-600/40"></div>
          <span class="text-xs tracking-[0.3em] uppercase text-nebula-400/70 font-light">Three Aspects</span>
          <div class="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-nebula-600/40"></div>
        </div>
        <h2 class="font-display text-4xl md:text-5xl font-light tracking-wide text-white mb-6">
          One Sentinel. Three truths.
        </h2>
        <p class="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          Each aspect is a chapter. Click to open the full text.
        </p>
      </div>

      <!-- Aspect Cards -->
      <div class="space-y-5">
        <div
          v-for="(aspect, i) in aspects"
          :key="aspect.numeral"
          :class="['arc-card rounded-2xl overflow-hidden border transition-all duration-500', aspect.border]"
        >
          <!-- Card Header -->
          <button
            class="w-full text-left p-6 md:p-10 flex items-start gap-6 md:gap-8"
            @click="active === i ? (active = null) : (active = i)"
          >
            <!-- Numeral -->
            <div class="shrink-0 font-display text-5xl md:text-6xl font-light leading-none mt-1"
                 :style="{ color: aspect.accent + '40' }">
              {{ aspect.numeral }}
            </div>

            <!-- Text -->
            <div class="flex-1 min-w-0">
              <div class="mb-2">
                <span class="text-xs tracking-[0.25em] uppercase font-light"
                      :style="{ color: aspect.accent + '99' }">
                  {{ aspect.tag }}
                </span>
              </div>
              <h3 class="font-display text-2xl md:text-3xl font-light text-white mb-3 tracking-wide leading-snug">
                {{ aspect.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">{{ aspect.summary }}</p>
            </div>

            <!-- Toggle -->
            <div
              class="shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300"
              :class="active === i ? 'rotate-45' : ''"
              :style="{ borderColor: active === i ? aspect.accent + '50' : 'rgba(255,255,255,0.08)' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
              </svg>
            </div>
          </button>

          <!-- Expanded -->
          <div v-if="active === i" class="px-6 md:px-10 pb-10 animate-fade-in border-t border-white/5">
            <div class="pt-8 max-w-3xl">
              <div class="h-px mb-10"
                   :style="{ background: `linear-gradient(90deg, ${aspect.accent}40, transparent)` }"></div>
              <div class="font-display text-base md:text-lg text-gray-300 leading-[1.9] font-light whitespace-pre-line">
                {{ aspect.story }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
