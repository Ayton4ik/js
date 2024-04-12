const openBtnRef = document.querySelector('[data-action="open-modal"]');
const closeBtnRef = document.querySelector('[data-action="close-modal"]');
const backdropRef = document.querySelector('.js-backdrop');

openBtnRef.addEventListener('click', onOpenModal);
function onOpenModal() {
    document.body.classList.add('show-modal');
    window.addEventListener('keydown', onEscClose);
};

closeBtnRef.addEventListener('click', onCloseModal);
function onCloseModal() {
    document.body.classList.remove('show-modal');
    window.removeEventListener('keydown', onEscClose);
};

backdropRef.addEventListener('click', onBackdropClose);
function onBackdropClose(event) {
    if (event.target === event.currentTarget){
        onCloseModal();
    };
};

function onEscClose(event) {
    if(event.code === 'Escape'){
        onCloseModal();
    }
}