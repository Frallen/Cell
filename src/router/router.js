import indexPage from "@/pages/index";
import adminPage from "@/pages/admin";
import { createRouter, createWebHistory } from "vue-router";
import authPage from "@/pages/authPage";
import singUpPage from "@/pages/singUpPage";

const routes = [
  {
    path: "/",
    component: indexPage,
  },
  {
    path: "/admin",
    component: adminPage,
  },
  { path: "/auth", component: authPage },
  { path: "/registration", component: singUpPage },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
export default router;
