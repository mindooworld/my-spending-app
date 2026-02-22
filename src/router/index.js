import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/analysis",
    name: "analysis",
    component: () => import("@/pages/analysis/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
