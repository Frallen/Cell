<template>
  <div class="table-actions">
    <input type="text" class="input" /><button
      class="button"
      @click="visibleForm"
    >
      Добавить запись
    </button>
  </div>
  <div class="table">
    <div class="table-header">
      <div
        class="table-header-item"
        v-for="p in tableHeader"
        :key="Math.random()"
      >
        {{ p }}
      </div>
    </div>
    <div class="table-body" v-show="data">
      <div class="table-row" v-for="item in data" :key="item.id">
        <div class="table-body-item">{{ item.name }}</div>
        <div class="table-body-item">{{ item.slug }}</div>
        <div class="table-body-item">
          <Pen />
          <Close />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pen from "@/icons/pen.vue";
import Close from "@/icons/close.vue";
export default {
  name: "Table",
  components: { Pen, Close },
  emits: ["visible"],
  data() {
    return {};
  },
  props: {
    tableHeader: {
      type: Array,
    },
    data: {
      type: Array,
    },
  },
  mounted() {},
  methods: {
    visibleForm() {
      this.$emit("visible", true);
    },
  },
};
</script>

<style scoped lang="less">
.table {
  margin: 1em 0;
  &-header {
    display: flex;
    justify-content: space-between;
    background: @red;
    text-transform: uppercase;
    color: #fff;
    padding: 10px;
    .br(10px);

    &-item {
      cursor: default;
    }
  }
  &-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2c2c2c;
    padding: 0 10px;
    .br(10px);
    margin: 10px 0;
  }
  &-body {
    max-height: 400px;
    overflow-y: auto;
    &-item {
      color: #fff;
    }
  }
}
.table-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
}
</style>
