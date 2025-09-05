/* assets/enhancements.js */
(() => {
  if (window.__enhanced__) return; // idempotent
  window.__enhanced__ = true;

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // ---------- Footer year ----------
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();

  // ---------- Drawer / Scrim ----------
  const drawer = $("#drawer");
  const scrim  = $("#scrim");
  const menuBtn = $("#menuBtn");
  const closeBtn = $("#closeDrawer");

  function openDrawer() {
    if (!drawer || !scrim) return;
    drawer.setAttribute("aria-hidden", "false");
    scrim.hidden = false;
    menuBtn && menuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    if (!drawer || !scrim) return;
    drawer.setAttribute("aria-hidden", "true");
    scrim.hidden = true;
    menuBtn && menuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  menuBtn && menuBtn.addEventListener("click", openDrawer);
  closeBtn && closeBtn.addEventListener("click", closeDrawer);
  scrim && scrim.addEventListener("click", closeDrawer);
  // close drawer on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer && drawer.getAttribute("aria-hidden") === "false") {
      closeDrawer();
    }
  });

  // ---------- Slide-up Apply Bar & To top ----------
  const applyBar = $(".apply-bar");
  const floatBar = $("#floatBar");
  const toTopBtn = $("#toTopBtn");

  let lastY = 0;
  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (applyBar) {
      // Show when user has scrolled a bit and is scrolling down
      const down = y > lastY;
      applyBar.setAttribute("aria-hidden", !(y > 220 && down));
    }
    if (floatBar && toTopBtn) {
      // Show the to-top when far enough
      toTopBtn.style.opacity = y > 360 ? "1" : "0";
      toTopBtn.style.pointerEvents = y > 360 ? "auto" : "none";
    }
    lastY = y;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTopBtn && toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ---------- Reveal on scroll ----------
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("is-visible"));
  }

  // ---------- Videos grid (YouTube) ----------
  // Reads window.CONTENT.jp.videos = [{id,title,channel?,duration?}, ...]
  const videosGrid = $("#videosGrid");
  if (videosGrid) {
    const V = (window.CONTENT && window.CONTENT.jp && window.CONTENT.jp.videos) || [];
    const fallback = [
      { id: "dQw4w9WgXcQ", title: "TP オフィス紹介（サンプル）" },
      { id: "M7lc1UVf-VE", title: "社員の声ダイジェスト（サンプル）" },
      { id: "ysz5S6PUM-U", title: "カルチャー＆イベント（サンプル）" }
    ];
    const data = Array.isArray(V) && V.length ? V : fallback;

    videosGrid.innerHTML = "";
    data.forEach(v => {
      const fig = document.createElement("figure");
      fig.className = "card video-card reveal";
      fig.innerHTML = `
        <div class="video-thumb" data-yid="${v.id}">
          <img loading="lazy" alt="${v.title || "video"}"
               src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" />
          <button class="play-btn" aria-label="再生">▶</button>
        </div>
        <figcaption class="video-cap">
          <div class="video-title">${v.title || ""}</div>
          ${v.channel ? `<div class="video-meta">${v.channel}${v.duration ? "・" + v.duration : ""}</div>` : ""}
        </figcaption>
      `;
      videosGrid.appendChild(fig);
    });

    // click-to-embed to keep page light
    videosGrid.addEventListener("click", (e) => {
      const box = e.target.closest(".video-thumb");
      if (!box) return;
      const id = box.getAttribute("data-yid");
      if (!id) return;
      const wrapper = document.createElement("div");
      wrapper.className = "video-embed";
      wrapper.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0"
          title="YouTube video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>`;
      box.replaceWith(wrapper);
    });
  }

  // ---------- ChatGPT prompt copy/open ----------
  const chatTxt = $("#chatgptPrompt");
  const copyBtn = $("#copyPromptBtn");
  const openBtn = $("#openChatGPTBtn");
  if (chatTxt && !chatTxt.value) {
    // Minimal prompt; you can expand in content-jp.json if you want
    chatTxt.value =
`あなたはTP（Teleperformance）の日本語採用について情報提供するアシスタントです。
候補者が知りたい: 勤務地（KL/ペナン/バンコク）、給与/福利厚生、移住・ビザ、面接プロセス、応募方法。
日本語で、簡潔に、公式情報に基づいて答えてください。`;
  }
  copyBtn && copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(chatTxt.value);
      copyBtn.textContent = "コピーしました";
      setTimeout(() => (copyBtn.textContent = "プロンプトをコピー"), 1600);
    } catch {
      // Fallback
      chatTxt.select();
      document.execCommand("copy");
    }
  });
  openBtn && openBtn.addEventListener("click", () => {
    window.open("https://chat.openai.com/", "_blank", "noopener");
  });

  // ---------- Disable carousel controls when in grid mode ----------
  const benefits = document.querySelector("section#benefits");
  if (benefits && benefits.dataset.mode === "grid") {
    const ctrls = $$(".carousel-controls .ctrl", benefits);
    ctrls.forEach(b => {
      b.setAttribute("disabled", "true");
      b.style.opacity = "0.35";
      b.style.pointerEvents = "none";
      b.title = "グリッド表示では操作できません";
    });
  }

  // ---------- Basic contact form client-side check ----------
  const form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name  = $("#name", form)?.value.trim();
      const email = $("#email", form)?.value.trim();
      if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("お名前と正しいメールアドレスをご入力ください。");
        return;
      }
      alert("送信ありがとうございました！担当よりご連絡します。");
      form.reset();
    });
  }
})();
