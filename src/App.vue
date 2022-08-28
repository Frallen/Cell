<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import "modern-normalize/modern-normalize.css";
html {
  font-size: 16px;
}
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}
body {
  background: #262626;
}
</style>
<script>
import Navbar from "@/components/ui/navbar";
import { mapActions } from "vuex";
export default {
  components: { Navbar },
  methods: {
    ...mapActions({
      LoginStatus: "auth/LoginStatus",
    }),
  },
  mounted() {
    this.LoginStatus();
  },
};
</script>
