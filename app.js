// 引入express框架
const express = require('express');
//引入path模板
const path = require('path');
//引入body-parser模板
const bodyParser = require('body-parser')
    // 创建web服务器
const app = express();
//public 静态资源文件访问
app.use(express.static(path.join(__dirname, 'public')))
    //用来接收json参数
app.use(bodyParser.urlencoded({ extended: false }))
    // 路由
app.get('/', (req, res) => { res.send(req.query); });
// 监听端口
app.listen(3000, () => { console.log('Server running on http://localhost:3000') });