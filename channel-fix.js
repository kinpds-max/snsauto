(function(){
  function syncConnectedChannel(){
    const sel=document.getElementById('channel');
    if(!sel) return false;
    try{
      if(typeof yt!=='undefined' && yt && yt.snippet){
        const connectedName=yt.snippet.title||yt.id||'YouTube 채널';
        active=connectedName;
        if(sel.options.length!==1 || sel.value!==connectedName){
          sel.innerHTML='';
          const o=document.createElement('option');
          o.value=connectedName;o.textContent=connectedName;
          sel.appendChild(o);
        }
        sel.value=connectedName;
        sel.disabled=true;
        if(typeof renderCal==='function') renderCal();
        if(typeof renderLearning==='function') renderLearning();
        if(typeof updateEC==='function') updateEC();
        return true;
      }
      if(!sel.dataset.waiting){
        sel.innerHTML='';
        const o=document.createElement('option');
        o.value='';o.textContent='Google / YouTube 연결 후 자동 표시';
        sel.appendChild(o);sel.value='';sel.disabled=true;sel.dataset.waiting='1';
      }
    }catch(e){console.warn('channel sync',e)}
    return false;
  }

  function startSync(){
    syncConnectedChannel();
    let tries=0;
    const timer=setInterval(()=>{
      tries++;
      if(syncConnectedChannel() || tries>120) clearInterval(timer);
    },500);
    const info=document.getElementById('info');
    if(info){
      new MutationObserver(()=>syncConnectedChannel()).observe(info,{childList:true,subtree:true,characterData:true});
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',startSync);
  else startSync();
})();