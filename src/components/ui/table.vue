<template>
  <div class="table-actions">
    <input type="text" class="input" @input="filterValue" />
    <button class="button" @click="visibleForm">Добавить запись</button>
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
          <img
            :src="Pen"
            alt="pen"
            @click="updateValues(item.id)"
            class="icon"
          />
          <img
            :src="Close"
            alt="close"
            @click="DeleteGenre(item.id)"
            class="icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pen from "@/icons/pen.png";
import Close from "@/icons/close.png";
export default {
  name: "Table",
  emits: ["visible", "updateValues", "DeleteItem", "filterValue"],
  data() {
    return { Pen, Close };
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
    filterValue(e) {
      this.$emit("filterValue", e.currentTarget.value);
    },
    updateValues(val) {
      this.$emit("updateValues", val);
      this.visibleForm();
    },
    visibleForm() {
      this.$emit("visible", true);
    },
    DeleteGenre(val) {
      this.$emit("DeleteItem", val);
    },
  },
};
</script>

<style scoped lang="less">
.table {
  margin: 1em 0;
  &-header {
    background: @red;
    text-transform: uppercase;
    color: #fff;
    padding: 10px;
    .br(10px);

    &-item {
      cursor: default;
    }
    &-item:last-child{
      text-align: end;
    }
  }
  &-row {
    background: #2c2c2c;
    padding:10px;
    .br(10px);
    margin: 10px 0;
  }
  &-body {
    max-height: 400px;
    overflow-y: auto;
    margin-top: 1em;
    &-item {
      color: #fff;
      overflow: hidden;
      max-width: 204px;
      .text-eclipse();
      -webkit-line-clamp: 2;
      svg {
        cursor: pointer;
      }
    }
    &-item:last-child{
      text-align: end;
      max-width: 100%;
    }

  }
  &-body::-webkit-scrollbar {
    width: 10px;
  }
  &-body::-webkit-scrollbar-track {
    background-color: #fff;
    .br(10px);
  }
  &-body::-webkit-scrollbar-thumb {
    background: @red;
    .br(10px);
  }
}
.table-header,
.table-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
}

.table-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
}
.icon {
  cursor: pointer;
}
</style>
