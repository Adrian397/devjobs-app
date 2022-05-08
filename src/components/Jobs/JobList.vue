<script setup>
import Grid from "../UI/Grid.vue";
import JobOffer from "./JobOffer.vue";
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
  <Grid>
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
  </Grid>
</template>
