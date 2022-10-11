<template>
  <div class="search">
    <div class="search-box" :class="{ showResults: show }">
      <div class="search-form">
        <input v-model="search" />
        <img :src="WhiteClose" alt="close" class="clear" @click="clear" />
        <img
          :src="ArrowDown"
          alt="arrow"
          class="arrow"
          :class="{ rotate: show }"
          @click="ShowHide"
        />
      </div>
      <div class="search-results">
        <div
          class="search-results-item"
          v-for="item in searchGetter(search)"
          @click="redirect(item)"
        >
          <img v-lazy="item.poster" v-if="item.poster" />
          <img v-lazy="item.photo" v-else-if="item.photo" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ArrowDown from "@/icons/arrowDown.png";
import WhiteClose from "@/icons/whiteClose.png";
export default {
  name: "search",
  data() {
    return {
      search: "",
      show: false,
      ArrowDown,
      WhiteClose,
    };
  },
  watch: {
    search() {
      this.show = true;
    },
  },
  methods: {
    redirect(item) {
      if (item.poster) {
        this.$router.push(`/film/${item.slug}`);
      } else if (item.photo) {
        this.$router.push(`/actor/${item.slug}`);
      }
    },
    ShowHide() {
      this.show ? (this.show = false) : (this.show = true);
    },
    clear() {
      this.search = "";
    },
  },
  computed: {
    ...mapState({}),
    ...mapGetters({
      searchGetter: "films/search",
    }),
  },
};
</script>

<style scoped lang="less">
.search-box {
  .trs();
  @media @lg {
    max-height: 45px;
    overflow: hidden;
  }
}
.search {
  position: sticky;
  top: 10%;
  &-form {
    position: relative;
    input {
      .br(25px);
      font-size: 1em;
      color: #fff;
      outline: none;
      border: none;
      padding: 0.6em 1.3em;
      padding-right: 6em;
      display: block;
      background: #333;
      width: 100%;
    }
    .arrow {
      display: none;
      position: absolute;
      right: 2%;
      top: 10%;
      cursor: pointer;
      .trs();
      @media @lg {
        display: block;
      }
    }
  }

  &-results {
    margin-top: 1.3em;
    max-height: 355px;
    overflow: auto;
    &-item {
      display: flex;
      align-items: center;
      margin-top: 1em;
      cursor: pointer;
      p {
        font-weight: 500;
        color: #fff;
        overflow: hidden;
        margin: 0;
        margin-left: 1em;
        .text-eclipse();
        -webkit-line-clamp: 1;
      }
      img {
        height: 50px;
        width: 50px;
        .br(10px);
        overflow: hidden;
        object-fit: cover;
      }
    }
  }
  &-results::-webkit-scrollbar {
    width: 10px;
  }
  &-results::-webkit-scrollbar-track {
    background-color: #fff;
    .br(10px);
  }
  &-results::-webkit-scrollbar-thumb {
    background: @red;
    .br(10px);
  }
}
.showResults {
  overflow: visible;
  max-height: max-content;
  .trs();
}
.rotate {
  transform: rotate(180deg);
  .trs();
}
.clear {
  position: absolute;
  right: 8%;
  top: 10%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  .trs();
  @media @sm {
    right: 10%;
  }
  @media @xs {
    right: 13%;
  }
}
</style>
