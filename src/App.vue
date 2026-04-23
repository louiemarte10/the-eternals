<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Architecture from './components/Architecture.vue'
import HowItWorks from './components/HowItWorks.vue'
import CtaSection from './components/CtaSection.vue'
import FooterSection from './components/FooterSection.vue'

const isDark = ref(true)

onMounted(() => {
  const stored = localStorage.getItem('theme')
  isDark.value = stored ? stored === 'dark' : true
  applyTheme(isDark.value)
})

watch(isDark, (val) => {
  localStorage.setItem('theme', val ? 'dark' : 'light')
  applyTheme(val)
})

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
    <Navbar :isDark="isDark" @toggle-theme="isDark = !isDark" />
    <main>
      <Hero />
      <Features />
      <Architecture />
      <HowItWorks />
      <CtaSection />
    </main>
    <FooterSection />
  </div>
</template>
