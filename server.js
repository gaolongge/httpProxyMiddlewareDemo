//引入express框架
let express = require('express')
let app = express()
//引入跨域中间件
let proxy = require('http-proxy-middleware');
 //这段程序的作用是将我们的前端项目设置成静态资源
app.use(express.static("./index"))
//这里要注意"^/" 是匹配的路由,它会将匹配的路由进行转发，没匹配到的就不会转发。
app.use('/', proxy({
	//目标后端服务地址
	// 百度
    target: 'https://news.baidu.com',
	// 今日头条
	target: 'https://m.toutiao.com',
    changeOrigin: true
}))
 //       '^/' : ''
app.listen(8081)
console.log('server is running!')