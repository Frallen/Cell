<template>
  <div class="films">
    <div class="films-wrapper">
      <div
        class="films-item"
        v-for="item in orderedGenres"
        :key="item.id"
        @click="this.$router.push(`/film/${item.id}`)"
      >
        <img :src="item.poster" alt="" />
      </div>
    </div>
  </div>
  <!-- <div
    v-intersection="GetFilmsByGenre(this.$route.params.id)"
    class="observer"
  ></div>-->
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "filmsCompilation",
  data() {
    return {};
  },
  mounted() {
    this.FetchGenres().then((p) =>
      this.GetFilmsByGenre(this.$route.params.id)
    );

  },
  methods: {
    ...mapActions({
      GetFilmsByGenre: "films/GetFilmsByGenre",
      FetchGenres: "films/FetchGenres",
    }),
  },
  computed: {
    ...mapState({
      orderedGenres: (state) => state.films.orderedGenres,
    }),
  },
};
</script>

<style scoped lang="less">
.films {
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-top: -10px;
  }
  &-item {
    margin-left: 10px;
    margin-top: 10px;
    width: calc(100% / 4);
    .br(10px);
    cursor: pointer;
    .trs();
    @media @lg {
      width: calc(100% / 3);
    }
    @media @md {
      width: calc(100% / 2);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-item:hover {
  }
}
</style>
