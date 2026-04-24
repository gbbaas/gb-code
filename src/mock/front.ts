import type { Course } from '@/types/course'

export const frontendCourses: Course[] = [
  {
    "id": "frontend-basic",
    "pathId": "frontend",
    "title": "HTML基础",
    "desc": "写商品文章页面",
    "icon": "🌐",
    "chapters": [
      {
        "id": "ch1",
        "title": "环境安装",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "开发工具安装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "winget是Windows官方的软件包管理器，可以快速安装开发工具。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "bash",
                "filename": "PowerShell",
                "code": "# 安装Trae IDE\nwinget install Trae.Trae"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "也可以访问 https://www.trae.cn 官网下载Trae IDE"
              },
            ]
          },
          {
            "id": "l2",
            "title": "创建第一个网页",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "HTML文件是网页的基础，使用Trae创建一个.html文件。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "index.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>第一个网页</title>\n</head>\n<body>\n    <h1>第一个网页</h1>\n</body>\n</html>",
              },
              {
                "id": "b3",
                "type": "text",
                "content": "文件保存后，双击index.html即可在浏览器中打开查看效果。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "常用标签",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "文本标签",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "HTML使用标签来定义文本内容，以下是常用的文本标签："
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["标签", "名称", "示例", "显示效果"],
                "rows": [
                  ["<h1>~<h6>", "标题标签", "<h1>一级标题</h1>", "一级标题(最大)"],
                  ["<p>", "段落标签", "<p>这是段落</p>", "这是段落"],
                  ["<span>", "行内文本", "<span>文字</span>", "文字(不换行)"],
                  ["<strong>", "加粗强调", "<strong>重要</strong>", "重要(加粗)"],
                  ["<em>", "斜体强调", "<em>强调</em>", "强调(斜体)"],
                  ["<br>", "换行", "第一行<br>第二行", "第一行\n第二行"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "文本标签示例",
                "code": "<h1>这是一级标题</h1>\n<h2>这是二级标题</h2>\n<h3>这是三级标题</h3>\n<p>这是一个段落，段落会自动换行</p>\n<p>第二段文字，文字<strong>加粗</strong>和<em>斜体</em>都可以</p>\n<p>第一行<br>第二行（换行）</p>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "容器标签",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "容器标签用于组织和布局页面内容："
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["标签", "名称", "特点", "用途"],
                "rows": [
                  ["<div>", "块级容器", "独占一行，可设宽高", "页面布局、模块划分"],
                  ["<span>", "行内容器", "不独占一行", "文字样式分组"],
                  ["<header>", "头部容器", "语义化标签", "页面或区块头部"],
                  ["<footer>", "底部容器", "语义化标签", "页面或区块底部"],
                  ["<main>", "主体容器", "语义化标签", "页面主要内容"],
                  ["<nav>", "导航容器", "语义化标签", "导航链接区域"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "容器标签示例",
                "code": "<header>\n    <h1>网站标题</h1>\n</header>\n\n<main>\n    <div class=\"sidebar\">\n        侧边栏内容\n    </div>\n    <div class=\"content\">\n        <p>主要内容区域</p>\n        <p><span style=\"color:red\">红色文字</span>和普通文字</p>\n    </div>\n</main>\n\n<footer>\n    <p>底部版权信息</p>\n</footer>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "列表标签",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "列表用于展示并列的内容项："
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["标签", "名称", "特点", "子标签"],
                "rows": [
                  ["<ul>", "无序列表", "不带数字编号", "<li>列表项</li>"],
                  ["<ol>", "有序列表", "带数字/字母编号", "<li>列表项</li>"],
                  ["<li>", "列表项", "列表中的每一项", "可包含任意内容"],
                  ["<dl>", "定义列表", "用于术语解释", "<dt>名词</dt><dd>解释</dd>"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "列表示例",
                "code": "<!-- 无序列表 -->\n<ul>\n    <li>首页</li>\n    <li>产品列表</li>\n    <li>关于我们</li>\n</ul>\n\n<!-- 有序列表 -->\n<ol>\n    <li>打开购物车</li>\n    <li>确认商品信息</li>\n    <li>提交订单</li>\n</ol>\n\n<!-- 定义列表 -->\n<dl>\n    <dt>HTML</dt>\n    <dd>超文本标记语言，用于构建网页结构</dd>\n    <dt>CSS</dt>\n    <dd>层叠样式表，用于控制页面外观</dd>\n</dl>"
              }
            ]
          },
          {
            "id": "l4",
            "title": "链接与图片",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["标签", "属性", "说明", "示例"],
                "rows": [
                  ["<a>", "href", "跳转地址", "<a href=\"url\">链接文字</a>"],
                  ["<a>", "target", "打开方式", "_blank新窗口打开"],
                  ["<img>", "src", "图片地址", "<img src=\"图片.jpg\">"],
                  ["<img>", "alt", "替代文字", "图片加载失败时显示"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "链接与图片示例",
                "code": "<!-- 链接 -->\n<a href=\"https://www.example.com\">访问示例网站</a>\n<a href=\"page2.html\">跳转到第二页</a>\n<a href=\"https://www.example.com\" target=\"_blank\">新窗口打开</a>\n\n<!-- 图片 -->\n<img src=\"logo.png\" alt=\"网站Logo\">\n<img src=\"https://example.com/banner.jpg\" alt=\"横幅图片\">"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "表单",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "输入框",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "input标签通过type属性可以创建多种输入框："
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["type值", "输入框类型", "示例"],
                "rows": [
                  ["text", "单行文本框", "<input type=\"text\">"],
                  ["password", "密码框", "<input type=\"password\">"],
                  ["email", "邮箱输入", "<input type=\"email\">"],
                  ["number", "数字输入", "<input type=\"number\">"],
                  ["tel", "电话输入", "<input type=\"tel\">"],
                  ["url", "网址输入", "<input type=\"url\">"],
                  ["date", "日期选择", "<input type=\"date\">"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "输入框示例",
                "code": "<div>\n    <label>账号：</label>\n    <input type=\"text\" placeholder=\"请输入账号\">\n</div>\n<div>\n    <label>密码：</label>\n    <input type=\"password\" placeholder=\"请输入密码\">\n</div>\n<div>\n    <label>邮箱：</label>\n    <input type=\"email\" placeholder=\"example@mail.com\">\n</div>\n<div>\n    <label>生日：</label>\n    <input type=\"date\">\n</div>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "选择框",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["标签", "作用", "关键属性"],
                "rows": [
                  ["<textarea>", "多行文本输入", "rows行数,cols列数"],
                  ["<select>", "下拉选择框", "name,multiple多选"],
                  ["<option>", "选择选项", "value选项值,selected默认选中"],
                  ["<input type=\"radio\">", "单选按钮", "name相同才能单选"],
                  ["<input type=\"checkbox\">", "复选框", "可多选"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "选择框示例",
                "code": "<!-- 多行文本 -->\n<div>\n    <label>备注：</label>\n    <textarea rows=\"4\" cols=\"30\" placeholder=\"请输入备注信息\"></textarea>\n</div>\n\n<!-- 单选按钮 -->\n<div>\n    <label>性别：</label>\n    <input type=\"radio\" name=\"gender\" value=\"male\"> 男\n    <input type=\"radio\" name=\"gender\" value=\"female\"> 女\n</div>\n\n<!-- 复选框 -->\n<div>\n    <label>爱好：</label>\n    <input type=\"checkbox\" name=\"hobby\" value=\"reading\"> 阅读\n    <input type=\"checkbox\" name=\"hobby\" value=\"music\"> 音乐\n    <input type=\"checkbox\" name=\"hobby\" value=\"sports\"> 运动\n</div>\n\n<!-- 下拉选择 -->\n<div>\n    <label>城市：</label>\n    <select name=\"city\">\n        <option value=\"beijing\">北京</option>\n        <option value=\"shanghai\">上海</option>\n        <option value=\"guangzhou\">广州</option>\n    </select>\n</div>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "按钮",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["标签", "作用", "type属性"],
                "rows": [
                  ["<button>", "按钮", "submit/button/reset"],
                  ["<input type=\"button\">", "按钮", "button"],
                  ["<input type=\"submit\">", "提交按钮", "submit"],
                  ["<input type=\"reset\">", "重置按钮", "reset"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "按钮示例",
                "code": `<!-- 普通按钮 -->
<button type="button">普通按钮</button>

<!-- 提交按钮 -->
<button type="submit">提交表单</button>

<!-- 重置按钮 -->
<button type="reset">重置表单</button>

<!-- 输入类型按钮 -->
<input type="button" value="点击我">
<input type="submit" value="提交">
<input type="reset" value="重置">` 
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "样式",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "文字样式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "CSS用于控制页面的显示效果，文字样式是最基础的内容："
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["属性", "作用", "常用值"],
                "rows": [
                  ["color", "文字颜色", "#fff / rgb(255,255,255) / red"],
                  ["font-size", "字体大小", "16px / 1rem / 50%"],
                  ["font-weight", "字体粗细", "normal / bold / 100-900"],
                  ["font-family", "字体类型", "Arial / '微软雅黑' / sans-serif"],
                  ["text-align", "文字对齐", "left / center / right"],
                  ["line-height", "行高", "1.5 / 24px / 150%"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "文字样式示例",
                "code": "<p style=\"color: #333; font-size: 18px;\">深灰色文字，18像素大小</p>\n<p style=\"color: blue; font-weight: bold;\">蓝色加粗文字</p>\n<p style=\"font-family: '微软雅黑'; text-align: center;\">居中显示的微软雅黑文字</p>\n<p style=\"line-height: 2;\">这是一段拥有较大行高的文字，\n换行后可以看到效果</p>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "背景与边框",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["属性", "作用", "常用值"],
                "rows": [
                  ["background-color", "背景颜色", "#f0f0f0 / transparent"],
                  ["background-image", "背景图片", "url('img.png')"],
                  ["border", "边框", "1px solid #333"],
                  ["border-radius", "圆角", "4px / 50%"],
                  ["box-shadow", "阴影", "0 2px 4px rgba(0,0,0,0.1)"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "背景边框示例",
                "code": "<div style=\"background-color: #4A90D9; padding: 20px;\">\n    <p style=\"color: white;\">蓝色背景的容器</p>\n</div>\n\n<div style=\"border: 2px solid #333; padding: 15px; margin-top: 10px;\">\n    带边框的容器\n</div>\n\n<div style=\"border-radius: 8px; background: #f5f5f5; padding: 20px; margin-top: 10px;\">\n    圆角容器\n</div>\n\n<div style=\"box-shadow: 0 4px 8px rgba(0,0,0,0.2); padding: 20px; margin-top: 10px;\">\n    带阴影的卡片效果\n</div>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "内边距与外边距",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "内边距(padding)是元素内部的空间，外边距(margin)是元素外部的空间："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "间距示例",
                "code": "<!-- 内边距示例 -->\n<div style=\"background: #e0e0e0; padding: 20px;\">\n    <div style=\"background: #fff;\">有20px内边距的容器</div>\n</div>\n\n<!-- 外边距示例 -->\n<div style=\"background: #e0e0e0;\">\n    <div style=\"background: #4A90D9; margin: 10px;\">第1个元素</div>\n    <div style=\"background: #4A90D9; margin: 10px;\">第2个元素</div>\n</div>\n\n<!-- 简写形式 -->\n<div style=\"padding: 10px 20px;\">上下10px，左右20px</div>\n<div style=\"margin: 5px 10px 15px 20px;\">上5右10下15左20</div>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "布局",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "标准文档流",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "HTML元素默认按照文档流排列：块级元素独占一行，行内元素不独占一行。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["元素类型", "特点", "代表标签"],
                "rows": [
                  ["块级元素", "独占一行，可设宽高", "<div> <p> <h1>~<h6> <ul> <ol>"],
                  ["行内元素", "不独占一行，宽度随内容", "<span> <a> <strong> <em> <img>"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "文档流示例",
                "code": "<!-- 块级元素：每个都独占一行 -->\n<div>第一个div</div>\n<div>第二个div</div>\n<div>第三个div</div>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "Flex布局",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Flex布局是现代CSS推荐的布局方式，用`display:flex`开启，非常适合做页面排版。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["父容器属性", "作用", "常用值"],
                "rows": [
                  ["display:flex", "开启Flex布局", "flex"],
                  ["flex-direction", "主轴方向", "row/column"],
                  ["justify-content", "主轴对齐", "center/start/end/space-between"],
                  ["align-items", "交叉轴对齐", "center/start/end/stretch"],
                  ["gap", "元素间距", "10px/1rem"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "Flex基础示例",
                "code": "<div style=\"display: flex; gap: 10px;\">\n    <div style=\"padding: 10px 20px; background: #3498db; color: white;\">盒子1</div>\n    <div style=\"padding: 10px 20px; background: #3498db; color: white;\">盒子2</div>\n    <div style=\"padding: 10px 20px; background: #3498db; color: white;\">盒子3</div>\n</div>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "Flex布局对齐",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["对齐方式", "属性值", "效果"],
                "rows": [
                  ["左对齐", "flex-start", "内容靠左"],
                  ["居中对齐", "center", "内容居中"],
                  ["右对齐", "flex-end", "内容靠右"],
                  ["两端对齐", "space-between", "两边贴边，中间平分"],
                  ["垂直居中", "center+align-items", "上下左右居中"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "Flex对齐示例",
                "code": "<!-- 左对齐 -->\n<div style=\"display: flex; justify-content: flex-start; gap: 10px;\">\n    <div style=\"padding: 10px 20px; background: #2ecc71; color: white;\">左侧</div>\n    <div style=\"padding: 10px 20px; background: #2ecc71; color: white;\">对齐</div>\n</div>\n\n<!-- 居中对齐 -->\n<div style=\"display: flex; justify-content: center; gap: 10px; margin-top: 10px;\">\n    <div style=\"padding: 10px 20px; background: #e74c3c; color: white;\">居中</div>\n    <div style=\"padding: 10px 20px; background: #e74c3c; color: white;\">内容</div>\n</div>\n\n<!-- 两端对齐 -->\n<div style=\"display: flex; justify-content: space-between; padding: 10px; margin-top: 10px; background: #ecf0f1;\">\n    <div style=\"padding: 10px 20px; background: #9b59b6; color: white;\">左</div>\n    <div style=\"padding: 10px 20px; background: #9b59b6; color: white;\">右</div>\n</div>\n\n<!-- 垂直居中 -->\n<div style=\"display: flex; justify-content: center; align-items: center; height: 100px; margin-top: 10px; background: #f5f5f5;\">\n    <div style=\"width: 60px; height: 60px; background: #f39c12; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: white;\">圆形</div>\n</div>"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-js",
    "pathId": "frontend",
    "title": "JavaScript",
    "desc": "ES6、异步、DOM操作",
    "icon": "⚡",
    "chapters": [
      {
        "id": "ch1",
        "title": "计算",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "算术运算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["运算符", "描述", "示例"],
                "rows": [
                  ["+", "加法", "5 + 3 = 8"],
                  ["-", "减法", "10 - 4 = 6"],
                  ["*", "乘法", "6 * 7 = 42"],
                  ["/", "除法", "20 / 4 = 5"],
                  ["%", "取余", "10 % 3 = 1"],
                  ["**", "幂运算", "2 ** 3 = 8"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "算术示例",
                "code": "let a = 10, b = 3;\nconsole.log(a + b);  // 13\nconsole.log(a - b);  // 7\nconsole.log(a * b);  // 30\nconsole.log(a / b);  // 3.33\nconsole.log(a % b);  // 1"
              }
            ]
          },
          {
            "id": "l2",
            "title": "比较运算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["运算符", "描述", "示例"],
                "rows": [
                  ["==", "相等", "5 == '5' 为 true"],
                  ["===", "严格相等", "5 === '5' 为 false"],
                  [">", "大于", "3 > 2 为 true"],
                  ["<", "小于", "2 < 3 为 true"],
                  [">=", "大于等于", "3 >= 3 为 true"],
                  ["<=", "小于等于", "3 <= 3 为 true"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "比较示例",
                "code": "console.log(5 > 3);     // true\nconsole.log(5 === '5'); // false\nconsole.log(5 == '5');   // true"
              }
            ]
          },
          {
            "id": "l3",
            "title": "逻辑运算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["运算符", "描述", "示例"],
                "rows": [
                  ["&&", "与", "两边都为true才为true"],
                  ["||", "或", "至少一边为true就为true"],
                  ["!", "非", "取反，true变false"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "逻辑示例",
                "code": "console.log(true && false);  // false\nconsole.log(true || false);  // true\nconsole.log(!true);           // false"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "存储",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "变量",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["声明方式", "关键字", "特点"],
                "rows": [
                  ["变量", "let", "可重新赋值"],
                  ["常量", "const", "不可重新赋值"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "变量示例",
                "code": "let name = '张三';\nname = '李四';  // 可以修改\nconsole.log(name);\n\nconst PI = 3.14159;\n// PI = 3;  // 错误，常量不能修改\nconsole.log(PI);"
              }
            ]
          },
          {
            "id": "l2",
            "title": "数据类型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["类型", "描述", "示例"],
                "rows": [
                  ["Number", "数字", "123, 3.14"],
                  ["String", "字符串", "'hello'"],
                  ["Boolean", "布尔值", "true, false"],
                  ["Array", "数组", "[1, 2, 3]"],
                  ["Object", "对象", "{name: '张三'}"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "类型示例",
                "code": "let num = 123;      // 数字\nlet str = 'hello';  // 字符串\nlet bool = true;     // 布尔值\nlet arr = [1,2,3];   // 数组\nlet obj = {name:'张三'}; // 对象\n\nconsole.log(num);\nconsole.log(str);\nconsole.log(bool);\nconsole.log(arr);\nconsole.log(obj);"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "流程控制",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "if条件分支",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["语句", "描述", "示例"],
                "rows": [
                  ["if", "单分支", "if(条件){ }"],
                  ["if else", "双分支", "if(条件){ }else{ }"],
                  ["else if", "多分支", "if{ }else if{ }else{ }"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "if语句示例",
                "code": "// if语句\nlet age = 18;\n\nif (age >= 18) {\n  console.log('成年人');\n} else if (age >= 13) {\n  console.log('青少年');\n} else {\n  console.log('儿童');\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "for循环",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["循环类型", "描述", "示例"],
                "rows": [
                  ["for", "计数循环", "for(let i=0;i<5;i++)"],
                  ["for...of", "遍历数组", "for(let item of arr)"],
                  ["for...in", "遍历对象", "for(let key in obj)"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "for循环示例",
                "code": "// 基本for循环\nfor (let i = 0; i < 3; i++) {\n  console.log('循环次数:', i);\n}\n\n// for...of遍历数组\nlet fruits = ['苹果', '香蕉', '橙子'];\nfor (let fruit of fruits) {\n  console.log('水果:', fruit);\n}\n\n// for...in遍历对象\nlet person = { name: '张三', age: 25 };\nfor (let key in person) {\n  console.log(key + ': ' + person[key]);\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "函数",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "函数",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["函数类型", "语法", "示例"],
                "rows": [
                  ["函数", "function(){}", "无参数无返回值"],
                  ["有参函数", "function(a,b){}", "有参数"],
                  ["有返回值", "return 结果", "return a+b"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "函数示例",
                "code": "// 函数：无参无返回\nfunction compare() {\n  let a = 10;\n  let b = 5;\n  if (a > b) {\n    console.log('a大于b');\n  } else {\n    console.log('a小于等于b');\n  }\n}\n\n// 有参函数：有参无返回\nfunction compare(a, b) {\n  if (a > b) {\n    console.log('a大于b');\n  } else {\n    console.log('a小于等于b');\n  }\n}\n\n// 有返回值：有参有返回（用变量接收）\nfunction compare(a, b) {\n  if (a > b) {\n    return 'a大于b';\n  } else {\n    return 'a小于等于b';\n  }\n}\n\ncompare();\ncompare(3, 8);\nlet result = compare(3, 8);\nconsole.log(result);"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "DOM交互",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "事件类型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "在HTML标签上直接加事件属性即可绑定事件："
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["事件属性", "触发时机", "示例"],
                "rows": [
                  ["onclick", "点击时", "<button onclick=\"fn()\">点击</button>"],
                  ["oninput", "输入时", "<input oninput=\"fn()\">"],
                  ["onchange", "变化时", "<input onchange=\"fn()\">"],
                  ["onfocus", "聚焦时", "<input onfocus=\"fn()\">"],
                  ["onblur", "失焦时", "<input onblur=\"fn()\">"],
                  ["onmouseover", "鼠标进入", "<div onmouseover=\"fn()\">"],
                  ["onmouseout", "鼠标离开", "<div onmouseout=\"fn()\">"],
                  ["onsubmit", "表单提交", "<form onsubmit=\"fn()\">"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "事件示例",
                "code": "<!DOCTYPE html>\n<html>\n<body>\n\n<!-- 点击事件 -->\n<button onclick=\"showAlert()\">点击弹出提示</button>\n\n<!-- 输入事件 -->\n<input type=\"text\" oninput=\"showValue(this.value)\" placeholder=\"输入内容\">\n<p id=\"result\">等待输入...</p>\n\n<!-- 鼠标悬停事件 -->\n<div onmouseover=\"this.style.background='#e0e0e0'\" \n     onmouseout=\"this.style.background='#f0f0f0'\"\n     style=\"padding:20px; background:#f0f0f0; margin-top:10px;\">\n    鼠标移入移出试试\n</div>\n\n<script>\nfunction showAlert() {\n    alert('按钮被点击了！');\n}\n\nfunction showValue(value) {\n    document.getElementById('result').textContent = '输入了: ' + value;\n}\n</script>\n\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "DOM操作",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["方法", "作用", "示例"],
                "rows": [
                  ["getElementById", "通过ID获取元素", "document.getElementById('id')"],
                  ["querySelector", "通过选择器获取", "document.querySelector('.class')"],
                  ["textContent", "获取/设置文本", "element.textContent = '文字'"],
                  ["innerHTML", "获取/设置HTML", "element.innerHTML = '<b>加粗</b>'"],
                  ["style", "获取/设置样式", "element.style.color = 'red'"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "DOM操作示例",
                "code": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id=\"title\">原始标题</h1>\n<p class=\"text\">这是第一个段落</p>\n\n<button onclick=\"changeContent()\">修改内容</button>\n<button onclick=\"changeStyle()\">修改样式</button>\n\n<script>\nfunction changeContent() {\n    document.getElementById('title').textContent = '新标题';\n    document.querySelector('.text').innerHTML = '<strong>加粗的段落</strong>';\n}\n\nfunction changeStyle() {\n    document.getElementById('title').style.color = 'blue';\n    document.getElementById('title').style.fontSize = '28px';\n}\n</script>\n\n</body>\n</html>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "网络请求",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "fetch API",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "fetch GET请求",
                "code": "// GET请求示例\nfetch('https://api.example.com/users')\n  .then(response => response.json())\n  .then(data => {\n    console.log('获取到的数据:', data);\n  })\n  .catch(error => {\n    console.error('请求错误:', error);\n  });\n\n// 带参数的GET请求\nconst userId = 1;\nfetch(`https://api.example.com/users/${userId}`)\n  .then(response => response.json())\n  .then(data => {\n    console.log('用户信息:', data);\n  });"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "fetch POST请求",
                "code": "// POST请求示例\nconst userData = {\n  name: '张三',\n  email: 'zhangsan@example.com',\n  age: 25\n};\n\nfetch('https://api.example.com/users', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify(userData)\n})\n  .then(response => response.json())\n  .then(data => {\n    console.log('创建成功:', data);\n  })\n  .catch(error => {\n    console.error('请求错误:', error);\n  });"
              }
            ]
          },
          {
            "id": "l2",
            "title": "async/await语法",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "async/await示例",
                "code": "// 使用async/await\nasync function fetchUserData() {\n  try {\n    const response = await fetch('https://api.example.com/users');\n    const data = await response.json();\n    console.log('用户数据:', data);\n    return data;\n  } catch (error) {\n    console.error('请求失败:', error);\n    throw error;\n  }\n}\n\n// 调用异步函数\nfetchUserData()\n  .then(data => {\n    console.log('处理数据:', data);\n  })\n  .catch(error => {\n    console.error('处理错误:', error);\n  });\n\n// 并行请求\nasync function fetchMultipleData() {\n  try {\n    const [users, posts] = await Promise.all([\n      fetch('https://api.example.com/users').then(r => r.json()),\n      fetch('https://api.example.com/posts').then(r => r.json())\n    ]);\n    \n    console.log('用户:', users);\n    console.log('帖子:', posts);\n  } catch (error) {\n    console.error('请求失败:', error);\n  }\n}"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-vue",
    "pathId": "frontend",
    "title": "Vue框架",
    "desc": "Vue3、组件、路由",
    "icon": "🎯",
    "chapters": [
      {
        "id": "ch1",
        "title": "Vue基础",
        "lessons": [
          {
            "id": "l1",
            "title": "Vue简介",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Vue是一个渐进式JavaScript框架。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-react",
    "pathId": "frontend",
    "title": "React框架",
    "desc": "React、Hooks、状态管理",
    "icon": "⚛️",
    "chapters": [
      {
        "id": "ch1",
        "title": "React基础",
        "lessons": [
          {
            "id": "l1",
            "title": "React简介",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "React是一个用于构建用户界面的JavaScript库。"
              }
            ]
          }
        ]
      }
    ]
  }
]
