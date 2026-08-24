(function(){
  "use strict";

  /* ---------- Reading progress bar ---------- */
  const progressBar = document.getElementById("progressBar");
  function updateProgress(){
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    progressBar.style.width = (max > 0 ? (scrolled / max) * 100 : 0) + "%";
  }
  document.addEventListener("scroll", updateProgress, { passive:true });
  updateProgress();

  /* ---------- Nav: scrolled state + active link ---------- */
  const nav = document.getElementById("nav");
  const navLinks = document.querySelectorAll("[data-nav]");
  const sections = document.querySelectorAll("main section[id]");

  function onScrollNav(){
    nav.classList.toggle("scrolled", window.scrollY > 40);

    let current = "";
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
  }
  document.addEventListener("scroll", onScrollNav, { passive:true });
  onScrollNav();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinksWrap = document.querySelector(".nav-links");
  navToggle.addEventListener("click", () => {
    const open = navLinksWrap.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open);
  });
  navLinksWrap.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinksWrap.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal, .reveal-line");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .15, rootMargin: "0px 0px -60px 0px" });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Stat counters ---------- */
  const statEls = document.querySelectorAll(".stat-number");
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10) || 0;
      let start = null;
      const duration = 900;
      function step(ts){
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      statObserver.unobserve(el);
    });
  }, { threshold: .6 });
  statEls.forEach(el => statObserver.observe(el));

  /* ---------- Ambient blobs react to mouse ---------- */
  const blobs = document.querySelectorAll(".blob");
  let mouseX = .5, mouseY = .5;
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
  }, { passive:true });

  function animateBlobs(){
    const dx = (mouseX - .5) * 40;
    const dy = (mouseY - .5) * 40;
    blobs.forEach((b, i) => {
      const factor = (i + 1) * .6;
      b.style.transform = `translate(${dx * factor * .3}px, ${dy * factor * .3}px)`;
    });
    requestAnimationFrame(animateBlobs);
  }
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    requestAnimationFrame(animateBlobs);
  }

  /* ---------- Portrait subtle parallax tilt ---------- */
  const portraitFrame = document.getElementById("portraitFrame");
  if (portraitFrame){
    portraitFrame.addEventListener("mousemove", (e) => {
      const r = portraitFrame.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      portraitFrame.style.transform = `rotateY(${px * 6}deg) rotateX(${-py * 6}deg)`;
    });
    portraitFrame.addEventListener("mouseleave", () => {
      portraitFrame.style.transform = "rotateY(0) rotateX(0)";
    });
  }

  /* ---------- Competence cards: mouse-follow tilt ---------- */
  document.querySelectorAll(".comp-card").forEach(card => {
    const inner = card.querySelector(".comp-card-inner");
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      inner.style.transform = `rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      inner.style.transform = "rotateY(0) rotateX(0) translateY(0)";
    });
  });

  /* ---------- Case study modal ---------- */
  const modalOverlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");

  function renderCase(key){
    const data = window.CASE_STUDIES[key];
    if (!data) return;

    const sectionsHtml = data.sections.map(s => `
      <div class="case-section">
        <span class="case-section-label mono">${s.label}</span>
        <p>${s.text}</p>
      </div>
    `).join("");

    const galleryHtml = data.gallery.map(item => `
      <button
        class="gallery-item"
        data-lightbox-group="case-${key}"
        data-caption="${item.caption}"
      >
        <img
          src="${item.src}"
          alt="${item.caption}"
        >
      </button>
    `).join("");

    const proofHtml = data.proof ? `
      <div class="case-proof">
        <span class="case-proof-label mono">Documents de preuve</span>
        <a href="assets/manuel-operateur-ihm.pdf" class="btn btn-primary" download>
          <span>Voir le PDF</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v8m0 0l-3-3m3 3l3-3M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>` : "";

    modalContent.innerHTML = `
      <span class="case-index mono">Compétence ${data.index}</span>
      <h2 class="case-title">${data.title}</h2>
      <p class="case-subject">${data.subject}</p>
      ${data.note ? `<p class="case-note">${data.note}</p>` : ""}
      ${sectionsHtml}
      <div class="case-gallery">${galleryHtml}</div>
      ${proofHtml}
      <div class="case-conclusion">${data.conclusion}</div>
    `;

    bindLightboxTriggers(modalContent);
  }

  function openModal(key){
    renderCase(key);
    modalOverlay.classList.add("open");
    document.body.classList.add("lock-scroll");
    modalOverlay.scrollTop = 0;
  }
  function closeModal(){
    modalOverlay.classList.remove("open");
    document.body.classList.remove("lock-scroll");
  }

  document.querySelectorAll("[data-case]").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.case));
  });
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  /* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxImageBox = document.querySelector(".lightbox-image-placeholder");

let currentGroup = [];
let currentIndex = 0;

function bindLightboxTriggers(scope){
  scope.querySelectorAll("[data-lightbox-group]").forEach(btn => {
    btn.addEventListener("click", () => {
      const group = btn.dataset.lightboxGroup;

      currentGroup = Array.from(
        scope.querySelectorAll(`[data-lightbox-group="${group}"]`)
      );

      currentIndex = currentGroup.indexOf(btn);

      showLightbox();
    });
  });
}

bindLightboxTriggers(document);

function showLightbox(){
  const btn = currentGroup[currentIndex];
  const img = btn.querySelector("img");

  lightboxCaption.textContent = btn.dataset.caption || "";

  /* Si le bouton contient une vraie image */
  if (img){
    lightboxImageBox.classList.add("has-image");

    lightboxImageBox.innerHTML = `
      <img
        src="${img.src}"
        alt="${img.alt || btn.dataset.caption || ""}"
      >
    `;
  }

  /* Si c'est encore un placeholder */
  else {
    lightboxImageBox.classList.remove("has-image");

    lightboxImageBox.innerHTML = `
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 16l4-5 3 3 5-6 4 5M4 4h16v16H4z"
          stroke="currentColor"
          stroke-width="1.2"
          stroke-linejoin="round"
        />
      </svg>
    `;
  }

  lightbox.classList.add("open");
  document.body.classList.add("lock-scroll");
}

function closeLightbox(){
  lightbox.classList.remove("open");

  if (!modalOverlay.classList.contains("open")){
    document.body.classList.remove("lock-scroll");
  }
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox){
    closeLightbox();
  }
});

lightboxPrev.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + currentGroup.length) % currentGroup.length;

  showLightbox();
});

lightboxNext.addEventListener("click", () => {
  currentIndex =
    (currentIndex + 1) % currentGroup.length;

  showLightbox();
});

  /* ---------- Keyboard controls ---------- */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){
      if (lightbox.classList.contains("open")) closeLightbox();
      else if (modalOverlay.classList.contains("open")) closeModal();
    }
    if (lightbox.classList.contains("open")){
      if (e.key === "ArrowRight") lightboxNext.click();
      if (e.key === "ArrowLeft") lightboxPrev.click();
    }
  });

})();
