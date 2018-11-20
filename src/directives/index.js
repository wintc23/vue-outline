import outline from './outline'
import 'simple-vue-tree'
import 'simple-vue-tree/dist/lib/simple-tree.css'

export default {
  install: function (Vue, opts = {}) {
    Vue.directive('outline', outline)
  },
  outline
}
