(function(){
var d=document,root=d.documentElement;root.classList.add('js');
var calm=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
d.addEventListener('DOMContentLoaded',function(){
var io='IntersectionObserver' in window,els=d.querySelectorAll('.rv');
function done(el){setTimeout(function(){el.classList.remove('rv','in');},1500);}
if(io){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');done(e.target);o.unobserve(e.target);}});},{threshold:.1});els.forEach(function(el){o.observe(el);});}
else{els.forEach(function(el){el.classList.add('in');});}
var links=d.querySelectorAll('nav a[href^="#"]'),map={};
links.forEach(function(a){var s=d.querySelector(a.getAttribute('href'));if(s)map[s.id]=a;});
d.querySelectorAll('[data-tab]').forEach(function(s){var a=d.querySelector('nav a[href="'+s.getAttribute('data-tab')+'"]');if(a)map[s.id]=a;});
if(io&&links.length){var n=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.removeAttribute('aria-current');});if(map[e.target.id])map[e.target.id].setAttribute('aria-current','true');}});},{rootMargin:'-45% 0px -50% 0px'});
Object.keys(map).forEach(function(k){n.observe(d.getElementById(k));});}
var b=d.querySelector('.mb'),nv=d.getElementById('nv');
if(b&&nv){b.addEventListener('click',function(){var x=nv.classList.toggle('open');b.setAttribute('aria-expanded',x);});
nv.addEventListener('click',function(e){if(e.target.closest('a')){nv.classList.remove('open');b.setAttribute('aria-expanded','false');}});}
d.querySelectorAll('[data-u]').forEach(function(a){a.href='mailto:'+a.getAttribute('data-u')+'@'+a.getAttribute('data-d');});
if(!calm){d.addEventListener('pointermove',function(e){var c=e.target.closest&&e.target.closest('.card');if(!c)return;var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');},{passive:true});}
d.querySelectorAll('.stats b').forEach(function(el){
var t=parseInt(el.textContent,10);if(isNaN(t)||calm||!io)return;
el.textContent='0';
var s=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;s.disconnect();
var t0=performance.now();
(function f(now){var p=Math.min((now-t0)/1100,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f);})(t0);});});
s.observe(el);});
});
})();