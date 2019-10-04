import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false



import axios from 'axios'



Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB-0SUyRksj2aPf0oK5yG59Uw2-q4aHDRU",
    libraries: "places" // necessary for places input
  }
});


 
Vue.prototype.$http = axios
Vue.prototype.$axios = axios


new Vue({
  router,
  store,vuetify,
  render: h => h(App)
}).$mount('#app')


Vue.prototype.$apiURL = process.env.API_URL