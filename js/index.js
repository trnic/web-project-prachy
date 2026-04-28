document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.nav-cta');

    if (button) {
        button.addEventListener('click', () => {
            window.location.href = 'kontakty.html';
        });
    }

    // Image carousel in hero section
    const carousel = document.getElementById('heroCarousel');
    if (carousel) {
        const images = carousel.querySelectorAll('.carousel-image');
        let currentIndex = 0;

        if (images.length > 1) {
            setInterval(() => {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }, 2000); // Change image every 2 seconds
        }
    }
});