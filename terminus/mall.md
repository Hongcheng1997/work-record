# nginx

- nginx 作为项目流量第一个入口，会转发各种路由，
- 同时会对接口做缓存处理，减小服务端压力

# webpack

# koa

## hmr

ReactRefresh、HotModuleReplacementPlugin 热重载

## 中间件设计

- node-watch 监听文件变动重启服务
- koa-proxy
  前端访问网关地址，然后统一分发到各个服务，通过 http-proxy 接口代理转发
- koa-static
  通过 koa-send 返回静态文件
- watch-file
  通过 node-watch 监听文件重启 koa
- ssr
  根据配置文件检查是否开启 ssr 即 ssr 的页面路径，调用 render 方法配合 mustache 做模版渲染，包含 seo 信息，try catch 如果 ssr 渲染失败则回滚为客户端渲染

## ssr

流程：

  1. 首先访问客户端的某个页面，数据会经过 ssr 中间件，由中间件调用 ssr render 方法，并结合 html 模版和 render 给出的数据渲染返回 ctx.body，srr 若渲染成功则不调用 next()，否则降级为客户端渲染
  2. 根据 loadable.json（通过 LoadableComponentsPlugin 在打包业务代码时生成） 生成一份 chunk，该 chunk 可以通过 getScriptTags、getStyleTags 方法获取到页面的 jsBundle 和 cssBundle。jsBundle 在页面同构起到作用，cssBundle
  为 ssr 提供了样式
  3. 根据 ctx path 匹配路由组件，并获取组件下 getInitalProps 方法（在页面组件下挂载的获取异步数据的方法）然后调用此方法获取到服务端数据，把数据注入到 srr context，指定 StaticRouter 的 location 地址，通过 renderToString 获取字符串组件。
  4. 返回组装好的 html、seo（title、meta description、meta keywords）、jsBundle、cssBundle、preloadData，其中 preloadData 会在模版渲染时通过脚本写到 window 下（数据注水）。
  5. 客户端渲染完页面后，通过 jsBundle 同构页面（因为 ssr 渲染无法做事件绑定、生命周期等所有要客户端同构一遍），通过时会优先检查 window 下是否有 preloadData 可以直接写到 ssr context 中。

使用：
  每个路由组件外都会包裹一层组件（从 srr context 中获取数据并注入到子组件中），srr 组件可以从 props 中获取异步数据。

  <!-- 对需要做 ssr 的页面组件下挂载一个 initalProps 方法用来做异步数据的获取，而组件内获取数据的方式采用 props，根据配置文件决定 ssr 是否开启，流量经过 ssr 中间件处理，调用 webpack 预先构建好的 render 方法配合 mustache 做模版渲染，最终返回渲染好的静态文件。

  render 方法：先获取组件预置的 initalProps 方法获取异步数据，将获取到的数据作为初始值传入 ssr context，而在 router 层对每个组件包裹了一个从 ssr context 的组件，所以在 renderToString 渲染时是绑定过数据的。

  因为 renderToString 是不走生命周期和事件绑定的，所以 ssr 渲染完后还需要客户端同构一遍，同构需要保持和服务端渲染一样的 html 模版，所以需要服务端做数据注水，即在 window 下挂载获取到的 ssr 数据，这样客户端渲染时就可以优先获取 window 下的数据作为 ssr context 下的默认值 -->

# commonData

- initCommonData 初始化数据
负责将传入的数据在全局作用域挂载。items 包括 name（缓存数据的key）、url（缓存数据的接口地址）、cache（数据是否缓存）、options（入参）、handleData（接口数据的处理）
  2、手动 refresh 更新数据
  3、history 监听自动获取异步数据
  4、对外提供 cache 接口，可自定义缓存 session 数据
  5、injectCommonData、useCommonData

# husky 多仓库同步

通过脚本基于 toml 配置生成二开仓库，使用 git subtree 管理主子仓库
