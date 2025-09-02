/* ============================================================================
   TP Candidate Microsite — app.js (JP-only)
   Depends on: translations.js (window.I18N, window.CONTENT, window.getChatGPTPrompt)
   Notes:
   - JP-only: language UI removed; HTML lang=ja enforced.
   - Includes: lazy image loading, reveal-on-scroll, simple carousel,
               content renderers, drawer nav, smooth anchors, contact form handler.
   Updated: 2025-08-28
============================================================================ */

/* ----------------------------------------------------------
   0) Tiny utils
-----------------------------------------------------------*/
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function smoothScrollTo(target, offset = 0) {
  const el = typeof target === 'string' ? $(target) : target;
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

/* Image fallback: only attaches onerror for non-data URIs */
function imageFallback(img, fallbackAlt = 'image') {
  if (!img || !img.src || img.src.startsWith('data:')) return;
  img.addEventListener('error', () => {
    img.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 160"%3E%3Crect fill="%23fff0f8" width="220" height="160"/%3E%3Ctext x="110" y="92" text-anchor="middle" fill="%23ff0082" font-size="28" font-weight="bold"%3ETP%3C/text%3E%3C/svg%3E';
    img.alt = fallbackAlt || img.alt || 'TP';
    img.style.objectFit = 'contain';
    img.style.background = '#fff';
    img.loading = 'eager';
  }, { once: true });
}

/* Lazy loader: moves data-src -> src when visible */
const lazyObserver = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const img = e.target;
        if (img.dataset && img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        lazyObserver.unobserve(img);
      });
    }, { rootMargin: '200px 0px', threshold: 0.01 })
  : null;

function lazyLoad(img) {
  if (!img) return;
  img.loading = img.loading || 'lazy';
  if (lazyObserver && img.dataset && img.dataset.src) {
    lazyObserver.observe(img);
  } else if (img.dataset && img.dataset.src) {
    // Fallback: no IO support
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
  }
}

/* ----------------------------------------------------------
   1) JP-only i18n helpers
-----------------------------------------------------------*/
const I18N    = window.I18N    || { jp: {} };
const CONTENT = window.CONTENT || { links: {}, jp: {} };
const currentLang = 'jp';

function applyLangToHtmlRoot() {
  document.documentElement.setAttribute('lang', 'ja');
  document.documentElement.setAttribute('data-lang', currentLang);
}

function t(key) {
  const dict = I18N.jp || {};
  const val = dict[key];
  return typeof val === 'function' ? val() : (val ?? '');
}

function applyI18nStaticText() {
  $$('[data-i18n]').forEach((el) => {
    const k = el.getAttribute('data-i18n');
    const v = t(k);
    if (v !== undefined) el.innerHTML = v;
  });
  $$('[data-i18n-static]').forEach((el) => {
    const k = el.getAttribute('data-i18n-static');
    const v = t(k);
    if (v !== undefined) el.textContent = v;
  });
  $$('[data-i18n-placeholder]').forEach((el) => {
    const k = el.getAttribute('data-i18n-placeholder');
    const v = t(k);
    if (v && 'placeholder' in el) el.placeholder = v;
  });
  $$('[data-i18n-aria-label]').forEach((el) => {
    const k = el.getAttribute('data-i18n-aria-label');
    const v = t(k);
    if (v) el.setAttribute('aria-label', v);
  });
}

/* ----------------------------------------------------------
   2) Typewriter (hero)
-----------------------------------------------------------*/
let typewriterStop = null;
function typewriter(node, texts, speed = 58, pause = 1200) {
  if (!node || !texts || !texts.length) return () => {};
  if (typewriterStop) typewriterStop();
  if (prefersReducedMotion()) {
    node.textContent = texts[0] || '';
    return () => {};
  }
  let idx = 0, del = false, i = 0, tickId;
  let running = true;

  function tick() {
    if (!running) return;
    const full = texts[idx] || '';
    if (!del) {
      i++;
      node.textContent = full.slice(0, i);
      if (i >= full.length) {
        del = true;
        tickId = setTimeout(tick, pause);
        return;
      }
      tickId = setTimeout(tick, speed);
    } else {
      i--;
      node.textContent = full.slice(0, i);
      if (i <= 0) {
        del = false;
        idx = (idx + 1) % texts.length;
        tickId = setTimeout(tick, speed * 2.5);
        return;
      }
      tickId = setTimeout(tick, Math.max(35, speed - 18));
    }
  }
  tick();
  typewriterStop = () => { running = false; clearTimeout(tickId); };
  return typewriterStop;
}

/* ----------------------------------------------------------
   3) Reveal-on-scroll
-----------------------------------------------------------*/
const revealObserver = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.14 })
  : null;

function observeReveal(node) {
  if (!node) return;
  node.classList.add('reveal');
  if (revealObserver) revealObserver.observe(node);
}

/* ----------------------------------------------------------
   4) Simple horizontal carousel (Benefits)
-----------------------------------------------------------*/
function makeCarousel(trackSel, prevSel, nextSel) {
  const track = $(trackSel);
  if (!track) return { destroy: () => {} };
  const prev = $(prevSel);
  const next = $(nextSel);
  let index = 0;

  function slideWidth() {
    const first = track.children[0];
    if (!first) return 0;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || '12') || 12;
    const rect = first.getBoundingClientRect();
    return rect.width + gap;
  }

  function update() {
    const w = slideWidth();
    track.style.transform = `translateX(${-index * w}px)`;
  }

  function go(dir) {
    const count = track.children.length;
    index = clamp(index + dir, 0, Math.max(0, count - 1));
    update();
  }

  on(prev, 'click', () => go(-1));
  on(next, 'click', () => go(1));
  on(window, 'resize', () => { index = clamp(index, 0, track.children.length - 1); update(); });

  // Light autoplay
  let timer = setInterval(() => {
    index = (index + 1) % Math.max(1, track.children.length);
    update();
  }, 5200);

  on(track, 'mouseenter', () => clearInterval(timer));
  on(track, 'mouseleave', () => {
    clearInterval(timer);
    timer = setInterval(() => {
      index = (index + 1) % Math.max(1, track.children.length);
      update();
    }, 5200);
  });

  requestAnimationFrame(update);
  return { destroy: () => clearInterval(timer) };
}

/* ----------------------------------------------------------
   5) Dynamic renderers (CONTENT.jp.*)
-----------------------------------------------------------*/
function renderWhyLists() {
  const lists = [
    { root: '#whyList1', data: CONTENT.jp.why1 || [] },
    { root: '#whyList2', data: CONTENT.jp.why2 || [] }
  ];
  lists.forEach(({ root, data }) => {
    const el = $(root);
    if (!el) return;
    el.innerHTML = '';
    data.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'item card';
      card.innerHTML = `<h4 class="u-mt0">${item.t}</h4><p class="subtle u-mt6">${item.d}</p>`;
      el.appendChild(card);
      observeReveal(card);
    });
  });
}

function renderCities() {
  const root = $('#citiesCards');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT.jp.cities || []).forEach((c) => {
    const d = document.createElement('div');
    d.className = 'city';
    d.innerHTML = `
      <img alt="${c.title}" data-src="${c.img}">
      <div class="overlay"><strong>${c.title}</strong><div style="font-size:13px;margin-top:6px">${c.desc ?? ''}</div></div>`;
    const img = $('img', d);
    imageFallback(img, c.title);
    lazyLoad(img);
    root.appendChild(d);
    observeReveal(d);
  });
}

function renderBenefits() {
  const track = $('#benefitSlides');
  if (!track) return;
  track.innerHTML = '';
  (CONTENT.jp.benefits || []).forEach((b) => {
    const el = document.createElement('div');
    el.className = 'slide';
    el.innerHTML = `<h4 class="u-mt0">${b.t}</h4><p class="subtle u-mt6">${b.d}</p>`;
    track.appendChild(el);
    observeReveal(el);
  });
}

function renderProcess() {
  const root = $('#processList');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT.jp.processSteps || []).forEach((s) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${s.k}</strong><div class="subtle u-mt6">${s.v}</div>`;
    root.appendChild(li);
    observeReveal(li);
  });
}

function renderOffices() {
  const root = $('#officeCards');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT.jp.offices || []).forEach((o) => {
    const card = document.createElement('div');
    card.className = 'card office-card';
    card.innerHTML = `
      <img alt="${o.title}" data-src="${o.img}" style="height:160px;width:100%;object-fit:cover;border-radius:10px;border:1px solid var(--line);margin-bottom:10px">
      <h4 class="u-mt0">${o.title}</h4>
      <ul class="subtle u-mt6" style="padding-left:18px;margin:0">${(o.points || []).map(p => `<li>${p}</li>`).join('')}</ul>`;
    const img = $('img', card);
    imageFallback(img, o.title);
    lazyLoad(img);
    root.appendChild(card);
    observeReveal(card);
  });
}

function renderTeam() {
  const root = $('#teamGrid');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT.jp.team || []).forEach((m) => {
    const card = document.createElement('div');
    card.className = 'member';
    card.innerHTML = `
      <img alt="${m.name}" data-src="${m.img}">
      <h4 class="u-mt8">${m.name}</h4>
      <div class="subtle" style="font-size:13px">${m.role ?? ''}</div>
      <p class="subtle" style="font-size:13px;margin-top:8px">${m.bio ?? ''}</p>`;
    const img = $('img', card);
    imageFallback(img, m.name);
    lazyLoad(img);
    root.appendChild(card);
    observeReveal(card);
  });
}

function renderVoices() {
  const root = $('#voiceGrid');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT.jp.voices || []).forEach((v) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<p class="quote u-mt0">${v.quote}</p><div class="subtle u-mt8">${v.who}</div>`;
    root.appendChild(card);
    observeReveal(card);
  });
}

function renderFaq() {
  const root = $('#faqList');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT.jp.faq || []).forEach((q) => {
    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <button class="q" type="button">${q.q}</button>
      <div class="a" style="display:none">${q.a}</div>`;
    root.appendChild(wrap);
  });
  // Accordion
  $$('#faqList .q').forEach((btn) => {
    on(btn, 'click', () => {
      const panel = btn.nextElementSibling;
      const open = panel.style.display === 'block';
      $$('#faqList .a').forEach((x) => (x.style.display = 'none'));
      panel.style.display = open ? 'none' : 'block';
    });
  });
}

function renderGallery() {
  const root = $('#gallery');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT.jp.galleryImgs || []).forEach((src, i) => {
    const img = document.createElement('img');
    img.alt = `gallery-${i+1}`;
    img.setAttribute('data-src', src);
    img.loading = 'lazy';
    img.style.borderRadius = '10px';
    img.style.border = '1px solid var(--line)';
    imageFallback(img, img.alt);
    lazyLoad(img);
    root.appendChild(img);
  });
}

function renderAllDynamic() {
  renderWhyLists();
  renderCities();
  renderBenefits();
  renderProcess();
  renderOffices();
  renderTeam();
  renderVoices();
  renderFaq();
  renderGallery();

  // Year stamps
  const y = String(new Date().getFullYear());
  $('#year') && ($('#year').textContent = y);
  $('#year2') && ($('#year2').textContent = y);
}

/* ----------------------------------------------------------
   6) Header & navigation
-----------------------------------------------------------*/
function initHeader() {
  const menuOpen  = $('#menuBtn');
  const menuClose = $('#closeDrawer');
  const drawer    = $('#drawer');
  const scrim     = $('#scrim');

  function openDrawer() {
    drawer?.classList.add('open');
    drawer?.setAttribute('aria-hidden', 'false');
    if (scrim) { scrim.hidden = false; scrim.classList.add('show'); }
    document.body.style.overflow = 'hidden';
    menuOpen?.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer() {
    drawer?.classList.remove('open');
    drawer?.setAttribute('aria-hidden', 'true');
    if (scrim) { scrim.classList.remove('show'); setTimeout(() => scrim.hidden = true, 250); }
    document.body.style.overflow = '';
    menuOpen?.setAttribute('aria-expanded', 'false');
  }

  on(menuOpen, 'click', openDrawer);
  on(menuClose, 'click', closeDrawer);
  on(scrim, 'click', closeDrawer);

  // Drawer links smooth-scroll if hash; otherwise navigate
  $$('.drawer .d-link').forEach((a) =>
    on(a, 'click', () => {
      closeDrawer();
      const href = a.getAttribute('href') || '';
      if (href.startsWith('#')) {
        setTimeout(() => smoothScrollTo(href, 76), 10);
      }
    })
  );

  // Smooth in-page anchors
  $$('a[href^="#"]').forEach((a) => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    on(a, 'click', (e) => {
      const el = $(id);
      if (!el) return;
      e.preventDefault();
      smoothScrollTo(el, 76);
    });
  });
}

/* ----------------------------------------------------------
   7) Sticky utilities (to-top, apply bar)
-----------------------------------------------------------*/
function initStickyBars() {
  const applyBar = $('.apply-bar');
  const floatBar = $('#floatBar');

  function onScroll() {
    const y = window.scrollY;
    if (applyBar) {
      applyBar.style.transform = y > 360 ? 'translateY(0)' : 'translateY(100%)';
    }
    if (floatBar) {
      const visible = y >= 200;
      floatBar.setAttribute('aria-hidden', visible ? 'false' : 'true');
      floatBar.style.opacity = visible ? '1' : '0';
      floatBar.style.pointerEvents = visible ? 'auto' : 'none';
    }
  }
  on(window, 'scroll', onScroll, { passive: true });
  onScroll();

  const toTopBtn = $('#toTopBtn');
  if (toTopBtn) {
    on(toTopBtn, 'click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ----------------------------------------------------------
   8) Contact form handler
   - If window.FORM_ENDPOINT is set -> POST JSON there
   - Else if window.FORMSPREE_ID is set -> POST to Formspree
   - Else fallback to alert/reset
-----------------------------------------------------------*/
function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;

  on(form, 'submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    const EP = window.FORM_ENDPOINT || null;
    const FS = window.FORMSPREE_ID || null;

    try {
      if (EP) {
        const res = await fetch(EP, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Bad status');
      } else if (FS) {
        const res = await fetch(`https://formspree.io/f/${FS}`, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form),
        });
        if (!res.ok) throw new Error('Bad status');
      } else {
        // Fallback demo
        console.info('[contact] No endpoint configured. Demo mode:', data);
      }

      const name = data.name || '応募者';
      const msg = (I18N.jp.contactThanks && I18N.jp.contactThanks(name))
        || `${name} さん、ありがとうございます！メッセージを受け取りました。`;
      alert(msg);
      form.reset();
    } catch (err) {
      console.error(err);
      alert('送信に失敗しました。しばらくしてから再度お試しください。');
    }
  });
}

/* ----------------------------------------------------------
   9) Misc visuals
-----------------------------------------------------------*/
function initHeroMediaFallbacks() {
  imageFallback($('#heroCover'), 'Hero');
  $$('.photo-img').forEach((img) => imageFallback(img, 'tile'));
}

function normalizeIconSizes() {
  $$('.icon-card .icon svg, .icon-card .icon img').forEach((node) => {
    node.setAttribute('width', '48');
    node.setAttribute('height', '48');
    node.style.width = '';
    node.style.height = '';
  });
}

function initChatGPTSection() {
  const ta = $('#chatgptPrompt');
  const btnCopy = $('#copyPromptBtn');
  const btnOpen = $('#openChatGPTBtn');
  if (ta && typeof window.getChatGPTPrompt === 'function') {
    ta.value = window.getChatGPTPrompt('jp');
  }
  if (btnCopy && ta) {
    on(btnCopy, 'click', async () => {
      try {
        await navigator.clipboard.writeText(ta.value);
        const original = btnCopy.textContent;
        btnCopy.textContent = 'コピーしました！';
        setTimeout(() => (btnCopy.textContent = original), 1400);
      } catch (e) {
        ta.select();
        document.execCommand('copy');
      }
    });
  }
  if (btnOpen) {
    on(btnOpen, 'click', () => {
      window.open('https://chat.openai.com/', '_blank', 'noopener,noreferrer');
    });
  }
}

/* ----------------------------------------------------------
   10) Boot
-----------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  applyLangToHtmlRoot();
  applyI18nStaticText();

  renderAllDynamic();

  const heroNode  = $('#heroType');
  const heroTexts = I18N.jp.heroTexts || [];
  if (heroNode && heroTexts.length > 0) typewriter(heroNode, heroTexts);

  makeCarousel('#benefitSlides', '#bPrev', '#bNext');

  // Ensure pre-existing .reveal nodes animate
  $$('.reveal').forEach(observeReveal);

  initHeader();
  initStickyBars();
  initContactForm();
  initChatGPTSection();
  initHeroMediaFallbacks();
  normalizeIconSizes();
});
