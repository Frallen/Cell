<template>
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
    <div class="table-body">
      <div class="table-body-item"></div>
      <div class="table-body-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <g id="surface209380960">
            <path
              style="
                stroke: none;
                fill-rule: nonzero;
                fill: rgb(89.803922%, 45.09804%, 45.09804%);
                fill-opacity: 1;
              "
              d="M 42.582031 9.066406 L 38.933594 5.417969 C 38.378906 4.859375 37.472656 4.859375 36.917969 5.417969 L 35.199219 7.136719 L 40.863281 12.800781 L 42.582031 11.082031 C 43.140625 10.527344 43.140625 9.625 42.582031 9.066406 "
            />
            <path
              style="
                stroke: none;
                fill-rule: nonzero;
                fill: rgb(100%, 59.607846%, 0%);
                fill-opacity: 1;
              "
              d="M 38.03125 15.632812 L 12.570312 41.09375 L 6.90625 35.429688 L 32.367188 9.96875 Z M 38.03125 15.632812 "
            />
            <path
              style="
                stroke: none;
                fill-rule: nonzero;
                fill: rgb(69.01961%, 74.509805%, 77.254903%);
                fill-opacity: 1;
              "
              d="M 32.363281 9.96875 L 35.195312 7.132812 L 40.863281 12.796875 L 38.03125 15.632812 Z M 32.363281 9.96875 "
            />
            <path
              style="
                stroke: none;
                fill-rule: nonzero;
                fill: rgb(100%, 75.686276%, 2.745098%);
                fill-opacity: 1;
              "
              d="M 6.90625 35.429688 L 5 43 L 12.570312 41.09375 Z M 6.90625 35.429688 "
            />
            <path
              style="
                stroke: none;
                fill-rule: nonzero;
                fill: rgb(21.568628%, 27.843139%, 30.980393%);
                fill-opacity: 1;
              "
              d="M 5.964844 39.171875 L 5 43 L 8.828125 42.035156 Z M 5.964844 39.171875 "
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#F44336"
            d="M21.5 4.5H26.501V43.5H21.5z"
            transform="rotate(45.001 24 24)"
          />
          <path
            fill="#F44336"
            d="M21.5 4.5H26.5V43.501H21.5z"
            transform="rotate(135.008 24 24)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    tableHeader: {
      type: Array,
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
  &-body {
  }
}
</style>
