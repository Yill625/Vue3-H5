// vue.config.js
module.exports = {
  // 保存时输出错误在控制台
  lintOnSave: true,
  // 输出错误在浏览器
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
