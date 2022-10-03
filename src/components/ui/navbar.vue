<template>
  <div class="menu" :class="{ mobile: mobile }">
    <div class="menu-wrapper">
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
        <li class="menu-section">
          <ul>
            <li><router-link to="/news">Новости</router-link></li>
            <li><router-link to="/catalog">Каталог</router-link></li>
            <li><router-link to="/cartoons">Мультфильмы</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="menu-wrapper menu-manipulation">
      <ul class="menu-nav">
        <li v-if="isAuthReady" class="menu-section">
          <ul>
            <li>
              <router-link to="/favorites" class="menu-mobile-item">
                <img :src="Heart" alt="favorites" />
              </router-link>
            </li>
            <li>
              <router-link to="/profile" class="menu-mobile-item">
                <img :src="User" alt="profile" />
              </router-link>
            </li>
            <li v-if="isAuthReady && isAdmin">
              <router-link to="/admin"><img :src="Crown" alt="" /></router-link>
            </li>
            <li @click="logout" class="menu-mobile-item">
              <img :src="ExitLogo" alt="" />
            </li>
          </ul>
        </li>
        <li class="menu-section">
          <ul class="menu-user" v-if="!isAuthReady">
            <li><router-link to="/auth">Авторизация</router-link></li>
            <li><router-link to="/registration">Регистрация</router-link></li>
          </ul>
        </li>
      </ul>
      <div class="menu-mobile" :class="{ 'icon-active': mobile }">
        <router-link to="/favorites" class="menu-mobile-item">
          <img :src="Heart" alt="favorite" />
        </router-link>
        <router-link to="/profile" class="menu-mobile-item">
          <img :src="User" alt="profile" />
        </router-link>
        <div class="menu-mobile-item menu-mobile-icon" @click="mobileView">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Heart from "@/icons/heart.png";
import User from "@/icons/user.png";
import Logo from "@/icons/logo.vue";
import ExitLogo from "@/icons/exit.png";
import Crown from "@/icons/Crown.png";
export default {
  name: "nav-bar",
  components: [Logo],
  data() {
    return {
      mobile: false,
      ExitLogo,
      Heart,
      User,Crown
    };
  },
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
    mobileView() {
      this.mobile === false ? (this.mobile = true) : (this.mobile = false);
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
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  border-bottom: 1px solid #393838;

  padding: 15px 10px;
  &-wrapper {
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
  &-mobile {
    display: none;

    @media @lg {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-icon {
      width: 30px;
      height: 30px;
      cursor: pointer;
      position: relative;
      span {
        content: "";
        width: 100%;
        height: 3px;
        background: #fff;
        display: block;
        margin-top: 50%;
      }
      span::after,
      span::before {
        content: "";
        width: 100%;
        height: 3px;
        background: #fff;
        display: block;
        position: absolute;
        .trs();
      }
      span::after {
        margin-top: -12px;
      }

      span::before {
        margin-top: 13px;
      }
    }
  }
  &-nav {
    .menu-mobile-item {
      @media @lg {
        display: none;
      }
    }
    .menu-section {
      margin-left: 1em;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          margin-left: 0.8em;
          font-size: 1.5em;
          user-select: none;
          color: @thin-white;
          cursor: pointer;
          @media @lg {
            font-size: 1.3em;
          }
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
  &-wrapper,
  &-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-manipulation {
    .menu-nav {
      @media @lg {
        display: none;
      }
    }
  }
  &-wrapper {
    .menu-nav {
      @media @md {
        display: none;
      }
    }
  }
}
.mobile {
  align-items: flex-start;
  flex-direction: column;
  animation: show 0.5s ease-in-out;
  .menu-nav,
  .menu-wrapper,
  .menu-user,
  .menu-section ul {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
  }
  li {
    margin-top: 0.8em;
    margin-left: 0 !important;
  }

  .menu-wrapper {
    .menu-nav {
    }
  }
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.icon-active {
  position: absolute;
  right: 2%;
  top: 4%;
  span {
    transform: rotate(225deg);
    .trs();
  }
  span::after {
    margin-top: 0;
    transform: rotate(-90deg);
    .trs();
  }
  span::before {
    margin-top: 0;
    .trs();
    opacity: 0;
  }
}
.menu-mobile-item {
  height: 30px;
  width: 30px;
  display: block;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
