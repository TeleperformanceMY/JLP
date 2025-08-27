/* ============================================================================
   TP Candidate Microsite — translations.js (Complete with PPT content)
   Purpose / 目的:
     - Provide all UI strings (I18N) and dynamic page content (CONTENT)
     - Centralize ChatGPT prompts per language
     - Language codes: jp (Japanese), en (English), kr (Korean)
   Updated: 2025-12-19
   更新: 2025-12-19 - PPT content integrated / PPTコンテンツを統合
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

      // Hero (from PPT slide 4)
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

      // Secondary Icons
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

      // Benefits
      'benefits.title': '福利厚生ハイライト',
      'benefits.sub': '入社前後のサポートをまとめました',

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
      'brand.sub': 'Malaysia · Thailand — JP recruitment',
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

      'hero.eyebrow': 'Work abroad like you live here.',
      'hero.leading': 'Your next career stage:',
      'hero.lead': 'Malaysia & Thailand as your choice. Take the next step with multinational colleagues.',
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
      'priority.gallery.title': 'Priority Menu (Visual Gallery)',
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
      'chatgpt.note': 'Switching languages updates the prompt.',

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
      'chatgpt.note': '언어를 바꾸면 프롬프트도 바뀝니다.',

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
     2) CONTENT — dynamic page data rendered by app.js (from PPT slides)
  -------------------------------------------------------------------------*/
  const CONTENT = {
    links: {
      apply: 'https://careerseng-teleperformance.icims.com/jobs/49026/customer-service-representative---japanese-speaking-%28kl%29/job?mode=job&iis=LANDINGPAGE',
      casual: 'https://forms.office.com/e/2UvpbweQww',
      line: 'https://line.me/R/ti/p/@286nmdsd?from=page&searchId=286nmdsd',
    },

    /* ========================= 日本語 (jp) ========================= */
    jp: {
      // Why join TP? (from PPT slides 6-7)
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

      // Cities (from PPT slides 11-13)
      cities: [
        {
          id: 'kl',
          title: 'クアラルンプール（KL）',
          img: 'assets/cities/kl.jpg',
          desc: '都市の利便性・交通網・日本食・医療。',
        },
        {
          id: 'penang',
          title: 'ペナン（Penang）',
          img: 'assets/cities/penang.jpg',
          desc: '海・落ち着いた治安・高層コンド・空港アクセス。',
        },
        {
          id: 'bkk',
          title: 'バンコク（Bangkok）',
          img: 'assets/cities/bangkok.jpg',
          desc: '"東南アジアの東京"：日本人コミュニティ・日系医療・BTS/MRT。',
        },
      ],

      // Benefits (from PPT slides 35-36)
      benefits: [
        { t: '就労ビザサポート', d: 'EP申請を会社が代行（会社負担）。' },
        { t: '渡航・宿泊サポート', d: '片道航空券、初期ホテル、空港送迎。' },
        { t: '給与・手当', d: '夜勤/住宅/時間外手当（プロジェクトによる）。' },
        { t: '医療と保険', d: '医療・歯科・眼科補助、団体保険。' },
        { t: 'キャリア支援', d: '社内異動／JUMPプログラム。' },
        { t: '語学', d: 'GoFluentやLanguage Bootcamp。' },
      ],

      // Process (from PPT slides 37-38)
      processSteps: [
        { k: '① 書類選考', v: '履歴書・職歴（日本語/英語）' },
        { k: '② オンラインテスト', v: '語学・業務適性（必要に応じて）' },
        { k: '③ 一次面接', v: '採用チームとオンライン' },
        { k: '④ 二次面接', v: '配属チームの面接' },
        { k: '⑤ オファー → ビザ', v: '条件確認、EP申請、渡航・初期宿泊' },
      ],

      // Offices (from PPT slides 28-32)
      offices: [
        {
          title: 'G Tower（KL）',
          img: 'assets/offices/gtower.jpg',
          points: ['Ampang Park直結（MRT/LRT）', 'KLCC/Intermark徒歩圏', 'Grade Aオフィス'],
        },
        {
          title: 'Penang — Livingston',
          img: 'assets/offices/livingston.jpg',
          points: ['静かな環境', '飲食店・薬局', 'アクセス良好'],
        },
        {
          title: 'Penang — One Precinct',
          img: 'assets/offices/oneprecinct.jpg',
          points: ['Bayan Baruのモダンビル', '空港から約15分', 'Queensbay Mall近く'],
        },
        {
          title: 'Penang — GBS@Mahsuri',
          img: 'assets/offices/mahsuri.jpg',
          points: ['州のGBSハブ', 'IT/BPO集積', '徒歩圏に生活インフラ'],
        },
        {
          title: 'Bangkok — Singha Complex',
          img: 'assets/offices/singha.jpg',
          points: ['BTS/MRT至近', '日本人コミュニティに便利', 'モダンな商業複合'],
        },
      ],

      // TA Team (from PPT slides 21-24, matching your about-tp.html content)
      team: [
        {
          name: 'Joseph',
          role: 'Recruiter',
          img: 'assets/team/kenta.jpg',
          bio: 'キャリア相談、お気軽にどうぞ。',
        },     
         {
          name: 'Maho',
          role: 'TA | Japan Market',
          img: 'assets/team/maho.jpg',
          bio: '初めての海外就職も、日本語で伴走します。',
        },
        {
          name: 'Akito',
          role: 'Recruiter',
          img: 'assets/team/kenta.jpg',
          bio: 'キャリア相談、お気軽にどうぞ。',
        },
        {
          name: 'Koyori',
          role: 'Coordinator',
          img: 'assets/team/aya.jpg',
          bio: '渡航手続きや現地生活もフォローします。',
        },
        {
          name: 'Maya',
          role: 'Sourcer',
          img: 'assets/team/leo.jpg',
          bio: 'ご希望のプロジェクトを一緒に探します。',
        },
      ],

      // Testimonials (from PPT slide 26 & 9)
      voices: [
        { quote: '「違っていい」が当たり前。安心して挑戦できます。', who: '— TA Team（KL）' },
        { quote: '英語は毎日の実践で自然と伸びました。', who: '— JP Member（Penang）' },
        { quote: '週末の海外旅行が現実的。アジアのハブを実感。', who: '— JP Member（Bangkok）' },
        { quote: '日本にいる時より周りの目を気にしなくなった。', who: '— 採用チーム Maho' },
      ],

      // FAQ (from PPT slide 66)
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

      // Gallery images
      galleryImgs: [
        'assets/gallery/office1.jpg',
        'assets/gallery/office2.jpg',
        'assets/gallery/office3.jpg',
        'assets/gallery/team1.jpg',
      ],

      // Casual Interview (from PPT slide 18)
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

    /* =============================== EN ================================ */
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
          img: 'assets/cities/kl.jpg',
          desc: 'Urban convenience, transport network, Japanese food, healthcare.',
        },
        {
          id: 'penang',
          title: 'Penang',
          img: 'assets/cities/penang.jpg',
          desc: 'Beaches, safe environment, high-rise condos, airport access.',
        },
        {
          id: 'bkk',
          title: 'Bangkok',
          img: 'assets/cities/bangkok.jpg',
          desc: '"Tokyo of SEA": Japanese community, healthcare, BTS/MRT.',
        },
      ],
      
      benefits: [
        { t: 'Visa Support', d: 'Company handles EP application.' },
        { t: 'Relocation', d: 'One-way flight, landing hotel, airport pickup.' },
        { t: 'Pay & Allowances', d: 'Night/housing/overtime allowances (project-based).' },
        { t: 'Medical & Insurance', d: 'Health/dental/vision support, group insurance.' },
        { t: 'Career Programs', d: 'Internal moves & JUMP program.' },
        { t: 'Language', d: 'GoFluent / Language Bootcamps.' },
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
          img: 'assets/offices/gtower.jpg',
          points: ['Ampang Park (MRT/LRT)', 'KLCC/Intermark walkable', 'Grade A office'],
        },
        {
          title: 'Penang — Livingston',
          img: 'assets/offices/livingston.jpg',
          points: ['Quiet area', 'Food/pharmacy nearby', 'Easy commute'],
        },
        {
          title: 'Penang — One Precinct',
          img: 'assets/offices/oneprecinct.jpg',
          points: ['Modern building in Bayan Baru', '15 min from airport', 'Near Queensbay Mall'],
        },
        {
          title: 'Penang — GBS@Mahsuri',
          img: 'assets/offices/mahsuri.jpg',
          points: ['GBS hub', 'IT/BPO cluster', 'Walkable amenities'],
        },
        {
          title: 'Bangkok — Singha Complex',
          img: 'assets/offices/singha.jpg',
          points: ['Near BTS/MRT', 'Convenient for Japanese community', 'Modern commercial complex'],
        },
      ],
      
      team: [
        {
          name: 'Maho',
          role: 'TA | Japan Market',
          img: 'assets/team/maho.jpg',
          bio: 'Supporting your first overseas career journey in Japanese.',
        },
        {
          name: 'Kenta',
          role: 'Recruiter',
          img: 'assets/team/kenta.jpg',
          bio: 'Feel free to discuss your career anytime.',
        },
        {
          name: 'Aya',
          role: 'Coordinator',
          img: 'assets/team/aya.jpg',
          bio: 'Supporting your relocation and local life setup.',
        },
        {
          name: 'Leo',
          role: 'Sourcer',
          img: 'assets/team/leo.jpg',
          bio: 'Let\'s find your ideal project together.',
        },
      ],
      
      voices: [
        { quote: '"It\'s okay to be different" is the norm. I can challenge myself with confidence.', who: '— TA Team (KL)' },
        { quote: 'My English improved naturally through daily practice.', who: '— JP Member (Penang)' },
        { quote: 'Weekend trips abroad are actually realistic. I really feel the hub advantage.', who: '— JP Member (Bangkok)' },
        { quote: 'I care less about others\' opinions than when I was in Japan.', who: '— TA Team Maho' },
      ],
      
      faq: [
        {
          q: 'Can I apply if my English is basic?',
          a: 'Yes — many JP-first roles. We also support growth after you join.',
        },
        {
          q: 'Is the work visa process difficult?',
          a: 'The company handles EP application and guides you in Japanese.',
        },
        {
          q: 'How do I find housing?',
          a: 'We share local agents and give practical tips in orientation.',
        },
        {
          q: 'Are there shift work requirements?',
          a: 'Some 24/7 projects have night/weekend shifts with allowances.',
        },
      ],
      
      galleryImgs: [
        'assets/gallery/office1.jpg',
        'assets/gallery/office2.jpg',
        'assets/gallery/office3.jpg',
        'assets/gallery/team1.jpg',
      ],
      
      casual: {
        title: '💬 Casual Interview Available!',
        bullets: [
          'Not a formal interview (goal: address concerns and questions)',
          'Online via Microsoft Teams (~30 minutes)',
          'No work experience required (first-timers welcome)',
          'Discuss living costs, housing, work style in Japanese',
        ],
      },
    },

    /* =============================== KR ================================ */
    kr: {
      why1: [
        { t: '🌍 글로벌 환경', d: '다국적 팀에서 일본어와 영어를 사용하며 일하기.' },
        { t: '🛠 커리어 성장', d: '트레이너/QA/리더/매니저로 성장 가능.' },
        { t: '🛫 이주 지원', d: '취업 비자, 편도 항공권, 초기 호텔, 공항 픽업.' },
      ],
      why2: [
        { t: '🌈 다양성', d: '국적・연령・성별을 넘어 플랫한 문화.' },
        { t: '✅ 이런 분들께', d: '일본어를 활용하고 싶은 / 시야를 넓히고 싶은 / 해외 생활을 즐기고 싶은 분.' },
        { t: '💰 여유로운 생활', d: '낮은 물가로 외식, 카페, 취미를 더 즐길 수 있다.' },
      ],
      
      cities: [
        {
          id: 'kl',
          title: '쿠알라룸푸르（KL）',
          img: 'assets/cities/kl.jpg',
          desc: '도시의 편리함, 교통망, 일본 음식, 의료.',
        },
        {
          id: 'penang',
          title: '페낭（Penang）',
          img: 'assets/cities/penang.jpg',
          desc: '해변, 안전한 환경, 고층 콘도, 공항 접근성.',
        },
        {
          id: 'bkk',
          title: '방콕（Bangkok）',
          img: 'assets/cities/bangkok.jpg',
          desc: '"동남아의 도쿄": 일본인 커뮤니티, 의료, BTS/MRT.',
        },
      ],
      
      benefits: [
        { t: '비자 지원', d: '회사가 EP 신청 대행.' },
        { t: '이주 지원', d: '편도 항공권, 초기 호텔, 공항 픽업.' },
        { t: '급여・수당', d: '야간/주택/잔업 수당(프로젝트별).' },
        { t: '의료・보험', d: '의료/치과/안과 지원, 단체 보험.' },
        { t: '커리어 프로그램', d: '사내 이동 & JUMP 프로그램.' },
        { t: '어학', d: 'GoFluent / Language Bootcamp.' },
      ],
      
      processSteps: [
        { k: '① 서류 심사', v: '이력서（일본어/영어）' },
        { k: '② 온라인 테스트', v: '어학・업무 적성（필요시）' },
        { k: '③ 1차 면접', v: '채용팀과 온라인' },
        { k: '④ 2차 면접', v: '배치팀 면접' },
        { k: '⑤ 오퍼 → 비자', v: '조건 확인, EP 신청, 항공・초기 숙박' },
      ],
      
      offices: [
        {
          title: 'G Tower（KL）',
          img: 'assets/offices/gtower.jpg',
          points: ['Ampang Park 직결（MRT/LRT）', 'KLCC/Intermark 도보권', 'Grade A 오피스'],
        },
        {
          title: 'Penang — Livingston',
          img: 'assets/offices/livingston.jpg',
          points: ['조용한 환경', '음식점・약국 인근', '통근 편리'],
        },
        {
          title: 'Penang — One Precinct',
          img: 'assets/offices/oneprecinct.jpg',
          points: ['Bayan Baru의 모던 빌딩', '공항에서 15분', 'Queensbay Mall 근처'],
        },
        {
          title: 'Penang — GBS@Mahsuri',
          img: 'assets/offices/mahsuri.jpg',
          points: ['GBS 허브', 'IT/BPO 클러스터', '도보권 생활 인프라'],
        },
        {
          title: 'Bangkok — Singha Complex',
          img: 'assets/offices/singha.jpg',
          points: ['BTS/MRT 인근', '일본인 커뮤니티에 편리', '모던한 상업 단지'],
        },
      ],
      
      team: [
        {
          name: 'Maho',
          role: 'TA | Japan Market',
          img: 'assets/team/maho.jpg',
          bio: '첫 해외 취업도 일본어로 동행합니다.',
        },
        {
          name: 'Kenta',
          role: 'Recruiter',
          img: 'assets/team/kenta.jpg',
          bio: '커리어 상담, 편하게 문의하세요.',
        },
        {
          name: 'Aya',
          role: 'Coordinator',
          img: 'assets/team/aya.jpg',
          bio: '이주 절차와 현지 생활도 지원합니다.',
        },
        {
          name: 'Leo',
          role: 'Sourcer',
          img: 'assets/team/leo.jpg',
          bio: '원하시는 프로젝트를 함께 찾아드립니다.',
        },
      ],
      
      voices: [
        { quote: '"달라도 괜찮다"가 당연한 것. 안심하고 도전할 수 있습니다.', who: '— TA Team（KL）' },
        { quote: '영어는 매일 실천으로 자연스럽게 늘었습니다.', who: '— JP Member（Penang）' },
        { quote: '주말 해외여행이 현실적. 허브의 장점을 실감합니다.', who: '— JP Member（Bangkok）' },
        { quote: '일본에 있을 때보다 남의 시선을 덜 신경쓰게 되었습니다.', who: '— 채용팀 Maho' },
      ],
      
      faq: [
        {
          q: '영어에 자신이 없어도 지원 가능합니까?',
          a: '네, 일본어 중심 포지션이 많습니다. 입사 후 영어 지원도 있습니다.',
        },
        {
          q: '취업 비자 절차는 어렵습니까?',
          a: '회사가 EP 신청을 대행하고 일본어로 안내합니다.',
        },
        {
          q: '주거는 어떻게 찾으면 좋습니까?',
          a: '현지 에이전트 소개, 오리엔테이션에서의 조언 등을 제공합니다.',
        },
        {
          q: '교대 근무가 있습니까?',
          a: '일부 24/7 프로젝트는 야간/주말 근무가 있지만 수당이 지급됩니다.',
        },
      ],
      
      galleryImgs: [
        'assets/gallery/office1.jpg',
        'assets/gallery/office2.jpg',
        'assets/gallery/office3.jpg',
        'assets/gallery/team1.jpg',
      ],
      
      casual: {
        title: '💬 캐주얼 면담 진행 중!',
        bullets: [
          '공식 면접이 아닙니다 (목적: 우려사항과 질문 해결)',
          'Microsoft Teams로 온라인 진행 (~30분)',
          '경력 무관 (초보자 환영)',
          '생활비, 주거, 근무 방식을 일본어로 상담',
        ],
      },
    },
  };

  /* ------------------------------------------------------------------------
     3) ChatGPT Prompts — keep existing, add KR
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
