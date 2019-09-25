module.exports = {
  lintOnSave: false,
  useEslint: false,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'commom': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'src': '@'
      }
    }
  }
}
