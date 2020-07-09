<template>
  <div class="article">

    <div ref="article">
      本文为测试导航生成文章，内容摘自我的个人博客（<a href="http://wintc.top/article/8">木马小站</a>）
      <p>
        对于＂数组遍历＂这个问题，其实答案很宽泛，关键在于你能不能列举出一定数量的方法以及描述它们之间的区别。本文即介绍一下数组的基本遍历操作和高阶函数。
      </p>
      <h2>
        一、数组基本遍历
      </h2>
      <p>
        本部分介绍４种最常用的遍历方式。
      </p>
      <h3>
        1.for&hellip;in
      </h3>
      <p>
        for&hellip;in其实是对象的遍历方式，并不是数组专有，使用for&hellip;in将循环遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性，其遍历顺序与Object.keys()函数取到的列表一致。
      </p>
      <p>
        该方法会遍历数组中非数字下标的元素，会忽略空元素：
      </p>
      <pre>
        <code class="lang-js">
          let list = [7, 5, 2, 3] list[10] = 1 list['a'] = 1 console.log(JSON.stringify(Object.keys(list)))
          for (let key in list) { console.log(key, list[key]) }
        </code>
      </pre>
      <p>
        输出:
      </p>
      <pre>
        <code class="lang-js">
          &gt; ["0","1","2","3","10","a"] &gt; 0, 7 &gt; 1, 5 &gt; 2, 2 &gt; 3,
          3 &gt; 10, 1 &gt; a, 1
        </code>
      </pre>
      <p>
        这个方法遍历数组是最坑的，它通常表现为有序，但是因为它是按照对象的枚举顺序来遍历的，也就是规范没有规定顺序的，所以具体实现是由着浏览器来的。MDN文档里也明确建议&ldquo;不要依赖其遍历顺序&rdquo;：
        <br />
        <img src="http://file.wintc.top/016da598619245f6965c5dc87fa55f9b" alt="image.png"
        />
      </p>
      <h3>
        2.for&hellip;of
      </h3>
      <p>
        这个方法用于可迭代对象的迭代,用来遍历数组是有序的,并且迭代的是数组的值。该方法不会遍历非数字下标的元素，同时不会忽略数组的空元素：
      </p>
      <pre>
        <code class="lang-js">
          let list = [7, 5, 2, 3] list[5] = 4 list[4] = 5 list[10] = 1 // 此时下标6、7、8、9为空元素
          list['a'] = 'a' for (let value of list) { console.log(value) }
        </code>
      </pre>
      <p>
        输出：
      </p>
      <pre>
        <code class="lang-js">
          &gt; 7 &gt; 5 &gt; 2 &gt; 3 &gt; 5 &gt; 4 &gt; //　遍历空元素 &gt; 　//　遍历空元素
          &gt; 　//　遍历空元素 &gt; 　//　遍历空元素 &gt; 1
        </code>
      </pre>
      <h3>
        3.取数组长度进行遍历
      </h3>
      <p>
        该方法和方法2比较像，是有序的，不会忽略空元素。
      </p>
      <pre>
        <code class="lang-js">
          let list = ['a', 'b', 'c', 'd'] list[4] = 'e' list[10] = 'z' list['a']
          = 0 for (let idx = 0; idx &lt; list.length; idx++) { console.log(idx, list[idx])
          }
        </code>
      </pre>
      <p>
        输出：
      </p>
      <pre>
        <code class="lang-js">
          &gt; 0, a &gt; 1, b &gt; 2, c &gt; 3, d &gt; 4, e &gt; 5, //空元素 &gt; 6,
          &gt; 7, &gt; 8, &gt; 9, &gt; 10, z
        </code>
      </pre>
      <h3>
        4.forEach遍历
      </h3>
      <p>
        forEach是数组的一个高阶函数,用法如下:
      </p>
      <pre>
        <code class="lang-js">
          arr.forEach(callback[, thisArg])
        </code>
      </pre>
      <p>
        参数说明：
      </p>
      <p>
        <strong>
          callback
        </strong>
        <br />
        为数组中每个元素执行的函数，该函数接收三个参数：
      </p>
      <ul>
        <li>
          currentValue
          <br />
          数组中正在处理的当前元素。
        </li>
        <li>
          index 可选
          <br />
          数组中正在处理的当前元素的索引。
        </li>
        <li>
          array 可选
          <br />
          forEach() 方法正在操作的数组。
        </li>
      </ul>
      <p>
        <strong>
          thisArg可选
        </strong>
        <br />
        可选参数。当执行回调函数时用作 this 的值(参考对象)。
      </p>
      <p>
        forEach遍历数组会按照数组下标升序遍历，并且会忽略空元素：
      </p>
      <pre>
        <code class="lang-js">
          let list = ['a', 'b', 'c', 'd'] list[4] = 'e' list[10] = 'z' list['a']
          = 0 list.forEach((value, key, list) =&gt; { console.log(key, value) })
        </code>
      </pre>
      <p>
        输出：
      </p>
      <pre>
        <code class="lang-js">
          &gt; 0, a &gt; 1, b &gt; 2, c &gt; 3, d &gt; 4, e &gt; 10, z
        </code>
      </pre>
      <p>
        有一个很容易忽略的细节，我们都应该尽可能地避免在遍历中取增删数组的元素，否则会出现一些意外的情况，并且不同的遍历方法还会有不同的表现。
      </p>
      <h4>
        for&hellip;of和forEach遍历中删除元素
      </h4>
      <p>
        比如for&hellip;of遍历中删除元素：
      </p>
      <pre>
        <code class="lang-js">
          let list = ['a', 'b', 'c', 'd'] for (let item of list) { if (item ===
          'a') { list.splice(0, 1) } console.log(item) }
        </code>
      </pre>
      <p>
        输出：
      </p>
      <pre>
        <code class="lang-js">
          &gt; a &gt; c &gt; d
        </code>
      </pre>
      <p>
        forEach遍历中删除元素：
      </p>
      <pre>
        <code class="lang-js">
          let list = ['a', 'b', 'c', 'd'] list.forEach((item, idx) =&gt; { if (item
          === 'a') { list.splice(0, 1) } console.log(item) })
        </code>
      </pre>
      <p>
        输出：
      </p>
      <pre>
        <code class="lang-js">
          &gt; a &gt; c &gt; d
        </code>
      </pre>
      <p>
        可以看到，二者表现一致，遍历到ａ的时候，把ａ删除，则ｂ会被跳过，增加元素则略为不同。
      </p>
      <h4>
        for&hellip;of和forEach遍历中增加元素
      </h4>
      <p>
        for&hellip;of遍历中增加元素：
      </p>
      <pre>
        <code class="lang-js">
          let list = ['a', 'b', 'c', 'd'] for (let item of list) { if (item ===
          'a') { list.splice(1, 0, 'e') } console.log(item) }
        </code>
      </pre>
      <p>
        输出：
      </p>
      <pre>
        <code class="lang-js">
          &gt; a &gt; e &gt; b &gt; c &gt; d
        </code>
      </pre>
      <p>
        forEach遍历中增加元素：
      </p>
      <pre>
        <code class="lang-js">
          let list = ['a', 'b', 'c', 'd'] list.forEach((item, idx) =&gt; { if (item
          === 'a') { list.splice(1, 0, 'e') } console.log(item) })
        </code>
      </pre>
      <p>
        输出：
      </p>
      <pre>
        <code class="lang-js">
          &gt; a &gt; e &gt; b &gt; c
        </code>
      </pre>
      <p>
        咦，少了个&rsquo;d&rsquo;!　可以看到，其实forEach遍历次数在一开始就已确定，所以最后的&rsquo;d&rsquo;没有输出出来，这是forEach和for遍历数组的一个区别，另一个重要区别是forEach不可用break,
        continue, return等中断循环，而for则可以。
      </p>
      <p>
        总之，在遍历数组过程中，对数组的操作要非常小心，这一点python、js很相似，因为两门语言中，对象/字典和数组都是引用，都为可变对象。
      </p>
      <h2>
        二、利用高阶函数遍历数组
      </h2>
      <p>
        上面介绍的４种算是比较标准的遍历方式，不过JS中数组还有很多的高阶函数，这些函数其实都可以达到遍历数组的目的，只不过每个函数的应用场景不同，下面简单介绍一下。
      </p>
      <h3>
        1. map
      </h3>
      <p>
        map() 方法参数与forEach完全相同，二者区别仅仅在于map会将回调函数的返回值收集起来产生一个新数组。
        <br />
        比如将数组中每个元素的2倍输出为一个新数组：
      </p>
      <pre>
        <code class="lang-js">
          let list = [1, 2, 3, 4] let result = list.map((value, idx) =&gt; value
          * 2) console.log(result)　//　输出[2,4,6,8]
        </code>
      </pre>
      <h3>
        2.filter
      </h3>
      <p>
        filter() 参数与forEach完全一致，不过它的callback函数应该返回一个真值或假值。filter() 方法创建一个新数组,
        新数组包含所有使得callback返回值为真值（Truthy，与true有区别）的元素。
        <br />
        比如过滤数组中的偶数：
      </p>
      <pre>
        <code class="lang-js">
          let list = [1, 2, 3, 4] let result = list.filter((value, idx) =&gt; value
          % 2 === 0) console.log(result) // 输出［2,4］
        </code>
      </pre>
      <h3>
        3. find/findIndex
      </h3>
      <p>
        find() 方法返回数组中使callback返回值为Truthy的第一个元素的值，没有则返回undefined。使用非常简单，比如找出数组中第一个偶数：
      </p>
      <pre>
        <code class="lang-js">
          let list = ['1', '2', '3', '4'] let result = list.find(value =&gt; value
          % 2 === 0) console.log(result) // 输出 2
        </code>
      </pre>
      <p>
        findIndex()方法与find方法很类似,只不过findIndex返回使callback返回值为Truthy的第一个元素的索引，没有符合元素则返回-1。比如找出数组中第一个偶数的下标：
      </p>
      <pre>
        <code class="lang-js">
          let list = [1, 2, 3, 4] let result = list.findIndex(value =&gt; value
          % 2 === 0) console.log(result)　// 输出 1
        </code>
      </pre>
      <h3>
        4.every/some
      </h3>
      <p>
        两个函数接收参数都与以上函数相同，返回都是布尔值。every用于判断是否数组中每一项都使得callback返回值为Truthy，some用于判断是否至少存在一项使得callback元素返回值为Truthy。
      </p>
      <pre>
        <code class="lang-js">
          let list = [1, 2, 3, 4] // 判断数组中是否每个元素小于10 let result = list.every(value
          =&gt; { return value &lt; 10 }) console.log(result) // 输出true //　判断是否每个元素大于2
          result = list.every(value =&gt; { return value &gt; 2 }) console.log(result)
          // 输出false // 判断是数组中否存在1 result = list.some(value =&gt; { return value
          === 1 }) console.log(result) // 输出true // 判断数组中是否存在大于10的数 result = list.some(value
          =&gt; { return value &gt; 10 }) console.log(result) // 输出false
        </code>
      </pre>
      <h3>
        5.reduce/reduceRight 累加器
      </h3>
      <p>
        参数与其它函数有所不同：
        <br />
        <strong>
          callback
        </strong>
        <br />
        执行数组中每个值的函数，包含四个参数：
      </p>
      <ul>
        <li>
          <p>
            accumulator
            <br />
            累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。
          </p>
        </li>
        <li>
          <p>
            currentValue
            <br />
            数组中正在处理的元素。
          </p>
        </li>
        <li>
          <p>
            currentIndex 可选
            <br />
            数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则为1。
          </p>
        </li>
        <li>
          <p>
            array 可选
            <br />
            调用reduce()的数组
          </p>
        </li>
      </ul>
      <p>
        <strong>
          initialValue可选
        </strong>
        <br />
        作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce
        将报错。
      </p>
      <p>
        reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值，而reduceRight只是遍历顺序相反而已。
      </p>
      <p>
        比如很常见的一个需求是，把一个如下结构的list变成一个树形结构，使用forEach和reduce可以轻松实现。
        <br />
        列表结构：
      </p>
      <pre>
        <code class="lang-js">
          let list = [ { id: 1, parentId: '' }, { id: 2, parentId: '' }, { id: 3,
          parentId: 1 }, { id: 4, parentId: 2, }, { id: 5, parentId: 3 }, { id: 6,
          parentId: 3 } ]
        </code>
      </pre>
      <p>
        树形结构：
      </p>
      <pre>
        <code class="lang-js">
          [ { "id":1, "parentId":"", "children":[ { "id":3, "parentId":1, "children":[
          { "id":5, "parentId":3 }, { "id":6, "parentId":3 } ] } ] }, { "id":2, "parentId":"",
          "children":[ { "id":4, "parentId":2 } ] } ]
        </code>
      </pre>
      <p>
        利用reduce和forEach实现list转为树形结构：
      </p>
      <pre>
        <code class="lang-js">
          function listToTree(srcList) { let result = [] // reduce收集所有节点信息存放在对象中，可以用forEach改写，不过代码会多几行
          let nodeInfo = list.reduce((data, node) =&gt; (data[node.id] = node, data),
          {}) 　// forEach给所有元素找妈妈 srcList.forEach(node =&gt; { if (!node.parentId)
          { result.push(node) return } let parent = nodeInfo[node.parentId] parent.children
          = parent.children || [] parent.children.push(node) }) return result }
        </code>
      </pre>
      <p>
        以上即为本文围绕数组遍历介绍的数组基本操作。这些高阶函数其实都可以用于数组遍历（如果想强行遍历的话，比如some的callback恒返回false），不过实际使用中应该根据不同的需求选用不同的方法。
      </p>
      <p>
        至此，面试中遇到&ldquo;数组遍历有多少种方法？&rdquo;这种问题，你可以回答&ldquo;10种以上&rdquo;了，毕竟，本文介绍了12种&hellip;
      </p>
      <p>
      </p>
      <p>
        最后，JS其实是一门特别愚蠢的语言，有时候你交给它的事情，它不会办不说，竟然还会骂人！不信？控制台输入下面的算式试试：
      </p>
      <pre>
        <code class="lang-js">
          (![]+{})[-~!+[]^-~[]]+([]+{})[-~!![]]
        </code>
      </pre>
      <h2>
        Just for fun. 别太认真~,~
      </h2>
      <p>
        本文原创，首发于我的个人网站：
        <a href="article/8" title="JS数组遍历有哪些方式">
          http://wintc.top/article/8
        </a>
        <a href="article/4">
        </a>
        ，转载请注明出处。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.timer = setInterval(() => {
      let div = document.createElement('h2')
      div.innerText = '动态插入的h2标题'
      let div2 = document.createElement('h2')
      div2.setAttribute('un-nav', '')
      div2.innerText = '动态插入的h2标签，不会出现在导航栏，它被排除了'
      this.$refs.article.appendChild(div)
      this.$refs.article.appendChild(div2)
    }, 3000)
  },
  beforeDestroy () {
    this.timer && clearInterval(this.timer)
  }
}
</script>

<style scoped>
.article {
  text-align: left;
  padding: 20px;
}
</style>