(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{238:function(t,a,s){t.exports=s.p+"assets/img/req.ada9c470.jpeg"},239:function(t,a,s){t.exports=s.p+"assets/img/res.80fa6cc2.jpeg"},290:function(t,a,s){"use strict";s.r(a);var v=s(13),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),a("h2",{attrs:{id:"报文结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报文结构"}},[t._v("#")]),t._v(" 报文结构")]),t._v(" "),a("p",[t._v("报文结构分为 3 部分：请求行、首部、实体")]),t._v(" "),a("h3",{attrs:{id:"请求报文结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求报文结构"}},[t._v("#")]),t._v(" 请求报文结构")]),t._v(" "),a("p",[a("img",{attrs:{src:s(238),alt:"Alt"}})]),t._v(" "),a("h4",{attrs:{id:"请求行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[t._v("#")]),t._v(" 请求行")]),t._v(" "),a("ol",[a("li",[t._v("方法，通常分为 get、post、put、delete\n"),a("ul",[a("li",[t._v("get 通常用来数据获取，参数在 url 后面拼接，有大小限制")]),t._v(" "),a("li",[t._v("post 一般用来创建数据")]),t._v(" "),a("li",[t._v("put 通常对数据修改使用")]),t._v(" "),a("li",[t._v("delete 一般用来数据删除")]),t._v(" "),a("li",[t._v("head -类似于get，只不过返回的响应中没有具体内容，用于获取报头")])])]),t._v(" "),a("li",[t._v("url，例如 https:// baidu.com")]),t._v(" "),a("li",[t._v("版本，目前流行 1.1 版本")])]),t._v(" "),a("p",[t._v("GET 和 POST 有什么区别？")]),t._v(" "),a("ul",[a("li",[t._v("从缓存的角度，GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会。")]),t._v(" "),a("li",[t._v("从编码的角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制。")]),t._v(" "),a("li",[t._v("从参数的角度，GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息。")]),t._v(" "),a("li",[t._v("从回退处理的角度，POST会重新发起请求，GET不会")])]),t._v(" "),a("h4",{attrs:{id:"首部字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首部字段"}},[t._v("#")]),t._v(" 首部字段")]),t._v(" "),a("ul",[a("li",[t._v("Content-Type 指定报文主体格式，通常使用 application/json")]),t._v(" "),a("li",[t._v("Cache-control 控制缓存，值如果存在 max-age 字段，当资源缓存时间小于 max-age 时\n就可以使用本地资源，不需要请求服务")]),t._v(" "),a("li",[t._v("If-Modified-Since 如果服务器的资源在某个时间之后更新了，那么客户端就应该下载最新的资源；如果没有更新，服务端会返回“304 Not Modified”的响应，那客户端就不用下载了")])]),t._v(" "),a("h3",{attrs:{id:"响应报文结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应报文结构"}},[t._v("#")]),t._v(" 响应报文结构")]),t._v(" "),a("p",[a("img",{attrs:{src:s(239),alt:"Alt"}})]),t._v(" "),a("h4",{attrs:{id:"状态行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态行"}},[t._v("#")]),t._v(" 状态行")]),t._v(" "),a("ol",[a("li",[t._v("版本，通常 1.1 版本")]),t._v(" "),a("li",[t._v("状态码\n"),a("ul",[a("li",[t._v("200 请求成功")]),t._v(" "),a("li",[t._v("304 命中缓存")]),t._v(" "),a("li",[t._v("400 客户端报错")]),t._v(" "),a("li",[t._v("500 服务端报错")])])]),t._v(" "),a("li",[t._v("短语")])]),t._v(" "),a("h4",{attrs:{id:"首部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首部"}},[t._v("#")]),t._v(" 首部")]),t._v(" "),a("h3",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" cookie")]),t._v(" "),a("p",[t._v("http 是无状态的协议，每个请求都是独立、无关的。cookie 可以让 http 保留状态\ncookie 属性：")]),t._v(" "),a("ul",[a("li",[t._v("周期，max-age （时间间隔从收到报文开始计算）、expires（过期时间）")]),t._v(" "),a("li",[t._v("作用域，domain、path 给 Cookie 绑定了域名和路径，在发送请求之前，发现域名或者路径和这两个属性不匹配")]),t._v(" "),a("li",[t._v("安全相关，HttpOnly，如果 cookie 字段带上 HttpOnly，那么说明只能通过 HTTP 协议传输，不能通过 JS 访问")])]),t._v(" "),a("h3",{attrs:{id:"缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),a("h3",{attrs:{id:"跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),a("p",[t._v("当协议、域名、端口不一样时就会产生跨域。\n解决跨域的方式：")]),t._v(" "),a("ul",[a("li",[t._v("jsonp（仅用于 get）")]),t._v(" "),a("li",[t._v("反向代理（nginx）")]),t._v(" "),a("li",[t._v("cors（后端配置 cors）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name  client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"持久链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持久链接"}},[t._v("#")]),t._v(" 持久链接")]),t._v(" "),a("p",[t._v("Http初始协议版本中，没进行一次Http通信就要断开一次链接（最初需要通信的内容很小），当请求足够大会造成过多通信开销\n请求1->响应1->请求2->响应2->请求3->响应3")]),t._v(" "),a("p",[t._v("Http/1.1中默认开启了持久链接 Connection:keep-alive，只要任意一端没有明确提出断开连接，则保持TCP连接状态，管线化的特点\n请求1->请求2->请求3->响应1->响应2->响应3\n缺陷：队头阻塞问题")]),t._v(" "),a("p",[t._v("Http/2.0中加入双工模式，服务器也能同时处理多个请求，解决队头阻塞问题\n多路复用，没有次序概念")]),t._v(" "),a("h1",{attrs:{id:"http2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[t._v("#")]),t._v(" HTTP2")]),t._v(" "),a("ul",[a("li",[t._v("头部压缩\n针对头部字段进行压缩，在服务端和客户端中存储一张哈希表，将用过的字段存放在表中，传输使用索引值表示。")]),t._v(" "),a("li",[t._v("多路复用")])]),t._v(" "),a("h3",{attrs:{id:"http-1-1的长连接盒2-0的多路复用区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1的长连接盒2-0的多路复用区别"}},[t._v("#")]),t._v(" Http/1.1的长连接盒2.0的多路复用区别？")]),t._v(" "),a("p",[t._v("1.1：同一时间一个TCP连接只能处理一个请求，采用一问一答的形式，上一个请求响应后才能处理下一个请求")]),t._v(" "),a("p",[t._v("2.0：同域名上所有的通信都在单个连接上完成，单个连接上可以并行交错的进行请求和响应")]),t._v(" "),a("h3",{attrs:{id:"为什么1-1不能实现多路复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么1-1不能实现多路复用"}},[t._v("#")]),t._v(" 为什么1.1不能实现多路复用？")]),t._v(" "),a("p",[t._v("2.0是基于二进制帧的协议，1.1是基于文本分割解析的协议\n1.1的报文结构里，服务器需要不断的读入字节，知道遇到换行符，出的顺序是串行的")]),t._v(" "),a("p",[t._v("2.0以帧为最小数据单位，每个帧都会标识自己属于哪个流，多个帧组成一个流，多路复用，其实就是一个TCP里存在多条流")])])}),[],!1,null,null,null);a.default=_.exports}}]);