<template>
  <Breadcrumbs></Breadcrumbs>
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
</template>

<script>
import { mapActions, mapState } from "vuex";
import Breadcrumbs from "@/components/breadcrumbs";

export default {
  name: "filmsCompilation",
  components: {Breadcrumbs},
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

</style>
