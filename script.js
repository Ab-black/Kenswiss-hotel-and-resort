(function(){
  var msg='Hello Kenswiss Hotel and Resort, I would like to enquire about accommodation, room rates, and availability. Please share more information. Thank you.';
  var wa='https://wa.me/2349136343270?text='+encodeURIComponent(msg);
  document.querySelectorAll('[data-wa]').forEach(function(a){a.href=wa;a.target='_blank';a.rel='noopener'});

  var nav=document.getElementById('nav'),b=document.querySelector('.burger');
  function setNav(o){nav.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')}
  b.addEventListener('click',function(){setNav(!nav.classList.contains('open'))});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A')setNav(false)});

  var lb=document.querySelector('.lb'),li=lb.querySelector('img');
  function closeLb(){lb.hidden=true;li.src=''}
  document.querySelectorAll('.gal button').forEach(function(btn){
    btn.addEventListener('click',function(){var i=btn.querySelector('img');li.src=i.src.replace(/w=\d+/,'w=1400');li.alt=i.alt;lb.hidden=false;lb.querySelector('button').focus()});
  });
  lb.addEventListener('click',function(e){if(e.target!==li)closeLb()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){if(!lb.hidden)closeLb();setNav(false)}});

  document.getElementById('yr').textContent=new Date().getFullYear();
})();
