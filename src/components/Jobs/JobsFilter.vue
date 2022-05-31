<script setup>
import IconSearch from "../Icons/icon-search.vue";
import IconLocation from "../Icons/icon-location.vue";
import { ref, unref } from "vue";
import { useStore } from "vuex";
import JobFilterModal from "./JobFilterModal.vue";

const store = useStore();

const nameFilter = ref("");
const locationFilter = ref("");
const contractFilter = ref(false);
const modal = ref(false);

const showModal = () => {
  modal.value = true;
};

const closeModal = () => {
  modal.value = false;
};

const searchResults = () => {
  store.dispatch("foundJobs", {
    nameInputValue: unref(nameFilter).value,
    locationInputValue: unref(locationFilter).value,
    contractCheckboxValue: unref(contractFilter),
  });
};
</script>

<template>
  <JobFilterModal
    v-if="modal"
    :name-filter="nameFilter"
    :location-filter="locationFilter"
    :contract-filter="contractFilter"
    :close-modal="closeModal"
  />

  <div class="header-filter">
    <div class="header-filter__title">
      <IconSearch />
      <input
        type="text"
        placeholder="Filter by title, companies, expertise…"
        ref="nameFilter"
      />
      <button class="header-filter__expand" @click="showModal"></button>
      <button
        class="header-filter__title-search"
        @click="searchResults"
      ></button>
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
      <button type="button" @click="searchResults">Search</button>
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
  background-color: var(--main-color);
  padding: 0rem 0.5rem;
  border-radius: 5px;
}

.header-filter__title {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  height: 100%;
  border-right: 1px solid var(--border);
  padding: 0rem 0.8rem;
}

.header-filter__title-search {
  display: none;
}

.header-filter__expand {
  display: none;
}

.header-filter__title input {
  width: 80%;
  padding: 0.3rem;
  outline: none;
  border: none;
  background-color: var(--main-color);
  color: var(--text);
}

@media screen and (max-width: 825px) {
  .header-filter__title {
    width: 100%;
    border-right: none;
    justify-content: space-between;
  }

  .header-filter__title-search {
    display: flex;
    outline: none;
    border: none;
    background-image: url("./assets/mobile/icon-search.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50% 50%;
    background-color: var(--violet);
    border-radius: 5px;
    padding: 1rem;
    cursor: pointer;
  }

  .header-filter__expand {
    display: flex;
    outline: none;
    border: none;
    background-image: url("./assets/mobile/icon-filter.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50% 50%;
    padding: 1rem;
    cursor: pointer;
    margin-right: 0.5rem;
    background-color: transparent;
  }
}

.header-filter__location {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 35%;
  height: 100%;
  border-right: 1px solid var(--border);
}

@media screen and (max-width: 825px) {
  .header-filter__location {
    display: none;
  }
}

.header-filter__location input {
  width: 80%;
  padding: 0.3rem;
  outline: none;
  border: none;
  background-color: var(--main-color);
  color: var(--text);
}

.header-filter__fulltime {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 25%;
}

@media screen and (max-width: 825px) {
  .header-filter__fulltime {
    display: none;
  }
}

.header-filter__fulltime button {
  padding: 0.5rem 1rem;
  background-color: var(--violet);
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
}

.header-filter__fulltime p {
  font-weight: bold;
  color: var(--text);
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
  background-color: var(--checkbox);
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
  background: var(--violet);
  background-image: url("../../assets/desktop/icon-check.svg");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}
</style>
