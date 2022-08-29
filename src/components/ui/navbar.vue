<template>
  <div class="menu-wrapper">
    <div class="section-container">
      <div class="menu">
        <div class="menu-logo" @click="$router.push('/')">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 3.6V12H12V3H20.4C20.7314 3 21 3.26863 21 3.6Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M21 20.4V12H12V21H20.4C20.7314 21 21 20.7314 21 20.4Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M3 12V3.6C3 3.26863 3.26863 3 3.6 3H12V12H3Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M3 12V20.4C3 20.7314 3.26863 21 3.6 21H12V12H3Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
          <h3>Cell</h3>
        </div>
        <ul class="menu-nav">
          <li @click="$router.push('news')">Новости</li>
          <li @click="$router.push('movies')">Фильмы</li>
          <li @click="$router.push('series')">Сериалы</li>
          <li @click="$router.push('cartoons')">Мультфильмы</li>
        </ul>
        <ul class="menu-user">
          <li @click="$router.push('auth')" v-if="!isAuthReady">Авторизация</li>
          <li @click="$router.push('registration')" v-if="!isAuthReady">
            Регистрация
          </li>
          <li @click="$router.push('account')">Аккаунт</li>
          <li @click="logout" v-if="isAuthReady">Выйти</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import loginMixin from "@/mixins/loginMixin";
import { mapActions, mapState } from "vuex";

export default {
  name: "nav-bar",
  computed:{
    ...mapState({
      isAuthReady: (state) => state.auth.isAuthReady,
    }),
  },
  methods: {
    logout() {
      this.$router.push("/");
      this.$store.dispatch("auth/logout")
    },

    ...mapActions({
      exit: "auth/logout",
    }),
  },
};
</script>

<style lang="less" scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &-wrapper {
    border-bottom: 1px solid #fff;
    background: @black;
    color: @thin-white;
    padding: 15px 0;
  }
  &-logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #fff;
    svg {
      margin-right: 10px;
    }
  }
  &-nav,
  &-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      margin-right: 10px;
      cursor: pointer;
      .trs();
    }
    li:hover {
      .trs();
      color: #fff;
    }
    li:last-child {
      margin-right: 0;
    }
  }
}
</style>
