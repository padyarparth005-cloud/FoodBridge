const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Navigation links that represent future login actions show a clear preview message.
document.querySelectorAll('a[href="#login"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2800);
  });
});
