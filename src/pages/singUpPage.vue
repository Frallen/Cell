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
      this.setUser(val);
      this.signUp();
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