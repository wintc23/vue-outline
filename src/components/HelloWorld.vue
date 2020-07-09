<template>
  <div class="example">
    <div class="navigation">
      <div class="title">导航目录</div>
      <outline-tree :treeData="navTree" class="tree">
        <div slot-scope="{ data, parentData, level }">
          <div
            class="node-render-content"
            @click.stop="jumpToAnchor(data.el)">
            {{ data.title }}
          </div>
        </div>
      </outline-tree>
    </div>
    <div
      v-outline="{
        callback: refreshNavTree,
        selectors: ['h2', 'h3', 'h4'],
        exceptSelector: '[un-nav]'
      }" class="content">
      <div ref="editor">
        <TestArticle></TestArticle>
      </div>
    </div>
  </div>
</template>

<script>
import TestArticle from './TestArticle'

export default {
  name: 'HelloWorld',
  components: {
    TestArticle
  },
  props: {
    msg: String
  },
  data () {
    return {
      navTree: []
    }
  },
  methods: {
    refreshNavTree (treeData) {
      this.navTree = treeData
    },
    jumpToAnchor (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }
}
</script>

<style scoped>
.example {
  display: flex;
  height: calc(100vh - 30px);
}

.content {
  border: 1px solid #3361d8;
  margin: 0 20px;
  padding: 40px;
  border-radius: 4px;
  flex: auto;
  overflow: auto;
}

.navigation {
  width: 16rem;
  flex-shrink: 0;
  padding: .5rem;
  border-radius: 2px;
  text-align: left;
  overflow: auto;
}
.title {
  font-size: 1rem;
  border-bottom: 1px solid #c9c9c9;
  margin: .5rem;
}

.node-render-content {
  color: #3361D8;
  user-select: none;
  cursor: pointer;
  margin: 2px 0;
}
.node-render-content:hover {
  text-decoration: underline;
}
.node-render-content:active {
  position: relative;
  left: 1px;
  top: 1px;
}
</style>
