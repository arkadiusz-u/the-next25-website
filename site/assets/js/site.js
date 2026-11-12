
(function(){
  var ROOT = document.body.getAttribute('data-root') || '';
  var VID = ROOT + 'assets/video/2f0ca44f1e05.mp4';
  window.addEventListener('DOMContentLoaded', function(){
    var hv = document.getElementById('heroVid'); if (hv) { hv.src = VID; hv.play().catch(function(){}); }
    var sv = document.getElementById('storyVid'); if (sv) sv.src = VID;
  });
  // papers filter
  document.querySelectorAll('.pf').forEach(function(b){ b.addEventListener('click', function(){
    document.querySelectorAll('.pf').forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on');
    var k = b.dataset.k;
    document.querySelectorAll('#papers .paper').forEach(function(c){ var t = c.querySelector('.ptype');
      c.classList.toggle('hide', k !== 'all' && !(t && t.classList.contains(k))); });
  }); });
  // language panel
  window.toggleLang = function(e){ e.stopPropagation(); var l = document.querySelector('.lang'); l.classList.toggle('open');
    l.querySelector('.lang-btn').setAttribute('aria-expanded', l.classList.contains('open')); };
  document.addEventListener('click', function(){ var l = document.querySelector('.lang'); if (l) l.classList.remove('open'); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') { var l = document.querySelector('.lang'); if (l) l.classList.remove('open'); } });
  var lp = document.querySelector('.lang-panel'); if (lp) lp.addEventListener('click', function(e){ e.stopPropagation(); });
  // homepage topic tabs
  window.showTopic = function(s){
    document.querySelectorAll('.tchip').forEach(function(b){ b.classList.toggle('on', b.dataset.tp === s); });
    document.querySelectorAll('.tpane').forEach(function(p){ p.classList.toggle('on', p.id === 'tp-' + s); });
  };
  if (location.hash && location.hash.indexOf('#tp-') === 0) window.showTopic(location.hash.slice(4));
  // film controls
  var MUTED = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><line x1="16" y1="9" x2="21" y2="15" stroke="currentColor" stroke-width="2"/><line x1="21" y1="9" x2="16" y2="15" stroke="currentColor" stroke-width="2"/></svg>';
  var LOUD = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 8a5 5 0 010 8" stroke="currentColor" stroke-width="2" fill="none"/></svg>';
  window.toggleSound = function(el){ var v = document.getElementById('heroVid'); v.muted = !v.muted; el.innerHTML = v.muted ? MUTED : LOUD; if (!v.muted) v.play().catch(function(){}); };
  window.playStoryFilm = function(scr){ var v = document.getElementById('storyVid'); var ov = scr.querySelector('.ov');
    if (v.paused) { v.muted = false; v.play(); if (ov) ov.style.opacity = '0'; } else { v.pause(); if (ov) ov.style.opacity = '1'; } };
  // nav background + reading progress
  window.addEventListener('scroll', function(){
    var n = document.querySelector('nav'); if (n) n.style.background = window.scrollY > 40 ? 'rgba(8,8,12,.92)' : 'rgba(8,8,12,.72)';
    var rp = document.getElementById('rprog'); if (!rp) return;
    if (document.body.classList.contains('reading')) { var h = document.body.scrollHeight - innerHeight; rp.style.width = (h > 0 ? (scrollY / h * 100) : 0) + '%'; }
    else rp.style.width = '0';
  });
})();
