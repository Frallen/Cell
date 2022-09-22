<template>
  <div class="index-slider">
    <swiper
      class="index-slider-wrapper"
      :modules="modules"
      :effect="'fade'"
      :slides-per-view="1"
      :space-between="1"
      :navigation="navigation"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class="index-slider-item"
        v-for="slide in firstFive"
        :key="slide.id"
        @click="this.$router.push(`/films/${slide.id}`)"
      >
        <iframe
          width="100%"
          :src="
            'https://www.youtube.com/embed/' +
            slide.video +
            '?autoplay=1&controls=0&disablekb=1&loop=1&modestbranding=1&enablejsapi=1&playsinline=1&color=white&mute=1&playlist=' +
            slide.video
          "
          :title="slide.title"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="index-slider-content">
          <h3>{{ slide.name }}</h3>
          <p>{{ slide.text }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Pagination } from "swiper";
import { mapActions, mapState } from "vuex";

export default {
  name: "indexPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      navigation: true,
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
  methods: {
    ...mapActions({
      FetchFilms: "films/FetchFilms",
    }),
  },
  mounted() {
    this.FetchFilms();
    if (window.matchMedia("(max-width: 998px)")) {
      this.navigation = false;
    } else {
      this.navigation = true;
    }
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
  &-content {
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 5%;
    max-width: 500px;
    z-index: 5;
    @media @lg {
      max-width: 320px;
    }
    h3,
    p {
      color: #fff;
    }
    h3 {
      margin-bottom: 2em;
      @media @lg {
        font-size: 1.2em;
      }
    }
    p {
      justify-self: flex-end;
      overflow: hidden;
      .text-eclipse();
      -webkit-line-clamp: 5;    line-height: 34px;
      @media @lg {
        font-size: 1em;
      }
    }
  }
  &-wrapper {
    height: 35.25vw !important;
  }
  &-item {
    .br(10px);
    position: relative;
    overflow: hidden;

    iframe {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      pointer-events: none;
      width: 100%;
      height: 56.25vw;
    }
  }
  &-item::before {
    width: 100%;
    content: "";
    position: absolute;
    top: 0;
    bottom: -1px;
    right: 0;
    z-index: 1;
    background: linear-gradient(
      90deg,
      #000 3.31%,
      rgba(0, 0, 0, 0.99) 7.71%,
      rgba(0, 0, 0, 0.96) 12.11%,
      rgba(0, 0, 0, 0.91) 16.51%,
      rgba(0, 0, 0, 0.85) 20.91%,
      rgba(0, 0, 0, 0.76) 25.31%,
      rgba(0, 0, 0, 0.67) 29.71%,
      rgba(0, 0, 0, 0.55) 34.11%,
      rgba(0, 0, 0, 0.44) 38.52%,
      rgba(0, 0, 0, 0.33) 42.92%,
      rgba(0, 0, 0, 0.23) 47.32%,
      rgba(0, 0, 0, 0.15) 51.72%,
      rgba(0, 0, 0, 0.08) 56.12%,
      rgba(0, 0, 0, 0.03) 60.52%,
      rgba(0, 0, 0, 0.01) 64.92%,
      transparent 69.32%
    );
  }
}
</style>
