import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zh_cn',
    messages: {
        'zh_cn': require('@/assets/languages/chinese.json'),
        'en_us': require('@/assets/languages/english.json')
    }
})

export default i18n