<template>
  <div>
    <Breadcrumbs></Breadcrumbs>
    <div class="page-description">
      <p>На это странице вы можете изменить данные своего профиля</p>
    </div>
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      class="form"
      ref="Form"
    >
      <label for="email">
        Почта
        <Field name="email" class="input" />
        <ErrorMessage name="email" />
      </label>
      <label for="password">
        Пароль
        <Field name="password" type="password" class="input" />
        <ErrorMessage name="password" />
      </label>
      <DefaultButton>Обновить</DefaultButton>
    </Form>
  </div>
</template>

<script>
import { Field, ErrorMessage, Form } from "vee-validate";
import * as yup from "yup";
import DefaultButton from "@/components/ui/button";
import { mapActions, mapState } from "vuex";
import Breadcrumbs from "@/components/breadcrumbs";
export default {
  name: "profilePage",
  components: {
    Breadcrumbs,
    DefaultButton,
    Field,
    ErrorMessage,
    Form,
  },
  methods: {
    ...mapActions({
      UpdateUser: "user/UpdateUser",
    }),
    onSubmit(data) {
      this.UpdateDialog().then((result) => {
        if (result.isConfirmed) {
          let obj = {
            email: data.email,
            password: data.password,
          };
          this.UpdateUser(obj)
            .then((p) => {
              this.$swal.fire({
                icon: "success",
                title: "Данные успешно обновлены",
              });
              this.$router.push("/");
            })
            .catch((err) =>
              this.$swal.fire({
                icon: "error",
                title: "Произошла ошибка",
              })
            );
        } else {
          this.cancelOperation();
        }
      });
    },
    UpdateDialog() {
      return this.$swal.fire({
        title: "Подтвердите действие",
        text: "Данные буду обновлены и потребуется повторная авторизация",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ааа",
        cancelButtonColor: "#d33",
        confirmButtonText: "Подтвердить",
        cancelButtonText: "Отменить",
      });
    },

    cancelOperation() {
      this.$swal.fire({
        icon: "error",
        title: "Операция отменена",
      });
    },
  },
  mounted() {
    this.$refs.Form.setFieldValue("email", this.userInfo.email);
  },
  computed: {
    schema() {
      return yup.object({
        email: yup.string().email(),
        password: yup.string().min(8),
      });
    },
    ...mapState({
      userInfo: (state) => state.user.userInfo,
    }),
  },
};
</script>

<style scoped lang="less">
.form {
  background: #fff;
  .br(10px);
  padding: 1em;
}
</style>
