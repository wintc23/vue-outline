import Vue from 'vue'
import App from './App.vue'
import 'simple-vue-tree'
import 'simple-vue-tree/dist/lib/simple-tree.css'

import outline from '@/directives/outline'

Vue.directive('outline', outline)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
