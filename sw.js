/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/27/1-15-2-Minecraft数据包-玩家头颅ID显示/index.html","f44932b5e065fbf169077e43fa62c240"],["/2020/03/27/Hello-World-Again/index.html","a38df0a86bfb1ae46881765788fd38e0"],["/2020/03/27/hello-world/index.html","e54ad965119e1c0045c15e1bd1e637ca"],["/2020/03/28/1-15-2-Minecraft数据包-搬箱器/index.html","b539458b02e273566263c25744645a13"],["/2020/04/02/尝试做一张cover/index.html","5c708c9342d766a46ade43048a98530f"],["/2020/04/09/同步blog到gitee/index.html","6a96d79579306420a92aab1fdf383509"],["/2020/04/24/1-15-2-Minecraft数据包-原版箱子菜单/index.html","6d658981e924f9fdd0d347754832e6dc"],["/2020/04/28/换个图床/index.html","e14f399f7c8f2261a5e861cf9d4be91a"],["/2020/08/07/1-15-2-Minecraft数据包-蓄力靴/index.html","36b6eba793494ccbbbb7f204314cf551"],["/404.html","0765fb2a6ded8f8ded3db5886c9d545e"],["/about/index.html","36ccac0a824aa4618796ab4a307aff79"],["/archives/2020/03/index.html","bc475d399e0f9fcb0662fea4d7182701"],["/archives/2020/04/index.html","fa7aea18cce07e94ea68f26c0b7fbd6c"],["/archives/2020/08/index.html","a2fc1cfca243a068d3703bd41f8b0821"],["/archives/2020/index.html","f2adeb5aa735d97f2bb6d7d6c4a83433"],["/archives/index.html","44f683c8d22a8b9f76ec104a2623050c"],["/automation/index.html","f8e4ed62dc53900a1c84813d64a8a101"],["/dist/main.css","602bc452ca02906e7a7265723d58e3c8"],["/dist/main.js","85fd09524b02a44d64098484dd1b8bcf"],["/images/AR.png","e02650b2170e49c66dbfe9b72f738434"],["/images/AR.svg","3a3c5c9d8d34c951dde7883ae5b046cc"],["/images/automation.png","c24cbc52958e8e18f024586c3d7bc891"],["/images/ayer-side.svg","eb1b57d15f60c8240e20903aab419ace"],["/images/ayer.png","fc7c172cafe0efa51ad5b16adb477e0c"],["/images/ayer.svg","8ac7a1cc61e2fc8cdf36a465e130cf80"],["/images/carry.png","c7887b9a777c9badc75722d9bec1846b"],["/images/chestmenu (1).png","d8715a9cd0096ce7c3d1ecf870be4085"],["/images/chestmenu (2).png","0044b5dd0b266896141606e4cdd24110"],["/images/chestmenu.png","32708a8bc9651f9bcd6951ef063c4f64"],["/images/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/images/cover11.png","99eabe02008bdaf8a9a6d8189bcf8bc8"],["/images/cover12.png","730e0dd329f538424f2487e69769809a"],["/images/cover13.png","c6c662ee11e0747bc61c9a3b1b5cfa11"],["/images/cover17.png","2d009b7c702a17f20ac5af14c8c31a2c"],["/images/cover18.png","fa063ca2829ff5a50845e02505aaf188"],["/images/cover19.png","94a23aeb51e63e0e70fa3da1e6238d58"],["/images/cover2.jpg","135c931e786d1e1fe59ab1343cf910fa"],["/images/cover3.jpg","7c084b950a063b068e63c683ce010108"],["/images/cover4.jpg","cb0e1f1d738c3f5ae35c8b88417dc489"],["/images/cover5.jpg","b576b03ae35fa56bb36d260a6263a356"],["/images/cover6.jpg","82c16fcd2dc3762300ab0be52a01668c"],["/images/cover7.jpg","455a2c75e667e3754c29d217c932adf0"],["/images/forkme.png","8543596f3ec93d014f813015499c524e"],["/images/forrestgump.png","41a584d82fdc64943ee8c6ee17c32f26"],["/images/giteeload.png","7b46c73366d0ab3dc11a4f5a12eb2bb5"],["/images/githubload.png","bb7d148246d0641152da67054259f792"],["/images/jumpboots.png","53003e1b50ec941987a84e22f4a45b4c"],["/images/playerhead (1).png","e00d563485026f4adcac4b872fa4574a"],["/images/playerhead (2).png","8a157ffdbd91847a08c6f6192f9edab2"],["/images/playerhead(3).png","75a3d1d48c6ba385c491aa3489a85cb6"],["/index.html","327c6282657c3bb62e4994f3e7c80cd8"],["/js/busuanzi-2.3.pure.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/jquery-2.0.3.min.js","7197c07dfce675ee5a220c3bad0dedd4"],["/js/lazyload.min.js","16b486c05843a4dc4e9cd4295ca699c2"],["/js/pace.min.js","248f37358dd94120dc84da2938445449"],["/js/search.js","e3e624b549ce5c7c7498a6f95c34692e"],["/js/tocbot.min.js","c4536ea3bf2e39818cfd27b73bfe397f"],["/sw-register.js","b43cf64c48d5680f42fbe156bc9c753c"],["/tags/commands/index.html","b1c111cbd22f90400f7176befcc6de38"],["/tags/index.html","871e75b8a4008c004b01ca5a135d3e21"],["/tags/strange/index.html","e12e056afcdfb9a37c93680ac3474434"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
