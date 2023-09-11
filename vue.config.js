const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.twse.com.tw',
        ws: true,//代理websocked
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/rwd/zh/afterTrading/STOCK_DAY'
        }
      }
    },
    port: 8080
  }
})