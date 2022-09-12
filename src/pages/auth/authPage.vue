<template>
  <DefaultForm class="form" typeForm="Авторизация" @getData="login">
  </DefaultForm>
</template>

<script>
import DefaultForm from "@/components/ui/form";
import { mapActions, mapMutations } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "authPage",
  components: { DefaultForm },
  methods: {
    login(val) {
      this.setUser(val);

      this.setAuth().then();
     this.$router.push("/")
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
