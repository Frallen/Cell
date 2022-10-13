import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import NotFound from "@/components/notFound";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/index"),
  },
  {
    path: "/admin",
    component: () => import("@/pages/adminPage/admin"),
    meta: { requiresAuth: true },
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
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/user/userFavorites"),
  },
  {
    name: "Жанры",
    path: "/genre/:id",
    component: () => import("@/pages/films/filmsCompilation"),
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
  // { path: "/auth", component: () => import("@/pages/auth/authPage") },
  // { path: "/registration", component: () => import("@/pages/auth/singUpPage") },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  // Если страница требует авторизации
  if (to.meta.requiresAuth) {
    //проверка авторизации
    if (await store.getters["auth/checkRouteAuth"]) {
      // если авторизован разрешаем переход
      next();
    } else {
      // если не авторизован, то переходим на главную страницу и отправляем экшен на открытие модалки авторизации
      await store.dispatch("auth/openLoginForm");
      next("/");
    }
    // если страница не требует авторизации то разрешаем переход
  } else next();
});

export default router;
