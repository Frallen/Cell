<template>
  <admin-form>
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
  </admin-form>
</template>

<script>
export default {
  name: "admin-form"
};
</script>

<style scoped>

</style>