import Vue from 'vue'
import App from './App.vue'
import outline from './index'
Vue.use(outline)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
