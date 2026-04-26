document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.nav-cta');

    if (!button) {
        return;
    }

    button.addEventListener('click', () => {
        window.location.href = 'kontakty.html';
    });
});