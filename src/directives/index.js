import Vue from 'vue'
import vueOutline from './outline'
import { simpleTree } from 'simple-vue-tree'
import 'simple-vue-tree/dist/lib/simple-tree.css'

Vue.component('outline-tree', simpleTree)

export default {
  install: function (Vue, opts = {}) {
    Vue.directive('outline', vueOutline)
  }
}
export const outline = vueOutline
