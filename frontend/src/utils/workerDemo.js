

var CACHE_NAME = 'my-test'

const imgToCache = [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fdc%2Fd2%2Fe3%2Fdcd2e350f4fcae5d336b04756417c6dd.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634369522&t=6157027b79ae1682cfccadb6bdc447d9'
]
self.addEventListener('install', function (event){
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>{
        console.log('打开缓存', cache)
        return cache.addAll(imgToCache)
      })
  )
})

self.addEventListener('fetch', (event)=>{
  event.respondWith(
    caches.match(event.request)
      .then(res=>{
        console.log('asdas', res, caches)
        if(res){
          return res
        }

        // 匹配失败则继续请求
        let request = event.request.clone()

        if (request.mode !== 'navigate' && request.url.indexOf(request.referrer) === -1){
          request = new Request(request, { mode: 'no-cors' })
        }

        return fetch(request).then(function (httpRes) {
          //拿到了http请求返回的数据，进行一些操作

          //请求失败了则直接返回、对于post请求也直接返回，sw不能缓存post请求
          if (!httpRes  || ( httpRes.status !== 200 && httpRes.status !== 304 && httpRes.type !== 'opaque') || request.method === 'POST') {
            return httpRes;
          }

          // 请求成功的话，将请求缓存起来。
          var responseClone = httpRes.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseClone);
          });

          return httpRes;
        });
      })
  )
})
