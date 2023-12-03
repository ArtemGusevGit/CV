<script setup lang="ts">
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { ref } from 'vue'
import CardImg from '@/assets/img/results/results-card-img.png'
import RateImg from '@/assets/img/results/stars-img.png'

const myCarousel = ref(null)

const slides = [
  {
    name: 'UI/ UX Design',
    img: CardImg,
    rateImg: RateImg
  },
  {
    name: 'Web Design',
    img: CardImg,
    rateImg: RateImg
  },
  {
    name: 'Landing Page',
    img: CardImg,
    rateImg: RateImg
  },
  {
    name: 'UI/ UX Design',
    img: CardImg,
    rateImg: RateImg
  }
]

const breakpoints = {
  1400: {
    itemsToShow: 1.5,
    snapAlign: 'center'
  },
  0: {
    itemsToShow: 1,
    snapAlign: 'center'
  }
}
</script>
<template>
  <div class="results">
    <h1 class="results-title">
      Testimonials That <br />
      Speak to <span class="text-color-accent">My Results</span>
    </h1>
    <div class="results-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a
      dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci
      elementum egestas lobortis.
    </div>
    <carousel ref="myCarousel" :items-to-show="2" :wrap-around="true" :breakpoints="breakpoints">
      <slide v-for="slide in slides" :key="slide.name">
        <div class="card">
          <div class="card-info">
            <div>
              <div class="card-person">
                <div>
                  <img :src="CardImg" alt="results-card-img" />
                </div>
                <div>
                  <div class="card-person__name">Jayesh Patil</div>
                  <div class="card-person__post">CEO, Lirante</div>
                </div>
              </div>
              <div class="card-rate">
                <div>
                  <img :src="RateImg" alt="rate-img" />
                </div>
                <div>5.0</div>
              </div>
            </div>
            <div class="card-decor" />
          </div>
          <div class="card-text">
            consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed
            lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.
          </div>
        </div>
      </slide>
      <template #addons>
        <!-- <navigation /> -->
        <pagination />
      </template>
    </carousel>
  </div>
</template>
<style scoped lang="scss">
.results {
  background-image: url(@/assets/img/serv/serv-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 120px 0 50px;
  border-radius: 35px;
}

.results-title {
  position: relative;
  color: #fff;
  margin: 0 auto;
  font-size: 3rem;
  text-align: center;
  font-weight: 500;
  max-width: 31rem;

  @include media-breakpoint-down (xl) {
    font-size: 64px;
  }

  @include media-breakpoint-down (lg) {
    font-size: 48px;
  }

  @include media-breakpoint-down (sm) {
    font-size: 32px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: -15px;
    right: 0;
    color: #fff;
    background-image: url(@/assets/img/results/decor/decor-title-img.png);
    background-repeat: no-repeat;
  }
}

.results-text {
  // overflow: hidden;
  position: relative;
  color: #fff;
  max-width: 46rem;
  margin: 0 auto;
  text-align: center;
  margin-top: 0.8rem;
  padding: 0 2rem;

  &::before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    bottom: -15px;
    left: 0px;
    color: #fff;
    background-image: url(@/assets/img/results/decor/decor-subtitle-left-img.png);
    background-repeat: no-repeat;
    // overflow: hidden;
  }

  &::after {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: -15px;
    right: 0px;
    color: #fff;
    background-image: url(@/assets/img/results/decor/decor-subtitle-right-img.png);
    background-repeat: no-repeat;
    // overflow: hidden;
  }
}

.card {
  margin: 0 1.5rem;
  padding: 1.3rem;
  margin-top: 6rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(7px);
  text-align: left;
}

.card-info {
  display: flex;
  justify-content: space-between;
}

.card-person {
  display: flex;
  color: #fff;
  gap: 0.75rem;
}

.card-person__name {
  font-family: Urbanist;
  font-size: 1.46rem;
  font-weight: 700;
}

.card-person__post {
  font-family: Urbanist;
  font-size: 1.14rem;
  font-style: normal;
}

.card-rate {
  display: flex;
  color: #fff;
  align-items: center;
  font-size: 1.60575rem;
  font-weight: 500;
  gap: 0.3rem;
  margin-top: 1.2rem;
}

.card-decor {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 8rem;
  height: 8rem;
  background-image: url(@/assets/img/results/decor/card-decor-img.png);
}

.card-text {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  margin-top: 0.8rem;
}
</style>
