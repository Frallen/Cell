<template>
  <div class="index-slider">
    <swiper
      class="index-slider-wrapper"
      :modules="modules"
      :effect="'fade'"
      :slides-per-view="1"
      :space-between="1"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class="index-slider-item"
        v-for="slide in firstFive"
        :key="slide.id"
        @click="this.$router.push(`/films/${slide.id}`)"
        ><img :src="slide.BigPoster" alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Pagination, } from "swiper";
import { mapActions, mapState } from "vuex";
export default {
  name: "indexPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,

      modules: [Navigation, Pagination, EffectFade,Navigation],
    };
  },
  methods: {
    ...mapActions({
      FetchFilms: "films/FetchFilms",
    }),
  },
  mounted() {
    this.FetchFilms();
  },
  computed: {
    ...mapState({
      films: (state) => state.films.films,
    }),
    firstFive() {
      return this.films.slice(0, 4);
    },
  },
};
</script>

<style lang="less" scoped>
.index-slider {
  &-wrapper {
    height: 570px !important;
  }
  &-item {
    .br(10px);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}


</style>
