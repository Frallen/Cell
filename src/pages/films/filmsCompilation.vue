<template>
  <template v-if="orderedGenres.length">
    <div>
      <Breadcrumbs></Breadcrumbs>
      <div class="films">
        <div class="films-wrapper">
          <div
            class="films-item"
            v-for="item in orderedGenres"
            :key="item.id"
            @click="this.$router.push(`/film/${item.slug}`)"
          >
            <img v-lazy="item.poster" alt="" />
          </div>
        </div>
      </div></div
  ></template>
  <NotFound v-else></NotFound>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Breadcrumbs from "@/components/breadcrumbs";
import NotFound from "@/components/notFound";

export default {
  name: "filmsCompilation",
  components: { NotFound, Breadcrumbs },
  data() {
    return {};
  },
  mounted() {
    this.FetchGenres().then((p) => this.GetFilmsByGenre(this.$route.params.id));
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

<style scoped lang="less"></style>
