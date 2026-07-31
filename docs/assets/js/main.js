/* ============================================================
   Santiago Vasconcello — Portfolio
   ============================================================ */
(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Tema ---------- */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) root.dataset.theme = savedTheme;
  else if (window.matchMedia("(prefers-color-scheme: light)").matches) root.dataset.theme = "light";

  document.getElementById("themeToggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", root.dataset.theme);
  });

  /* ---------- Menú móvil ---------- */
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      navLinks.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });

  /* ---------- Nav scrolled + progreso + back-to-top ---------- */
  const nav = document.getElementById("nav");
  const progress = document.getElementById("scrollProgress");
  const backTop = document.getElementById("backTop");

  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 12);
    backTop.classList.toggle("visible", y > 600);

    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Scrollspy ---------- */
  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".nav-link")];

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id)
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add("visible"));
  } else {
    // Pequeño escalonado entre hermanos
    const groups = new Map();
    revealEls.forEach((el) => {
      const key = el.parentElement;
      const n = groups.get(key) || 0;
      el.style.setProperty("--delay", Math.min(n * 0.08, 0.5) + "s");
      groups.set(key, n + 1);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- Typing effect ---------- */
  const roles = [
    "Data Scientist.",
    "AI Engineer.",
    "Ingeniero Comercial.",
    "Vendo alfajores.",
    "Saco copias de llaves.",
  ];
  const typedEl = document.getElementById("typed");

  if (prefersReducedMotion) {
    typedEl.textContent = roles[0];
  } else {
    let roleIdx = 0, charIdx = 0, deleting = false;

    const tick = () => {
      const word = roles[roleIdx];
      typedEl.textContent = word.slice(0, charIdx);

      let delay = deleting ? 40 : 85;
      if (!deleting && charIdx === word.length) {
        delay = 1900;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        delay = 350;
      } else {
        charIdx += deleting ? -1 : 1;
      }
      setTimeout(tick, delay);
    };
    tick();
  }

  /* ---------- Partículas ---------- */
  const canvas = document.getElementById("particles");
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext("2d");
    let w, h, points = [];
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const LINK_DIST = 120;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      const count = Math.min(Math.floor((w * h) / 16000), 90);
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const mouse = { x: -9999, y: -9999 };
    canvas.parentElement.addEventListener("pointermove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    canvas.parentElement.addEventListener("pointerleave", () => {
      mouse.x = mouse.y = -9999;
    });

    let visible = true;
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(canvas);

    const accent = () =>
      getComputedStyle(root).getPropertyValue("--accent-1").trim() || "#22d3ee";

    const draw = () => {
      requestAnimationFrame(draw);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      const color = accent();

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = color;
            ctx.globalAlpha = (1 - d / LINK_DIST) * 0.28;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        // conexión con el mouse
        const dm = Math.hypot(points[i].x - mouse.x, points[i].y - mouse.y);
        if (dm < LINK_DIST * 1.4) {
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = color;
          ctx.globalAlpha = (1 - dm / (LINK_DIST * 1.4)) * 0.45;
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    resize();
    window.addEventListener("resize", resize);
    draw();
  }

  /* ---------- Año footer ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
