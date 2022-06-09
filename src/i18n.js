import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  'en-uk': require('./assets/i18n/en-uk'),
  'en-us': require('./assets/i18n/en-us'),
  'zh': require('./assets/i18n/zh'),
}

let langLocal = localStorage.getItem('lang')
if(!(langLocal == undefined || langLocal==null ||langLocal=='' )){
  /* console.info('--------lang='+ langLocal +'-------') */
} else {
  langLocal = 'en-us'
}

const i18n = new VueI18n({
    locale: langLocal,
    messages: messages
})
export default i18n
