import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store/index";
import SetupCalendar from "v-calendar";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "quasar/dist/quasar.prod.css";
import { Quasar } from "quasar";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import VueLazyload from "vue-lazyload";
import vIntersection from "@/directives/vIntersection";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const app = createApp(App);
const loadimage = require("@/icons/minPreloader.gif");

library.add(faStar);
app.directive("Intersection", vIntersection);
app
  .use(store)
  .use(router)
  .use(SetupCalendar, {})
  .use(VueSweetalert2)
  .use(Quasar)
  .use(VueLazyload, {
    preLoad: 1.3,
    loading: loadimage,
    attempt: 1,
  })
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
