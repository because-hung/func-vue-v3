const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    i18n: {
      locale: "zh-TW",
      fallbackLocale: "zh-TW",
      localeDir: "locales",
      enableInSFC: true
    }
  }
})
