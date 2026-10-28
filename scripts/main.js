const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const header=document.querySelector('[data-header]');
const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.mobile-menu');
document.querySelector('#year').textContent=new Date().getFullYear();
function closeMenu(){toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Abrir menu');menu?.classList.remove('is-open');document.body.classList.remove('menu-open')}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Abrir menu':'Fechar menu');menu?.classList.toggle('is-open',!open);document.body.classList.toggle('menu-open',!open)});
menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
function updateHeader(){header?.classList.toggle('is-scrolled',scrollY>20)}
updateHeader();addEventListener('scroll',updateHeader,{passive:true});
const revealItems=document.querySelectorAll('.reveal');
if(!reducedMotion.matches&&'IntersectionObserver'in window){const observer=new IntersectionObserver((entries,watcher)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');watcher.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -4% 0px'});revealItems.forEach(item=>observer.observe(item))}else revealItems.forEach(item=>item.classList.add('is-visible'));
