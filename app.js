/* ============================================================================
   TP Candidate Microsite — app.js (FIXED WITH QUERY PARAMS)
   Requires: translations.js (window.I18N, window.CONTENT, window.getChatGPTPrompt)
   Purpose / 目的: 
     - Bind UI, render dynamic content, and keep things snappy on mobile
     - UI のバインド、動的コンテンツのレンダリング、モバイルでのスムーズな動作
   Updated: 2025-12-19
     - FIXED: Using query parameters ?lang=en/jp/kr for language switching
     - Language codes: jp (Japanese), en (English), kr (Korean)
     - Better image fallback handling for SVG icons
     - Bilingual comments / バイリンガルコメント
============================================================================ */

/* ----------------------------------------------------------
   0) Tiny utilities / 小さなユーティリティ
-----------------------------------------------------------*/
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
const on    = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

function smoothScrollTo(target, offset = 0) {
  const el = typeof target === 'string' ? $(target) : target;
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Image fallback handler - now handles SVG data URIs properly
 * 画像フォールバックハンドラー - SVGデータURIを適切に処理
 */
function imageFallback(img, fallbackAlt = 'image') {
  if (!img) return;
  
  // Don't add error handler for data URIs (they don't fail) / データURIにはエラーハンドラーを追加しない
  if (img.src && img.src.startsWith('data:')) return;
  
  img.addEventListener('error', () => {
    // SVG fallback with TP logo / TPロゴのSVGフォールバック
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fff0f8" width="200" height="200"/%3E%3Ctext x="100" y="100" text-anchor="middle" fill="%23ff0082" font-size="48" font-weight="bold"%3ETP%3C/text%3E%3C/svg%3E';
    img.alt = fallbackAlt || img.alt || 'TP';
    img.style.objectFit = 'contain';
    img.style.background = '#fff';
  }, { once: true });
}

/* ----------------------------------------------------------
   1) Language & i18n plumbing (Query parameter based)
   言語とi18n配管（クエリパラメータベース）
      - Supported: ?lang=jp, ?lang=en, ?lang=kr
      - Default language: Japanese ('jp') / デフォルト言語：日本語（'jp'）
-----------------------------------------------------------*/
const I18N    = window.I18N    || { jp: {}, en: {}, kr: {} };
const CONTENT = window.CONTENT || { links:{}, jp:{}, en:{}, kr:{} };

const LANGS = ['jp', 'en', 'kr'];
const LANG_STORAGE_KEY = 'tp_lang';

/** Normalize a language code to one of LANGS; default 'jp'. 
 * 言語コードをLANGSの1つに正規化; デフォルト 'jp' */
function normalizeLang(x) {
  if (!x) return 'jp';
  const lc = (x + '').toLowerCase();
  if (LANGS.includes(lc)) return lc;
  // Handle common variations
  if (lc === 'ja' || lc.startsWith('ja')) return 'jp';
  if (lc === 'ko' || lc.startsWith('ko')) return 'kr';
  if (lc.startsWith('en')) return 'en';
  return 'jp';
}

/** Detect language from the current URL query parameters. 
 * 現在のURLクエリパラメータから言語を検出 */
function parseLangFromLocation() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  if (lang && LANGS.includes(normalizeLang(lang))) {
    return normalizeLang(lang);
  }
  return null;
}

/** Update URL to show current language as query parameter 
 * URLを更新して現在の言語をクエリパラメータとして表示 */
function updateLangURL(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url.toString());
}

/** Initial language picker: URL → localStorage → browser → default 'jp'. 
 * 初期言語ピッカー：URL → localStorage → ブラウザ → デフォルト 'jp' */
function getInitialLang() {
  // a) from URL query parameter
  const urlLang = parseLangFromLocation();
  if (urlLang) return urlLang;

  // b) from localStorage
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved && LANGS.includes(normalizeLang(saved))) return normalizeLang(saved);

  // c) from browser
  if (navigator.language) {
    const guess = normalizeLang(navigator.language);
    return guess;
  }
  // d) fallback
  return 'jp';
}

let currentLang = getInitialLang();

/** Apply lang codes to <html>, data attributes, and mark buttons. 
 * <html>、データ属性に言語コードを適用し、ボタンをマーク */
function applyLangToHtmlRoot() {
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('data-lang', currentLang);

  // Update language buttons active state / 言語ボタンのアクティブ状態を更新
  $$('.lang-btn').forEach(btn => {
    const lang = btn.getAttribute('data-lang') || btn.getAttribute('data-lang-code');
    if (normalizeLang(lang) === currentLang) {
      btn.classList.add('is-active');
      btn.setAttribute('aria-current', 'true');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('is-active');
      btn.removeAttribute('aria-current');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
  
  // Update legacy #langBtn if it exists
  const legacyBtn = $('#langBtn');
  if (legacyBtn) {
    const labels = { jp: 'EN', en: '한국어', kr: '日本語' };
    const nextLang = { jp: 'en', en: 'kr', kr: 'jp' };
    legacyBtn.textContent = labels[currentLang] || 'EN';
    legacyBtn.setAttribute('data-next-lang', nextLang[currentLang]);
  }
}

/** i18n getter / i18n ゲッター */
function t(key) {
  const dict = I18N[currentLang] || {};
  const val = dict[key];
  if (typeof val === 'function') return val();
  return val ?? I18N.jp[key] ?? I18N.en[key] ?? '';
}

/** Paint static text nodes with data-i18n or data-i18n-static. 
 * data-i18n または data-i18n-static で静的テキストノードを描画 */
function applyI18nStaticText() {
  $$('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string' || typeof val === 'number') {
      el.innerHTML = val;
    }
  });
  $$('[data-i18n-static]').forEach((el) => {
    const key = el.getAttribute('data-i18n-static');
    const val = t(key);
    if (typeof val === 'string' || typeof val === 'number') {
      el.textContent = val;
    }
  });
  
  // Update placeholder text
  $$('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val && el.placeholder !== undefined) {
      el.placeholder = val;
    }
  });
  
  // Update aria-labels
  $$('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    const val = t(key);
    if (val) {
      el.setAttribute('aria-label', val);
    }
  });
}

/** Update both state and URL, then re-render UI. 
 * 状態とURLの両方を更新し、UIを再レンダリング */
function setLang(lang) {
  currentLang = normalizeLang(lang);
  localStorage.setItem(LANG_STORAGE_KEY, currentLang);

  // reflect to DOM / DOMに反映
  applyLangToHtmlRoot();
  applyI18nStaticText();
  renderAllDynamic();

  // Update hero typewriter text / ヒーロータイプライターテキストを更新
  const heroNode = $('#heroType');
  const heroTexts = I18N[currentLang].heroTexts || [];
  if (heroNode && heroTexts.length > 0) {
    typewriter(heroNode, heroTexts);
  }

  // Update Ask ChatGPT prompt / Ask ChatGPTプロンプトを更新
  const ta = $('#chatgptPrompt');
  if (ta && typeof window.getChatGPTPrompt === 'function') {
    ta.value = window.getChatGPTPrompt(currentLang);
  }

  // Update URL with query parameter / クエリパラメータでURLを更新
  updateLangURL(currentLang);
}

/* ----------------------------------------------------------
   2) Typewriter (hero) / タイプライター（ヒーロー）
-----------------------------------------------------------*/
let typewriterCleanup = null;

function typewriter(node, texts, speed = 58, pause = 1200) {
  // Clean up previous typewriter if exists
  if (typewriterCleanup) {
    typewriterCleanup();
    typewriterCleanup = null;
  }

  if (!node || !texts || !texts.length) return () => {};
  if (prefersReducedMotion()) {
    node.textContent = texts[0] || '';
    return () => {};
  }
  
  let idx = 0;
  let isDeleting = false;
  let char = 0;
  let timer;
  let isRunning = true;

  function tick() {
    if (!isRunning) return;
    
    const full = texts[idx] || '';
    if (!isDeleting) {
      char++;
      node.textContent = full.slice(0, char);
      if (char >= full.length) {
        isDeleting = true;
        timer = setTimeout(tick, pause);
        return;
      }
      timer = setTimeout(tick, speed);
    } else {
      char--;
      node.textContent = full.slice(0, char);
      if (char <= 0) {
        isDeleting = false;
        idx = (idx + 1) % texts.length;
        timer = setTimeout(tick, speed * 3);
        return;
      }
      timer = setTimeout(tick, Math.max(35, speed - 20));
    }
  }
  
  tick();
  
  typewriterCleanup = () => {
    isRunning = false;
    clearTimeout(timer);
  };
  
  return typewriterCleanup;
}

/* ----------------------------------------------------------
   3) Reveal-on-scroll (IO) / スクロール時表示（IO）
-----------------------------------------------------------*/
const revealObserver = typeof IntersectionObserver !== 'undefined' 
  ? new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            revealObserver.unobserve(e.target);
          }
        }
      },
      { threshold: 0.14 }
    )
  : null;

function observeReveal(node) {
  if (!node || !revealObserver) return;
  node.classList.add('reveal');
  revealObserver.observe(node);
}

/* ----------------------------------------------------------
   4) Simple horizontal carousel (Benefits)
   シンプルな水平カルーセル（特典）
-----------------------------------------------------------*/
function makeCarousel(containerSel, prevBtnSel, nextBtnSel) {
  const track = $(containerSel);
  if (!track) return { destroy: () => {} };
  const prev = $(prevBtnSel);
  const next = $(nextBtnSel);
  let index = 0;

  function update() {
    const first = track.children[0];
    if (!first) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 12);
    const slideW = first.getBoundingClientRect().width + (Number.isFinite(gap) ? gap : 12);
    track.style.transform = `translateX(${-index * slideW}px)`;
  }

  function go(dir) {
    const count = track.children.length;
    index = clamp(index + dir, 0, Math.max(0, count - 1));
    update();
  }

  on(window, 'resize', update);
  on(prev, 'click', () => go(-1));
  on(next, 'click', () => go(1));

  // gentle autoplay / 優しい自動再生
  let timer = setInterval(() => {
    const count = track.children.length;
    index = (index + 1) % Math.max(1, count);
    update();
  }, 5200);
  
  on(track, 'mouseenter', () => clearInterval(timer));
  on(track, 'mouseleave', () => {
    clearInterval(timer);
    timer = setInterval(() => {
      const count = track.children.length;
      index = (index + 1) % Math.max(1, count);
      update();
    }, 5200);
  });

  // initial
  requestAnimationFrame(update);
  return { destroy: () => { clearInterval(timer); } };
}

/* ----------------------------------------------------------
   5) Dynamic renders (Why / Cities / Benefits / Process / Offices / Team / Voices / FAQ / Gallery)
   動的レンダリング
-----------------------------------------------------------*/
function renderWhyLists() {
  const lists = [
    { id: '#whyList1', data: CONTENT[currentLang].why1 || [] },
    { id: '#whyList2', data: CONTENT[currentLang].why2 || [] }
  ];
  lists.forEach(({ id, data }) => {
    const root = $(id);
    if (!root) return;
    root.innerHTML = '';
    data.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'item card';
      card.innerHTML = `<h4 style="margin:0 0 6px">${item.t}</h4><p class="subtle" style="margin:0">${item.d}</p>`;
      root.appendChild(card);
      observeReveal(card);
    });
  });
}

function renderCities() {
  const root = $('#citiesCards');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT[currentLang].cities || []).forEach((c) => {
    const d = document.createElement('div');
    d.className = 'city';
    d.innerHTML = `
      <img src="${c.img}" alt="${c.title}">
      <div class="overlay"><strong>${c.title}</strong><div style="font-size:13px;margin-top:6px">${c.desc}</div></div>`;
    imageFallback(d.querySelector('img'), c.title);
    root.appendChild(d);
    observeReveal(d);
  });
}

function renderBenefits() {
  const track = $('#benefitSlides');
  if (!track) return;
  track.innerHTML = '';
  (CONTENT[currentLang].benefits || []).forEach((b) => {
    const el = document.createElement('div');
    el.className = 'slide';
    el.innerHTML = `<h4 style="margin:0 0 6px">${b.t}</h4><p class="subtle" style="margin:0">${b.d}</p>`;
    track.appendChild(el);
    observeReveal(el);
  });
}

function renderProcess() {
  const root = $('#processList');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT[currentLang].processSteps || []).forEach((s) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${s.k}</strong><div class="subtle" style="margin-top:6px">${s.v}</div>`;
    root.appendChild(li);
    observeReveal(li);
  });
}

function renderOffices() {
  const root = $('#officeCards');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT[currentLang].offices || CONTENT.jp.offices || []).forEach((o) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${o.img}" alt="${o.title}" style="height:160px;width:100%;object-fit:cover;border-radius:10px;border:1px solid var(--line);margin-bottom:10px">
      <h4 style="margin:6px 0">${o.title}</h4>
      <ul class="subtle" style="padding-left:18px;margin:8px 0 0">${(o.points||[])
        .map((p) => `<li>${p}</li>`)
        .join('')}</ul>`;
    imageFallback(card.querySelector('img'), o.title);
    root.appendChild(card);
    observeReveal(card);
  });
}

function renderTeam() {
  const root = $('#teamGrid');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT[currentLang].team || []).forEach((m) => {
    const card = document.createElement('div');
    card.className = 'member';
    card.innerHTML = `
      <img src="${m.img}" alt="${m.name}">
      <h4 style="margin:6px 0 2px">${m.name}</h4>
      <div class="subtle" style="font-size:13px">${m.role || ''}</div>
      <p class="subtle" style="font-size:13px;margin-top:8px">${m.bio || ''}</p>`;
    imageFallback(card.querySelector('img'), m.name);
    root.appendChild(card);
    observeReveal(card);
  });
}

function renderVoices() {
  const root = $('#voiceGrid');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT[currentLang].voices || []).forEach((v) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<p class="quote" style="margin-top:0">${v.quote}</p><div class="subtle" style="margin-top:8px">${v.who}</div>`;
    root.appendChild(card);
    observeReveal(card);
  });
}

function renderFaq() {
  const root = $('#faqList');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT[currentLang].faq || []).forEach((q) => {
    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <button class="q" type="button">${q.q}</button>
      <div class="a" style="display:none">${q.a}</div>`;
    root.appendChild(wrap);
  });
  // Wiring accordion behavior / アコーディオン動作の配線
  $$('#faqList .q').forEach((btn) => {
    on(btn, 'click', () => {
      const a = btn.nextElementSibling;
      const open = a.style.display === 'block';
      $$('#faqList .a').forEach((x) => (x.style.display = 'none'));
      a.style.display = open ? 'none' : 'block';
    });
  });
}

function renderGallery() {
  const root = $('#gallery');
  if (!root) return;
  root.innerHTML = '';
  (CONTENT[currentLang].galleryImgs || []).forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `gallery-${i+1}`;
    img.loading = 'lazy';
    img.style.borderRadius = '10px';
    img.style.border = '1px solid var(--line)';
    imageFallback(img, 'gallery');
    root.appendChild(img);
  });
}

/* ----------------------------------------------------------
   6-8) Priority galleries, connectors, etc. (keeping same)
-----------------------------------------------------------*/
const PHOTO_SOURCES = {
  about: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Ccircle fill="%233b82f6" cx="200" cy="150" r="60"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="24" font-weight="bold"%3EAbout%3C/text%3E%3C/svg%3E',
  jobs: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff0f8" width="400" height="300"/%3E%3Crect fill="%23ff0082" x="150" y="100" width="100" height="100"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="24" font-weight="bold"%3EJobs%3C/text%3E%3C/svg%3E',
  relocation: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f7fa" width="400" height="300"/%3E%3Cpath fill="%2322d3ee" d="M150 150l50-50 50 50-50 50z"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3EVisa%3C/text%3E%3C/svg%3E',
  process: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Ccircle fill="%23f59e0b" cx="200" cy="150" r="50"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3EProcess%3C/text%3E%3C/svg%3E',
  why: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Crect fill="%2322c55e" x="150" y="100" width="100" height="100"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="24" font-weight="bold"%3EWhy%3C/text%3E%3C/svg%3E',
  casual: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e8ff" width="400" height="300"/%3E%3Ccircle fill="%239333ea" cx="200" cy="150" r="60"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3EChat%3C/text%3E%3C/svg%3E',
  testimonials: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fce7f3" width="400" height="300"/%3E%3Cpath fill="%23ec4899" d="M150 120h100v60h-100z"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3EVoices%3C/text%3E%3C/svg%3E',
  office: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ecfdf5" width="400" height="300"/%3E%3Crect fill="%2310b981" x="140" y="90" width="120" height="120"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3EOffice%3C/text%3E%3C/svg%3E',
  career: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef2f2" width="400" height="300"/%3E%3Cpath fill="%23ef4444" d="M200 100l50 100h-100z"/%3E%3Ctext x="200" y="170" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3ECareer%3C/text%3E%3C/svg%3E',
  cost: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff7ed" width="400" height="300"/%3E%3Ccircle fill="%23fb923c" cx="200" cy="150" r="50"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3ECost%3C/text%3E%3C/svg%3E',
  team: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23eff6ff" width="400" height="300"/%3E%3Crect fill="%232563eb" x="170" y="120" width="60" height="60"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3ETeam%3C/text%3E%3C/svg%3E',
  area: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f5f3ff" width="400" height="300"/%3E%3Ccircle fill="%237c3aed" cx="200" cy="150" r="55"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3EArea%3C/text%3E%3C/svg%3E',
  blog: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fdf4ff" width="400" height="300"/%3E%3Crect fill="%23d946ef" x="150" y="100" width="100" height="100"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3EBlog%3C/text%3E%3C/svg%3E',
  line: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdfa" width="400" height="300"/%3E%3Ccircle fill="%2314b8a6" cx="200" cy="150" r="50"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3ELINE%3C/text%3E%3C/svg%3E',
  culture: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fefce8" width="400" height="300"/%3E%3Cpath fill="%23facc15" d="M150 120h100v60h-100z"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3ECulture%3C/text%3E%3C/svg%3E',
  faq: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Ccircle fill="%230ea5e9" cx="200" cy="150" r="50"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="24" font-weight="bold"%3EFAQ%3C/text%3E%3C/svg%3E'
};

function decorateIconCard(a, key) {
  const title = $('.title', a)?.textContent?.trim() || a.getAttribute('aria-label') || '';
  const photoURL = PHOTO_SOURCES[key] || PHOTO_SOURCES.about;
  let photo = $('.photo', a);
  if (!photo) {
    photo = document.createElement('div');
    photo.className = 'photo';
    photo.innerHTML = `<img class="photo-img" alt="">`;
    a.insertBefore(photo, $('.meta', a));
  }
  const img = $('.photo-img', a);
  if (img) {
    img.src = photoURL;
    img.alt = title || key;
    imageFallback(img, title || key);
  }
  a.classList.add('is-photo-card');
}

function renderPriorityGallery() {
  const root = $('section.icon-grid.priority');
  if (!root) return;
  const items = $$('.icon-card', root);
  injectConnectorBackground(root);
  const keyMap = ['about','jobs','relocation','process','why','casual','testimonials','office','career'];
  items.forEach((a, i) => decorateIconCard(a, keyMap[i] || 'about'));
  root.classList.add('priority-3x3');
  items.forEach((el) => observeReveal(el));
}

function renderSecondaryGallery() {
  const root = $('section.icon-grid.secondary');
  if (!root) return;
  const items = $$('.icon-card', root);
  injectConnectorBackground(root, { density: 10, variant: 'dots' });
  const keyMap = ['cost','team','area','blog','line','culture','faq'];
  items.forEach((a, i) => decorateIconCard(a, keyMap[i] || 'blog'));
  root.classList.add('secondary-grid');
  items.forEach((el) => observeReveal(el));
}

function injectConnectorBackground(sectionEl, opts = {}) {
  if (!sectionEl) return;
  const { density = 12, variant = 'grid' } = opts;
  if ($('.bg-connectors', sectionEl)) return;

  const svg = document.createElement('div');
  svg.className = 'bg-connectors';
  svg.setAttribute('aria-hidden', 'true');

  const w = sectionEl.clientWidth || 1200;
  const h = 320;
  const stroke = 'rgba(2, 32, 71, 0.06)';
  let svgInner = '';

  if (variant === 'dots') {
    const rows = 4, cols = density;
    const cellW = w / cols;
    const cellH = h / rows;
    svgInner += `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">`;
    for (let r=0;r<rows;r++){
      for (let c=0;c<cols;c++){
        const x = c*cellW + cellW/2;
        const y = r*cellH + cellH/2;
        svgInner += `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="1.8" fill="${stroke}"/>`;
      }
    }
    svgInner += `</svg>`;
  } else {
    const cols = density;
    const cellW = w / cols;
    svgInner += `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">`;
    for (let i=0;i<=cols;i++){
      const x = (i*cellW).toFixed(2);
      svgInner += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="${stroke}" stroke-width="1"/>`;
    }
    svgInner += `<line x1="0" y1="${h/2}" x2="${w}" y2="${h/2}" stroke="${stroke}" stroke-width="1"/>`;
    svgInner += `</svg>`;
  }

  svg.innerHTML = svgInner;
  sectionEl.prepend(svg);

  let raf;
  on(window, 'resize', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const old = $('.bg-connectors', sectionEl);
      if (old) old.remove();
      injectConnectorBackground(sectionEl, opts);
    });
  });
}

/* ----------------------------------------------------------
   8) Language toggle + full refresh of dynamic sections
   言語切り替え+動的セクションの完全リフレッシュ
-----------------------------------------------------------*/
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
  renderPriorityGallery();
  renderSecondaryGallery();

  const y = String(new Date().getFullYear());
  const yNode = document.getElementById('year');
  if (yNode) yNode.textContent = y;
  const yNode2 = document.getElementById('year2');
  if (yNode2) yNode2.textContent = y;
}

/* ----------------------------------------------------------
   9) Header actions: language + drawer + smooth anchors
   ヘッダーアクション：言語+ドロワー+スムーズアンカー
-----------------------------------------------------------*/
function initHeader() {
  // Language buttons / 言語ボタン
  $$('.lang-btn').forEach((btn) => {
    on(btn, 'click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang') || btn.getAttribute('data-lang-code');
      if (!lang) return;
      setLang(normalizeLang(lang));
    });
  });

  // Legacy single language toggle button (if exists)
  const legacyBtn = $('#langBtn');
  if (legacyBtn) {
    on(legacyBtn, 'click', (e) => {
      e.preventDefault();
      const nextLang = legacyBtn.getAttribute('data-next-lang') || 'en';
      setLang(nextLang);
    });
  }

  // Drawer (mobile) / ドロワー（モバイル）
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

  $$('.drawer .d-link').forEach((a) =>
    on(a, 'click', () => {
      closeDrawer();
      const href = a.getAttribute('href') || '';
      if (href.startsWith('#')) {
        setTimeout(() => smoothScrollTo(href, 76), 10);
      }
    })
  );

  // Smooth scroll for any in-page anchors
  $$('a[href^="#"]').forEach((a) => {
    if (a.getAttribute('href') === '#') return;
    on(a, 'click', (e) => {
      const id = a.getAttribute('href');
      const el = $(id);
      if (!el) return;
      e.preventDefault();
      smoothScrollTo(el, 76);
    });
  });
}

/* ----------------------------------------------------------
   10-13) Rest of initialization functions (kept same)
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
      floatBar.setAttribute('aria-hidden', y < 200 ? 'true' : 'false');
      floatBar.style.opacity = y < 200 ? '0' : '1';
      floatBar.style.pointerEvents = y < 200 ? 'none' : 'auto';
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

function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;
  on(form, 'submit', (e) => {
    e.preventDefault();
    const name = $('#name')?.value?.trim() || '';
    const fn = I18N[currentLang].contactThanks || I18N.jp.contactThanks || (() => 'ありがとうございました。');
    const msg = typeof fn === 'function' ? fn(name || (currentLang === 'jp' ? '応募者' : 'Candidate')) : fn;
    alert(msg);
    form.reset();
  });
}

function initChatGPTSection() {
  const ta = $('#chatgptPrompt');
  const btnCopy = $('#copyPromptBtn');
  const btnOpen = $('#openChatGPTBtn');
  if (ta && typeof window.getChatGPTPrompt === 'function') {
    ta.value = window.getChatGPTPrompt(currentLang);
  }
  if (btnCopy && ta) {
    on(btnCopy, 'click', async () => {
      try {
        await navigator.clipboard.writeText(ta.value);
        const original = btnCopy.textContent;
        if (currentLang === 'jp') btnCopy.textContent = 'コピーしました！';
        else if (currentLang === 'kr') btnCopy.textContent = '복사했습니다!';
        else btnCopy.textContent = 'Copied!';
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

function initHeroMediaFallbacks() {
  imageFallback($('#heroCover'), 'Hero');
  imageFallback($('#logoImg'), 'TP');
  $$('.photo-img').forEach((img) => imageFallback(img, 'tile'));
}

function initCultureStripAnimations() {
  const strip = $('.culture-strip');
  if (!strip || prefersReducedMotion()) return;

  const motifs = $$('.culture-strip .motif', strip);
  function onScroll() {
    const rect = strip.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;
    const progress = 1 - Math.abs(rect.top) / (window.innerHeight + rect.height);
    motifs.forEach((m, i) => {
      const factor = (i + 1) * 4;
      m.style.transform = `translateY(${(1 - progress) * factor}px)`;
    });
  }
  on(window, 'scroll', onScroll, { passive: true });
  onScroll();
}

function normalizeIconSizes() {
  $$('.icon-card .icon svg, .icon-card .icon img').forEach((node) => {
    node.setAttribute('width', '48');
    node.setAttribute('height', '48');
    node.style.width = '';
    node.style.height = '';
  });
}

/* ----------------------------------------------------------
   14) Boot sequence / ブートシーケンス
-----------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  // 0) Initialize language from query parameter or default to JP
  currentLang = normalizeLang(getInitialLang());
  updateLangURL(currentLang);

  // 1) Apply language + static strings
  applyLangToHtmlRoot();
  applyI18nStaticText();

  // 2) Render dynamic blocks
  renderAllDynamic();

  // 3) Hero typewriter
  const heroNode  = $('#heroType');
  const heroTexts = I18N[currentLang].heroTexts || [];
  if (heroNode && heroTexts.length > 0) {
    typewriter(heroNode, heroTexts);
  }

  // 4) Carousels
  makeCarousel('#benefitSlides', '#bPrev', '#bNext');

  // 5) Observe all revealables
  $$('.reveal').forEach(observeReveal);

  // 6) Header, sticky, contact, chatgpt
  initHeader();
  initStickyBars();
  initContactForm();
  initChatGPTSection();

  // 7) Fallbacks & visuals
  initHeroMediaFallbacks();
  initCultureStripAnimations();
  normalizeIconSizes();
});
