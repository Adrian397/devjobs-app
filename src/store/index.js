import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      jobs: [],
    };
  },

  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
  },

  actions: {
    loadJobs(context) {
      return fetch("../../data.json")
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
            };
          });
          context.commit("setJobs", transformedData);
          console.log(transformedData);
        });
    },
  },

  getters: {
    jobs(state) {
      return state.jobs;
    },
  },
});

export default store;
