import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      jobs: [],
      jobOverview: false,
      offer: {},
    };
  },

  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },

    selectedOffer(state, id) {
      state.jobOverview = !state.jobOverview;
      state.offer = state.jobs.find((job) => job.id === id);
    },

    initStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
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

    setJobOverview(context) {
      context.commit("setJobOverview");
    },

    selectedOffer(context, id) {
      context.commit("selectedOffer", id);
    },

    initStore(context) {
      context.commit("initStore");
    },
  },

  getters: {
    jobs(state) {
      return state.jobs;
    },

    jobOverview(state) {
      return state.jobOverview;
    },

    offer(state) {
      return state.offer;
    },
  },
});

store.subscribe((_, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});
export default store;
