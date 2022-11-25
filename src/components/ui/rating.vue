<template>
  <div class="rating" @click="showRating" title="Оценить">
    <div class="rating-over">
      <div class="rating-over-number">Рейтинг {{ score ?? 0 }}</div>
      <font-awesome-icon icon="fa-bolt"></font-awesome-icon>
    </div>
    <div class="rating-your" v-if="myRating">
      <div class="rating-over-number">Ваша оценка {{ myRating }}</div>
      <font-awesome-icon icon="fa-star"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "rating",
  emits: ["showRating"],
  props: {
    score: {
      type: Number,
      default: 0,
    },
    myRating: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    showRating() {
      this.$emit("showRating");
    },
  },
};
</script>

<style scoped lang="less">
.rating {
  &-over,
  &-your {
    .br(10px);
    display: flex;
    align-items: center;
    width: fit-content;
    background: #fff;
    padding: 0 10px;
    cursor: pointer;
    z-index: 2;
    &-number {
      font-size: 1.8em;
      margin-right: 10px;
      color: @text;
    }
    .fa-star,.fa-bolt {
      color: #fedb10;
      font-size: 2em;
    }
  }
  &-your {
    margin-top: 1em;
  }
}
</style>
