## `eevee` 装修编辑器，装修页面可视化搭建工具。编辑容器相关参数(容器宽度大小，背景颜色等)

物料组件：react-dnd 通过 connectDragSource 链接物料组件，组件可进行拖拽并且监听 endDrag 方法以对编辑器结构进行更新
装修编辑器：根据 json 结构递归循环，类型分为 container、row、components
容器配置器：获取对应容器的配置信息，可对配置信息做修改

## `designer` 装修数据和服务，运行装修数据库服务和对外提供 http 接口

- site 站点表，记录站点类型、站点名称、发布状态等
- siteinfo 站点信息表，记录站点域名
- page 页面表，记录页面名称，页面所属分类，站点id、页面路径、标题、关键字、描述等
- category 分类表，记录分类名称、站点id
- design-part 编辑器页面结构表，用来描述页面结构父子关系
- design-view 视图节点表，描述具体节点类型及配置信息

## `site-manager` 装修系统的后台，站点管理器，用于管理 `站点`、`店铺模版`、`店铺`

向外部提供方法可注册路由信息，根据配置路径可访问站点 html

## `eevee-config-plugin` 装修 Webpack 插件，用于加载装修配置文件

## `eevee-components-*` 各平台基本装修组件，如 `文字`、`视频` 等

## `eevee-client-engine-*` 装修组件渲染引擎，用于在通用组件中加载装修组件
