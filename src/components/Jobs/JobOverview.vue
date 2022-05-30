<script setup>
import JobFooter from "./JobFooter.vue";
import JobDescription from "./JobDescription.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { onBeforeRouteLeave } from "vue-router";

const store = useStore();

const concreteOffer = computed(() => {
  return store.getters.offer;
});

onBeforeRouteLeave(() => {
  store.dispatch("hideJobHeader");
});
</script>

<template>
  <div>
    <JobDescription
      :company="concreteOffer.company"
      :position="concreteOffer.position"
      :postedAt="concreteOffer.postedAt"
      :contract="concreteOffer.contract"
      :location="concreteOffer.location"
      :description="concreteOffer.description"
      :req-content="concreteOffer.reqContent"
      :req-items="concreteOffer.reqItems"
      :role-content="concreteOffer.roleContent"
      :role-items="concreteOffer.roleItems"
    />
    <JobFooter :position="concreteOffer.position" />
  </div>
</template>
