<script setup lang="ts">
import VHeader from '@/components/VHeader.vue'
import VHero from '@/components/VHero.vue'
import VServices from '@/components/VServices.vue'
import VExperince from '@/components/VExperince.vue'
import VHireMe from '@/components/VHireMe.vue'
import VPortfolio from '@/components/VPortfolio.vue'
import VResults from '@/components/VResults.vue'
import VDiscuss from '@/components/VDiscuss.vue'
import VFooter from '@/components/VFooter.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'


const scrollTo: Ref<HTMLElement | null> = ref(null)

const scrollToHireSection = () => {
  scrollTo.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <VHeader />
  <div class="container">
    <VHero @scrollToHireSection="scrollToHireSection" />
  </div>
  <VServices />
  <VExperince />
  <div ref="scrollTo">
    <VHireMe />
  </div>
  <VPortfolio />
  <VResults />
  <VDiscuss />
  <VFooter />
</template>
