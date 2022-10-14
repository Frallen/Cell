<template>
  <div>
    <div class="container">
      <navbar class="container-nav" @modalStatus="modalStatus"></navbar>
      <div class="section-container">
        <div class="container-body">
          <router-view v-slot="{ Component, route }">
            <transition name="fade">
              <component :is="Component" :key="route.name" />
            </transition>
          </router-view>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
    <div class="modal" :class="{ order: isActive }" @click="Close">
      <div class="modal-wrapper">
        <auth-page
          class="modal-item"
          v-show="authModal"
          @click.stop
          @closeModal="Close"
        ></auth-page>
        <sing-up-page
          class="modal-item"
          v-show="regModal"
          @click.stop
          @closeModal="Close"
        ></sing-up-page>
        <img :src="closeIcon" alt="" class="modal-close" @click="Close" />
      </div>
    </div>
    <preloader v-show="IsLoad"></preloader>
  </div>
</template>

<script>
import Navbar from "@/components/ui/navbar";
import { mapActions, mapState } from "vuex";
import "@/formLocalize";
import Preloader from "@/components/ui/preloader";
import AuthPage from "@/pages/auth/authPage";
import SingUpPage from "@/pages/auth/singUpPage";
import closeIcon from "@/icons/close.png";
import FooterComponent from "@/components/footer";
export default {
  components: { FooterComponent, SingUpPage, AuthPage, Preloader, Navbar },
  data() {
    return {
      isActive: false,
      regModal: false,
      authModal: false,
      closeIcon,
    };
  },
  methods: {
    ...mapActions({
      AuthState: "auth/AuthState",
      GetUserData: "user/GetUserData",
      FetchFilms: "films/FetchFilms",
      FetchNews: "news/FetchNews",
      FetchActors: "films/FetchActors",
      FetchGenres: "films/FetchGenres",
    }),
    modalStatus(val) {
      this.isActive = true;
      val === "auth" ? (this.authModal = true) : (this.regModal = true);
    },
    Close() {
      this.isActive = false;
      this.authModal = false;
      this.regModal = false;
    },
  },
  computed: {
    ...mapState({
      IsLoadingAdmin: (state) => state.admin.loadingAdmin,
      IsLoadingAuth: (state) => state.auth.isLoading,
      IsLoadingFilms: (state) => state.films.isLoading,
      IsLoadingUsers: (state) => state.user.isLoading,
      IsLoadingNews: (state) => state.news.isLoading,
      isAdmin: (state) => state.auth.isAdmin,
    }),
    IsLoad() {
      if (
        this.IsLoadingAdmin ||
        this.IsLoadingAuth ||
        this.IsLoadingFilms ||
        this.IsLoadingNews ||
        this.IsLoadingUsers
      )
        return true;
    },
  },
  created() {
    this.AuthState();
    this.GetUserData();
    this.FetchFilms();
    this.FetchNews();
    this.FetchActors();
    this.FetchGenres();
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
.modal-enter-active,
.preloader-leave-active {
  .trs();
}
.modal-enter-from {
  opacity: 0;
  visibility: hidden;
}
.modal-leave-to {
  opacity: 1;
  visibility: visible;
}
.modal {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1c1c1ce6;
  visibility: hidden;
  opacity: 0;
  .trs();
  &-wrapper {
    position: relative;
    padding: 4em;
    .br(5px);
    background: #fff;
  }
  &-close {
    position: absolute;
    right: 2%;
    top: 2%;
    cursor: pointer;
  }
  &-item {
    max-width: 500px;
  }
}
.order {
  z-index: 3;
  visibility: visible;
  .trs();
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
