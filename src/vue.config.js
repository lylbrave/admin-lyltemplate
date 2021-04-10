module.exports = {
    //基本路径
    publicPath: '/',
    //输出文件目录，一般默认就是dist
    output: 'dist',
    //用于嵌套生成的静态资产
    assetsDir: '',
    //生产环境souceMap,false时生产环境下不显示报错信息
    productionSourceMap: true,
    //webpack配置
    configureWebpack: () => {

    },
    chainWebpack: () => { },
    //css相关配置
    css: {
        //启用css modules
        module: false,
        //是否使用css分离插件
        extract: true,
        //开启css source maps?
        sourceMap: false,
        //css预设器配置项
        loaderOptions: {}
    },
    //webpack-dev-server相关配置
    devServer: {

    },
    pluginIptions: {}
}