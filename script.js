const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('#main-nav');
const contactForm = document.querySelector('#contact-form');

function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  document.body.classList.toggle('menu-open', isOpen);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const message = `Olá! Sou ${data.get('name')}. Procuro ajuda com ${data.get('service')}. ${data.get('message')}`;
  window.open(`https://wa.me/351932455443?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

document.querySelector('#year').textContent = new Date().getFullYear();

const hero = document.querySelector('.hero');
const heroLogo = document.querySelector('.hero-logo img');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (hero && heroLogo && !reducedMotion.matches && window.matchMedia('(pointer: fine)').matches) {
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  let frame;
  const animate = () => {
    current.x += (target.x - current.x) * .08;
    current.y += (target.y - current.y) * .08;
    heroLogo.style.transform = `perspective(900px) rotateX(${current.y}deg) rotateY(${current.x}deg)`;
    frame = Math.abs(target.x-current.x) + Math.abs(target.y-current.y) > .03 ? requestAnimationFrame(animate) : null;
  };
  const requestAnimation = () => { if (!frame) frame = requestAnimationFrame(animate); };
  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    target.x = ((event.clientX-bounds.left)/bounds.width-.5)*10;
    target.y = ((event.clientY-bounds.top)/bounds.height-.5)*-7;
    requestAnimation();
  });
  hero.addEventListener('pointerleave', () => { target.x = 0; target.y = 0; requestAnimation(); });
}

// Entradas suaves e escalonadas à medida que cada bloco entra no ecrã.
const revealGroups = [
  ...document.querySelectorAll('.section-heading, .about-photo, .about-copy, .contact-copy, #contact-form'),
  ...document.querySelectorAll('.service-card, .project')
];

revealGroups.forEach((element, index) => {
  element.classList.add('reveal');
  if (element.matches('.service-card, .project')) {
    element.style.setProperty('--reveal-delay', `${(index % 3) * 90}ms`);
  }
});

if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });

  revealGroups.forEach((element) => revealObserver.observe(element));
} else {
  revealGroups.forEach((element) => element.classList.add('is-visible'));
}

// Parallax contido no hero; evita trabalho extra fora do primeiro ecrã.
if (hero && !reducedMotion.matches) {
  let scrollFrame = null;
  const updateHeroScroll = () => {
    const progress = Math.min(window.scrollY / Math.max(hero.offsetHeight, 1), 1);
    const copy = hero.querySelector('.hero-copy');
    const art = hero.querySelector('.hero-art');
    copy.style.transform = `translateY(${progress * 34}px)`;
    copy.style.opacity = String(1 - progress * .38);
    art.style.transform = `translateY(${progress * 58}px)`;
    art.style.opacity = String(1 - progress * .5);
    scrollFrame = null;
  };

  window.addEventListener('scroll', () => {
    if (!scrollFrame && window.scrollY <= hero.offsetHeight) {
      scrollFrame = requestAnimationFrame(updateHeroScroll);
    }
  }, { passive: true });
}
