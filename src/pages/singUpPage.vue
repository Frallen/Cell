<template>
  <DefaultForm class="form" typeForm="Регистрация" @getData="createUser">
  </DefaultForm>
</template>

<script>
import DefaultForm from "@/components/ui/form";
import { mapActions, mapMutations } from "vuex";
export default {
  name: "singUpPage",
  components: { DefaultForm },

  methods: {
    createUser(val) {
      try {
        this.setUser(val);
        this.signUp();
        this.$router.push("/")
      }catch (e) {

      }

    },
    ...mapMutations({
      setUser: "auth/setUser",
    }),
    ...mapActions({
      signUp: "auth/signUp",
    }),
  }
};

</script>

<style lang="less" scoped>

</style>