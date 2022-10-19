<template>
  <div class="form-wrapper">
    <h4>{{ typeForm }}</h4>
    <Form @submit="onsubmit" :validation-schema="localeSchema" class="form">
      <slot></slot>
    </Form>
  </div>
</template>
<script>
import { Form } from "vee-validate";

import "@/formLocalize";
export default {
  name: "DefaultForm",
  components: {
    Form,
  },
  data() {
    return {};
  },
  props: {
    typeForm: String,
    schema: {
      type: Object,
    },
  },
  methods: {
    onsubmit(values) {
      this.$emit("getData", values);
    },
  },
  computed: {
    localeSchema() {
      return this.schema;
    },
  },
};
</script>
<style lang="less" scoped></style>
