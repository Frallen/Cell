<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/ui/navbar";
import { mapActions, mapState } from "vuex";
export default {
  components: { Navbar },
  methods: {
    ...mapActions({
      AuthState:"auth/AuthState"
    }),
  },
  mounted() {
    this.AuthState()
  }
};
</script>

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