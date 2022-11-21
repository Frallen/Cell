<template>
  <div class="genres">
    <div class="genres-wrapper">
      <div
        class="genres-item"
        v-for="item in genres"
        :key="item.id"
        @click="this.$router.push(`/genre/${item.slug}`)"
      >
        <img :src="item.genre" :alt="genres.name" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "catalogPage",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      genres: (state) => state.films.genres,
    }),
  },
  methods: {
    ...mapActions({}),
  },
};
</script>

<style scoped lang="less">
.genres {
  margin: 1em 0;
  &-wrapper {
    margin-top: -10px;
    margin-left: -10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media @sm {
      margin-left: 0;
    }
  }
  &-item {
    width: calc(100% / 4 - 10px);
    margin-top: 10px;
    margin-left: 10px;
    overflow: hidden;
    cursor: pointer;
    .br(10px);
    @media @lg {
      width: calc(100% / 3 - 10px);
    }
    @media @md {
      width: calc(100% / 2 - 10px);
    }
    @media @sm {
      width: calc(100%);
      margin-left: 0;
    }
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
