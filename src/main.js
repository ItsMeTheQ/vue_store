// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from '../node_modules/vuetify'

import 'vuetify/dist/vuetify.min.css'

import store from './vue_store/index'
Vue.use(store)

console.log(store)

Vue.use(Vuetify, {
  theme: {
    primary: '#2a89f7',
    accent: '#2a89f7',
    secondary: '#40393b',
    info: '#2ba8ff',
    warning: '#ff9127',
    error: '#bd0f13',
    success: '#0bd635'
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
