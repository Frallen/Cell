<template>
  <q-select
    class="form-item field"
    multiple
    :options="options.map((p) => p.name)"
    :label="label"
    v-model="value"
    emit-value
    :error-message="errorMessage"
    :error="!!errorMessage"
  />
</template>
<script setup>
import {toRef } from "vue";
import { useField } from "vee-validate";
const props = defineProps({
  values: {
    type: Array,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
});
let { errorMessage, value } = useField(toRef(props, "name"));
</script>

<style scoped lang="less">
.field {
  min-width: 200px;
}
.q-field--with-bottom {
  padding-bottom: 0 !important;
}
.q-field__inner {
  margin-top: 10px;
}
</style>
