<template>
<Form>
 <slot></slot>
</Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import DefaultButton from "@/components/ui/button";

export default {

  name: "adminForm",
  components: { DefaultButton },
};
</script>

<style scoped lang="less">

</style>