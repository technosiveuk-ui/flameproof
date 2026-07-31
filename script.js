/* ============================================================
   Flame Proof — Fire Protection Solutions
   Interactivity: theme toggle, mobile menu, nav shrink,
   reveal-on-scroll, contact form validation + WhatsApp compose
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '919082096962';

  /* ---------- Theme toggle ---------- */
  var themeToggle = document.getElementById('themeToggle');
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
    try { localStorage.setItem('flameproof-theme', theme); } catch (e) {}
  }

  themeToggle.addEventListener('click', function () {
    var isLight = root.getAttribute('data-theme') === 'light';
    themeToggle.classList.add('spin');
    setTimeout(function () { themeToggle.classList.remove('spin'); }, 600);
    applyTheme(isLight ? 'dark' : 'light');
  });

  // Sync aria-pressed with the pre-paint state set by the inline head script.
  themeToggle.setAttribute('aria-pressed', String(root.getAttribute('data-theme') === 'light'));

  /* ---------- Mobile menu ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');

  function setMenu(open) {
    navLinks.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.innerHTML = open
      ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  }

  menuToggle.addEventListener('click', function () {
    setMenu(!navLinks.classList.contains('open'));
  });

  // Close the menu after clicking any nav link.
  Array.prototype.forEach.call(navLinks.querySelectorAll('a'), function (a) {
    a.addEventListener('click', function () {
      if (navLinks.classList.contains('open')) setMenu(false);
    });
  });

  /* ---------- Shrink navbar on scroll ---------- */
  var nav = document.querySelector('nav');
  var onScroll = function () {
    nav.classList.toggle('shrink', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      Array.prototype.forEach.call(entries, function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(revealEls, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(revealEls, function (el) { el.classList.add('visible'); });
  }

  /* ---------- Contact form: validate + compose WhatsApp message ---------- */
  var form = document.getElementById('quoteForm');

  function setError(group, hasError) {
    group.classList.toggle('error', hasError);
  }

  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validPhone(value) {
    // Accepts +country-code and 7–15 digits, spaces/dashes allowed.
    return /^[+]?[\d\s-]{7,15}$/.test(value) && value.replace(/\D/g, '').length >= 7;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.name;
    var phone = form.phone;
    var email = form.email;
    var service = form.service;
    var message = form.message;

    var nameGroup = name.closest('.form-group');
    var phoneGroup = phone.closest('.form-group');
    var emailGroup = email.closest('.form-group');
    var serviceGroup = service.closest('.form-group');

    var ok = true;

    if (!name.value.trim()) { setError(nameGroup, true); ok = false; } else setError(nameGroup, false);

    if (!validPhone(phone.value.trim())) { setError(phoneGroup, true); ok = false; } else setError(phoneGroup, false);

    if (email.value.trim() && !validEmail(email.value.trim())) { setError(emailGroup, true); ok = false; } else setError(emailGroup, false);

    if (!service.value) { setError(serviceGroup, true); ok = false; } else setError(serviceGroup, false);

    if (!ok) {
      var firstError = form.querySelector('.form-group.error input, .form-group.error select, .form-group.error textarea');
      if (firstError) firstError.focus();
      return;
    }

    var lines = [
      '*New Quote Request — Flame Proof*',
      'Name: ' + name.value.trim(),
      'Phone: ' + phone.value.trim()
    ];
    if (email.value.trim()) lines.push('Email: ' + email.value.trim());
    lines.push('Service: ' + service.value);
    if (message.value.trim()) lines.push('Message: ' + message.value.trim());

    var text = encodeURIComponent(lines.join('\n'));
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + text, '_blank', 'noopener');
  });

  // Clear error state as the user corrects a field.
  Array.prototype.forEach.call(form.querySelectorAll('input, select, textarea'), function (field) {
    field.addEventListener('input', function () {
      setError(field.closest('.form-group'), false);
    });
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
