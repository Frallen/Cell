<template>
  <div class="container">
    <navbar class="container-nav"></navbar>
    <div class="container-body">
      <div class="section-container">
        <div class="container-body-wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
  <preloader v-show="loadingAdmin || isLoading"></preloader>
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
    }),
  },
  computed: {
    ...mapState({
      loadingAdmin: (state) => state.admin.loadingAdmin,
      isLoading: (state) => state.auth.isLoading,
    }),
  },
  mounted() {
    this.AuthState();
  },
};
</script>

<style lang="less">
@import "v-calendar/dist/style.css";
@import "modern-normalize/modern-normalize.css";
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
li {
  list-style-type: none;
}
body {
  background: #262626;
}
.container {
  display: flex;
  height: 100vh;
  &-nav {
    width: 20%;
  }
  &-body {
    width: 80%;
    &-wrapper {
      width: 100%;
    }
  }
}
</style>
