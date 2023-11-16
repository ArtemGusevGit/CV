<template>
  <div class="hire-bg">
    <div class="hire container">
      <div class="hire-img">
        <img src="@/assets/img/hire/hire-img.png" alt="hire-img" />
      </div>
      <div class="hire-content">
        <div class="hire-title">Why <span class="text-color-accent">Hire me</span>?</div>
        <div class="hire-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo
          vulputate, bibendum sodales
        </div>
        <div class="hire-info">
          <ul class="info-point">
            <li class="point-title">450+</li>
            <li class="point-subtitle">Project Completed</li>
          </ul>
          <ul class="info-point">
            <li class="point-title">450+</li>
            <li class="point-subtitle">Project Completed</li>
          </ul>
        </div>
        <a class="hire-btn" href="#">Hire me</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hire-bg {
  border-radius: 50px;
  background-color: #f2f4f7;
}

.hire {
  display: flex;
  padding: 100px 0;
}

.hire-img {
  max-width: 600px;
}

.hire-content {
  display: flex;
  flex-direction: column;
  gap: 47px;
}

.hire-info {
  display: flex;
  gap: 176px;
}

.hire-title {
  font-size: 64px;
  font-weight: 600;
  margin-top: 64px;
}

.hire-text {
  color: #98a2b3;
  font-weight: 400;
  max-width: 444px;
}

.point-title {
  font-size: 36px;
  font-weight: 500;
}

.point-subtitle {
  color: #667085;
  font-weight: 400;
}

.hire-btn {
  padding: 30px 60px;
  color: #151515;
  font-size: 32px;
  font-weight: 600;
  border-radius: 32px;
  border: 1px solid #151515;
  transition: all 0.15s ease;
  align-self: flex-start;

  &:hover {
    background-color: #151515;
    color: #fff;
  }
}
</style>
