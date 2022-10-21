import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({}),
    ...mapState({
      films: (state) => state.films.films,
      user: (state) => state.user.userInfo,
      authUser: (state) => state.auth.user,
    }),
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
      if (this.user) {
        this.addToFavorite(val, this);
      } else {
        this.openLoginForm();
      }
    },
    DisLike(val) {
      this.removeFromFavorite(val, this);
    },
  },
};
