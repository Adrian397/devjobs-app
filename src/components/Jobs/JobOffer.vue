<script setup>
import { computed } from "vue";

const props = defineProps({
  company: String,
  logo: String,
  logoBackground: String,
  position: String,
  postedAt: String,
  contract: String,
  location: String,
});

const logoBackgroundColor = computed(() => {
  return "background-color: " + props.logoBackground;
});
</script>

<template>
  <div class="card">
    <div class="card-img" :style="logoBackgroundColor">
      <img :src="props.logo" alt="job-logo" />
    </div>
    <div class="card-info">
      <span>{{ props.postedAt }}</span>
      <span class="dot">.</span>
      <span>{{ props.contract }}</span>
      <h3>{{ props.position }}</h3>
      <p>{{ props.company }}</p>
    </div>
    <p class="country">{{ props.location }}</p>
  </div>
</template>

<style scoped>
.card {
  width: 20rem;
  height: 13rem;
  padding: 0rem 1.3rem;
  position: relative;
  background: white;
  border-radius: 7px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
}

h3 {
  margin: 0.6rem 0rem;
}

.dot {
  font-weight: bold;
  font-size: 16px;
  margin: 0 0.4rem;
}

.card-img {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 5%;
  top: -10%;
  background: hsl(36, 87%, 49%);
  width: 3.5rem;
  height: 3rem;
  border-radius: 13px;
}

span {
  font-size: 13px;
  color: rgb(157, 174, 194);
  display: inline-block;
  margin-top: 1.5rem;
}

p {
  font-size: 13px;
}

.country {
  color: rgb(89, 100, 224);
  font-weight: bold;
}
</style>
