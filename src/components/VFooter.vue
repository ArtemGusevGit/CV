<template>
  <footer class="footer-bg">
    <div class="container footer-actions">
      <h1 class="footer-title">Lets Connect there</h1>
      <a class="footer-btn" href="#">Hire me</a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-bg {
  padding: 1.5rem 0 3.4rem;
  background-color: #272727;
}
.footer-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include media-breakpoint-down(lg) {
    flex-direction: column;
  }
}

.footer-title {
  color: #fcfcfd;
  font-size: 4rem;
  font-weight: 600;

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

.footer-btn {
  padding: 0.6rem 1.25rem;
  background-color: $accent;
  color: #fff;
  border: 1px solid $accent;
  border-radius: 3.75rem;

  &:hover {
    background-color: #fff;
    color: $accent;
    border: 1px solid $accent;
  }
}
</style>
