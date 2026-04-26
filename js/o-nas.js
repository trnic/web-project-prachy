document.addEventListener('DOMContentLoaded', () => {
  const navCtaButton = document.querySelector('.nav-cta');
  if (navCtaButton) {
    navCtaButton.addEventListener('click', () => {
      window.location.href = 'kontakty.html';
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
  }, { threshold: 0.12 });

  fadeEls.forEach((el) => observer.observe(el));

  setTimeout(() => {
    fadeEls.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 100);

  const dayMap = { 0: 'ne', 1: 'po', 2: 'ut', 3: 'st', 4: 'ct', 5: 'pa', 6: 'so' };
  const today = dayMap[new Date().getDay()];
  const todayRow = document.getElementById(`row-${today}`);
  if (todayRow) {
    todayRow.classList.add('hours-today');
  }

  const handleSubmit = () => {
    const jmeno = document.getElementById('jmeno')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const zprava = document.getElementById('zprava')?.value.trim() || '';

    if (!jmeno || !email || !zprava) {
      alert('Prosím vyplňte alespoň jméno, email a zprávu.');
      return;
    }

    const btn = document.getElementById('submitBtn');
    if (!btn) {
      return;
    }

    btn.textContent = 'Odesílám...';
    btn.style.opacity = '0.6';
    btn.disabled = true;

    setTimeout(() => {
      const formSuccess = document.getElementById('formSuccess');
      if (formSuccess) {
        formSuccess.classList.add('show');
      }

      btn.style.display = 'none';
      ['jmeno', 'email', 'telefon', 'tema', 'zprava'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          el.value = '';
        }
      });
    }, 1000);
  };

  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', handleSubmit);
  }

  document.querySelectorAll('.form-group input').forEach((input) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    });
  });
});