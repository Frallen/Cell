<template>
  <div class="additional">
    <h5>{{ this.title }}</h5>
    <div class="additional-wrapper">
      <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="20"
        :navigation="true"
        :breakpoints="breakpointCompilation"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="additional-item"
          v-for="item in data"
          @click="this.$router.push(`/film/${item.slug}`)"
        >
          <img :src="item.poster" :alt="item.name" />
          <Favorite @like="like"
                    @dislike="DisLike"
                    :isFavorite="favoriteStatus(item.id)"
                    :id="item.id"
                    class="favorite"
                    v-if="authUser"></Favorite>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Pagination } from "swiper";
import Favorite from "@/components/ui/favorite";
import { mapGetters, mapState } from "vuex";
import favoritesMixin from "@/mixins/favoritesMixin";
export default {
  name: "compilationSlider",
  components: {
    Favorite,
    Swiper,
    SwiperSlide,
  },
  mixins:[favoritesMixin],
  props: {
    title: {
      type: String,
    },
    data: {
      type: Array,
    },
  },
  data() {
    return {
      breakpointCompilation: {
        998: { slidesPerView: 5 },
        767: { slidesPerView: 4 },
        320: { slidesPerView: 2 },
      },
    };
  },
  setup() {
    const swiperSlide = useSwiperSlide();
    const onSwiper = (swiper) => {};
    const onSlideChange = (swiper) => {
      //console.log( swiper.slides[swiper.realIndex]);
    };
    return {
      onSwiper,
      onSlideChange,
      swiperSlide,
      modules: [Navigation, Pagination, EffectFade, Navigation],
    };
  },
  computed: {
    ...mapState({}),
    ...mapGetters({
      getFilm:"films/getFilm"
    }),
  },
};
</script>

<style scoped lang="less">
.additional {
  h5 {
    margin-bottom: 1em;
    color: #fff;
  }
  &-wrapper {
  }
  &-item {
    cursor: pointer;
    position: relative;
    height: auto !important;
    .br(10px);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.favorite {
  position: absolute;
  right: 2%;
  top: 2%;
}
</style>
