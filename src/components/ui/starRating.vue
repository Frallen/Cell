<template>
  <div class="review">
    <span>Оценить на</span>
    <font-awesome-icon
      icon="fa-star"
      class="rating-star"
      v-for="(item, index) in 5"
      :key="index"
      @click="setRating(item)"
      :class="{
        'rating-star-active': index < myRating,
        'rating-star-disabled': isLoading,
      }"
    ></font-awesome-icon>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "starRating",
  props: {
    myRating: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setRating(number) {
      if (!this.isLoading) {
        this.$el.querySelectorAll(".rating-star").forEach((item, index) => {
          item.classList.remove("rating-star-active");
          // debugger
          if (index + 1 <= number) {
            item.classList.add("rating-star-active");
          }
        });
        this.$emit("setRating", number);
      }
    },
  },
  computed: {
    ...mapState({
      isLoading: "user/setLoading",
    }),
  },
};
</script>

<style scoped lang="less">
.review {
  display: flex;
  align-items: center;
  background: #fff;
  .br(10px);
  .rating-star {
    color: #bbbbbb;
    .trs();
    font-size: 2em;
    cursor: pointer;
  }
  .rating-star-active {
    color: #f8a52b;
  }
  .rating-star-disabled {
    color: #f8a52b99 !important;
  }
  .rating-star:hover {
    .trs();
    transform: scale(1.1);
  }
  span {
    margin-right: 10px;
    color: @text;
    font-size: 1.2em;
  }
}
</style>
