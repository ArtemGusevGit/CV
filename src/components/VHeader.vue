<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="header-left">
          <a class="link-container" href="#"><span class="link-text">Home</span></a>
          <a class="link-container" href="#"><span class="link-text">About</span></a>
          <a class="link-container" href="#"><span class="link-text">Service</span></a>
        </div>
        <div>
          <a href="#">
            <img class="header-logo" src="@/assets/img/header-logo.png" alt="header-logo" />
          </a>
        </div>
        <div class="header-right">
          <a class="link-container" href="#"><span class="link-text">Resume</span></a>
          <a class="link-container" href="#"><span class="link-text">Project</span></a>
          <a class="link-container" href="#"><span class="link-text">Contact</span></a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
}

.header-content {
  margin-top: 40px;
  background-color: $gray;
  color: $white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  padding: 10px;
}

.header-left,
.header-right {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

.link-container {
  border-radius: 60px;
  position: relative;
  width: 133px;
  height: 66px;
  transition: all 0.2s;

  &:hover {
    background-color: $accent;
    font-weight: 700;
  }
}

.link-text {
  position: absolute;
  color: $white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.header-logo {
  padding: 0 80px;
}
</style>
