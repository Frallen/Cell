<template>
  <div>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "newsDetail",
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getNews: "news/GetCurrentNews",
    }),
  },
  computed:{
    ...mapState({
      currentNews:state=>state.news.currentNews
    })
  },
  mounted() {
    this.getNews(this.$route.params.id);
  },
};
</script>

<style scoped lang="less"></style>
