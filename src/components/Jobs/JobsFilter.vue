<script setup>
import IconSearch from "../Icons/icon-search.vue";
import IconLocation from "../Icons/icon-location.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const nameFilter = ref("");
const locationFilter = ref("");
const contractFilter = ref(false);
</script>

<template>
  <div class="header-filter">
    <div class="header-filter__search">
      <IconSearch />
      <input
        type="text"
        placeholder="Filter by title, companies, expertise…"
        ref="nameFilter"
      />
    </div>
    <div class="header-filter__location">
      <IconLocation />
      <input
        type="text"
        placeholder="Filter by location…"
        ref="locationFilter"
      />
    </div>
    <div class="header-filter__fulltime">
      <input type="checkbox" v-model="contractFilter" />
      <p>Full Time Only</p>
      <p>Full Time</p>
      <button
        type="button"
        @click="
          store.dispatch('foundJobs', {
            nameInputValue: nameFilter.value,
            locationInputValue: locationFilter.value,
            contractCheckboxValue: contractFilter,
          })
        "
      >
        Search
      </button>
    </div>
  </div>
</template>

<style scoped>
.header-filter {
  position: absolute;
  margin: 0 auto;
  bottom: -25%;
  display: flex;
  align-items: center;
  height: 3.5rem;
  width: 80%;
  background-color: white;
  padding: 0rem 0.5rem;
  border-radius: 5px;
}

/* @media screen and (max-width: 1200px) {
  .header-filter{
width: 90%;
  }
  
} */

.header-filter__search {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  height: 100%;
  border-right: 1px solid rgb(224, 220, 220);
}

.header-filter__search input {
  width: 80%;
  padding: 0.3rem;
  outline: none;
  border: none;
}

.header-filter__location {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 35%;
  height: 100%;
  border-right: 1px solid rgb(224, 220, 220);
}

.header-filter__location input {
  width: 80%;
  padding: 0.3rem;
  outline: none;
  border: none;
}

.header-filter__fulltime {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 25%;
}

.header-filter__fulltime button {
  padding: 0.5rem 1rem;
  background-color: rgb(89, 100, 224);
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
}

.header-filter__fulltime p {
  font-weight: bold;
}

.header-filter__fulltime p:nth-of-type(2) {
  display: none;
}

@media screen and (max-width: 1200px) {
  .header-filter__fulltime p:nth-of-type(1) {
    display: none;
  }

  .header-filter__fulltime p:nth-of-type(2) {
    display: flex;
    font-size: 14px;
  }
}

.header-filter__fulltime input {
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: 1.3rem;
  height: 1.3rem;
  background-color: rgb(224, 220, 220);
  border-radius: 5px;
}

.header-filter__fulltime input::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transition: 120ms all ease-in-out;
}

.header-filter__fulltime input:checked::before {
  transform: scale(1);
  background: rgb(89, 100, 224);
  background-image: url("../../assets/desktop/icon-check.svg");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}
</style>
