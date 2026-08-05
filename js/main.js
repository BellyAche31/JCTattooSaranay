(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  $("year").textContent = new Date().getFullYear();

  /* ---------- Reveal-on-scroll (declared early: renderGallery() depends on it) ---------- */
  let revealObserver;
  function observeReveals() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
    }
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Content from SITE config ---------- */
  document.title = `${SITE.businessName} — ${SITE.tagline}`;
  $("artistName").textContent = SITE.artist.name;
  $("artistBio").textContent = SITE.artist.bio;
  if (SITE.motto) $("heroMotto").textContent = SITE.motto;

  // About stats — derived from real content so they can never go stale.
  // Deliberately NOT follower/review counts: those change on their own and
  // a hardcoded copy silently becomes a lie.
  const styleCount = new Set(SITE.portfolio.map((p) => p.tag)).size;
  const piercingCount = SITE.piercingPricing.reduce((n, g) => n + g.items.length, 0);
  $("aboutStats").innerHTML = [
    { value: SITE.portfolio.length, label: "Pieces on show" },
    { value: styleCount, label: "Styles covered" },
    { value: piercingCount, label: "Piercings offered" },
  ]
    .map((s) => `<li><b>${s.value}</b><span>${s.label}</span></li>`)
    .join("");

  // Marquee — built from the portfolio's own style tags, doubled for a seamless loop
  const marqueeWords = [...new Set(SITE.portfolio.map((p) => p.tag))];
  $("marqueeTrack").innerHTML = [...marqueeWords, ...marqueeWords]
    .map((w) => `<span>${w}</span><span class="dot">✦</span>`)
    .join("");

  // Services
  const servicesGrid = $("servicesGrid");
  SITE.services.forEach((service, i) => {
    const row = document.createElement("div");
    row.className = "service-row reveal";
    row.innerHTML =
      `<span class="service-row-num">${String(i + 1).padStart(2, "0")}</span>` +
      `<h3>${service.title}</h3>` +
      `<p>${service.description}</p>`;
    servicesGrid.appendChild(row);
  });

  // Piercing pricing
  const pricingGrid = $("pricingGrid");
  SITE.piercingPricing.forEach((group) => {
    const card = document.createElement("div");
    card.className = "pricing-card reveal";
    const rows = group.items
      .map(
        (item) =>
          `<li><span class="pricing-item-name">${item.name}</span>` +
          `<span class="pricing-item-price">${SITE.currency}${item.price}</span></li>`
      )
      .join("");
    card.innerHTML = `<h3>${group.category}</h3><ul class="pricing-list">${rows}</ul>`;
    pricingGrid.appendChild(card);
  });

  // Hours — flag today's row
  const hoursList = $("hoursList");
  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
  SITE.hours.forEach(({ day, time }) => {
    const row = document.createElement("div");
    row.className = "hours-row reveal" + (day === todayName ? " today" : "");
    row.innerHTML = `<span class="hours-day">${day}</span><span class="hours-time">${time}</span>`;
    hoursList.appendChild(row);
  });

  // Contact
  const instagramCard = $("instagramCard");
  instagramCard.href = SITE.instagramUrl;
  $("instagramValue").textContent = SITE.instagramHandle;

  const phoneCard = $("phoneCard");
  const phoneValue = $("phoneValue");
  if (SITE.phone) {
    // Philippine local mobile numbers start with 0 (e.g. 0991 240 1492) —
    // swap that leading 0 for the +63 country code for the tel: link.
    const digits = SITE.phone.replace(/\D/g, "");
    const intlDigits = digits.startsWith("0") ? "63" + digits.slice(1) : digits;
    phoneCard.href = `tel:+${intlDigits}`;
    phoneValue.textContent = SITE.phone;
  } else {
    phoneCard.removeAttribute("href");
    phoneCard.style.cursor = "default";
    phoneValue.textContent = SITE.phoneDisplay || "Coming soon";
  }

  const locationCard = $("locationCard");
  locationCard.href = SITE.mapsUrl;
  $("locationValue").textContent = SITE.location;

  // Footer socials
  const SOCIAL_ICONS = {
    Instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
    Facebook:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 21v-8h3l.5-4H14V7c0-1.1.5-2 2-2h1.6V1.2C17.2 1.1 15.9 1 14.9 1 11.9 1 10 2.8 10 6.2V9H7v4h3v8z"/></svg>',
    TikTok:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3v10.5a3.5 3.5 0 1 1-3-3.47M14 3a5 5 0 0 0 5 5"/></svg>',
  };
  const footerSocials = $("footerSocials");
  [
    { url: SITE.instagramUrl, label: "Instagram" },
    { url: SITE.facebookUrl, label: "Facebook" },
    { url: SITE.tiktokUrl, label: "TikTok" },
  ]
    .filter((s) => s.url)
    .forEach((s) => {
      const a = document.createElement("a");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", s.label);
      a.innerHTML = SOCIAL_ICONS[s.label];
      footerSocials.appendChild(a);
    });

  /* ---------- Portfolio gallery ---------- */
  const gallery = $("gallery");
  const filtersWrap = $("galleryFilters");
  const TILTS = [-2, 1.4, -1, 2, -1.6, 1, -2.4, 1.8, -1.2, 2.2];

  [...new Set(SITE.portfolio.map((p) => p.tag))].forEach((tag) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.filter = tag;
    btn.textContent = tag;
    filtersWrap.appendChild(btn);
  });

  SITE.portfolio.forEach((item, index) => {
    const el = document.createElement("figure");
    el.className = "gallery-item reveal";
    el.dataset.tag = item.tag;
    el.dataset.index = index;
    el.style.setProperty("--tilt", `${TILTS[index % TILTS.length]}deg`);
    el.innerHTML =
      `<img src="${item.src}" alt="${item.alt}" loading="lazy" />` +
      `<span class="tag">${item.tag}</span>`;
    gallery.appendChild(el);
  });

  filtersWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filtersWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.style.display = filter === "all" || item.dataset.tag === filter ? "" : "none";
    });
  });

  /* ---------- Surprise me ---------- */
  $("surpriseBtn").addEventListener("click", () => {
    const visible = Array.from(document.querySelectorAll(".gallery-item")).filter(
      (item) => item.style.display !== "none"
    );
    if (!visible.length) return;
    const pick = visible[Math.floor(Math.random() * visible.length)];
    pick.scrollIntoView({ behavior: "smooth", block: "center" });
    pick.classList.remove("pulse");
    void pick.offsetWidth;
    pick.classList.add("pulse");
    setTimeout(() => openLightbox(Number(pick.dataset.index)), 520);
  });

  /* ---------- Lightbox ---------- */
  const lightbox = $("lightbox");
  const lightboxImg = $("lightboxImg");
  const lightboxCaption = $("lightboxCaption");
  let currentIndex = 0;

  function updateLightboxImage() {
    const item = SITE.portfolio[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxCaption.textContent = `${item.tag} — ${currentIndex + 1}/${SITE.portfolio.length}`;
  }
  function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function step(delta) {
    currentIndex = (currentIndex + delta + SITE.portfolio.length) % SITE.portfolio.length;
    updateLightboxImage();
  }

  gallery.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item) openLightbox(Number(item.dataset.index));
  });
  $("lightboxClose").addEventListener("click", closeLightbox);
  $("lightboxPrev").addEventListener("click", () => step(-1));
  $("lightboxNext").addEventListener("click", () => step(1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  /* ---------- Header state + scroll progress + nav highlighting ---------- */
  const header = $("siteHeader");
  const scrollBar = $("scrollBar");
  const navLinks = Array.from(document.querySelectorAll('.primary-nav a[href^="#"]:not(.nav-cta)'));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      header.classList.toggle("scrolled", y > 20);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollBar.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;

      const mark = y + window.innerHeight * 0.32;
      let active = -1;
      sections.forEach((sec, i) => {
        if (sec.offsetTop <= mark) active = i;
      });
      navLinks.forEach((a, i) => a.classList.toggle("active", i === active));

      ticking = false;
    });
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  const navToggle = $("navToggle");
  const primaryNav = $("primaryNav");
  navToggle.addEventListener("click", () => {
    const open = primaryNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  primaryNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- Cursor glow (pointer devices only) ---------- */
  const glow = $("cursorGlow");
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let gx = 0, gy = 0, raf = false;
    window.addEventListener(
      "mousemove",
      (e) => {
        gx = e.clientX;
        gy = e.clientY;
        glow.classList.add("on");
        if (raf) return;
        raf = true;
        requestAnimationFrame(() => {
          glow.style.transform = `translate(${gx}px, ${gy}px)`;
          raf = false;
        });
      },
      { passive: true }
    );
    document.addEventListener("mouseleave", () => glow.classList.remove("on"));
  }

  observeReveals();
})();
