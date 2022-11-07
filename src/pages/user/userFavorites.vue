<template>
  <div>
    <Breadcrumbs></Breadcrumbs>
    <div class="films" v-if="favorites">
      <div class="films-wrapper">
        <div
          class="films-item"
          v-for="item in favoritesFilms"
          @click="this.$router.push(`/film/${item.slug}`)"
        >
          <img :src="item.poster" alt="" />
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
    </div>
  </div>
</template>
<script>
import Favorite from "@/components/ui/favorite";
import { mapActions, mapState } from "vuex";
import Breadcrumbs from "@/components/breadcrumbs";
import favoritesMixin from "@/mixins/favoritesMixin";
export default {
  components: { Breadcrumbs, Favorite },
  mixins: [favoritesMixin],
  data() {
    return {};
  },
  methods: {
    ...mapActions({}),
  },
  mounted() {},
  computed: {
    ...mapState({
      favorites: (state) => state.user.userInfo.favorites,
    }),
    favoritesFilms() {
      return this.films.filter((p) => this.favorites[p.id]);
    },
  },
};
</script>
<style lang="less" scoped>
.favorite {
  position: absolute;
  right: 5%;
  top: 2%;
}
</style>
