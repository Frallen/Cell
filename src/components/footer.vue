<template>
  <div class="footer">
    <div class="section-container">
      <div class="footer-wrapper">
        <div class="footer-logo" @click="this.$router.push('/')">
          <img :src="Logo" alt="" />
          <h5>Cell</h5>
        </div>
        <div class="copyright">
          <p>Все права защищены {{ Today }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/icons/logo.png";
import moment from "moment";
export default {
  name: "FooterComponent",
  data() {
    return {
      Logo,
      Today: moment().format("YYYY"),
    };
  },
};
</script>

<style scoped lang="less">
.footer {
  background: #fff;
  .section-container{
    padding: 1vw;
  }
  &-wrapper,
  &-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-logo {
    cursor: pointer;
  }
  &-wrapper {
    width: 100%;
    h5 {
    }
    p {
      margin: 0;
    }
  }
}
</style>
