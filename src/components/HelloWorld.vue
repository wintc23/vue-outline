<template>
  <div class="hello">
    <div v-navigate="{
      callback: refreshNavTree,
      selectors: ['h1,ul', 'li,h2']
    }" class="content">
      <h1>{{ msg }}</h1>
      <p>
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <h3>Installed CLI Plugins</h3>
      <ul>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      </ul>
      <h3>Essential Links</h3>
      <ul>
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
      </ul>
      <h3>Ecosystem</h3>
      <ul>
        <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
        <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
        <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
        <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
      </ul>
      <div
        :style="{
          'text-align': 'left',
          display: 'inline-block'
        }">
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
      <simple-tree
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
      </simple-tree>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->

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
/* .tree {

} */
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
