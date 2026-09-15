/* ==========================================================================
   Sidh Kansal Portfolio - JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Dark/Light Mode)
  initTheme();

  // 2. Dynamic Typewriter Effect in Hero
  initTypewriter();

  // 3. Project Category Filter
  initProjectFilters();

  // 4. Mobile Navigation Menu
  initMobileMenu();

  // 5. Scroll-to-Top Button
  initScrollTop();

  // 6. Active Navigation Link on Scroll
  initActiveNavLink();

  // 7. Contact Form Simulation
  initContactForm();

  // 8. Footer Year
  document.getElementById('current-year').textContent = new Date().getFullYear();
});

/**
 * Theme Management with localStorage persistence
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-moon';
    } else {
      themeIcon.className = 'fa-solid fa-sun';
    }
  }
}

/**
 * Typewriter Effect for Hero Subtitle
 */
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter');
  if (!typewriterElement) return;

  const roles = [
    'B.Tech CSE Undergrad @ LPU',
    'C++ & DSA Developer',
    'Machine Learning & AI Enthusiast',
    'Python & Data Science Practitioner',
    'Competitive Problem Solver'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 40;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 90;
    }

    // Word completed
    if (!isDeleting && charIndex === currentRole.length) {
      typingDelay = 1700; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 350; // Pause before typing next word
    }

    setTimeout(type, typingDelay);
  }

  type();
}

/**
 * Filter projects by category (supports multi-category matching)
 */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const rawCategory = card.getAttribute('data-category') || '';
        const categories = rawCategory.split(' ');

        const matches = filterValue === 'all' || categories.includes(filterValue);

        if (matches) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * Mobile Navigation Toggle
 */
function initMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    navToggle.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });
}

/**
 * Scroll to Top Button Visibility and Action
 */
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scroll-top');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Active Navigation Link Highlight on Scroll
 */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * Contact Form Simulation with friendly feedback
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Please fill out all required fields.';
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      feedback.className = 'form-feedback success';
      feedback.textContent = `Thank you, ${name}! Your message has been sent to Sidh Kansal.`;

      contactForm.reset();

      setTimeout(() => {
        feedback.textContent = '';
        feedback.className = 'form-feedback';
      }, 6000);
    }, 900);
  });
}
