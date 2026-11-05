(function(){
var d=document;d.documentElement.classList.add('js');
d.addEventListener('DOMContentLoaded',function(){
var els=d.querySelectorAll('.rv'),io='IntersectionObserver' in window;
if(io){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target);}});},{threshold:.12});els.forEach(function(el){o.observe(el);});}
else{els.forEach(function(el){el.classList.add('in');});}
var links=d.querySelectorAll('nav a[href^="#"]'),map={};
links.forEach(function(a){var s=d.querySelector(a.getAttribute('href'));if(s)map[s.id]=a;});
if(io){var n=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.removeAttribute('aria-current');});if(map[e.target.id])map[e.target.id].setAttribute('aria-current','true');}});},{rootMargin:'-45% 0px -50% 0px'});
Object.keys(map).forEach(function(k){n.observe(d.getElementById(k));});}
d.querySelectorAll('[data-u]').forEach(function(a){a.href='mailto:'+a.getAttribute('data-u')+'@'+a.getAttribute('data-d');});
});
})();