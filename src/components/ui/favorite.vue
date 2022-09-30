<template>
  <transition>
    <div v-if="isFavorite">
      <div><img :src="Favorite" alt="favorite" @click="dislike" /></div>
    </div>
    <div v-else><img :src="Unfavorite" alt="unfavorite" @click="like" /></div
  ></transition>
</template>

<script>
import Favorite from "@/icons/favorite.png";
import Unfavorite from "@/icons/unfavorite.png";
export default {
  name: "favorite",
  emits: ["dislike", "like"],
  data() {
    return {
      Unfavorite,
      Favorite,
    };
  },
  props: {
    isFavorite: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
    },
  },
  mounted() {
    console.log(this.isFavorite);
  },
  methods: {
    dislike() {
      this.$emit("dislike", this.id);
    },
    like() {
      this.$emit("like", this.id);
    },
  },
};
</script>

<style scoped lang="less">
</style>
