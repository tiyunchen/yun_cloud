const path = require('path');
const os = require('os');
const http = require('http');
const Stream = require('stream');

const { pipeline } = Stream;
const fs = require('fs');
const zlib = require('zlib');
const archiver = require('archiver');
const e = require('express');
// 接受2个路径参数，返回第一个路径到第二个路径的相对路径
// console.log(path.relative('/user/document/work/cute', '/user/document/work/mix')) // ../mix
// console.log(path.relative('/user/document/work/cute', '/user/document/study/y-ui')) // ../../study/y-ui

// 获取当前路径的绝对路径
// console.log(path.resolve('./bin/www.js')) // /Users/cty/Documents/study/yun_cloud/server/bin/www.js

// 链接路径的两个或多个路径
// console.log(path.join('/user', 'document', 'work')) //

// 获取系统架构
// console.log(os.arch()) // x64

// 获取cpu信息
// console.log(os.cpus()) // [cpu]

// 获取当前系统用户
// console.log(os.homedir()) // /Users/cty

// 返回主机名
// console.log(os.hostname()) // xiaobawang.local

// 获取网络信息
// console.log(os.networkInterfaces())

// 获取ip地址
// console.log(os.networkInterfaces().en0[1]['address'])

// 获取编译平台 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.
// console.log(os.platform())

// 返回标识操作系统版本号的字符串
// console.log(os.release())

// console.log(http.METHODS)
// console.log(http.STATUS_CODES)

// console.log(http.globalAgent)

// const buf = Buffer.from('你好')

// console.log('sss', buf.toString(), buf.length)

// console.log(__dirname)

// const readableStream = new Stream.Readable({read(size) {
//     }})
// const writableStream = new Stream.Writable()
//
// writableStream._write = (chunk, encoding, next) => {
//     console.log(chunk.toString())
//     next()
// }
//
// readableStream.pipe(writableStream)
//
// readableStream.push('ping!')
// readableStream.push('pong!')
//
// writableStream.end()

// createReadStream 只能对文件进行操作
// pipeline(fs.createReadStream('./app.js'), zlib.createGzip(), fs.createWriteStream('test.zip'), (err)=>{
//     if(err){
//         console.log('管道运行出错',err)
//     } else {
//         console.log('管道运行成功')
//     }
// })

// 压缩文件夹
function zipDir(name, callback = function () {}) {
  if (!name) return;
  try {
    if (!fs.lstatSync(name).isDirectory()) {
      callback('请确认文件夹路径');
      return;
    }
  } catch (err) {
    callback('路径不存在');
  }
  const archive = archiver('zip', { zlib: { level: 9 } });
  const outZip = fs.createWriteStream('test.zip');
  outZip.on('close', () => {
    callback(false, archive.pointer());
    // console.log('压缩成功', archive.pointer(),)
  });

  outZip.on('error', (err) => {
    callback(err, false);
    // console.log('压缩失败', err)
  });

  archive.pipe(outZip);

  // 参数1: 目标文件夹; 参数2: 解压后的文件夹名， false的话就是压缩包名字
  archive.directory(name, false, {});

  archive.finalize();
}

// zipDir('./app.js', (err, res)=>{
//     if(err){
//         console.log('压缩失败',err)
//     } else {
//         console.log('压缩成功11', res)
//     }
// })
