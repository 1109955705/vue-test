import { createRouter, createWebHashHistory } from "vue-router";
const demo = () => import("../pages/demo/index.vue");
const bananer = () => import("../pages/bananer/index.vue");
const detail = () => import("../pages/detail/index.vue");

const routes = [
  { path: "/", redirect: "/threejs-demo" },
  {
    path: "/threejs-demo",
    name: "threejs-demo",
    component: demo,
  },
  {
    path: "/bananer",
    name: "bananer",
    component: bananer,
  },
  {
    path: "/detail",
    name: "detail",
    component: detail,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
