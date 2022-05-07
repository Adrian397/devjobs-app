<script setup>
import TheHeader from "./components/Header/TheHeader.vue";
import JobOffer from "./components/Jobs/JobOffer.vue";
import OffersList from "./components/Jobs/OffersList.vue";

import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("loadJobs");
});

const jobs = computed(() => {
  return store.getters.jobs;
});
</script>

<template>
  <TheHeader />
  <OffersList>
    <JobOffer
      v-for="job in jobs"
      :key="job.id"
      :id="job.id"
      :company="job.company"
      :logo="job.logo"
      :logo-background="job.logoBackground"
      :position="job.position"
      :postedAt="job.postedAt"
      :contract="job.contract"
      :location="job.location"
    />
  </OffersList>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Kumbh Sans", sans-serif;
}
body {
  background-color: hsl(210, 22%, 96%);
}
</style>
