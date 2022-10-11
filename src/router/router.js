import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/index"),
  },
  {
    path: "/admin",
    component: () => import("@/pages/adminPage/admin"),
    meta: { requiresLogin: true },
    children: [
      {
        path: "actors",
        component: () => import("@/pages/adminPage/admin-actors"),
      },
      {
        path: "news",
        component: () => import("@/pages/adminPage/admin-news"),
      },
      {
        name: "Фильмы",
        path: "films",
        component: () => import("@/pages/adminPage/admin-films"),
      },
      {
        path: "genres",
        component: () => import("@/pages/adminPage/admin-genres"),
      },
    ],
  },
  {
    path: "/film/:id",
    component: () => import("@/pages/films/filmsDetail"),
  },
  {
    path: "/news/:id",
    component: () => import("@/pages/news/newsDetail"),
  },
  {
    path: "/news",
    component: () => import("@/pages/news/newsList"),
  },
  {
    path: "/actor/:id",
    component: () => import("@/pages/actors/actorPage"),
  },
  {
    name: "Избранное",
    path: "/favorites",
    component: () => import("@/pages/user/userFavorites"),
  },
  {
    name: "Жанры",
    path: "/genre/:id",
    component: () => import("@/pages/films/filmsCompilation"),
  },
 // { path: "/auth", component: () => import("@/pages/auth/authPage") },
 // { path: "/registration", component: () => import("@/pages/auth/singUpPage") },
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
