/**
 * 构建TCP客户端
 */

/* 引入net模块 */
// @ts-ignore
var net = require("net");

/* 创建TCP服务器 */
var server = net.createServer(function(socket){
  // console.log('someone connects');
  /* 获取地址信息 */
  var address = server.address();
  var message = "the server address is"+JSON.stringify(address);

  /* 发送数据 */
  socket.write(message,function(){
    var writeSize = socket.bytesWritten;
    console.log(message + "has send");
    console.log("the size of message is"+writeSize);
  })

  /* 监听data事件 */
  socket.on('data',function(data){
    console.log(data.toString());
    var readSize = socket.bytesRead;
    console.log("the size of data is"+readSize);
  })
})

/* 设置连接的服务器 */
server.listen(8000, function(){
  console.log("Creat server on http://127.0.0.1:8000/");
})


// 自己理解的url到界面渲染
