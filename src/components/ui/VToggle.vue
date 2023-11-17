<script setup lang="ts">
import { ref } from 'vue'
type TEmits = {
  (e: 'hamdeClick'): void
}
const emit = defineEmits<TEmits>()
const toggle = ref(false)

const takeTest = () => {
  emit('hamdeClick')

  setTimeout(() => {
    toggle.value = false
  }, 500)
}
</script>

<template>
  <label class="switch">
    <input v-model="toggle" type="checkbox" @click="takeTest" />
    <span class="slider round"> </span>
    <div class="toggle-left">
      <div>Portfolio</div>
      <img src="@/assets/img/serv/arrow-icon.png" alt="arrow" />
    </div>
    <div class="toggle-right">Hire me</div>
  </label>
</template>

<style scoped lang="scss">
.toggle-left {
  display: flex;
  align-items: center;
  position: absolute;
  color: #fff;
  left: 40px;
  top: 20px;
  font-size: 25px;
  font-weight: 300;
}

.toggle-right {
  position: absolute;
  color: #fff;
  top: 24px;
  left: 224px;
  font-size: 25px;
  font-weight: 300;
}

.switch {
  position: relative;
  display: inline-block;
  width: 360px;
  height: 82px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(7.5px);
  border: 2px solid #fff;
}

.slider:before {
  position: absolute;
  content: '';
  height: 62px;
  width: 208px;
  left: 10px;
  bottom: 10px;
  background-color: $accent;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
}

input:focus + .slider {
}

input:checked + .slider:before {
  -webkit-transform: translateX(180px);
  -ms-transform: translateX(180px);
  transform: translateX(180px);
  width: 158px;
}

/* Rounded sliders */
.slider.round {
  border-radius: 50px;
}

.slider.round:before {
  border-radius: 60px;
}
</style>
