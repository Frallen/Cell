<template>
  <div>
    {{ label }}
    <input v-bind:type="type" v-model.trim="modelValue" />
  </div>
</template>

<script>
import { toRef } from "vue";
import { useField } from "vee-validate";
export default {
  name: "default-input",

  props: {
    modelValue: [String, Number],
    type: [String],
    label: [String],
    name:[String]
  },
  mounted() {},
};
</script>

<style lang="less" scoped></style>
