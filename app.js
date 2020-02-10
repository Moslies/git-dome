//引用系统http模板
const http = require('http');
//使用http下的createServer()创建服务器
const app = http.createServer();
//监听客户端请求 响应请求
app.on('request', (req, res) => { res.end() });
//设置一个端口
app.listen(3000, () => { console.log('服务器创建成功') });