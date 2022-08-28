const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/styles/_variables.less" ;@import "@/styles/_mixins.less";`,
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rule("svg").uses.clear();
    config.module
      .rule("svg1")
      .test(/\.svg$/)
      .use("svg-sprite")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end()
      .include.add(resolve("@/ic0ons"))
      .end();
  },
});
//
