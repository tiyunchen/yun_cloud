const path = require('path')
const os = require('os')
const http = require('http')
// 接受2个路径参数，返回第一个路径到第二个路径的相对路径
console.log(path.relative('/user/document/work/cute', '/user/document/work/mix')) // ../mix
console.log(path.relative('/user/document/work/cute', '/user/document/study/y-ui')) // ../../study/y-ui

// 获取当前路径的绝对路径
console.log(path.resolve('./bin/www.js')) // /Users/cty/Documents/study/yun_cloud/server/bin/www.js


// 链接路径的两个或多个路径
console.log(path.join('/user', 'document', 'work')) //

// 获取系统架构
console.log(os.arch()) // x64

// 获取cpu信息
// console.log(os.cpus()) // [cpu]

// 获取当前系统用户
console.log(os.homedir()) // /Users/cty

// 返回主机名
console.log(os.hostname()) // xiaobawang.local

// 获取网络信息
// console.log(os.networkInterfaces())

// 获取ip地址
console.log(os.networkInterfaces().en0[1]['address'])


// 获取编译平台 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.
console.log(os.platform())

// 返回标识操作系统版本号的字符串
console.log(os.release())

// console.log(http.METHODS)
// console.log(http.STATUS_CODES)

// console.log(http.globalAgent)

const buf = Buffer.from('你好')

console.log('sss', buf.toString(), buf.length)

console.log(__dirname)


