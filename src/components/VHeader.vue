<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="header-left">
          <a class="link-container" href="#"><span class="link-text">Home</span></a>
          <a class="link-container" href="#"><span class="link-text">About</span></a>
          <a class="link-container" href="#"><span class="link-text">Service</span></a>
        </div>
        <div class="header-logo">
          <a href="#">
            <img class="logo-img" src="@/assets/img/header-logo.png" alt="header-logo" />
          </a>
          <a class="burger" href="#">
            <div class="center">
              <div></div>
            </div>
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
  margin-top: 20px;
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

  @include media-breakpoint-down(xl) {
    display: none;
  }
}

.link-container {
  border-radius: 60px;
  position: relative;
  width: 133px;
  height: 66px;
  transition: all 0.2s ease;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include media-breakpoint-down(xl) {
    width: 100%;
  }
}

.burger {
  display: none;
  color: #fff;

  @include media-breakpoint-down(xl) {
    display: flex;
  }
}

body {
  background: dodgerblue;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.center {
  width: 40px;
  margin-right: 0.5rem;
}

.center:before,
.center:after,
.center div {
  background: #fff;
  content: "";
  display: block;
  height: 6px;
  border-radius: 3px;
  margin: 7px 0;
  transition: 0.5s;
}
.center:hover:before {
  transform: translateY(12px) rotate(135deg);
}
.center:hover:after {
  transform: translateY(-12px) rotate(-135deg);
}
.center:hover div {
  transform: scale(0);
}

</style>
