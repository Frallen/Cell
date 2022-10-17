<template>
  <DefaultForm
    class="form"
    typeForm="Регистрация"
    @getData="createUser"
    :schema="schema"
  >
    <label for="email">
      Введите почту
      <Field name="email" class="input" />
      <ErrorMessage name="email" />
    </label>
    <label for="password">
      Введите пароль
      <Field name="password" type="password" class="input" />
      <ErrorMessage name="password" />
    </label>
    <DefaultButton>Зарегистрироватся</DefaultButton>
  </DefaultForm>
</template>

<script>
import DefaultForm from "@/components/ui/form";
import { mapActions, mapMutations } from "vuex";
import { Field, ErrorMessage } from "vee-validate";
import DefaultButton from "@/components/ui/button";
import * as yup from "yup";
export default {
  name: "singUpPage",
  components: { DefaultButton, DefaultForm, Field, ErrorMessage },
  emits: ["closeModal"],
  methods: {
    createUser(val) {
      try {
        this.setUser(val);
        this.$emit("closeModal");
        this.signUp();

        this.$router.push("/");
      } catch (e) {}
    },
    ...mapMutations({
      setUser: "auth/setUser",
    }),
    ...mapActions({
      signUp: "auth/signUp",
    }),
    computed: {
      schema() {
        return yup.object({
          email: yup.string().required().email(),
          password: yup.string().required().min(8),
        });
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
