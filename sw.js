const CACHE='hamom-yt-v5';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.clients.claim();const cs=await self.clients.matchAll({type:'window'});for(const c of cs){try{const u=new URL(c.url);u.searchParams.set('v','5');await c.navigate(u.toString())}catch(_){}}})())});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request,{cache:'no-store'}))});