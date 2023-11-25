<script setup lang="ts">
import VToggle from '@/components/ui/VToggle.vue'

type TEmits = {
  (e: 'scroll-to-hire-section'): void
}

const emit = defineEmits<TEmits>()
const handleClick = () => emit('scroll-to-hire-section')
</script>

<template>
  <div class="hero">
    <a href="#!" class="hero-btn">Hello!</a>
    <h1 class="hero-title">
      I’m <span class="text-color-accent">Jenny</span>,<br />Product Designer
    </h1>
    <div class="hero-info">
      <img src="@/assets/img/hero/info-icon.png" alt="decor" />
      <div class="hero-info__text">
        Jenny’s Exceptional product designensure our website’s success. Highly Recommended
      </div>
    </div>
    <div class="hero-exp">
      <div class="hero-exp__stars">
        <img src="@/assets/img/hero/exp-icon.png" alt="stars" />
      </div>
      <div class="hero-exp__text">10 Years</div>
      <div class="hero-exp__under-text">Experince</div>
    </div>
    <div class="hero-content">
      <div class="hero-img">
        <img src="@/assets/img/hero/hero-img.png" alt="hero-img" />
      </div>
      <div class="hero-img-decor" />
      <div class="hero-img-circle" />
    </div>
    <div class="hero-toggle">
      <VToggle @hamdeClick="handleClick" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  height: 846px;
  position: relative;
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 130px;
}

.hero-btn {
  position: relative;
  padding: 10px 25px;
  color: $gray;
  font-weight: 500;
  border: 1.2px solid $gray;
  border-radius: 40px;
  margin-bottom: 10px;
  transition: all 0.2s ease;

  &:hover {
    background-color: $accent;
  }

  &::before {
    content: '';
    position: absolute;
    right: -25px;
    top: -22px;
    width: 28px;
    height: 28px;
    background-image: url(@/assets/img/hero/btn-decor.png);
    background-size: cover;
  }
}

.title-container {
  position: relative;
}

.hero-title {
  position: relative;
  font-family: $font-second;
  font-size: 95px;
  line-height: 100%;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    left: -70px;
    bottom: -40px;
    width: 75px;
    height: 75px;
    background-image: url(@/assets/img/hero/title-decor.png);
    background-size: cover;
  }
}

.hero-info {
  max-width: 320px;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(-5%, -50%);

  &__text {
    margin-top: 24px;
    font-weight: 500;
  }
}

.hero-exp {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate(-5%, -50%);

  &__stars {
    display: flex;
    justify-content: flex-end;
  }

  &__text {
    margin-top: 21px;
    font-family: $font-second;
    font-size: 47px;
    font-weight: 700;
    line-height: 100%;
  }

  &__under-text {
    text-align: end;
    font-style: normal;
    font-weight: 400;
  }
}

.hero-content {
  position: relative;
}
.hero-img {
  position: relative;
  z-index: 10;
  bottom: 88px;
}

.hero-img-decor {
  position: absolute;
  left: 0px;
  top: -133px;
  width: 1000px;
  height: 680px;
  background-image: url(@/assets/img/hero/hero-img-decor.png);
  background-size: cover;
  z-index: 9;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.hero-img-circle {
  &::after {
    position: absolute;
    content: '';
    height: 810px;
    width: 810px;
    background-color: #feb273;
    top: 100px;
    left: 78px;
    border-radius: 100%;
  }
}

.hero-toggle {
  z-index: 20;
  position: absolute;
  bottom: 5%;
}

.hero-content:hover .hero-img-decor,
.hero-toggle:hover .hero-img-decor {
  opacity: 1;
}
</style>
