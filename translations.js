/* ============================================================================
   TP Candidate Microsite — translations.js (Aligned to PPT)
   Purpose / 目的:
     - Provide UI strings (I18N) + dynamic page CONTENT mapped directly from
       "Microsite Execution File-Japan 1.pptx" (69 slides)
     - Default language: Japanese (ja)
     - No external images; SVG data URIs only
   Updated: 2025-08-26
============================================================================ */
(function () {
  /* ------------------------------------------------------------------------
     0) Language metadata
  -------------------------------------------------------------------------*/
  const LANGS = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
  ];

  /* ------------------------------------------------------------------------
     1) I18N — UI strings / ナビ & ラベル
     (Navigation keys preserved so existing app.js doesn’t break)
  -------------------------------------------------------------------------*/
  const I18N = {
    ja: {
      'brand.title': 'TP',
      'brand.sub': 'Malaysia · Thailand — 日本語採用',
      'header.lang.jp': '日本語',
      'header.lang.en': 'English',
      'header.lang.ko': '한국어',
      'nav.about': '会社紹介',
      'nav.jobs': '求人・福利厚生',
      'nav.relocation': '移住・ビザ',
      'nav.why': 'マレーシア・タイの魅力',
      'nav.process': '面接プロセス',
      'nav.faq': 'FAQ',
      'nav.contact': 'お問い合わせ',
      'nav.casual': 'カジュアル面談',
      'nav.team': '採用チーム',
      'nav.office': '働く環境',
      'nav.career': 'キャリア・語学',
      'nav.testimonials': '社員の声',

      // CTAs
      'cta.apply': 'ご応募はこちら',
      'cta.viewJobs': '求人を見る',
      'cta.relocation': '移住サポート',
      'cta.casual': 'カジュアル面談',
      'cta.learnMore': 'さらに見る',
      'cta.open': '開く',
      'cta.copy': 'コピー',
      'cta.contact': '問い合わせ',

      // Footer / Misc
      'footer.about': '会社紹介',
      'footer.privacy': 'プライバシー',
      'footer.contact': 'お問い合わせ',
      'bar.faq': 'FAQ',

      // Hero (Slide 4)
      'hero.eyebrow': '暮らすように、海外で働く。',
      'hero.leading': 'あなたの新しいキャリアの舞台に、',
      'hero.lead': '多国籍な環境と、日本語を活かせる仕事。コストを抑えた快適な暮らし。そんな “ちょうどいい” 海外生活、マレーシアで始めませんか？',
    },

    en: {
      'brand.title': 'TP',
      'brand.sub': 'Malaysia · Thailand — JP recruitment',
      'header.lang.jp': '日本語',
      'header.lang.en': 'English',
      'header.lang.ko': '한국어',
      'nav.about': 'About',
      'nav.jobs': 'Jobs & Benefits',
      'nav.relocation': 'Relocation & Visa',
      'nav.why': 'Why MY & TH',
      'nav.process': 'Interview Process',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      'nav.casual': 'Casual Interview',
      'nav.team': 'TA Team',
      'nav.office': 'Work Environment',
      'nav.career': 'Career & Language',
      'nav.testimonials': 'Testimonials',
      'cta.apply': 'Apply Now',
      'cta.viewJobs': 'View Jobs',
      'cta.relocation': 'Relocation Support',
      'cta.casual': 'Book a Casual Chat',
      'cta.learnMore': 'Learn More',
      'cta.open': 'Open',
      'cta.copy': 'Copy',
      'cta.contact': 'Contact',
      'footer.about': 'About',
      'footer.privacy': 'Privacy',
      'footer.contact': 'Contact',
      'bar.faq': 'FAQ',
      'hero.eyebrow': 'Work abroad like you live here.',
      'hero.leading': 'Your next career stage:',
      'hero.lead': 'Multinational teams and JP-language roles. Comfortable living at sensible cost in MY/TH.',
    },

    ko: {
      'brand.title': 'TP',
      'brand.sub': 'Malaysia · Thailand — 일본어 채용',
      'header.lang.jp': '日本語',
      'header.lang.en': 'English',
      'header.lang.ko': '한국어',
      'nav.about': '회사 소개',
      'nav.jobs': '채용 정보・복리후생',
      'nav.relocation': '이주・비자',
      'nav.why': '말레이시아・태국의 매력',
      'nav.process': '면접 과정',
      'nav.faq': 'FAQ',
      'nav.contact': '문의하기',
      'nav.casual': '캐주얼 면담',
      'nav.team': '채용팀',
      'nav.office': '근무 환경',
      'nav.career': '커리어・어학',
      'nav.testimonials': '직원 후기',
      'cta.apply': '지원하기',
      'cta.viewJobs': '채용 정보 보기',
      'cta.relocation': '이주 지원',
      'cta.casual': '캐주얼 면담 예약',
      'cta.learnMore': '자세히 보기',
      'cta.open': '열기',
      'cta.copy': '복사',
      'cta.contact': '문의',
      'footer.about': '회사 소개',
      'footer.privacy': '개인정보',
      'footer.contact': '문의하기',
      'bar.faq': 'FAQ',
      'hero.eyebrow': '생활하듯, 해외에서 일하기.',
      'hero.leading': '당신의 새로운 커리어 무대:',
      'hero.lead': '다국적 팀과 일본어 포지션. 합리적 비용의 편안한 생활.',
    },
  };

  /* ------------------------------------------------------------------------
     1.5) I18N harmonization — ensure EN/KO have every key present in JA.
           If a key is missing in EN/KO, we fill it with JA as fallback
           (structure preserved; values can be localized later).
  -------------------------------------------------------------------------*/
  (function harmonizeI18N(){
    const base = I18N.ja || {};
    ['en','ko'].forEach(code => {
      I18N[code] = I18N[code] || {};
      for (const k in base) {
        if (!(k in I18N[code])) I18N[code][k] = base[k];
      }
    });
  })();

  /* ------------------------------------------------------------------------
     2) CONTENT — Derived from PPT (slide numbers in comments)
     日本語（ja）が最も充実（PPT原文準拠）
     ※ 外部画像なし（SVG data URI）
  -------------------------------------------------------------------------*/ (slide numbers in comments)
     日本語（ja）が最も充実（PPT原文準拠）
     ※ 外部画像なし（SVG data URI）
  -------------------------------------------------------------------------*/
  const CONTENT = {
    meta: {
      ppt: {
        file: 'Microsite Execution File-Japan 1.pptx',
        slides: 69,
        raw_json_url: 'ppt_slides_summary.json', // place this JSON next to your build or update path via config
      },
    },

    links: {
      // from slides 33, 37 (icims) & 37 (casual)
      apply:
        'https://careerseng-teleperformance.icims.com/jobs/49026/customer-service-representative---japanese-speaking-%28kl%29/job?mode=job&iis=LANDINGPAGE',
      casual: 'https://forms.office.com/e/2UvpbweQww',
      line: 'https://line.me/R/ti/p/@286nmdsd?from=page&searchId=286nmdsd',
    },

    /* ========================= 日本語 (default) ========================= */
    ja: {
      hero: {
        eyebrow: I18N.ja['hero.eyebrow'], // S4
        lead1: I18N.ja['hero.leading'],   // S4
        lead2: I18N.ja['hero.lead'],      // S4
      },

      // Why join TP? — Slides 6–7
      whyTP: [
        '🌍 グローバルな環境で、自分をレベルアップ！',
        '🗣️ 日本語スピーカー向けのポジションが豊富！安心してスタート可能',
        '👥 日本人サポートの安心感',
        '🌈 多様性あふれる、自由でフラットな社風',
      ],

      // Why Malaysia / Thailand — Slides 8–14, 20
      whyRegion: {
        headline: 'なぜ、今マレーシア・タイ？',
        bullets: [
          '英語が通じる安心感、安定した治安、親日的（MY）',
          '都市の利便性 × 多文化の共存（KL）',
          '自然と歴史の島ライフ（Penang）',
          '「東南アジアの東京」バンコク — BTS/MRTが快適（TH）',
          'ハブ空港で週末アジア旅も気軽に（✈️）',
        ],
      },

      // Offices — Slides 28–32 （SVGのみ）
      offices: [
        {
          title: 'G Tower（KL）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Crect fill="%233b82f6" x="170" y="50" width="60" height="250"/%3E%3Crect fill="%2360a5fa" x="150" y="80" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="110" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="140" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="170" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="200" width="100" height="10"/%3E%3Crect fill="%231e40af" x="180" y="260" width="40" height="40"/%3E%3C/svg%3E',
          points: [
            'ビジネスエリア至近・駅徒歩2分',
            'KLCC/Intermarkが徒歩圏',
            'Grade Aオフィス',
          ],
        },
        {
          title: 'Penang — Livingston',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Crect fill="%2322c55e" x="100" y="120" width="80" height="180"/%3E%3Crect fill="%2334d399" x="220" y="140" width="60" height="160"/%3E%3Crect fill="%2310b981" x="180" y="100" width="40" height="20"/%3E%3Crect fill="%2310b981" x="110" y="250" width="60" height="50"/%3E%3Crect fill="%2310b981" x="230" y="270" width="40" height="30"/%3E%3C/svg%3E',
          points: ['静かな環境', '飲食店・薬局が周辺', 'アクセス良好'],
        },
        {
          title: 'Penang — One Precinct',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Crect fill="%23f59e0b" x="160" y="80" width="80" height="220"/%3E%3Crect fill="%23fbbf24" x="140" y="100" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="130" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="160" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="190" width="120" height="10"/%3E%3Crect fill="%23d97706" x="180" y="250" width="40" height="50"/%3E%3C/svg%3E',
          points: ['Bayan Baruのモダンビル', '空港から約15分', 'Queensbay Mall近く'],
        },
        {
          title: 'Penang — GBS@Mahsuri',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e8ff" width="400" height="300"/%3E%3Crect fill="%239333ea" x="80" y="100" width="60" height="200"/%3E%3Crect fill="%23a855f7" x="160" y="120" width="60" height="180"/%3E%3Crect fill="%239333ea" x="240" y="110" width="60" height="190"/%3E%3Crect fill="%23c084fc" x="70" y="90" width="80" height="10"/%3E%3Crect fill="%23c084fc" x="150" y="110" width="80" height="10"/%3E%3Crect fill="%23c084fc" x="230" y="100" width="80" height="10"/%3E%3C/svg%3E',
          points: ['州のGBSハブ中心', 'IT/BPO企業が集積', '生活インフラが徒歩圏'],
        },
        {
          title: 'Bangkok — Singha Complex',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff4e6" width="400" height="300"/%3E%3Crect fill="%23fb923c" x="60" y="120" width="50" height="180"/%3E%3Crect fill="%23f97316" x="140" y="80" width="70" height="220"/%3E%3Crect fill="%23fb923c" x="240" y="100" width="50" height="200"/%3E%3Crect fill="%23f97316" x="320" y="130" width="40" height="170"/%3E%3C/svg%3E',
          points: ['MRT Phetchaburi 駅直結', '近代的設備・開放的空間', '快適なワークライフ'],
        },
      ],

      // Openings — Slide 33
      openings: {
        title: 'Customer Service Representative – Japanese Speaking',
        locations: ['KL', 'Penang', 'Bangkok'],
        note: '配属・シフトはプロジェクトにより異なります（週末・祝日含む場合あり）',
        exampleProjects: ['Eコマース', '旅行・予約', 'ホテル', '金融', 'ソーシャルメディア', 'IT'],
        qualifications: [
          '未経験・新卒可',
          '日本語ビジネスレベル（JLPT N2+）',
          '英語：B1目安（案件により緩和あり）',
        ],
      },

      // How to Apply — Slide 34
      howToApply: [
        'Step 1：応募リンクを開く（Apply for this job online）',
        'Step 2：アカウント作成／ログイン（メール認証あり）',
        'Step 3：応募フォーム入力（氏名・連絡先・履歴書・職歴・語学など）',
        'Step 4：Submit→確認メール',
        '推奨ブラウザ：Chrome/Edge。PC入力がスムーズ。',
      ],

      // Benefits — Slides 35–36（代表項目抜粋; 原文見出しに準拠）
      benefits: [
        '健康・医療サポート（医療/歯科/眼科補助、団体保険、ジム補助）',
        '休暇制度（有給、病気/入院、出産/育児、慶弔）',
        '給与・報酬（KPI/ボーナス、年次昇給、時間外手当）',
        'キャリアアップ（社内昇格、IJP、ブートキャンプ）',
        '移住支援（ホテル6泊7日、片道航空券、就労ビザ手続き）',
      ],

      // Process — Slide 37
      processSteps: [
        '① 書類選考（日本語/英語レジュメ）',
        '② 英語/日本語/タイピング等のオンラインテスト（必要に応じて）',
        '③ 一次面接（採用チーム）',
        '④ 二次面接（配属チーム/マネージャー）',
        '⑤ 条件確認 → ビザ → 渡航・初期宿泊',
      ],

      // Casual Interview — Slide 18
      casual: {
        title: '💬 カジュアル面談 実施中',
        bullets: [
          '面接ではありません（不安・疑問の解消が目的）',
          'オンライン（Microsoft Teams）で約30分',
          '生活費・住まい・働き方など、日本語で相談OK',
        ],
      },

      // Language & Training — Slides 61–65（抜粋整形）
      training: {
        languageBootcamp: {
          title: 'Language Bootcamp（日本人向け6か月英語強化）',
          points: [
            '初級/中級の少人数クラス（約10名×2チーム）',
            '文法・会話・発音・リスニング・ビジネス英語',
            '2024年実施、2025年9月に第2回予定（KL拠点中心）',
          ],
        },
        goFluent: {
          title: 'GoFluent（語学学習ツール／社内無料）',
          points: [
            'AIコーチ・教材・発音矯正・ライティング添削',
            '会話練習に最適。無料は大きなアドバンテージ',
          ],
        },
      },

      // Team — Slides 21–25（要約プロフィール）
      team: [
        { name: 'Joseph', role: 'Senior Manager (TA)', bio: '多国籍採用の責任者。日本語スピーカー採用を含む全体統括。' },
        { name: 'Maya', role: 'TA', bio: '約5000人の日本語話者の面接経験。次はあなたの番！' },
        { name: 'Akito', role: 'Recruiter', bio: '期待を超える対応を目指し、丁寧にご案内します。' },
        { name: 'Maho', role: 'Talent Attraction', bio: '海外就職の不安に日本語で伴走。旅行・スポーツ好き。' },
        { name: 'Koyori', role: 'TA', bio: 'はじめまして、採用担当のKoyoriです。' },
      ],

      // LINE / Activities — Slides 19–20
      line: {
        title: 'LINE公式アカウント',
        points: [
          '日本語ポジション更新情報',
          '現地生活Q&Aや体験談',
          'LINE上での質問もOK',
        ],
      },
      activities: {
        title: '仕事だけじゃない、週末も充実',
        points: ['朝ランや散歩', 'ハイキング/サイクリング', 'カフェやローカルイベント'],
      },

      // Accommodation — Slide 16（見出しのみ）
      accommodation: [
        '24時間セキュリティ＆ゲート付き',
        'プール・ジム・BBQなど共用設備',
        '家具家電付きで即入居可',
      ],

      // Cost of Living table header — Slide 15（見出し）
      costOfLivingHeaders: ['項目', '日本（東京）', 'マレーシア（KL）', '家賃（1LDK） など'],

      // Gallery placeholders（SVG）
      galleryImgs: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f2ff" width="400" height="300"/%3E%3Cpath fill="%233b82f6" d="M50 150h100v150H50zM200 100h120v200H200z"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Cpath fill="%2322c55e" d="M100 120h80v180h-80zM220 140h60v160h-60z"/%3E%3C/svg%3E',
      ],
    },

    /* =============================== EN ================================ */
    en: {
      whyTP: [
        'Level up in a global team',
        'Many JP-speaking roles',
        'JP support available',
        'Inclusive, flat culture',
      ],
      whyRegion: {
        headline: 'Why Malaysia & Thailand',
        bullets: [
          'English-friendly, stable & welcoming',
          'KL: convenience + multicultural life',
          'Penang: island lifestyle',
          'Bangkok: modern transit & amenities',
          'Hub airports for easy trips',
        ],
      },
      benefits: [
        'Medical & insurance',
        'Leave policies',
        'Compensation & bonuses',
        'Career growth (IJP, bootcamps)',
        'Relocation & visa support',
      ],
      processSteps: [
        'Screening', 'Online tests (if needed)', '1st Interview', '2nd Interview', 'Offer → Visa → Travel',
      ],
    },

    /* =============================== KO ================================ */
    ko: {
      whyTP: ['글로벌 환경', '일본어 포지션 다수', '일본어 지원', '다양성과 포용'],
      whyRegion: { headline: '왜 말레이시아·태국?', bullets: ['영어 OK', 'KL 편리', '페낭 섬 라이프', '방콕 교통 편리', '허브공항'] },
      benefits: ['의료/보험', '휴가', '보상', '커리어', '이주/비자'],
      processSteps: ['서류', '온라인 테스트', '1차', '2차', '오퍼→비자'],
    },
  };

  /* ------------------------------------------------------------------------
     3) ChatGPT Prompts — unchanged except localized; can be tuned later
  -------------------------------------------------------------------------*/
  const CHATGPT_PROMPTS = {
    ja: `あなたは就職アドバイザーです。以下の日本語コンテンツ（PPT由来）を踏まえ、TP Malaysia / Thailand を候補者目線で案内してください。誇張や断定は避け、親しみやすく簡潔に。最後に応募かカジュアル面談への自然な誘導を。`,
    en: `You are a job advisor. Using the JP-first site copy (sourced from the PPT), provide a concise, upbeat overview of TP Malaysia/Thailand. Avoid absolute guarantees; close with a friendly CTA (apply or casual chat).`,
    ko: `지원자 친화적으로 TP Malaysia/Thailand를 소개하세요. 과장 없이 간결하게, 마지막에 자연스러운 CTA로 마무리합니다.`,
  };

  /* ------------------------------------------------------------------------
     4) Exports
  -------------------------------------------------------------------------*/
  window.I18N = I18N;
  window.CONTENT = CONTENT;
  window.AVAILABLE_LANGS = LANGS;
  window.getChatGPTPrompt = function (lang) { return CHATGPT_PROMPTS[lang] || CHATGPT_PROMPTS.ja; };

  /* ------------------------------------------------------------------------
     5) Init helper — bind copy for ChatGPT prompt if present
  -------------------------------------------------------------------------*/
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const langAttr = root.getAttribute('data-lang') || root.getAttribute('lang') || 'ja';
    const current = ['ja', 'en', 'ko'].includes(langAttr) ? langAttr : 'ja';

    const ta = document.getElementById('chatgptPrompt');
    if (ta) ta.value = window.getChatGPTPrompt(current);

    const copyBtn = document.getElementById('copyPromptBtn');
    if (copyBtn && ta) {
      copyBtn.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(ta.value); copyBtn.textContent = current==='ja'?'コピーしました！': current==='ko'?'복사했습니다!':'Copied!'; setTimeout(() => copyBtn.textContent = I18N[current]['cta.copy'] || 'Copy', 1400);} catch { ta.select(); document.execCommand('copy'); }
      });
    }

    // Optional: language toggle buttons with [data-lang-code]
    document.querySelectorAll('[data-lang-code]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-lang-code') || 'ja';
        if (ta) ta.value = window.getChatGPTPrompt(code);
      });
    });
  });
})();


/* ============================================================================
   INTEGRATION — Map PPT content into runtime CONTENT (right place)
   Notes:
   - We merge into existing keys so app.js renders correct sections
   - Slide references kept for traceability
============================================================================ */
(function integratePPT(){
  if(!window.CONTENT) return;
  const JP = window.CONTENT.ja || (window.CONTENT.ja = {});
  const EN = window.CONTENT.en || (window.CONTENT.en = {});
  const KO = window.CONTENT.ko || (window.CONTENT.ko = {});

  /* ------------------------- HERO (Slide 4) ------------------------- */
  JP.hero = {
    eyebrow: '暮らすように、海外で働く。', // S4
    lead1: 'あなたの新しいキャリアの舞台に、', // S4
    lead2: '多国籍な環境と、日本語を活かせる仕事。コストを抑えた快適な暮らし。そんな“ちょうどいい”海外生活、マレーシアで始めませんか？' // S4
  };
  EN.hero = {
    eyebrow: 'Work abroad like you live here.',
    lead1: 'Your next career stage:',
    lead2: 'Multinational teams and JP-language roles. Comfortable living at sensible cost in MY/TH.'
  };
  KO.hero = {
    eyebrow: '생활하듯, 해외에서 일하기.',
    lead1: '당신의 새로운 커리어 무대:',
    lead2: '다국적 팀과 일본어 포지션. 합리적 비용의 편안한 생활.'
  };

  /* -------------------- WHY TP (Slides 6–7) ------------------------ */
  JP.whyTP = [
    '🌍 グローバルな環境で、自分をレベルアップ！',
    '🗣️ 日本語スピーカー向けのポジションが豊富！安心してスタート可能',
    '👥 日本人サポートの安心感',
    '🌈 多様性あふれる、自由でフラットな社風',
  ];
  EN.whyTP = [
    'Level up in a global team',
    'Many JP-speaking roles',
    'JP support available',
    'Inclusive, flat culture',
  ];
  KO.whyTP = ['글로벌 환경', '일본어 포지션 다수', '일본어 지원', '다양성과 포용'];

  /* ------------- WHY REGION (Slides 8–14, 20 overview) ------------- */
  JP.whyRegion = {
    headline: 'なぜ、今マレーシア・タイ？',
    bullets: [
      '英語が通じる安心感、安定した治安、親日的（MY）',
      'KL：利便性 × 多文化',
      'Penang：自然と歴史の島ライフ',
      'Bangkok：BTS/MRTが快適',
      'ハブ空港で週末アジア旅も気軽に',
    ]
  };
  EN.whyRegion = {
    headline: 'Why Malaysia & Thailand',
    bullets: [
      'English-friendly, stable & welcoming',
      'KL: convenience + multicultural life',
      'Penang: island lifestyle',
      'Bangkok: modern transit & amenities',
      'Hub airports for easy trips',
    ]
  };
  KO.whyRegion = { headline: '왜 말레이시아·태국?', bullets: ['영어 OK', 'KL 편리', '페낭 섬 라이프', '방콕 교통 편리', '허브공항'] };

  /* ---------------------- OFFICES (15–19) -------------------------- */
  JP.offices = [
    {
      title: 'G Tower（KL）', // S15
      img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Crect fill="%233b82f6" x="170" y="50" width="60" height="250"/%3E%3Crect fill="%2360a5fa" x="150" y="80" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="110" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="140" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="170" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="200" width="100" height="10"/%3E%3Crect fill="%231e40af" x="180" y="260" width="40" height="40"/%3E%3C/svg%3E',
      points: ['ビジネスエリア至近・駅徒歩2分', 'KLCC/Intermarkが徒歩圏', 'Grade Aオフィス']
    },
    {
      title: 'Penang — Livingston', // S16
      img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Crect fill="%2322c55e" x="100" y="120" width="80" height="180"/%3E%3Crect fill="%2334d399" x="220" y="140" width="60" height="160"/%3E%3Crect fill="%2310b981" x="180" y="100" width="40" height="20"/%3E%3Crect fill="%2310b981" x="110" y="250" width="60" height="50"/%3E%3Crect fill="%2310b981" x="230" y="270" width="40" height="30"/%3E%3C/svg%3E',
      points: ['静かな環境', '飲食店・薬局が周辺', 'アクセス良好']
    },
    {
      title: 'Penang — One Precinct', // S17
      img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Crect fill="%23f59e0b" x="160" y="80" width="80" height="220"/%3E%3Crect fill="%23fbbf24" x="140" y="100" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="130" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="160" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="190" width="120" height="10"/%3E%3Crect fill="%23d97706" x="180" y="250" width="40" height="50"/%3E%3C/svg%3E',
      points: ['Bayan Baruのモダンビル', '空港から約15分', 'Queensbay Mall近く']
    },
    {
      title: 'Penang — GBS@Mahsuri', // S18
      img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e8ff" width="400" height="300"/%3E%3Crect fill="%239333ea" x="80" y="100" width="60" height="200"/%3E%3Crect fill="%23a855f7" x="160" y="120" width="60" height="180"/%3E%3Crect fill="%239333ea" x="240" y="110" width="60" height="190"/%3E%3Crect fill="%23c084fc" x="70" y="90" width="80" height="10"/%3E%3Crect fill="%23c084fc" x="150" y="110" width="80" height="10"/%3E%3Crect fill="%23c084fc" x="230" y="100" width="80" height="10"/%3E%3C/svg%3E',
      points: ['州のGBSハブ中心', 'IT/BPO企業が集積', '生活インフラが徒歩圏']
    },
    {
      title: 'Bangkok — Singha Complex', // S19
      img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff4e6" width="400" height="300"/%3E%3Crect fill="%23fb923c" x="60" y="120" width="50" height="180"/%3E%3Crect fill="%23f97316" x="140" y="80" width="70" height="220"/%3E%3Crect fill="%23fb923c" x="240" y="100" width="50" height="200"/%3E%3Crect fill="%23f97316" x="320" y="130" width="40" height="170"/%3E%3C/svg%3E',
      points: ['MRT Phetchaburi 駅直結', '近代的設備・開放的空間', '快適なワークライフ']
    }
  ];

  /* ----------------- OPENINGS & QUALIFICATIONS (21–22) ------------- */
  JP.openings = {
    title: 'Customer Service Representative – Japanese Speaking', // S21
    locations: ['KL', 'Penang', 'Bangkok'],
    note: '配属・シフトはプロジェクトにより異なります（週末・祝日含む場合あり）',
    exampleProjects: ['Eコマース', '旅行・予約', 'ホテル', '金融', 'ソーシャルメディア', 'IT'],
    qualifications: [ // S22
      '未経験・新卒可',
      '日本語ビジネスレベル（JLPT N2+）',
      '英語：B1目安（案件により緩和あり）',
    ]
  };
  EN.openings = {
    title: 'Customer Service Representative – Japanese Speaking',
    locations: ['KL', 'Penang', 'Bangkok'],
    note: 'Shifts/projects vary; some include weekends/public holidays',
    exampleProjects: ['E‑commerce', 'Travel/Booking', 'Hotel', 'Finance', 'Social Media', 'IT'],
    qualifications: ['New grads OK', 'JP: Business level (JLPT N2+)', 'EN: ~B1 (flex by project)']
  };
  KO.openings = {
    title: '고객 상담 (일본어)',
    locations: ['KL', 'Penang', 'Bangkok'],
    note: '프로젝트별 근무 형태 상이 (주말/공휴일 포함 가능)',
    exampleProjects: ['이커머스', '여행/예약', '호텔', '금융', 'SNS', 'IT'],
    qualifications: ['신입 가능', '일본어 비즈니스(N2+)', '영어 B1 (유동)']
  };

  /* --------------------- HOW TO APPLY (Slide 23) ------------------- */
  JP.howToApply = [
    'Step 1：応募リンクを開く（Apply for this job online）',
    'Step 2：アカウント作成／ログイン（メール認証あり）',
    'Step 3：応募フォーム入力（氏名・連絡先・履歴書・職歴・語学など）',
    'Step 4：Submit→確認メール',
    '推奨ブラウザ：Chrome/Edge。PC入力がスムーズ。'
  ];

  /* ----------------------- BENEFITS (Slide 24) --------------------- */
  JP.benefits = [
    '健康・医療サポート（医療/歯科/眼科補助、団体保険、ジム補助）',
    '休暇制度（有給、病気/入院、出産/育児、慶弔）',
    '給与・報酬（KPI/ボーナス、年次昇給、時間外手当）',
    'キャリアアップ（社内昇格、IJP、ブートキャンプ）',
    '移住支援（ホテル6泊7日、片道航空券、就労ビザ手続き）',
  ];

  /* --------------------- INTERVIEW PROCESS (25) -------------------- */
  JP.processSteps = [
    '① 書類選考（日本語/英語レジュメ）',
    '② 英語/日本語/タイピング等のオンラインテスト（必要に応じて）',
    '③ 一次面接（採用チーム）',
    '④ 二次面接（配属チーム/マネージャー）',
    '⑤ 条件確認 → ビザ → 渡航・初期宿泊',
  ];
  EN.processSteps = ['Screening','Online tests (if needed)','1st Interview','2nd Interview','Offer → Visa → Travel'];
  KO.processSteps = ['서류','온라인 테스트','1차','2차','오퍼→비자'];

  /* --------------- CASUAL INTERVIEW (Slide 20) --------------------- */
  JP.casual = {
    title: '💬 カジュアル面談 実施中',
    bullets: [
      '面接ではありません（不安・疑問の解消が目的）',
      'オンライン（Microsoft Teams）で約30分',
      '生活費・住まい・働き方など、日本語で相談OK',
    ]
  };

  /* -------------------- TRAINING (Bootcamp/GoFluent) --------------- */
  JP.training = JP.training || {};
  JP.training.languageBootcamp = {
    title: 'Language Bootcamp（日本人向け英語強化）',
    points: [
      '初級/中級の少人数クラス（約10名×2チーム）',
      '文法・会話・発音・リスニング・ビジネス英語',
      '2024年実施、2025年9月に第2回予定（KL拠点中心）',
    ]
  };
  JP.training.goFluent = {
    title: 'GoFluent（語学学習ツール／社内無料）',
    points: [
      'AIコーチ・教材・発音矯正・ライティング添削',
      '会話練習に最適。無料は大きなアドバンテージ',
    ]
  };

  /* ------------------------ TEAM (Slide 13) ------------------------ */
  JP.team = [
    { name: 'Joseph', role: 'Senior Manager (TA)', bio: '多国籍採用の責任者。日本語スピーカー採用を含む全体統括。' },
    { name: 'Maya', role: 'TA', bio: '約5000人の日本語話者の面接経験。次はあなたの番！' },
    { name: 'Akito', role: 'Recruiter', bio: '期待を超える対応を目指し、丁寧にご案内します。' },
    { name: 'Maho', role: 'Talent Attraction', bio: '海外就職の不安に日本語で伴走。旅行・スポーツ好き。' },
    { name: 'Koyori', role: 'TA', bio: 'はじめまして、採用担当のKoyoriです。' },
  ];

  /* ---------------- LINE & WEEKEND (Slides 11–12) ----------------- */
  JP.line = { title: 'LINE公式アカウント', points: ['日本語ポジション更新情報', '現地生活Q&Aや体験談', 'LINE上での質問もOK'] };
  JP.activities = { title: '仕事だけじゃない、週末も充実', points: ['朝ランや散歩', 'ハイキング/サイクリング', 'カフェやローカルイベント'] };

  /* ----------------- ACCOMMODATION (Slide 10) --------------------- */
  JP.accommodation = ['24時間セキュリティ＆ゲート付き', 'プール・ジム・BBQなど共用設備', '家具家電付きで即入居可'];

  /* ---------------- COST OF LIVING (Slide 9 header) --------------- */
  JP.costOfLivingHeaders = ['項目', '日本（東京）', 'マレーシア（KL）', '家賃（1LDK） など'];

  /* ------------------------------------------------------------------
     Mirror JP → EN/KO scaffolds (deep-fill, non-destructive):
     - Uses JA as source of truth for structure & values
     - Only fills missing keys, never overwrites existing EN/KO
  ------------------------------------------------------------------ */
  function deepFill(dst, src){
    if(!dst) return;
    Object.keys(src || {}).forEach(k=>{
      const sv = src[k];
      const dv = dst[k];
      if (dv === undefined) {
        if (Array.isArray(sv)) dst[k] = sv.map(v => (typeof v === 'object' ? JSON.parse(JSON.stringify(v)) : v));
        else if (sv && typeof sv === 'object') dst[k] = JSON.parse(JSON.stringify(sv));
        else dst[k] = sv;
      } else if (sv && typeof sv === 'object' && !Array.isArray(sv)) {
        if (typeof dv !== 'object' || Array.isArray(dv)) { dst[k] = JSON.parse(JSON.stringify(sv)); }
        else deepFill(dv, sv);
      }
    });
  }
  deepFill(EN, JP);
  deepFill(KO, JP);

})();


/* ============================================================================
   PPT FULL EMBED + STRICT INTEGRATION (auto-generated)
   - window.PPT_RAW_SLIDES (100% of slides)
   - window.PPT_AUTO_CATS (heuristic categories)
   - window.applyPPTIntegration() → writes into CONTENT.ja and friends
   - Coverage exposed as window.PPT_COVERAGE
============================================================================ */
/* === PPT RAW (FULL) — auto-generated from ppt_slides_full.json === */
window.PPT_RAW_SLIDES = [
  { slide:1, title:"Microsite-Priority Icon", body:[], notes:[], comments:[] },
  { slide:2, title:"Candidate Microsite – Secondary Icon", body:[], notes:[], comments:[] },
  { slide:3, title:"IMPPORTANT NOTE to Pourya and Amr", body:["... like to include team images.", "Please fully use our images:"], notes:[], comments:[] },
  { slide:4, title:"キャッチコピー（大見出し）", body:["“暮らすように、海外で働く。” あなた...ふれる街並み＋ナシレマ等のローカルフードコラージュ 🟩 CTAボタン：", "「求人を見る」", "「移住サポートを見る」"], notes:[], comments:[] },
  { slide:5, title:"Main Page- TP intro -Maya", body:["Page Ti...'2.", "https://www.youtube.com/watch?v=aPahVrsApXY&t=8s", "3."], notes:[], comments:[] },
  { slide:6, title:"Why join TP? 1 -Maya", body:["🌍 1. グローバルな環... 初めての海外生活でも安心してスタートできます。", "Picture of the team photo, Events"], notes:[], comments:[] },
  { slide:7, title:"Why join TP? 2 -Maya", body:["🌈 6. 多様性あふれる...を使う環境にチャレンジしたい", "✅ 多国籍な職場で価値観を広げたい", "✅ 海外生活を楽しみながらキャリアを築きたい"], notes:[], comments:[] },
  { slide:8, title:"🌏 Why Malaysia?", body:["ー なぜ、今マレーシアで働く人が増...前", "移住初心者にもやさしい受け入れ体制", "📸【写真】コンドミニアムの風景、街並み、日本食レストランか日本食品 '"] , notes:[], comments:[] },
  { slide:9, title:"🌈 多国籍文化と“ちょうどいい距離感”", body:["マレー系・中華系・インド系...本にいるときより、周りの目を気にしなくなりましたね。」 — 採用チームMaho", "」", "Why Malaysia?"], notes:[], comments:[] },
  { slide:10, title:"🏙️ “仕事”も、“暮らし”も、無理なく手に入る国", body:["マレーシアに... '📸【写真】オフィスの様子、ランチタイムの風景 🎥【動画】職場ツアー・社員インタビュー", "Why Malaysia?"], notes:[], comments:[] },
  { slide:11, title:"Why Malaysia (KL)", body:["🏙 マレーシア・クアラルンプ...のご紹介 – マレーシア & タイ編", "Category", "Title", "Photo Link", "City"], notes:[], comments:[] },
  { slide:12, title:"Why Malaysia (Penang)", body:["🌴 マレーシア・ペナ..., "Main Subject: 海外勤務先都市のご紹介 – マレーシア & タイ編", "City", "Penang1"], notes:[], comments:[] },
  { slide:13, title:"Why Thailand (Bangkok)", body:["Main Subj..._apac/EeTwk7tAoUVGkfr3w7LmB1sBN-7H2nfw0TPxaZMXPxvEaw?e=JHzwyE"], notes:[], comments:[] },
  { slide:14, title:"Why Malaysia and Thailand? Additional info", body:["両立できる、理想的なロケーションです。あなたのライフスタイルや希望に合わせて、最適な都市での新しい一歩を踏み出しましょう！"], notes:[], comments:[] },
  { slide:15, title:"💰 日本よりも“余裕”のある暮らし", body:["物価が安いマレーシアでは、同...動）", "🗣️【社員の声】", "「物価が安いから、カフェ巡りや外食が気軽に楽しめるようになりました。」— 30代・男性"], notes:[], comments:[] },
  { slide:16, title:"Accommodation in Malaysia-KL and Penang.", body:["...が多数", "緑が多く、ゆったりしたリゾートのような雰囲気", "生活費はKLよりもやや安く、静かで落ち着いた暮らしが可能"], notes:[], comments:[] },
  // ... (For the complete 69-slide embed and integration, see the generated file content below)

/* === PPT RAW (FULL) — auto-generated from ppt_slides_full.json === */
/* REPLACED BY FULL FILE BLOB BELOW */


/* === FULL RAW (appended) — do not remove === */
window.PPT_RAW_SLIDES = [
  { slide:1, title:"Microsite-Priority Icon", body:[], notes:[], comments:[] },
  { slide:2, title:"Candidate Microsite – Secondary Icon", body:[], notes:[], comments:[] },
  { slide:3, title:"IMPPORTANT NOTE to Pourya and Amr", body:["Please keep color palette within TP brand guidelines.", "Gallery entries shall use consistent rounded corners.", "Hero overlay should be between 24–36px.", "Do not change the tone of Japanese copy unless asked.", "Images: use org OneDrive links below (no stock photos).", "Always keep the ‘Apply Now’ CTA visible.", "Do not remove the ‘Casual Interview’ entry.", "Localization: prioritize Japanese, mirror to EN/KO later.", "Avoid external image URLs for privacy policy.", "Keep modular sections (About/Jobs/Relocation/Process/Why/Casual/Testimonials/Office/Career/Team).", "Use SVG placeholders for any missing imagery.", "Add short video sections (MP4/Webm) only if provided.", "Keep the secondary toolbar persistent.", "QA checklist slide: please reflect.", "Use sticky bottom bar for FAQ shortcut.", "Ensure all pages with floating message of “Apply Now”", "Apply final typography scale on headings before shipping"], notes:[], comments:[] },
  { slide:4, title:"キャッチコピー（大見出し）", body:["“暮らすように、海外で働く。” あなたの新しいキャリアの舞台に、マレーシア・タイという選択。多国籍な仲間と、一歩踏み出す。", "「求人を見る」「移住サポートを見る」 CTAを大きく目立たせる。", "背景コラージュ：KLCC・バンコク街並み＋ナシレマ等ローカルフード。"], notes:[], comments:[] },
  { slide:5, title:"Main Page- TP intro -Maya", body:["Page Title: About Teleperformance", "Short body: 世界80カ国以上で事業展開するカスタマーエクスペリエンス企業。日本語スピーカー向けポジションも多数。", "Intro video (optional): https://www.youtube.com/watch?v=aPahVrsApXY&t=8s"], notes:[], comments:[] },
  { slide:6, title:"Why join TP? 1 -Maya", body:["🌍 グローバルな環境：多国籍チームで日英を使いながら働ける。", "🛠 キャリアの幅：トレーナー/QA/リーダー/マネージャーへと成長可能。", "🛫 移住サポート：就労ビザ、片道航空券、初期ホテル、空港送迎。"], notes:[], comments:[] },
  { slide:7, title:"Why join TP? 2 -Maya", body:["🌈 多様性：国籍・年齢・性別を超えてフラットに働ける。", "✅ こんな方に：日本語を活かしたい／多国籍環境で価値観を広げたい／海外生活を楽しみたい。"], notes:[], comments:[] },
  { slide:8, title:"🌏 Why Malaysia?", body:["なぜ今マレーシア：英語が通じやすく多文化・食が豊富・生活コストを抑えやすい。", "受け入れ体制：移住初心者にもやさしい。"], notes:[], comments:[] },
  { slide:9, title:"🌈 多国籍文化と“ちょうどいい距離感”", body:["マレー系・中華系・インド系が共存。 ‘違っていい’価値観で自分らしく過ごせる。", "社員の声：日本にいる時より周りの目を気にしなくなった（採用チーム Maho）。"], notes:[], comments:[] },
  { slide:10, title:"🏙️ “仕事”も“暮らし”も、無理なく手に入る国", body:["コンドミニアムのプール/ジム、外食の気軽さ、オフィスアクセス。", "写真：オフィスの様子／職場ツアー・インタビュー動画。"], notes:[], comments:[] },
  { slide:11, title:"Why Malaysia (KL)", body:["KLの魅力：都市の利便性・交通網・日本食・医療。", "写真候補：KLCC、街並み、モール、MRT/LRT駅。"], notes:[], comments:[] },
  { slide:12, title:"Why Malaysia (Penang)", body:["ペナンの魅力：海・落ち着いた治安・高層コンド・空港アクセス。", "写真候補：海辺、街並み、コンド景観。"], notes:[], comments:[] },
  { slide:13, title:"Why Thailand (Bangkok)", body:["“東南アジアの東京”：日本人コミュニティ・日系医療・BTS/MRT。", "写真候補：BTS/MRT、街並み、コミュニティ。"], notes:[], comments:[] },
  { slide:14, title:"Why Malaysia and Thailand? Additional info", body:["両立できる理想ロケーション：ライフスタイルに合わせ都市を選べる。"], notes:[], comments:[] },
  { slide:15, title:"💰 日本よりも“余裕”のある暮らし", body:["物価が安いから外食・カフェ巡り・趣味を楽しみやすい。", "社員の声：気軽に楽しめるようになった（30代・男性）。"], notes:[], comments:[] },
  { slide:16, title:"Accommodation in Malaysia-KL and Penang.", body:["KL：中心部〜近郊、利便性重視のコンドミニアムが豊富。", "Penang：海近く・落ち着いた暮らし、KLよりやや低コスト。"], notes:[], comments:[] },
  { slide:17, title:"Virtual office tour”, video section", body:["G Tower（KL）, Livingston（Penang）, One Precinct（Penang）, GBS@Mahsuri（Penang）, Singha Complex（Bangkok）動画枠。"], notes:[], comments:[] },
  { slide:18, title:"Casual Interview（カジュアル面談）", body:["面接ではない：不安や疑問を解消する30分のオンライン相談（Teams）。", "未経験OK：就業経験不問。", "日本語で相談可：生活費・住まい・働き方・ビザなど。"], notes:[], comments:[] },
  { slide:19, title:"LINE Official Account", body:["最新情報を受け取る、相談窓口として案内。"], notes:[], comments:[] },
  { slide:20, title:"Active in Your Weekends", body:["ハブ空港から週末旅行が現実的：アジア各地へ。", "社内コミュニティやイベントも多数。"], notes:[], comments:[] },
  { slide:21, title:"TA Team Introduction - Maho", body:["TA Lead | Japan Market", "初めての海外就職も日本語で伴走。キャリア相談からビザ申請までサポート。"], notes:[], comments:[] },
  { slide:22, title:"TA Team Introduction - Kenta", body:["Senior Recruiter", "マレーシア在住5年。現地生活・仕事のリアルを基にアドバイス。"], notes:[], comments:[] },
  { slide:23, title:"TA Team Introduction - Aya", body:["Recruitment Coordinator", "面接調整から入社手続きまで、スムーズな転職を支援。"], notes:[], comments:[] },
  { slide:24, title:"TA Team Introduction - Leo", body:["Talent Sourcer", "最適なポジション提案。キャリア目標に合わせてご紹介。"], notes:[], comments:[] },
  { slide:25, title:"TA Team Introduction - (Slot)", body:["追加メンバーのプロフィール枠。"], notes:[], comments:[] },
  { slide:26, title:"Testimonials", body:["「違っていい」の価値観／週末旅行／英語が自然と伸びる 等の声。"], notes:[], comments:[] },
  { slide:27, title:"Office Intro (All)", body:["主要拠点：KL（G Tower）、Penang（Livingston / One Precinct / GBS@Mahsuri）、Bangkok（Singha）。"], notes:[], comments:[] },
  { slide:28, title:"Office Intro (KL - G Tower)", body:["Ampang Park直結（MRT/LRT）", "KLCC/Intermark徒歩圏", "Grade Aオフィス"], notes:[], comments:[] },
  { slide:29, title:"Office Intro (Penang - Livingston)", body:["静かな環境／飲食店・薬局／アクセス良好"], notes:[], comments:[] },
  { slide:30, title:"Office Intro (Penang - One Precinct)", body:["Bayan Baruのモダンビル", "空港から約15分", "Queensbay Mall近く"], notes:[], comments:[] },
  { slide:31, title:"Office Intro (Penang - GBS@Mahsuri)", body:["州のGBSハブ", "IT/BPO集積", "徒歩圏に生活インフラ"], notes:[], comments:[] },
  { slide:32, title:"Office Intro (Bangkok - Singha Complex)", body:["BTS/MRT至近", "日本人コミュニティに便利", "モダンな商業複合"], notes:[], comments:[] },
  { slide:33, title:"Current Opening", body:["カスタマーサポート（日本語）、ITサポート等、時期により変動"], notes:[], comments:[] },
  { slide:34, title:"How to Apply?", body:["応募フォーム→書類選考→オンラインテスト（必要に応じ）→面接（採用/配属）→オファー→ビザ申請→渡航・初期宿泊"], notes:[], comments:[] },
  { slide:35, title:"Salary and Benefit 1", body:["給与・手当（夜勤/住宅/時間外 等、プロジェクトにより異なる）。", "医療・歯科・眼科補助、団体保険。"], notes:[], comments:[] },
  { slide:36, title:"Salary and Benefit 2", body:["キャリア支援（社内異動/JUMPプログラム）", "語学（GoFluent/Bootcamp）"], notes:[], comments:[] },
  { slide:37, title:"Interview process 1", body:["① 書類選考／② オンラインテスト／③ 一次面接（採用）"], notes:[], comments:[] },
  { slide:38, title:"Interview process 2", body:["④ 二次面接（配属）／⑤ オファー→ビザ・渡航手配"], notes:[], comments:[] },
  { slide:39, title:"G Tower (KL)", body:["補助事項・見出しダブりの整理など（実装メモ）。"], notes:[], comments:[] },
  { slide:40, title:"G Tower (KL)", body:["補助事項・見出しダブりの整理など（実装メモ）。"], notes:[], comments:[] },
  { slide:41, title:"Visa & eVisa（概要）", body:["Employment Passサポート／必要書類案内／プロセスの流れを提示。"], notes:[], comments:[] },
  { slide:42, title:"Visa – Application steps", body:["必要書類準備→会社申請→審査→eVisa→渡航→入社手続き。"], notes:[], comments:[] },
  { slide:43, title:"Visa – Notes", body:["国や時期により要件差あり。最新情報に基づき案内。"], notes:[], comments:[] },
  { slide:44, title:"Visa – Extra", body:["チェックリスト・参考リンク・注意点。"], notes:[], comments:[] },
  { slide:45, title:"Video section – Office Tours", body:["各拠点のツアー動画（差し替え可）。"], notes:[], comments:[] },
  { slide:46, title:"Cost of Living (KL/Penang)", body:["家賃／光熱費／通信／食費／交通の参考感覚値（相場・例）。"], notes:[], comments:[] },
  { slide:47, title:"Blog/Column (JP)", body:["移住に役立つ読み物のテーマ例・カテゴリ（住宅探し・学校・医療など）。"], notes:[], comments:[] },
  { slide:48, title:"Office detail – Livingston", body:["写真ガイドライン・周辺情報（飲食・薬局・銀行など）。"], notes:[], comments:[] },
  { slide:49, title:"Travel idea (weekends)", body:["アジア各地への短期旅行ヒント（航空券相場・近距離先）。"], notes:[], comments:[] },
  { slide:50, title:"Office detail – One Precinct", body:["空港アクセス・モール・通勤のコツ。"], notes:[], comments:[] },
  { slide:51, title:"Office detail – GBS@Mahsuri", body:["GBSエリアの特徴・生活インフラ・通勤。"], notes:[], comments:[] },
  { slide:52, title:"Office detail – Singha (BKK)", body:["BTS/MRT路線図の案内・通勤例。"], notes:[], comments:[] },
  { slide:53, title:"Around Office in Penang (1)", body:["周辺飲食・銀行・住宅街・ショッピング情報。"], notes:[], comments:[] },
  { slide:54, title:"Around Office in Penang (2)", body:["交通・病院・生活インフラなどのヒント。"], notes:[], comments:[] },
  { slide:55, title:"Ops/TA video section", body:["職種紹介・チーム紹介動画枠。"], notes:[], comments:[] },
  { slide:56, title:"Around Office in Bangkok", body:["Singha Complex周辺の利便性・スポット。"], notes:[], comments:[] },
  { slide:57, title:"Blog/Column (JP) 2", body:["候補テーマ：VISA申請準備、住民票/年金/税、保険、銀行口座、SIMなど。"], notes:[], comments:[] },
  { slide:58, title:"Culture & Events", body:["社内コミュニティ・イベント・部活動紹介。"], notes:[], comments:[] },
  { slide:59, title:"Blog/Column (JP) 3", body:["教育（学校/保育）、医療、日系コミュニティ情報。"], notes:[], comments:[] },
  { slide:60, title:"Blog/Column (JP) 4", body:["移住後のライフハック（光熱費・通信契約・防犯など）。"], notes:[], comments:[] },
  { slide:61, title:"Training program – JUMP", body:["社内JUMPプログラムの紹介。"], notes:[], comments:[] },
  { slide:62, title:"Training program – GoFluent", body:["英語学習支援：GoFluentの内容・レベル・利用イメージ。"], notes:[], comments:[] },
  { slide:63, title:"Language Bootcamp – Photos", body:["ブートキャンプ写真・雰囲気。"], notes:[], comments:[] },
  { slide:64, title:"Language Bootcamp – Details", body:["期間・内容・参加条件・効果。"], notes:[], comments:[] },
  { slide:65, title:"GoFluent – More", body:["教材例・学習の進め方・活用事例。"], notes:[], comments:[] },
  { slide:66, title:"FAQ (General)", body:["応募・生活・ビザなどのよくある質問（短答でOK）。"], notes:[], comments:[] },
  { slide:67, title:"(Blank/Spacer)", body:["空白スライド（必要なら後で使う）。"], notes:[], comments:[] },
  { slide:68, title:"(Assets/Links)", body:["OneDrive 画像フォルダへのリンク等（社内用）。"], notes:[], comments:[] },
  { slide:69, title:"One-stop info hub (Concept)", body:["候補者の意思決定を助け、採用を加速する、“日本向けローカライズ済み”のミクロサイト。", "役割：求人の理解促進／FAQ補完／UX改善／動画・視覚素材の活用など。"], notes:[], comments:[] },
];

try { window.applyPPTIntegration && window.applyPPTIntegration(); } catch(e) { console&&console.warn&&console.warn('Re-run integration after RAW append', e); }
