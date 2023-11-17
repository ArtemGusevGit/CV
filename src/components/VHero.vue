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
    <div class="btn-container">
      <button class="hero-btn">Hello!</button>
      <div class="btn-decor">
        <img src="@/assets/img/hero/btn-decor.png" alt="decor" />
      </div>
    </div>
    <div class="title-container">
      <h1 class="hero-title">
        I’m <span class="text-color-accent">Jenny</span>,<br />Product Designer
      </h1>
      <div class="title-decor">
        <img src="@/assets/img/hero/title-decor.png" alt="decor" />
      </div>
    </div>

    <div class="hero-info">
      <div class="ihero-info__icon">
        <img src="@/assets/img/hero/info-icon.png" alt="decor" />
      </div>
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

    <div class="hero-img">
      <img src="@/assets/img/hero/hero-img.png" alt="hero-img" />
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
  // justify-content: center;
  flex-direction: column;
  margin-top: 130px;
}

.hero-btn {
  padding: 10px 25px;
  color: $gray;
  font-weight: 500;
  border: 1.2px solid $gray;
  border-radius: 40px;
  margin-bottom: 10px;
  transition: all 0.2s ease;

  :hover {
    background-color: $accent;
  }
}

.title-container {
  position: relative;
}

.btn-container {
  position: relative;
  max-width: 500px;
}

.hero-title {
  font-family: $font-second;
  font-size: 95px;
  line-height: 100%;
  text-align: center;
}

.title-decor {
  position: absolute;
  left: -9%;
  top: 82%;
}

.btn-decor {
  position: absolute;
  right: 0%;
  top: 0%;
  transform: translate(70%, -80%);
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

.hero-img {
  z-index: 10;
  margin-top: -114px;
}

.hero-toggle {
  z-index: 20;
  position: absolute;
  bottom: 5%;
}
</style>
