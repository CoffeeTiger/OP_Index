
import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';

import axios from 'axios'
import VueAxios from 'vue-axios'

import i18n from './i18n'


Vue.use(VueAxios, axios)

import { BootstrapVue, IconsPlugin, CardPlugin, ToastPlugin, ModalPlugin, FormPlugin, NavPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CardPlugin)
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(FormPlugin)
Vue.use(NavPlugin)



// router setup
import router from './routes/router';

// plugin setup
Vue.use(DashboardPlugin);

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import Web3 from 'web3'
Vue.prototype.Web3 = Web3

//Vue storage
/* import Storage from 'vue-ls';
const options = {
  namespace: 'vuejs__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'session', // storage name session, local, memory
};
Vue.use(Storage, options); */


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  i18n,
  // mounted(){
  //   document.dispatchEvent(new event('render-event'))
  // }
});

document.addEventListener('touchstart', function(event) {
if (event.touches.length > 1) {
event.preventDefault()
}
})
document.addEventListener('gesturestart', function(event) {
event.preventDefault()
})
