<template>
  <div class="grid-container">
    <div class="grid-container-item">
      <div class="news">
        <div
          class="news-img"
          :style="{
            background: `url(${GetCurrentNews(this.$route.params.id).banner})`,
          }"
          style="background-repeat: no-repeat; background-size: cover"
        >
          <h2 class="news-title">
            {{ GetCurrentNews(this.$route.params.id).name }}
          </h2>
        </div>
        <div class="news-content">
          <div v-html="GetCurrentNews(this.$route.params.id).text"></div>
        </div>
      </div>
    </div>
    <div class="grid-container-item">
      <Search></Search>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Search from "@/components/search";
export default {
  name: "newsDetail",
  components: { Search },
  data() {
    return {};
  },
  methods: {
    ...mapActions({}),
  },
  computed: {
    ...mapState({}),
    ...mapGetters({
      GetCurrentNews: "news/GetCurrentNews",
    }),
  },
};
</script>

<style scoped lang="less">
.news {
  background: #fff;
  overflow: hidden;
  .br(10px);
  &-img {
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  &-img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: #0000007d;
  }
  &-title {
    z-index: 2;
    color: #fff;
    text-align: center;
    font-weight: 500;
    @media @lg {
      font-size: 2.5em;
    }
    @media @md {
      font-size: 2em;
      line-height: 2em;
    }
    @media @xs {
      font-size: 1.4em;
    }
  }
  &-content {
    padding: 1em;
  }
  // Идет вставка сырого html необходимо использовать ::v-deep для применения стилей
  ::v-deep .ql-video {
    .br(10px);
    overflow: hidden;
    width: 100%;
  }
}

::v-deep h1,
::v-deep h2,
::v-deep h3,
::v-deep h4,
::v-deep h5,
::v-deep h6 {
  margin: 10px 0;
}
</style>
