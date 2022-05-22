import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      jobs: [],
      jobHeader: false,
      offer: {},
      filteredJobs: [],
    };
  },

  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },

    selectedOffer(state, id) {
      state.jobHeader = true;
      state.offer = state.jobs.find((job) => job.id === id);
    },

    foundJobs(state, inputValue) {
      let copiedJobsArr = [...state.jobs];
      // console.log(copiedJobsArr);
      if (inputValue === "") return;
      else {
        copiedJobsArr = copiedJobsArr.filter(
          (job) => job.company === inputValue || job.position === inputValue
        );
      }

      state.filteredJobs = copiedJobsArr;
      console.log(state.filteredJobs);
      // console.log(copiedJobsArr);
      // else if (state.jobs.filter((job) => job.company !== inputValue)) {
      //   console.log("not found");
      // }
    },

    initStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },

    hideJobHeader(state) {
      state.jobHeader = false;
    },

    showJobHeader(state) {
      state.jobHeader = true;
    },

    clearFilteredJobsArr(state) {
      state.filteredJobs = [];
    },
  },

  actions: {
    loadJobs(context) {
      return fetch("./data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const transformedData = data.map((job) => {
            return {
              id: job.id,
              company: job.company,
              logo: job.logo,
              logoBackground: job.logoBackground,
              position: job.position,
              postedAt: job.postedAt,
              contract: job.contract,
              location: job.location,
              website: job.website,
              apply: job.apply,
              description: job.description,
              reqContent: job.requirements.content,
              reqItems: job.requirements.items,
              roleContent: job.role.content,
              roleItems: job.role.items,
            };
          });
          context.commit("setJobs", transformedData);
        });
    },

    hideJobHeader(context) {
      context.commit("hideJobHeader");
    },

    showJobHeader(context) {
      context.commit("showJobHeader");
    },

    selectedOffer(context, id) {
      context.commit("selectedOffer", id);
    },

    initStore(context) {
      context.commit("initStore");
    },

    foundJobs(context, inputValue) {
      context.commit("foundJobs", inputValue);
    },

    clearFilteredJobsArr(context) {
      context.commit("clearFilteredJobsArr");
    },
  },

  getters: {
    jobs(state) {
      return state.jobs;
    },

    jobOverview(state) {
      return state.jobHeader;
    },

    offer(state) {
      return state.offer;
    },

    filteredJobOffers(state) {
      return state.filteredJobs;
    },
  },
});

store.subscribe((_, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});
export default store;
