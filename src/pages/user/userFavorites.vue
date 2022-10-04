<template>
  <div class="favorites" v-if="favorites">
    <div class="favorites-wrapper">
      <div
        class="favorites-item"
        v-for="item in favoritesFilms"
        @click="this.$router.push(`/film/${item.id}`)"
      >
        <img :src="item.poster" alt="" />
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
export default {
  components: { Favorite },
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
.favorites {
  margin: 1em 0;
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: -15px;
    margin-left: -15px;
  }
  &-item {
    width: calc(100% / 6 - 15px);
    margin-top: 15px;
    margin-left: 15px;
    cursor: pointer;
    @media @lg {
      width: calc(100% / 4 - 15px);
    }
    @media @md {
      width: calc(100% / 2 - 15px);
    }
    @media @xs {
      width: 100%
    }
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.favorite {
  position: absolute;
  right: 5%;
  top: 2%;
  height: 40px;
  width: 40px;
  cursor: pointer;
}
</style>
