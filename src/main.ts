// 计算机网络 tcp/ip
// 数据结构/算法
import * as os from 'os'
import hello from 'hello.cc'

console.log(hello,'hello')

console.log(os.hostname(),'os.hostname()')
console.log(os.endianness(),'os.endianness()')
console.log(os.networkInterfaces(),'os.networkInterfaces()')

function getIPAdress() {
  let interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        console.log(alias.address);
      }
    }
  }
}
getIPAdress()
