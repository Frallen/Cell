<template>
  <DefaultForm typeForm="Авторизация" @getData="login" :schema="schema">
    <label for="email">
      Введите почту
      <Field name="email" class="input" type="input" />
      <ErrorMessage name="email" />
    </label>
    <label for="password">
      Введите пароль
      <Field name="password" type="password" class="input" />
      <ErrorMessage name="password" />
    </label>
    <DefaultButton>Войти</DefaultButton>
  </DefaultForm>
</template>

<script>
import DefaultForm from "@/components/ui/form";
import { mapActions, mapMutations } from "vuex";
import DefaultButton from "@/components/ui/button";
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "authPage",
  components: { DefaultButton, DefaultForm, Field, ErrorMessage },
  emits: ["closeModal"],
  methods: {
    login(val) {
      this.setUser(val);

      this.setAuth(this);
    },
    ...mapMutations({
      setUser: "auth/setUser",
    }),
    ...mapActions({
      setAuth: "auth/login",
    }),
  },
  computed: {
    schema() {
      return yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      });
    },
  },
};
</script>

<style scoped></style>
