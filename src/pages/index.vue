<template>
  <div>
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
          @click="this.$router.push(`/film/${slide.slug}`)"
        >
          <iframe
            width="100%"
            :src="
              'https://www.youtube.com/embed/' +
              slide.video +
              '?autoplay=1&start=8&controls=0&disablekb=1&loop=1&modestbranding=1&enablejsapi=1&playsinline=1&color=white&mute=1&playlist=' +
              slide.video
            "
            :title="slide.title"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img :src="slide.BigPoster" alt="" class="index-slider-img" />
          <div class="index-slider-content">
            <h3>{{ slide.name }}</h3>
            <p>{{ slide.text }}</p>
          </div>
          <Favorite
            @like="like"
            @dislike="DisLike"
            :isFavorite="favoriteStatus(slide.id)"
            :id="slide.id"
            class="favorite"
            v-if="authUser"
          ></Favorite>
        </swiper-slide>
      </swiper>
    </div>
    <h2 class="index-title">Жанры</h2>
    <div class="index-genres">
      <swiper
        class="index-genres-wrapper"
        :modules="modules"
        :slides-per-view="4"
        :space-between="20"
        :navigation="true"
        :breakpoints="breakpointGenres"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="index-genres-item"
          v-for="item in genres"
          :key="item.id"
          @click="this.$router.push(`/genre/${item.slug}`)"
        >
          <img :src="item.genre" :alt="genres.name" />
        </swiper-slide>
      </swiper>
    </div>
    <h2 class="index-title">Новости</h2>
    <div class="index-news">
      <swiper
        class="index-news-wrapper"
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        :navigation="true"
        :breakpoints="breakpointNews"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="index-news-item"
          v-for="item in firstSix"
          :key="item.id"
          @click="this.$router.push(`/news/${item.slug}`)"
        >
          <h4>{{ item.name }}</h4>
          <img :src="item.banner" :alt="item.name" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Pagination } from "swiper";
import { mapActions, mapGetters, mapState } from "vuex";
import Favorite from "@/components/ui/favorite";
import favoritesMixin from "@/mixins/favoritesMixin";

export default {
  name: "indexPage",
  mixins: [favoritesMixin],
  components: {
    Favorite,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      navigation: true,
      breakpointGenres: {
        998: { slidesPerView: 4 },
        767: { slidesPerView: 3 },
        320: { slidesPerView: 1 },
      },
      breakpointNews: {
        998: { slidesPerView: 3 },
        767: { slidesPerView: 2 },
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
  methods: {
    ...mapActions({}),
  },
  mounted() {
    if (window.matchMedia("(max-width: 998px)")) {
      this.navigation = false;
    } else {
      this.navigation = true;
    }
  },
  computed: {
    ...mapState({
      genres: (state) => state.films.genres,
      news: (state) => state.news.news,
    }),
    ...mapGetters({
      timeFilteredNews: "news/timeFilteredNews",
    }),

    firstFive() {
      return this.films.slice(0, 4);
    },
    firstSix() {
      return this.timeFilteredNews.slice(0, 6);
    },
  },
};
</script>

<style lang="less" scoped>
.index-title {
  color: #fff;
  margin-top: 0.7em;
}
.index-slider {
  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
    @media @md {
      display: block;
    }
  }
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
    @media @md {
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      bottom: 5%;
      height: initial;
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
      @media @md {
        font-size: 2em;
      }
    }
    p {
      justify-self: flex-end;
      overflow: hidden;
      .text-eclipse();
      -webkit-line-clamp: 5;
      line-height: 34px;
      @media @lg {
        font-size: 1em;
      }
      @media @md {
        display: none !important;
      }
    }
  }
  &-wrapper {
    height: 35.25vw !important;
    @media @md {
      height: 300px !important;
    }
  }
  &-item {
    .br(10px);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    iframe {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      pointer-events: none;
      width: 100%;
      height: 56.25vw;
      @media @md {
        display: none;
      }
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
    @media @md {
      top: 0;
      height: 100%;
      right: 0;
      z-index: 1;
      background: #00000054;
    }
  }
}
.index-genres {
  &-wrapper {
    height: 270px;
    margin: 2em 0;
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    .br(15px);
    height: 250px;
    font-size: 1.3em;
    text-transform: uppercase;
    letter-spacing: 5px;
    .trs();
    cursor: pointer;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-item:hover {
    box-shadow: 0px 6px 5px 0px #fff;
    .trs();
  }
}
.index-news {
  &-wrapper {
    margin: 2em 0;
    height: 250px;
  }
  &-item {
    overflow: hidden;
    cursor: pointer;
    .br(10px);
    position: relative;
    z-index: 1;
    h4 {
      .text-eclipse();
      -webkit-line-clamp: 3;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 25%;
      left: 0;
      right: 0;
      text-align: center;
      overflow: hidden;
      color: #fff;
      z-index: 2;
      font-size: 2em;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-item::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: #0000007d;
  }
}
.favorite {
  position: absolute;
  right: 2%;
  top: 2%;
  z-index: 5;
  display: block;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>