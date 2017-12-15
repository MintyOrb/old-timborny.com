import Vue from 'vue'
import router from './router'
import App from './App.vue'
import filter from './utils/filter'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-50613674-4',
  router
})

router.beforeEach((to, from, next) => {
  document.title = 'Tim Borny - ' + to.name || 'home'
  next()
})

Vue.component('icon', Icon)

// setup Vue filter
filter(Vue)

// whether to allow vue-devtools inspection
// false in production builds
Vue.config.devtools = process.env.NODE_ENV !== 'production'

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export { app, router }
