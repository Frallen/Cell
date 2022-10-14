<template>
  <transition name="favorite">
    <div class="favorite">
      <div v-if="isFavorite">
        <img :src="Favorite" alt="favorite" @click="dislike" />
      </div>
      <div v-else>
        <img :src="Unfavorite" alt="unfavorite" @click="like" />
      </div>
    </div>
  </transition>
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
      type: String,
    },
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
.favorite {
  z-index: 2;
  div {
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.preloader-enter-active,
.preloader-leave-active {
  .trs();
}
.preloader-enter-from {
  opacity: 1;
}
.preloader-leave-to {
  opacity: 0;
}
</style>
