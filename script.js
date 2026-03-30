/* ─────────────────────────────────────────
   INTELLITHON '26 — JAVASCRIPT
   Starfield, Countdown, Animations & UX
───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. STAR CANVAS ──────────────────────
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function createStars(count = 200) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random(),
        da: (Math.random() - 0.5) * 0.008,
        speed: Math.random() * 0.15 + 0.02,
      });
    }
  }
  createStars();

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.a += s.da;
      if (s.a <= 0 || s.a >= 1) s.da *= -1;
      s.y += s.speed;
      if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,240,255,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();

  // ── 2. CURSOR GLOW ──────────────────────
  const glow = document.createElement('div');
  glow.classList.add('cursor-glow');
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });

  // ── 3. NAVBAR SCROLL ────────────────────
  const navbar = document.getElementById('navbar');
  const banner = document.getElementById('announcement-banner');
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.style.background = 'rgba(3,4,10,0.97)';
    } else {
      navbar.style.background = 'rgba(3,4,10,0.85)';
    }
    // Scroll to top button
    if (window.scrollY > 400) scrollTopBtn.classList.add('visible');
    else scrollTopBtn.classList.remove('visible');

    // Active nav link
    updateActiveNav();
  });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Navbar banner offset
  const closeBanner = document.querySelector('.close-banner');
  if (closeBanner) {
    closeBanner.addEventListener('click', () => {
      navbar.classList.add('no-banner');
    });
  }

  // ── 4. ACTIVE NAV ───────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
  }

  // ── 5. HAMBURGER MENU ───────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('nav-links');

  hamburger?.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
  });
  navLinksEl?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinksEl.classList.remove('open'));
  });

  // ── 6. INTERSECTION OBSERVER ────────────
  const observerTargets = document.querySelectorAll('.section > .container');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  observerTargets.forEach(el => io.observe(el));

  // ── 7. NUMBER COUNTERS ──────────────────
  function animateCounter(el, target, prefix = '', suffix = '', duration = 1800) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      el.textContent = prefix + Math.floor(start).toLocaleString('en-IN') + suffix;
      if (start >= target) clearInterval(timer);
    }, 16);
  }

  // Stat numbers
  const statNums = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.target);
        animateCounter(e.target, target);
        statObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(n => statObserver.observe(n));

  // Prize pool counter
  const prizeCounter = document.getElementById('prize-counter');
  const podiumNums = document.querySelectorAll('.podium-num');
  const prizeTotal = 250000; // 1L + 50k + 25k + 6*10k
  let prizeAnimated = false;

  const prizeObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !prizeAnimated) {
        prizeAnimated = true;
        // Prize pool
        let p = 0;
        const step = prizeTotal / (2000 / 16);
        const t = setInterval(() => {
          p = Math.min(p + step, prizeTotal);
          prizeCounter.textContent = '₹' + Math.floor(p).toLocaleString('en-IN') + '+';
          if (p >= prizeTotal) clearInterval(t);
        }, 16);
        // Individual podium prizes
        podiumNums.forEach(num => {
          const target = parseInt(num.dataset.target);
          let cur = 0;
          const st = target / (2000 / 16);
          const ti = setInterval(() => {
            cur = Math.min(cur + st, target);
            num.textContent = '₹' + Math.floor(cur).toLocaleString('en-IN');
            if (cur >= target) clearInterval(ti);
          }, 16);
        });
        prizeObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  if (prizeCounter) prizeObserver.observe(prizeCounter);

  // ── 8. COUNTDOWN TIMER ──────────────────
  // Countdown to event: August 14, 2026 00:00:00
  const eventDate = new Date('2026-08-14T00:00:00');

  function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-mins').textContent = '00';
      document.getElementById('cd-secs').textContent = '00';
      return;
    }

    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent  = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent  = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent  = String(secs).padStart(2, '0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ── 9. TIMELINE TABS ────────────────────
  const dayTabs = document.querySelectorAll('.day-tab');
  const dayPanels = document.querySelectorAll('.timeline-day');

  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const day = tab.dataset.day;
      dayTabs.forEach(t => t.classList.remove('active'));
      dayPanels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`day-${day}`)?.classList.add('active');
    });
  });

  // ── 10. FAQ ACCORDION ───────────────────
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.parentElement;
      const answer = item.querySelector('.faq-a');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      document.querySelectorAll('.faq-q').forEach(b => b.setAttribute('aria-expanded', 'false'));
      document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));

      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });

  // ── 11. THEME CARD PARTICLE HOVER ───────
  document.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 0 40px rgba(0,229,255,0.15), 0 16px 50px rgba(0,229,255,0.08)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
    });
  });

  // ── 12. SMOOTH NAV LINKS ────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── 13. PARTNER CARD HOVER GLOW ─────────
  document.querySelectorAll('.partner-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.background = 'rgba(0,229,255,0.06)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });

  console.log('%c🚀 INTELLITHON \'26', 'color: #00e5ff; font-family: monospace; font-size: 2rem; font-weight: bold;');
  console.log('%cFlagship Hackathon by K.R. Mangalam University', 'color: #7aacbe; font-size: 1rem;');
});
