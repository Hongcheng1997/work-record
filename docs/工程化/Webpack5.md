# Webpack5 新特性

## 0.升级准备工作

项目中的插件需要升级到 v5 支持的版本如：html-webpack-plugin、webpack-dev-server、terser-webpack-plugin、 mini-css-extract-plugin

v5 移除了 Node.js Polyfill 会导致一些包变得不可用，如需兼容 需要安装相关的 polyfill 并在 plugin 中显示声明注入

HMR 容易失效，需要显示配置 target:'web'

## 1.优化持久缓存 （提升构建性能）

v5 之前使用的是 cache-loader 将编译结果写入硬盘缓存
v5 在 cache 中配置 type: 'filesystem' 默认是 memory 写入内存 ，使得二次构建效率大幅提升，也可以修改为写入硬盘

## 2.优化长期缓存

v5 针对 moduleId 和 chunkId 计算方式进行优化：moduleId 根据上下文模块路径，chunkId 根据 chunk 内容计算 最后为 moduleId 和 chunkId 生存 3-4 位的数字 id，实现长期缓存，生产环境下默认开启
v5 之前 moduleId 和 chunkId 默认值是自增 id 容易导致文件缓存失效

## 3.NodeJs 的 polyfill 脚本被移除

v5 之前 对于大多数 node 模块会自动添加 polyfill 脚本并加到最终的 bundle 中导致打包结果变大（很多时候运行的代码并不需要这个）
v5 遇到这种情况会提示确认，如果不需要 node polyfill 按照提示 alias 下对应包 设为 false

## 4.更好的 TreeShaking

v4 中 针对引用模块 会将引用模块内的代码都打包，在 v5 中 只会打包引用模块内被使用的部分代码 并且 v5 内置了 prepack 生成的代码也更加简洁

## 5.Module Federation

让 webpack 达到线上 runtime 的效果，让代码直接在独立应用间利用 cdn 直接共享，不再需要本地安装 NPM 包、构建发布。
实现：直接将一个应用的 bundle，应用在另一个应用上
被引用应用：在 webpack.container 中导入 ModuleFederationPlugin,在插件类上配置 exposes 和 shared 其中 exposes 为需要暴露的组件，shared 为依赖的包

引用应用：则将 exposes 改为 remotes 并设置被引用的应用，同时需要在 index.html 中 通过 script 标签导入被引用应用的入口文件 (xxx-remote-entry.js)

## 6.内置静态资源构建能力 Asset Modules

针对静态文件不再需要相应的 loader
直接在 module 对应规则下配置 type
asset/resource —— file-loader 把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)
asset/source —— row-loader 将文件处理成字符串导入
asset/inline —— url-loader 当文件大小达到一定要求的时候，可以将其处理成 base64 的 URI 内置 file-loader
asset 默认会根据文件大小选择使用哪种类型

## 7.其他

SplitChunks 支持更灵活的资源拆分
不包含 JS 代码的 Chunk 将不再生成 JS 文件 等等
