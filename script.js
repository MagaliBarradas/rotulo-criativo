const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('#main-nav');
const contactForm = document.querySelector('#contact-form');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const message = `Olá! Sou ${data.get('name')}. Procuro ajuda com ${data.get('service')}. ${data.get('message')}`;
  const whatsappUrl = `https://wa.me/351932455443?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});

document.querySelector('#year').textContent = new Date().getFullYear();

// Movimento 3D subtil do símbolo no banner.
const hero = document.querySelector('.hero');
const heroLogo = document.querySelector('.hero-logo img');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (hero && heroLogo && !reducedMotion.matches) {
  const target = { x: 0, y: 0, z: 0, lift: 0 };
  const current = { x: 0, y: 0, z: 0, lift: 0 };
  let animationFrame = null;

  const animateLogo = () => {
    let moving = false;

    Object.keys(current).forEach((property) => {
      const difference = target[property] - current[property];
      current[property] += difference * 0.09;
      if (Math.abs(difference) > 0.02) moving = true;
    });

    heroLogo.style.transform = `perspective(900px) translateY(${current.lift}px) rotateX(${current.x}deg) rotateY(${current.y}deg) rotateZ(${current.z}deg)`;
    animationFrame = moving ? requestAnimationFrame(animateLogo) : null;
  };

  const requestLogoAnimation = () => {
    if (!animationFrame) animationFrame = requestAnimationFrame(animateLogo);
  };

  const updateScrollRotation = () => {
    const heroHeight = Math.max(hero.offsetHeight, 1);
    const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
    target.z = progress * 11;
    target.lift = progress * 18;
    requestLogoAnimation();
  };

  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    target.y = horizontal * 16;
    target.x = vertical * -11;
    requestLogoAnimation();
  });

  hero.addEventListener('pointerleave', () => {
    target.x = 0;
    target.y = 0;
    requestLogoAnimation();
  });

  window.addEventListener('scroll', updateScrollRotation, { passive: true });
  updateScrollRotation();
}
