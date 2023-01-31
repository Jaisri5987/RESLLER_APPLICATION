const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://192.168.52.29:8081"
    //10.30.1.107]
    
  }
})
