<script setup>
import TheHeader from "./components/Header/TheHeader.vue";
</script>
<!-- 
<script>
import TheHeader from "./components/Header/TheHeader.vue";
export default {
  components: { TheHeader },
  setup() {
    console.log("setup");
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next();
  },
};
</script> -->

<template>
  <TheHeader />
  <router-view></router-view>
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
