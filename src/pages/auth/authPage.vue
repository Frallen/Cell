<template>
  <DefaultForm class="form" typeForm="Авторизация" @getData="login">
  </DefaultForm>
</template>

<script>
import DefaultForm from "@/components/ui/form";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "authPage",
  components: { DefaultForm },
  emits: ["closeModal"],
  methods: {
    login(val) {
      this.setUser(val);

      this.setAuth().then();
      this.$emit("closeModal");
      this.$router.push("/");
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

<style scoped></style>
