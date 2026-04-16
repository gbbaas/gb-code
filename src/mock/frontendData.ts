import type { KnowledgePoint, ProgrammingCourse, LanguageCourseGroup } from '@/types/course'
import { languageBasicCourse } from './backendData'

// 前端技术类型
export type FrontendTech = 'html' | 'vue' | 'react' | 'android' | 'ios' | 'harmonyos' | 'uniapp' | 'miniprogram' | 'electron' | 'qt'

// ========== 前端知识点库 ==========

// 计算知识点
const kpCalculate: KnowledgePoint = {
  id: 'fe-calculate',
  title: '计算',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '对数值进行加减乘除运算' },
    { id: 'b2', type: 'table', headers: ['运算符', '含义', '示例', '结果'], rows: [
      ['+', '加法', '1 + 1', '2'],
      ['-', '减法', '2 - 1', '1'],
      ['*', '乘法', '2 * 2', '4'],
      ['/', '除法', '4 / 2', '2']
    ]}
  ],
  codeImpl: {
    html: [{ id: 'c1', filename: 'index.html', code: `<script>
console.log(1 + 1)   // 2
console.log(2 - 1)   // 1
console.log(2 * 2)   // 4
console.log(4 / 2)   // 2
</script>` }],
    javascript: [{ id: 'c1', filename: 'main.js', code: `console.log(1 + 1)   // 2\nconsole.log(2 - 1)   // 1\nconsole.log(2 * 2)   // 4\nconsole.log(4 / 2)   // 2` }],
    vue: [{ id: 'c1', filename: 'App.vue', code: `<script setup>
console.log(1 + 1)   // 2
console.log(2 - 1)   // 1
console.log(2 * 2)   // 4
console.log(4 / 2)   // 2
</script>` }],
    react: [{ id: 'c1', filename: 'App.jsx', code: `function App() {
  console.log(1 + 1)   // 2
  console.log(2 - 1)   // 1
  return <div>计算结果</div>
}` }],
    android: [{ id: 'c1', filename: 'MainActivity.kt', code: `Log.d("Calc", (1 + 1).toString())   // 2\nLog.d("Calc", (2 - 1).toString())   // 1\nLog.d("Calc", (2 * 2).toString())   // 4\nLog.d("Calc", (4 / 2).toString())   // 2` }],
    ios: [{ id: 'c1', filename: 'ContentView.swift', code: `print(1 + 1)   // 2\nprint(2 - 1)   // 1\nprint(2 * 2)   // 4\nprint(4 / 2)   // 2` }],
    harmonyos: [{ id: 'c1', filename: 'Index.ets', code: `console.log((1 + 1).toString())   // 2\nconsole.log((2 - 1).toString())   // 1\nconsole.log((2 * 2).toString())   // 4\nconsole.log((4 / 2).toString())   // 2` }],
    uniapp: [{ id: 'c1', filename: 'index.vue', code: `<script setup>
console.log(1 + 1)   // 2
console.log(2 - 1)   // 1
console.log(2 * 2)   // 4
console.log(4 / 2)   // 2
</script>` }],
    miniprogram: [{ id: 'c1', filename: 'index.js', code: `console.log(1 + 1)   // 2\nconsole.log(2 - 1)   // 1\nconsole.log(2 * 2)   // 4\nconsole.log(4 / 2)   // 2` }],
    electron: [{ id: 'c1', filename: 'renderer.js', code: `console.log(1 + 1)   // 2\nconsole.log(2 - 1)   // 1\nconsole.log(2 * 2)   // 4\nconsole.log(4 / 2)   // 2` }],
    qt: [{ id: 'c1', filename: 'main.qml', code: `Component.onCompleted: {
    console.log(1 + 1)   // 2
    console.log(2 - 1)   // 1
    console.log(2 * 2)   // 4
    console.log(4 / 2)   // 2
}` }]
  }
}

// 变量知识点
const kpVariable: KnowledgePoint = {
  id: 'fe-variable',
  title: '变量',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '变量是用来存储数据的容器，可以存储和修改数据' }
  ],
  codeImpl: {
    html: [{ id: 'c1', filename: 'index.html', code: `<script>
let price = 1            // 定义price变量
console.log(price)       // 输出1
price = 2                // 修改价格
console.log(price)       // 输出2
</script>` }],
    javascript: [{ id: 'c1', filename: 'main.js', code: `// 定义变量语法：let 变量名 = 值
let price = 1            // 定义price变量
console.log(price)       // 输出1
price = 2                // 修改价格
console.log(price)       // 输出2` }],
    vue: [{ id: 'c1', filename: 'App.vue', code: `<script setup>
import { ref } from 'vue'
const price = ref(1)     // Vue用ref定义响应式变量
console.log(price.value) // 输出1
price.value = 2          // 修改价格
console.log(price.value) // 输出2
</script>` }],
    react: [{ id: 'c1', filename: 'App.jsx', code: `import { useState } from 'react'
function App() {
  const [price, setPrice] = useState(1)  // React用useState
  const changePrice = () => setPrice(2)
  return <p>价格: {price}</p>
}` }],
    android: [{ id: 'c1', filename: 'MainActivity.kt', code: `var price = 1            // 定义变量\nLog.d("Var", price.toString())  // 输出1\nprice = 2                // 修改价格\nLog.d("Var", price.toString())  // 输出2` }],
    ios: [{ id: 'c1', filename: 'ContentView.swift', code: `@State var price = 1     // SwiftUI用@State\n// price修改时界面自动更新\nText("价格: \\(price)")` }],
    harmonyos: [{ id: 'c1', filename: 'Index.ets', code: `@State price: number = 1  // 鸿蒙用@State\n// price修改时界面自动更新\nText('价格: ' + this.price)` }],
    uniapp: [{ id: 'c1', filename: 'index.vue', code: `<script setup>
import { ref } from 'vue'
const price = ref(1)     // UniApp同Vue
console.log(price.value)
price.value = 2
</script>` }],
    miniprogram: [{ id: 'c1', filename: 'index.js', code: `Page({
  data: {
    price: 1               // 小程序用data定义
  },
  changePrice() {
    this.setData({ price: 2 })  // 用setData修改
  }
})` }],
    electron: [{ id: 'c1', filename: 'renderer.js', code: `let price = 1            // 同JavaScript\nconsole.log(price)\nprice = 2\nconsole.log(price)` }],
    qt: [{ id: 'c1', filename: 'main.qml', code: `property int price: 1    // QML属性
Component.onCompleted: {
    console.log(price)   // 1
    price = 2
    console.log(price)   // 2
}` }]
  }
}

// if条件分支知识点
const kpIf: KnowledgePoint = {
  id: 'fe-if',
  title: 'if条件分支',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'if语句：条件为true时执行代码块，比如判断是否要打折' },
    { id: 'b2', type: 'flowchart-if', steps: [
      { text: '满20?', type: 'decision' },
      { text: '打8折', branch: 'yes' }
    ]}
  ],
  codeImpl: {
    html: [{ id: 'c1', filename: 'index.html', code: `<script>
let total = 25
if (total >= 20) {
    total = total * 0.8
    console.log('满20打8折，实付:' + total + '元')
}
</script>` }],
    javascript: [{ id: 'c1', filename: 'main.js', code: `let total = 25
if (total >= 20) {
    total = total * 0.8
    console.log('满20打8折，实付:' + total + '元')
}` }],
    vue: [{ id: 'c1', filename: 'App.vue', code: `<template>
  <p v-if="total >= 20">满20打8折</p>
</template>
<script setup>
import { ref } from 'vue'
const total = ref(25)
if (total.value >= 20) total.value *= 0.8
</script>` }],
    react: [{ id: 'c1', filename: 'App.jsx', code: `function App() {
  const [total] = useState(25)
  return (
    <div>
      {total >= 20 && <p>满20打8折</p>}
    </div>
  )
}` }],
    android: [{ id: 'c1', filename: 'MainActivity.kt', code: `var total = 25
if (total >= 20) {
    total = (total * 0.8).toInt()
    Log.d("If", "满20打8折，实付: $total元")
}` }],
    ios: [{ id: 'c1', filename: 'ContentView.swift', code: `@State var total = 25
var body: some View {
    if total >= 20 {
        Text("满20打8折")
    }
}` }],
    harmonyos: [{ id: 'c1', filename: 'Index.ets', code: `@State total: number = 25
build() {
  Column() {
    if (this.total >= 20) {
      Text('满20打8折')
    }
  }
}` }],
    uniapp: [{ id: 'c1', filename: 'index.vue', code: `<template>
  <view v-if="total >= 20">满20打8折</view>
</template>
<script setup>
import { ref } from 'vue'
const total = ref(25)
</script>` }],
    miniprogram: [{ id: 'c1', filename: 'index.wxml', code: `<view wx:if="{{total >= 20}}">满20打8折</view>` }],
    electron: [{ id: 'c1', filename: 'renderer.js', code: `let total = 25
if (total >= 20) {
    total = total * 0.8
    console.log('满20打8折')
}` }],
    qt: [{ id: 'c1', filename: 'main.qml', code: `property int total: 25
Text {
    visible: total >= 20
    text: "满20打8折"
}` }]
  }
}

// for循环知识点
const kpFor: KnowledgePoint = {
  id: 'fe-for',
  title: 'for循环',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'for循环：重复执行代码块，直到条件不满足' },
    { id: 'b2', type: 'tip', content: '循环三要素：初始化、条件判断、更新' }
  ],
  codeImpl: {
    html: [{ id: 'c1', filename: 'index.html', code: `<script>
for (let i = 0; i < 5; i++) {
    console.log('第' + i + '次循环')
}
</script>` }],
    javascript: [{ id: 'c1', filename: 'main.js', code: `for (let i = 0; i < 5; i++) {\n    console.log('第' + i + '次循环')\n}` }],
    vue: [{ id: 'c1', filename: 'App.vue', code: `<template>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>
<script setup>
import { ref } from 'vue'
const items = ref(['苹果', '香蕉', '橙子'])
</script>` }],
    react: [{ id: 'c1', filename: 'App.jsx', code: `function App() {
  const items = ['苹果', '香蕉', '橙子']
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}` }],
    android: [{ id: 'c1', filename: 'MainActivity.kt', code: `val items = listOf("苹果", "香蕉", "橙子")\nfor (item in items) {\n    Log.d("For", item)\n}` }],
    ios: [{ id: 'c1', filename: 'ContentView.swift', code: `let items = ["苹果", "香蕉", "橙子"]\nForEach(items, id: \\.self) { item in\n    Text(item)\n}` }],
    harmonyos: [{ id: 'c1', filename: 'Index.ets', code: `@State items: string[] = ['苹果', '香蕉', '橙子']\nForEach(this.items, (item: string) => {\n  Text(item)\n})` }],
    uniapp: [{ id: 'c1', filename: 'index.vue', code: `<template>
  <view v-for="item in items" :key="item">{{ item }}</view>
</template>
<script setup>
const items = ['苹果', '香蕉', '橙子']
</script>` }],
    miniprogram: [{ id: 'c1', filename: 'index.wxml', code: `<view wx:for="{{items}}" wx:key="*this">{{item}}</view>` }],
    electron: [{ id: 'c1', filename: 'renderer.js', code: `const items = ['苹果', '香蕉', '橙子']\nfor (const item of items) {\n    console.log(item)\n}` }],
    qt: [{ id: 'c1', filename: 'main.qml', code: `Repeater {\n    model: ['苹果', '香蕉', '橙子']\n    Text { text: modelData }\n}` }]
  }
}

// ========== 页面知识点 ==========

// 安装Trae IDE和Node.js
const kpDownloadTrae: KnowledgePoint = {
  id: 'fe-download-trae',
  title: '安装Trae和Node.js',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '先安装这两个工具：Trae是AI编程工具，Node.js是运行Vue/React项目必需的运行环境' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'PowerShell命令',
      code: `winget install OpenJS.NodeJS; winget install ByteDance.Trae.CN`
    }],
    vue: [{
      id: 'c1',
      filename: 'PowerShell命令',
      code: `winget install OpenJS.NodeJS; winget install ByteDance.Trae.CN`
    }],
    react: [{
      id: 'c1',
      filename: 'PowerShell命令',
      code: `winget install OpenJS.NodeJS; winget install ByteDance.Trae.CN`
    }]
  }
}

// 创建和预览
const kpCreateAndPreview: KnowledgePoint = {
  id: 'fe-create-preview',
  title: '创建和预览',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '用自然语言告诉 AI 帮你创建页面...' },
    { id: 'b2', type: 'list', items: [
      'HTML：让 AI 创建一个 index.html 文件',
      'Vue/React：让 AI 帮你创建项目并预览'
    ]},
    { id: 'b3', type: 'tip', content: '查看下方代码，可以了解背后的命令是什么' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'ai编程',
      code: `创建一个 index.html 文件，内容是第一个页面，并预览`
    }, {
      id: 'c2',
      filename: 'index.html',
      code: `<!DOCTYPE html>
<html>
<head>
    <title>第一个页面</title>
</head>
<body>
    <h1>第一个页面</h1>
</body>
</html>`
    }],
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `创建一个 Vue3 项目，内容是第一个页面，并预览`
    }, {
      id: 'c2',
      filename: '示例代码（src/App.vue）',
      code: `<script setup>
// 这里是代码
</script>

<template>
  <h1>第一个页面</h1>
</template>`
    }],
    react: [{
      id: 'c1',
      filename: 'ai编程',
      code: `创建一个 React 项目，内容是第一个页面，并OpenPreview预览`
    }, {
      id: 'c2',
      filename: '示例代码（src/App.jsx）',
      code: `function App() {
  return (
    <div>
      <h1>第一个页面</h1>
    </div>
  )
}

export default App`
    }]
  }
}

// 修改页面
const kpModifyPage: KnowledgePoint = {
  id: 'fe-modify-page',
  title: '修改页面',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '用自然语言告诉 AI 你想怎么修改页面...' },
    { id: 'b2', type: 'list', items: [
      '「在页面中添加一个标题」',
      '「把标题改成"我的网站"」',
      '「添加一个按钮」'
    ]},
    { id: 'b3', type: 'tip', content: 'AI 会自动修改代码，你只需要刷新浏览器查看效果' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'ai编程',
      code: `修改标题为商城网站`
    }, {
      id: 'c2',
      filename: 'index.html',
      code: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>商城网站</title>
</head>
<body>
    <h1>欢迎来到商城网站</h1>
</body>
</html>`
    }],
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `修改标题为商城网站`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
    <h1>欢迎来到商城网站</h1>
</template>`
    }],
    react: [{
      id: 'c1',
      filename: 'ai编程',
      code: `修改标题为商城网站`
    }, {
      id: 'c2',
      filename: 'src/App.jsx',
      code: `function App() {
  return (
    <div>
      <h1>欢迎来到商城网站</h1>
    </div>
  )
}

export default App`
    }]
  }
}

// 认识页面
const kpUnderstandPage: KnowledgePoint = {
  id: 'fe-understand-page',
  title: '认识页面',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'tip', content: 'HTML 和 Vue 都是用来创建页面的技术，页面里面装的都是内容（文字、图片、视频、按钮等）' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'index.html',
      code: `<!DOCTYPE html>
<html>
<head>
    <!-- 这里是页面头部，写一些配置信息 -->
</head>
<body>
    <!-- 这里是页面主体，所有内容都放在这里 -->
</body>
</html>`
    }],
    vue: [{
      id: 'c1',
      filename: 'src/App.vue',
      code: `<!-- 页面内容都写在 template 标签里面 -->
<template>
    <!-- 所有要显示的内容都放在这里 -->
</template>`
    }],
    react: [{
      id: 'c1',
      filename: 'src/App.jsx',
      code: `// 页面的内容写在 return() 里面
function App() {
  return (
    <div>
      {/* 所有要显示的内容都放在这里 */}
    </div>
  )
}`
    }]
  }
}

// 商品详情页面 - 区域划分
const kpProductDiv: KnowledgePoint = {
  id: 'fe-product-div',
  title: '区域划分',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '页面通常分为多个区域，用div标签划分' },
    { id: 'b2', type: 'table', headers: ['标签', '作用'], rows: [
      ['div', '划分区域容器，当成一个长方形的容器，能放其他标签'],
      ['h1', '标题'],
      ['img', '图片'],
      ['p', '文字段落'],
      ['ul/li', '列表'],
      ['a', '链接']
    ]}
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `创建商品详情页，包含标题、图片、价格、描述、列表、链接`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <div>
    <h1>iPhone15手机</h1>
    <img src="iphone15.jpg">
    <p>价格：5999元</p>
    <p>这是最新的iPhone15手机，配置强劲</p>
    <ul>
      <li>CPU：A17 Pro</li>
      <li>内存：8GB</li>
    </ul>
    <a href="/more">查看更多</a>
  </div>
</template>`
    }]
  }
}

// 商品详情页面 - 标题
const kpProductTitle: KnowledgePoint = {
  id: 'fe-product-title',
  title: '标题',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '商品详情页面通常包含标题、图片、价格、描述、按钮等部分，先从标题开始' },
    { id: 'b2', type: 'tip', content: '告诉AI帮你添加' }
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `添加商品标题，标题内容是iPhone15手机`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <h1>iPhone15手机</h1>
</template>`
    }]
  }
}

// 商品详情页面 - 图片
const kpProductImage: KnowledgePoint = {
  id: 'fe-product-image',
  title: '图片',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '商品图片展示商品外观' },
    { id: 'b2', type: 'tip', content: '图片可以放在项目文件夹中，也可以直接使用网络图片URL' }
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `添加商品图片`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <img src="iphone15.jpg" alt="iPhone15手机">
</template>`
    }]
  }
}

// 商品详情页面 - 文字描述
const kpProductText: KnowledgePoint = {
  id: 'fe-product-text',
  title: '文字',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '商品详细描述文字' },
    { id: 'b2', type: 'tip', content: '告诉AI帮你添加' }
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `添加商品描述：这是最新的iPhone15手机`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <p>这是最新的iPhone15手机</p>
</template>`
    }]
  }
}

// 商品详情页面 - 价格
const kpProductPrice: KnowledgePoint = {
  id: 'fe-product-price',
  title: '价格',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '展示商品价格' },
    { id: 'b2', type: 'tip', content: '告诉AI帮你添加' }
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `添加商品价格：5999元`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <p>价格：5999元</p>
</template>`
    }]
  }
}

// 商品详情页面 - 列表
const kpProductList: KnowledgePoint = {
  id: 'fe-product-list',
  title: '列表',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '商品参数列表，如配置清单' },
    { id: 'b2', type: 'tip', content: '告诉AI帮你添加' }
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `添加商品参数列表：CPU、内存、存储`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <ul>
    <li>CPU：A17 Pro</li>
    <li>内存：8GB</li>
    <li>存储：256GB</li>
  </ul>
</template>`
    }]
  }
}

// 商品详情页面 - 链接
const kpProductLink: KnowledgePoint = {
  id: 'fe-product-link',
  title: '链接',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '链接跳转到其他页面' },
    { id: 'b2', type: 'tip', content: '告诉AI帮你添加' }
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `添加查看更多链接`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <a href="/more">查看更多商品</a>
</template>`
    }]
  }
}

// 结账表单知识点
const kpCheckoutForm: KnowledgePoint = {
  id: 'fe-checkout-form',
  title: '结账表单',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '在页面输入内容，完成人和页面进行交互，结账表单包含文本输入框、单选、多选、下拉框、按钮' },
    { id: 'b2', type: 'table', headers: ['标签', '作用'], rows: [
      ['input', '输入框'],
      ['radio', '单选'],
      ['checkbox', '多选'],
      ['select', '下拉框'],
      ['button', '按钮']
    ]}
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `在商品详情页基础上追加结账表单`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <div>
    <!-- 商品信息 -->
    <h1>iPhone15手机</h1>
    <img src="iphone15.jpg">
    <p>价格：5999元</p>
    <p>这是最新的iPhone15手机</p>
    <ul>
      <li>CPU：A17 Pro</li>
      <li>内存：8GB</li>
    </ul>
    <a href="/more">查看更多</a>
    
    <!-- 结账表单 -->
    <div>
      <input placeholder="收件人">
      <input type="tel" placeholder="手机号">
      <input placeholder="收货地址">
      <input type="radio" name="gender"> 男
      <input type="radio" name="gender"> 女
      <input type="checkbox"> 看书
      <input type="checkbox"> 运动
      <select>
        <option>北京</option>
        <option>上海</option>
      </select>
      <button>立即支付</button>
    </div>
  </div>
</template>`
    }]
  }
}

// 按钮知识点
const kpButton: KnowledgePoint = {
  id: 'fe-button',
  title: '按钮',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '按钮用于提交或操作' },
    { id: 'b2', type: 'tip', content: '告诉AI帮你添加' }
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `添加按钮`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <button>点击我</button>
</template>`
    }]
  }
}

// Flex水平排列
const kpFlexRow: KnowledgePoint = {
  id: 'kp-flex-row',
  title: '水平排列',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'flex默认水平排列，让图片和信息左右并排显示' }
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `把商品详情页的图片和信息横向排列`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <div style="display: flex;">
    <!-- 商品图片 -->
    <img src="iphone15.jpg" width="200">
    
    <!-- 商品信息 -->
    <div>
      <h1>iPhone15手机</h1>
      <p>价格：5999元</p>
      <p>这是最新的iPhone15手机，配置强劲</p>
      <ul>
        <li>CPU：A17 Pro</li>
        <li>内存：8GB</li>
      </ul>
      <a href="/more">查看更多</a>
    </div>
  </div>
</template>`
    }]
  }
}

// Flex竖直排列
const kpFlexColumn: KnowledgePoint = {
  id: 'kp-flex-column',
  title: '竖直排列',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'flex-direction: column 让元素从上到下排列' }
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `把结账表单竖直排列`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <div style="display: flex;">
    <!-- 商品图片 -->
    <img src="iphone15.jpg" width="200">
    
    <!-- 商品信息 -->
    <div>
      <h1>iPhone15手机</h1>
      <p>价格：5999元</p>
    </div>
    
    <!-- 结账表单 - 竖直排列 -->
    <div style="display: flex; flex-direction: column;">
      <input placeholder="收件人">
      <input type="tel" placeholder="手机号">
      <input placeholder="收货地址">
      <button>立即支付</button>
    </div>
  </div>
</template>`
    }]
  }
}

// Flex对齐方式
const kpFlexAlign: KnowledgePoint = {
  id: 'kp-flex-align',
  title: '对齐方式',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'justify-content控制主轴对齐，align-items控制交叉轴对齐' },
    { id: 'b2', type: 'table', headers: ['属性值', '效果'], rows: [
      ['flex-start', '起点对齐(左/上)'],
      ['center', '居中对齐'],
      ['flex-end', '终点对齐(右/下)'],
      ['space-between', '两端对齐'],
      ['space-around', '均匀分布']
    ]}
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `让商品信息和价格两端对齐`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <div style="display: flex;">
    <!-- 商品图片 -->
    <img src="iphone15.jpg" width="200">
    
    <!-- 商品信息 -->
    <div style="display: flex; flex-direction: column; flex: 1;">
      <div style="display: flex; justify-content: space-between;">
        <h1>iPhone15手机</h1>
        <p style="color: red;">￥5999</p>
      </div>
      <p>这是最新的iPhone15手机，配置强劲</p>
    </div>
    
    <!-- 结账表单 -->
    <div style="display: flex; flex-direction: column;">
      <input placeholder="收件人">
      <input type="tel" placeholder="手机号">
      <button>立即支付</button>
    </div>
  </div>
</template>`
    }]
  }
}



// 组件知识点
const kpComponent: KnowledgePoint = {
  id: 'fe-component',
  title: '组件',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '组件是可复用的UI单元，可以封装结构、样式和行为' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'index.html',
      code: `<!-- HTML使用Web Components -->
<template id="my-button">
  <button class="btn">点击我</button>
</template>

<script>
class MyButton extends HTMLElement {
  constructor() {
    super()
    const template = document.getElementById('my-button')
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}
customElements.define('my-button', MyButton)
</script>

<!-- 使用组件 -->
<my-button></my-button>`
    }],
    vue: [{
      id: 'c1',
      filename: 'MyButton.vue',
      code: `<!-- 定义组件 -->
<template>
  <button class="btn" @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: { type: String, default: '点击我' }
})

const emit = defineEmits(['click'])
const handleClick = () => emit('click')
</script>`
    }, {
      id: 'c2',
      filename: 'App.vue',
      code: `<!-- 使用组件 -->
<template>
  <MyButton text="提交" @click="onSubmit" />
</template>

<script setup>
import MyButton from './MyButton.vue'

const onSubmit = () => {
  console.log('按钮被点击')
}
</script>`
    }],
    react: [{
      id: 'c1',
      filename: 'MyButton.jsx',
      code: `// 定义组件
function MyButton({ text = '点击我', onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  )
}

export default MyButton`
    }, {
      id: 'c2',
      filename: 'App.jsx',
      code: `// 使用组件
import MyButton from './MyButton'

function App() {
  const onSubmit = () => {
    console.log('按钮被点击')
  }
  
  return <MyButton text="提交" onClick={onSubmit} />
}`
    }],
    android: [{
      id: 'c1',
      filename: 'MyButton.kt',
      code: `// 自定义组件
class MyButton @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null
) : AppCompatButton(context, attrs) {
    
    init {
        text = "点击我"
        setOnClickListener {
            // 处理点击
        }
    }
}`
    }],
    ios: [{
      id: 'c1',
      filename: 'MyButton.swift',
      code: `import SwiftUI

// 定义组件
struct MyButton: View {
    var text: String = "点击我"
    var action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Text(text)
                .padding()
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(8)
        }
    }
}

// 使用组件
struct ContentView: View {
    var body: some View {
        MyButton(text: "提交") {
            print("按钮被点击")
        }
    }
}`
    }],
    harmonyos: [{
      id: 'c1',
      filename: 'MyButton.ets',
      code: `// 定义组件
@Component
struct MyButton {
  @Prop text: string = '点击我'
  onButtonClick: () => void = () => {}
  
  build() {
    Button(this.text)
      .onClick(() => this.onButtonClick())
  }
}

// 使用组件
@Entry
@Component
struct Index {
  build() {
    Column() {
      MyButton({ text: '提交', onButtonClick: () => {
        console.log('按钮被点击')
      }})
    }
  }
}`
    }],
    uniapp: [{
      id: 'c1',
      filename: 'MyButton.vue',
      code: `<!-- 定义组件 -->
<template>
  <button class="btn" @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: { type: String, default: '点击我' }
})

const emit = defineEmits(['click'])
const handleClick = () => emit('click')
</script>`
    }],
    miniprogram: [{
      id: 'c1',
      filename: 'my-button/my-button.wxml',
      code: `<!-- 组件模板 -->
<button class="btn" bindtap="handleClick">
  {{text}}
</button>`
    }, {
      id: 'c2',
      filename: 'my-button/my-button.js',
      code: `// 组件逻辑
Component({
  properties: {
    text: { type: String, value: '点击我' }
  },
  methods: {
    handleClick() {
      this.triggerEvent('click')
    }
  }
})`
    }],
    electron: [{
      id: 'c1',
      filename: 'renderer.js',
      code: `// Electron中可以使用任何前端框架
// 这里使用原生JS组件化

class MyButton {
  constructor(text = '点击我', onClick) {
    this.element = document.createElement('button')
    this.element.textContent = text
    this.element.onclick = onClick
  }
  
  render(container) {
    container.appendChild(this.element)
  }
}

// 使用
const btn = new MyButton('提交', () => console.log('点击'))
btn.render(document.body)`
    }],
    qt: [{
      id: 'c1',
      filename: 'MyButton.qml',
      code: `import QtQuick 2.15
import QtQuick.Controls 2.15

// 定义组件
Button {
    id: root
    property string buttonText: "点击我"
    
    text: buttonText
    
    background: Rectangle {
        color: root.pressed ? "#0056b3" : "#007bff"
        radius: 4
    }
    
    contentItem: Text {
        text: root.text
        color: "white"
        horizontalAlignment: Text.AlignHCenter
    }
}`
    }],
    ai_vue: [{
      id: 'ai1',
      filename: 'MyButton.vue',
      prompt: '创建一个可复用的按钮组件，支持自定义文本和点击事件',
      code: `<template>
  <button class="btn" @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: { type: String, default: '点击我' }
})

const emit = defineEmits(['click'])
const handleClick = () => emit('click')
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>`
    }]
  }
}

// 样式知识点
const kpStyle: KnowledgePoint = {
  id: 'fe-style',
  title: '内联样式',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '内联样式直接写在标签的style属性里，适合简单样式' },
    { id: 'b2', type: 'table', headers: ['属性', '作用'], rows: [
      ['color', '文字颜色'],
      ['font-size', '字体大小'],
      ['background-color', '背景色'],
      ['padding', '内边距'],
      ['margin', '外边距'],
      ['border', '边框']
    ]}
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `给商品详情页添加样式：标题红色、价格黄色背景、按钮蓝色`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <div style="display: flex;">
    <img src="iphone15.jpg" width="200">
    
    <div>
      <h1 style="color: red;">iPhone15手机</h1>
      <p style="background-color: yellow;">价格：5999元</p>
      <p>这是最新的iPhone15手机</p>
    </div>
    
    <div style="display: flex; flex-direction: column;">
      <input style="padding: 10px;" placeholder="收件人">
      <input style="padding: 10px;" placeholder="手机号">
      <button style="background-color: blue; color: white; padding: 10px;">立即支付</button>
    </div>
  </div>
</template>`
    }]
  }
}

// 选择器知识点
const kpSelector: KnowledgePoint = {
  id: 'fe-selector',
  title: '选择器',
  video: {
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '选择器用class提取样式，实现复用，代码更整洁' },
    { id: 'b2', type: 'table', headers: ['选择器', '示例'], rows: [
      ['class选择器', '.title { color: red; }'],
      ['id选择器', '#price { color: gold; }'],
      ['标签选择器', 'h1 { font-size: 24px; }']
    ]}
  ],
  codeImpl: {
    vue: [{
      id: 'c1',
      filename: 'ai编程',
      code: `用选择器重构样式，提取公共样式到class`
    }, {
      id: 'c2',
      filename: 'src/App.vue',
      code: `<template>
  <div class="container">
    <img src="iphone15.jpg" width="200">
    
    <div>
      <h1 class="title">iPhone15手机</h1>
      <p class="price">价格：5999元</p>
      <p>这是最新的iPhone15手机</p>
    </div>
    
    <div class="form">
      <input class="input" placeholder="收件人">
      <input class="input" placeholder="手机号">
      <button class="btn">立即支付</button>
    </div>
  </div>
</template>

<style>
.container { display: flex; }
.title { color: red; }
.price { background-color: yellow; }
.form { display: flex; flex-direction: column; }
.input { padding: 10px; }
.btn { background-color: blue; color: white; padding: 10px; }
</style>`
    }]
  }
}

// 点击事件知识点
const kpClickEvent: KnowledgePoint = {
  id: 'fe-click-event',
  title: '点击事件',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '点击事件是最常用的交互方式，用户点击按钮、链接等元素时触发' }
  ],
  codeImpl: {
    html: [{ id: 'c1', filename: 'index.html', code: `<button onclick="handleClick()">点击</button>
<script>
function handleClick() {
    console.log('按钮被点击')
}
</script>` }],
    vue: [{ id: 'c1', filename: 'App.vue', code: `<template>
  <button @click="handleClick">点击</button>
</template>
<script setup>
const handleClick = () => {
  console.log('按钮被点击')
}
</script>` }],
    react: [{ id: 'c1', filename: 'App.jsx', code: `function App() {\n  const handleClick = () => console.log('按钮被点击')\n  return <button onClick={handleClick}>点击</button>\n}` }],
    android: [{ id: 'c1', filename: 'MainActivity.kt', code: `val button = findViewById<Button>(R.id.button)\nbutton.setOnClickListener {\n    Log.d("Event", "按钮被点击")\n}` }],
    ios: [{ id: 'c1', filename: 'ContentView.swift', code: `Button("点击") {\n    print("按钮被点击")\n}` }],
    harmonyos: [{ id: 'c1', filename: 'Index.ets', code: `Button('点击')\n  .onClick(() => {\n    console.log('按钮被点击')\n  })` }],
    uniapp: [{ id: 'c1', filename: 'index.vue', code: `<template>
  <button @click="handleClick">点击</button>
</template>
<script setup>
const handleClick = () => console.log('按钮被点击')
</script>` }],
    miniprogram: [{ id: 'c1', filename: 'index.wxml', code: `<button bindtap="handleClick">点击</button>` }],
    electron: [{ id: 'c1', filename: 'renderer.js', code: `const btn = document.querySelector('button')\nbtn.onclick = () => console.log('按钮被点击')` }],
    qt: [{ id: 'c1', filename: 'main.qml', code: `Button {\n    text: "点击"\n    onClicked: console.log("按钮被点击")\n}` }],
    ai_vue: [{ id: 'ai1', filename: 'App.vue', prompt: '创建一个按钮，点击后在控制台输出"按钮被点击"', code: `<template>
  <button @click="handleClick">点击</button>
</template>
<script setup>
const handleClick = () => {
  console.log('按钮被点击')
}
</script>` }]
  }
}

// 页面加载事件知识点
const kpLoadEvent: KnowledgePoint = {
  id: 'fe-load-event',
  title: '页面加载事件',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '页面加载完成时触发，用于初始化数据、请求接口等' }
  ],
  codeImpl: {
    html: [{ id: 'c1', filename: 'index.html', code: `<script>
window.onload = function() {
    console.log('页面加载完成')
}
</script>` }],
    vue: [{ id: 'c1', filename: 'App.vue', code: `<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  console.log('页面加载完成')
})
</script>` }],
    react: [{ id: 'c1', filename: 'App.jsx', code: `import { useEffect } from 'react'
function App() {
  useEffect(() => {
    console.log('页面加载完成')
  }, [])
  return <div>页面</div>
}` }],
    android: [{ id: 'c1', filename: 'MainActivity.kt', code: `override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n    Log.d("Event", "页面加载完成")\n}` }],
    ios: [{ id: 'c1', filename: 'ContentView.swift', code: `var body: some View {\n    Text("页面")\n        .onAppear { print("页面加载完成") }\n}` }],
    harmonyos: [{ id: 'c1', filename: 'Index.ets', code: `aboutToAppear() {\n  console.log('页面加载完成')\n}` }],
    uniapp: [{ id: 'c1', filename: 'index.vue', code: `<script setup>\nimport { onMounted } from 'vue'\nonMounted(() => console.log('页面加载完成'))\n</script>` }],
    miniprogram: [{ id: 'c1', filename: 'index.js', code: `Page({
  onLoad() {
    console.log('页面加载完成')
  }
})` }],
    electron: [{ id: 'c1', filename: 'renderer.js', code: `window.onload = () => console.log('页面加载完成')` }],
    qt: [{ id: 'c1', filename: 'main.qml', code: `Component.onCompleted: {\n    console.log("页面加载完成")\n}` }],
    ai_vue: [{ id: 'ai1', filename: 'App.vue', prompt: '创建一个Vue页面，在页面加载完成时输出"页面加载完成"', code: `<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  console.log('页面加载完成')
})
</script>` }]
  }
}

// 事件知识点（包含点击事件、页面加载事件）
const kpEventAll: KnowledgePoint = {
  id: 'fe-event-all',
  title: '事件',
  blocks: [
    { id: 'b1', type: 'text', content: '事件是用户与页面交互的方式，常见的有点击事件和页面加载事件' }
  ],
  codeImpl: {
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// 点击事件
const btn = document.querySelector('button')
btn.onclick = function() {
    console.log('按钮被点击')
}

// 页面加载事件
window.onload = function() {
    console.log('页面加载完成')
}`
    }],
    vue: [{
      id: 'c1',
      filename: 'App.vue',
      code: `<template>
  <button @click="handleClick">点击</button>
</template>

<script setup>
import { onMounted } from 'vue'

// 点击事件
const handleClick = () => {
  console.log('按钮被点击')
}

// 页面加载事件
onMounted(() => {
  console.log('页面加载完成')
})
</script>`
    }],
    react: [{
      id: 'c1',
      filename: 'App.jsx',
      code: `import { useEffect } from 'react'

function App() {
  // 点击事件
  const handleClick = () => {
    console.log('按钮被点击')
  }
  
  // 页面加载事件
  useEffect(() => {
    console.log('页面加载完成')
  }, [])
  
  return <button onClick={handleClick}>点击</button>
}`
    }],
    android: [{
      id: 'c1',
      filename: 'MainActivity.kt',
      code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // 页面加载完成
        Log.d("Event", "页面加载完成")
        
        // 点击事件
        val button = findViewById<Button>(R.id.button)
        button.setOnClickListener {
            Log.d("Event", "按钮被点击")
        }
    }
}`
    }],
    ios: [{
      id: 'c1',
      filename: 'ContentView.swift',
      code: `import SwiftUI

struct ContentView: View {
    var body: some View {
        // 点击事件
        Button("点击") {
            print("按钮被点击")
        }
        .onAppear {
            // 页面加载事件
            print("页面加载完成")
        }
    }
}`
    }],
    harmonyos: [{
      id: 'c1',
      filename: 'Index.ets',
      code: `@Entry
@Component
struct Index {
  // 页面加载事件
  aboutToAppear() {
    console.log('页面加载完成')
  }
  
  build() {
    Column() {
      // 点击事件
      Button('点击')
        .onClick(() => {
          console.log('按钮被点击')
        })
    }
  }
}`
    }],
    uniapp: [{
      id: 'c1',
      filename: 'index.vue',
      code: `<template>
  <button @click="handleClick">点击</button>
</template>

<script setup>
import { onMounted } from 'vue'

// 点击事件
const handleClick = () => {
  console.log('按钮被点击')
}

// 页面加载事件
onMounted(() => {
  console.log('页面加载完成')
})
</script>`
    }],
    miniprogram: [{
      id: 'c1',
      filename: 'index.js',
      code: `Page({
  // 页面加载事件
  onLoad() {
    console.log('页面加载完成')
  },
  
  // 点击事件
  handleClick() {
    console.log('按钮被点击')
  }
})`
    }],
    electron: [{
      id: 'c1',
      filename: 'renderer.js',
      code: `// 页面加载事件
window.onload = function() {
    console.log('页面加载完成')
}

// 点击事件
const btn = document.querySelector('button')
btn.onclick = function() {
    console.log('按钮被点击')
}`
    }],
    qt: [{
      id: 'c1',
      filename: 'main.qml',
      code: `import QtQuick 2.15
import QtQuick.Controls 2.15

ApplicationWindow {
    visible: true
    
    // 页面加载事件
    Component.onCompleted: {
        console.log("页面加载完成")
    }
    
    Button {
        text: "点击"
        // 点击事件
        onClicked: console.log("按钮被点击")
    }
}`
    }]
  }
}

// 通用事件知识点（保留原有完整内容）
const kpEvent: KnowledgePoint = {
  id: 'fe-event',
  title: '事件',
  blocks: [
    { id: 'b1', type: 'text', content: '事件是用户与页面交互的方式，如点击、输入、滑动等' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'index.html',
      code: `<!-- HTML事件绑定 -->
<button onclick="handleClick()">点击</button>
<input oninput="handleInput(event)" />

<script>
function handleClick() {
  console.log('按钮被点击')
}

function handleInput(e) {
  console.log('输入内容:', e.target.value)
}
</script>`
    }],
    vue: [{
      id: 'c1',
      filename: 'App.vue',
      code: `<template>
  <div>
    <!-- 点击事件 -->
    <button @click="handleClick">点击</button>
    
    <!-- 输入事件 -->
    <input @input="handleInput" />
    
    <!-- 带参数的事件 -->
    <button @click="handleWithParam('参数')">带参数</button>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log('按钮被点击')
}

const handleInput = (e) => {
  console.log('输入内容:', e.target.value)
}

const handleWithParam = (param) => {
  console.log('参数:', param)
}
</script>`
    }],
    react: [{
      id: 'c1',
      filename: 'App.jsx',
      code: `function App() {
  const handleClick = () => {
    console.log('按钮被点击')
  }
  
  const handleInput = (e) => {
    console.log('输入内容:', e.target.value)
  }
  
  const handleWithParam = (param) => {
    console.log('参数:', param)
  }
  
  return (
    <div>
      {/* 点击事件 */}
      <button onClick={handleClick}>点击</button>
      
      {/* 输入事件 */}
      <input onInput={handleInput} />
      
      {/* 带参数的事件 */}
      <button onClick={() => handleWithParam('参数')}>带参数</button>
    </div>
  )
}`
    }],
    android: [{
      id: 'c1',
      filename: 'MainActivity.kt',
      code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // 点击事件
        val button = findViewById<Button>(R.id.button)
        button.setOnClickListener {
            Log.d("Event", "按钮被点击")
        }
        
        // 输入事件
        val editText = findViewById<EditText>(R.id.editText)
        editText.addTextChangedListener(object : TextWatcher {
            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
                Log.d("Event", "输入内容: $s")
            }
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
            override fun afterTextChanged(s: Editable?) {}
        })
    }
}`
    }],
    ios: [{
      id: 'c1',
      filename: 'ContentView.swift',
      code: `import SwiftUI

struct ContentView: View {
    @State private var text = ""
    
    var body: some View {
        VStack {
            // 点击事件
            Button("点击") {
                print("按钮被点击")
            }
            
            // 输入事件
            TextField("请输入", text: $text)
                .onChange(of: text) { newValue in
                    print("输入内容: \\(newValue)")
                }
        }
    }
}`
    }],
    harmonyos: [{
      id: 'c1',
      filename: 'Index.ets',
      code: `@Entry
@Component
struct Index {
  @State text: string = ''
  
  build() {
    Column() {
      // 点击事件
      Button('点击')
        .onClick(() => {
          console.log('按钮被点击')
        })
      
      // 输入事件
      TextInput({ placeholder: '请输入' })
        .onChange((value: string) => {
          this.text = value
          console.log('输入内容:', value)
        })
    }
  }
}`
    }],
    uniapp: [{
      id: 'c1',
      filename: 'index.vue',
      code: `<template>
  <view>
    <!-- 点击事件 -->
    <button @click="handleClick">点击</button>
    
    <!-- 输入事件 -->
    <input @input="handleInput" />
    
    <!-- 触摸事件 -->
    <view @touchstart="handleTouch">触摸区域</view>
  </view>
</template>

<script setup>
const handleClick = () => {
  console.log('按钮被点击')
}

const handleInput = (e) => {
  console.log('输入内容:', e.detail.value)
}

const handleTouch = () => {
  console.log('触摸事件')
}
</script>`
    }],
    miniprogram: [{
      id: 'c1',
      filename: 'index.wxml',
      code: `<!-- 小程序事件 -->
<button bindtap="handleClick">点击</button>
<input bindinput="handleInput" />
<view bindtouchstart="handleTouch">触摸区域</view>`
    }, {
      id: 'c2',
      filename: 'index.js',
      code: `Page({
  handleClick() {
    console.log('按钮被点击')
  },
  
  handleInput(e) {
    console.log('输入内容:', e.detail.value)
  },
  
  handleTouch() {
    console.log('触摸事件')
  }
})`
    }],
    electron: [{
      id: 'c1',
      filename: 'renderer.js',
      code: `// 点击事件
document.getElementById('button').addEventListener('click', () => {
  console.log('按钮被点击')
})

// 输入事件
document.getElementById('input').addEventListener('input', (e) => {
  console.log('输入内容:', e.target.value)
})

// 键盘事件
document.addEventListener('keydown', (e) => {
  console.log('按键:', e.key)
})`
    }],
    qt: [{
      id: 'c1',
      filename: 'main.qml',
      code: `import QtQuick 2.15
import QtQuick.Controls 2.15

Column {
    // 点击事件
    Button {
        text: "点击"
        onClicked: console.log("按钮被点击")
    }
    
    // 输入事件
    TextField {
        placeholderText: "请输入"
        onTextChanged: console.log("输入内容:", text)
    }
    
    // 鼠标事件
    Rectangle {
        width: 100; height: 100
        color: "lightblue"
        
        MouseArea {
            anchors.fill: parent
            onClicked: console.log("区域被点击")
        }
    }
}`
    }]
  }
}

// 文本渲染知识点
const kpTextRender: KnowledgePoint = {
  id: 'fe-text-render',
  title: '文本渲染',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '将变量数据显示到页面上' }
  ],
  codeImpl: {
    html: [{ id: 'c1', filename: 'index.html', code: `<p id="name"></p>
<script>
const name = '张三'
document.getElementById('name').textContent = name
</script>` }],
    vue: [{ id: 'c1', filename: 'App.vue', code: `<template>
  <p>{{ name }}</p>
</template>
<script setup>
import { ref } from 'vue'
const name = ref('张三')
</script>` }],
    react: [{ id: 'c1', filename: 'App.jsx', code: `function App() {\n  const [name] = useState('张三')\n  return <p>{name}</p>\n}` }],
    android: [{ id: 'c1', filename: 'MainActivity.kt', code: `val name = "张三"\nfindViewById<TextView>(R.id.nameText).text = name` }],
    ios: [{ id: 'c1', filename: 'ContentView.swift', code: `let name = "张三"\nText(name)` }],
    harmonyos: [{ id: 'c1', filename: 'Index.ets', code: `@State name: string = '张三'\nText(this.name)` }],
    uniapp: [{ id: 'c1', filename: 'index.vue', code: `<template>
  <text>{{ name }}</text>
</template>
<script setup>
import { ref } from 'vue'
const name = ref('张三')
</script>` }],
    miniprogram: [{ id: 'c1', filename: 'index.wxml', code: `<text>{{name}}</text>` }],
    electron: [{ id: 'c1', filename: 'renderer.js', code: `const name = '张三'\ndocument.getElementById('name').textContent = name` }],
    qt: [{ id: 'c1', filename: 'main.qml', code: `property string name: "\u5f20\u4e09"\nText { text: name }` }],
    ai_vue: [{ id: 'ai1', filename: 'App.vue', prompt: '\u521b\u5efa\u4e00\u4e2a\u9875\u9762\uff0c\u5c55\u793a\u53d8\u91cf name \u7684\u503c"\u5f20\u4e09"', code: `<template>
  <p>{{ name }}</p>
</template>
<script setup>
import { ref } from 'vue'
const name = ref('\u5f20\u4e09')
</script>` }]
  }
}

// 属性渲染知识点
const kpAttrRender: KnowledgePoint = {
  id: 'fe-attr-render',
  title: '属性渲染',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '动态绑定元素属性，如class、style、src等' }
  ],
  codeImpl: {
    html: [{ id: 'c1', filename: 'index.html', code: `<img id="img">
<script>
const imgUrl = 'logo.png'
document.getElementById('img').src = imgUrl
</script>` }],
    vue: [{ id: 'c1', filename: 'App.vue', code: `<template>
  <img :src="imgUrl">
  <div :class="className"></div>
</template>
<script setup>
import { ref } from 'vue'
const imgUrl = ref('logo.png')
const className = ref('active')
</script>` }],
    react: [{ id: 'c1', filename: 'App.jsx', code: `function App() {
  const [imgUrl] = useState('logo.png')
  const [className] = useState('active')
  return <img src={imgUrl} className={className} />
}` }],
    android: [{ id: 'c1', filename: 'MainActivity.kt', code: `val imageView = findViewById<ImageView>(R.id.img)\nimageView.setImageResource(R.drawable.logo)` }],
    ios: [{ id: 'c1', filename: 'ContentView.swift', code: `let imgName = "logo"\nImage(imgName)` }],
    harmonyos: [{ id: 'c1', filename: 'Index.ets', code: `@State imgUrl: string = 'logo.png'\nImage(this.imgUrl)` }],
    uniapp: [{ id: 'c1', filename: 'index.vue', code: `<template>
  <image :src="imgUrl"></image>
</template>
<script setup>
import { ref } from 'vue'
const imgUrl = ref('logo.png')
</script>` }],
    miniprogram: [{ id: 'c1', filename: 'index.wxml', code: `<image src="{{imgUrl}}"></image>` }],
    electron: [{ id: 'c1', filename: 'renderer.js', code: `const imgUrl = 'logo.png'\ndocument.getElementById('img').src = imgUrl` }],
    qt: [{ id: 'c1', filename: 'main.qml', code: `property string imgUrl: "logo.png"\nImage { source: imgUrl }` }],
    ai_vue: [{ id: 'ai1', filename: 'App.vue', prompt: '\u521b\u5efa\u4e00\u4e2a\u56fe\u7247\u7ec4\u4ef6\uff0c\u52a8\u6001\u7ed1\u5b9a\u56fe\u7247\u5730\u5740', code: `<template>
  <img :src="imgUrl">
</template>
<script setup>
import { ref } from 'vue'
const imgUrl = ref('logo.png')
</script>` }]
  }
}

// 条件渲染知识点
const kpCondRender: KnowledgePoint = {
  id: 'fe-cond-render',
  title: '条件渲染',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '根据条件决定是否显示元素' }
  ],
  codeImpl: {
    html: [{ id: 'c1', filename: 'index.html', code: `<p id="msg" style="display:none"></p>
<script>
const show = true
if (show) {
    document.getElementById('msg').style.display = 'block'
}
</script>` }],
    vue: [{ id: 'c1', filename: 'App.vue', code: `<template>
  <p v-if="show">显示内容</p>
  <p v-else>隐藏内容</p>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>` }],
    react: [{ id: 'c1', filename: 'App.jsx', code: `function App() {
  const [show] = useState(true)
  return (
    <div>
      {show ? <p>显示内容</p> : <p>隐藏内容</p>}
    </div>
  )
}` }],
    android: [{ id: 'c1', filename: 'activity_main.xml', code: `<TextView\n    android:id="@+id/msg"\n    android:visibility="gone" />` }],
    ios: [{ id: 'c1', filename: 'ContentView.swift', code: `let show = true\nif show {\n    Text("显示内容")\n}` }],
    harmonyos: [{ id: 'c1', filename: 'Index.ets', code: `@State show: boolean = true\nif (this.show) {\n  Text('显示内容')\n}` }],
    uniapp: [{ id: 'c1', filename: 'index.vue', code: `<template>
  <text v-if="show">显示内容</text>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>` }],
    miniprogram: [{ id: 'c1', filename: 'index.wxml', code: `<text wx:if="{{show}}">显示内容</text>` }],
    electron: [{ id: 'c1', filename: 'renderer.js', code: `const show = true\nif (show) {\n    document.getElementById('msg').style.display = 'block'\n}` }],
    qt: [{ id: 'c1', filename: 'main.qml', code: `property bool show: true
Text {
    visible: show
    text: "\u663e\u793a\u5185\u5bb9"
}` }],
    ai_vue: [{ id: 'ai1', filename: 'App.vue', prompt: '\u521b\u5efa\u4e00\u4e2a\u9875\u9762\uff0c\u6839\u636e show \u53d8\u91cf\u51b3\u5b9a\u662f\u5426\u663e\u793a\u5185\u5bb9', code: `<template>
  <p v-if="show">\u663e\u793a\u5185\u5bb9</p>
  <p v-else>\u9690\u85cf\u5185\u5bb9</p>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>` }]
  }
}

// 循环渲染知识点
const kpLoopRender: KnowledgePoint = {
  id: 'fe-loop-render',
  title: '循环渲染',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '根据数组数据渲染列表' }
  ],
  codeImpl: {
    html: [{ id: 'c1', filename: 'index.html', code: `<ul id="list"></ul>
<script>
const items = ['苹果', '香蕉', '橙子']
const ul = document.getElementById('list')
items.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    ul.appendChild(li)
})
</script>` }],
    vue: [{ id: 'c1', filename: 'App.vue', code: `<template>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>
<script setup>
import { ref } from 'vue'
const items = ref(['苹果', '香蕉', '橙子'])
</script>` }],
    react: [{ id: 'c1', filename: 'App.jsx', code: `function App() {
  const items = ['苹果', '香蕉', '橙子']
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}` }],
    android: [{ id: 'c1', filename: 'MainActivity.kt', code: `val items = listOf("苹果", "香蕉", "橙子")\nval adapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, items)\nlistView.adapter = adapter` }],
    ios: [{ id: 'c1', filename: 'ContentView.swift', code: `let items = ["苹果", "香蕉", "橙子"]\nList(items, id: \\.self) { item in\n    Text(item)\n}` }],
    harmonyos: [{ id: 'c1', filename: 'Index.ets', code: `@State items: string[] = ['苹果', '香蕉', '橙子']\nForEach(this.items, (item: string) => {\n  Text(item)\n})` }],
    uniapp: [{ id: 'c1', filename: 'index.vue', code: `<template>
  <view v-for="item in items" :key="item">{{ item }}</view>
</template>
<script setup>
import { ref } from 'vue'
const items = ref(['苹果', '香蕉', '橙子'])
</script>` }],
    miniprogram: [{ id: 'c1', filename: 'index.wxml', code: `<view wx:for="{{items}}" wx:key="*this">{{item}}</view>` }],
    electron: [{ id: 'c1', filename: 'renderer.js', code: `const items = ['苹果', '香蕉', '橙子']
const ul = document.getElementById('list')
items.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    ul.appendChild(li)
})` }],
    qt: [{ id: 'c1', filename: 'main.qml', code: `Repeater {\n    model: ['苹果', '香蕉', '橙子']\n    Text { text: modelData }\n}` }],
    ai_vue: [{ id: 'ai1', filename: 'App.vue', prompt: '创建一个列表，展示苹果、香蕉、橙子三个水果', code: `<template>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>
<script setup>
import { ref } from 'vue'
const items = ref(['苹果', '香蕉', '橙子'])
</script>` }]
  }
}

// 渲染页面数据知识点
const kpRenderData: KnowledgePoint = {
  id: 'fe-render-data',
  title: '渲染页面数据',
  blocks: [
    { id: 'b1', type: 'text', content: '将数据动态显示到页面上，包括文本、列表等' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'index.html',
      code: `<div id="app">
  <p id="name"></p>
  <ul id="list"></ul>
</div>

<script>
const data = {
  name: '张三',
  items: ['苹果', '香蕉', '橙子']
}

// 渲染文本
document.getElementById('name').textContent = data.name

// 渲染列表
const listEl = document.getElementById('list')
data.items.forEach(item => {
  const li = document.createElement('li')
  li.textContent = item
  listEl.appendChild(li)
})
</script>`
    }],
    vue: [{
      id: 'c1',
      filename: 'App.vue',
      code: `<template>
  <div>
    <!-- 渲染文本 -->
    <p>{{ name }}</p>
    
    <!-- 渲染列表 -->
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    
    <!-- 条件渲染 -->
    <p v-if="show">显示内容</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('张三')
const items = ref(['苹果', '香蕉', '橙子'])
const show = ref(true)
</script>`
    }],
    react: [{
      id: 'c1',
      filename: 'App.jsx',
      code: `import { useState } from 'react'

function App() {
  const [name] = useState('张三')
  const [items] = useState(['苹果', '香蕉', '橙子'])
  const [show] = useState(true)
  
  return (
    <div>
      {/* 渲染文本 */}
      <p>{name}</p>
      
      {/* 渲染列表 */}
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
      
      {/* 条件渲染 */}
      {show && <p>显示内容</p>}
    </div>
  )
}`
    }],
    android: [{
      id: 'c1',
      filename: 'MainActivity.kt',
      code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val name = "张三"
        val items = listOf("苹果", "香蕉", "橙子")
        
        // 渲染文本
        findViewById<TextView>(R.id.nameText).text = name
        
        // 渲染列表
        val recyclerView = findViewById<RecyclerView>(R.id.recyclerView)
        recyclerView.adapter = ArrayAdapter(this, items)
    }
}`
    }],
    ios: [{
      id: 'c1',
      filename: 'ContentView.swift',
      code: `import SwiftUI

struct ContentView: View {
    let name = "张三"
    let items = ["苹果", "香蕉", "橙子"]
    let show = true
    
    var body: some View {
        VStack {
            // 渲染文本
            Text(name)
            
            // 渲染列表
            List(items, id: \\.self) { item in
                Text(item)
            }
            
            // 条件渲染
            if show {
                Text("显示内容")
            }
        }
    }
}`
    }],
    harmonyos: [{
      id: 'c1',
      filename: 'Index.ets',
      code: `@Entry
@Component
struct Index {
  @State name: string = '张三'
  @State items: string[] = ['苹果', '香蕉', '橙子']
  @State show: boolean = true
  
  build() {
    Column() {
      // 渲染文本
      Text(this.name)
      
      // 渲染列表
      ForEach(this.items, (item: string) => {
        Text(item)
      })
      
      // 条件渲染
      if (this.show) {
        Text('显示内容')
      }
    }
  }
}`
    }],
    uniapp: [{
      id: 'c1',
      filename: 'index.vue',
      code: `<template>
  <view>
    <!-- 渲染文本 -->
    <text>{{ name }}</text>
    
    <!-- 渲染列表 -->
    <view v-for="item in items" :key="item">
      <text>{{ item }}</text>
    </view>
    
    <!-- 条件渲染 -->
    <text v-if="show">显示内容</text>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('张三')
const items = ref(['苹果', '香蕉', '橙子'])
const show = ref(true)
</script>`
    }],
    miniprogram: [{
      id: 'c1',
      filename: 'index.wxml',
      code: `<!-- 渲染文本 -->
<text>{{name}}</text>

<!-- 渲染列表 -->
<view wx:for="{{items}}" wx:key="*this">
  <text>{{item}}</text>
</view>

<!-- 条件渲染 -->
<text wx:if="{{show}}">显示内容</text>`
    }, {
      id: 'c2',
      filename: 'index.js',
      code: `Page({
  data: {
    name: '张三',
    items: ['苹果', '香蕉', '橙子'],
    show: true
  }
})`
    }],
    electron: [{
      id: 'c1',
      filename: 'renderer.js',
      code: `const data = {
  name: '张三',
  items: ['苹果', '香蕉', '橙子']
}

// 渲染文本
document.getElementById('name').textContent = data.name

// 渲染列表
const listEl = document.getElementById('list')
data.items.forEach(item => {
  const li = document.createElement('li')
  li.textContent = item
  listEl.appendChild(li)
})`
    }],
    qt: [{
      id: 'c1',
      filename: 'main.qml',
      code: `import QtQuick 2.15

Column {
    property string name: "张三"
    property var items: ["苹果", "香蕉", "橙子"]
    property bool show: true
    
    // 渲染文本
    Text { text: name }
    
    // 渲染列表
    Repeater {
        model: items
        Text { text: modelData }
    }
    
    // 条件渲染
    Text {
        text: "显示内容"
        visible: show
    }
}`
    }]
  }
}

// 获取页面数据知识点
const kpGetData: KnowledgePoint = {
  id: 'fe-get-data',
  title: '获取页面数据',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '从表单元素或组件中获取用户输入的数据' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'index.html',
      code: `<input id="input" type="text" />
<button onclick="getData()">获取数据</button>

<script>
function getData() {
  const value = document.getElementById('input').value
  console.log('输入的值:', value)
}
</script>`
    }],
    vue: [{
      id: 'c1',
      filename: 'App.vue',
      code: `<template>
  <div>
    <!-- v-model双向绑定 -->
    <input v-model="inputValue" />
    <button @click="getData">获取数据</button>
    <p>输入的值: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')

const getData = () => {
  console.log('输入的值:', inputValue.value)
}
</script>`
    }],
    react: [{
      id: 'c1',
      filename: 'App.jsx',
      code: `import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  
  const getData = () => {
    console.log('输入的值:', inputValue)
  }
  
  return (
    <div>
      <input 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)} 
      />
      <button onClick={getData}>获取数据</button>
      <p>输入的值: {inputValue}</p>
    </div>
  )
}`
    }],
    android: [{
      id: 'c1',
      filename: 'MainActivity.kt',
      code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val editText = findViewById<EditText>(R.id.editText)
        val button = findViewById<Button>(R.id.button)
        
        button.setOnClickListener {
            val value = editText.text.toString()
            Log.d("Data", "输入的值: $value")
        }
    }
}`
    }],
    ios: [{
      id: 'c1',
      filename: 'ContentView.swift',
      code: `import SwiftUI

struct ContentView: View {
    @State private var inputValue = ""
    
    var body: some View {
        VStack {
            TextField("请输入", text: $inputValue)
            
            Button("获取数据") {
                print("输入的值: \\(inputValue)")
            }
            
            Text("输入的值: \\(inputValue)")
        }
    }
}`
    }],
    harmonyos: [{
      id: 'c1',
      filename: 'Index.ets',
      code: `@Entry
@Component
struct Index {
  @State inputValue: string = ''
  
  build() {
    Column() {
      TextInput({ placeholder: '请输入' })
        .onChange((value: string) => {
          this.inputValue = value
        })
      
      Button('获取数据')
        .onClick(() => {
          console.log('输入的值:', this.inputValue)
        })
      
      Text('输入的值: ' + this.inputValue)
    }
  }
}`
    }],
    uniapp: [{
      id: 'c1',
      filename: 'index.vue',
      code: `<template>
  <view>
    <input v-model="inputValue" />
    <button @click="getData">获取数据</button>
    <text>输入的值: {{ inputValue }}</text>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')

const getData = () => {
  console.log('输入的值:', inputValue.value)
}
</script>`
    }],
    miniprogram: [{
      id: 'c1',
      filename: 'index.wxml',
      code: `<input value="{{inputValue}}" bindinput="onInput" />
<button bindtap="getData">获取数据</button>
<text>输入的值: {{inputValue}}</text>`
    }, {
      id: 'c2',
      filename: 'index.js',
      code: `Page({
  data: {
    inputValue: ''
  },
  
  onInput(e) {
    this.setData({ inputValue: e.detail.value })
  },
  
  getData() {
    console.log('输入的值:', this.data.inputValue)
  }
})`
    }],
    electron: [{
      id: 'c1',
      filename: 'renderer.js',
      code: `const input = document.getElementById('input')
const button = document.getElementById('button')

button.addEventListener('click', () => {
  const value = input.value
  console.log('输入的值:', value)
})`
    }],
    qt: [{
      id: 'c1',
      filename: 'main.qml',
      code: `import QtQuick 2.15
import QtQuick.Controls 2.15

Column {
    property string inputValue: ""
    
    TextField {
        id: input
        onTextChanged: inputValue = text
    }
    
    Button {
        text: "获取数据"
        onClicked: console.log("输入的值:", inputValue)
    }
    
    Text { text: "输入的值: " + inputValue }
}`
    }]
  }
}

// 修改页面数据知识点
const kpModifyData: KnowledgePoint = {
  id: 'fe-modify-data',
  title: '修改页面数据',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '修改数据后自动更新页面显示（响应式）' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'index.html',
      code: `<p id="count">0</p>
<button onclick="increment()">+1</button>

<script>
let count = 0

function increment() {
  count++
  // 手动更新DOM
  document.getElementById('count').textContent = count
}
</script>`
    }],
    vue: [{
      id: 'c1',
      filename: 'App.vue',
      code: `<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

// 修改数据，页面自动更新
const increment = () => {
  count.value++
}
</script>`
    }],
    react: [{
      id: 'c1',
      filename: 'App.jsx',
      code: `import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  // 修改数据，页面自动更新
  const increment = () => {
    setCount(count + 1)
  }
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  )
}`
    }],
    android: [{
      id: 'c1',
      filename: 'MainActivity.kt',
      code: `class MainActivity : AppCompatActivity() {
    private var count = 0
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val textView = findViewById<TextView>(R.id.countText)
        val button = findViewById<Button>(R.id.button)
        
        button.setOnClickListener {
            count++
            textView.text = count.toString()
        }
    }
}`
    }],
    ios: [{
      id: 'c1',
      filename: 'ContentView.swift',
      code: `import SwiftUI

struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("\\(count)")
            
            Button("+1") {
                count += 1  // 修改数据，页面自动更新
            }
        }
    }
}`
    }],
    harmonyos: [{
      id: 'c1',
      filename: 'Index.ets',
      code: `@Entry
@Component
struct Index {
  @State count: number = 0
  
  build() {
    Column() {
      Text(this.count.toString())
      
      Button('+1')
        .onClick(() => {
          this.count++  // 修改数据，页面自动更新
        })
    }
  }
}`
    }],
    uniapp: [{
      id: 'c1',
      filename: 'index.vue',
      code: `<template>
  <view>
    <text>{{ count }}</text>
    <button @click="increment">+1</button>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++  // 修改数据，页面自动更新
}
</script>`
    }],
    miniprogram: [{
      id: 'c1',
      filename: 'index.wxml',
      code: `<text>{{count}}</text>
<button bindtap="increment">+1</button>`
    }, {
      id: 'c2',
      filename: 'index.js',
      code: `Page({
  data: {
    count: 0
  },
  
  increment() {
    // 使用setData修改数据
    this.setData({
      count: this.data.count + 1
    })
  }
})`
    }],
    electron: [{
      id: 'c1',
      filename: 'renderer.js',
      code: `let count = 0
const countEl = document.getElementById('count')
const button = document.getElementById('button')

button.addEventListener('click', () => {
  count++
  countEl.textContent = count
})`
    }],
    qt: [{
      id: 'c1',
      filename: 'main.qml',
      code: `import QtQuick 2.15
import QtQuick.Controls 2.15

Column {
    property int count: 0
    
    Text { text: count }
    
    Button {
        text: "+1"
        onClicked: count++  // 修改数据，页面自动更新
    }
}`
    }]
  }
}

// 数据共享知识点
const kpDataShare: KnowledgePoint = {
  id: 'fe-data-share',
  title: '数据共享',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '在多个组件或页面之间共享数据，实现全局状态管理' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'store.js',
      code: `// 简单的全局状态管理
const store = {
  state: {
    user: null,
    count: 0
  },
  
  setUser(user) {
    this.state.user = user
    this.notify()
  },
  
  listeners: [],
  subscribe(fn) { this.listeners.push(fn) },
  notify() { this.listeners.forEach(fn => fn(this.state)) }
}

// 使用
store.subscribe(state => console.log('状态更新:', state))
store.setUser({ name: '张三' })`
    }],
    vue: [{
      id: 'c1',
      filename: 'store.js',
      code: `// Pinia状态管理
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    count: 0
  }),
  
  actions: {
    setUser(user) {
      this.user = user
    },
    increment() {
      this.count++
    }
  }
})`
    }, {
      id: 'c2',
      filename: 'App.vue',
      code: `<template>
  <div>
    <p>用户: {{ userStore.user?.name }}</p>
    <p>计数: {{ userStore.count }}</p>
    <button @click="userStore.increment">+1</button>
  </div>
</template>

<script setup>
import { useUserStore } from './store'

const userStore = useUserStore()
</script>`
    }],
    react: [{
      id: 'c1',
      filename: 'store.js',
      code: `// Zustand状态管理
import { create } from 'zustand'

export const useStore = create((set) => ({
  user: null,
  count: 0,
  
  setUser: (user) => set({ user }),
  increment: () => set((state) => ({ count: state.count + 1 }))
}))`
    }, {
      id: 'c2',
      filename: 'App.jsx',
      code: `import { useStore } from './store'

function App() {
  const { user, count, increment } = useStore()
  
  return (
    <div>
      <p>用户: {user?.name}</p>
      <p>计数: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  )
}`
    }],
    android: [{
      id: 'c1',
      filename: 'UserViewModel.kt',
      code: `// ViewModel共享数据
class UserViewModel : ViewModel() {
    private val _user = MutableLiveData<User?>()
    val user: LiveData<User?> = _user
    
    private val _count = MutableLiveData(0)
    val count: LiveData<Int> = _count
    
    fun setUser(user: User) {
        _user.value = user
    }
    
    fun increment() {
        _count.value = (_count.value ?: 0) + 1
    }
}`
    }],
    ios: [{
      id: 'c1',
      filename: 'UserStore.swift',
      code: `import SwiftUI

// ObservableObject共享数据
class UserStore: ObservableObject {
    @Published var user: User?
    @Published var count = 0
    
    func setUser(_ user: User) {
        self.user = user
    }
    
    func increment() {
        count += 1
    }
}

// 使用
struct ContentView: View {
    @StateObject var store = UserStore()
    
    var body: some View {
        VStack {
            Text("用户: \\(store.user?.name ?? "")")
            Text("计数: \\(store.count)")
            Button("+1") { store.increment() }
        }
    }
}`
    }],
    harmonyos: [{
      id: 'c1',
      filename: 'AppStorage.ets',
      code: `// AppStorage全局状态
AppStorage.SetOrCreate('user', null)
AppStorage.SetOrCreate('count', 0)

@Entry
@Component
struct Index {
  @StorageLink('user') user: object | null = null
  @StorageLink('count') count: number = 0
  
  build() {
    Column() {
      Text('计数: ' + this.count)
      
      Button('+1')
        .onClick(() => {
          this.count++
        })
    }
  }
}`
    }],
    uniapp: [{
      id: 'c1',
      filename: 'store.js',
      code: `// Pinia状态管理
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    count: 0
  }),
  
  actions: {
    setUser(user) {
      this.user = user
    },
    increment() {
      this.count++
    }
  }
})`
    }],
    miniprogram: [{
      id: 'c1',
      filename: 'app.js',
      code: `// 全局数据
App({
  globalData: {
    user: null,
    count: 0
  },
  
  setUser(user) {
    this.globalData.user = user
  },
  
  increment() {
    this.globalData.count++
  }
})`
    }, {
      id: 'c2',
      filename: 'index.js',
      code: `const app = getApp()

Page({
  data: {
    count: 0
  },
  
  onShow() {
    // 从全局获取数据
    this.setData({
      count: app.globalData.count
    })
  },
  
  increment() {
    app.increment()
    this.setData({ count: app.globalData.count })
  }
})`
    }],
    electron: [{
      id: 'c1',
      filename: 'store.js',
      code: `// 简单的状态管理
class Store {
  constructor() {
    this.state = { user: null, count: 0 }
    this.listeners = []
  }
  
  subscribe(fn) { this.listeners.push(fn) }
  notify() { this.listeners.forEach(fn => fn(this.state)) }
  
  setUser(user) {
    this.state.user = user
    this.notify()
  }
  
  increment() {
    this.state.count++
    this.notify()
  }
}

module.exports = new Store()`
    }],
    qt: [{
      id: 'c1',
      filename: 'main.qml',
      code: `import QtQuick 2.15

// 全局单例状态
pragma Singleton

QtObject {
    id: store
    
    property var user: null
    property int count: 0
    
    function setUser(u) { user = u }
    function increment() { count++ }
}`
    }]
  }
}

// HTTP网络请求知识点
const kpHttpRequest: KnowledgePoint = {
  id: 'fe-http-request',
  title: 'HTTP网络请求',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '与服务器进行数据交互，获取或提交数据' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'index.js',
      code: `// 使用fetch发送请求
// GET请求
fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data))

// POST请求
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: '张三' })
})
  .then(res => res.json())
  .then(data => console.log(data))`
    }],
    vue: [{
      id: 'c1',
      filename: 'App.vue',
      code: `<template>
  <div>
    <p v-for="user in users" :key="user.id">{{ user.name }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])

onMounted(async () => {
  // GET请求
  const { data } = await axios.get('/api/users')
  users.value = data
})

// POST请求
const createUser = async () => {
  await axios.post('/api/users', { name: '张三' })
}
</script>`
    }],
    react: [{
      id: 'c1',
      filename: 'App.jsx',
      code: `import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    // GET请求
    axios.get('/api/users')
      .then(res => setUsers(res.data))
  }, [])
  
  // POST请求
  const createUser = async () => {
    await axios.post('/api/users', { name: '张三' })
  }
  
  return (
    <div>
      {users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  )
}`
    }],
    android: [{
      id: 'c1',
      filename: 'ApiService.kt',
      code: `// Retrofit网络请求
interface ApiService {
    @GET("users")
    suspend fun getUsers(): List<User>
    
    @POST("users")
    suspend fun createUser(@Body user: User): User
}

// 使用
class UserRepository(private val api: ApiService) {
    suspend fun getUsers() = api.getUsers()
    suspend fun createUser(name: String) = api.createUser(User(name = name))
}`
    }],
    ios: [{
      id: 'c1',
      filename: 'ApiService.swift',
      code: `import Foundation

class ApiService {
    // GET请求
    func getUsers() async throws -> [User] {
        let url = URL(string: "https://api.example.com/users")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return try JSONDecoder().decode([User].self, from: data)
    }
    
    // POST请求
    func createUser(name: String) async throws -> User {
        var request = URLRequest(url: URL(string: "https://api.example.com/users")!)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = try JSONEncoder().encode(["name": name])
        
        let (data, _) = try await URLSession.shared.data(for: request)
        return try JSONDecoder().decode(User.self, from: data)
    }
}`
    }],
    harmonyos: [{
      id: 'c1',
      filename: 'HttpRequest.ets',
      code: `import http from '@ohos.net.http'

// 创建HTTP请求
let httpRequest = http.createHttp()

// GET请求
httpRequest.request(
  'https://api.example.com/users',
  { method: http.RequestMethod.GET },
  (err, data) => {
    if (!err) {
      console.log('数据:', JSON.parse(data.result as string))
    }
  }
)

// POST请求
httpRequest.request(
  'https://api.example.com/users',
  {
    method: http.RequestMethod.POST,
    header: { 'Content-Type': 'application/json' },
    extraData: JSON.stringify({ name: '张三' })
  },
  (err, data) => {
    if (!err) {
      console.log('创建成功:', data.result)
    }
  }
)`
    }],
    uniapp: [{
      id: 'c1',
      filename: 'api.js',
      code: `// GET请求
uni.request({
  url: 'https://api.example.com/users',
  method: 'GET',
  success: (res) => {
    console.log('数据:', res.data)
  }
})

// POST请求
uni.request({
  url: 'https://api.example.com/users',
  method: 'POST',
  data: { name: '张三' },
  success: (res) => {
    console.log('创建成功:', res.data)
  }
})`
    }],
    miniprogram: [{
      id: 'c1',
      filename: 'index.js',
      code: `// GET请求
wx.request({
  url: 'https://api.example.com/users',
  method: 'GET',
  success: (res) => {
    console.log('数据:', res.data)
  }
})

// POST请求
wx.request({
  url: 'https://api.example.com/users',
  method: 'POST',
  data: { name: '张三' },
  success: (res) => {
    console.log('创建成功:', res.data)
  }
})`
    }],
    electron: [{
      id: 'c1',
      filename: 'renderer.js',
      code: `// 使用fetch或axios
const axios = require('axios')

// GET请求
axios.get('https://api.example.com/users')
  .then(res => console.log(res.data))

// POST请求
axios.post('https://api.example.com/users', { name: '张三' })
  .then(res => console.log(res.data))`
    }],
    qt: [{
      id: 'c1',
      filename: 'main.cpp',
      code: `#include <QNetworkAccessManager>
#include <QNetworkRequest>
#include <QNetworkReply>

QNetworkAccessManager *manager = new QNetworkAccessManager();

// GET请求
QNetworkReply *reply = manager->get(QNetworkRequest(QUrl("https://api.example.com/users")));
connect(reply, &QNetworkReply::finished, [reply]() {
    QByteArray data = reply->readAll();
    qDebug() << "数据:" << data;
});

// POST请求
QNetworkRequest request(QUrl("https://api.example.com/users"));
request.setHeader(QNetworkRequest::ContentTypeHeader, "application/json");
manager->post(request, QByteArray("{\"name\":\"张三\"}"));`
    }]
  }
}

// 缓存知识点
const kpCache: KnowledgePoint = {
  id: 'fe-cache',
  title: '缓存',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '在本地存储数据，避免重复请求，提升性能' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'index.js',
      code: `// localStorage - 永久存储
localStorage.setItem('user', JSON.stringify({ name: '张三' }))
const user = JSON.parse(localStorage.getItem('user'))
localStorage.removeItem('user')

// sessionStorage - 会话存储
sessionStorage.setItem('token', 'xxx')
const token = sessionStorage.getItem('token')`
    }],
    vue: [{
      id: 'c1',
      filename: 'useCache.js',
      code: `// 封装缓存工具
export function useCache() {
  const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  
  const get = (key) => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }
  
  const remove = (key) => {
    localStorage.removeItem(key)
  }
  
  return { set, get, remove }
}

// 使用
const { set, get } = useCache()
set('user', { name: '张三' })
const user = get('user')`
    }],
    react: [{
      id: 'c1',
      filename: 'useCache.js',
      code: `import { useState, useEffect } from 'react'

// 缓存Hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  
  return [value, setValue]
}

// 使用
const [user, setUser] = useLocalStorage('user', null)
setUser({ name: '张三' })`
    }],
    android: [{
      id: 'c1',
      filename: 'CacheManager.kt',
      code: `// SharedPreferences缓存
class CacheManager(context: Context) {
    private val prefs = context.getSharedPreferences("app_cache", Context.MODE_PRIVATE)
    
    fun setString(key: String, value: String) {
        prefs.edit().putString(key, value).apply()
    }
    
    fun getString(key: String): String? {
        return prefs.getString(key, null)
    }
    
    fun setObject(key: String, obj: Any) {
        val json = Gson().toJson(obj)
        setString(key, json)
    }
    
    inline fun <reified T> getObject(key: String): T? {
        val json = getString(key) ?: return null
        return Gson().fromJson(json, T::class.java)
    }
}`
    }],
    ios: [{
      id: 'c1',
      filename: 'CacheManager.swift',
      code: `import Foundation

class CacheManager {
    static let shared = CacheManager()
    private let defaults = UserDefaults.standard
    
    func set<T: Codable>(_ value: T, forKey key: String) {
        let data = try? JSONEncoder().encode(value)
        defaults.set(data, forKey: key)
    }
    
    func get<T: Codable>(forKey key: String) -> T? {
        guard let data = defaults.data(forKey: key) else { return nil }
        return try? JSONDecoder().decode(T.self, from: data)
    }
    
    func remove(forKey key: String) {
        defaults.removeObject(forKey: key)
    }
}

// 使用
CacheManager.shared.set(User(name: "张三"), forKey: "user")
let user: User? = CacheManager.shared.get(forKey: "user")`
    }],
    harmonyos: [{
      id: 'c1',
      filename: 'CacheManager.ets',
      code: `import dataPreferences from '@ohos.data.preferences'

// Preferences缓存
class CacheManager {
  private preferences: dataPreferences.Preferences | null = null
  
  async init(context: Context) {
    this.preferences = await dataPreferences.getPreferences(context, 'app_cache')
  }
  
  async set(key: string, value: any) {
    await this.preferences?.put(key, JSON.stringify(value))
    await this.preferences?.flush()
  }
  
  async get(key: string) {
    const value = await this.preferences?.get(key, '') as string
    return value ? JSON.parse(value) : null
  }
}

export default new CacheManager()`
    }],
    uniapp: [{
      id: 'c1',
      filename: 'cache.js',
      code: `// 同步存储
uni.setStorageSync('user', { name: '张三' })
const user = uni.getStorageSync('user')
uni.removeStorageSync('user')

// 异步存储
uni.setStorage({
  key: 'user',
  data: { name: '张三' },
  success: () => console.log('存储成功')
})

uni.getStorage({
  key: 'user',
  success: (res) => console.log(res.data)
})`
    }],
    miniprogram: [{
      id: 'c1',
      filename: 'index.js',
      code: `// 同步存储
wx.setStorageSync('user', { name: '张三' })
const user = wx.getStorageSync('user')
wx.removeStorageSync('user')

// 异步存储
wx.setStorage({
  key: 'user',
  data: { name: '张三' },
  success: () => console.log('存储成功')
})

wx.getStorage({
  key: 'user',
  success: (res) => console.log(res.data)
})`
    }],
    electron: [{
      id: 'c1',
      filename: 'store.js',
      code: `// 使用electron-store
const Store = require('electron-store')
const store = new Store()

// 存储
store.set('user', { name: '张三' })

// 读取
const user = store.get('user')

// 删除
store.delete('user')

// 检查是否存在
if (store.has('user')) {
  console.log('用户存在')
}`
    }],
    qt: [{
      id: 'c1',
      filename: 'main.cpp',
      code: `#include <QSettings>

// QSettings缓存
QSettings settings("MyApp", "MyOrg");

// 存储
settings.setValue("user/name", "张三");
settings.setValue("user/age", 18);

// 读取
QString name = settings.value("user/name").toString();
int age = settings.value("user/age").toInt();

// 删除
settings.remove("user");`
    }]
  }
}

// 页面跳转和传值知识点
const kpNavigation: KnowledgePoint = {
  id: 'fe-navigation',
  title: '页面跳转和传值',
  video: {
    html: 'https://www.w3schools.com/html/mov_bbb.mp4',
    vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
    react: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '在不同页面之间跳转，并传递数据' }
  ],
  codeImpl: {
    html: [{
      id: 'c1',
      filename: 'index.js',
      code: `// URL参数传值
window.location.href = '/detail?id=1&name=张三'

// 获取URL参数
const params = new URLSearchParams(window.location.search)
const id = params.get('id')    // '1'
const name = params.get('name') // '张三'

// 返回上一页
window.history.back()`
    }],
    vue: [{
      id: 'c1',
      filename: 'index.vue',
      code: `<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 跳转并传参
const goDetail = () => {
  // query参数（URL可见）
  router.push({ path: '/detail', query: { id: 1 } })
  
  // params参数（URL不可见）
  router.push({ name: 'Detail', params: { id: 1 } })
}

// 获取参数
const id = route.query.id  // 或 route.params.id

// 返回
const goBack = () => router.back()
</script>`
    }],
    react: [{
      id: 'c1',
      filename: 'index.jsx',
      code: `import { useNavigate, useSearchParams, useParams } from 'react-router-dom'

function List() {
  const navigate = useNavigate()
  
  // 跳转并传参
  const goDetail = () => {
    navigate('/detail?id=1')
    // 或
    navigate('/detail/1')  // 动态路由
  }
  
  return <button onClick={goDetail}>查看详情</button>
}

function Detail() {
  const [searchParams] = useSearchParams()
  const { id } = useParams()
  
  // 获取query参数
  const queryId = searchParams.get('id')
  
  // 获取params参数
  console.log('id:', id)
}`
    }],
    android: [{
      id: 'c1',
      filename: 'MainActivity.kt',
      code: `// Intent跳转传值
class MainActivity : AppCompatActivity() {
    fun goDetail() {
        val intent = Intent(this, DetailActivity::class.java)
        intent.putExtra("id", 1)
        intent.putExtra("name", "张三")
        startActivity(intent)
    }
}

class DetailActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // 获取参数
        val id = intent.getIntExtra("id", 0)
        val name = intent.getStringExtra("name")
    }
}`
    }],
    ios: [{
      id: 'c1',
      filename: 'ContentView.swift',
      code: `import SwiftUI

struct ListView: View {
    var body: some View {
        NavigationStack {
            List {
                // NavigationLink跳转
                NavigationLink("查看详情") {
                    DetailView(id: 1, name: "张三")
                }
            }
        }
    }
}

struct DetailView: View {
    let id: Int
    let name: String
    
    var body: some View {
        VStack {
            Text("ID: \\(id)")
            Text("名称: \\(name)")
        }
    }
}`
    }],
    harmonyos: [{
      id: 'c1',
      filename: 'Index.ets',
      code: `import router from '@ohos.router'

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button('跳转详情')
        .onClick(() => {
          router.pushUrl({
            url: 'pages/Detail',
            params: { id: 1, name: '张三' }
          })
        })
    }
  }
}

// Detail页面获取参数
@Entry
@Component
struct Detail {
  @State id: number = 0
  @State name: string = ''
  
  aboutToAppear() {
    const params = router.getParams() as Record<string, any>
    this.id = params.id
    this.name = params.name
  }
  
  build() {
    Column() {
      Text('ID: ' + this.id)
      Text('名称: ' + this.name)
    }
  }
}`
    }],
    uniapp: [{
      id: 'c1',
      filename: 'index.vue',
      code: `<script setup>
import { onLoad } from '@dcloudio/uni-app'

// 跳转并传参
const goDetail = () => {
  uni.navigateTo({
    url: '/pages/detail/detail?id=1&name=张三'
  })
}

// 返回
const goBack = () => uni.navigateBack()
</script>

<!-- detail.vue -->
<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const id = ref('')
const name = ref('')

onLoad((options) => {
  id.value = options.id
  name.value = options.name
})
</script>`
    }],
    miniprogram: [{
      id: 'c1',
      filename: 'index.js',
      code: `// 跳转并传参
wx.navigateTo({
  url: '/pages/detail/detail?id=1&name=张三'
})

// 返回
wx.navigateBack()

// detail.js - 获取参数
Page({
  onLoad(options) {
    console.log('id:', options.id)
    console.log('name:', options.name)
  }
})`
    }],
    electron: [{
      id: 'c1',
      filename: 'main.js',
      code: `const { BrowserWindow, ipcMain } = require('electron')

// 创建新窗口并传参
function openDetail(id, name) {
  const win = new BrowserWindow({
    webPreferences: { nodeIntegration: true }
  })
  
  win.loadFile('detail.html')
  
  // 窗口加载完成后发送数据
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('init-data', { id, name })
  })
}

// detail.html 渲染进程
const { ipcRenderer } = require('electron')

ipcRenderer.on('init-data', (event, data) => {
  console.log('id:', data.id)
  console.log('name:', data.name)
})`
    }],
    qt: [{
      id: 'c1',
      filename: 'main.qml',
      code: `import QtQuick 2.15
import QtQuick.Controls 2.15

StackView {
    id: stackView
    initialItem: listPage
    
    Component {
        id: listPage
        Page {
            Button {
                text: "查看详情"
                onClicked: stackView.push(detailPage, { id: 1, name: "张三" })
            }
        }
    }
    
    Component {
        id: detailPage
        Page {
            property int id
            property string name
            
            Column {
                Text { text: "ID: " + id }
                Text { text: "名称: " + name }
            }
            
            Button {
                text: "返回"
                onClicked: stackView.pop()
            }
        }
    }
}`
    }]
  }
}

// ========== 课程结构 ==========

// 页面基础课程（参考HTML基础4个章节）
const pageBasicCourse: ProgrammingCourse = {
  id: 'page-basic',
  icon: '📄',
  title: '页面基础',
  chapters: [
    { 
      id: 'ch-first-page', 
      title: '第一个页面',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpDownloadTrae, kpCreateAndPreview, kpModifyPage] 
    },
    { 
      id: 'ch-content', 
      title: '商品详情页面',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpProductDiv] 
    },
    { 
      id: 'ch-form', 
      title: '结账表单',
      video: {
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpCheckoutForm] 
    },
    { 
      id: 'ch-layout', 
      title: '布局',
      video: {
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpFlexRow, kpFlexColumn, kpFlexAlign] 
    },
    { 
      id: 'ch-style', 
      title: '样式',
      video: {
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpStyle, kpSelector] 
    }
  ]
}

// 交互基础课程（语言基础已移至独立课程，此处只保留前端特有内容）
const interactionBasicCourse: ProgrammingCourse = {
  id: 'interaction-basic',
  icon: '🔗',
  title: '交互基础',
  chapters: [
    { 
      id: 'ch-event', 
      title: '事件',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpClickEvent, kpLoadEvent] 
    },
    { 
      id: 'ch-render-data', 
      title: '渲染页面数据',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpTextRender, kpAttrRender, kpCondRender, kpLoopRender] 
    },
    { 
      id: 'ch-get-data', 
      title: '获取页面数据',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpGetData] 
    },
    { 
      id: 'ch-modify-data', 
      title: '修改页面数据',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpModifyData] 
    },
    { 
      id: 'ch-http', 
      title: 'HTTP网络请求',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpHttpRequest] 
    },
    { 
      id: 'ch-navigation', 
      title: '页面跳转和传值',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpNavigation] 
    },
    { 
      id: 'ch-data-share', 
      title: '数据共享',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpDataShare] 
    },
    { 
      id: 'ch-cache', 
      title: '缓存',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpCache] 
    }
  ]
}

// 项目实战课程
const projectBasicCourse: ProgrammingCourse = {
  id: 'project-basic',
  icon: '🛠️',
  title: '项目实战',
  chapters: [
    { 
      id: 'ch-project-intro', 
      title: '入门项目',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [{
      id: 'kp-project-intro',
      title: '第一个项目',
      blocks: [{ id: 'b1', type: 'text', content: '综合运用页面、样式、交互知识完成一个完整项目。' }]
    }] }
  ]
}

// 页面进阶课程
const pageAdvancedCourse: ProgrammingCourse = {
  id: 'page-advanced',
  icon: '📄',
  title: '页面进阶',
  chapters: [
    { 
      id: 'ch-page-adv', 
      title: '高级组件',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [{
      id: 'kp-advanced-component',
      title: '高级组件模式',
      blocks: [{ id: 'b1', type: 'text', content: '学习复合组件、动态组件等进阶内容。' }]
    }] },
    { 
      id: 'ch-style-adv', 
      title: '高级样式',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [{
      id: 'kp-advanced-style',
      title: '响应式与动画',
      blocks: [{ id: 'b1', type: 'text', content: '学习响应式布局、CSS动画等进阶内容。' }]
    }] }
  ]
}

// 交互进阶课程
const interactionAdvancedCourse: ProgrammingCourse = {
  id: 'interaction-advanced',
  icon: '🔗',
  title: '交互进阶',
  chapters: [
    { 
      id: 'ch-adv-event', 
      title: '高级事件',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [{
      id: 'kp-advanced-event',
      title: '事件委托与节流',
      blocks: [{ id: 'b1', type: 'text', content: '学习事件委托、防抖节流等进阶内容。' }]
    }] }
  ]
}

// 项目实战进阶课程
const projectAdvancedCourse: ProgrammingCourse = {
  id: 'project-advanced',
  icon: '🏆',
  title: '项目实战进阶',
  chapters: [
    { 
      id: 'ch-project-adv', 
      title: '进阶项目',
      video: {
        html: 'https://www.w3schools.com/html/mov_bbb.mp4',
        vue: 'https://www.w3schools.com/html/mov_bbb.mp4',
        react: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [{
      id: 'kp-project-advanced',
      title: '复杂项目实战',
      blocks: [{ id: 'b1', type: 'text', content: '学习多页面应用、状态管理等进阶内容。' }]
    }] }
  ]
}

// 导出前端课程组
export const frontendCourseGroups: LanguageCourseGroup[] = [
  {
    id: 'frontend-group',
    title: '前端开发',
    courses: [
      pageBasicCourse,
      languageBasicCourse,  // 复用后端语言基础
      interactionBasicCourse,
      projectBasicCourse,
      pageAdvancedCourse,
      interactionAdvancedCourse,
      projectAdvancedCourse
    ]
  }
]
