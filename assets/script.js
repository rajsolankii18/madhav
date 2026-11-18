const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#enquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Computer service enquiry - Madhav Computers');
  const body = encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\n\nDevice and problem:\n${data.get('message')}`);
  window.location.href = `mailto:${document.body.dataset.email}?subject=${subject}&body=${body}`;
});
