(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{290:function(a,e,_){"use strict";_.r(e);var r=_(13),v=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"_1-webpack-构建流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack-构建流程"}},[a._v("#")]),a._v(" 1.webpack 构建流程")]),a._v(" "),e("ol",[e("li",[a._v("初始化参数：从配置文件和 shell 语句中读取与合并参数，得出最终的参数")]),a._v(" "),e("li",[a._v("开始编译：用上一步的到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译")]),a._v(" "),e("li",[a._v("确定入口：根据配置中的 entry 找到所有入口文件")]),a._v(" "),e("li",[a._v("编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理")]),a._v(" "),e("li",[a._v("完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及依赖关系")]),a._v(" "),e("li",[a._v("输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 chunk 再把这个 chunk 转换成一个单独的文件加入到输出列表")]),a._v(" "),e("li",[a._v("输出完成：确定输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统")])]),a._v(" "),e("h2",{attrs:{id:"_2-常见-loader-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-常见-loader-plugin"}},[a._v("#")]),a._v(" 2.常见 loader plugin")]),a._v(" "),e("h2",{attrs:{id:"_3-loader-和-plugin-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-loader-和-plugin-的区别"}},[a._v("#")]),a._v(" 3. loader 和 plugin 的区别")]),a._v(" "),e("p",[a._v("loader 本质上是一个函数，在函数内对接收到的内容进行转换，返回转换后的结果。在 module.rules 中配置\nplugin 就是插件，可扩展 webpack 的功能，在合适的时机通过 webpack 提供的 api 改变输出结果。 在 plugins 中单独配置")]),a._v(" "),e("h2",{attrs:{id:"_4-source-map-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-source-map-是什么"}},[a._v("#")]),a._v(" 4.source map 是什么？")]),a._v(" "),e("p",[a._v("source map 是将编译、打包、压缩后的代码映射回源代码的过程")]),a._v(" "),e("h2",{attrs:{id:"_5-模块打包原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-模块打包原理"}},[a._v("#")]),a._v(" 5.模块打包原理")]),a._v(" "),e("p",[a._v("webpack 实际上为每一个模块创造了一个可导出和导入的环境，本质没有修改代码的执行逻辑。")]),a._v(" "),e("h2",{attrs:{id:"_6-webpack-的热更新原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-webpack-的热更新原理"}},[a._v("#")]),a._v(" 6. Webpack 的热更新原理")]),a._v(" "),e("p",[a._v("webpack-dev-server 与 浏览器之间维护一个 websocket，当本地资源发生变化时，webpack-dev-server 会想浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比，如有差异就会向 webpack-dev-server 发起请求获取更高内容（文件列表，hash） 这样客户端就可以再借助这些信息想 webpack-dev-server 发起 jsonp 请求获取 chunk 的增量更新，拿到增量更新后，由 HotModulePlugin 这个插件处理")]),a._v(" "),e("h2",{attrs:{id:"_7-优化-webpack-的构建速度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-优化-webpack-的构建速度"}},[a._v("#")]),a._v(" 7.优化 webpack 的构建速度")]),a._v(" "),e("ol",[e("li",[a._v("使用高版本的 webpack 和 node.js")]),a._v(" "),e("li",[a._v("多进程多实例构建：thread-loader")]),a._v(" "),e("li",[a._v("压缩代码")]),a._v(" "),e("li",[a._v("压缩图片")]),a._v(" "),e("li",[a._v("缩小打包作用域")]),a._v(" "),e("li",[a._v("提取页面公共资源 代码分离")]),a._v(" "),e("li",[a._v("利用缓存提升二次构建速度")]),a._v(" "),e("li",[a._v("Tree shaking")])]),a._v(" "),e("h2",{attrs:{id:"_8-babel-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-babel-原理"}},[a._v("#")]),a._v(" 8.babel 原理")]),a._v(" "),e("ol",[e("li",[a._v("解析：将代码转成 AST")]),a._v(" "),e("li",[a._v("转换：根据一定规则转化、修改 AST")]),a._v(" "),e("li",[a._v("生成：以新的 AST 为基础生成代码")])])])}),[],!1,null,null,null);e.default=v.exports}}]);