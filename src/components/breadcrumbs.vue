<template>
  <div
    v-for="(matched, idx) in this.$route.matched"
    :key="idx"
    class="breadcrumbs"
  >
    <h4 class="breadcrumbs-item" @click="this.$router.push(matched.path)">
      {{ matched.name }}
    </h4>
    <span v-if="idx != Object.keys(this.$route.matched).length - 1"> / </span>
  </div>
</template>

<script>
export default {
  name: "breadcrumbs",
};
</script>

<style scoped lang="less">
.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  margin: 1em 0;
  &-item {
    text-decoration: none;
    color: #fff;
  }
}
</style>
