<template>
  <div class="notFound">
      <img :src="NotFound" alt="404" />
      <h3>Данный контент не доступен</h3>
  </div>
</template>

<script>
import NotFound from "@/icons/404.png";
export default {
  name: "NotFound",
  data() {
    return {
      NotFound,
    };
  },
};
</script>

<style scoped lang="less">
.notFound {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 70vh;
  h3 {
    color: #fff;
  }
}
</style>
