<script setup lang="ts">
import { useParallax } from '@vueuse/core'
import { ref, computed, reactive } from 'vue'
import type { CSSProperties } from 'vue'

const target = ref(null)
const parallax = reactive(useParallax(target))

const layerBase: CSSProperties = {
  position: 'absolute',
  transition: '.3s ease-out all'
}

const layer1 = computed(() => ({
  ...layerBase,
  transform: `translateY(${parallax.roll * 20}px)`
}))

const layer2 = computed(() => ({
  ...layerBase,
  transform: `translateY(${parallax.roll * 30}px)`
}))

const layer3 = computed(() => ({
  ...layerBase,
  transform: `translateY(${parallax.roll * 40}px)`
}))
</script>

<template>
  <div ref="target" class="services">
    <img
      class="decor-left"
      :style="layer1"
      src="@/assets/img/serv/decors/decor-img3.png"
      alt="decor"
    />
    <img
      class="decor-center"
      :style="layer2"
      src="@/assets/img/serv/decors/decor-img2.png"
      alt="decor"
    />
    <img
      class="decor-right"
      :style="layer3"
      src="@/assets/img/serv/decors/decor-img1.png"
      alt="decor"
    />
  </div>
</template>

<style scoped lang="scss">
.services {
  position: relative;
  height: 876px;
  background-image: url(../assets/img/serv/serv-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.decor-left {
  left: 0;
}
.decor-center {
  left: 50%;
}
.decor-right {
  right: 0;
  bottom: 0;
}
</style>
