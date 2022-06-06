<script setup>
import TheHeader from "./components/Header/TheHeader.vue";
import { useStore } from "vuex";

const store = useStore();
store.dispatch("initStore");
</script>

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

body,
html,
#app {
  background-color: var(--background-color);
  min-height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
}

.light {
  --background-color: rgb(243, 245, 247);
  --main-color: rgb(255, 255, 255);
  --text: rgb(18, 23, 33);
  --text-hover: rgba(18, 23, 33, 0.5);
  --violet: rgb(89, 100, 224);
  --violet-hover: rgba(89, 100, 224, 0.5);
  --country: rgb(89, 100, 224);
  --border: rgb(224, 220, 220);
  --grey: rgb(110, 128, 152);
  --light-grey: rgb(157, 174, 194);
  --checkbox: rgb(232, 232, 234);
  --company-btn-background: rgb(239, 240, 252);
  --company-btn-color: rgb(89, 100, 224);
}
.dark {
  --background-color: rgb(18, 23, 33);
  --main-color: rgb(25, 32, 45);
  --text: rgb(255, 255, 255);
  --text-hover: rgba(255, 255, 255, 0.5);
  --violet: rgb(89, 100, 224);
  --violet-hover: rgba(89, 100, 224, 0.5);
  --country: rgb(89, 100, 224);
  --border: rgb(38, 47, 60);
  --grey: rgb(110, 128, 152);
  --light-grey: rgb(157, 174, 194);
  --checkbox: rgb(48, 55, 66);
  --company-btn-background: rgb(48, 54, 66);
  --company-btn-color: rgb(255, 255, 255);
}
</style>
