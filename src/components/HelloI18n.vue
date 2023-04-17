<script>
import { useI18n } from 'vue-i18n'
export default {
  name: 'App',
  setup () {
    const { t, locale } = useI18n()
    return {
      t,
      locale
    }
  }
}
</script>

<template>
  <nav>
    <select v-model="locale">
      <option>zh-TW</option>
      <option>en-US</option>
      <option>ja-JP</option>
    </select>
  </nav>
  <p>{{ t('header') }}</p>
  <p>{{ t('select_language') }}</p>
  <p>{{ t('change_language') }}</p>
  <p>{{ t('locale_en') }}</p>
  <p>{{ t('please_select') }}</p>
  <p>{{ t('locale_zh_tw') }}</p>
  <p>{{ t('locale_jp') }}</p>
</template>
