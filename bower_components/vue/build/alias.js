const path = require('path')

module.exports = {
  vue: path.resolve(__dirname, '../page/platforms/web/entry-runtime-with-compiler'),
  compiler: path.resolve(__dirname, '../page/compiler'),
  core: path.resolve(__dirname, '../page/core'),
  shared: path.resolve(__dirname, '../page/shared'),
  web: path.resolve(__dirname, '../page/platforms/web'),
  weex: path.resolve(__dirname, '../page/platforms/weex'),
  server: path.resolve(__dirname, '../page/server'),
  entries: path.resolve(__dirname, '../page/entries'),
  sfc: path.resolve(__dirname, '../page/sfc')
}
