import { createStore } from "vuex";
import { AuthModule } from "@/store/auth";
import { adminModule } from "@/store/admin";

export default createStore({
  modules: {
    auth: AuthModule,
    admin:adminModule,
  },
});
