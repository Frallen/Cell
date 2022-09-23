import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store/index";
import VCalendar from "v-calendar";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "quasar/dist/quasar.prod.css";
import { Quasar } from "quasar";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import vIntersection from "@/directives/vIntersection"
const app = createApp(App);
app.directive("Intersection", vIntersection)
app
  .use(store)
  .use(router)
  .use(VCalendar)
  .use(VueSweetalert2)
  .use(Quasar)
  .mount("#app");
