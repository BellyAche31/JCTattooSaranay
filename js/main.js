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

  /* ---------- Age gate ----------
     Shown until the visitor confirms; the answer is remembered so it does not
     nag on every visit. Deliberately does NOT hard-block under-18s — a minor
     can still be tattooed here with a guardian present, so the second step
     states the requirements instead of turning them away. */
  const GATE_KEY = "jct-age-ack";
  const gate = $("ageGate");
  const gateCfg = SITE.ageGate;

  document.querySelectorAll("[data-min-age]").forEach((el) => {
    el.textContent = gateCfg.minAge;
  });
  $("ageNumTitle").textContent = gateCfg.minAge;
  $("ageWatermark").textContent = `${gateCfg.minAge}+`;
  $("ageReqs").innerHTML = gateCfg.requirements.map((r) => `<li>${r}</li>`).join("");
  $("ageNote").textContent = gateCfg.note;
  $("footerLegal").textContent =
    `You must be ${gateCfg.minAge} or older to be tattooed or pierced. ` +
    `Under ${gateCfg.minAge}s require a parent or legal guardian present, with valid ID and signed consent. ` +
    gateCfg.note;

  let gateAcked = false;
  try {
    gateAcked = localStorage.getItem(GATE_KEY) === "1";
  } catch (e) {
    // Private browsing / storage disabled — just show the gate this session.
  }

  function showStep(name) {
    gate.querySelectorAll(".age-step").forEach((s) => {
      s.classList.toggle("is-active", s.dataset.step === name);
    });
    const firstBtn = gate.querySelector(".age-step.is-active .age-btn");
    if (firstBtn) firstBtn.focus();
  }

  function closeGate() {
    try {
      localStorage.setItem(GATE_KEY, "1");
    } catch (e) {
      /* storage unavailable — the gate simply reappears next visit */
    }
    gate.hidden = true;
    document.body.style.overflow = "";
  }

  if (!gateAcked) {
    gate.hidden = false;
    document.body.style.overflow = "hidden";
    showStep("ask");

    gate.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const action = btn.dataset.action;
      if (action === "yes" || action === "accept") closeGate();
      else if (action === "no") showStep("minor");
      else if (action === "back") showStep("ask");
    });

    // Keep tab focus inside the dialog while it is open.
    gate.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      const items = [...gate.querySelectorAll(".age-step.is-active .age-btn")];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* ---------- Group the portfolio by style ----------
     Sorted in place before anything reads it, so the gallery, filter order,
     marquee and lightbox indices all stay in agreement. Sort is stable, so
     pieces keep their relative order within a category. */
  const styleOrder = SITE.styleOrder || [];
  const styleRank = (tag) => {
    const i = styleOrder.indexOf(tag);
    return i === -1 ? styleOrder.length : i; // untagged/unknown styles go last
  };
  SITE.portfolio.sort((a, b) => styleRank(a.tag) - styleRank(b.tag));

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

  // Marquee — built from the portfolio's own style tags.
  // The animation translates the track by -50%, so ONE half must be wider than
  // the viewport or the tape runs out mid-loop and visibly snaps. Repeat the
  // word set until it is, then mirror it for the seamless half.
  const marqueeTrack = $("marqueeTrack");
  const marqueeWords = [...new Set(SITE.portfolio.map((p) => p.tag))];
  const MARQUEE_SPEED = 90; // px per second

  function buildMarquee() {
    const oneSet = marqueeWords
      .map((w) => `<span>${w}</span><span class="dot">✦</span>`)
      .join("");

    marqueeTrack.innerHTML = oneSet;
    const setWidth = marqueeTrack.scrollWidth;
    if (!setWidth) return;

    // Half the track needs to cover the viewport with room to spare.
    const copies = Math.max(2, Math.ceil((window.innerWidth * 1.4) / setWidth));
    const half = oneSet.repeat(copies);
    marqueeTrack.innerHTML = half + half;

    const halfWidth = marqueeTrack.scrollWidth / 2;
    marqueeTrack.style.setProperty("--marquee-duration", `${halfWidth / MARQUEE_SPEED}s`);
  }

  buildMarquee();

  let marqueeResizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(marqueeResizeTimer);
    marqueeResizeTimer = setTimeout(buildMarquee, 200);
  });

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

  // Tattoo rates. Quoted entries have no fixed price, so they become links
  // to the contact section — that card's whole job is to start a conversation.
  const tattooRates = $("tattooRates");
  SITE.tattooPricing.forEach((rate) => {
    const isQuote = rate.price == null;
    const card = document.createElement(isQuote ? "a" : "div");
    card.className = "tattoo-rate reveal" + (isQuote ? " is-quote" : "");
    if (isQuote) card.href = "#contact";
    const price = isQuote ? rate.priceLabel : `${SITE.currency}${rate.price}`;
    card.innerHTML =
      `<div class="tattoo-rate-head"><h4>${rate.name}</h4>` +
      `<span class="tattoo-rate-price">${price}</span></div>` +
      `<p>${rate.blurb}</p>` +
      (isQuote ? `<span class="tattoo-rate-cta">Get a quote <b aria-hidden="true">→</b></span>` : "");
    tattooRates.appendChild(card);
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
  const facebookCard = $("facebookCard");
  if (SITE.facebookUrl) {
    facebookCard.href = SITE.facebookUrl;
    $("facebookValue").textContent = SITE.facebookName || "Facebook Page";
  } else {
    facebookCard.remove();
  }

  const instagramCard = $("instagramCard");
  instagramCard.href = SITE.instagramUrl;
  $("instagramValue").textContent = SITE.instagramHandle;

  // Walk-ins
  if (SITE.walkIn) {
    $("walkInLabel").textContent = SITE.walkIn.label;
    $("walkInTime").textContent = SITE.walkIn.time;
    $("walkInBlurb").textContent = SITE.walkIn.blurb;
  } else {
    $("walkIn").remove();
  }

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

  /* Paged gallery. 60 pieces at once is a wall of images and a lot of bytes,
     so only PAGE_SIZE are rendered up front and more are appended on demand.
     `activeIndices` is the currently filtered set, and the lightbox steps
     through that same set so arrow keys stay inside what you're browsing. */
  const PAGE_SIZE = 12;
  const loadMoreBtn = $("loadMore");
  const loadMoreCount = $("loadMoreCount");
  let currentFilter = "all";
  let shown = 0;
  let activeIndices = [];

  function matching(filter) {
    return SITE.portfolio
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => filter === "all" || item.tag === filter)
      .map(({ index }) => index);
  }

  function appendTiles(count) {
    const slice = activeIndices.slice(shown, shown + count);
    const frag = document.createDocumentFragment();
    slice.forEach((index) => {
      const item = SITE.portfolio[index];
      const el = document.createElement("figure");
      el.className = "gallery-item reveal";
      el.dataset.tag = item.tag;
      el.dataset.index = index;
      el.style.setProperty("--tilt", `${TILTS[index % TILTS.length]}deg`);
      el.innerHTML =
        `<img src="${item.src}" alt="${item.alt}" loading="lazy" />` +
        `<span class="tag">${item.tag}</span>`;
      frag.appendChild(el);
    });
    gallery.appendChild(frag);
    shown += slice.length;
    observeReveals();
    updateLoadMore();
  }

  function updateLoadMore() {
    const remaining = activeIndices.length - shown;
    loadMoreBtn.hidden = remaining <= 0;
    loadMoreCount.textContent = remaining > 0 ? `+${remaining}` : "";
  }

  function renderGallery(filter) {
    currentFilter = filter;
    activeIndices = matching(filter);
    gallery.innerHTML = "";
    shown = 0;
    appendTiles(PAGE_SIZE);
  }

  renderGallery("all");

  loadMoreBtn.addEventListener("click", () => {
    appendTiles(PAGE_SIZE);
    if (loadMoreBtn.hidden) {
      // Nothing left to load — move focus somewhere sensible for keyboard users.
      gallery.lastElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });

  filtersWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn || btn.dataset.filter === currentFilter) return;
    filtersWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });

  /* ---------- Surprise me ---------- */
  $("surpriseBtn").addEventListener("click", () => {
    if (!activeIndices.length) return;
    // Pick from the whole filtered set, not just what's rendered, so unloaded
    // pieces are still reachable.
    const pick = activeIndices[Math.floor(Math.random() * activeIndices.length)];
    const position = activeIndices.indexOf(pick);
    while (shown <= position) appendTiles(PAGE_SIZE);

    const el = gallery.querySelector(`.gallery-item[data-index="${pick}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.remove("pulse");
      void el.offsetWidth;
      el.classList.add("pulse");
    }
    setTimeout(() => openLightbox(pick), 520);
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
    // Count within the active filter, so "3/6" matches what's on screen.
    const position = activeIndices.indexOf(currentIndex);
    lightboxCaption.textContent = `${item.tag} — ${position + 1}/${activeIndices.length}`;
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
    // Walk the filtered set, not the whole portfolio, so arrows never jump to
    // a piece that isn't in the category you're browsing.
    if (!activeIndices.length) return;
    const position = activeIndices.indexOf(currentIndex);
    const next = (position + delta + activeIndices.length) % activeIndices.length;
    currentIndex = activeIndices[next];
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
