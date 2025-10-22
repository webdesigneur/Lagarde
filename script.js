// Hôtel Lagarde — interactions de base
(()=>{
  const $=(s,ctx=document)=>ctx.querySelector(s), $$=(s,ctx=document)=>Array.from(ctx.querySelectorAll(s));
  const header=$('.site-header');
  const elevate=()=>header?.toggleAttribute('scrolled', window.scrollY>8);
  window.addEventListener('scroll',elevate,{passive:true}); elevate();
  const dlg=document.querySelector('dialog.booking');
  $$('[data-open-booking]').forEach(b=>b.addEventListener('click',()=>dlg?.showModal()));
  dlg?.addEventListener('close',()=>{ if(dlg.returnValue==='confirm'){ toast("Nous vérifions les disponibilités…"); setTimeout(()=>toast("Aucune chambre n'est débitée avant l'arrivée."),1500);} });
  const toastEl=document.querySelector('.toast')||Object.assign(document.body.appendChild(document.createElement('div')),{className:'toast'}); let t;
  function toast(m){ toastEl.textContent=m; toastEl.classList.add('show'); clearTimeout(t); t=setTimeout(()=>toastEl.classList.remove('show'),2500); }
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  window.newsletterThankyou=()=>toast("Merci ! Vous recevrez bientôt nos nouvelles.");
})();