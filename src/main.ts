import { createApp } from "vue";
import App from "./App.vue";
import router from "./route";
import "@/styles/index.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
