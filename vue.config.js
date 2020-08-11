// 给路径配置别名
module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      },
    },
  },
  devServer:{
    open: true,
    host: 'localhost',
    port: 8080,
  }
}