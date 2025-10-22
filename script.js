// Hôtel Lagarde — interactions
(() => {
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  // Header elevation on scroll
  const header = $('.site-header');
  const elevate = () => {
    header.toggleAttribute('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', elevate, {passive:true});
  elevate();

  // Mobile nav
  const nav = header.querySelector('nav');
  const toggle = header.querySelector('.nav-toggle');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const open = nav.hasAttribute('open');
      nav.toggleAttribute('open', !open);
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  // Booking dialog
  const dlg = document.querySelector('dialog.booking');
  $$('[data-open-booking]').forEach(btn => btn.addEventListener('click', () => dlg.showModal()));
  dlg?.addEventListener('close', () => {
    if(dlg.returnValue === 'confirm') {
      toast("Nous vérifions les disponibilités...");
      setTimeout(()=>toast("Aucune chambre n'est débité avant l'arrivée."), 1600);
    }
  });

  // Newsletter mini-feedback
  window.newsletterThankyou = () => toast("Merci ! Vous recevrez bientôt nos nouvelles.");

  // Toast helper
  const toastEl = $('.toast');
  let t;
  function toast(msg){
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(t);
    t = setTimeout(()=> toastEl.classList.remove('show'), 2600);
  }

  // Current year
  $('#year').textContent = new Date().getFullYear();
})();
