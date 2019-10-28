import vueOutline from '@/directives'
import tree from '@/components/tree'

export default {
  install: function (Vue, opts = {}) {
    let { directiveName = 'outline', treeName = 'outline-tree' } = opts
    Vue.directive(directiveName, vueOutline)
    Vue.component(treeName, tree)
  }
}
export const outline = vueOutline
