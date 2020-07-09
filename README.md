# vue-outline
<a href="./changeLog.md">更新日志（2020.07.09更新）</a>

一个Vue开发小工具，使用非常简单，你可以使用它来提取页面中一篇文章的标题，并生成目录树。
demo效果：https://wintc.top/laboratory/#/outline

## 安装
```
npm install vue-outline
```
或者
```
yarn add vue-outline
```

## 引入
```js
import outline from 'vue-outline'
Vue.use(outline)
```

通过本步骤引入插件，已经完成了两件事情：

- 为Vue全局植入了一个指令v-outline用于监听dom树变化并提取设置的关键标题。

- 为Vue全局植入了一个树组件outline-tree，可用来展示提取的目录。

当然你可以自定义命令和树组件的名字，只需要在Vue.use的时候传入第二个参数：

```js
Vue.use(outline, { directiveName: 'custom-outline-name', treeName: 'custom-tree-name' })
```

这样就可以使用指令v-custom-outline-name和组件custom-tree-name

## 使用

### 使用指令v-outline监听某个dom以及其后代元素，生成树形结构的目录数据:

```html
<template>
  <div
    v-outline="{
      callback: refreshNavTree,
      selectors: ['h2', 'h3'],
      exceptSelector: '[un-nav]'
    }">
    <h2>目录1<h2>
    <h3>目录1-1</h3>
    <div>1212</div>
    <h3>目录1-2</h3>
    <h3>目录1-3</h3>
  </div>
</template>

```

```js
export default {
  data () {
    return {
      navTree: treeData
    }
  },
  methods: {
    refreshNavTree (treeData) {
      this.navTree = treeData
    }
  }
}
```

这样就可以提取到页面中的标题生成目录了。
当然，通过指令值，你可以控制那些dom元素内容作为目录。
指令值为一个对象，对象里各项含义如下：
| 值 | 类型 | 说明 | 必传 | 默认值 |
|---|---|--| --- | --- |
| callback | Function | 接收生成的树形结构数据 | 是 | 无 |
| selectors | Array | 一个选择器的列表，从第一个有效的选择器（即所观察DOM下包含至少一个元素）开始，依次表示第一级标题的选择器、第二级标题的选择器 | 否 | ['h1', 'h2'] |
| exceptSelector | String | 排除掉的选择器 | 否 | 无 |

### 展示目录

你可以选择你喜欢的树组件来展示目录，不过本插件还是内置了一个小巧的树形组件，默认注册为outline-tree,你可以先像下面这样使用树组件：

```html
<template>
  <outline-tree :treeData="navTree" class="tree" ref="tree">
    <div slot-scope="{ data, parentData, level }">
      <div
        class="node-render-content"
        @click.stop="jumpToAnchor(data.el)">
        {{ data.title }}
      </div>
    </div>
  </outline-tree>
</template>
```

```js
export default {
  methods: {
    jumpToAnchor (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }
}
```

该树组件提供了一个作用域插槽，方便你自定义你的目录样式，比如在目录内容前面添加一个展开/折叠的按钮等。
需要给组件传入指令生成的目录数据navTree,同时indent属性用于控制子级目录的缩进。
| props | 类型 | 说明 |
| --- | --- | --- |
| navTree | Array | 插件生成的目录数据，一个树形结构，每一项包含id，title，children三个项。id为唯一标识，title为目录，children为下级目录，也是一个完整的目录数据，其结构是递归的 |
| indent | String | 子级目录的缩进，默认值: '2rem' |

如果你需要展开/折叠子级目录，你可以调用组件的showChildren和hideChildren方法，在dom元素中加入ref="tree"，然后就可以this.$refs.tree.showChildren(id)即可，id为目录数据节点的唯一标识。




你可以从github上clone本项目运行查看demo效果：
------
项目安装：

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

欢迎通过ISSUE或者PR和我一起完善本插件。
