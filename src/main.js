import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';
import vuetify from './plugins/vuetify';
import VueLazyload from 'vue-lazyload'
import VueNumber from 'vue-number-animation'
import VModal from 'vue-js-modal'
import VueMobileDetection from 'vue-mobile-detection'

Vue.use(VueMobileDetection)
Vue.use(VModal,
  {dynamicDefaults: {
    draggable: true,
    resizable: true,
    height: 'auto'
  }
})
Vue.use(VueNumber)
Vue.use(VueLazyload)
Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-177609629-1',
  router
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
