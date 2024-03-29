# 浏览器缓存

## 缓存位置

1. Service Worker
   Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能.Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的

2. Memory Cache
   内存中的缓存,主要包含的是当前中页面中已经抓取到的资源,例如页面上已经下载的样式、脚本、图片等,一旦关闭 Tab 页面，内存中的缓存也就被释放了

3. Disk Cache
   存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中

4. Push Cache
   是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。它只在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂

## 强缓存

不会向服务器发送请求，直接从缓存中读取资源。Network 请求返回 200 状态码，并且 Size 显示 from disk cache 或 from memory cache。可设置 expires 和 cache-control 实现强缓存

1. expires
   缓存过期时间，用来指定资源到期时间，结合 Last-modified 使用，在响应 http 请求时告诉浏览器在过期时间前使用缓存，不需要请求。受限于本地时间，如果本地时间修改，可能造成缓存失效

2. cache-control
   控制网页缓存 如 Cache-Control:max-age=300 时，则代表在这个请求正确返回时间（浏览器也会记录下来）的 5 分钟内再次加载资源，就会命中强缓存

- public: 所有内容都将被缓存（客户端和代理服务器都可缓存）
- private: 所有内容只有客户端可以缓存
- no-cache: 表示不使用 Cache-Control 的缓存控制方式做前置验证，而是使用 Etag 或者 Last-Modified 字段来控制缓存
- no-store: 所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
- max-age: 缓存内容多久后失效
- max-stale: 能容忍的最大过期时间
- s-maxage（单位为 s): 同 max-age 作用一样，只在代理服务器中生效（比如 CDN 缓存）
- min-fresh: 能够容忍的最小新鲜度

## 协商缓存

强缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否用缓存的过程

- 协商缓存生效返回 304 和 node modified
- 协商缓存失效返回 200 和请求结果

通过 Last-Modified 和 ETag 实现

### Last-Modified 和 If-Modified-Since

浏览器第一次发送请求，服务器返回资源时将这个资源的最后修改时间添加到 Last-Modified，浏览器接收后缓存。浏览器再次请求时检测到 Last-Modified，将 Last-Modified 的值添加到 If-Modified-Since 返回给服务端，服务端根据这个值去对比当前资源的最后修改时间，没变化返回 304 从缓存中取，如果 If-Modified-Since 的时间小于服务器中这个资源的最后修改时间，说明文件有更新，于是返回新的资源文件和 200 状态

存在问题：

- 如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 Last-Modified 被修改
- 因为 Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源

### ETag 和 If-None-Match

Etag 是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)，只要资源有变化，Etag 就会重新生成。
原理类似 浏览器再次请求时将 Etag 放在 If-None-Match 返回到服务端 服务端匹配

## 缓存机制

强制缓存优先于协商缓存进行，若强制缓存(Expires 和 Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since 和 Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，返回 200，重新返回资源和缓存标识，再存入浏览器缓存中；生效则返回 304，继续使用缓存

## 用户行为对浏览器缓存的影响

- 地址栏输入 url 打开页面，浏览器从 disk cache 中查找是否有匹配
- 普通刷新: Tab 没关闭，浏览器可使用 memory cache 其次 disk cache
- 强刷：浏览器不使用缓存，因此发送的请求头部均带有 Cache-control: no-cache
