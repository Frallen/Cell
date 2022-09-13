<template>
  <div>
    <Form class="form" :validation-schema="LocalSchema" @submit="onSubmit">
      <slot></slot>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import DefaultButton from "@/components/ui/button";

export default {
  name: "adminForm",
  components: {
    DefaultButton,
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    schema: {
      type: Object,
    },
  },
  methods: {
    onSubmit(values) {
      this.$emit("formValues", values);
    },
  },
  computed: {
    LocalSchema() {
      return this.schema;
    },
    ...map
  },
};
</script>

<style scoped lang="less">
.form {
  padding: 10px;
  background: #fff;
  .br(10px);



}
</style>
