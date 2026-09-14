(function(){
  function getConnectedName(){
    try{
      if(typeof yt!=='undefined' && yt && yt.snippet && yt.snippet.title) return yt.snippet.title;
    }catch(e){}
    const info=document.getElementById('info');
    if(info){
      const b=info.querySelector('b');
      const t=(b?b.textContent:info.textContent||'').trim();
      if(t && t!=='미연결') return t.split('\n')[0].trim();
    }
    const chip=document.getElementById('accountName');
    if(chip){
      const t=(chip.textContent||'').trim();
      if(t && t!=='연결된 채널') return t;
    }
    return '';
  }

  function setChannel(name){
    const sel=document.getElementById('channel');
    if(!sel) return false;
    if(!name){
      sel.innerHTML='';
      const o=document.createElement('option');
      o.value='';o.textContent='Google / YouTube 연결 후 자동 표시';
      sel.appendChild(o);sel.value='';sel.disabled=true;
      return false;
    }
    try{ if(typeof active!=='undefined') active=name; }catch(e){}
    sel.innerHTML='';
    const o=document.createElement('option');
    o.value=name;o.textContent=name;
    sel.appendChild(o);sel.value=name;sel.disabled=true;
    return true;
  }

  function sync(){ return setChannel(getConnectedName()); }

  function start(){
    sync();
    let count=0;
    const timer=setInterval(()=>{count++; if(sync()||count>240) clearInterval(timer)},500);
    ['info','accountName'].forEach(id=>{
      const el=document.getElementById(id);
      if(el) new MutationObserver(sync).observe(el,{childList:true,subtree:true,characterData:true});
    });
    document.addEventListener('click',e=>{
      const txt=(e.target&&e.target.textContent)||'';
      if(txt.includes('Google / YouTube 연결')) setTimeout(sync,700);
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();