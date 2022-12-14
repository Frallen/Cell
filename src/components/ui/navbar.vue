<template>
  <div class="menu">
    <div class="menu-wrapper" :class="{ 'mobile-flow': mobile }">
      <div class="menu-logo" @click="$router.push('/')">
        <img :src="Logo" alt="logo" />
        <h3>Cell</h3>
      </div>
      <div class="menu-nav">
        <router-link to="/news" class="menu-item">Новости</router-link>
        <router-link to="/catalog" class="menu-item">Каталог</router-link>
      </div>
    </div>
    <div class="menu-additional" :class="{ 'static-position': mobile }">
      <template v-if="isAuthReady">
        <router-link to="/favorites" class="menu-item">
          <font-awesome-icon
            class="fa-icon"
            icon="fa-heart"
          ></font-awesome-icon>
        </router-link>

        <router-link to="/profile" class="menu-item">
          <font-awesome-icon class="fa-icon" icon="fa-user"></font-awesome-icon>
        </router-link>

        <div v-if="isAuthReady && isAdmin" class="menu-item">
          <router-link to="/admin"
            ><font-awesome-icon
              class="fa-icon"
              icon="fa-crown"
            ></font-awesome-icon
          ></router-link>
        </div>
        <div @click="logout" class="menu-item">
          <font-awesome-icon
            class="fa-icon"
            icon="fa-right-to-bracket"
          ></font-awesome-icon>
        </div>
      </template>
      <template v-if="!isAuthReady">
        <div class="menu-item">
          <font-awesome-icon
            class="fa-icon"
            icon="fa-lock"
            alt=""
            @click.stop="visibleModal"
            ref="login"
            data-type="auth"
          ></font-awesome-icon>
        </div>
        <div class="menu-item">
          <font-awesome-icon
            class="fa-icon"
            icon="fa-user-plus"
            alt=""
            @click.stop="visibleModal"
            data-type="reg"
          ></font-awesome-icon>
        </div>
      </template>
      <div class="menu-mobile menu-item" :class="{ 'icon-active': mobile }">
        <div class="menu-mobile-icon" @click="mobileView">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Logo from "@/icons/logo.png";
export default {
  name: "nav-bar",
  emits: ["modalStatus"],
  data() {
    return {
      mobile: false,
      Logo,
      modalStatus: null,
    };
  },
  computed: {
    ...mapState({
      isAuthReady: (state) => state.auth.isAuthReady,
      isAdmin: (state) => state.auth.isAdmin,
      openLoginModal: (state) => state.auth.openLoginModal,
    }),
  },
  watch: {
    openLoginModal() {
      this.$refs.login.click();
    },
  },
  methods: {
    visibleModal(e) {
      e.currentTarget.dataset.type === "auth"
        ? (this.modalStatus = "auth")
        : (this.modalStatus = "reg");
      this.$emit("modalStatus", this.modalStatus);
    },
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
  padding: 0.5rem 1rem;
  border-bottom: 1px solid @red;
  position: sticky;
  top: 0;
  z-index: 4;
  background: #1f1f1fc9;
  .trs();
  &-logo {
    cursor: pointer;
    h3 {
      color: #fff;
      @media @lg {
        font-size: 2em;
      }
      @media @xs {
        display: none;
      }
    }
  }
  &-wrapper,
  &-nav,
  &-additional,
  &-logo {
    display: flex;
    align-items: center;
  }
  &-nav {
    @media @lg {
      display: none;
    }
  }
  &-item {
    margin-left: 1em;
    text-decoration: none;
    font-size: 1.3em;
    color: #fff;
    .trs();
    cursor: pointer;
    @media @md {
      font-size: 1em;
    }
    .fa-icon {
      font-size: 1.5em;
      color: #fff;
      .trs();
    }
    .fa-icon:hover {
      color: @red;
      .trs();
    }
  }
  &-item:hover {
    color: @red;
    .trs();
  }
  &-mobile {
    display: none;
    @media @lg {
      display: block;
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
        margin-top: 100%;
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
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.static-position {
  position: absolute;
  right: 2%;
  top: 4%;
}
.icon-active {
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
.mobile-flow {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  .menu-nav {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .menu-item {
    font-size: 1.3em;
  }
}
</style>
