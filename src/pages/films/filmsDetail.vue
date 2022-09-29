<template>
  <div class="info">
    <div class="info-poster">
      <img :src="film.BigPoster" alt="" />
      <div class="info-short">
        <h3>{{ film.name }}</h3>
        <div class="info-genres">
          <span>Жанры:</span>
          <div class="info-genres-list">
            <div v-for="item in film.genres">{{ item.name }},</div>
          </div>
        </div>
        <ul>
          <li><span>Страна:</span>{{ film.country }}</li>
          <li><span>Продожительность:</span>{{ film.duration }}</li>
          <li><span>Год:</span>{{ film.year }}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="info-text">
    <h4>Описание</h4>
    <p>{{ film.text }}</p>
  </div>
  <div class="info-video">
    <iframe
      width="100%"
      :src="'https://www.youtube.com/embed/' + film.video + '?mute=1'"
      :title="film.title"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "filmsDetail",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      film: (state) => state.films.film,
    }),
  },
  mounted() {
    this.GetFilm(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      GetFilm: "films/GetFilm",
    }),
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
    }
  }
  &-short {
    position: absolute;
    left: 5%;
    bottom: 5%;
    z-index: 2;
    h3 {
      margin-bottom: 1em;
    }
    ul {
      margin-bottom: 0.8em;
      span {
        color: hsla(0, 0%, 100%, 0.56);
        font-size: 1.5em;
      }
      li {
        display: flex;
        align-items: center;
        font-size: 1.3em;
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
</style>
