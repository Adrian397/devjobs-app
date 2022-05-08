import { createRouter, createWebHistory } from "vue-router";
import JobList from "./components/Jobs/JobList.vue";
import JobOverview from "./components/Jobs/JobOverview.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/jobs" },
    { path: "/jobs", component: JobList },
    { path: "/jobs/:jid", component: JobOverview, props: true },
  ],
});

export default router;
