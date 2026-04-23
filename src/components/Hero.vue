<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

    <!-- Deep void gradient -->
    <div class="absolute inset-0 bg-deep-void pointer-events-none"></div>

    <!-- Sentinel glow — central emanation -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-eternal-950/70 blur-[140px] animate-glow-pulse pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-eternal-800/30 blur-[60px] animate-glow-pulse pointer-events-none" style="animation-delay:1s"></div>
    <div class="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-nebula-600/8 blur-3xl pointer-events-none"></div>

    <!-- Sentinel ring decoration -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-eternal-700/10 pointer-events-none animate-spin-slow"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-eternal-600/8 pointer-events-none animate-spin-slow" style="animation-direction:reverse;animation-duration:80s"></div>

    <div class="relative z-10 text-center max-w-4xl mx-auto">

      <!-- Label -->
      <div class="inline-flex items-center gap-3 mb-10 animate-fade-in" style="animation-delay:0.2s; opacity:0">
        <div class="h-px w-16 bg-gradient-to-r from-transparent to-eternal-400/50"></div>
        <span class="text-xs tracking-[0.35em] uppercase text-eternal-300/70 font-light">The Sentinel Narrative</span>
        <div class="h-px w-16 bg-gradient-to-l from-transparent to-eternal-400/50"></div>
      </div>

      <!-- Sentinel glyph -->
      <div class="flex justify-center mb-6 animate-fade-in" style="animation-delay:0.1s; opacity:0">
        <div class="relative w-16 h-16 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full border border-eternal-400/20 animate-glow-pulse"></div>
          <span class="font-display text-3xl text-eternal-300/60">⬡</span>
        </div>
      </div>

      <!-- Main title -->
      <h1 class="font-display text-6xl md:text-9xl font-light tracking-[0.12em] uppercase mb-3 animate-fade-up leading-none" style="opacity:0">
        <span class="gradient-eternal">Eternal</span>
      </h1>
      <h2 class="font-display text-3xl md:text-5xl font-light tracking-[0.3em] uppercase text-eternal-300/70 mb-8 animate-fade-up" style="animation-delay:0.1s; opacity:0">
        Vigil
      </h2>

      <!-- Tagline -->
      <p class="font-display italic text-xl md:text-2xl text-gray-400 font-light mb-6 animate-fade-up" style="animation-delay:0.2s; opacity:0">
        "Before the first star was lit, it was already watching."
      </p>

      <!-- Body -->
      <p class="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up" style="animation-delay:0.3s; opacity:0">
        The Sentinel — Arch-Architect of the Heavens, motionless guardian at the boundary of chaos,
        and Final Custodian of all that was ever known. This is its story.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style="animation-delay:0.4s; opacity:0">
        <a href="#sentinel"
           class="inline-flex items-center gap-3 px-7 py-3 text-xs tracking-[0.15em] uppercase text-white border border-eternal-500/50 rounded-full hover:bg-eternal-500/10 hover:border-eternal-400 transition-all duration-300">
          <span class="w-1.5 h-1.5 rounded-full bg-eternal-400 animate-pulse"></span>
          Enter the Vigil
        </a>
        <a href="https://github.com/louiemarte10/eternal-vigil-ai" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 px-7 py-3 text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub Repository
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-slow opacity-30">
        <span class="text-xs tracking-[0.25em] uppercase text-gray-600">Descend</span>
        <div class="w-px h-10 bg-gradient-to-b from-eternal-500/40 to-transparent"></div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-eternal-800/40 to-transparent"></div>
  </section>
</template>
