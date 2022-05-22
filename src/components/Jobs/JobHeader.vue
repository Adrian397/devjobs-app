<script setup>
import { computed } from "vue";

const props = defineProps({
  logo: String,
  logoBackground: String,
  website: String,
  company: String,
});

const logoBackgroundColor = computed(() => {
  return "background-color: " + props.logoBackground;
});
</script>

<template>
  <div class="job-header">
    <div class="header-img" :style="logoBackgroundColor">
      <img :src="props.logo" alt="job-logo" />
    </div>
    <div class="header-info">
      <div>
        <h2 class="header-info__company">{{ props.company }}</h2>
        <p class="header-info__website">{{ props.company }}.com</p>
      </div>
      <a :href="props.website">Company Site</a>
    </div>
  </div>
</template>

<style scoped>
.job-header {
  width: 70rem;
  height: 7rem;
  max-width: 90%;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: -2%;
  display: flex;
  position: absolute;
  bottom: -55%;
}

.header-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  border-radius: 5px 0px 0px 5px;
}

.header-img img {
  width: 4rem;
}

.header-info {
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
}

.header-info div {
  margin-left: 2rem;
}

.header-info__company {
  margin-bottom: 0.5rem;
}
.header-info__website {
  font-size: 14px;
  color: rgb(157, 174, 194);
}

.header-info a {
  margin-right: 2rem;
  padding: 0.9rem 0.8rem;
  text-decoration: none;
  background-color: rgba(244, 246, 248);
  border-radius: 5px;
  color: rgb(89, 100, 224);
  font-weight: bold;
}
</style>
