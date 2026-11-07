(function(){
var d=document,w=window,root=d.documentElement;
var calm=w.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
if(!calm)root.classList.add('js');
function split(h){
var i=0,tw=d.createTreeWalker(h,NodeFilter.SHOW_TEXT),nodes=[];
while(tw.nextNode())nodes.push(tw.currentNode);
nodes.forEach(function(n){
var f=d.createDocumentFragment();
n.nodeValue.split(/(\s+)/).forEach(function(p){
if(!p)return;
if(/^\s+$/.test(p)){f.appendChild(d.createTextNode(' '));return;}
var s=d.createElement('span'),t=d.createElement('span');
s.className='wd';t.className='wi';t.textContent=p;t.style.setProperty('--i',i++);
s.appendChild(t);f.appendChild(s);
});
n.parentNode.replaceChild(f,n);
});
}
d.addEventListener('DOMContentLoaded',function(){
var io='IntersectionObserver' in w;
if(!calm)d.querySelectorAll('h2.rv').forEach(split);
var els=d.querySelectorAll('.rv');
function done(el){setTimeout(function(){el.classList.remove('rv','in');},2000);}
function show(el){el.classList.add('in');done(el);}
if(io&&!calm){
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){show(e.target);o.unobserve(e.target);}});},{threshold:0,rootMargin:'0px 0px -6% 0px'});
els.forEach(function(el){o.observe(el);});
setTimeout(function(){els.forEach(function(el){if(el.classList.contains('rv')&&!el.classList.contains('in')&&el.getBoundingClientRect().top<w.innerHeight){show(el);o.unobserve(el);}});},3500);
}else{els.forEach(function(el){el.classList.add('in');});}
var links=d.querySelectorAll('nav a[href^="#"]'),map={};
links.forEach(function(a){var s=d.querySelector(a.getAttribute('href'));if(s)map[s.id]=a;});
d.querySelectorAll('[data-tab]').forEach(function(s){var a=d.querySelector('nav a[href="'+s.getAttribute('data-tab')+'"]');if(a)map[s.id]=a;});
if(io&&links.length){
var n=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.removeAttribute('aria-current');});if(map[e.target.id])map[e.target.id].setAttribute('aria-current','true');}});},{rootMargin:'-45% 0px -50% 0px'});
Object.keys(map).forEach(function(k){n.observe(d.getElementById(k));});
}
var b=d.querySelector('.mb'),nv=d.getElementById('nv');
function closeMenu(){if(nv&&nv.classList.contains('open')){nv.classList.remove('open');b.setAttribute('aria-expanded','false');}}
if(b&&nv){
b.addEventListener('click',function(){var x=nv.classList.toggle('open');b.setAttribute('aria-expanded',x);});
nv.addEventListener('click',function(e){if(e.target.closest('a'))closeMenu();});
d.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu();});
d.addEventListener('click',function(e){if(!e.target.closest('.top'))closeMenu();});
}
d.querySelectorAll('[data-u]').forEach(function(a){a.href='mailto:'+a.getAttribute('data-u')+'@'+a.getAttribute('data-d');});
var top=d.querySelector('.top'),secs=[].slice.call(d.querySelectorAll('main>section')),meta=d.querySelector('meta[name="theme-color"]'),up=d.querySelector('.up'),ft=d.querySelector('.ft'),tick=false;
function frame(){
tick=false;
var y=top.offsetHeight+1,dk=false;
for(var i=0;i<secs.length;i++){var r=secs[i].getBoundingClientRect();if(r.top<=y&&r.bottom>y){dk=secs[i].classList.contains('dark');break;}}
top.classList.toggle('d',dk);
if(meta)meta.setAttribute('content',dk?'#3a6e76':'#edf0ef');
if(up){up.classList.toggle('on',w.scrollY>700);if(ft)up.style.setProperty('--lift',Math.max(0,w.innerHeight-ft.getBoundingClientRect().top)+'px');}
}
function req(){if(!tick){tick=true;requestAnimationFrame(frame);}}
w.addEventListener('scroll',req,{passive:true});
w.addEventListener('resize',req);
frame();
d.querySelectorAll('.stats b').forEach(function(el){
var t=parseInt(el.textContent,10);if(isNaN(t)||calm||!io)return;
el.textContent='0';
var s=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;s.disconnect();
var t0=performance.now();
(function f(now){var p=Math.min((now-t0)/1100,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f);})(t0);});});
s.observe(el);});
});
})();