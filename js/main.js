(() => {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Reveal-on-scroll (declared early: renderGallery() below depends on it) ---------- */
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
        { threshold: 0.15 }
      );
    }
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Populate content from SITE config ---------- */
  document.title = `${SITE.businessName} — ${SITE.tagline}`;
  document.querySelectorAll(".brand-name").forEach((el) => {
    el.innerHTML = `${SITE.shortName} <em>saranay</em>`;
  });

  document.getElementById("artistName").textContent = SITE.artist.name;
  document.getElementById("artistBio").textContent = SITE.artist.bio;

  // Services
  const servicesGrid = document.getElementById("servicesGrid");
  SITE.services.forEach((service) => {
    const card = document.createElement("div");
    card.className = "service-card reveal";
    card.innerHTML = `<h3>${service.title}</h3><p>${service.description}</p>`;
    servicesGrid.appendChild(card);
  });

  // Hours
  const hoursTable = document.getElementById("hoursTable");
  SITE.hours.forEach(({ day, time }) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${day}</td><td>${time}</td>`;
    hoursTable.appendChild(row);
  });

  // Contact
  const instagramCard = document.getElementById("instagramCard");
  instagramCard.href = SITE.instagramUrl;
  document.getElementById("instagramValue").textContent = SITE.instagramHandle;

  const phoneCard = document.getElementById("phoneCard");
  const phoneValue = document.getElementById("phoneValue");
  if (SITE.phone) {
    phoneCard.href = `tel:${SITE.phone.replace(/[^\d+]/g, "")}`;
    phoneValue.textContent = SITE.phone;
  } else {
    phoneCard.removeAttribute("href");
    phoneCard.style.cursor = "default";
    phoneValue.textContent = SITE.phoneDisplay;
  }

  document.getElementById("locationValue").textContent = SITE.location;

  // Footer socials
  const footerSocials = document.getElementById("footerSocials");
  const SOCIAL_ICONS = {
    Instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
    Facebook:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 21v-8h3l.5-4H14V7c0-1.1.5-2 2-2h1.6V1.2C17.2 1.1 15.9 1 14.9 1 11.9 1 10 2.8 10 6.2V9H7v4h3v8z"/></svg>',
    TikTok:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3v10.5a3.5 3.5 0 1 1-3-3.47M14 3a5 5 0 0 0 5 5"/></svg>',
  };
  const socialLinks = [
    { url: SITE.instagramUrl, label: "Instagram" },
    { url: SITE.facebookUrl, label: "Facebook" },
    { url: SITE.tiktokUrl, label: "TikTok" },
  ].filter((s) => s.url);
  socialLinks.forEach((s) => {
    const a = document.createElement("a");
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", s.label);
    a.innerHTML = SOCIAL_ICONS[s.label];
    footerSocials.appendChild(a);
  });

  /* ---------- Portfolio gallery ---------- */
  const gallery = document.getElementById("gallery");
  const filtersWrap = document.getElementById("galleryFilters");
  const tags = ["all", ...new Set(SITE.portfolio.map((p) => p.tag))];

  tags.slice(1).forEach((tag) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.filter = tag;
    btn.textContent = tag;
    filtersWrap.appendChild(btn);
  });

  const TILTS = [-2.5, 1.5, -1, 2.5, -3, 1, -1.5, 2, -2, 1.8];

  function renderGallery() {
    gallery.innerHTML = "";
    SITE.portfolio.forEach((item, index) => {
      const el = document.createElement("figure");
      el.className = "gallery-item reveal";
      el.dataset.tag = item.tag;
      el.dataset.index = index;
      el.style.setProperty("--tilt", `${TILTS[index % TILTS.length]}deg`);
      el.innerHTML = `<img src="${item.src}" alt="${item.alt}" loading="lazy" /><span class="tag">${item.tag}</span>`;
      gallery.appendChild(el);
    });
    observeReveals();
  }
  renderGallery();

  filtersWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filtersWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".gallery-item").forEach((item) => {
      const show = filter === "all" || item.dataset.tag === filter;
      item.style.display = show ? "" : "none";
    });
  });

  /* ---------- Surprise Me ---------- */
  document.getElementById("surpriseBtn").addEventListener("click", () => {
    const visible = Array.from(document.querySelectorAll(".gallery-item")).filter(
      (item) => item.style.display !== "none"
    );
    if (!visible.length) return;
    const pick = visible[Math.floor(Math.random() * visible.length)];
    pick.scrollIntoView({ behavior: "smooth", block: "center" });
    pick.classList.remove("pulse");
    void pick.offsetWidth;
    pick.classList.add("pulse");
    setTimeout(() => openLightboxEl(pick), 500);
  });

  function openLightboxEl(el) {
    openLightbox(Number(el.dataset.index));
  }

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  let currentIndex = 0;

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
  function updateLightboxImage() {
    const item = SITE.portfolio[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
  }
  function showNext(delta) {
    currentIndex = (currentIndex + delta + SITE.portfolio.length) % SITE.portfolio.length;
    updateLightboxImage();
  }

  gallery.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (!item) return;
    openLightbox(Number(item.dataset.index));
  });

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => showNext(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => showNext(1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showNext(-1);
    if (e.key === "ArrowRight") showNext(1);
  });

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");
  navToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  primaryNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  observeReveals();
})();
