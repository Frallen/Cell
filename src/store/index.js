import { createStore } from "vuex";
import { AuthModule } from "@/store/auth";
import { adminModule } from "@/store/admin";
import { filmsModule } from "@/store/films";

export default createStore({
  modules: {
    auth: AuthModule,
    admin:adminModule,
    films:filmsModule
  },
});
