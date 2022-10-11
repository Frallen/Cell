<template>
  <div>
    <Form
      class="form"
      :validation-schema="LocalSchema"
      @submit="onSubmit"
      ref="Form"
    >
      <div class="form-wrapper">
        <slot></slot>
      </div>
      <default-button>Создать</default-button>
      <img :src="Close" alt="close" class="form-close" @click="hideForm">
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import DefaultButton from "@/components/ui/button";
import Close from "@/icons/close.png";

export default {
  name: "adminForm",
  emits: ["hide", "refForm","formValues"],
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
    updateValues: { type: Object },
  },
  data() {
    return {
      Close,
      setValues: null,
    };
  },
  mounted() {
    this.$emit("refForm", this.$refs.Form);
  },
  methods: {
    onSubmit(values, { resetForm }) {
      this.$emit("formValues", values);
      resetForm();
    },
    hideForm() {
      this.$emit("hide", false);
      //Очистка формы по закрытию формы
      //    this.$refs.Form.resetForm();
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
    display: block;
  }
  &-wrapper {
    margin: -10px 0 1em -10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
}
</style>
