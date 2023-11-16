<script setup lang="ts">
import VHeader from '@/components/VHeader.vue'
import VHero from '@/components/VHero.vue'
import VServices from '@/components/VServices.vue'
import VExperince from './components/VExperince.vue'
import VHireMe from './components/VHireMe.vue'
</script>

<template>
  <VHeader />
  <div class="container">
    <VHero />
  </div>
  <VServices />
  <VExperince />
  <VHireMe />
</template>
