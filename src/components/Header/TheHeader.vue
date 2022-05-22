<script setup>
import IconSun from "../Icons/icon-sun.vue";
import IconMoon from "../Icons/icon-moon.vue";
import Logo from "../Icons/icon-logo.vue";
import JobsFilter from "../Jobs/JobsFilter.vue";
import JobHeader from "../Jobs/JobHeader.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const jobOverview = computed(() => {
  return store.getters.jobOverview;
});

const concreteOffer = computed(() => {
  return store.getters.offer;
});
</script>

<template>
  <header>
    <div class="header">
      <Logo />
      <div class="header-theme">
        <IconSun />
        <div class="header-theme__switcher">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox">
            <div class="header-theme__switcher__ball"></div>
          </label>
        </div>
        <IconMoon />
      </div>
    </div>
    <JobHeader
      v-if="jobOverview"
      :company="concreteOffer.company"
      :website="concreteOffer.website"
      :logo="concreteOffer.logo"
      :logo-background="concreteOffer.logoBackground"
    />
    <JobsFilter v-else />
  </header>
</template>

<style scoped>
header {
  background-image: url(../../assets/desktop/bg-pattern-header.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 0rem;
  position: relative;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
}

.header-theme {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 7rem;
}

.header-theme__switcher {
  width: 3rem;
  height: 1.5rem;
  border-radius: 15px;
  background: white;
}

.header-theme__switcher input {
  position: absolute;
  opacity: 0;
}

.header-theme__switcher label {
  width: 100%;
  height: 1.5rem;
  border-radius: 15px;
  padding: 0 0.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.header-theme__switcher__ball {
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  background-color: rgb(89, 100, 224);
  transition: 180ms transform ease-in-out;
}

.header-theme__switcher input:checked + label .header-theme__switcher__ball {
  transform: translateX(20px);
}
</style>
