<template>
  <div class="tree-container">
    <tree-node
      v-for="(nodeData, idx) of treeData"
      :nodeData="nodeData"
      :key="idx">
    </tree-node>
  </div>
</template>

<script>
import treeNode from './tree-node'

export default {
  components: {
    treeNode
  },
  props: {
    treeData: {
      type: Array,
      requied: true
    },
    indent: {
      type: String,
      default: '20px'
    }
  },
  data () {
    return {
      isTree: true,
      level: 0,
      componentMap: {}
    }
  },
  methods: {
    registerNodeComponent (id, component) {
      this.componentMap[id] = component
    },
    removeNodeComponent (id) {
      this.componentMap[id] = undefined
    },
    showChildren (id) {
      this.componentMap[id] && this.componentMap[id].showChildren()
    },
    hideChildren (id) {
      this.componentMap[id] && this.componentMap[id].hideChildren()
    }
  }
}
</script>
