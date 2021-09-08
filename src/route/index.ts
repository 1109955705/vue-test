import { createRouter, createWebHashHistory } from "vue-router";
const demo = () => import("../pages/demo/index.vue");
const bananer = () => import("../pages/bananer/index.vue");
const detail = () => import("../pages/detail/index.vue");

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
  {
    path: "/detail:src",
    name: "detail",
    component: detail,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
