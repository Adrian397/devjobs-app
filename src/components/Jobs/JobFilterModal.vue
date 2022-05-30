<script setup>
import IconLocation from "../Icons/icon-location.vue";

import { useStore } from "vuex";
import { ref, unref } from "vue";
const store = useStore();

const props = defineProps({
  closeModal: Function,
  nameFilter: Object,
});

const locationFilter = ref("");
const contractFilter = ref(false);

const searchResults = () => {
  store.dispatch("foundJobs", {
    nameInputValue: unref(props.nameFilter).value,
    locationInputValue: unref(locationFilter).value,
    contractCheckboxValue: unref(contractFilter),
  });
  props.closeModal();
};
</script>

<template>
  <div class="backdrop" @click="props.closeModal">
    <div class="modal" @click="(e) => e.stopPropagation()">
      <div class="modal__location-filter">
        <IconLocation />
        <input
          type="text"
          placeholder="Filter by location…"
          ref="locationFilter"
        />
      </div>
      <div class="modal__contract-filter">
        <input type="checkbox" v-model="contractFilter" />
        <p>Full Time Only</p>
      </div>
      <button class="modal__search-button" @click="searchResults">
        Search
      </button>
    </div>
  </div>
</template>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.26);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  display: none;
}

.modal {
  width: 80%;
  height: 15.5rem;
  background: var(--main-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
}

.modal__location-filter {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  width: 85%;
  height: 4.5rem;
}

.modal::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: var(--border);
  top: 30%;
}

.modal__location-filter input {
  margin-left: 1rem;
  outline: none;
  border: none;
  height: 2rem;
  color: var(--text);
  background-color: var(--main-color);
}

.modal__contract-filter {
  display: flex;
  width: 85%;
  align-items: center;
}

.modal__contract-filter p {
  margin-left: 1rem;
  color: var(--text);
}

.modal__contract-filter input {
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: 1.3rem;
  height: 1.3rem;
  background-color: var(--checkbox);
  border-radius: 5px;
}

.modal__contract-filter input::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transition: 120ms all ease-in-out;
}

.modal__contract-filter input:checked::before {
  transform: scale(1);
  background: var(--violet);
  background-image: url("../../assets/desktop/icon-check.svg");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}

.modal__search-button {
  margin-bottom: 1.5rem;
  width: 85%;
  padding: 1rem;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: var(--violet);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

@media screen and (max-width: 825px) {
  .backdrop {
    display: flex;
  }
}
</style>
