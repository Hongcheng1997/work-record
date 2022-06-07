# 工作总结

## 工作技能

- javascript 基础扎实、熟练掌握 es6、7 语法特性
- 熟练使用 react 框架，对 react 周边工具、库有一定使用经验
- 熟悉 webpack 打包工具，了解基本构建原理
- 熟练使用 koa、koa-router，有相关项目开发经验
- 熟练使用 proxyman、charles 等抓包工具，掌握常见的网络协议
- 熟悉 bash、shell，可编写 shell 脚本解决重复性工作
<!-- - 有 react-native 开发经验，了解    app 构建、发布等上架流程 -->
<!-- - 有一定小程序经验，掌握一套 rn 编译 h5 及小程序方案 -->

## 项目经验

### 装修系统（低代码构建平台）

装修系统是可视化搭建系统，主要功能是为商城做站点页面、商家店铺首页搭建等，通过拖拽组件的形式搭建页面，项目通过
pnpm 管理多个模块。主要分为：

- `eevee` 装修编辑器，装修页面可视化搭建工具。编辑容器相关参数(容器宽度大小，背景颜色等)
- `designer` 装修数据和服务，运行装修数据库服务和对外提供 http 接口
- `site-manager` 装修系统的后台，站点管理器，用于管理 `站点`、`店铺模版`、`店铺`
- `eevee-config-plugin` 装修 Webpack 插件，用于加载装修配置文件
- `eevee-components-*` 各平台基本装修组件，如 `文字`、`视频` 等
- `eevee-client-engine-*` 装修组件渲染引擎，用于在通用组件中加载装修组件

### Gaia-mall

`Gaia-mall` 为公司商城端标准产品，包括 `b2b\b2c\sea` 等业态。项目侧会基于该产品做项目二开,同时也会从项目侧沉淀通用业务。

- nginx 服务是前端流量的入口，承担静态资源、后端接口/Node服务转发的任务
- webpack + koa 搭建全链路可控服务，构建多入口产物：业务代码、ssr 构建等
- koa 相关中间件处理（http 代理、静态资源处理、header 处理、站点升级公告等）
- 基于 react-intl 结合公司第三方平台处理项目国际化
- react-router 配合 loadable 动态加载处理及 ssr 数据注水
- 基于 provide 设计 commonData 公用数据管理
- husky 配合 pre-commit、pre-push 做 eslint 语法检查及代码多仓库同步

### termix-nu

基于 just、nushell 封装的脚本库。

### 中国海油商城 (https://www.cnoocmall.com/)

该项目向中海油开发的交付项目，共分为 3 期，包括商城端、商家端、平台端 (pc、react-native), 供中国海油面向销售业务的自营电商平台，完成海油商城数字化转型。
项目开发周期三年以上。于2019年6月正式上线，该商城累计交易额已经突破1000亿元。

- react 框架、unstated 状态管理、agent 网络请求
- 基于 swagger 文档通过脚本自动化生成接口
- 多入口打包，处理前台部分页面 ssr 渲染
- 发布 npm 包封装三端公用业务
