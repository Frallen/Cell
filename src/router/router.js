import indexPage from "@/pages/index";
import adminPage from "@/pages/admin";
import { createRouter, createWebHistory } from "vue-router";
import authPage from "@/pages/authPage";
import singUpPage from "@/pages/singUpPage";
import store from "@/store";

const routes = [
  {
    path: "/",
    component: indexPage,
  },
  {
    path: "/admin",
    component: adminPage,
    meta: { requiresLogin:true }
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

router.beforeEach( (to, from, next) => {
// console.log(to.path, store.state.auth);
console.log(store.getters['auth/checkRouteAuth'])
    if (to.path === "/registration" &&  store.getters['auth/checkRouteAuth']) next("/")
  else next()
})

export default router;
