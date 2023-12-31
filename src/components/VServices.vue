<script setup lang="ts">
import { useParallax } from '@vueuse/core'
import { ref, computed, reactive } from 'vue'
import type { CSSProperties } from 'vue'
import btnIcon from '@/assets/img/serv/arrow-icon.svg'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import CardImgOne from '@/assets/img/serv/cards/card-img1.png'
import CardImgTwo from '@/assets/img/serv/cards/card-img2.png'

const target = ref(null)
const myCarousel = ref(null)
const parallax = reactive(useParallax(target))

const layerBase: CSSProperties = {
  position: 'absolute',
  transition: '.3s ease-out all'
}

const layer1 = computed(() => ({
  ...layerBase,
  transform: `translateY(-${parallax.roll * 50}px)`
}))

const layer2 = computed(() => ({
  ...layerBase,
  transform: `translateY(${parallax.roll * 80}px)`
}))

const layer3 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.roll * 30}px)`
}))

const slides = [
  {
    name: 'UI/ UX Design',
    img: CardImgOne
  },
  {
    name: 'Web Design',
    img: CardImgTwo
  },
  {
    name: 'Landing Page',
    img: CardImgOne
  },
  {
    name: 'UI/ UX Design',
    img: CardImgTwo
  }
]

const breakpoints = {
  1200: {
    itemsToShow: 3,
    snapAlign: 'center'
  },
  700: {
    itemsToShow: 2,
    snapAlign: 'center'
  },
  0: {
    itemsToShow: 1,
    snapAlign: 'center'
  }
}
</script>

<template>
  <div class="services" ref="target">
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
    <div class="container">
      <div class="services-info">
        <h2 class="services-info__title">My <span class="text-color-accent">Services</span></h2>
        <div class="services-info__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo
          vulputate, bibendum sodales
        </div>
      </div>
      <carousel ref="myCarousel" :items-to-show="3" :breakpoints="breakpoints">
        <slide v-for="slide in slides" :key="slide.name">
          <div class="card">
            <div class="card-title">{{ slide.name }}</div>
            <div class="card-space" />
            <div class="card-img">
              <img :src="slide.img" alt="card-img" />
              <a class="card-btn" href="#">
                <btnIcon class="btn-icon" />
              </a>
            </div>
          </div>
        </slide>
        <template #addons>
          <!-- <navigation /> -->
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.services {
  position: relative;
  background-image: url(@/assets/img/serv/serv-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 120px 0 50px;
  overflow: hidden;
  border-radius: 3rem;

  @include media-breakpoint-down(xl) {
    padding: 60px 0 50px;
  }
}

.services-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-bottom: 96px;

  @include media-breakpoint-down(xl) {
    flex-direction: column;
  }
}

.services-info__title {
  font-size: 48px;
  font-weight: 500;
  text-wrap: nowrap;

  @include media-breakpoint-down(lg) {
    font-size: 48px;
  }

  @include media-breakpoint-down(sm) {
    font-size: 32px;
  }
}

.services-info__text {
  max-width: 586px;
  padding-left: 10px;
  z-index: 2;
}

.services-cards {
  display: flex;
  justify-content: space-around;
}

.card {
  max-width: 95%;
  border-radius: 35px;
  cursor: pointer;
}

.card-title {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  padding: 44px 37px 23px 37px;
  border: 1px solid rgba(249, 250, 251, 0.3);
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  fill: rgba(104, 104, 104, 0.2);
  backdrop-filter: blur(7.5px);
  transition: 0.2s all ease;
}

.card-space {
  height: 200px;
  border-left: 1px solid rgba(249, 250, 251, 0.3);
  border-right: 1px solid rgba(249, 250, 251, 0.3);
  margin-bottom: -120px;
  fill: rgba(104, 104, 104, 0.2);
  backdrop-filter: blur(7.5px);
  transition: 0.2s all ease;
}

.card-img {
  position: relative;
  border-radius: 35px;
}

.card-btn {
  position: absolute;
  background-color: #1d2939;
  z-index: 2;
  bottom: 0;
  right: 0;
  padding: 21px;
  border-radius: 100px;
  transition: all 0.15s ease;
  display: flex;

  &:hover {
    background-color: #fff;
  }
}

:deep(.card-btn:hover .btn-icon path) {
  stroke: #1d2939;
}

:deep(.carousel__pagination-button::after) {
  width: 15px;
  height: 15px;
  background-color: #e4e7ec;
  border-radius: 10px;
}

:deep(.carousel__pagination-button--active::after) {
  background-color: $accent;
  width: 60px;
  height: 15px;
  border-radius: 20px;
}

.decor-left {
  left: 0;

  @include media-breakpoint-down(lg) {
    top: 35%;
  }
}
.decor-center {
  left: 40%;
  top: 10%;
}
.decor-right {
  right: -5%;
  bottom: 0;

  @include media-breakpoint-down(lg) {
    display: none;
  }
}

.card:hover .card-title,
.card:hover .card-space {
  background-color: $accent;
}
</style>
