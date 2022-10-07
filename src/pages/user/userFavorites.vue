<template>
  <Breadcrumbs></Breadcrumbs>
  <div class="films" v-if="favorites">
    <div class="films-wrapper">
      <div
        class="films-item"
        v-for="item in favoritesFilms"
        @click="this.$router.push(`/film/${item.id}`)"
      >
        <img v-lazy="item.poster"  alt="" />
        <Favorite
          @like="like"
          @dislike="DisLike"
          :isFavorite="favoriteStatus(item.id)"
          :id="item.id"
          class="favorite"
        ></Favorite>
      </div>
    </div>
  </div>
</template>
<script>
import Favorite from "@/components/ui/favorite";
import { mapActions, mapState } from "vuex";
import Breadcrumbs from "@/components/breadcrumbs";
export default {
  components: {Breadcrumbs, Favorite },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      GetUserFavorites: "user/GetUserFavorites",
      removeFromFavorite: "user/removeFromFavorite",
      addToFavorite: "user/addToFavorite",
    }),
    like(val) {
      this.addToFavorite(val);
    },
    DisLike(val) {
      this.removeFromFavorite(val);
    },
    favoriteStatus(val) {
      if (this.user.favorites && this.user.favorites[val] === true) {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {
    ...mapState({
      favorites: (state) => state.user.userInfo.favorites,
      films: (state) => state.films.films,
      user: (state) => state.user.userInfo,
    }),
    favoritesFilms() {
      return this.films.filter((p) => this.favorites[p.id]);
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.favorite {
  position: absolute;
  right: 5%;
  top: 2%;
  height: 40px;
  width: 40px;
  cursor: pointer;
}
</style>
