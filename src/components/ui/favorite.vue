<template>
  <div class="favorite" @click="setFavorite">
    <div>
      <font-awesome-icon
        class="fa-icon"
        :class="{ 'fa-icon-active': isFavorite }"
        icon="fa-heart"
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "favorite",
  emits: ["dislike", "like"],
  data() {
    return {};
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
    setFavorite() {
      this.isFavorite === true
        ? this.$emit("dislike", this.id)
        : this.$emit("like", this.id);
    },
  },
};
</script>

<style scoped lang="less">
.favorite {
  background: @text;
  cursor: pointer;
  .br(10px);
  padding: 10px;
  .fa-icon {
    font-size: 1.5em;
    color: #fff;
    .trs();
  }

  .fa-icon-active {
    color: @red;
    .trs();
  }
}
.favorite:hover {
  .trs();
  .fa-icon {
    color: @red;
    .trs();
  }
}
</style>
