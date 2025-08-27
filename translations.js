/* ============================================================================
   TP Candidate Microsite — translations.js (PPT Content Only - No External Data)
   Purpose / 目的:
     - All content taken directly from PPT slides - no internet sources
     - Proper translations for JP, EN, KR
     - Fixed date and removed duplications
   Language codes: jp (Japanese), en (English), kr (Korean)
   Updated: 2024-01-15 (Current actual date)
============================================================================ */

(function () {
  /* ------------------------------------------------------------------------
     1) I18N — UI strings, headings, CTAs
     UI文字列、見出し、CTA
  -------------------------------------------------------------------------*/
  const I18N = {
    /* ========================= JAPANESE (jp) ======================== */
    jp: {
      // Brand & Header / ブランド＆ヘッダー
      'brand.title': 'TP',
      'brand.sub': 'Malaysia · Thailand — 日本語採用',
      'header.lang.jp': '日本語',
      'header.lang.en': 'English',
      'header.lang.kr': '한국어',
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

      // Drawer (mobile navigation)
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

      // Hero (from PPT slide 4 - exact text)
      'hero.eyebrow': '暮らすように、海外で働く。',
      'hero.leading': 'あなたの新しいキャリアの舞台に、',
      'hero.lead': 'マレーシア・タイという選択。多国籍な仲間と、一歩踏み出す。',
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

      // Priority Icons (from PPT priority list)
      'priority.title': 'TPが選ばれる理由',
      'priority.sub': 'グローバルな環境、日本語ポジション多数、手厚い移住サポート',
      'priority.gallery.title': '優先メニュー',
      'priority.gallery.sub': '9つの主要トピック',
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

      // Secondary Icons
      'secondary.title': '生活情報・カルチャー・サポート',
      'secondary.sub': '暮らしに役立つ情報',
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

      // Benefits
      'benefits.title': '福利厚生ハイライト',
      'benefits.sub': '"安心・成長・楽しさ"を全方位でサポート',

      // ChatGPT
      'chatgpt.title': 'Ask ChatGPT（TPについて質問）',
      'chatgpt.sub': '下のプロンプトをコピーして、ChatGPTに貼り付けてください。',
      'chatgpt.copy': 'プロンプトをコピー',
      'chatgpt.open': 'ChatGPT を開く',
      'chatgpt.note': '※ 言語を切り替えるとプロンプトも切り替わります。',

      // Footer
      'footer.about': '会社紹介',
      'footer.privacy': 'プライバシー',
      'footer.contact': 'お問い合わせ',
      'bar.faq': 'FAQ',

      // CTAs
      'cta.apply': 'ご応募はこちら',
      'cta.viewJobs': '求人を見る',
      'cta.relocation': '移住サポート',
      'cta.casual': 'カジュアル面談',
      'cta.learnMore': 'さらに見る',
      'cta.open': '開く',
      'cta.copy': 'コピー',
      'cta.contact': '問い合わせ',

      // Form placeholders
      'form.name.placeholder': '山田 太郎',
      'form.email.placeholder': 'you@example.com',
      'form.message.placeholder': '気になる求人、移住、英語レベル、入社時期など',
      
      // Labels
      'form.name.label': 'お名前',
      'form.email.label': 'メールアドレス',
      'form.message.label': 'ご相談内容',
      'form.submit': '送信',

      // Contact
      contactThanks: (name) =>
        `${name || '応募者'} さん、ありがとうございます！メッセージを受け取りました。`,
    },

    /* ============================== ENGLISH ============================== */
    en: {
      'brand.title': 'TP',
      'brand.sub': 'Malaysia · Thailand — JP Recruitment',
      'header.lang.jp': '日本語',
      'header.lang.en': 'English',
      'header.lang.kr': '한국어',
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

      'hero.eyebrow': 'Work abroad, live like a local.',
      'hero.leading': 'Your next career stage:',
      'hero.lead': 'Choose Malaysia & Thailand. Take the next step with multinational colleagues.',
      heroTexts: [
        'Choose Malaysia & Thailand.',
        'Global career opportunities.',
        'Trusted relocation support.',
      ],

      'stat.countries': 'Countries',
      'stat.people': 'Employees',
      'stat.jp_roles': 'JP-speaking roles',
      'stat.jp_roles_n': 'Many',

      'priority.title': 'Why candidates choose TP',
      'priority.sub': 'Global environment, many Japanese positions, strong relocation support',
      'priority.gallery.title': 'Priority Menu',
      'priority.gallery.sub': 'Nine key topics',
      'prio.about.t': 'About TP',
      'prio.about.d': 'Who is Teleperformance',
      'prio.jobs.t': 'View Jobs',
      'prio.jobs.d': 'Salary & Benefits',
      'prio.relo.t': 'Relocation & Visa',
      'prio.relo.d': 'EP, flights, initial accommodation',
      'prio.process.t': 'Interview Process',
      'prio.process.d': 'Complete online',
      'prio.why.t': 'Why Malaysia & Thailand',
      'prio.why.d': 'Lifestyle, culture, travel hub',
      'prio.casual.t': 'Casual Interview',
      'prio.casual.d': 'Start with a casual chat',
      'prio.testimonials.t': 'Employee Voices',
      'prio.testimonials.d': 'Stories & interviews',
      'prio.office.t': 'Work Environment',
      'prio.office.d': 'Office & Virtual Tour',
      'prio.career.t': 'Career Path & Promotion',
      'prio.career.d': 'Language/Training (GoFluent etc)',

      'secondary.title': 'Living Info, Culture & Support',
      'secondary.sub': 'Useful information for living',
      'sec.cost.t': 'Cost of Living',
      'sec.cost.d': 'Food, transport, housing',
      'sec.team.t': 'TA Team',
      'sec.team.d': 'Meet the TA Team',
      'sec.area.t': 'Area Around Office',
      'sec.area.d': 'Convenient info around office',
      'sec.blog.t': 'Blog & Articles',
      'sec.blog.d': 'Helpful reads',
      'sec.line.t': 'LINE Official Account',
      'sec.line.d': 'Get the latest updates',
      'sec.culture.t': 'Events & Culture',
      'sec.culture.d': 'Internal community',
      'sec.faq.t': 'FAQ',
      'sec.faq.d': 'Application, living, visa',
      'sec.contact.t': 'Contact',
      'sec.contact.d': 'Questions & interview booking',

      'benefits.title': 'Benefits Highlights',
      'benefits.sub': 'Support for "peace of mind, growth, and enjoyment" in all aspects',

      'chatgpt.title': 'Ask ChatGPT (About TP)',
      'chatgpt.sub': 'Copy the prompt below and paste it into ChatGPT.',
      'chatgpt.copy': 'Copy Prompt',
      'chatgpt.open': 'Open ChatGPT',
      'chatgpt.note': 'Switching languages updates the prompt.',

      'footer.about': 'About',
      'footer.privacy': 'Privacy',
      'footer.contact': 'Contact',
      'bar.faq': 'FAQ',

      'cta.apply': 'Apply Now',
      'cta.viewJobs': 'View Jobs',
      'cta.relocation': 'Relocation Support',
      'cta.casual': 'Casual Interview',
      'cta.learnMore': 'Learn More',
      'cta.open': 'Open',
      'cta.copy': 'Copy',
      'cta.contact': 'Contact',

      'form.name.placeholder': 'John Smith',
      'form.email.placeholder': 'you@example.com',
      'form.message.placeholder': 'Questions about jobs, relocation, English level, start date, etc.',
      
      'form.name.label': 'Name',
      'form.email.label': 'Email',
      'form.message.label': 'Message',
      'form.submit': 'Submit',

      contactThanks: (name) =>
        `Thanks, ${name || 'Candidate'}! We received your message.`,
    },

    /* =============================== KOREAN ============================== */
    kr: {
      'brand.title': 'TP',
      'brand.sub': 'Malaysia · Thailand — 일본어 채용',
      'header.lang.jp': '日本語',
      'header.lang.en': 'English',
      'header.lang.kr': '한국어',
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
      'hero.lead': '말레이시아・태국이라는 선택. 다국적 동료들과 한 걸음 나아가기.',
      heroTexts: [
        '말레이시아・태국이라는 선택.',
        '글로벌 커리어.',
        '안심 이주 지원.',
      ],

      'stat.countries': '거점국',
      'stat.people': '직원',
      'stat.jp_roles': '일본어 포지션',
      'stat.jp_roles_n': '다수',

      'priority.title': 'TP가 선택되는 이유',
      'priority.sub': '글로벌 환경, 다수의 일본어 포지션, 든든한 이주 지원',
      'priority.gallery.title': '우선 메뉴',
      'priority.gallery.sub': '9개 주요 주제',
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
      'secondary.sub': '생활에 유익한 정보',
      'sec.cost.t': '생활비',
      'sec.cost.d': '식사・교통・주거',
      'sec.team.t': '채용팀',
      'sec.team.d': 'TA 팀 만나기',
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
      'benefits.sub': '"안심・성장・즐거움"을 전방위로 지원',

      'chatgpt.title': 'Ask ChatGPT (TP에 대해 질문)',
      'chatgpt.sub': '아래 프롬프트를 복사해 ChatGPT에 붙여넣어 주세요.',
      'chatgpt.copy': '프롬프트 복사',
      'chatgpt.open': 'ChatGPT 열기',
      'chatgpt.note': '언어를 바꾸면 프롬프트도 바뀝니다.',

      'footer.about': '회사 소개',
      'footer.privacy': '개인정보',
      'footer.contact': '문의하기',
      'bar.faq': 'FAQ',

      'cta.apply': '지원하기',
      'cta.viewJobs': '채용 정보 보기',
      'cta.relocation': '이주 지원',
      'cta.casual': '캐주얼 면담',
      'cta.learnMore': '자세히 보기',
      'cta.open': '열기',
      'cta.copy': '복사',
      'cta.contact': '문의',

      'form.name.placeholder': '홍길동',
      'form.email.placeholder': 'you@example.com',
      'form.message.placeholder': '궁금한 채용 정보, 이주, 영어 레벨, 입사 시기 등',
      
      'form.name.label': '이름',
      'form.email.label': '이메일',
      'form.message.label': '문의 내용',
      'form.submit': '전송',

      contactThanks: (name) => 
        `${name || '지원자'} 님, 감사합니다！메시지를 받았습니다.`,
    },
  };

  /* ------------------------------------------------------------------------
     2) CONTENT — Dynamic data from PPT slides ONLY
  -------------------------------------------------------------------------*/
  const CONTENT = {
    links: {
      apply: 'https://careerseng-teleperformance.icims.com/jobs/49026/customer-service-representative---japanese-speaking-%28kl%29/job?mode=job&iis=LANDINGPAGE',
      casual: 'https://forms.office.com/e/2UvpbweQww',
      line: 'https://line.me/R/ti/p/@286nmdsd?from=page&searchId=286nmdsd',
    },

    /* ========================= 日本語 (jp) - FROM PPT ONLY ========================= */
    jp: {
      // Why join TP? (PPT slides 6-7 - exact text)
      why1: [
        { t: '🌍 グローバルな環境', d: '多国籍チームで日英を使いながら働ける。' },
        { t: '🛠 キャリアの幅', d: 'トレーナー/QA/リーダー/マネージャーへと成長可能。' },
        { t: '🛫 移住サポート', d: '就労ビザ、片道航空券、初期ホテル、空港送迎。' },
      ],
      why2: [
        { t: '🌈 多様性', d: '国籍・年齢・性別を超えてフラットに働ける。' },
        { t: '✅ こんな方に', d: '日本語を活かしたい／多国籍環境で価値観を広げたい／海外生活を楽しみたい。' },
        { t: '💰 余裕のある暮らし', d: '物価が安いから外食・カフェ巡り・趣味を楽しみやすい。' },
      ],

      // Cities (PPT slides 11-13 - exact text)
      cities: [
        {
          id: 'kl',
          title: 'クアラルンプール（KL）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3ClinearGradient id="g1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23e0f2ff"/%3E%3Cstop offset="100%25" style="stop-color:%23fff0f8"/%3E%3C/linearGradient%3E%3Crect fill="url(%23g1)" width="400" height="300"/%3E%3Crect fill="%233b82f6" x="60" y="180" width="60" height="140"/%3E%3Crect fill="%23ff0082" x="140" y="140" width="80" height="180"/%3E%3Crect fill="%233b82f6" x="240" y="160" width="60" height="160"/%3E%3Ctext x="200" y="100" text-anchor="middle" fill="%23ff0082" font-size="32" font-weight="bold"%3EKL%3C/text%3E%3C/svg%3E',
          desc: '都市の利便性・交通網・日本食・医療。',
        },
        {
          id: 'penang',
          title: 'ペナン（Penang）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%2322d3ee"/%3E%3Cstop offset="100%25" style="stop-color:%23e0f7fa"/%3E%3C/linearGradient%3E%3Crect fill="url(%23g2)" width="400" height="300"/%3E%3Ccircle fill="%23fff" cx="200" cy="150" r="60"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="%2322d3ee" font-size="32" font-weight="bold"%3EPenang%3C/text%3E%3C/svg%3E',
          desc: '海・落ち着いた治安・高層コンド・空港アクセス。',
        },
        {
          id: 'bkk',
          title: 'バンコク（Bangkok）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3ClinearGradient id="g3" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23fbbf24"/%3E%3Cstop offset="100%25" style="stop-color:%23fef3c7"/%3E%3C/linearGradient%3E%3Crect fill="url(%23g3)" width="400" height="300"/%3E%3Crect fill="%23f59e0b" x="150" y="100" width="100" height="100"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="24" font-weight="bold"%3EBangkok%3C/text%3E%3C/svg%3E',
          desc: '"東南アジアの東京"：日本人コミュニティ・日系医療・BTS/MRT。',
        },
      ],

      // Benefits (PPT slides 35-36 - exact text)
      benefits: [
        { t: '就労ビザサポート', d: 'EP申請を会社が代行（会社負担）。' },
        { t: '渡航・宿泊サポート', d: '片道航空券、初期ホテル、空港送迎。' },
        { t: '給与・手当', d: '夜勤/住宅/時間外手当（プロジェクトによる）。' },
        { t: '医療と保険', d: '医療・歯科・眼科補助、団体保険。' },
        { t: 'キャリア支援', d: '社内異動／JUMPプログラム。' },
        { t: '語学', d: 'GoFluentやLanguage Bootcamp。' },
      ],

      // Process (PPT slides 37-38 - exact text)
      processSteps: [
        { k: '① 書類選考', v: '履歴書・職歴（日本語/英語）' },
        { k: '② オンラインテスト', v: '語学・業務適性（必要に応じて）' },
        { k: '③ 一次面接', v: '採用チームとオンライン' },
        { k: '④ 二次面接', v: '配属チームの面接' },
        { k: '⑤ オファー → ビザ', v: '条件確認、EP申請、渡航・初期宿泊' },
      ],

      // Offices (PPT slides 28-32 - exact text)
      offices: [
        {
          title: 'G Tower（KL）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Crect fill="%233b82f6" x="150" y="50" width="100" height="200"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3EG Tower%3C/text%3E%3C/svg%3E',
          points: ['Ampang Park直結（MRT/LRT）', 'KLCC/Intermark徒歩圏', 'Grade Aオフィス'],
        },
        {
          title: 'Penang — Livingston',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ecfdf5" width="400" height="300"/%3E%3Crect fill="%2310b981" x="140" y="90" width="120" height="120"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3ELivingston%3C/text%3E%3C/svg%3E',
          points: ['静かな環境', '飲食店・薬局', 'アクセス良好'],
        },
        {
          title: 'Penang — One Precinct',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e8ff" width="400" height="300"/%3E%3Ccircle fill="%239333ea" cx="200" cy="150" r="60"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3EOne Precinct%3C/text%3E%3C/svg%3E',
          points: ['Bayan Baruのモダンビル', '空港から約15分', 'Queensbay Mall近く'],
        },
        {
          title: 'Penang — GBS@Mahsuri',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff7ed" width="400" height="300"/%3E%3Ccircle fill="%23fb923c" cx="200" cy="150" r="50"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3EMahsuri%3C/text%3E%3C/svg%3E',
          points: ['州のGBSハブ', 'IT/BPO集積', '徒歩圏に生活インフラ'],
        },
        {
          title: 'Bangkok — Singha Complex',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef2f2" width="400" height="300"/%3E%3Cpath fill="%23ef4444" d="M200 100l50 100h-100z"/%3E%3Ctext x="200" y="170" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3ESingha%3C/text%3E%3C/svg%3E',
          points: ['BTS/MRT至近', '日本人コミュニティに便利', 'モダンな商業複合'],
        },
      ],

      // TA Team (PPT slides 21-24 - exact names from PPT, NO DUPLICATES)
      team: [
        {
          name: 'Maho',
          role: 'TA Lead | Japan Market',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fff0f8" width="200" height="200"/%3E%3Ccircle fill="%23ff0082" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EMaho%3C/text%3E%3C/svg%3E',
          bio: '初めての海外就職も日本語で伴走。キャリア相談からビザ申請までサポート。',
        },
        {
          name: 'Kenta',
          role: 'Senior Recruiter',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23e0f2ff" width="200" height="200"/%3E%3Ccircle fill="%233b82f6" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EKenta%3C/text%3E%3C/svg%3E',
          bio: 'マレーシア在住5年。現地生活・仕事のリアルを基にアドバイス。',
        },
        {
          name: 'Aya',
          role: 'Recruitment Coordinator',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f0fdfa" width="200" height="200"/%3E%3Ccircle fill="%2314b8a6" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EAya%3C/text%3E%3C/svg%3E',
          bio: '面接調整から入社手続きまで、スムーズな転職を支援。',
        },
        {
          name: 'Leo',
          role: 'Talent Sourcer',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fefce8" width="200" height="200"/%3E%3Ccircle fill="%23facc15" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3ELeo%3C/text%3E%3C/svg%3E',
          bio: '最適なポジション提案。キャリア目標に合わせてご紹介。',
        },
      ],

      // Testimonials (PPT slide 26 + slide 9 - exact text)
      voices: [
        { quote: '「違っていい」が当たり前。安心して挑戦できます。', who: '— TA Team（KL）' },
        { quote: '英語は毎日の実践で自然と伸びました。', who: '— JP Member（Penang）' },
        { quote: '週末の海外旅行が現実的。アジアのハブを実感。', who: '— JP Member（Bangkok）' },
        { quote: '日本にいる時より周りの目を気にしなくなった。', who: '— 採用チーム Maho' },
      ],

      // FAQ (PPT slide 66 - general questions)
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
        {
          q: 'シフト勤務はありますか？',
          a: 'プロジェクトにより24/7サービスの夜勤・週末シフトがありますが、手当が付きます。',
        },
      ],

      // Gallery images (placeholder SVGs)
      galleryImgs: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%233b82f6" font-size="24"%3EOffice 1%3C/text%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff0f8" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%23ff0082" font-size="24"%3EOffice 2%3C/text%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ecfdf5" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%2310b981" font-size="24"%3ETeam%3C/text%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%23f59e0b" font-size="24"%3EEvent%3C/text%3E%3C/svg%3E',
      ],

      // Casual Interview (PPT slide 18 - exact text)
      casual: {
        title: '💬 カジュアル面談 実施中！',
        bullets: [
          '面接ではありません（不安・疑問の解消が目的）',
          'オンライン（Microsoft Teams）で約30分',
          '就業経験の有無は不問（未経験OK）',
          '生活費・住まい・働き方など、日本語でご相談可能',
        ],
      },
    },

    /* =============================== EN - Direct translation from JP ================================ */
    en: {
      why1: [
        { t: '🌍 Global Environment', d: 'Work in multinational teams using Japanese and English.' },
        { t: '🛠 Career Growth', d: 'Progress to Trainer/QA/Lead/Manager roles.' },
        { t: '🛫 Relocation Support', d: 'Work visa, one-way flight, initial hotel, airport pickup.' },
      ],
      why2: [
        { t: '🌈 Diversity', d: 'Flat culture beyond nationality, age, and gender.' },
        { t: '✅ Perfect For', d: 'Those wanting to use Japanese / expand perspectives / enjoy overseas life.' },
        { t: '💰 Better Life Balance', d: 'Lower costs make dining out, cafes, and hobbies more accessible.' },
      ],
      
      cities: [
        {
          id: 'kl',
          title: 'Kuala Lumpur (KL)',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3ClinearGradient id="g1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23e0f2ff"/%3E%3Cstop offset="100%25" style="stop-color:%23fff0f8"/%3E%3C/linearGradient%3E%3Crect fill="url(%23g1)" width="400" height="300"/%3E%3Crect fill="%233b82f6" x="60" y="180" width="60" height="140"/%3E%3Crect fill="%23ff0082" x="140" y="140" width="80" height="180"/%3E%3Crect fill="%233b82f6" x="240" y="160" width="60" height="160"/%3E%3Ctext x="200" y="100" text-anchor="middle" fill="%23ff0082" font-size="32" font-weight="bold"%3EKL%3C/text%3E%3C/svg%3E',
          desc: 'Urban convenience, transport network, Japanese food, healthcare.',
        },
        {
          id: 'penang',
          title: 'Penang',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%2322d3ee"/%3E%3Cstop offset="100%25" style="stop-color:%23e0f7fa"/%3E%3C/linearGradient%3E%3Crect fill="url(%23g2)" width="400" height="300"/%3E%3Ccircle fill="%23fff" cx="200" cy="150" r="60"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="%2322d3ee" font-size="32" font-weight="bold"%3EPenang%3C/text%3E%3C/svg%3E',
          desc: 'Beaches, safe environment, high-rise condos, airport access.',
        },
        {
          id: 'bkk',
          title: 'Bangkok',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3ClinearGradient id="g3" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23fbbf24"/%3E%3Cstop offset="100%25" style="stop-color:%23fef3c7"/%3E%3C/linearGradient%3E%3Crect fill="url(%23g3)" width="400" height="300"/%3E%3Crect fill="%23f59e0b" x="150" y="100" width="100" height="100"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="24" font-weight="bold"%3EBangkok%3C/text%3E%3C/svg%3E',
          desc: '"Tokyo of SEA": Japanese community, healthcare, BTS/MRT.',
        },
      ],
      
      benefits: [
        { t: 'Visa Support', d: 'Company handles EP application (company expense).' },
        { t: 'Travel & Accommodation', d: 'One-way flight, initial hotel, airport pickup.' },
        { t: 'Salary & Allowances', d: 'Night/housing/overtime allowances (project-based).' },
        { t: 'Medical & Insurance', d: 'Health/dental/vision support, group insurance.' },
        { t: 'Career Support', d: 'Internal moves & JUMP program.' },
        { t: 'Language', d: 'GoFluent and Language Bootcamp.' },
      ],
      
      processSteps: [
        { k: '① Resume Screening', v: 'Resume/CV (Japanese/English)' },
        { k: '② Online Test', v: 'Language & aptitude (if needed)' },
        { k: '③ 1st Interview', v: 'Online with TA team' },
        { k: '④ 2nd Interview', v: 'Hiring team interview' },
        { k: '⑤ Offer → Visa', v: 'Confirm terms, EP application, travel & accommodation' },
      ],
      
      offices: [
        {
          title: 'G Tower (KL)',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Crect fill="%233b82f6" x="150" y="50" width="100" height="200"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3EG Tower%3C/text%3E%3C/svg%3E',
          points: ['Direct to Ampang Park (MRT/LRT)', 'Walking distance to KLCC/Intermark', 'Grade A office'],
        },
        {
          title: 'Penang — Livingston',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ecfdf5" width="400" height="300"/%3E%3Crect fill="%2310b981" x="140" y="90" width="120" height="120"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3ELivingston%3C/text%3E%3C/svg%3E',
          points: ['Quiet environment', 'Food/pharmacy nearby', 'Good access'],
        },
        {
          title: 'Penang — One Precinct',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e8ff" width="400" height="300"/%3E%3Ccircle fill="%239333ea" cx="200" cy="150" r="60"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3EOne Precinct%3C/text%3E%3C/svg%3E',
          points: ['Modern building in Bayan Baru', 'About 15 min from airport', 'Near Queensbay Mall'],
        },
        {
          title: 'Penang — GBS@Mahsuri',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff7ed" width="400" height="300"/%3E%3Ccircle fill="%23fb923c" cx="200" cy="150" r="50"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3EMahsuri%3C/text%3E%3C/svg%3E',
          points: ['State GBS hub', 'IT/BPO cluster', 'Living infrastructure within walking distance'],
        },
        {
          title: 'Bangkok — Singha Complex',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef2f2" width="400" height="300"/%3E%3Cpath fill="%23ef4444" d="M200 100l50 100h-100z"/%3E%3Ctext x="200" y="170" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3ESingha%3C/text%3E%3C/svg%3E',
          points: ['Near BTS/MRT', 'Convenient for Japanese community', 'Modern commercial complex'],
        },
      ],
      
      team: [
        {
          name: 'Maho',
          role: 'TA Lead | Japan Market',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fff0f8" width="200" height="200"/%3E%3Ccircle fill="%23ff0082" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EMaho%3C/text%3E%3C/svg%3E',
          bio: 'Supporting your first overseas career journey in Japanese from career consultation to visa application.',
        },
        {
          name: 'Kenta',
          role: 'Senior Recruiter',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23e0f2ff" width="200" height="200"/%3E%3Ccircle fill="%233b82f6" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EKenta%3C/text%3E%3C/svg%3E',
          bio: '5 years in Malaysia. Advice based on real local life and work experience.',
        },
        {
          name: 'Aya',
          role: 'Recruitment Coordinator',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f0fdfa" width="200" height="200"/%3E%3Ccircle fill="%2314b8a6" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EAya%3C/text%3E%3C/svg%3E',
          bio: 'Supporting smooth transition from interview scheduling to onboarding procedures.',
        },
        {
          name: 'Leo',
          role: 'Talent Sourcer',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fefce8" width="200" height="200"/%3E%3Ccircle fill="%23facc15" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3ELeo%3C/text%3E%3C/svg%3E',
          bio: 'Proposing optimal positions. Introducing opportunities aligned with your career goals.',
        },
      ],
      
      voices: [
        { quote: '"It\'s okay to be different" is the norm. I can challenge myself with confidence.', who: '— TA Team (KL)' },
        { quote: 'My English improved naturally through daily practice.', who: '— JP Member (Penang)' },
        { quote: 'Weekend trips abroad are actually realistic. Really feeling the hub advantage.', who: '— JP Member (Bangkok)' },
        { quote: 'I care less about others\' opinions than when I was in Japan.', who: '— TA Team Maho' },
      ],
      
      faq: [
        {
          q: 'Can I apply if my English is not confident?',
          a: 'Yes, we have many Japanese-focused positions. We also support English improvement after joining.',
        },
        {
          q: 'Is the work visa process difficult?',
          a: 'The company handles the application. We guide you through documents in Japanese.',
        },
        {
          q: 'How do I find housing?',
          a: 'We provide local agent introductions and advice during orientation.',
        },
        {
          q: 'Is there shift work?',
          a: 'Some 24/7 projects have night/weekend shifts, but with allowances.',
        },
      ],
      
      galleryImgs: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%233b82f6" font-size="24"%3EOffice 1%3C/text%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff0f8" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%23ff0082" font-size="24"%3EOffice 2%3C/text%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ecfdf5" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%2310b981" font-size="24"%3ETeam%3C/text%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%23f59e0b" font-size="24"%3EEvent%3C/text%3E%3C/svg%3E',
      ],
      
      casual: {
        title: '💬 Casual Interview Available!',
        bullets: [
          'Not an interview (goal: resolve concerns and questions)',
          'Online (Microsoft Teams) for about 30 minutes',
          'Work experience not required (beginners OK)',
          'Discuss living costs, housing, work style in Japanese',
        ],
      },
    },

    /* =============================== KR - Direct translation from JP ================================ */
    kr: {
      why1: [
        { t: '🌍 글로벌 환경', d: '다국적 팀에서 일본어와 영어를 사용하며 일하기.' },
        { t: '🛠 커리어 성장', d: '트레이너/QA/리더/매니저로 성장 가능.' },
        { t: '🛫 이주 지원', d: '취업 비자, 편도 항공권, 초기 호텔, 공항 픽업.' },
      ],
      why2: [
        { t: '🌈 다양성', d: '국적・연령・성별을 넘어 플랫한 일하기.' },
        { t: '✅ 이런 분들께', d: '일본어를 활용하고 싶은 / 다국적 환경에서 시야를 넓히고 싶은 / 해외 생활을 즐기고 싶은 분.' },
        { t: '💰 여유로운 생활', d: '물가가 저렴해 외식・카페・취미를 즐기기 쉽다.' },
      ],
      
      cities: [
        {
          id: 'kl',
          title: '쿠알라룸푸르（KL）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3ClinearGradient id="g1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23e0f2ff"/%3E%3Cstop offset="100%25" style="stop-color:%23fff0f8"/%3E%3C/linearGradient%3E%3Crect fill="url(%23g1)" width="400" height="300"/%3E%3Crect fill="%233b82f6" x="60" y="180" width="60" height="140"/%3E%3Crect fill="%23ff0082" x="140" y="140" width="80" height="180"/%3E%3Crect fill="%233b82f6" x="240" y="160" width="60" height="160"/%3E%3Ctext x="200" y="100" text-anchor="middle" fill="%23ff0082" font-size="32" font-weight="bold"%3EKL%3C/text%3E%3C/svg%3E',
          desc: '도시의 편리함・교통망・일본 음식・의료.',
        },
        {
          id: 'penang',
          title: '페낭（Penang）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%2322d3ee"/%3E%3Cstop offset="100%25" style="stop-color:%23e0f7fa"/%3E%3C/linearGradient%3E%3Crect fill="url(%23g2)" width="400" height="300"/%3E%3Ccircle fill="%23fff" cx="200" cy="150" r="60"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="%2322d3ee" font-size="32" font-weight="bold"%3EPenang%3C/text%3E%3C/svg%3E',
          desc: '바다・안정된 치안・고층 콘도・공항 접근성.',
        },
        {
          id: 'bkk',
          title: '방콕（Bangkok）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3ClinearGradient id="g3" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23fbbf24"/%3E%3Cstop offset="100%25" style="stop-color:%23fef3c7"/%3E%3C/linearGradient%3E%3Crect fill="url(%23g3)" width="400" height="300"/%3E%3Crect fill="%23f59e0b" x="150" y="100" width="100" height="100"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="24" font-weight="bold"%3EBangkok%3C/text%3E%3C/svg%3E',
          desc: '"동남아의 도쿄"：일본인 커뮤니티・일계 의료・BTS/MRT.',
        },
      ],
      
      benefits: [
        { t: '취업 비자 지원', d: 'EP 신청을 회사가 대행（회사 부담）.' },
        { t: '이동・숙박 지원', d: '편도 항공권, 초기 호텔, 공항 픽업.' },
        { t: '급여・수당', d: '야근/주택/초과근무 수당（프로젝트별）.' },
        { t: '의료와 보험', d: '의료・치과・안과 지원, 단체 보험.' },
        { t: '커리어 지원', d: '사내 이동／JUMP 프로그램.' },
        { t: '어학', d: 'GoFluent 및 Language Bootcamp.' },
      ],
      
      processSteps: [
        { k: '① 서류 심사', v: '이력서・경력（일본어/영어）' },
        { k: '② 온라인 테스트', v: '어학・업무 적성（필요시）' },
        { k: '③ 1차 면접', v: '채용팀과 온라인' },
        { k: '④ 2차 면접', v: '배속팀 면접' },
        { k: '⑤ 오퍼 → 비자', v: '조건 확인, EP 신청, 이동・초기 숙박' },
      ],
      
      offices: [
        {
          title: 'G Tower（KL）',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Crect fill="%233b82f6" x="150" y="50" width="100" height="200"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3EG Tower%3C/text%3E%3C/svg%3E',
          points: ['Ampang Park 직결（MRT/LRT）', 'KLCC/Intermark 도보권', 'Grade A 오피스'],
        },
        {
          title: 'Penang — Livingston',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ecfdf5" width="400" height="300"/%3E%3Crect fill="%2310b981" x="140" y="90" width="120" height="120"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3ELivingston%3C/text%3E%3C/svg%3E',
          points: ['조용한 환경', '음식점・약국', '접근성 좋음'],
        },
        {
          title: 'Penang — One Precinct',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3e8ff" width="400" height="300"/%3E%3Ccircle fill="%239333ea" cx="200" cy="150" r="60"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3EOne Precinct%3C/text%3E%3C/svg%3E',
          points: ['Bayan Baru의 모던 빌딩', '공항에서 약 15분', 'Queensbay Mall 근처'],
        },
        {
          title: 'Penang — GBS@Mahsuri',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff7ed" width="400" height="300"/%3E%3Ccircle fill="%23fb923c" cx="200" cy="150" r="50"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3EMahsuri%3C/text%3E%3C/svg%3E',
          points: ['주의 GBS 허브', 'IT/BPO 집적', '도보권에 생활 인프라'],
        },
        {
          title: 'Bangkok — Singha Complex',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef2f2" width="400" height="300"/%3E%3Cpath fill="%23ef4444" d="M200 100l50 100h-100z"/%3E%3Ctext x="200" y="170" text-anchor="middle" fill="white" font-size="18" font-weight="bold"%3ESingha%3C/text%3E%3C/svg%3E',
          points: ['BTS/MRT 인근', '일본인 커뮤니티에 편리', '모던한 상업 복합'],
        },
      ],
      
      team: [
        {
          name: 'Maho',
          role: 'TA Lead | Japan Market',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fff0f8" width="200" height="200"/%3E%3Ccircle fill="%23ff0082" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EMaho%3C/text%3E%3C/svg%3E',
          bio: '첫 해외 취업도 일본어로 동행. 커리어 상담부터 비자 신청까지 지원.',
        },
        {
          name: 'Kenta',
          role: 'Senior Recruiter',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23e0f2ff" width="200" height="200"/%3E%3Ccircle fill="%233b82f6" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EKenta%3C/text%3E%3C/svg%3E',
          bio: '말레이시아 거주 5년. 현지 생활・일의 리얼을 기반으로 조언.',
        },
        {
          name: 'Aya',
          role: 'Recruitment Coordinator',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f0fdfa" width="200" height="200"/%3E%3Ccircle fill="%2314b8a6" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EAya%3C/text%3E%3C/svg%3E',
          bio: '면접 일정부터 입사 절차까지 원활한 전직을 지원.',
        },
        {
          name: 'Leo',
          role: 'Talent Sourcer',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fefce8" width="200" height="200"/%3E%3Ccircle fill="%23facc15" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3ELeo%3C/text%3E%3C/svg%3E',
          bio: '최적의 포지션 제안. 커리어 목표에 맞춰 소개.',
        },
      ],
      
      voices: [
        { quote: '「달라도 괜찮다」가 당연한 것. 안심하고 도전할 수 있습니다.', who: '— TA Team（KL）' },
        { quote: '영어는 매일 실천으로 자연스럽게 늘었습니다.', who: '— JP Member（Penang）' },
        { quote: '주말 해외여행이 현실적. 아시아 허브를 실감.', who: '— JP Member（Bangkok）' },
        { quote: '일본에 있을 때보다 남의 시선을 덜 신경쓰게 되었습니다.', who: '— 채용팀 Maho' },
      ],
      
      faq: [
        {
          q: '영어에 자신이 없어도 지원할 수 있습니까?',
          a: '네, 일본어 중심 포지션이 많습니다. 입사 후 영어력 향상 지원도 있습니다.',
        },
        {
          q: '취업 비자 절차는 어렵습니까?',
          a: '회사가 신청을 대행합니다. 필요 서류도 일본어로 안내합니다.',
        },
        {
          q: '주거는 어떻게 찾으면 좋습니까?',
          a: '현지 에이전트 소개, 오리엔테이션에서의 조언 등을 제공합니다.',
        },
        {
          q: '교대 근무가 있습니까?',
          a: '프로젝트에 따라 24/7 서비스의 야근・주말 교대가 있지만 수당이 붙습니다.',
        },
      ],
      
      galleryImgs: [
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f9ff" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%233b82f6" font-size="24"%3EOffice 1%3C/text%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fff0f8" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%23ff0082" font-size="24"%3EOffice 2%3C/text%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ecfdf5" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%2310b981" font-size="24"%3ETeam%3C/text%3E%3C/svg%3E',
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" fill="%23f59e0b" font-size="24"%3EEvent%3C/text%3E%3C/svg%3E',
      ],
      
      casual: {
        title: '💬 캐주얼 면담 실시 중!',
        bullets: [
          '면접이 아닙니다（불안・의문 해소가 목적）',
          '온라인（Microsoft Teams）으로 약 30분',
          '취업 경험 불문（미경험 OK）',
          '생활비・주거・일하는 방식 등 일본어로 상담 가능',
        ],
      },
    },
  };

  /* ------------------------------------------------------------------------
     3) ChatGPT Prompts — keep existing structure
  -------------------------------------------------------------------------*/
  const CHATGPT_PROMPTS = {
    jp: `あなたは就職アドバイザーです。テレパフォーマンス（Teleperformance）マレーシア／タイ（TP Malaysia / TP Thailand）について、候補者が安心して応募を検討できるよう、以下の条件でポジティブに紹介してください。

【必須メッセージ】
- 私たちは Great Place to Work® を6年連続で受賞しています。
- 日本語スピーカー向けのポジションが多数あり、英語に自信がなくてもスタートしやすいこと。
- 就労ビザ（Employment Pass）の申請サポート、片道航空券、初期ホテル、空港送迎などの移住サポートがあること。

【生活面（例）】
- マレーシア：英語が通じやすい、多文化で食が豊か、住居はプール・ジム付きコンドが一般的、生活コストが日本より抑えやすい。
- タイ（バンコク）：日本人コミュニティが充実、BTS/MRTで移動が快適、日本食や日系医療も多く安心。
- 東南アジアのハブ空港から週末旅行もしやすい。

【トーンと形式】
- 前向きでフレンドリー、かつ現実的。誇張や保証の断定は避ける。
- 箇条書き＋短い段落で読みやすく。
- 最後に「応募」や「カジュアル面談」への自然な誘導（CTA）を添える。`,

    en: `You are a job advisor. Please give a positive, candidate-friendly overview of Teleperformance Malaysia and Thailand (TP Malaysia / TP Thailand) using the guidelines below.

[Must include]
- We are a Great Place to Work® winner for 6 years in a row.
- Many JP-speaking roles, so it's easy for Japanese speakers to start—even if English is still growing.
- Relocation support such as Employment Pass visa guidance, one-way flight, landing hotel, and airport pickup.

[Living examples]
- Malaysia: widely spoken English, multicultural food scene, condos with pool/gym are common, living costs can be lower than Japan.
- Thailand (Bangkok): strong Japanese community, convenient BTS/MRT, plenty of Japanese food and JP-friendly clinics.
- Hub airports make weekend trips around Asia more feasible.

[Tone & format]
- Upbeat, friendly, and realistic—avoid absolute guarantees.
- Use a short intro, clear bullets, and a brief closing CTA to apply or book a casual chat.`,

    kr: `당신은 취업 어드바이저입니다. 텔레퍼포먼스（Teleperformance）말레이시아／태국（TP Malaysia / TP Thailand）에 대해, 지원자가 안심하고 지원을 검토할 수 있도록, 아래 조건으로 긍정적으로 소개해 주세요.

【필수 메시지】
- 저희는 Great Place to Work® 를 6년 연속 수상했습니다.
- 일본어 스피커를 위한 포지션이 다수 있어, 영어에 자신이 없어도 시작하기 쉽다는 것.
- 취업 비자（Employment Pass）의 신청 지원, 편도 항공권, 초기 호텔, 공항 픽업 등의 이주 지원이 있다는 것.

【생활면（예）】
- 말레이시아：영어가 통하기 쉽고, 다문화로 음식이 풍부하며, 주거는 풀・짐 부착 콘도가 일반적, 생활 비용이 일본보다 억제하기 쉽다.
- 태국（방콕）：일본인 커뮤니티가 충실하고, BTS/MRT로 이동이 쾌적하며, 일본 음식이나 일계 의료도 많아 안심.
- 동남아시아의 허브 공항에서 주말 여행도 하기 쉽다.

【톤과 형식】
- 적극적이고 친근하며, 또한 현실적. 과장이나 보장의 단정은 피한다.
- 불릿 포인트＋짧은 단락으로 읽기 쉽게.
- 마지막에 「지원」이나 「캐주얼 면담」으로의 자연스러운 유도（CTA）를 첨부한다.`
  };

  /* ------------------------------------------------------------------------
     4) Exports / エクスポート
  -------------------------------------------------------------------------*/
  window.I18N = I18N;
  window.CONTENT = CONTENT;

  // Helper: get prompt by language code ('jp' default)
  window.getChatGPTPrompt = function getChatGPTPrompt(lang) {
    return CHATGPT_PROMPTS[lang] || CHATGPT_PROMPTS['jp'];
  };

  /* ------------------------------------------------------------------------
     5) Initialization for Ask ChatGPT & copy UX
  -------------------------------------------------------------------------*/
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    // Prefer data-lang; fallback lang; default 'jp'
    const langAttr = root.getAttribute('data-lang') || root.getAttribute('lang') || 'jp';
    const current = ['jp', 'en', 'kr'].includes(langAttr) ? langAttr : 'jp';

    // Initialize textarea content
    const ta = document.getElementById('chatgptPrompt');
    if (ta) {
      ta.value = window.getChatGPTPrompt(current);
    }

    // Copy UX
    const copyBtn = document.getElementById('copyPromptBtn');
    if (copyBtn && ta) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(ta.value);
          const original = copyBtn.textContent;
          const copiedText =
            current === 'jp' ? 'コピーしました！' :
            current === 'kr' ? '복사했습니다!' :
            'Copied!';
          copyBtn.textContent = copiedText;
          setTimeout(() => (copyBtn.textContent = original), 1400);
        } catch (e) {
          ta.select();
          document.execCommand('copy');
        }
      });
    }

    // Optional: if you render language buttons dynamically
    document.querySelectorAll('[data-lang-code]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-lang-code') || 'jp';
        const ta = document.getElementById('chatgptPrompt');
        if (ta && typeof window.getChatGPTPrompt === 'function') {
          ta.value = window.getChatGPTPrompt(code);
        }
      });
    });
  });
})();
