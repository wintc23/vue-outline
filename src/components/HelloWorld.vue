<template>
  <div class="hello">
    <div v-outline="{
      callback: refreshNavTree,
      selectors: ['h1', 'h2'],
      exceptSelector: '[un-nav]'
    }" class="content">
      <div>
        <h1>一级标题1</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题2</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题3</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题4</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题5</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题7</h1>
        <h1>一级标题1</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题2</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题3</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题4</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题5</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题7</h1>
        <h1>一级标题1</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题2</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题3</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题4</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题5</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题7</h1>
        <h1>一级标题1</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题2</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题3</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题4</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题5</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题7</h1>
        <h1>一级标题1</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题2</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题3</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题4</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题5</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题7</h1>
        <h1>一级标题1</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题2</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题3</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题4</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题5</h1>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h2>二级标题</h2>
        <div :style="{ margin: '.5rem 2rem' }">内容不出现在导航</div>
        <h1>一级标题7</h1>
      </div>
    </div>
    <div class="navigation">
      <div class="title">导航目录</div>
      <outline-tree
        :treeData="navTree"
        :expand="false"
        class="tree">
        <div slot-scope="{ data, parentData }">
          <div
            class="node-render-content"
            @click.stop="jumpToAnchor(data.id)">
            {{ data.title }}
          </div>
        </div>
      </outline-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
    jumpToAnchor (id) {
      let element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      }
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  display: flex;
}
.content {
  flex: auto;
  overflow: auto;
}
.navigation {
  width: 12rem;
  border: 1px solid #a2a2a2;
  padding: .5rem;
  border-radius: 2px;
  position: fixed;
  right: 2rem;
  top: 0;
  bottom: 0;
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
