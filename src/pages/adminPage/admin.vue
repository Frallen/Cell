<template>
  <div class="admin">
    <admin-nav></admin-nav>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import AdminNav from "@/pages/adminPage/admin-nav";

export default {
  name: "adminPage",
  data() {
    return {
      tableHeader: null,
      formVisible: false,
    };
  },
  components: {
    AdminNav,
  },
  computed: {
    login: "auth/login",
  },
  methods: {
    ...mapMutations({
      setUser: "auth/setUser",
    }),
    ...mapActions({
      setAuth: "auth/login",
    }),
  },
};
</script>

<style lang="less" scoped>
.admin {
  width: 100%;
}
</style>
