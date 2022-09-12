import indexPage from "@/pages/index";
import adminPage from "@/pages/adminPage/admin";
import { createRouter, createWebHistory } from "vue-router";
import authPage from "@/pages/auth/authPage";
import singUpPage from "@/pages/auth/singUpPage";
import store from "@/store";
import adminGenres from "@/pages/adminPage/admin-genres";
import adminActors from "@/pages/adminPage/admin-actors";
import adminUsers from "@/pages/adminPage/admin-users";
import adminFilms from "@/pages/adminPage/admin-films";
import adminForm from "@/components/ui/adminForm";

const routes = [
  {
    path: "/",
    component: indexPage,
  },
  {
    path: "/admin/",
    component: adminPage,
    meta: { requiresLogin: true },
    children: [
      {
        path: "admin-genres/",
        component: adminGenres,
        children: [{ path: "add", component: adminForm }],
      },
      {
        path: "admin-actors/",
        component: adminActors,
        children: [{ path: "add", component: adminForm }],
      },
      {
        path: "admin-users/",
        component: adminUsers,
        children: [{ path: "add", component: adminForm }],
      },
      {
        path: "admin-films/",
        component: adminFilms,
        children: [{ path: "add", component: adminForm }],
      },
    ],
  },
  { path: "/auth", component: authPage },
  { path: "/registration", component: singUpPage },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

/*
router.beforeResolve( (to, from, next) => {
  console.log(store.getters['auth/checkRouteAuth'])
  if (to.matched.some(p => p.meta.requiresLogin) &&  !store.getters['auth/checkRouteAuth']) {
    next("/auth");
  }
  else next("/")
})*/

router.beforeEach((to, from, next) => {
  // console.log(to.path, store.state.auth);
  // console.log(store.getters["auth/checkRouteAuth"]);
  if (to.path === "/registration" && store.getters["auth/checkRouteAuth"])
    next("/");
  else next();
});

export default router;
