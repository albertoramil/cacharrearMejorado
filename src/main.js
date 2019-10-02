import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
Vue.config.productionTip = false



import axios from 'axios'



Vue.prototype.$http = axios
Vue.prototype.$axios = axios


new Vue({
  router,
  store,vuetify,
  render: h => h(App)
}).$mount('#app')


Vue.prototype.$apiURL = process.env.API_URL