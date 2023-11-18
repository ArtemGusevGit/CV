<script setup lang="ts">
import starIcon from '@/assets/img/common/star-icon.svg'
</script>

<template>
  <div class="wrap">
    <div class="items-wrap">
      <div class="items marquee">
        <div class="item">User Research</div>
        <div class="item"><starIcon /></div>
        <div class="item">UX Design</div>
        <div class="item"><starIcon /></div>
        <div class="item">App Design</div>
        <div class="item"><starIcon /></div>
        <div class="item">Dashboard</div>
        <div class="item"><starIcon /></div>
        <div class="item">Wireframe</div>
        <div class="item"><starIcon /></div>
      </div>
      <div aria-hidden="true" class="items marquee">
        <div class="item">User Research</div>
        <div class="item"><starIcon /></div>
        <div class="item">UX Design</div>
        <div class="item"><starIcon /></div>
        <div class="item">App Design</div>
        <div class="item"><starIcon /></div>
        <div class="item">Dashboard</div>
        <div class="item"><starIcon /></div>
        <div class="item">Wireframe</div>
        <div class="item"><starIcon /></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font: 16px / 1.4 sans-serif;
}
h1 {
  font-size: 2em;
  font-weight: bold;
}
h1,
p {
  margin-bottom: 20px;
}
.wrap {
  // max-width: 600px;
  margin: auto;
  padding: 20px 0;
  background-color: $accent;
  height: 9rem;
  overflow: hidden;
}
.items-wrap {
  margin-top: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  rotate: (-3deg);
  width: 105%;
  margin-left: -1rem;
}
.items-wrap:before,
.items-wrap:after {
  content: '';
  height: 100%;
  top: 0;
  width: 10%;
  position: absolute;
  z-index: 1;
  pointer-events: none;
}
.items-wrap:before {
  left: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}
.items-wrap:after {
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
}
.items {
  background-color: #fff;
  flex-shrink: 0;
  display: flex;
  counter-reset: item;
  justify-content: space-around;
  min-width: 100%;
}
.item {
  flex: 0 0 auto;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.4rem;
  transition: all 0.1s ease-in-out;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
}


.marquee {
  animation: scroll 20s linear infinite;
}
.reverce {
  animation-direction: reverse;
}
.items-wrap:hover .marquee {
  animation-play-state: paused;
}

.perfscan {
  margin: 20px 0;
  text-align: center;
  bottom: 0;
  background: #fff;
  padding: 5px;
}
.perfscan hr {
  border: solid #999;
  border-width: 1px 0 0 0;
  max-width: 50%;
  margin: 0 auto 20px;
}
.perfscan a {
  color: #000;
  font-weight: bold;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 20px));
  }
}
</style>
