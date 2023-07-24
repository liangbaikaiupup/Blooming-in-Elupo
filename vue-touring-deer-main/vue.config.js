/*
 * @Author: xianglutao 294301492@qq.com
 * @Date: 2022-05-13 17:21:04
 * @LastEditors: xianglutao 294301492@qq.com
 * @LastEditTime: 2022-08-06 11:40:56
 * @FilePath: \vue-tour-deer\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')

const name = 'vue tour deer' // page title


module.exports = defineConfig({
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  transpileDependencies: true,
  productionSourceMap: false,
  lintOnSave: true,
  configureWebpack: {
    name: name,
    resolve: {
      fallback: { path: require.resolve('path-browserify') },
    },
  },
  devServer: {
    port: 9530,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    proxy: {
      './': {
        target: 'https://music-two-gamma.vercel.app/',
        // pathRewrite: {
        //   "^/api": "", // 将开头的 '/api' 替换成空字符串（^ 是开头的意思，'^/api' 表示以 /api 开头）
        // },
        secure: false,
        changeOrigin: true,
        ws: false,
      }
    }
  }
})
