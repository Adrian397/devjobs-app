import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      jobs: [],
      jobOverview: false,
    };
  },

  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },

    setJobOverview(state) {
      state.jobOverview = true;
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
            };
          });
          context.commit("setJobs", transformedData);
        });
    },

    setJobOverview(context) {
      context.commit("setJobOverview");
    },
  },

  getters: {
    jobs(state) {
      return state.jobs;
    },

    jobOverview(state) {
      return state.jobOverview;
    },
  },
});

export default store;
