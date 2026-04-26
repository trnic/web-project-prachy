document.addEventListener('DOMContentLoaded', () => {
  const navCtaButton = document.querySelector('.nav-cta');
  if (navCtaButton) {
    navCtaButton.addEventListener('click', () => {
      window.location.href = 'kontakty.html';
    });
  }

  const headerImage = document.getElementById('pageHeaderImage');
  if (headerImage) {
    headerImage.addEventListener('error', () => {
      if (headerImage.parentNode && headerImage.parentNode.style) {
        headerImage.parentNode.style.background = 'var(--bg-tertiary)';
      }
    });
  }

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach((el) => observer.observe(el));

  const timelineItems = document.querySelectorAll('.timeline-item');

  const timelineObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      timelineItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('visible'), index * 120);
      });
      timelineObserver.disconnect();
    }
  }, { threshold: 0.2 });

  if (timelineItems.length) {
    timelineObserver.observe(timelineItems[0]);
  }

  setTimeout(() => {
    fadeEls.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 100);
});