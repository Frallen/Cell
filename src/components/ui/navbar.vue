<template>
  <div class="menu-wrapper">
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
        <li v-if="isAuthReady" class="menu-section">
          <ul>
            <li class="menu-nav-title">Личное</li>
            <li><router-link to="account">Аккаунт</router-link></li>
            <li v-if="isAuthReady && isAdmin">
              <router-link to="/admin">Админ</router-link>
            </li>
            <li @click="logout">Выйти</li>
          </ul>
        </li>
        <li class="menu-section">
          <ul class="menu-user" v-if="!isAuthReady">
            <li><router-link to="/auth">Авторизация</router-link></li>
            <li><router-link to="/registration">Регистрация</router-link></li>
          </ul>
        </li>
        <li class="menu-section">
          <ul>
            <li class="menu-nav-title">Навигация</li>
            <li><router-link to="/news">Новости</router-link></li>
            <li><router-link to="/movies">Фильмы</router-link></li>
            <li><router-link to="/series">Сериалы</router-link></li>
            <li><router-link to="/cartoons">Мультфильмы</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Logo from "@/icons/logo";
export default {
  name: "nav-bar",
  components:[Logo],
  computed: {
    ...mapState({
      isAuthReady: (state) => state.auth.isAuthReady,
      isAdmin: (state) => state.auth.isAdmin,
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
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
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  &-wrapper {
    border-right: 1px solid @thin-white;

    padding: 15px 10px;
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
  &-nav {
    &-title {
      font-size: 1.5em;
      color: #fff;
      font-weight: 500;
      margin-bottom: 0.5em;
    }
    .menu-section {
      margin-top: 1em;
      ul {
        li {
          margin-bottom: 0.7em;

          user-select: none;
          color: @thin-white;
          a {
            color: @thin-white;
            .trs();
            text-decoration: none;
          }
          a:hover {
            cursor: pointer;
            .trs();
            color: #fff;
          }
        }
      }
    }
  }
  &-nav,
  &-user {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
