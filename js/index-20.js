// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// addListenerBtn.addEventListener('click', onClick);
// removeListenerBtn.removeEventListener('click', onClick);

// function onClick() {
//     console.log('Додати слухача');
// }

const containerEl = document.querySelector('body');
const listEl = document.querySelector('.site-nav');

const titelRef = document.createElement('h1');
titelRef.textContent = 'My first element';
titelRef.classList.add('title');
titelRef.style.color = 'tomato';
console.log(titelRef);

containerEl.prepend(titelRef);

const photoRef = document.createElement('img');
photoRef.style.width = '500px';
photoRef.alt = 'photo';
photoRef.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
const containerRef = document.querySelector('.hero');
containerRef.append(photoRef);
console.log(photoRef);

const titleEl = document.querySelector('.title');
