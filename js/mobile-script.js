const modalMobile = document.querySelector('.mobile-menu');
const mobileBtnOpen = document.querySelector('.mobile-btn-open');
const mobileBtnClose = document.querySelector('.mobile-btn-close')

const toggleMobile = () => {
    modalMobile.classList.toggle("is-open");
}

mobileBtnOpen.addEventListener('click', toggleMobile);
mobileBtnClose.addEventListener('click', toggleMobile);