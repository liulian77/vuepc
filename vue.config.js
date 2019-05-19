module.exports = {
  devServer: {
     open:true,  //npm start自动打开页面
     proxy:{
      '/api': {
        target: '<url>',//接口
        // ws: true,
        // changeOrigin: true
      }
     }
  }
}