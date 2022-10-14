<template>
  <div class="additional">
    <h5>{{this.title}}</h5>
    <div class="additional-wrapper">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        :navigation="true"
        :breakpoints="breakpointCompilation"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="additional-item"
          v-for="item in randomizedFilms(getFilm(this.$route.params.id).genres)"
          @click="this.$router.push(`/film/${item.slug}`)"
        >
          <img :src="item.poster" :alt="item.name" />
          <Favorite class="favorite"></Favorite>
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
export default {
  name: "compilationSlider",
  components: {
    Favorite,
    Swiper,
    SwiperSlide,
  },
  props:{
    title:{
      type:String
    }
  },
  data() {
    return {
      breakpointCompilation: {
        998: { slidesPerView: 4 },
        767: { slidesPerView: 3 },
        320: { slidesPerView: 1 },
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
      getFilm: "films/getFilm",
      randomizedFilms: "films/randomizedFilms",
    }),
  },
};
</script>

<style scoped lang="less">
.additional {
  h5{
    margin-bottom: 1em;
    color: #fff;
  }
  &-wrapper {
  }
  &-item {
    cursor: pointer;
    position: relative;
    height: auto !important;
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
