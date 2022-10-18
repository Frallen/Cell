<template>
  <div>
    <Breadcrumbs></Breadcrumbs>
    <div class="grid-container">
      <div class="grid-container-item">
        <div class="news">
          <div class="news-wrapper">
            <div
              class="news-item"
              v-for="item in timeFilteredNews"
              @click="this.$router.push(`/news/${item.slug}`)"
            >
              <div class="news-item-box">
                <img v-lazy="item.banner" :alt="item.name" />
              </div>
              <div class="news-item-text">
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-container-item">
        <Search></Search>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Search from "@/components/search";
import Breadcrumbs from "@/components/breadcrumbs";
export default {
  name: "newsList",
  components: { Breadcrumbs, Search },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      news: (state) => state.news.news,
    }),
    ...mapGetters({
      timeFilteredNews: "news/timeFilteredNews",
    }),
  },
};
</script>

<style scoped lang="less">
.news {
  margin-bottom: 2em;
  &-wrapper {
    margin-top: -15px;
    margin-left: -15px;
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    overflow: hidden;
    cursor: pointer;
    margin-top: 15px;
    margin-left: 15px;
    width: calc(100% / 4 - 15px);
    @media @lg {
      width: calc(100% / 3 - 15px);
    }
    @media @md {
      width: calc(100% / 2 - 15px);
    }
    @media @xs {
      width: 100%;
    }
    background: #fff;
    .br(10px);
    position: relative;
    &-box {
      height: 150px;
      width: 100%;
      overflow: hidden;
      z-index: 2;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &-text {
      padding: 0.8em;
      overflow: hidden;
      z-index: 2;
    }
    h5 {
      .text-eclipse();
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: @black;
      font-size: 1.2em;
    }
  }
}
</style>
