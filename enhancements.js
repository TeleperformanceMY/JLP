/* JLP Enhancements JS (loads after app.js) */
}


/* Apply + openings (locations with photos + 2 coming soon) */
function redesignApply(){
const sec = $('#apply .container'); if (!sec) return;
const photos = {
KL: 'photos/kl.jpg', Penang: 'photos/penang.jpg', Bangkok: 'photos/bangkok.jpg',
Johor: 'photos/johor.jpg', ChiangMai: 'photos/chiangmai.jpg'
};
const html = `
<div class="section-head"><h2 class="h2">現在の募集と応募方法</h2><p class="h2-sub">勤務地別に探す</p></div>
<div class="locations-grid">
${[
{n:'クアラルンプール', k:'KL', img:photos.KL, soon:false},
{n:'ペナン', k:'Penang', img:photos.Penang, soon:false},
{n:'バンコク', k:'Bangkok', img:photos.Bangkok, soon:false},
{n:'ジョホールバル', k:'Johor', img:photos.Johor, soon:true},
{n:'チェンマイ', k:'ChiangMai', img:photos.ChiangMai, soon:true}
].map(x=>`
<article class="loc-card reveal">
${x.soon?'<span class="coming">近日公開</span>':''}
<img src="${x.img}" alt="${x.n}">
<div class="meta">
<strong>${x.n}</strong>
<div class="subtle">日本語サポート／多国籍チーム</div>
${x.soon?'<span class="pill">準備中</span>':`<div style="display:flex;gap:8px;flex-wrap:wrap">
<a class="btn primary" target="_blank" href="${LINKS.apply||'#'}">応募</a>
<a class="btn ghost" target="_blank" href="${LINKS.casual||'https://forms.office.com/e/2UvpbweQww'}">カジュアル面談</a>
</div>`}
</div>
</article>`).join('')}
</div>`;
const gridParent = $('#apply .grid');
if (gridParent) gridParent.replaceWith(document.createRange().createContextualFragment(html));
}


/* Office cards micro redesign – add class hooks only (CSS handles look) */
function tweakOffice(){ const oc=$('#officeCards'); if(oc) oc.classList.add('office-modern'); }


/* Lifestyle mosaic */
function tweakLifestyle(){ const g=$('#gallery'); if(g) g.classList.add('masonry'); }


/* Voices – JP names if provided */
function tweakVoices(){
const data = C.voices || [];
const root = $('#voiceGrid'); if (!root || !data.length) return;
root.innerHTML='';
data.forEach(v=>{
const el = document.createElement('div');
el.className = 'card reveal';
const who = v.who_jp || v.name_jp || v.who || '';
el.innerHTML = `<p class="quote" style="margin-top:0">${v.quote||''}</p><div class="voice-name">${who}</div>`;
root.appendChild(el);
});
}


/* Mini FAQ – soft ChatGPT mark */
function markFAQ(){ const f=$('#mini-faq .faq'); if (f) f.classList.add('chatgpt-mark'); }


/* Floating bar – add LINE quick link if provided */
function addLineToFab(){
const bar = $('#floatBar'); if(!bar) return;
if (LINKS.line && !$('#lineFab')){
const a = document.createElement('a');
a.id='lineFab'; a.className='btn ghost'; a.href=LINKS.line; a.target='_blank'; a.rel='noopener'; a.textContent='LINE で相談';
bar.insertBefore(a, $('.apply-float'));
}
}


document.addEventListener('DOMContentLoaded', ()=>{
setNav();
redesignReasons();
redesignCities();
gridBenefits();
renderVideos();
redesignApply();
tweakOffice();
tweakLifestyle();
tweakVoices();
markFAQ();
addLineToFab();
});
})();
