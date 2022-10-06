import { createStore } from "vuex";
import { AuthModule } from "@/store/auth";
import { adminModule } from "@/store/admin";
import { filmsModule } from "@/store/films";
import { userModule } from "@/store/user";
import {newsModule} from "@/store/news";

export default createStore({
  modules: {
    auth: AuthModule,
    admin: adminModule,
    films: filmsModule,
    user: userModule,
    news: newsModule
  },
});
