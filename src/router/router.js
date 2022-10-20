import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import NotFound from "@/components/notFound";
import { auth } from "../../firebase";

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
    name: "Новости",
    path: "/news",
    component: () => import("@/pages/news/newsList"),
  },
  {
    path: "/actor/:id",
    component: () => import("@/pages/actors/actorPage"),
  },
  {
    name: "Профиль",
    path: "/profile",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/profile/profilePage"),
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
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged(async (userFirebase) => {
    // Если страница требует авторизации
    if (to.meta.requiresAuth) {
      //проверка авторизации
      if (userFirebase) {
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
});

export default router;
