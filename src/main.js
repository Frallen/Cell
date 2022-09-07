import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store/index";
import { auth } from "../firebase";

const app = createApp(App);
auth.onAuthStateChanged(user => {

});
const  user = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged( (userFirebase) => {
      unsubscribe()
      store.dispatch("auth/LoginStatus", userFirebase);
      resolve(userFirebase)
    }, reject)

  })
}
router.beforeEach(async (to, from, next) => {
  console.log(to.path, store.state.auth.isAuthReady);
  if (to.path === "/registration" && await user()) next({ name: "/" })
  else next()
})

//store.dispatch("auth/LoginStatus", data);

app.use(store).use(router).mount("#app");

