<template>
  <div class="section-container">
    <div class="admin">
      <div class="form-wrapper">
        <h3></h3>
        <DefaultForm class="form" typeForm="Авторизация" @getData="loginAdmin">
        </DefaultForm>
      </div>
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
