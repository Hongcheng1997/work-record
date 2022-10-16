---
slug: charles
author: gaohongcheng
title: 巧用 Charles
---

# 巧用 Charles

破解版下载链接: [https://www.macwk.com/soft/charles](https://www.macwk.com/soft/charles)

## web 网页抓包

### 1. HTTP 代理配置

因为本机代理默认是关闭的，我们也可以在 Proxy Setttings 中点击 MacOS，勾选 Enable macOS proxy on lounch，这样每次打开 Charles 就会默认打开代理了

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/294489/1620788234626-0b8cc1ee-988e-4925-8a3a-df9a55e68824.png#clientId=uf92e8f21-7a68-4&from=paste&height=900&id=PL2Es&margin=%5Bobject%20Object%5D&name=image.png&originHeight=900&originWidth=1546&originalType=binary&ratio=1&size=424449&status=done&style=none&taskId=u744c91d4-cd98-487a-b878-1f5ba240f15&width=1546)

### 2. HTTPS 代理配置

- 电脑端安装证书首先点击 Charles -> Help -> SSL Proxying -> Install Charles Root Certificate 在电脑端安装证书

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/294489/1620788261393-f96f8109-5e45-40d2-88b9-8c384db538af.png#clientId=uf92e8f21-7a68-4&from=paste&height=716&id=u7223e061&margin=%5Bobject%20Object%5D&name=image.png&originHeight=716&originWidth=1758&originalType=binary&ratio=1&size=445724&status=done&style=none&taskId=u753b90e4-00a4-425c-9d7a-5560fbf3f2f&width=1758)

- 在钥匙串中点击刚刚安装的证书，手动信任全部权限，最后输入密码保存修改
- 在 Charles 中选择需要的 https 请求，打开 SSL Proxying

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/294489/1620789061799-857fe323-8c31-478b-baa4-7f55dba27920.png#clientId=uf92e8f21-7a68-4&from=paste&height=824&id=u7be0541f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=824&originWidth=1074&originalType=binary&ratio=1&size=269108&status=done&style=none&taskId=u14ec84b6-98c6-4f1c-9b3c-a36c3e93c3c&width=1074)

## ios 抓包

### ios 模拟器抓包

前提：已打开 Charles Proxy，并在电脑端安装了对应证书

1. 打开 Charles -> Help -> SSL Proxying -> Install Charles Root Certificate on IOS Simulators
2. 启动 IOS 模拟器，General -> About -> Certificate Trust Settings 把证书开关打开
3. 然后根据提示在浏览器中输入 chls.pro/ssl 并下载安装 Charles CA 证书
4. 打开设置，进入 Profile 安装好证书

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/294489/1620788467719-0675201e-b623-4cf1-a683-8fa627958cbe.png#clientId=uf92e8f21-7a68-4&from=paste&height=826&id=ubda47c36&margin=%5Bobject%20Object%5D&name=image.png&originHeight=826&originWidth=386&originalType=binary&ratio=1&size=88100&status=done&style=none&taskId=u00dfaa97-7a37-4b53-9f8b-fbc7d87e15b&width=386)

5. 下载、安装好证书后进入 General -> About -> Certificate Trust Settings 并信任证书

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/294489/1620788605815-c76b2069-ba45-43df-bc95-55ac9806219b.png#clientId=uf92e8f21-7a68-4&from=paste&height=826&id=uaf980fb5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=826&originWidth=386&originalType=binary&ratio=1&size=99408&status=done&style=none&taskId=uebb52a4a-7b49-44d4-bf38-201a1acd8ae&width=386)

### ios 真机

1. 打开 Charles -> Help -> SSL Proxying -> Install Charles Root Certificate on a Mobile Derive，弹窗中显示代理 ip 地址及端口，参照模拟器，手机安装好证书并信任
2. 真机抓包必须与电脑需要处于同一个局域网，并且在手机 Wifi 高级选项中手动配置网络代理（代理地址可在 Charles -> Help -> SSL Proxying -> Install Charles Root Certificate on a Mobile Derive 查看）
3. Charles 会弹出授权弹窗，点击 Allow

![1459640-20181121190645487-154158785.png](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/294489/1629970435045-12ee9d2d-8668-459c-b396-46f885f9b960.png#clientId=u8f6bd953-73c2-4&from=drop&id=u3e29432d&margin=%5Bobject%20Object%5D&name=1459640-20181121190645487-154158785.png&originHeight=117&originWidth=569&originalType=binary&ratio=1&size=31939&status=done&style=none&taskId=u38681d69-84ae-468d-8564-f1b95d31f31)

## 安卓真机

1. 打开 Charles -> Help -> SSL Proxying -> Install Charles Root Certificate on a Mobile Derive，在浏览器中输入 chls.pro/ssl 并下载 Charles CA 证书
2. 安卓手机 pem 证书无法直接打开，将下载后的证书另存到 SD 卡中，在设置 -> 安全与隐私 -> 从 SD 卡中安装，选择 Charles CA 证书安装
3. 在安全与隐私中 -> 受信任的凭据 -> 用户，可查看证书是否安装成功

**注意:** 安卓系统 7.0 版本以上只信任系统级别的证书，用户级别的证书不生效，rn 项目对 rn-debug 需要升级到足够高版本（1.1.4）可正常抓包

## 常见问题

### 文件损坏打不开

一般是 mac 安全级别过高

**解决办法：**偏好设置->安全与隐私->通用->信任任何来源。如果没有任何来源选项，打开终端输入 sudo spctl --master-disable，重新打开偏好设置即可。

### Charles 不能开启 proxy

提示: _*Charles cannot configure your proxy settings while it is on a read-only volume. Perhaps you are running Charles from the disk image? If so, please copy Charles to the Applications folder and run it again. Otherwise please ensure that Charles is writable by the current user and try again*_ ，由于只有只读权限引起

**解决办法：**
`sudo chown -R root "/Applications/Charles.app/Contents/Resources"`
`sudo chmod -R u+s "/Applications/Charles.app/Contents/Resources"`

### Charles 抓不到包

1、代理冲突导致不能抓包，解决办法：设置 -> 网络 -> Wifi -> 高级 -> 代理，在左侧的配置协议列表中取消勾选"自动发现代理"和“自动代理配置”。
2、Charles 根证书未信任，解决办法：打开钥匙串，找到 charles 证书，将该证书选择永久信任
