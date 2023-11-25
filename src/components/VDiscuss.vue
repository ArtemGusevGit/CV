<script setup lang="ts">
import shieldIcon from '@/assets/img/disc/shield-icon.svg'
import awardIcon from '@/assets/img/disc/award-icon.svg'
import starIcon from '@/assets/img/disc/star-icon.svg'
import VTicker from '@/components/ui/VTicker.vue'
</script>
<template>
  <div class="discuss">
    <h1 class="discuss-title">
      Have an Awsome Project<br />
      Idea? <span class="text-color-accent">Let’s Discuss</span>
    </h1>
    <form class="discuss-input">
      <img src="@/assets/img/disc/input-icon.png" alt="input-icon" />
      <input
        placeholder="Enter Email Address"
        type="email"
        name="email"
        id="email"
        autocomplete="on"
      />
      <a class="discuss-btn" href="#">Send</a>
    </form>
    <div class="under-input">
      <div class="under-input__tag">
        <starIcon />
        <div>4.9/5 Average Ratings</div>
      </div>
      <div class="under-input__tag">
        <awardIcon />
        <div>25+ Winning Awards</div>
      </div>
      <div class="under-input__tag">
        <shieldIcon />
        <div>Certified Product Designer</div>
      </div>
    </div>
    <VTicker />
  </div>
</template>

<style scoped lang="scss">
.discuss {
  padding: 6rem 0;
}

.discuss-title {
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

.discuss-input {
  position: relative;
  border-radius: 3.125rem;
  border: 1px solid #e4e7ec;
  backdrop-filter: blur(7.5px);
  max-width: 52rem;
  height: 5rem;
  margin: 1rem auto;
  padding: 0.88rem;
  display: flex;
  align-items: center;
}

input {
  text-indent: 6rem;
  width: 100%;
}

.discuss-btn {
  padding: 1.25rem 2.25rem;
  background-color: $accent;
  color: #fff;
  border-radius: 3.75rem;
  border: 1px solid $accent;

  &:hover {
    color: $accent;
    background-color: #fff;
    border: 1px solid $accent;
  }
}

.under-input {
  display: flex;
  justify-content: center;
  gap: 5.8rem;
  margin-bottom: 6rem;
}

.under-input__tag {
  display: flex;
}
</style>
