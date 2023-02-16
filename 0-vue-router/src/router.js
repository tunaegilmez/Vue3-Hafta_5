import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/HomeView"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import("@/views/AboutView"),
  },
  {
    name: "Detail",
    path: "/detail/:userID",
    component: () => import("@/views/DetailView"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // history: createWebHashHistory,
});

export default router;
