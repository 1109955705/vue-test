import { createRouter, createWebHashHistory } from "vue-router";
const demo = () => import("../pages/demo/index.vue");
const bananer = () => import("../pages/bananer/index.vue");

const routes = [
  { path: "/", redirect: "/demo" },
  {
    path: "/demo",
    name: "demo",
    component: demo,
  },
  {
    path: "/bananer",
    name: "bananer",
    component: bananer,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
