import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import zh from './locales/zh-tw.js'
import en from './locales/en-US.js'
import ja from './locales/ja-JP.js'
const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-TW': zh,
    'en-US': en,
    'ja-JP': ja
  }
})
const app = createApp(App)

app.use(i18n).use(store).use(router).mount('#app')
