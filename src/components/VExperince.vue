<template>
  <div class="container experience">
    <h1 class="experience-title">
      My
      <span class="text-color-accent">Work Experince</span>
    </h1>
    <div class="experience-info">
      <ul class="experience-info__list">
        <li>
          <div class="experience-info__title">Cognizant, Mumbai</div>
          <div class="experience-info__subtitle">Sep 2016- July 2020</div>
        </li>
        <li>
          <div class="experience-info__title">Experince Designer</div>
          <div class="experience-info__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in
            justo vulputate, bibendum sodales
          </div>
        </li>
        <li>
          <div class="experience-info__title">Sugee Pvt limited, Mumbai</div>
          <div class="experience-info__subtitle">Sep 2020- July 2023</div>
        </li>
        <li class="exp-img">
          <img src="@/assets/img/exp/exp-img.png" alt="exp-img" />
        </li>
        <li>
          <div class="experience-info__title">UI/UX Designer</div>
          <div class="experience-info__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in
            justo vulputate, bibendum sodales
          </div>
        </li>
        <li>
          <div class="experience-info__title">Cinetstox, Mumbai</div>
          <div class="experience-info__subtitle">Sep 2023</div>
        </li>
        <li>
          <div class="experience-info__title">Lead UX Designer</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.experience {
  padding: 85px 0 155px;
}

.experience-title {
  text-align: center;
  font-size: 64px;
  font-weight: 500;
}

.experience-info {
  margin-top: 85px;
  display: flex;
  justify-content: space-between;
}

.experience-info__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 48px;
}

.exp-img {
  justify-self: center;
  align-self: center;
  grid-column: 2;
  grid-row: 1/4;
}

.experience-info__title {
  font-size: 40px;
  font-weight: 600;
}

.experience-info__subtitle {
  color: #98a2b3;
  font-size: 24px;
  font-weight: 400;
}
</style>
