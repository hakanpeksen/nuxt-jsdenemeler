import en from '../lang/en-US.js'
import tr from '../lang/tr-TR.js'

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'ENGLISH'
    },
    {
      code: 'tr',
      iso: 'tr-TR',
      name: 'TÜRKÇE'
    }
  ],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, tr }
  }
}
