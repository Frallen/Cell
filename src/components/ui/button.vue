<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "Default-button",
  props: {},
};
</script>

<style lang="less" scoped>
button {
  outline: none;
  width: 100%;
  background: @orange;
  border: 1px solid transparent;
  text-transform: uppercase;
  border-radius: 6px;
  padding: 10px 15px;
  cursor: pointer;
  display: inline-block;
  color: #fff;
  .trs();
}
button:hover {
  border: 1px solid #fff;
  .trs();
}
</style>
