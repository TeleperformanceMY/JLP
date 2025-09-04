/* ============================================================================
   TP Candidate Microsite — translations.js (JAPANESE ONLY)
   Purpose: All content from PPT slides (Japanese only)
   Notes:
     - No EN/KR payloads (lighter).
     - Simple helpers: t(key), applyI18N() for [data-i18n] bindings.
     - Minimal DOM init for ChatGPT copy button.
   Updated: 2025-09-02
============================================================================ */

(function () {
  /* ------------------------------------------------------------------------
     1) I18N — UI strings, headings, CTAs（日本語のみ）
  -------------------------------------------------------------------------*/
  const I18N = {
    jp: {
      // Brand & Header
      'brand.title': 'TP',
      'brand.sub': 'Malaysia · Thailand — 日本語採用',
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

      // Hero section
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

      // Priority Icons (9 main topics)
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
      'chatgpt.note': '※ AIアシスタントに相談できます。',

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

      // Form fields
      'form.name.placeholder': '山田 太郎',
      'form.email.placeholder': 'you@example.com',
      'form.message.placeholder': '気になる求人、移住、英語レベル、入社時期など',
      'form.name.label': 'お名前',
      'form.email.label': 'メールアドレス',
      'form.message.label': 'ご相談内容',
      'form.submit': '送信',

      // Contact thank you message
      contactThanks: (name) =>
        `${name || '応募者'} さん、ありがとうございます！メッセージを受け取りました。`,
    },
  };

  /* ------------------------------------------------------------------------
     2) CONTENT — Dynamic data from PPT slides（日本語のみ）
  -------------------------------------------------------------------------*/
  const CONTENT = {
    // External links
    links: {
      apply: 'https://careerseng-teleperformance.icims.com/jobs/49026/customer-service-representative---japanese-speaking-%28kl%29/job?mode=job&iis=LANDINGPAGE',
      casual: 'https://forms.office.com/e/2UvpbweQww',
      line: 'https://line.me/R/ti/p/@286nmdsd?from=page&searchId=286nmdsd',
    },

    // Japanese content
    jp: {
      // Why join TP?
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

      // Cities
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

      // Benefits
      benefits: [
        { t: '就労ビザサポート', d: 'EP申請を会社が代行（会社負担）。' },
        { t: '渡航・宿泊サポート', d: '片道航空券、初期ホテル、空港送迎。' },
        { t: '給与・手当', d: '夜勤/住宅/時間外手当（プロジェクトによる）。' },
        { t: '医療と保険', d: '医療・歯科・眼科補助、団体保険。' },
        { t: 'キャリア支援', d: '社内異動／JUMPプログラム。' },
        { t: '語学', d: 'GoFluentやLanguage Bootcamp。' },
      ],

      // Interview Process
      processSteps: [
        { k: '① 書類選考', v: '履歴書・職歴（日本語/英語）' },
        { k: '② オンラインテスト', v: '語学・業務適性（必要に応じて）' },
        { k: '③ 一次面接', v: '採用チームとオンライン' },
        { k: '④ 二次面接', v: '配属チームの面接' },
        { k: '⑤ オファー → ビザ', v: '条件確認、EP申請、渡航・初期宿泊' },
      ],

      // Offices
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

      // TA Team
      team: [
        {
          name: 'Joseph',
          role: 'TA Manager | Recruiter',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23e0f2ff" width="200" height="200"/%3E%3Ccircle fill="%233b82f6" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EJoseph%3C/text%3E%3C/svg%3E',
          bio: 'キャリア相談、お気軽にどうぞ。',
        },
        {
          name: 'Maho',
          role: 'TA | Japan Market',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fff0f8" width="200" height="200"/%3E%3Ccircle fill="%23ff0082" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EMaho%3C/text%3E%3C/svg%3E',
          bio: '初めての海外就職も、日本語で伴走します。',
        },
        {
          name: 'Akito',
          role: 'Recruiter',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f0fdfa" width="200" height="200"/%3E%3Ccircle fill="%2314b8a6" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EAkito%3C/text%3E%3C/svg%3E',
          bio: 'キャリア相談、お気軽にどうぞ。',
        },
        {
          name: 'Koyori',
          role: 'Coordinator',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fefce8" width="200" height="200"/%3E%3Ccircle fill="%23facc15" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EKoyori%3C/text%3E%3C/svg%3E',
          bio: '渡航手続きや現地生活もフォローします。',
        },
        {
          name: 'Maya',
          role: 'Sourcer',
          img: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f3e8ff" width="200" height="200"/%3E%3Ccircle fill="%239333ea" cx="100" cy="100" r="40"/%3E%3Ctext x="100" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3EMaya%3C/text%3E%3C/svg%3E',
          bio: 'ご希望のプロジェクトを一緒に探します。',
        },
      ],

      // Employee Testimonials
      voices: [
        { quote: '「違っていい」が当たり前。安心して挑戦できます。', who: '— TA Team（KL）' },
        { quote: '英語は毎日の実践で自然と伸びました。', who: '— JP Member（Penang）' },
        { quote: '週末の海外旅行が現実的。アジアのハブを実感。', who: '— JP Member（Bangkok）' },
        { quote: '日本にいる時より周りの目を気にしなくなった。', who: '— 採用チーム Maho' },
      ],

      // FAQ
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

      // Additional PPT content
      aboutTP: {
        title: 'About Teleperformance',
        body: '世界80カ国以上で事業展開するカスタマーエクスペリエンス企業。日本語スピーカー向けポジションも多数。',
        video: 'https://www.youtube.com/watch?v=aPahVrsApXY&t=8s',
      },

      currentOpenings: {
        title: 'Current Opening',
        positions: ['カスタマーサポート（日本語）', 'ITサポート', '※時期により変動'],
      },

      training: {
        jump: {
          title: 'Training program – JUMP',
          desc: '社内JUMPプログラムの紹介',
        },
        gofluent: {
          title: 'GoFluent',
          desc: '英語学習支援：GoFluentの内容・レベル・利用イメージ',
        },
        bootcamp: {
          title: 'Language Bootcamp',
          desc: '期間・内容・参加条件・効果',
        },
      },

      whyMalaysia: {
        title: 'なぜ今マレーシア',
        points: ['英語が通じやすく多文化', '食が豊富', '生活コストを抑えやすい', '受け入れ体制：移住初心者にもやさしい'],
      },

      workLifeBalance: {
        title: '「仕事」も「暮らし」も、無理なく手に入る国',
        desc: 'コンドミニアムのプール/ジム、外食の気軽さ、オフィスアクセス。',
      },

      accommodation: {
        title: 'Accommodation in Malaysia',
        kl: 'KL：中心部〜近郊、利便性重視のコンドミニアムが豊富。',
        penang: 'Penang：海近く・落ち着いた暮らし、KLよりやや低コスト。',
      },

      weekends: {
        title: 'Active in Your Weekends',
        desc: 'ハブ空港から週末旅行が現実的：アジア各地へ。社内コミュニティやイベントも多数。',
      },

      costOfLiving: {
        title: 'Cost of Living (KL/Penang)',
        desc: '家賃／光熱費／通信／食費／交通の参考感覚値（相場・例）。',
      },

      casual: {
        title: '💬 カジュアル面談実施中！',
        bullets: [
          '面接ではありません（不安・疑問解消が目的）',
          'オンライン（Microsoft Teams）で約30分',
          '就業経験不問（未経験OK）',
          '生活費・住居・働き方など日本語で相談可能',
        ],
      },

      lineAccount: {
        title: 'LINE公式アカウント',
        desc: '最新情報を受け取る、相談窓口',
        url: 'https://line.me/R/ti/p/@286nmdsd?from=page&searchId=286nmdsd',
      },
    },
  };

  /* ------------------------------------------------------------------------
     3) ChatGPT Prompt（日本語のみ）
  -------------------------------------------------------------------------*/
  const CHATGPT_PROMPT_JP = `あなたは就職アドバイザーです。テレパフォーマンス（Teleperformance）マレーシア／タイ（TP Malaysia / TP Thailand）について、候補者が安心して応募を検討できるよう、以下の条件でポジティブに紹介してください。

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
- 最後に「応募」や「カジュアル面談」への自然な誘導（CTA）を添える。`;

  /* ------------------------------------------------------------------------
     4) Public API（軽量）
        - t(key, fallback?): テキスト取得（日本語固定）
        - applyI18N(root?): [data-i18n] 要素に反映（textContent / attr）
  -------------------------------------------------------------------------*/
  function t(key, fallback = '') {
    const v = I18N.jp[key];
    // 関数値（動的テンプレ）もそのまま返す
    return typeof v === 'undefined' ? fallback : v;
  }

  function applyI18N(root) {
    const scope = root instanceof Element ? root : document;
    // [data-i18n]: テキスト（既定）
    scope.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(key, '');
      if (typeof val === 'string') el.textContent = val;
    });
    // [data-i18n-attr]: 属性に適用（例：placeholder,title,href）
    scope.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const pairs = (el.getAttribute('data-i18n-attr') || '').split(',').map(s => s.trim()).filter(Boolean);
      pairs.forEach((pair) => {
        // 形式: attr:key
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (!attr || !key) return;
        const val = t(key, '');
        if (typeof val === 'string') el.setAttribute(attr, val);
      });
    });
  }

  /* ------------------------------------------------------------------------
     5) Exports（日本語のみ）
  -------------------------------------------------------------------------*/
  window.I18N = I18N;               // 直接参照したい場合
  window.CONTENT = CONTENT;         // スライド由来のデータ
  window.t = t;                     // シンプル翻訳
  window.applyI18N = applyI18N;     // DOM反映
  window.getChatGPTPrompt = function getChatGPTPrompt() {
    return CHATGPT_PROMPT_JP;
  };

  /* ------------------------------------------------------------------------
     6) Initialization — Ask ChatGPT 初期化 & クリップボード
  -------------------------------------------------------------------------*/
  document.addEventListener('DOMContentLoaded', () => {
    // i18nを一括適用（日本語固定）
    applyI18N(document);

    // ChatGPT テキストエリア初期値
    const ta = document.getElementById('chatgptPrompt');
    if (ta) ta.value = CHATGPT_PROMPT_JP;

    // コピー
    const copyBtn = document.getElementById('copyPromptBtn');
    if (copyBtn && ta) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(ta.value);
          const original = copyBtn.textContent;
          copyBtn.textContent = 'コピーしました！';
          setTimeout(() => (copyBtn.textContent = original), 1400);
        } catch (e) {
          // Fallback
          ta.select();
          document.execCommand && document.execCommand('copy');
        }
      });
    }
  });
})();
