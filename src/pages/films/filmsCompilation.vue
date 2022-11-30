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
            v-lazy-container="{ selector: 'img' }"
          >
            <img :data-src="item.poster" alt="" />
            <Favorite
              @like="like"
              @dislike="DisLike"
              :isFavorite="favoriteStatus(item.id)"
              :id="item.id"
              class="favorite"
              v-if="authUser"
            ></Favorite>
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
import Favorite from "@/components/ui/favorite";
import favoritesMixin from "@/mixins/favoritesMixin";

export default {
  name: "filmsCompilation",
  components: { Favorite, NotFound, Breadcrumbs },
  mixins: [favoritesMixin],
  data() {
    return {};
  },
  mounted() {
    this.FetchGenres(this).then((p) =>
      this.GetFilmsByGenre(this.$route.params.id, this)
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
.favorite {
  position: absolute;
  right: 2%;
  top: 4%;
  z-index: 2;
  display: block;
}
</style>
