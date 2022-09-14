<template>
  <div class="admin-nav">
    <router-link v-for="route in routes" :to="route.path" active-class="active"
      >{{ route.name }}
    </router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "admin-nav",
  methods: {},
  mounted() {},

  data() {
    return {
      path: null,
      routes: [
        { path: "/admin/users", name: "Пользователи" },
        { path: "/admin/films", name: "Фильмы" },
        { path: "/admin/actors", name: "Актеры" },
        { path: "/admin/genres", name: "Жанры" },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.admin-nav {
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  .br(10px);
  padding: 0 10px;
  background: #fff;
  cursor: pointer;
  a {
    padding: 10px 0;
    text-decoration: none;
    color: @text;
    position: relative;
  }
}
.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  display: block;
  height: 3px;
  background: @red;
}
</style>
