import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store/index";
import { auth } from "../firebase";

const app = createApp(App);
auth.onAuthStateChanged(user => {
  store.dispatch("auth/LoginStatus", user);
});
app.use(store).use(router).mount("#app");
