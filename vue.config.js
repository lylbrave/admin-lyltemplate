const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = "lyl template"; // page title
module.exports = {
  //基本路径
  publicPath: "/",
  //输出文件目录，一般默认就是dist
  outputDir: "dist",
  //用于嵌套生成的静态资产
  assetsDir: "",
  //生产环境souceMap,false时生产环境下不显示报错信息
  productionSourceMap: true,
  //webpack配置
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  chainWebpack: (config) => {
    // svg rule loader
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },

  //css相关配置
  css: {
    //启用css modules
    requireModuleExtension: true,
    //是否使用css分离插件
    extract: true,
    //开启css source maps?
    sourceMap: false,
    //css预设器配置项
    loaderOptions: {
      sass: {
        //使用全局样式变量
        prependData: `@import "@/assets/scss/_variable.scss";`,
      },
    },
  },
  //webpack-dev-server相关配置
  devServer: {
    port: 8080,
    open: true,
  },
  pluginOptions: {},
};
