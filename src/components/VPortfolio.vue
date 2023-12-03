<script setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import CardImg from '@/assets/img/portfolio/portfolio-img1.png'
import BtnIcon from '@/assets/img/portfolio/btn-icon.svg'
import ArrowIcon from '@/assets/img/portfolio/arrow-icon.svg'

const myCarousel = ref(null)

const slides = [
  {
    id: 1,
    img: CardImg
  },
  {
    id: 2,
    img: CardImg
  },
  {
    id: 3,
    img: CardImg
  },
  {
    id: 4,
    img: CardImg
  }
]

const breakpoints = {
  1400: {
    itemsToShow: 2,
    snapAlign: 'center'
  },
  1300: {
    itemsToShow: 1,
    snapAlign: 'center'
  },
  0: {
    itemsToShow: 1,
    snapAlign: 'center'
  }
}
</script>

<template>
  <div class="portfolio container">
    <div class="portfolio-top">
      <h1 class="portfolio-title">
        Lets have a look at my <span class="text-color-accent">Portfolio</span>
      </h1>
      <a class="portfolio-btn" href="#!">See all</a>
    </div>
    <carousel ref="myCarousel" :items-to-show="2" :breakpoints="breakpoints">
      <slide v-for="slide in slides" :key="slide.id">
        <div class="card">
          <div class="card-img">
            <a class="card-btn">
              <BtnIcon />
            </a>
            <img :src="slide.img" alt="card-img" />
          </div>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

    <ul class="tag-list">
      <li class="tag">Landing Page</li>
      <li class="tag">Product Design</li>
      <li class="tag">Animation</li>
      <li class="tag">Glassmorphism</li>
      <li class="tag">Cards</li>
    </ul>

    <div class="portfolio-bottom">
      <div class="portfolio-bottom__action">
        <div class="portfolio-bottom__title">Lirante - Food Dilvery Solution</div>
        <a class="portfolio-bottom__btn" href="#"><ArrowIcon /></a>
      </div>
      <div class="portfolio-bottom__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a
        dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci
        elementum egestas lobortis.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.portfolio {
  padding: 6rem 0;
  overflow: hidden;
}

.portfolio-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  @include media-breakpoint-down(xl) {
    flex-direction: column;
    align-items: start;
  }
}

.portfolio-title {
  font-size: 4rem;
  font-weight: 600;
  max-width: 40rem;

  @include media-breakpoint-down (xl) {
    font-size: 64px;
  }

  @include media-breakpoint-down (lg) {
    font-size: 48px;
  }

  @include media-breakpoint-down (sm) {
    font-size: 32px;
  }
}

.portfolio-btn {
  padding: 1.25rem 2.5rem;
  background-color: $accent;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  transition: all 0.2s ease;
  border-radius: 3.75rem;
  border: 1px solid $accent;

  &:hover {
    background-color: #fff;
    color: $accent;
    border: 1px solid $accent;
  }
}

.card {
  position: relative;
  cursor: pointer;
  margin: 48px 0 45px;
}

.card-btn {
  opacity: 0;
  display: flex;
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &::before {
    z-index: 20;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 64px;
    width: 64px;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    border: 1px solid $accent;
  }
}

.card::before {
  z-index: 10;
  content: 'Lirante';
  position: absolute;
  bottom: 0;
  left: 40px;
  color: #fffaf5;
  font-size: 4.375rem;
  font-weight: 700;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.card::after {
  overflow: hidden;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    207deg,
    rgba(0, 0, 0, 0) 47.41%,
    rgba(0, 0, 0, 0.36) 76.39%,
    rgba(0, 0, 0, 0.5) 89.23%
  );
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.card:hover::before,
.card:hover::after,
.card:hover .card-btn {
  opacity: 1;
}

.tag-list {
  display: flex;
  gap: 14px;
  padding: 3rem 0;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.tag {
  background-color: #f2f4f7;
  padding: 1rem 2rem;
  color: #000;
  border-radius: 1.5rem;
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 400;
  justify-self: center;
  text-wrap: nowrap;
}

.portfolio-bottom {
  margin: 0 auto;
  max-width: 48rem;
  padding: 0 10px;
}

.portfolio-bottom__action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.portfolio-bottom__btn {
  display: flex;
  background-color: $accent;
  border-radius: 100%;
  padding: 0.75rem;

  @include media-breakpoint-down(lg) {
    display: none;
  }
}

.portfolio-bottom__title {
  font-size: 3rem;
  font-weight: 700;
}

.portfolio-bottom__subtitle {
  margin-top: 1.5rem;
  font-size: 1.25rem;
  font-weight: 400;
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

:deep(.carousel__next) {
  background-color: $accent;
  border-radius: 100%;
  height: 64px;
  width: 64px;
  right: -10px;
  z-index: 50;
}

:deep(.carousel__prev) {
  background-color: $accent;
  border-radius: 100%;
  height: 64px;
  width: 64px;
  left: -10px;
}

:deep(.carousel__icon) {
  fill: #fff;
}
</style>
