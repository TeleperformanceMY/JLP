/* ============================================================================
   TP Candidate Microsite — translations.js (Consolidated & Expanded)
   Purpose / 目的:
     - Provide *all* UI strings (I18N) and dynamic page content (CONTENT)
     - Centralize ChatGPT prompts per language
     - Initialize "Ask ChatGPT" prompt and copy/UX on load
     - 全てのUI文字列（I18N）と動的ページコンテンツ（CONTENT）を提供
   Notes / 注意:
     - Default language = Japanese (ja) / デフォルト言語 = 日本語 (ja)
     - Route-based language handled by app.js (/en, /jp, /ko)
     - This file intentionally verbose so we DO NOT shorten your source
     - NO EXTERNAL IMAGES - only SVG shapes and icons / 外部画像なし - SVG形状とアイコンのみ
   Updated: 2025-08-25
   更新: 2025-08-25 - 完全な翻訳とチームデータを追加 / Added complete translations and team data
============================================================================ */

(function () {
  /* ------------------------------------------------------------------------
     0) Language metadata (used by header multi-language buttons)
     言語メタデータ（ヘッダーの多言語ボタンで使用）
  -------------------------------------------------------------------------*/
  const LANGS = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
  ];

  /* ------------------------------------------------------------------------
     1) I18N — UI strings, headings, CTAs (do not remove keys)
     UI文字列、見出し、CTA（キーを削除しないでください）
  -------------------------------------------------------------------------*/
  const I18N = {
    /* ========================= JAPANESE (default) ======================== */
    ja: {
      // Brand & Header / ブランド＆ヘッダー
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

      // Drawer (mirror of nav, some pages add more items)
      'drawer.about': '会社紹介',
      'drawer.jobs': '求人・給与/福利厚生',
      'drawer.relocation': '移住・ビザ',
      'drawer.process': '面接プロセス',
      'drawer.why': 'マレーシア・タイの魅力',
      'drawer.casual': 'カジュアル面談',
      'drawer.testimonials': '社員の声',
      'drawer.office': '働く環境',
      'drawer.career': 'キャリア・語学',
      'drawer.team': '採用チーム',
      'drawer.faq': 'FAQ',

      // Hero
      'hero.eyebrow': '暮らすように、海外で働く。',
      'hero.leading': 'あなたの新しいキャリアの舞台に、',
      'hero.lead':
        '多国籍な環境と、日本語を活かせる仕事。就労ビザ／移住サポートで海外就職も安心。',
      heroTexts: [
        'マレーシア・タイという選択。',
        'グローバルなキャリア。',
        '安心の移住サポート。',
      ],

      // Stats
      'stat.countries': '拠点国',
      'stat.people': '従業員',
      'stat.jp_roles': '日本語ポジション',
      'stat.jp_roles_n': '多数',

      // Priority (icon gallery)
      'priority.title': 'TPが選ばれる理由',
      'priority.sub': 'よく見る項目をすぐに開けます',
      'priority.gallery.title': '優先メニュー（見やすいギャラリー）',
      'priority.gallery.sub': '9つの主要トピックをタイルで表示',
      'prio.about.t': 'About TP',
      'prio.about.d': 'テレパフォーマンスとは',
      'prio.jobs.t': '求人を見る',
      'prio.jobs.d': '給与・福利厚生',
      'prio.relo.t': '移住・ビザサポート',
      'prio.relo.d': 'EP申請・渡航・初期宿泊',
      'prio.process.t': '面接プロセス',
      'prio.process.d': 'オンラインで完結',
      'prio.why.t': 'マレーシア・タイの魅力',
      'prio.why.d': '暮らし・文化・旅のハブ',
      'prio.casual.t': 'カジュアル面談',
      'prio.casual.d': 'まずは気軽に相談',
      'prio.testimonials.t': '社員の声',
      'prio.testimonials.d': '体験談・インタビュー',
      'prio.office.t': '働く環境',
      'prio.office.d': 'オフィス&バーチャルツアー',
      'prio.career.t': 'キャリアパス・昇進',
      'prio.career.d': '語学/研修（GoFluent等）',

      // Secondary (full-width grid, smaller than priority)
      'secondary.title': '生活情報・カルチャー・サポート',
      'secondary.sub': '暮らしに役立つ情報もまとめました',
      'sec.cost.t': '生活コスト',
      'sec.cost.d': '食事・交通・住まい',
      'sec.team.t': '採用チーム',
      'sec.team.d': 'Meet the TA Team',
      'sec.area.t': '周辺環境',
      'sec.area.d': 'オフィス周りの便利情報',
      'sec.blog.t': 'ブログ・コラム',
      'sec.blog.d': '役立つ読み物',
      'sec.line.t': 'LINE公式アカウント',
      'sec.line.d': '最新情報を受け取る',
      'sec.culture.t': 'イベント・カルチャー',
      'sec.culture.d': '社内コミュニティ',
      'sec.faq.t': 'FAQ・よくある質問',
      'sec.faq.d': '応募・生活・ビザ',
      'sec.contact.t': 'お問い合わせ',
      'sec.contact.d': 'ご質問・面談予約',

      // Benefits highlight (carousel controls labels present; arrows are in HTML/CSS)
      'benefits.title': '福利厚生ハイライト',
      'benefits.sub': '入社前後のサポートをまとめました',

      // Ask ChatGPT
      'chatgpt.title': 'Ask ChatGPT（TPについて質問）',
      'chatgpt.sub': '下のプロンプトをコピーして、ChatGPTに貼り付けてください。',
      'chatgpt.copy': 'プロンプトをコピー',
      'chatgpt.open': 'ChatGPT を開く',
      'chatgpt.note':
        '※ WebView が使えない場合の代替。言語を切り替えるとプロンプトも切り替わります。',

      // Footer
      'footer.about': '会社紹介',
      'footer.privacy': 'プライバシー',
      'footer.contact': 'お問い合わせ',
      'bar.faq': 'FAQ',

      // Buttons / CTAs
      'cta.apply': 'ご応募はこちら',
      'cta.viewJobs': '求人を見る',
      'cta.relocation': '移住サポート',
      'cta.casual': 'カジュアル面談',
      'cta.learnMore': 'さらに見る',
      'cta.open': '開く',
      'cta.copy': 'コピー',
      'cta.contact': '問い合わせ',

      // Misc / Contact
      contactThanks: (name) =>
        `${name || '応募者'} さん、ありがとうございます！メッセージを受け取りました。`,
    },

    /* ============================== ENGLISH ============================== */
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

      'drawer.about': 'About',
      'drawer.jobs': 'Jobs & Benefits',
      'drawer.relocation': 'Relocation & Visa',
      'drawer.process': 'Interview Process',
      'drawer.why': 'Why Malaysia & Thailand',
      'drawer.casual': 'Casual Interview',
      'drawer.testimonials': 'Testimonials',
      'drawer.office': 'Office & Workplace',
      'drawer.career': 'Career & Language',
      'drawer.team': 'TA Team',
      'drawer.faq': 'FAQ',

      'hero.eyebrow': 'Work abroad like you live here.',
      'hero.leading': 'Your next career stage:',
      'hero.lead':
        'Multinational teams and Japanese-language roles. With visa & relocation support, getting started overseas is smooth.',
      heroTexts: [
        'Malaysia & Thailand.',
        'Global career opportunities.',
        'Trusted relocation support.',
      ],

      'stat.countries': 'Countries',
      'stat.people': 'Employees',
      'stat.jp_roles': 'JP-speaking roles',
      'stat.jp_roles_n': 'Many',

      'priority.title': 'Why candidates choose TP',
      'priority.sub': 'Jump into the most-used sections',
      'priority.gallery.title': 'Priority (Visual Gallery)',
      'priority.gallery.sub': 'Nine key topics as photo tiles',
      'prio.about.t': 'About TP',
      'prio.about.d': 'Who we are',
      'prio.jobs.t': 'Open Jobs',
      'prio.jobs.d': 'Salary & Benefits',
      'prio.relo.t': 'Relocation & Visa',
      'prio.relo.d': 'EP, flights, and landing',
      'prio.process.t': 'Interview Process',
      'prio.process.d': 'Online & simple',
      'prio.why.t': 'Why Malaysia & Thailand',
      'prio.why.d': 'Lifestyle, culture, travel hub',
      'prio.casual.t': 'Casual Interview',
      'prio.casual.d': 'Talk with us first',
      'prio.testimonials.t': 'Testimonials',
      'prio.testimonials.d': 'Stories & interviews',
      'prio.office.t': 'Work Environment',
      'prio.office.d': 'Office & Virtual Tour',
      'prio.career.t': 'Career Growth',
      'prio.career.d': 'Language training (GoFluent)',

      'secondary.title': 'Explore more',
      'secondary.sub': 'Living info, culture, and updates',
      'sec.cost.t': 'Cost of Living',
      'sec.cost.d': 'Food, transport, housing',
      'sec.team.t': 'Meet the TA Team',
      'sec.team.d': 'Recruiting team',
      'sec.area.t': 'Area Around Office',
      'sec.area.d': 'Conveniences & tips',
      'sec.blog.t': 'Blog & Articles',
      'sec.blog.d': 'Helpful reads',
      'sec.line.t': 'LINE Updates',
      'sec.line.d': 'Get the latest',
      'sec.culture.t': 'Culture & Events',
      'sec.culture.d': 'Communities at TP',
      'sec.faq.t': 'FAQ',
      'sec.faq.d': 'Application, living, visas',
      'sec.contact.t': 'Contact',
      'sec.contact.d': 'Questions & interviews',

      'benefits.title': 'Benefits Highlights',
      'benefits.sub': 'Support you can count on before and after joining',

      'chatgpt.title': 'Ask ChatGPT (About TP)',
      'chatgpt.sub': 'Copy the prompt below and paste it into ChatGPT.',
      'chatgpt.copy': 'Copy Prompt',
      'chatgpt.open': 'Open ChatGPT',
      'chatgpt.note':
        'If WebView is unavailable, use this. Switching languages updates the prompt.',

      'footer.about': 'About',
      'footer.privacy': 'Privacy',
      'footer.contact': 'Contact',
      'bar.faq': 'FAQ',

      'cta.apply': 'Apply Now',
      'cta.viewJobs': 'View Jobs',
      'cta.relocation': 'Relocation Support',
      'cta.casual': 'Book a Casual Chat',
      'cta.learnMore': 'Learn More',
      'cta.open': 'Open',
      'cta.copy': 'Copy',
      'cta.contact': 'Contact',

      contactThanks: (name) =>
        `Thanks, ${name || 'Candidate'}! We received your message.`,
    },

    /* =============================== KOREAN ============================== */
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

      'drawer.about': '회사 소개',
      'drawer.jobs': '채용 정보・급여/복리후생',
      'drawer.relocation': '이주・비자',
      'drawer.process': '면접 과정',
      'drawer.why': '말레이시아・태국의 매력',
      'drawer.casual': '캐주얼 면담',
      'drawer.testimonials': '직원 후기',
      'drawer.office': '오피스 & 근무환경',
      'drawer.career': '커리어・어학',
      'drawer.team': '채용팀',
      'drawer.faq': 'FAQ',

      'hero.eyebrow': '생활하듯, 해외에서 일하기.',
      'hero.leading': '당신의 새로운 커리어 무대:',
      'hero.lead':
        '다국적 환경과 일본어를 활용할 수 있는 일자리. 취업 비자/이주 지원으로 해외 취업도 안심.',
      heroTexts: ['말레이시아・태국이라는 선택.', '글로벌 커리어.', '안심 이주 지원.'],

      'stat.countries': '거점국',
      'stat.people': '직원',
      'stat.jp_roles': '일본어 포지션',
      'stat.jp_roles_n': '다수',

      'priority.title': 'TP가 선택되는 이유',
      'priority.sub': '자주 보는 항목을 바로 열기',
      'priority.gallery.title': '우선 메뉴 (갤러리)',
      'priority.gallery.sub': '9개 주요 주제를 타일로 표시',
      'prio.about.t': 'About TP',
      'prio.about.d': '텔레퍼포먼스란',
      'prio.jobs.t': '채용 정보 보기',
      'prio.jobs.d': '급여・복리후생',
      'prio.relo.t': '이주・비자 지원',
      'prio.relo.d': 'EP 신청・항공편・초기 숙박',
      'prio.process.t': '면접 과정',
      'prio.process.d': '온라인으로 완결',
      'prio.why.t': '말레이시아・태국의 매력',
      'prio.why.d': '생활・문화・여행 허브',
      'prio.casual.t': '캐주얼 면담',
      'prio.casual.d': '먼저 편하게 상담',
      'prio.testimonials.t': '직원 후기',
      'prio.testimonials.d': '체험담・인터뷰',
      'prio.office.t': '근무 환경',
      'prio.office.d': '오피스 & 가상 투어',
      'prio.career.t': '커리어 패스・승진',
      'prio.career.d': '어학/연수 (GoFluent 등)',

      'secondary.title': '생활 정보・문화・지원',
      'secondary.sub': '생활에 유익한 정보 모음',
      'sec.cost.t': '생활비',
      'sec.cost.d': '식사・교통・주거',
      'sec.team.t': '채용팀 소개',
      'sec.team.d': 'Meet the TA Team',
      'sec.area.t': '주변 환경',
      'sec.area.d': '오피스 주변 편의 정보',
      'sec.blog.t': '블로그・칼럼',
      'sec.blog.d': '유용한 읽을거리',
      'sec.line.t': 'LINE 공식 계정',
      'sec.line.d': '최신 정보 받기',
      'sec.culture.t': '이벤트・문화',
      'sec.culture.d': '사내 커뮤니티',
      'sec.faq.t': 'FAQ',
      'sec.faq.d': '지원・생활・비자',
      'sec.contact.t': '문의하기',
      'sec.contact.d': '질문・면담 예약',

      'benefits.title': '복리후생 하이라이트',
      'benefits.sub': '입사 전후로 든든한 지원',

      'chatgpt.title': 'Ask ChatGPT (TP에 대해 질문)',
      'chatgpt.sub': '아래 프롬프트를 복사해 ChatGPT에 붙여넣어 주세요.',
      'chatgpt.copy': '프롬프트 복사',
      'chatgpt.open': 'ChatGPT 열기',
      'chatgpt.note':
        'WebView를 사용할 수 없는 경우 대체. 언어를 바꾸면 프롬프트도 바뀝니다.',

      'footer.about': '회사 소개',
      'footer.privacy': '개인정보',
      'footer.contact': '문의하기',
      'bar.faq': 'FAQ',

      'cta.apply': '지원하기',
      'cta.viewJobs': '채용 정보 보기',
      'cta.relocation': '이주 지원',
      'cta.casual': '캐주얼 면담 예약',
      'cta.learnMore': '자세히 보기',
      'cta.open': '열기',
      'cta.copy': '복사',
      'cta.contact': '문의',

      contactThanks: (name) => `${name || '지원자'} 님, 감사합니다！메시지를 받았습니다.`,
    },
  };

  /* ------------------------------------------------------------------------
     2) CONTENT — dynamic page data rendered by app.js
        - Keep all sections you already use; add more so nothing breaks
        - Japanese is the default & richest
        - NO EXTERNAL IMAGES - only SVG data URIs / 外部画像なし - SVGデータURIのみ
  -------------------------------------------------------------------------*/
  const CONTENT = {
    links: {
      apply:
        'https://careerseng-teleperformance.icims.com/jobs/49026/customer-service-representative---japanese-speaking-%28kl%29/job?mode=job&iis=LANDINGPAGE',
      casual: 'https://forms.office.com/e/2UvpbweQww',
      line: 'https://line.me/R/ti/p/@286nmdsd?from=page&searchId=286nmdsd',
    },

    /* ========================= 日本語 (default) ========================= */
    ja: {
      // "Why" overview blocks
      why1: [
        { t: '🌍 グローバルな環境でレベルアップ', d: '英語・異文化理解が日常で鍛えられる国際チーム。' },
        { t: '🗣️ 日本語ポジションが豊富', d: '英語に不安があっても日本語中心で安心スタート。' },
        { t: '👥 日本人サポートの安心感', d: '生活も仕事も日本語で相談できる体制。' },
      ],
      why2: [
        { t: '💼 実力次第で早期昇進も', d: 'トレーナー/QA/リーダー/マネージャーへ多彩なキャリア。' },
        { t: '✈️ ビザ・渡航・宿泊サポート', d: 'EP申請代行、片道航空券、初期ホテル、空港送迎。' },
        { t: '🌈 多様性がベースのカルチャー', d: '国籍・性別・年齢を超えてフラットに働ける。' },
      ],

      // Cities - using SVG icons instead of external images / 外部画像の代わりにSVGアイコンを使用
      cities: [
        {
          id: 'kl',
          title: 'クアラルンプール（KL）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f2ff" width="400" height="300"/%3E%3Crect fill="%2360a5fa" x="50" y="150" width="60" height="150"/%3E%3Crect fill="%233b82f6" x="130" y="100" width="80" height="200"/%3E%3Crect fill="%2360a5fa" x="230" y="120" width="60" height="180"/%3E%3Crect fill="%233b82f6" x="310" y="140" width="50" height="160"/%3E%3Cpath fill="%23fbbf24" d="M0 250h400v50H0z"/%3E%3Ccircle fill="%23f59e0b" cx="350" cy="50" r="30"/%3E%3C/svg%3E',
          desc: '都市の利便性 × 多文化の共存。日本食・病院・学校・交通網も充実で安心。',
        },
        {
          id: 'penang',
          title: 'ペナン（Penang）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f7fa" width="400" height="300"/%3E%3Cpath fill="%2322d3ee" d="M0 200c50-20 100-30 150-20s100 30 150 20 100-30 100-30v130H0z"/%3E%3Crect fill="%2367e8f9" x="100" y="180" width="40" height="120"/%3E%3Crect fill="%2306b6d4" x="180" y="160" width="50" height="140"/%3E%3Crect fill="%2367e8f9" x="260" y="170" width="40" height="130"/%3E%3Ccircle fill="%23fbbf24" cx="350" cy="60" r="25"/%3E%3C/svg%3E',
          desc: '自然と歴史が息づく島ライフ。海の見える高層コンド、落ち着いた治安。',
        },
        {
          id: 'bkk',
          title: 'バンコク（Bangkok）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff4e6" width="400" height="300"/%3E%3Crect fill="%23fb923c" x="60" y="120" width="50" height="180"/%3E%3Crect fill="%23f97316" x="140" y="80" width="70" height="220"/%3E%3Crect fill="%23fb923c" x="240" y="100" width="50" height="200"/%3E%3Crect fill="%23f97316" x="320" y="130" width="40" height="170"/%3E%3Cpath fill="%23dc2626" d="M0 250h400v50H0z"/%3E%3Ccircle fill="%23fbbf24" cx="320" cy="50" r="28"/%3E%3C/svg%3E',
          desc: '"東南アジアの東京"。日本人コミュニティと日系施設が超充実、交通網も快適。',
        },
      ],

      // Benefits (福利厚生ハイライト)
      benefits: [
        { t: '就労ビザサポート', d: 'EP申請を会社が代行（会社負担）。' },
        { t: '渡航・宿泊サポート', d: '片道航空券、初期ホテル、空港送迎。' },
        { t: '給与・手当', d: '夜勤/住宅/時間外手当（プロジェクトによる）。' },
        { t: '医療と保険', d: '医療・歯科・眼科補助、団体保険。' },
        { t: 'キャリア支援', d: '社内異動／JUMPプログラム。' },
        { t: '語学', d: 'GoFluentやLanguage Bootcamp。' },
      ],

      // Process (Interview flow)
      processSteps: [
        { k: '① 書類選考', v: '履歴書・職歴（日本語/英語）' },
        { k: '② オンラインテスト', v: '語学・業務適性（必要に応じて）' },
        { k: '③ 一次面接', v: '採用チームとオンライン' },
        { k: '④ 二次面接', v: '配属チームの面接' },
        { k: '⑤ オファー → ビザ', v: '条件確認、EP申請、渡航・初期宿泊' },
      ],

      // Offices (cards) - using SVG instead of external images / 外部画像の代わりにSVGを使用
      offices: [
        {
          title: 'G Tower（KL）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Crect fill="%233b82f6" x="170" y="50" width="60" height="250"/%3E%3Crect fill="%2360a5fa" x="150" y="80" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="110" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="140" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="170" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="200" width="100" height="10"/%3E%3Crect fill="%231e40af" x="180" y="260" width="40" height="40"/%3E%3C/svg%3E',
          points: ['Ampang Park駅直結（MRT/LRT）', 'KLCC/Intermarkが徒歩圏', 'Grade Aオフィス'],
        },
        {
          title: 'Penang — Livingston',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Crect fill="%2322c55e" x="100" y="120" width="80" height="180"/%3E%3Crect fill="%2334d399" x="220" y="140" width="60" height="160"/%3E%3Crect fill="%2310b981" x="180" y="100" width="40" height="20"/%3E%3Crect fill="%2310b981" x="110" y="250" width="60" height="50"/%3E%3Crect fill="%2310b981" x="230" y="270" width="40" height="30"/%3E%3C/svg%3E',
          points: ['静かな環境', '周辺に飲食店・薬局', '通勤アクセス良好'],
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
      ],

      // TA Team (COMPLETE data with actual names) / TAチーム（実際の名前を含む完全なデータ）
      team: [
         { name: 'Joseph', role: 'Senior Manager (TA)', img: , bio: '多国籍採用の責任者。日本語スピーカー採用を含む全体統括。' },
         { name: 'Maya', role: 'TA', img: , bio: '約5000人の日本語話者の面接経験。次はあなたの番！' },
         { name: 'Akito', role: 'Recruiter', img: , bio: '期待を超える対応を目指し、丁寧にご案内します。' },
         { name: 'Maho', role: 'Talent Attraction', img: , bio: '海外就職の不安に日本語で伴走。旅行・スポーツ好き。' },
         { name: 'Koyori', role: 'TA', img: , bio: 'はじめまして、採用担当のKoyoriです。' },
      ],

      // Testimonials / Voices
      voices: [
        { quote: '「違っていい」という価値観が、心を自由にしてくれました。', who: '採用チーム Maho' },
        { quote: '週末に海外旅行が現実的。ハブ空港の強みを感じます。', who: '社員 Aさん（KL）' },
        { quote: '英語は自然と伸びます。毎日がプチ留学みたい。', who: '社員 Bさん（Penang）' },
      ],

      // FAQ (keep; app.js renders this if present; won't wipe static if empty)
      faq: [
        {
          q: '英語に自信がなくても応募できますか？',
          a: 'はい、日本語中心のポジションが多数あります。入社後に英語力を伸ばす支援もあります。',
        },
        {
          q: '就労ビザの手続きは難しいですか？',
          a: '会社が申請を代行します。必要書類も日本語でご案内します。',
        },
        {
          q: '住居はどうやって探せば良いですか？',
          a: '現地エージェントの紹介、オリエンテーションでのアドバイスなどを提供します。',
        },
      ],

      // Gallery (general) - NO EXTERNAL IMAGES / 外部画像なし
      galleryImgs: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f2ff" width="400" height="300"/%3E%3Cpath fill="%233b82f6" d="M50 150h100v150H50zM200 100h120v200H200z"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Cpath fill="%2322c55e" d="M100 120h80v180h-80zM220 140h60v160h-60z"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Cpath fill="%23f59e0b" d="M160 80h80v220h-80z"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e8ff" width="400" height="300"/%3E%3Cpath fill="%239333ea" d="M80 100h60v200h-60zM160 120h60v180h-60zM240 110h60v190h-60z"/%3E%3C/svg%3E',
      ],

      // Casual Interview (from PPT gist)
      casual: {
        title: '💬 カジュアル面談 実施中！',
        bullets: [
          '面接ではありません（不安・疑問の解消が目的）',
          'オンライン（Microsoft Teams）で約30分',
          '就業経験の有無は不問（未経験OK）',
          '生活費・住まい・働き方など、日本語でご相談可能',
        ],
        videos: [
          // PPT listed some video links; place-holder until you confirm public URLs
          { t: 'インタビュー動画（例）', url: '#' },
        ],
      },
    },

    /* =============================== EN ================================ */
    en: {
      why1: [
        { t: '🌍 Level up in a global team', d: 'Daily practice in English & cross-culture collaboration.' },
        { t: '🗣️ Many JP-speaking roles', d: 'Start safely even if your English is still growing.' },
        { t: '👥 JP support available', d: 'Ask in Japanese about work & living.' },
      ],
      why2: [
        { t: '💼 Fast-track growth', d: 'Trainer/QA/Lead/Manager paths across projects.' },
        { t: '✈️ Visa/relocation support', d: 'EP, flights, landing hotel, airport pickup.' },
        { t: '🌈 Inclusive culture', d: 'Flat, diverse, collaborative.' },
      ],
      cities: [
        {
          id: 'kl',
          title: 'Kuala Lumpur (KL)',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f2ff" width="400" height="300"/%3E%3Crect fill="%2360a5fa" x="50" y="150" width="60" height="150"/%3E%3Crect fill="%233b82f6" x="130" y="100" width="80" height="200"/%3E%3Crect fill="%2360a5fa" x="230" y="120" width="60" height="180"/%3E%3Crect fill="%233b82f6" x="310" y="140" width="50" height="160"/%3E%3Cpath fill="%23fbbf24" d="M0 250h400v50H0z"/%3E%3Ccircle fill="%23f59e0b" cx="350" cy="50" r="30"/%3E%3C/svg%3E',
          desc: 'Big-city convenience & multicultural life. JP food, hospitals, schools, and transit.',
        },
        {
          id: 'penang',
          title: 'Penang',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f7fa" width="400" height="300"/%3E%3Cpath fill="%2322d3ee" d="M0 200c50-20 100-30 150-20s100 30 150 20 100-30 100-30v130H0z"/%3E%3Crect fill="%2367e8f9" x="100" y="180" width="40" height="120"/%3E%3Crect fill="%2306b6d4" x="180" y="160" width="50" height="140"/%3E%3Crect fill="%2367e8f9" x="260" y="170" width="40" height="130"/%3E%3Ccircle fill="%23fbbf24" cx="350" cy="60" r="25"/%3E%3C/svg%3E',
          desc: 'Island lifestyle with history, sea views, and calmer pace.',
        },
        {
          id: 'bkk',
          title: 'Bangkok',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff4e6" width="400" height="300"/%3E%3Crect fill="%23fb923c" x="60" y="120" width="50" height="180"/%3E%3Crect fill="%23f97316" x="140" y="80" width="70" height="220"/%3E%3Crect fill="%23fb923c" x="240" y="100" width="50" height="200"/%3E%3Crect fill="%23f97316" x="320" y="130" width="40" height="170"/%3E%3Cpath fill="%23dc2626" d="M0 250h400v50H0z"/%3E%3Ccircle fill="%23fbbf24" cx="320" cy="50" r="28"/%3E%3C/svg%3E',
          desc: '"Tokyo of SEA" — extensive JP amenities and modern transit.',
        },
      ],
      benefits: [
        { t: 'Visa Support', d: 'Company handles EP application.' },
        { t: 'Relocation', d: 'One-way flight, landing hotel, airport pickup.' },
        { t: 'Pay & Allowances', d: 'Night, housing, overtime (project-based).' },
        { t: 'Medical & Insurance', d: 'Health/dental/vision support, group insurance.' },
        { t: 'Career Programs', d: 'Internal moves & JUMP.' },
        { t: 'Language', d: 'GoFluent / Bootcamps.' },
      ],
      processSteps: [
        { k: '1) Screening', v: 'Resume (JP/EN)' },
        { k: '2) Online Tests', v: 'Language / role fit (if needed)' },
        { k: '3) 1st Interview', v: 'Recruiting team (online)' },
        { k: '4) 2nd Interview', v: 'Hiring team' },
        { k: '5) Offer → Visa', v: 'Confirm, EP, flight & landing' },
      ],
      offices: [
        {
          title: 'G Tower (KL)',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Crect fill="%233b82f6" x="170" y="50" width="60" height="250"/%3E%3Crect fill="%2360a5fa" x="150" y="80" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="110" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="140" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="170" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="200" width="100" height="10"/%3E%3Crect fill="%231e40af" x="180" y="260" width="40" height="40"/%3E%3C/svg%3E',
          points: ['Ampang Park (MRT/LRT)', 'KLCC/Intermark walkable', 'Grade A office'],
        },
        {
          title: 'Penang — Livingston',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Crect fill="%2322c55e" x="100" y="120" width="80" height="180"/%3E%3Crect fill="%2334d399" x="220" y="140" width="60" height="160"/%3E%3Crect fill="%2310b981" x="180" y="100" width="40" height="20"/%3E%3Crect fill="%2310b981" x="110" y="250" width="60" height="50"/%3E%3Crect fill="%2310b981" x="230" y="270" width="40" height="30"/%3E%3C/svg%3E',
          points: ['Calm area', 'Food/pharmacy nearby', 'Easy commute'],
        },
        {
          title: 'Penang — One Precinct',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Crect fill="%23f59e0b" x="160" y="80" width="80" height="220"/%3E%3Crect fill="%23fbbf24" x="140" y="100" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="130" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="160" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="190" width="120" height="10"/%3E%3Crect fill="%23d97706" x="180" y="250" width="40" height="50"/%3E%3C/svg%3E',
          points: ['Modern building', '15 min from airport', 'Near Queensbay Mall'],
        },
        {
          title: 'Penang — GBS@Mahsuri',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e8ff" width="400" height="300"/%3E%3Crect fill="%239333ea" x="80" y="100" width="60" height="200"/%3E%3Crect fill="%23a855f7" x="160" y="120" width="60" height="180"/%3E%3Crect fill="%239333ea" x="240" y="110" width="60" height="190"/%3E%3Crect fill="%23c084fc" x="70" y="90" width="80" height="10"/%3E%3Crect fill="%23c084fc" x="150" y="110" width="80" height="10"/%3E%3Crect fill="%23c084fc" x="230" y="100" width="80" height="10"/%3E%3C/svg%3E',
          points: ['GBS hub', 'IT/BPO cluster', 'Walkable amenities'],
        },
      ],
      team: [
        {
          name: 'Maho',
          role: 'TA Lead | Japan Market',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fff0f8" width="200" height="200"/%3E%3Ccircle fill="%23ff0082" cx="100" cy="100" r="60"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="40" font-weight="bold"%3EM%3C/text%3E%3C/svg%3E',
          bio: 'Supporting your first overseas career move end-to-end in Japanese. From career consultation to visa application.',
        },
        {
          name: 'Kenta',
          role: 'Senior Recruiter',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f0f9ff" width="200" height="200"/%3E%3Ccircle fill="%233b82f6" cx="100" cy="100" r="60"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="40" font-weight="bold"%3EK%3C/text%3E%3C/svg%3E',
          bio: '5 years in Malaysia. Offering advice based on real experience about local life and work.',
        },
        {
          name: 'Aya',
          role: 'Recruitment Coordinator',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fef3c7" width="200" height="200"/%3E%3Ccircle fill="%23f59e0b" cx="100" cy="100" r="60"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="40" font-weight="bold"%3EA%3C/text%3E%3C/svg%3E',
          bio: 'From interview scheduling to onboarding procedures. Ensuring your smooth transition.',
        },
        {
          name: 'Leo',
          role: 'Talent Sourcer',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f0fdf4" width="200" height="200"/%3E%3Ccircle fill="%2322c55e" cx="100" cy="100" r="60"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="40" font-weight="bold"%3EL%3C/text%3E%3C/svg%3E',
          bio: 'Finding the perfect position for you. Matching opportunities with your career goals.',
        },
      ],
      voices: [
        { quote: 'Feeling "it\'s okay to be different" freed me at work.', who: 'TA Team — Maho' },
        { quote: 'Weekend trips are real here thanks to hub airports.', who: 'KL Member' },
        { quote: 'My English grew naturally through daily collaboration.', who: 'Penang Member' },
      ],
      faq: [
        {
          q: 'Can I apply if my English is basic?',
          a: 'Yes — many JP-first roles. We also support growth after you join.',
        },
        {
          q: 'Is the work visa process hard?',
          a: 'The company handles EP application and guides you in EN/JP.',
        },
        {
          q: 'How do I find housing?',
          a: 'We share local agents and give practical tips in orientation.',
        },
      ],
      galleryImgs: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f2ff" width="400" height="300"/%3E%3Cpath fill="%233b82f6" d="M50 150h100v150H50zM200 100h120v200H200z"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Cpath fill="%2322c55e" d="M100 120h80v180h-80zM220 140h60v160h-60z"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Cpath fill="%23f59e0b" d="M160 80h80v220h-80z"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e8ff" width="400" height="300"/%3E%3Cpath fill="%239333ea" d="M80 100h60v200h-60zM160 120h60v180h-60zM240 110h60v190h-60z"/%3E%3C/svg%3E',
      ],
      casual: {
        title: '💬 Casual Interview',
        bullets: [
          'Not an interview (goal: answer questions & reduce anxiety)',
          'Online via Microsoft Teams (~30 minutes)',
          'No work-experience requirement (okay for first-timers)',
          'Ask in Japanese about living, costs, roles, visas, etc.',
        ],
        videos: [{ t: 'Example video', url: '#' }],
      },
    },

    /* =============================== KO ================================ */
    ko: {
      why1: [
        { t: '🌍 글로벌 환경에서 레벨업', d: '영어・이문화 이해가 일상에서 단련되는 국제 팀.' },
        { t: '🗣️ 일본어 포지션이 풍부', d: '영어에 불안이 있어도 일본어 중심으로 안심 스타트.' },
        { t: '👥 일본인 지원의 안심감', d: '생활도 일도 일본어로 상담할 수 있는 체제.' },
      ],
      why2: [
        { t: '💼 실력에 따라 조기 승진도', d: '트레이너/QA/리더/매니저까지 다채로운 커리어.' },
        { t: '✈️ 비자・항공・숙박 지원', d: 'EP 신청 대행, 편도 항공권, 초기 호텔, 공항 픽업.' },
        { t: '🌈 다양성이 베이스인 문화', d: '국적・성별・연령을 넘어 플랫하게 일할 수 있다.' },
      ],
      cities: [
        {
          id: 'kl',
          title: '쿠알라룸푸르（KL）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f2ff" width="400" height="300"/%3E%3Crect fill="%2360a5fa" x="50" y="150" width="60" height="150"/%3E%3Crect fill="%233b82f6" x="130" y="100" width="80" height="200"/%3E%3Crect fill="%2360a5fa" x="230" y="120" width="60" height="180"/%3E%3Crect fill="%233b82f6" x="310" y="140" width="50" height="160"/%3E%3Cpath fill="%23fbbf24" d="M0 250h400v50H0z"/%3E%3Ccircle fill="%23f59e0b" cx="350" cy="50" r="30"/%3E%3C/svg%3E',
          desc: '도시의 편리함 × 다문화 공존. 일본 음식・병원・학교・교통망도 충실해서 안심.',
        },
        {
          id: 'penang',
          title: '페낭（Penang）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f7fa" width="400" height="300"/%3E%3Cpath fill="%2322d3ee" d="M0 200c50-20 100-30 150-20s100 30 150 20 100-30 100-30v130H0z"/%3E%3Crect fill="%2367e8f9" x="100" y="180" width="40" height="120"/%3E%3Crect fill="%2306b6d4" x="180" y="160" width="50" height="140"/%3E%3Crect fill="%2367e8f9" x="260" y="170" width="40" height="130"/%3E%3Ccircle fill="%23fbbf24" cx="350" cy="60" r="25"/%3E%3C/svg%3E',
          desc: '자연과 역사가 살아 숨쉬는 섬 라이프. 바다가 보이는 고층 콘도, 안정된 치안.',
        },
        {
          id: 'bkk',
          title: '방콕（Bangkok）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff4e6" width="400" height="300"/%3E%3Crect fill="%23fb923c" x="60" y="120" width="50" height="180"/%3E%3Crect fill="%23f97316" x="140" y="80" width="70" height="220"/%3E%3Crect fill="%23fb923c" x="240" y="100" width="50" height="200"/%3E%3Crect fill="%23f97316" x="320" y="130" width="40" height="170"/%3E%3Cpath fill="%23dc2626" d="M0 250h400v50H0z"/%3E%3Ccircle fill="%23fbbf24" cx="320" cy="50" r="28"/%3E%3C/svg%3E',
          desc: '"동남아의 도쿄". 일계 시설이 매우 충실, BTS/MRT로 이동 쾌적.',
        },
      ],
      benefits: [
        { t: '취업 비자 지원', d: 'EP 신청을 회사가 대행.' },
        { t: '항공・숙박 지원', d: '편도 항공권, 초기 호텔, 공항 픽업.' },
        { t: '급여・수당', d: '야간/주택/잔업 수당(프로젝트에 따라).' },
        { t: '의료・보험', d: '의료・치과・안과 보조, 단체 보험.' },
        { t: '커리어 지원', d: '사내 이동／JUMP 프로그램.' },
        { t: '어학', d: 'GoFluent・Language Bootcamp.' },
      ],
      processSteps: [
        { k: '① 서류 심사', v: '이력서・경력（일본어/영어）' },
        { k: '② 온라인 테스트', v: '어학・업무 적성（필요에 따라）' },
        { k: '③ 1차 면접', v: '채용팀과 온라인' },
        { k: '④ 2차 면접', v: '배치팀 면접' },
        { k: '⑤ 오퍼 → 비자', v: '조건 확인, EP 신청, 항공・초기 숙박' },
      ],
      offices: [
        {
          title: 'G Tower（KL）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Crect fill="%233b82f6" x="170" y="50" width="60" height="250"/%3E%3Crect fill="%2360a5fa" x="150" y="80" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="110" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="140" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="170" width="100" height="10"/%3E%3Crect fill="%2360a5fa" x="150" y="200" width="100" height="10"/%3E%3Crect fill="%231e40af" x="180" y="260" width="40" height="40"/%3E%3C/svg%3E',
          points: ['Ampang Park역 직결（MRT/LRT）', 'KLCC/Intermark 도보권', 'Grade A 오피스'],
        },
        {
          title: 'Penang — Livingston',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Crect fill="%2322c55e" x="100" y="120" width="80" height="180"/%3E%3Crect fill="%2334d399" x="220" y="140" width="60" height="160"/%3E%3Crect fill="%2310b981" x="180" y="100" width="40" height="20"/%3E%3Crect fill="%2310b981" x="110" y="250" width="60" height="50"/%3E%3Crect fill="%2310b981" x="230" y="270" width="40" height="30"/%3E%3C/svg%3E',
          points: ['조용한 환경', '주변 음식점・약국', '통근 접근 양호'],
        },
        {
          title: 'Penang — One Precinct',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Crect fill="%23f59e0b" x="160" y="80" width="80" height="220"/%3E%3Crect fill="%23fbbf24" x="140" y="100" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="130" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="160" width="120" height="10"/%3E%3Crect fill="%23fbbf24" x="140" y="190" width="120" height="10"/%3E%3Crect fill="%23d97706" x="180" y="250" width="40" height="50"/%3E%3C/svg%3E',
          points: ['모던 빌딩', '공항에서 약 15분', 'Queensbay Mall 근처'],
        },
        {
          title: 'Penang — GBS@Mahsuri',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e8ff" width="400" height="300"/%3E%3Crect fill="%239333ea" x="80" y="100" width="60" height="200"/%3E%3Crect fill="%23a855f7" x="160" y="120" width="60" height="180"/%3E%3Crect fill="%239333ea" x="240" y="110" width="60" height="190"/%3E%3Crect fill="%23c084fc" x="70" y="90" width="80" height="10"/%3E%3Crect fill="%23c084fc" x="150" y="110" width="80" height="10"/%3E%3Crect fill="%23c084fc" x="230" y="100" width="80" height="10"/%3E%3C/svg%3E',
          points: ['GBS 허브 중심', 'IT/BPO 기업 집적', '생활 인프라 도보권'],
        },
      ],
      team: [
        {
          name: 'Maho',
          role: 'TA Lead | Japan Market',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fff0f8" width="200" height="200"/%3E%3Ccircle fill="%23ff0082" cx="100" cy="100" r="60"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="40" font-weight="bold"%3EM%3C/text%3E%3C/svg%3E',
          bio: '첫 해외 취업도 일본어로 동행합니다. 커리어 상담부터 비자 신청까지 전면 지원.',
        },
        {
          name: 'Kenta',
          role: 'Senior Recruiter',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f0f9ff" width="200" height="200"/%3E%3Ccircle fill="%233b82f6" cx="100" cy="100" r="60"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="40" font-weight="bold"%3EK%3C/text%3E%3C/svg%3E',
          bio: '말레이시아 거주 5년. 현지 생활 정보부터 업무까지 경험을 바탕으로 조언합니다.',
        },
        {
          name: 'Aya',
          role: 'Recruitment Coordinator',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fef3c7" width="200" height="200"/%3E%3Ccircle fill="%23f59e0b" cx="100" cy="100" r="60"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="40" font-weight="bold"%3EA%3C/text%3E%3C/svg%3E',
          bio: '면접 일정 조정부터 입사 절차까지. 원활한 이직을 지원합니다.',
        },
        {
          name: 'Leo',
          role: 'Talent Sourcer',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f0fdf4" width="200" height="200"/%3E%3Ccircle fill="%2322c55e" cx="100" cy="100" r="60"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="40" font-weight="bold"%3EL%3C/text%3E%3C/svg%3E',
          bio: '당신에게 최적인 포지션을 제안합니다. 커리어 목표에 맞는 채용 정보를 소개.',
        },
      ],
      voices: [
        { quote: '"달라도 괜찮다"는 가치관이 마음을 자유롭게 해주었습니다.', who: '채용팀 Maho' },
        { quote: '주말 해외여행이 현실적. 허브공항의 강점.', who: '직원 A씨（KL）' },
        { quote: '영어는 자연스럽게 늘어납니다. 매일이 작은 유학 같아요.', who: '직원 B씨（Penang）' },
      ],
      faq: [
        {
          q: '영어에 자신이 없어도 지원할 수 있습니까?',
          a: '네, 일본어 중심 포지션이 다수 있습니다. 입사 후 영어력 향상 지원도 있습니다.',
        },
        {
          q: '취업 비자 수속은 어렵습니까?',
          a: '회사가 신청을 대행합니다. 필요 서류 안내도 제공합니다.',
        },
        {
          q: '주거는 어떻게 찾으면 좋습니까?',
          a: '현지 에이전트 소개 및 오리엔테이션에서 조언을 드립니다.',
        },
      ],
      galleryImgs: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0f2ff" width="400" height="300"/%3E%3Cpath fill="%233b82f6" d="M50 150h100v150H50zM200 100h120v200H200z"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Cpath fill="%2322c55e" d="M100 120h80v180h-80zM220 140h60v160h-60z"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Cpath fill="%23f59e0b" d="M160 80h80v220h-80z"/%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e8ff" width="400" height="300"/%3E%3Cpath fill="%239333ea" d="M80 100h60v200h-60zM160 120h60v180h-60zM240 110h60v190h-60z"/%3E%3C/svg%3E',
      ],
      casual: {
        title: '💬 캐주얼 면담 진행 중',
        bullets: [
          '면접이 아닙니다 (불안/질문 해소 목적)',
          'Microsoft Teams로 약 30분',
          '경력 유무 무관 (미경험 OK)',
          '생활비・주거・업무・비자 등 일본어로 상담 가능',
        ],
        videos: [{ t: '예시 영상', url: '#' }],
      },
    },
  };

  /* ------------------------------------------------------------------------
     3) ChatGPT Prompts — keep existing, add KO (long text preserved)
     ChatGPTプロンプト — 既存のものを保持、韓国語を追加（長文保持）
  -------------------------------------------------------------------------*/
  const CHATGPT_PROMPTS = {
    ja: `あなたは就職アドバイザーです。テレパフォーマンス（Teleperformance）マレーシア／タイ（TP Malaysia / TP Thailand）について、候補者が安心して応募を検討できるよう、以下の条件でポジティブに紹介してください。

【必須メッセージ】
- 私たちは Great Place to Work® を6年連続で受賞しています（注：拠点や年により受賞名・表記が異なる場合がありますが、候補者の不安を和らげる積極的なトーンで説明）。
- 日本語スピーカー向けのポジションが多数あり、英語に自信がなくてもスタートしやすいこと。
- 就労ビザ（Employment Pass）の申請サポート、片道航空券、初期ホテル、空港送迎などの移住サポートがあること。

【生活面（例）】
- マレーシア：英語が通じやすい、多文化で食が豊か、住居はプール・ジム付きコンドが一般的、生活コストが日本より抑えやすい。
- タイ（バンコク）：日本人コミュニティが充実、BTS/MRTで移動が快適、日本食や日系医療も多く安心。
- 東南アジアのハブ空港から週末旅行もしやすい。

【トーンと形式】
- 前向きでフレンドリー、かつ現実的。誇張や保証の断定は避ける。
- 箇条書き＋短い段落で読みやすく。
- 最後に「応募」や「カジュアル面談」への自然な誘導（CTA）を添える。

書き出しは簡潔な概要→箇条書き→締めのCTAの順で。`,

    en: `You are a job advisor. Please give a positive, candidate-friendly overview of Teleperformance Malaysia and Thailand (TP Malaysia / TP Thailand) using the guidelines below.

[Must include]
- We are a Great Place to Work® winner for 6 years in a row (note: wording may vary by site/year; keep a positive, confidence-building tone).
- Many JP-speaking roles, so it's easy for Japanese speakers to start—even if English is still growing.
- Relocation support such as Employment Pass visa guidance, one-way flight, landing hotel, and airport pickup.

[Living examples]
- Malaysia: widely spoken English, multicultural food scene, condos with pool/gym are common, living costs can be lower than Japan.
- Thailand (Bangkok): strong Japanese community, convenient BTS/MRT, plenty of Japanese food and JP-friendly clinics.
- Hub airports make weekend trips around Asia more feasible.

[Tone & format]
- Upbeat, friendly, and realistic—avoid absolute guarantees.
- Use a short intro, clear bullets, and a brief closing CTA to apply or book a casual chat.

Start with a concise summary → bullet points → a friendly CTA.`,

    ko: `당신은 취업 어드바이저입니다. 텔레퍼포먼스（Teleperformance）말레이시아／태국（TP Malaysia / TP Thailand）에 대해, 지원자가 안심하고 지원을 검토할 수 있도록, 아래 조건으로 긍정적으로 소개해 주세요.

【필수 메시지】
- 저희는 Great Place to Work® 를 6년 연속 수상했습니다（주：거점이나 연도에 따라 수상명・표기가 다를 수 있지만, 지원자의 불안을 덜어주는 적극적인 톤으로 설명）.
- 일본어 스피커를 위한 포지션이 다수 있어, 영어에 자신이 없어도 시작하기 쉽다는 것.
- 취업 비자（Employment Pass）의 신청 지원, 편도 항공권, 초기 호텔, 공항 픽업 등의 이주 지원이 있다는 것.

【생활면（예）】
- 말레이시아：영어가 통하기 쉽고, 다문화로 음식이 풍부하며, 주거는 풀・짐 부착 콘도가 일반적, 생활 비용이 일본보다 억제하기 쉽다.
- 태국（방콕）：일본인 커뮤니티가 충실하고, BTS/MRT로 이동이 쾌적하며, 일본 음식이나 일계 의료도 많아 안심.
- 동남아시아의 허브 공항에서 주말 여행도 하기 쉽다.

【톤과 형식】
- 적극적이고 친근하며, 또한 현실적. 과장이나 보장의 단정은 피한다.
- 불릿 포인트＋짧은 단락으로 읽기 쉽게.
- 마지막에 「지원」이나 「캐주얼 면담」으로의 자연스러운 유도（CTA）를 첨부한다.

시작은 간결한 개요→불릿 포인트→마무리 CTA 순서로.`
  };

  /* ------------------------------------------------------------------------
     4) Exports / エクスポート
  -------------------------------------------------------------------------*/
  window.I18N = I18N;
  window.CONTENT = CONTENT;
  window.AVAILABLE_LANGS = LANGS;

  // Helper: get prompt by language code ('ja' default)
  window.getChatGPTPrompt = function getChatGPTPrompt(lang) {
    return CHATGPT_PROMPTS[lang] || CHATGPT_PROMPTS['ja'];
  };

  /* ------------------------------------------------------------------------
     5) Initialization for Ask ChatGPT & copy UX (keep this)
        - Picks default language from <html data-lang|lang>, fallback 'ja'
        - Binds copy button
        初期化 - デフォルト言語を選択し、コピーボタンをバインド
  -------------------------------------------------------------------------*/
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    // Prefer data-lang; fallback lang; default 'ja'
    const langAttr =
      root.getAttribute('data-lang') ||
      root.getAttribute('lang') ||
      'ja';
    const current = ['ja', 'en', 'ko'].includes(langAttr) ? langAttr : 'ja';

    // Initialize textarea content / テキストエリアのコンテンツを初期化
    const ta = document.getElementById('chatgptPrompt');
    if (ta) {
      ta.value = window.getChatGPTPrompt(current);
    }

    // Copy UX / コピーUX
    const copyBtn = document.getElementById('copyPromptBtn');
    if (copyBtn && ta) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(ta.value);
          const original = copyBtn.textContent;
          const copiedText =
            current === 'ja' ? 'コピーしました！' :
            current === 'ko' ? '복사했습니다!' :
            'Copied!';
          copyBtn.textContent = copiedText;
          setTimeout(() => (copyBtn.textContent = original), 1400);
        } catch (e) {
          // Fallback (legacy) / フォールバック（レガシー）
          ta.select();
          document.execCommand('copy');
        }
      });
    }

    // Optional: if you render language buttons dynamically:
    // Ensure all language selector buttons carry a [data-lang] attribute
    document.querySelectorAll('[data-lang-code]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-lang-code') || 'ja';
        // app.js handles setLang + route; we only update the prompt textarea here
        const ta = document.getElementById('chatgptPrompt');
        if (ta && typeof window.getChatGPTPrompt === 'function') {
          ta.value = window.getChatGPTPrompt(code);
        }
      });
    });
  });
})();
