import { createStore } from "vuex";
import { AuthModule } from "@/store/auth";

export default createStore({
  modules: {
    auth: AuthModule,
  },
});
