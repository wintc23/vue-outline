import Vue from 'vue'
import App from './App.vue'
import 'simple-vue-tree'
import 'simple-vue-tree/dist/lib/simple-tree.css'

import navigate from '@/directives/navigate'

Vue.directive('navigate', navigate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
