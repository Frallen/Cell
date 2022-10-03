<template>
  <div class="favorites" v-if="favorites">
    <div class="favorites-wrapper">
      <div
        class="favorites-item"
        v-for="item in favoritesFilms"
        @click="this.$router.push(`/film/${item.id}`)"
      >
        <img :src="item.poster" alt="" />
        <Favorite class="favorite"></Favorite>
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
    }),
  },
  computed: {
    ...mapState({
      favorites: (state) => state.user.userInfo.favorites,
      films: (state) => state.films.films,
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
    width: calc(100% / 3 - 15px);
  }
  &-item {
    margin-top: 15px;
    height: 300px;
    margin-left: 15px;
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
}
</style>
