/* ============================================================
   i18n — Español / English / 日本語
   ============================================================ */

const I18N = {
  es: {
    roles: [
      "Data Scientist.",
      "AI Engineer.",
      "Ingeniero Comercial.",
      "Vendo alfajores.",
      "Saco copias de llaves.",
      "Soy otaku.",
    ],
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.skills": "Skills",
    "nav.education": "Educación",
    "nav.contact": "Contacto",

    "hero.kicker": "Hola, mi nombre es",
    "hero.desc": "<strong>Especialista Data Scientist</strong> en <strong>Entel</strong>, enfocado en Inteligencia Artificial Generativa. Ingeniero Comercial UTFSM. Experto en convertir los datos y la IA en valor.",
    "hero.linkedin": "LinkedIn",

    "about.kicker": "// 01. sobre-mí",
    "about.title": "Un poco de <span class=\"grad\">mí</span>",
    "about.p1": "¡Hola! Soy <strong>Santiago</strong>, Data Scientist en <strong>Entel</strong>, donde diseño y gestiono productos de <strong>IA Generativa</strong> para la experiencia del cliente. Ingeniero Comercial UTFSM, con un pie en las finanzas y el otro en el machine learning.",
    "about.p2": "Mi camino empezó analizando riesgo financiero y derivados, pasó por la automatización con VBA (ahorrando <strong>18 horas mensuales</strong>), y llegó hasta el NLP y los modelos de lenguaje, tema de mi tesis de pregrado. Hoy lidero iniciativas de GenAI desde el PoC hasta el piloto.",
    "about.p3": "Fuera del código: enseño (ayudante de cátedra y tutor por 5 años), aprendo idiomas (inglés C1) y soy <em>nerd orgulloso</em> — anime, datos y buen café.",
    "about.fact1": "Ayudante de cátedra",
    "about.fact2": "Ahorradas / mes con VBA",
    "about.fact3": "Inglés certificado",
    "about.fact4": "En Entel · actual",

    "exp.kicker": "// 02. experiencia",
    "exp.title": "Dónde he <span class=\"grad\">trabajado</span>",
    "exp.j1.title": "Especialista Data Scientist",
    "exp.j1.date": "nov. 2025 — presente",
    "exp.j1.p1": "Diseño y gestión de productos de IA Generativa aplicados a la experiencia del cliente, liderando iniciativas end-to-end desde PoC hasta piloto en canales presencial y remoto.",
    "exp.j1.p2": "Análisis de datos de interacciones mediante pipelines de transcripción y procesamiento de audio con IA, generando insights sobre calidad de servicio y desempeño comercial.",
    "exp.j1.p3": "Evaluación de viabilidad económica (FinOps) de soluciones de IA, estimando costos operativos y ROI para escalar iniciativas de GenAI.",
    "exp.j2.title": "Data Scientist",
    "exp.j2.date": "mar. 2025 — nov. 2025",
    "exp.j2.p1": "Seguimiento de proyectos de IA generativa para acelerar time-to-value y maximizar el ROI.",
    "exp.j2.p2": "Extracción de insights accionables mediante análisis de datos para monitoreo continuo y optimización de proyectos tecnológicos.",
    "exp.j2.p3": "Desarrollo de aplicaciones inteligentes integrando LLMs en soluciones end-to-end de ciencia de datos.",
    "exp.j3.title": "Analista Riesgo Operacional",
    "exp.j3.date": "jul. 2024 — feb. 2025",
    "exp.j3.p1": "Identificación y seguimiento de riesgos en proyectos de tecnología y mercado bajo estándares <strong>ISO 27001</strong>.",
    "exp.j3.p2": "Elaboración de informes para cumplimiento normativo en Chile, Perú y Colombia.",
    "exp.j3.p3": "Dashboards en Power BI y macros en Excel para clientes internos, mejorando eficiencia y facilitando decisiones basadas en riesgo.",
    "exp.j4.title": "Asistente de investigación",
    "exp.j4.date": "2023 · 7 meses",
    "exp.j4.p1": "Investigación en NLP para el desarrollo de aplicaciones con LLMs y su implementación en casos reales de negocio.",
    "exp.j4.p2": "Procesos de ETL con Python y Selenium.",
    "exp.j4.p3": "Análisis de datos y machine learning aplicado a investigación universitaria.",
    "exp.j5.title": "Internship — Risk &amp; Control",
    "exp.j5.date": "dic. 2022 — abr. 2023",
    "exp.j5.p1": "Optimización de procesos con macros (VBA), ahorrando <strong>18 horas al mes</strong>.",
    "exp.j5.p2": "Análisis y monitoreo de derivados financieros (SWAP, NDF, CDS).",
    "exp.j5.p3": "Mejora de informes de riesgo para portafolios de renta variable nacional e internacional.",
    "exp.j6.title": "Ayudante de Cátedra · Tutor · Asistente",
    "exp.j6.p1": "Asistente de investigación en NLP y minería de texto con R <span>2022</span>",
    "exp.j6.p2": "Tutor CIAC: programación (Python, VBA), bases de datos y Excel <span>2021–2022</span>",
    "exp.j6.p3": "Tutor USM-CORFO VIRALIZA: mentoría a estudiantes en emprendimiento, design thinking y programación <span>2021</span>",
    "exp.c1": "Dirección Financiera <span>2023</span>",
    "exp.c2": "Finanzas Corporativas <span>2022</span>",
    "exp.c3": "Dirección Financiera <span>2022</span>",
    "exp.c4": "Econometría <span>2022</span>",
    "exp.c5": "Métodos Cuantitativos p/ Negocios <span>2021</span>",
    "exp.c6": "Emprendimiento e Innovación <span>2023</span>",
    "exp.c7": "Economía A1 <span>2019</span>",
    "exp.j7.title": "Becario de Marketing",
    "exp.j7.date": "ene. 2021 — mar. 2021",
    "exp.j7.p1": "Estudios de mercado y levantamiento de información para estrategia de marketing digital.",
    "exp.j7.p2": "Implementación de campañas en Google Ads, Facebook Ads y trabajo con influencers.",

    "skills.title": "Mi <span class=\"grad\">caja de herramientas</span>",
    "skills.card2": "<span class=\"skill-ico\">◈</span> Backend &amp; Datos",
    "skills.card3": "<span class=\"skill-ico\">◈</span> Finanzas &amp; BI",
    "skills.card4": "<span class=\"skill-ico\">◈</span> Herramientas",

    "edu.kicker": "// 04. educación",
    "edu.title": "Formación <span class=\"grad\">académica</span>",
    "edu1.title": "Ingeniería Comercial",
    "edu1.desc": "Mención administración de empresas con fuerte base cuantitativa. Tesis sobre riesgos de modelos LLM.",
    "edu2.years": "2020 — actualidad",
    "edu2.title": "Escuela de Data Science",
    "edu2.desc": "Formación autodidacta continua en ciencia de datos, machine learning y visualización.",
    "edu3.desc": "Certificación de inglés avanzado nivel C1 del marco común europeo.",
    "edu4.years": "Honores",
    "edu4.title": "Lista de Honor y Excelencia",
    "edu4.desc": "Reconocimiento académico por rendimiento destacado durante la carrera de Ingeniería Comercial.",

    "contact.kicker": "// 05. contacto",
    "contact.title": "¿Trabajamos <span class=\"grad\">juntos?</span>",
    "contact.desc": "Siempre estoy abierto a conversar sobre datos, finanzas, machine learning o nuevas oportunidades. Escríbeme y te respondo pronto.",

    "footer.main": "Diseñado y construido por <strong>Santiago Vasconcello</strong> · <span id=\"year\"></span>",
    "footer.sub": "Santiago, Chile — hecho a mano con HTML, CSS y JS",

    "tag.riesgo": "Riesgo",
    "tag.riesgo-gestion": "Gestión de riesgo",
    "tag.derivados": "Derivados",
    "tag.docencia": "Docencia",
    "tag.econometria": "Econometría",
    "tag.gestion-proyectos": "Gestión de proyectos",
    "tag.market-research": "Market Research",
  },

  en: {
    roles: [
      "Data Scientist.",
      "AI Engineer.",
      "Commercial Engineer.",
      "I sell alfajores.",
      "I copy keys.",
      "I'm an otaku.",
    ],
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.kicker": "Hi, my name is",
    "hero.desc": "<strong>Specialist Data Scientist</strong> at <strong>Entel</strong>, focused on Generative Artificial Intelligence. Commercial Engineer UTFSM. Expert at turning data and AI into value.",
    "hero.linkedin": "LinkedIn",

    "about.kicker": "// 01. about",
    "about.title": "A bit about <span class=\"grad\">me</span>",
    "about.p1": "Hi! I'm <strong>Santiago</strong>, Data Scientist at <strong>Entel</strong>, where I design and manage <strong>Generative AI</strong> products for customer experience. Commercial Engineer from UTFSM, with one foot in finance and the other in machine learning.",
    "about.p2": "My path started analyzing financial risk and derivatives, moved through VBA automation (saving <strong>18 hours per month</strong>), and reached NLP and language models, the topic of my undergraduate thesis. Today I lead GenAI initiatives from PoC to pilot.",
    "about.p3": "Away from code: I teach (teaching assistant and tutor for 5 years), learn languages (English C1) and I'm a <em>proud nerd</em> — anime, data and good coffee.",
    "about.fact1": "Teaching assistant",
    "about.fact2": "Saved / month w/ VBA",
    "about.fact3": "Certified English",
    "about.fact4": "At Entel · current",

    "exp.kicker": "// 02. experience",
    "exp.title": "Where I've <span class=\"grad\">worked</span>",
    "exp.j1.title": "Specialist Data Scientist",
    "exp.j1.date": "Nov 2025 — present",
    "exp.j1.p1": "Design and management of Generative AI products applied to customer experience, leading end-to-end initiatives from PoC to pilot across in-person and remote channels.",
    "exp.j1.p2": "Analysis of interaction data via AI transcription and audio-processing pipelines, generating insights on service quality and commercial performance.",
    "exp.j1.p3": "Economic viability (FinOps) assessment of AI solutions, estimating operating costs and ROI to scale GenAI initiatives.",
    "exp.j2.title": "Data Scientist",
    "exp.j2.date": "Mar 2025 — Nov 2025",
    "exp.j2.p1": "Tracking of generative AI projects to accelerate time-to-value and maximize ROI.",
    "exp.j2.p2": "Extraction of actionable insights through data analysis for continuous monitoring and optimization of tech projects.",
    "exp.j2.p3": "Development of smart applications integrating LLMs into end-to-end data science solutions.",
    "exp.j3.title": "Operational Risk Analyst",
    "exp.j3.date": "Jul 2024 — Feb 2025",
    "exp.j3.p1": "Identification and tracking of risks in technology and market projects under <strong>ISO 27001</strong> standards.",
    "exp.j3.p2": "Preparation of reports for regulatory compliance in Chile, Peru, and Colombia.",
    "exp.j3.p3": "Power BI dashboards and Excel macros for internal clients, improving efficiency and enabling risk-based decisions.",
    "exp.j4.title": "Research Assistant",
    "exp.j4.date": "2023 · 7 months",
    "exp.j4.p1": "NLP research for developing applications with LLMs and their implementation in real business cases.",
    "exp.j4.p2": "ETL processes with Python and Selenium.",
    "exp.j4.p3": "Data analysis and machine learning applied to university research.",
    "exp.j5.title": "Internship — Risk &amp; Control",
    "exp.j5.date": "Dec 2022 — Apr 2023",
    "exp.j5.p1": "Process optimization with macros (VBA), saving <strong>18 hours per month</strong>.",
    "exp.j5.p2": "Analysis and monitoring of financial derivatives (SWAP, NDF, CDS).",
    "exp.j5.p3": "Improvement of risk reports for domestic and international equity portfolios.",
    "exp.j6.title": "Teaching Assistant · Tutor · Assistant",
    "exp.j6.p1": "Research assistant in NLP and text mining with R <span>2022</span>",
    "exp.j6.p2": "CIAC tutor: programming (Python, VBA), databases and Excel <span>2021–2022</span>",
    "exp.j6.p3": "USM-CORFO VIRALIZA tutor: mentoring students in entrepreneurship, design thinking and programming <span>2021</span>",
    "exp.c1": "Financial Management <span>2023</span>",
    "exp.c2": "Corporate Finance <span>2022</span>",
    "exp.c3": "Financial Management <span>2022</span>",
    "exp.c4": "Econometrics <span>2022</span>",
    "exp.c5": "Quantitative Methods for Business <span>2021</span>",
    "exp.c6": "Entrepreneurship &amp; Innovation <span>2023</span>",
    "exp.c7": "Economics A1 <span>2019</span>",
    "exp.j7.title": "Marketing Intern",
    "exp.j7.date": "Jan 2021 — Mar 2021",
    "exp.j7.p1": "Market research and information gathering for digital marketing strategy.",
    "exp.j7.p2": "Implementation of campaigns on Google Ads, Facebook Ads and work with influencers.",

    "skills.title": "My <span class=\"grad\">toolbox</span>",
    "skills.card2": "<span class=\"skill-ico\">◈</span> Backend &amp; Data",
    "skills.card3": "<span class=\"skill-ico\">◈</span> Finance &amp; BI",
    "skills.card4": "<span class=\"skill-ico\">◈</span> Tools",

    "edu.kicker": "// 04. education",
    "edu.title": "Academic <span class=\"grad\">background</span>",
    "edu1.title": "Commercial Engineering",
    "edu1.desc": "Specialization in business administration with a strong quantitative foundation. Thesis on risks of LLM models.",
    "edu2.years": "2020 — present",
    "edu2.title": "Data Science School",
    "edu2.desc": "Ongoing self-taught training in data science, machine learning and visualization.",
    "edu3.desc": "Advanced English certification, level C1 of the Common European Framework.",
    "edu4.years": "Honors",
    "edu4.title": "Honor &amp; Excellence List",
    "edu4.desc": "Academic recognition for outstanding performance during the Commercial Engineering degree.",

    "contact.kicker": "// 05. contact",
    "contact.title": "Let's work <span class=\"grad\">together?</span>",
    "contact.desc": "I'm always open to chat about data, finance, machine learning or new opportunities. Write me and I'll reply soon.",

    "footer.main": "Designed &amp; built by <strong>Santiago Vasconcello</strong> · <span id=\"year\"></span>",
    "footer.sub": "Santiago, Chile — handcrafted with HTML, CSS &amp; JS",

    "tag.riesgo": "Risk",
    "tag.riesgo-gestion": "Risk management",
    "tag.derivados": "Derivatives",
    "tag.docencia": "Teaching",
    "tag.econometria": "Econometrics",
    "tag.gestion-proyectos": "Project management",
    "tag.market-research": "Market Research",
  },

  ja: {
    roles: [
      "No hablo japonés.",
      "Pero soy otaku. 🍵",
    ],
    "nav.about": "私について",
    "nav.experience": "職歴",
    "nav.skills": "スキル",
    "nav.education": "学歴",
    "nav.contact": "お問い合わせ",

    "hero.kicker": "こんにちは、私の名前は",
    "hero.desc": "<strong>Entel</strong> の <strong>スペシャリストデータサイエンティスト</strong>。生成AIを専門とする UTFSM 商学エンジニア。データとAIを価値に変える専門家。",
    "hero.linkedin": "LinkedIn",

    "about.kicker": "// 01. 私について",
    "about.title": "<span class=\"grad\">私</span>について少々",
    "about.p1": "こんにちは。<strong>Santiago</strong> です、<strong>Entel</strong> のデータサイエンティストで、顧客体験向けの<strong>生成AI</strong>製品を設計・管理しています。UTFSM 商学エンジニアで、片足はファイナンス、もう片足は機械学習にあります。",
    "about.p2": "私の道は金融リスクとデリバティブの分析から始まり、VBA による自動化（<strong>月18時間</strong>削減）を経て、NLP と大規模言語モデル（私の卒業論文のテーマ）に至りました。現在は GenAI イニシアティブを PoC からパイロットまで主導しています。",
    "about.p3": "コードの外では：教育（教育助手・チューターを5年間）、語学学習（英語 C1）、そして <em>誇り高きオタク</em> — アニメとデータと美味しいコーヒー。",
    "about.fact1": "教育助手",
    "about.fact2": "VBAで月次削減",
    "about.fact3": "英語資格",
    "about.fact4": "Entel・現職",

    "exp.kicker": "// 02. 職歴",
    "exp.title": "<span class=\"grad\">働いてきた</span>場所",
    "exp.j1.title": "スペシャリストデータサイエンティスト",
    "exp.j1.date": "2025年11月 — 現在",
    "exp.j1.p1": "顧客体験に応用する生成AI製品の設計・管理。PoCからパイロットまでエンドツーエンドで主導し、対面・リモートチャネルで展開。",
    "exp.j1.p2": "AIによる書き起こし・音声処理パイプラインを用いたインタラクションデータ分析。サービス品質と営業パフォーマンスのインサイトを生成。",
    "exp.j1.p3": "AIソリューションの経済的実現性（FinOps）評価。運用コストとROIを試算し、GenAIイニシアティブを拡大。",
    "exp.j2.title": "データサイエンティスト",
    "exp.j2.date": "2025年3月 — 2025年11月",
    "exp.j2.p1": "生成AIプロジェクトの追跡。time-to-valueを加速しROIを最大化。",
    "exp.j2.p2": "データ分析による実行可能なインサイトの抽出。技術プロジェクトの継続的モニタリングと最適化。",
    "exp.j2.p3": "LLMを統合したエンドツーエンドのデータサイエンスソリューションとしてのスマートアプリ開発。",
    "exp.j3.title": "オペレーショナルリスクアナリスト",
    "exp.j3.date": "2024年7月 — 2025年2月",
    "exp.j3.p1": "<strong>ISO 27001</strong> 基準に基づく技術・市場プロジェクトのリスク特定・追跡。",
    "exp.j3.p2": "チリ・ペルー・コロンビアの規制対応向けレポート作成。",
    "exp.j3.p3": "Power BIダッシュボードとExcelマクロによる内部顧客支援。効率向上とリスクベースの意思決定を支援。",
    "exp.j4.title": "研究アシスタント",
    "exp.j4.date": "2023年・7ヶ月",
    "exp.j4.p1": "LLMを用いたアプリ開発のためのNLP研究と、実際のビジネスケースへの実装。",
    "exp.j4.p2": "PythonとSeleniumによるETLプロセス。",
    "exp.j4.p3": "大学研究に応用したデータ分析と機械学習。",
    "exp.j5.title": "インターンシップ — Risk &amp; Control",
    "exp.j5.date": "2022年12月 — 2023年4月",
    "exp.j5.p1": "マクロ（VBA）によるプロセス最適化、<strong>月18時間</strong>を削減。",
    "exp.j5.p2": "金融派生商品（SWAP・NDF・CDS）の分析・監視。",
    "exp.j5.p3": "国内・国際株式ポートフォリオのリスクレポート改善。",
    "exp.j6.title": "教育助手 ・ チューター ・ アシスタント",
    "exp.j6.p1": "NLPとテキストマイニングの研究アシスタント（R使用） <span>2022</span>",
    "exp.j6.p2": "CIACチューター：プログラミング（Python・VBA）、データベース、Excel <span>2021–2022</span>",
    "exp.j6.p3": "USM-CORFO VIRALIZAチューター：学生への起業・デザイン思考・プログラミングメンター <span>2021</span>",
    "exp.c1": "財務管理 <span>2023</span>",
    "exp.c2": "企業財務 <span>2022</span>",
    "exp.c3": "財務管理 <span>2022</span>",
    "exp.c4": "計量経済学 <span>2022</span>",
    "exp.c5": "ビジネスのための定量手法 <span>2021</span>",
    "exp.c6": "起業・イノベーション <span>2023</span>",
    "exp.c7": "経済学A1 <span>2019</span>",
    "exp.j7.title": "マーケティングインターン",
    "exp.j7.date": "2021年1月 — 2021年3月",
    "exp.j7.p1": "デジタルマーケティング戦略のための市場調査と情報収集。",
    "exp.j7.p2": "Google Ads・Facebook Adsでのキャンペーン実施とインフルエンサー連携。",

    "skills.title": "私の<span class=\"grad\">ツールボックス</span>",
    "skills.card2": "<span class=\"skill-ico\">◈</span> バックエンド &amp; データ",
    "skills.card3": "<span class=\"skill-ico\">◈</span> 財務 &amp; BI",
    "skills.card4": "<span class=\"skill-ico\">◈</span> ツール",

    "edu.kicker": "// 04. 学歴",
    "edu.title": "<span class=\"grad\">学歴</span>",
    "edu1.title": "商工学",
    "edu1.desc": "ビジネス管理専攻、強固な定量基盤。LLMモデルのリスクに関する卒業論文。",
    "edu2.years": "2020 — 現在",
    "edu2.title": "データサイエンススクール",
    "edu2.desc": "データサイエンス、機械学習、可視化の継続的な独学研修。",
    "edu3.desc": "欧州共通参照枠準拠の上級英語C1認定。",
    "edu4.years": "受賞",
    "edu4.title": "名誉・優秀者名簿",
    "edu4.desc": "商工学専攻中の優秀な成績に対する学業表彰。",

    "contact.kicker": "// 05. お問い合わせ",
    "contact.title": "一緒に<span class=\"grad\">働きませんか？</span>",
    "contact.desc": "データ、ファイナンス、機械学習、新しい機会について語るのは大歓迎です。メッセージを送ってください、すぐに返信します。",

    "footer.main": "デザイン・構築：<strong>Santiago Vasconcello</strong> · <span id=\"year\"></span>",
    "footer.sub": "サンティアゴ、チリ — HTML・CSS・JSで手作り",

    "tag.riesgo": "リスク",
    "tag.riesgo-gestion": "リスク管理",
    "tag.derivados": "デリバティブ",
    "tag.docencia": "教育",
    "tag.econometria": "計量経済学",
    "tag.gestion-proyectos": "プロジェクト管理",
    "tag.market-research": "市場調査",
  },
};

/* ---------- Aplicar idioma ---------- */
function applyLang(lang) {
  const dict = I18N[lang] || I18N.es;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  // botones del dropdown
  document.querySelectorAll(".lang-menu button").forEach((b) => {
    const active = b.dataset.lang === lang;
    b.setAttribute("aria-checked", String(active));
    b.classList.toggle("active", active);
  });
  document.getElementById("langCurrent").textContent = lang.toUpperCase();

  localStorage.setItem("lang", lang);

  // re-disparar efecto de tipeo
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang, roles: dict.roles } }));
}

/* ---------- Dropdown ---------- */
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const langSelect = document.getElementById("langSelect");

function closeLangMenu() {
  langMenu.classList.remove("open");
  langBtn.setAttribute("aria-expanded", "false");
}

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = langMenu.classList.toggle("open");
  langBtn.setAttribute("aria-expanded", String(open));
});

document.addEventListener("click", (e) => {
  if (!langSelect.contains(e.target)) closeLangMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLangMenu();
});

langMenu.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-lang]");
  if (!btn) return;
  applyLang(btn.dataset.lang);
  closeLangMenu();
});

/* ---------- Init ---------- */
const savedLang = localStorage.getItem("lang");
const browserLang = navigator.language.slice(0, 2);
const initialLang = savedLang || (I18N[browserLang] ? browserLang : "es");
applyLang(initialLang);

// funcionalidad global
window.I18N = { applyLang };
window.__I18N_DICT = I18N;