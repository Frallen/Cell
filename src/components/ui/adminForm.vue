<template>
  <div>
    <Form class="form" :validation-schema="LocalSchema" @submit="onSubmit">
      <div class="form-wrapper">
        <slot></slot>
      </div>
      <default-button>Создать</default-button>
      <Close class="form-close" @click="hideForm"></Close>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import DefaultButton from "@/components/ui/button";
import Close from "@/icons/close";

export default {
  name: "adminForm",
  emits: ["hide"],
  components: {
    Close,
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
    onSubmit(values, { resetForm }) {
      this.$emit("formValues", values);
      resetForm();
    },
    hideForm() {
      this.$emit("hide", false);
    },
  },
  computed: {
    LocalSchema() {
      return this.schema;
    },
  },
};
</script>

<style scoped lang="less">
.form {
  margin: 1em 0;
  position: relative;
  padding: 10px;
  background: #fff;
  .br(10px);
  &-close {
    position: absolute;
    right: 6px;
    top: 3px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
  &-wrapper {
    margin: -10px 0 1em -10px;
    display: flex;
    flex-wrap: wrap;

    .slug {
      cursor: not-allowed;
    }
  }
}
</style>
