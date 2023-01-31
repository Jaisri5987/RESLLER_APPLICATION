const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://10.30.1.107:8081"
    //10.30.1.107
    //192.168.52.29
    
  }
})
