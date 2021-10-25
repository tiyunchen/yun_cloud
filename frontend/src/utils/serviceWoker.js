/**
 * service worker的特点
 * 1.独立于主线程，在后台运行的脚本
 * 2.被install后就遥远存在，除非被手动加载
 * 3.可编程拦截请求和返回，缓存文件。sw可以通过fetch这个api,来拦截网络和处理网络请求，再配合cacheStorage来实现web页面的的缓存管理以及前端
 * postMessage同学
 * 4.不能直接操作dom:因为sw是个独立于网页运行的的脚本，所以在他的运行环境里，不能访问出口的window和dom
 * 5.必须是https的协议才能使用，不过本地可以localhost运行
 * 6.异步实现，service worker 大量使用promise
 */



if('serviceWorker' in navigator){
  console.log('my-test4my-test4my-test4')
  window.addEventListener('load', function (){
    navigator.serviceWorker.register('/workerDemo.js')
      .then(function (res){
        console.log('service worker 注册成功')
      })
      .catch(function (err){
        console.log('service worker 注册失败', err)
      })
  })



}





