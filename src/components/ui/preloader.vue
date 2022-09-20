<template>
  <transition name="preloader">
    <div class="preloader">
      <div class="preloader-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="
            margin: auto;
            background: none;
            display: block;
            shape-rendering: auto;
          "
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            r="18"
            stroke-width="9"
            stroke="#ff0839"
            stroke-dasharray="28.274333882308138 28.274333882308138"
            fill="none"
            stroke-linecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="0 50 50;360 50 50"
            ></animateTransform>
          </circle>
        </svg>
      </div></div
  ></transition>
</template>

<script>
export default {
  name: "preloader",
};
</script>

<style scoped lang="less">
.preloader {
  background: @text;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  &-wrapper {
  }
}
.preloader-enter-active,.preloader-leave-active{
  .trs();
}
.preloader-enter-from {
  opacity: 1;
}
.preloader-leave-to {
  opacity: 0;
}
</style>
