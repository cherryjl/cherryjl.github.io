document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-grid');
    if (!gallery) {
        return;
    }

    const images = Array.from(gallery.children);

    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        gallery.appendChild(images[j]);
        images.splice(j, 1);
    }
});
