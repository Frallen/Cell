<template>
  <div class="container">
    <navbar class="container-nav"></navbar>
    <div class="section-container">
      <div class="container-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <preloader v-show="IsLoad"></preloader>
</template>

<script>
import Navbar from "@/components/ui/navbar";
import { mapActions, mapGetters, mapState } from "vuex";
import "@/formLocalize";
import Preloader from "@/components/ui/preloader";
export default {
  components: { Preloader, Navbar },
  methods: {
    ...mapActions({
      AuthState: "auth/AuthState",
      GetUserData: "user/GetUserData",
    }),
  },
  computed: {
    ...mapState({
      IsLoadingAdmin: (state) => state.admin.loadingAdmin,
      IsLoadingAuth: (state) => state.auth.isLoading,
      IsLoadingFilms: (state) => state.films.isLoading,
      IsLoadingUsers: (state) => state.user.isLoading,
    }),
    IsLoad() {
      if (
        this.IsLoadingAdmin ||
        this.IsLoadingAuth ||
        this.IsLoadingFilms ||
        this.IsLoadingUsers
      )
        return true;
    },
  },

  mounted() {
    this.AuthState()
    this.GetUserData();

  },
};
</script>

<style lang="less">
@import "v-calendar/dist/style.css";
@import "modern-normalize/modern-normalize.css";
@import "@/styles/fonts.less";
html {
  font-size: 16px;
}
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul {
  padding: 0;
  margin: 0;
}
h1 {
  font-weight: 700;
}
h2 {
  font-weight: 600;
}
h3 {
  font-weight: 500;
}
h4 {
  font-weight: 400;
}
h5 {
  font-weight: 300;
}
p {
  font-weight: 400;
  font-size: 18px;
  @media @lg {
    font-size: 16px;
  }
}
li {
  list-style-type: none;
}
body {
  background: #262626;
  font-family: "Oswald" !important;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &-body {
    width: 100%;
  }
  &-nav {
  }
  &-body {
  }
}
.swiper-button-disabled {
  color: #eee !important;
}
.swiper-button-next,
.swiper-button-prev {
  color: #fff !important;
}
</style>
