<template>
  <div class="grid-container">
    <div class="grid-container-item">
      <div class="info">
        <div class="info-poster">
          <img :src="getFilm(this.$route.params.id).BigPoster" alt="" />
          <div class="info-short">
            <h3>{{ getFilm(this.$route.params.id).name }}</h3>
            <div class="info-genres">
              <span>Жанры:</span>
              <div class="info-genres-list">
                <div v-for="item in getFilm(this.$route.params.id).genres">
                  {{ item.name }},
                </div>
              </div>
            </div>
            <div class="info-data">
              <div class="info-data-item">
                <span>Страна:</span>{{ getFilm(this.$route.params.id).country }}
              </div>
              <div class="info-data-item">
                <span>Продожительность:</span
                >{{ getFilm(this.$route.params.id).duration }}
              </div>
              <div class="info-data-item">
                <span>Год:</span>{{ getFilm(this.$route.params.id).year }}
              </div>
            </div>
          </div>
          <Favorite
            @like="like"
            @dislike="DisLike"
            :isFavorite="favoriteStatus(getFilm(this.$route.params.id).id)"
            :id="getFilm(this.$route.params.id).id"
            class="favorite"
          ></Favorite>
        </div>
      </div>
      <div class="info-text">
        <h4>Описание</h4>
        <p>{{ getFilm(this.$route.params.id).text }}</p>
      </div>
      <div class="info-video">
        <iframe
          width="100%"
          :src="
            'https://www.youtube.com/embed/' +
            getFilm(this.$route.params.id).video +
            '?mute=1'
          "
          :title="getFilm(this.$route.params.id).title"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <CompilationSlider
        title="Похожее"
        v-if="withoutCurrent.length"
        :data="withoutCurrent"
      ></CompilationSlider>
    </div>
    <div class="grid-container-item">
      <Search></Search>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Search from "@/components/search";
import Favorite from "@/components/ui/favorite";
import favoritesMixin from "@/mixins/favoritesMixin";
import CompilationSlider from "@/pages/films/compilationSlider";
export default {
  name: "filmsDetail",
  components: { CompilationSlider, Favorite, Search },
  mixins: [favoritesMixin],
  data() {
    return {};
  },
  computed: {
    ...mapState({}),
    ...mapGetters({
      getFilm: "films/getFilm",
      similar: "films/similar",
    }),
    //беру айдишники жанров фильма
    genresDetail() {
      return [...this.getFilm(this.$route.params.id).genres.map((p) => p.id)];
    },
    //Из похожих фильмов убираю текущий фильм, чтобы не было дубликата в слайдере
    withoutCurrent() {
      return this.similar(this.genresDetail).filter(
        (p) => p.slug !== this.getFilm(this.$route.params.id).slug
      );
    },
  },
  mounted() {
    console.log(this.getFilm(this.$route.params.id).title);
  },

  methods: {
    ...mapActions({}),
  },
};
</script>

<style scoped lang="less">
.info {
  &-poster {
    .br(10px);
    overflow: hidden;
    position: relative;
    height: 400px;
    color: #fff;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-poster::before {
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
  &-genres {
    span {
      color: hsla(0, 0%, 100%, 0.56);
      font-size: 1.5em;
    }
    &-list {
      color: #fff;
      font-size: 1.5em;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }
  &-short {
    position: absolute;
    left: 5%;
    bottom: 5%;
    z-index: 2;
    h3 {
      margin-bottom: 0.3em;
      @media @lg {
        font-size: 3em;
      }
      @media @md {
        font-size: 2em;
      }
    }
    .info-data {
      margin-bottom: 0.8em;
      span {
        color: hsla(0, 0%, 100%, 0.56);
        margin-right: 0.5em;
      }
      &-item {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        font-size: 1.3em;
        @media @lg {
          font-size: 1em;
        }
      }
    }
  }
}
.info-video {
  margin: 2em 0;
  .br(10px);
  overflow: hidden;
  iframe {
    height: 450px;
  }
}
.info-text {
  h4 {
    color: @text;
    margin-bottom: 16px;
  }
  margin: 1em 0;
  background: #fff;
  .br(10px);
  padding: 10px;
  p {
    color: @text;
  }
}
.favorite {
  position: absolute;
  right: 2%;
  top: 4%;
  z-index: 2;
  display: block;
}
</style>
