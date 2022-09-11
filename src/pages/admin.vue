<template>
  <div class="section-container">
    <div class="admin">

    </div>
  </div>
</template>

<script>
import DefaultForm from "@/components/ui/form";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "adminPage",
  data() {
    return {
      data: {
        return: {},
      },
    };
  },
  components: { DefaultForm },
  computed: {
    login: "auth/login",
  },
  methods: {
    loginAdmin(val) {
      this.setUser(val);
      this.setAuth();
    },
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
