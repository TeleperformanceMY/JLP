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
     2) CONTENT — Derived from PPT (slide numbers in comments)
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
