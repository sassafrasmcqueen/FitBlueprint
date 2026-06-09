/**
 * FitBlueprint – Main JavaScript
 * Handles navigation, scrolling effects, and interactivity.
 */
(function () {
  'use strict';

  // --- Mobile Nav Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isActive = navMenu.classList.toggle('active');
      navToggle.classList.toggle('active', isActive);
      navToggle.setAttribute('aria-expanded', isActive);
    });

    // Close menu on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;

  function handleScroll() {
    const scrollY = window.scrollY;

    // Add shadow after scrolling past hero
    if (scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
  }

  // Throttled scroll handler
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // --- Freebie Form Handler ---
  const freebieForm = document.getElementById('freebieForm');
  if (freebieForm) {
    freebieForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = freebieForm.querySelector('.freebie-input');
      const email = emailInput.value.trim();

      if (!email || !email.includes('@')) {
        emailInput.style.outline = '2px solid #E74C3C';
        setTimeout(() => { emailInput.style.outline = ''; }, 2000);
        return;
      }

      // Simulate signup success
      const btn = freebieForm.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = '✓ Sent! Check Your Inbox';
      btn.style.background = '#1E8449';
      btn.disabled = true;

      // In production, this would POST to an email service / Payhip API
      console.log(`[FitBlueprint] Freebie signup: ${email}`);

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        emailInput.value = '';
      }, 3000);
    });
  }

  // --- Lazy image handling ---
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported — do nothing extra
  } else {
    // Fallback: load all images immediately
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.src = img.src;
    });
  }

  // --- Smooth anchor scroll offset for fixed nav ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navHeight = navbar ? navbar.offsetHeight : 72;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    });
  });

  console.log('FitBlueprint – Loaded');
})();