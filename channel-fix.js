(function(){
  function syncConnectedChannel(){
    const sel=document.getElementById('channel');
    if(!sel) return;
    sel.innerHTML='';
    const o=document.createElement('option');
    try{
      if(typeof yt!=='undefined' && yt && yt.snippet){
        active=yt.snippet.title||yt.id||'';
        o.value=active;
        o.textContent=active;
        sel.disabled=true;
      }else{
        active='';
        o.value='';
        o.textContent='Google / YouTube 연결 후 자동 표시';
        sel.disabled=true;
      }
      sel.appendChild(o);
      if(typeof renderCal==='function') renderCal();
      if(typeof renderLearning==='function') renderLearning();
      if(typeof updateEC==='function') updateEC();
    }catch(e){console.warn('channel sync',e)}
  }

  const originalLoadYT=window.loadYT;
  if(typeof originalLoadYT==='function'){
    window.loadYT=async function(){
      await originalLoadYT.apply(this,arguments);
      syncConnectedChannel();
    };
  }

  const originalMakeEvent=window.makeEvent;
  if(typeof originalMakeEvent==='function'){
    window.makeEvent=function(){
      if(typeof yt==='undefined'||!yt||!document.getElementById('channel')?.value){
        alert('먼저 Google / YouTube를 연결하세요.');
        return null;
      }
      return originalMakeEvent.apply(this,arguments);
    };
  }

  window.addEventListener('load',()=>setTimeout(syncConnectedChannel,0));
})();