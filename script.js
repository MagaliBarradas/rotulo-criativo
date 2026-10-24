const contactForm = document.querySelector('#contact-form');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const message = `Olá! Sou ${data.get('name')}. Procuro ajuda com ${data.get('service')}. ${data.get('message')}`;
  window.open(`https://wa.me/351932455443?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

document.querySelector('#year').textContent = new Date().getFullYear();

const hero = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero-title');
const heroSymbol = document.querySelector('.floating-symbol');

document.querySelectorAll('.hero-title .word').forEach((word) => {
  [...word.textContent].forEach((letter, index) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = letter;
    span.style.setProperty('--letter-delay', `${index * 26}ms`);
    span.style.setProperty('--tilt', `${((index % 3) - 1) * 1.4}deg`);
    word.append(span);
  });
  word.childNodes[0]?.remove();
});

if (hero && heroTitle && !reducedMotion.matches) {
  let ticking = false;
  const updateHeroScroll = () => {
    const offset = Math.min(window.scrollY, hero.offsetHeight);
    heroTitle.style.transform = `translate3d(0, ${offset * .1}px, 0)`;
    if (heroSymbol) heroSymbol.style.setProperty('--scroll-y', `${offset * -.035}px`);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) requestAnimationFrame(updateHeroScroll);
    ticking = true;
  }, { passive: true });
}

const revealGroups = [
  ...document.querySelectorAll('.section-heading, .about-photo, .about-copy, .contact-copy, #contact-form'),
  ...document.querySelectorAll('.service-card, .project')
];

revealGroups.forEach((element, index) => {
  element.classList.add('reveal');
  if (element.matches('.service-card, .project')) element.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`);
});

if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  revealGroups.forEach((element) => observer.observe(element));
} else {
  revealGroups.forEach((element) => element.classList.add('is-visible'));
}
