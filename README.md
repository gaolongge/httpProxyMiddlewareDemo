# 使用http-proxy-middleware代理跨域或者访问本地静态资源
### 方法一：
   1. git clone https://github.com/gaolongge/httpProxyMiddlewareDemo.git 下载到本地
   2. node server.js 运行
### 方法二：（最原始的搭建）
   1. 装node环境，下载地址 https://nodejs.org/zh-cn/ ，然后就一直下一步就行，打开cmd输入 node -v，会显示版本号node则是安装成功；
   2. 建立一个文件，在此文件下打开cmd，执行 npm init,则会出package.json 文件；
   3. npm install http-proxy-middleware express --save-dev
   4. 在此文件夹下面新建一个server.js，代码如下（此示例代理一个百度新闻移动端的接口）：
      ```
      let express = require('express')
      let app = express()
      //引入跨域中间件
      let proxy = require('http-proxy-middleware');
       //前端项目设置成静态资源
      app.use(express.static("./"))
      //这里要注意"^/" 是匹配的路由,它会将匹配的路由进行转发，没匹配到的就不会转发。
      app.use('/', proxy({
         //目标后端服务地址
         // 今日头条
         target: 'https://m.toutiao.com',
         // 百度
          target: 'https://news.baidu.com',         
          changeOrigin: true
      }))
       //       '^/' : ''
      app.listen(8081)
      console.log('server is running!')
      ```
      在浏览器输入localhost: 8080，监听8081端口,      
    5. 运行node server.js,就可以看到
