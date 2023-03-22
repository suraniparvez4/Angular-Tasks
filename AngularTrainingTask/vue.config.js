let output = "dist"
// if(process.env.VUE_APP_API_URL === "https://was.broccoli365.com/") {
//   output = "dist-US-ACT"
// }
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },

  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: output,

    compress: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: false,
      ignored: /node_modules/,
    },
    disableHostCheck: true,
    port: process.env.VUE_APP_PORT || 6080,
    // proxy: {
    //   '/api': {
    //     target: "https://was.logintoaskgileadmedical.co.kr/",
    //     changeOrigin: true
    //   }
    // }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule("vue")
  //     .use("vue-loader")
  //     .loader("vue-loader")
  //     .tap(options => {
  //       options.compilerOptions.preserveWhitespace = true;
  //       return options;
  //     });
  // },
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
}
