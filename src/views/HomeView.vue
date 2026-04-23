<script setup lang="ts">
import Hero          from '../components/Hero.vue'
import Chronicle     from '../components/Chronicle.vue'
import Aspects       from '../components/Aspects.vue'
import Ecosystem     from '../components/Ecosystem.vue'
import Manifesto     from '../components/Manifesto.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <main class="relative z-10">
    <Hero />
    <Chronicle />
    <Aspects />
    <Ecosystem />
    <Manifesto />
  </main>
  <FooterSection />
</template>
