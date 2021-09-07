import { createApp } from "vue";
import App from "./App.vue";
import router from "./route";
import "modern-normalize/modern-normalize.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
