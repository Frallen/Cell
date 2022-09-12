<template>
  <div class="form-wrapper">
    <h3>{{ typeForm }}</h3>
    <Form @submit="onsubmit" :validation-schema="schema" class="form">
      <label for="email">
        Введите почту
        <Field name="email" id="email" class="input" />
        <ErrorMessage name="email" />
      </label>

      <label for="password">
        Введите пароль
        <Field name="password" id="password" type="password" class="input" />
        <ErrorMessage name="password" />
      </label>

      <default-button>Submit</default-button>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import DefaultButton from "@/components/ui/button";
export default {
  name: "DefaultForm",
  components: {
    DefaultButton,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {};
  },
  props: {
    typeForm: [String],
  },
  methods: {
    onsubmit(values) {
      this.$emit("getData", values);
    },
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
<style lang="less" scoped>
.form-wrapper {
  position: relative;
  padding: 20px 50px;
  background: #fff;
  .br(5px);
}
.form {
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
  }
}
button {
  margin-top: 1em;
}
.input {
  display: block;
  border-radius: 6px;
  padding: 10px 15px;
  border: 1px solid @gray;
  outline: none;
  margin-top: 0.5em;
}
</style>
