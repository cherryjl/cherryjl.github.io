const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.querySelector('.modal-close');

document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        modalImage.src = img.src;
        modalImage.alt = img.alt || 'Expanded image';

        document.body.classList.add('modal-open');
    });
});

closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', event => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';

    document.body.classList.remove('modal-open');
}
