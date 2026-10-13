const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const copyButton = document.querySelector('#copyProfile');
const copyStatus = document.querySelector('#copyStatus');
copyButton?.addEventListener('click', async () => {
  const profileUrl = 'https://github.com/jessanson2025-afk';
  try {
    await navigator.clipboard.writeText(profileUrl);
    copyStatus.textContent = 'GitHub profile link copied.';
  } catch {
    copyStatus.textContent = profileUrl;
  }
});

const revealTargets = document.querySelectorAll('.project-card, .toolkit-card, .principles-card, .timeline-item, .beyond-card');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((item) => {
    item.classList.add('reveal');
    observer.observe(item);
  });
}
