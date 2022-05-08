import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router";
import ApplyNowBtn from "./components/UI/ApplyNowBtn.vue";

const app = createApp(App);
app.component("ApplyNowBtn", ApplyNowBtn);
app.use(router);
app.use(store);
app.mount("#app");
