import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {return{

  }},
  computed: {
    ...mapGetters({
      checkRouteAuth: "auth/checkRouteAuth",
    }),
    ...mapState({
      films: (state) => state.films.films,
      user: (state) => state.user.userInfo,
    })
  },

  methods: {
    ...mapActions({
      openLoginForm: "auth/openLoginForm",
      addToFavorite: "user/addToFavorite",
      removeFromFavorite: "user/removeFromFavorite",
    }),
    favoriteStatus(val) {
      if (this.user.favorites && this.user.favorites[val] === true) {
        return true;
      } else {
        return false;
      }
    },
    like(val) {
      if (this.checkRouteAuth) {
        this.addToFavorite(val);
      } else {
        this.openLoginForm();
      }
    },
    DisLike(val) {
      this.removeFromFavorite(val);
    },
  },
};
