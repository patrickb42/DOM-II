document.querySelector('.nav').addEventListener('click', (event) => {
  if (event.target !== document.querySelector('.nav')) {
    alert(`You clicked ${event.target.textContent}!
Have a cookie... get it?`);
  }
});

document.querySelectorAll('img')
  .forEach((img) => {
    img.addEventListener('mouseenter', (event) => {
      const e = event;
      e.target.style.opacity = '.75';
    });
    img.addEventListener('mouseleave', (event) => {
      const e = event;
      e.target.style.opacity = '1';
    });
  });

const BODY = document.querySelector('body');
BODY.addEventListener('copy', () => {
  navigator.clipboard.readText().then(data => alert(`You copied ${data}`));
});
BODY.addEventListener('dblclick', event => alert(`You double-clicked ${event.target}`));

document.addEventListener('keydown', (event) => {
  if (String.fromCharCode(event.keyCode) !== 'F') {
    alert(`You pressed ${String.fromCharCode(event.keyCode)}`);
  }
});
document.addEventListener('keyup', (event) => {
  if (String.fromCharCode(event.keyCode) === 'F') {
    alert('You stopped paying respects');
  }
});
document.addEventListener('scroll', () => console.log(`Scrolled to ${window.scrollY}`));
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  alert('NO CONTEXT MENU FOR YOU!');
});

window.addEventListener('load', () => alert('YOUR PAGE LOADED!'));
