<template>
  <div></div>
  <iframe
    width="100%"
    height="315"
    :src="'https://www.youtube.com/embed/'+film.video+'?autoplay=1&mute=1'"
    :title="film.title"
    frameborder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "filmsDetail",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      film: (state) => state.films.film,
    }),
  },
  mounted() {
    this.GetFilm(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      GetFilm: "films/GetFilm",
    }),
  },
};
</script>

<style scoped lang="less"></style>
