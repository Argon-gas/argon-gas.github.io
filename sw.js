/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/27/1-15-2-Minecraft数据包-玩家头颅ID显示/index.html","1c9fca5c059d18a32f1238eebd1a7978"],["/2020/03/27/Hello-World-Again/index.html","5f47140e33911912d08109750df2448b"],["/2020/03/27/hello-world/index.html","925938216f97acb3623c17a79695e9cc"],["/2020/03/28/1-15-2-Minecraft数据包-搬箱器/index.html","222f8dd0c27a4a32dea267f635c463e5"],["/2020/04/02/尝试做一张cover/index.html","80956a1a8750ec8dc2c0df0f31ac8a79"],["/2020/04/09/同步blog到gitee/index.html","04cb6ba29024fbd64507a54fbf71d43b"],["/2020/04/24/1-15-2-Minecraft数据包-原版箱子菜单/index.html","f685b52d6ad73a73a1b8a1e3f36ec2f3"],["/2020/04/28/换个图床/index.html","91c2557537b43c3fcd8227c02dd5d33c"],["/2020/08/07/1-15-2-Minecraft数据包-蓄力靴/index.html","ae0178886981548fc576cc2278f7e108"],["/2021/02/23/1-16-5-Minecraft数据包-装备耐久可视化/index.html","31975b2eac92432ae430e1e3b9e681ab"],["/2021/06/08/换新logo/index.html","b2d0a9952f7404a2138b83f9139c27c7"],["/2021/07/30/1-17-1-Minecraft资源包-着色器实例/index.html","de31b769b93cf5337274db5580bd7291"],["/2021/08/12/1-17-1-Minecraft数据包-夜视仪/index.html","7c593fd1d504eaf93da4a7daf1be2999"],["/404.html","57a5c2d7d8f13ddcdb2ac28cadb3fbd8"],["/about/index.html","298f2c30fc8fb0a3871489931f7a14cf"],["/archives/2020/03/index.html","22ac674fb94269c4301e5f29192c8a2e"],["/archives/2020/04/index.html","661945499aef4f7df1624555bd33da13"],["/archives/2020/08/index.html","0518ffccc14de10c1c8d4c734dd9ca38"],["/archives/2020/index.html","97b35a3f7f3259926b2373c924a992b1"],["/archives/2021/02/index.html","81e2f40b06a9ec0e5d70eb1082bfb571"],["/archives/2021/06/index.html","660227da6c78c8815da6f3eda9e9732a"],["/archives/2021/07/index.html","46417ef9fbb68d3f560da4021f7290ed"],["/archives/2021/08/index.html","2293c6739c8072c4408526b984c2b50a"],["/archives/2021/index.html","939a5a4ceaadfc1dc35f2270c17b1dc7"],["/archives/index.html","738811529fb67768901568f3fc4475da"],["/archives/page/2/index.html","cc38f76da497d20776a3d033a1078bb2"],["/automation/index.html","65cccbb70ae9bc68e9f4f2d35940063e"],["/css/clipboard.css","2c2589bab50d0e5ecf63dc14ae7d6ab6"],["/css/custom.css","3594561c40f733128765fac6e7649fb4"],["/dist/main.css","9ae17e66daeaf572eb8f86f384888cc8"],["/dist/main.js","3813f173097e6a3863e1a1d8b516b51c"],["/dist/report.html","da97e3e73aad723ff2275ca720207175"],["/images/404.jpg","e7696112aabfca9ce195460cb4aea575"],["/images/AR.png","e02650b2170e49c66dbfe9b72f738434"],["/images/AR.svg","3a3c5c9d8d34c951dde7883ae5b046cc"],["/images/automation.png","c24cbc52958e8e18f024586c3d7bc891"],["/images/ayer-side.svg","39cc3c7b38c44aa1e684669ed293ba2f"],["/images/ayer.svg","e3048361cbdfc5f6c63c20cec06194f4"],["/images/carry.png","c7887b9a777c9badc75722d9bec1846b"],["/images/chestmenu (1).png","d8715a9cd0096ce7c3d1ecf870be4085"],["/images/chestmenu (2).png","0044b5dd0b266896141606e4cdd24110"],["/images/chestmenu.png","32708a8bc9651f9bcd6951ef063c4f64"],["/images/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/images/cover11.png","99eabe02008bdaf8a9a6d8189bcf8bc8"],["/images/cover12.png","730e0dd329f538424f2487e69769809a"],["/images/cover13.png","c6c662ee11e0747bc61c9a3b1b5cfa11"],["/images/cover17.png","2d009b7c702a17f20ac5af14c8c31a2c"],["/images/cover18.png","fa063ca2829ff5a50845e02505aaf188"],["/images/cover19.png","94a23aeb51e63e0e70fa3da1e6238d58"],["/images/cover2.jpg","135c931e786d1e1fe59ab1343cf910fa"],["/images/cover20.png","71c9b33a1a55e1b6aebafe1651cf816b"],["/images/cover3.jpg","7c084b950a063b068e63c683ce010108"],["/images/cover4.jpg","cb0e1f1d738c3f5ae35c8b88417dc489"],["/images/cover5.jpg","b576b03ae35fa56bb36d260a6263a356"],["/images/cover6.jpg","8a1e50868dd4b77bfcd57c4c1425ec39"],["/images/cover7.jpg","93e1effda9ad8fa54d0af6d50d2bc7a1"],["/images/equipmentvisible.png","7549f39585dba8a772f0ca42b69f6548"],["/images/equipmentvisible_1.png","9bb47760790e269b9c7baf8d1bb7bc14"],["/images/giteeload.png","7b46c73366d0ab3dc11a4f5a12eb2bb5"],["/images/githubload.png","bb7d148246d0641152da67054259f792"],["/images/jumpboots.png","53003e1b50ec941987a84e22f4a45b4c"],["/images/nvh(1).png","620477df85a1f7b30a25aea035b51d02"],["/images/nvh(2).png","0ef240217a730c77b68577646dbe1032"],["/images/playerhead (1).png","e00d563485026f4adcac4b872fa4574a"],["/images/playerhead (2).png","8a157ffdbd91847a08c6f6192f9edab2"],["/images/playerhead(3).png","75a3d1d48c6ba385c491aa3489a85cb6"],["/index.html","9d008fce2dfb82c53c80ff3d87d094db"],["/js/busuanzi-2.3.pure.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/clickBoom1.js","85275d451d4dd7de53ddf682d4365c69"],["/js/clickBoom2.js","801ef371c5e8fd485881e9199c56402f"],["/js/clickLove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/dz.js","d05b50b79133042302661bfb69f745a7"],["/js/jquery-2.0.3.min.js","7197c07dfce675ee5a220c3bad0dedd4"],["/js/lazyload.min.js","16b486c05843a4dc4e9cd4295ca699c2"],["/js/search.js","e3e624b549ce5c7c7498a6f95c34692e"],["/js/tocbot.min.js","c4536ea3bf2e39818cfd27b73bfe397f"],["/page/2/index.html","ec87f1ad63787b3f8d5a3d861b476c60"],["/sw-register.js","ab1d44b14aded220242018ad19427473"],["/tags/commands/index.html","1602cf1edb103b917d181567e1d8d98f"],["/tags/index.html","0de3f36b01715fd550afeb4594312c4b"],["/tags/strange/index.html","3ff82ad0e5bba2e6168fcba9c247a4b1"]];
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
