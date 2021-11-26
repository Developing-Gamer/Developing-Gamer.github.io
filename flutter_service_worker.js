'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eeb23cf2c94f58343cbe999740412db4",
"index.html": "240e5d6f5d337af2d3afa110996b1f47",
"/": "240e5d6f5d337af2d3afa110996b1f47",
"main.dart.js": "9562ba6cca8cd35eaae2ea25fa3af43d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b91c3fb4fd5e02e32933ff15ad68d8c3",
".git/config": "39d86527bfdbabf96d6808a623acd1da",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/82cce45e7c76666fb2c3224d522d5e94435475": "b4b0a8b98dddb0cc803afce0b84ef4a6",
".git/objects/33/43539f312701d839a9055a89a1332630d81189": "0cb039b39715e13d77de9e6281bb61b8",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/ad/c4cab1425bb5a4f3e0b483bf16c38eee59a253": "64149592d17fdf7436a5b575e8ca6111",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/f4c1d186e3ff0a78ebf4c5733d562d7c3a2e32": "44c6304cb835b81d0c6f12ff04eba655",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/878998b46cb08400e2d13d9e0cc0f78aade478": "f07c491ce322cb4db5ca3da50646c635",
".git/objects/c9/638de335eb864f1e57af3f47b2cf67e18eac34": "dc8e9a93ff056709bcabd94fe798c543",
".git/objects/c8/fa12ec8ee2476a8b378b3efbecaa866f1b66da": "5068b98817017a7e9272d4cbe91ab57b",
".git/objects/c6/b08a45999efd7a0abdcf86729ebaffa42f63e8": "caaf09ff0a2876947f71947aeb69ed36",
".git/objects/8f/8e47dc2c89f9a66cd77caba094f909e456a755": "7b2fa3c282689eebc3822dc0500fd588",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/3e5f67f6a26236f4ade7793cb1347fea0f1347": "6cb43486f2cfa0dee0cc43bd1ef84789",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/6e/2893f626aa898cedc67d7a170b187e3f2a51c2": "a9b4a005c596417933bdfc380b5fb88c",
".git/objects/62/11aa01497d6cab276c57a31b89139c96b96f01": "b9498c15f5eb743243d4c917465118d5",
".git/objects/3f/1dab582319820f535e66ec251a1be572a3d939": "33517e20f9c2682ee05ed9a55a32e1ca",
".git/objects/37/4698bfa05442a3b41b90b7a27d3ad6b1c2e06d": "d79658f435bdc135a830e97fa3922378",
".git/objects/06/9d1c36bd977dbcc9d6772d645480ceda5dd84d": "49ce827dc8e120622620fed82a4f3f6d",
".git/objects/06/730f287075054c75deb18ceed5c981065f14b7": "8148f1c9955c7a18c7ccaaa770d01e69",
".git/objects/6c/356803970dab9c594105e2b5c40ddfc7596a30": "4e80250289f16982937f4e8b52c5009d",
".git/objects/0a/253df28b5e455a3f814abf53a2ff211f637082": "bcaf77e79ad24bc70bc95f2f8e2e3c0e",
".git/objects/a0/7f8f34de2f245a0957a74ff1f2d479e1a91ad8": "cccc57c7edf6d20a44126074b47a89e6",
".git/objects/d5/7005bd0163f90219408d0e606b4fe8c71afac6": "de3e5abf692675c1c530e78098c76fa1",
".git/objects/d2/b43db4db0ed41cf2e9dddad3ee60d98cd433e6": "12025fa7a8ae2d7f25fc85a1071f86d0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e9044bcfc716fd2de91129c3e8957b8935966f": "3c56dc9b169541903e86fc5ddf100afc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/df91929e34deea19348eaead454cc8ff77f092": "ebfc266b2c5052737800296b5f0d5044",
".git/objects/a6/d25fef20dffb27ed84df4f98142d4cc790fcc9": "e8a28820a8ce7c7516abe4224292c06d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/ff/41c19d64e3908ffaa3bff1bd6dfb1cfa9e002f": "23e613b200819414c65d32355eca14bc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/26430af58f956123181f197a1acda952acfe6c": "7e5fb6db467207182084811d580b3b49",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/12bec174a8bc55af28449d3b0560be2bf81361": "08235012efec6dd93c1944cbdde11ff2",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/12/764da8372c75391cc8eb1570327ac16d2dd4e6": "c3a3b7a3cc54875f907f73d654bf4092",
".git/objects/1d/4748a5ff63554c2a7cffc1ce202676c67a3e11": "bcbe1eabd29cb64b21ba69580601c438",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/7a/2fc92afbfb6ae8c62c542baaee6a6ac40efa43": "5831a05342ab1933e3ba91db97ef541f",
".git/objects/14/2e9f828ef695d096fca699a33bffc573d4c54c": "e12e43ed80e72754705214b77ac645c8",
".git/objects/8e/46e9aab5fb39e379afdf404b5e2da68fc98467": "892f133e1d8cfecc906d494ea1a6a0a0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a1970341aa88a7339f51b8e2baa8e2ac",
".git/logs/refs/heads/main": "c6ca49e0bd7c068dbd52b1cadecc942f",
".git/logs/refs/remotes/origin/main": "a37201788bb83cb904d8dc7865bc8617",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "ed75b138a323e850fd021f60f56e2c3c",
".git/refs/remotes/origin/main": "ed75b138a323e850fd021f60f56e2c3c",
".git/index": "49a00b0b7b9a00f9016a8065ab53541a",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "aaad4bdd899f8b87c49b2d979d9c7dae",
"assets/NOTICES": "cac71fd2b8561423197641810bbf9bd5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/Screen-5.png": "26039123e3a577f58defe5114bd7dc19",
"assets/assets/images/Screen-4.png": "c596146102aea8af9c1f9a34289b5023",
"assets/assets/images/Screen-1.png": "a62b623553e1a4166541ec1fedf5de84",
"assets/assets/images/Screen-3.png": "9cd14090dbb48861ee13b439007135e5",
"assets/assets/images/instagram.png": "344fea7e70c37d2e5dd55332327efa46",
"assets/assets/images/Screen-2.png": "64baf2ef3adcffcaa8af58d5292df5f9",
"assets/assets/images/Banner.png": "5dc3e4746ccc6fcbd0c5f31cce417717",
"assets/assets/images/IMG_1115.jpg": "156627540cc54b5695ca626c450b4c8a",
"assets/assets/images/maxcodes.jpg": "87fc8fb67a79ecc784fe75a53c214d5b",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/playstore.png": "bfcaa9d1f13760156db17166ebd9fb43",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
