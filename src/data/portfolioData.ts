/**
 * Data extracted from:
 * 1. new)SEO_GEO一條龍行銷提案簡報 (Kung, Hui-Chiao / 2026 SEO & GEO Agency Presentation)
 * 2. 品牌視覺吸睛術提案簡報 (Kung-Hui, Chiao / Visual & Graphic Design)
 */

export interface ServiceItem {
  id: string;
  category: 'seo' | 'visual' | 'custom';
  title: string;
  subtitle: string;
  price: string;
  priceNote?: string;
  basePrice: number;
  unit: string;
  description: string;
  features: string[];
  deliverables: string[];
  recommendedFor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'seo_geo' | 'industrial' | 'medical_food' | 'editorial' | 'social';
  categoryLabel: string;
  client: string;
  industry: string;
  highlightMetric: string;
  metricLabel: string;
  rankings?: { keyword: string; rank: number; note?: string }[];
  summary: string;
  strategy: string[];
  results: string[];
  quote?: string;
  image?: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  deliverable: string;
  duration: string;
}

export const AUTHOR_INFO = {
  name: 'Kung, Hui-Chiao',
  chineseName: '江慧喬',
  title: 'SEO / GEO 內容行銷策略師 ✕ 品牌視覺美學設計師',
  year: '2026',
  email: 'homentist@gmail.com',
  lineId: '@huichiao_mkt',
  bio: '兼具行銷心理學、搜尋演算法與排版美學的「雙核心行銷大腦」。消除 AI 帶來的隱性時間成本，從受眾痛點分析、搜尋意圖布局到高轉換排版美學，提供不走彎路的一條龍整合服務。',
  coreVision: '將專業整合力交給專家，創造無可取代的品牌壁壘。用更具美學觀念、更有效彰顯品牌價值的方式，為你的品牌在 AI 搜尋時代卡位第一眼曝光。',
};

export const CORE_METRICS = [
  {
    number: '15.1萬+',
    label: '單案累積點擊次數',
    sub: '突破自然搜尋流量天花板',
  },
  {
    number: '380萬+',
    label: '高意圖曝光次數',
    sub: '精準鎖定具備購買意圖受眾',
  },
  {
    number: 'TOP 1',
    label: '多領域Google/GEO霸榜',
    sub: '涵蓋工業自動化、家居與醫療',
  },
  {
    number: '98%',
    label: '客戶好評與持續續約',
    sub: '從單篇合作延伸全站品牌代操',
  },
];

export const CLIENT_LOGOS = [
  { name: 'Universal Robots', role: '國外上市櫃工業自動化' },
  { name: 'Formica 富美家', role: '全球裝飾美耐板龍頭' },
  { name: 'SOLOMON 3D', role: '半導體智動化領導品牌' },
  { name: 'KD 科定企業', role: '環保健康建材上市公司' },
  { name: '舞光 Dancelight', role: '照明設備知名品牌' },
  { name: 'Hometist', role: '自創居家生活美學品牌' },
  { name: '中安家具', role: '台灣知名精品家具品牌' },
  { name: '達文西數位科技', role: '數位行銷與科技品牌' },
];

export const WHY_CHOOSE_ME = {
  mainQuestion: '既然現在有 AI，為什麼你還需要花錢請專業人員？',
  mainStatement: '將專業整合力交給專家，創造無可取代的品牌壁壘。',
  points: [
    {
      id: '01',
      title: '消除 AI 帶來的隱性成本',
      subtitle: 'Market Trends: The Reality of AI Writing',
      description:
        '許多人以為 AI 能省時，現實卻是：為了讓 AI 學習、反覆修改其空洞公式化的內容，反而耗費更多時間成本，也影響成效發揮。專業人員能協助把時間留給真正的核心決策。',
      takeaway: '把寶貴時間省下來，免去反覆調教指令與除錯的無謂消耗。',
    },
    {
      id: '02',
      title: '策略與內容零斷層',
      subtitle: 'Unified Marketing Brain',
      description:
        '市場上許多接案者只做單點執行：給關鍵字的不懂寫作，寫文章的又不知道整體策略。我的服務由同一個「行銷大腦」貫徹，從痛點分析一路執行到最後的文章產出、思考轉換，不產生斷層。',
      takeaway: '關鍵字、商業目標、文章動線與轉換 CTA 全流程一體成形。',
    },
    {
      id: '03',
      title: '經驗與洞察的實戰降維',
      subtitle: 'Actionable Insights & Empathy',
      description:
        'AI 工具人人都能用，但長年累積的行銷策略與撰文經驗是無法被複製的。憑藉深厚的實戰背景，一眼看穿痛點與需求，將生硬資訊轉化為具備商業影響力的深度內容。',
      takeaway: '深諳消費者心理與各產業語言，讓生硬技術文具備高度閱讀溫度。',
    },
  ],
  visualPainPoints: {
    question: '為什麼你的內容再好，也得不到青睞？',
    points: [
      {
        title: '排版凌亂，內容像教科書',
        desc: '許多創作者花費大量心思撰寫優質內容，卻在電子書、DM 型錄上套用死板無聊的模板。沒有清晰的閱讀動線與留白，讀者根本看不下去，直接降低了整份資料的轉換率。',
      },
      {
        title: '視覺混亂，默默勸退客戶',
        desc: '社群貼文缺乏統一的格線規則與品牌代表色。零碎、拼湊感重的貼文牆，不僅無法在一秒內卡位讀者的眼球，更會悄悄稀釋掉您在該領域本該擁有的專業信任度。',
      },
    ],
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo_new',
    category: 'seo',
    title: 'SEO/GEO 專業新文章撰寫',
    subtitle: '結合行銷心理學與產業知識，建立長效品牌價值',
    price: 'NT$ 3,000 起 / 篇',
    priceNote: '非工業文章 NT$ 3,000 / 篇；工業技術文章 NT$ 4,000 / 篇',
    basePrice: 3000,
    unit: '篇',
    description: '深入產業核心，從前期訪談、AI提問時代問答型字詞布局到2,000~3,000字原創高價值內容撰寫。',
    features: [
      '前期訪談：深度了解業主商業需求，型塑客製行銷方針',
      'SEO/GEO 關鍵字篩選：篩選高轉換字詞與符合 AI 搜尋提問時代的問答型詞彙',
      '資料整合與考證：專業產業資料研究與內容系統化整理',
      '原創內容撰寫：將複雜知識轉化為讀者易懂深度文字（平均字數 2,000-3,000 字）',
      'SEO/GEO 關鍵字自然布局：將關鍵字與流暢行文融為一體，兼顧讀者體驗與演算法',
    ],
    deliverables: ['完整SEO/GEO優化文稿（Word / Google Docs）', 'Meta Title & Description 建議', '圖片 Alt 標籤建議'],
    recommendedFor: '尋求長期自然搜尋流量、建立品牌專業權威的品牌主、科技廠與專業服務業。',
  },
  {
    id: 'seo_optimize',
    category: 'seo',
    title: 'SEO/GEO 舊文章優化翻新',
    subtitle: '舊文翻新，省去重新撰寫的龐大時間與成本',
    price: 'NT$ 3,000 / 篇',
    priceNote: '平均字數 2,000-3,000 字，包含完整架構重塑',
    basePrice: 3000,
    unit: '篇',
    description: '針對已有基礎但排名卡關或流量衰退的舊文章，進行搜尋意圖重塑與段落再編排，重新喚醒流量活水。',
    features: [
      '前期訪談與搜尋意圖分析：釐清目前文章痛點與新搜尋時代演算法偏好',
      'SEO/GEO 關鍵字重新校正：篩選新世代高轉換問答型延伸關鍵字',
      '文章內容架構重組：重新規劃主題、建議標題、段落概要與內連布局',
      '深度文字改寫：將生硬舊內容重構為高吸睛度、易讀性的專業段落',
      'GEO 智慧摘要優化：讓內容更容易被 Google AI Overviews 與各類 AI 助理引用',
    ],
    deliverables: ['優化前後比對版文稿', '內連架構規劃建議表', '關鍵字密度與分布指南'],
    recommendedFor: '官網已累積大量文章但點擊停滯、急需提升自然排名與曝光的企業。',
  },
  {
    id: 'editorial_catalog',
    category: 'visual',
    title: '電子書及 DM 型錄設計',
    subtitle: '將生硬資料梳理為極致的閱讀流',
    price: 'NT$ 800 / 頁',
    priceNote: '包含品牌深度理解、高質感排版一條龍實作交付',
    basePrice: 800,
    unit: '頁',
    description: '對繁雜的文章內容、數據、照片與文案進行系統化分類並劃分主次，確立符合眼球動線的流暢度與轉化美學。',
    features: [
      '資訊梳理：系統化梳理複雜圖表、規格數據與長文，建立主次閱讀階層',
      '視覺設計化：客製化美學排版，兼具呼吸感、留白與高商業轉換率',
      '閱讀動線優化：引導受眾自然瀏覽至產品亮點與商務接洽頁',
      '雙語/多版本相容：提供適合線上閱讀（PDF）與高解析列印交付檔',
    ],
    deliverables: ['高解析互動式 PDF', '印刷用 CMYK 出血交付檔', '版型設計原始檔案'],
    recommendedFor: '上市櫃工業製造商、新創品牌、B2B企業白皮書、產品型錄與活動指南。',
  },
  {
    id: 'social_design',
    category: 'visual',
    title: '社群圖文系統設計',
    subtitle: '將生硬資料梳理為極致的閱讀流與秒殺眼球的第一張圖',
    price: 'NT$ 850 / 式 起',
    priceNote: '文案 + 主圖一張 NT$ 850 / 式；純圖片設計 NT$ 500 / 張',
    basePrice: 850,
    unit: '式',
    description: '從貼文核心痛點企劃、高轉化行銷文案到高張力主圖封面，為最具決定性的「第一張圖」進行最高規格視覺打造。',
    features: [
      '主題與痛點企劃：鎖定貼文核心痛點，提煉最抓眼球的提問建立第一層對話',
      '高轉化行銷文案：設計具備邏輯、層次與情緒共鳴點的文案，引導主動轉發與儲存',
      '高張力主圖封面：極速卡位讀者視線，在社群海量資訊中脫穎而出',
      '品牌格線統一：建立專屬品牌代表色與排版系統，不再有拼湊感',
    ],
    deliverables: ['高解析度社群圖檔（PNG/JPG）', '完整貼文文案含標籤建議', '後續可沿用之格線模板規範'],
    recommendedFor: '經營 Instagram、Facebook、LinkedIn 或 Threads 的個人品牌與中小企業。',
  },
  {
    id: 'custom_branding',
    category: 'custom',
    title: '平面設計與客製化排版',
    subtitle: '多樣化服務，滿足更全方位的品牌視覺設計',
    price: '依照客製範圍報價',
    priceNote: '可私訊細聊需求，提供透明合理的階段性報價',
    basePrice: 2500,
    unit: '案',
    description: '從高質感品牌海報、菜單名片到自創品牌識別手冊，將精緻設計美學延展至每一次實體與數位接觸。',
    features: [
      '高質感品牌海報：專為線下實體店或品牌活動設計，兼具張力與資訊易讀性',
      '菜單、名片設計：將精緻美學延展至每次實體接觸與名片遞送',
      '自創品牌識別與規範：標誌比例、色系分類、字型搭配與應用規範全方位建構',
      '全程嚴謹把關：依案源複雜度，進行透明合理的階段性客製報價與完稿',
    ],
    deliverables: ['向量原檔（AI/EPS）', '高品質輸出檔', '完整品牌應用指南規範'],
    recommendedFor: '實體門市開幕、品牌翻新重塑、線下行銷策展活動主辦方。',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: '痛點及需求了解 (風格溝通)',
    shortDesc: '深度前期對話，拆解受眾在搜尋背後的真實動機與痛點',
    detailedDesc: '動筆與設計前的關鍵第一步。透過結構化訪談釐清業主品牌核心價值、商業轉換目標及目標受眾心理，型塑後續不可撼動的行銷與風格定調。',
    deliverable: '行銷方針確認書 & 品牌視覺調性風格盤點',
    duration: '1-2 個工作天',
  },
  {
    step: '02',
    title: '關鍵字規劃 (資訊梳理)',
    shortDesc: '篩選高轉換關鍵字，涵蓋 AI 提問時代問答型字詞',
    detailedDesc: '運用專業 SEO 數據庫與搜尋意圖分析工具，剔除無效流量詞，精選兼具搜尋量與購買轉換潛力的核心詞與長尾詞，並整理待轉化生硬資訊。',
    deliverable: '高轉換關鍵字清單 & 資訊主次梳理架構表',
    duration: '2-3 個工作天',
  },
  {
    step: '03',
    title: '資料整合與架構規劃',
    shortDesc: '利用所獲資料整合文章方向與眼球動線視覺規劃',
    detailedDesc: '確立文章大綱（H2/H3 結構）與視覺排版板塊，將繁雜的技術規格、文案與數據梳理成符合眼球自然動線的清晰框架。',
    deliverable: '文章段落大綱 & 版面動線規劃初稿',
    duration: '1-2 個工作天',
  },
  {
    step: '04',
    title: '討論與精準釐清',
    shortDesc: '動筆與實作前關鍵對接，釐清並確認策略規劃方向',
    detailedDesc: '雙方針對大綱、論點切入角度與視覺重點進行確認，確保「策略大腦」在執行階段零偏差，避免後續往返大幅推翻重來的溝通浪費。',
    deliverable: '雙方策略簽核確認紀錄',
    duration: '1 個工作天',
  },
  {
    step: '05',
    title: '文章撰寫與設計實作',
    shortDesc: '原創深度內容產出，整合關鍵字布局與高質感排版',
    detailedDesc: '撰寫 2,000-3,000 字具備行銷心理學與產業深度的原創內容，自然融入關鍵字；同步進行高質感視覺設計輸出，兼具呼吸感與商業張力。',
    deliverable: '完整初稿（含 SEO 標題、描述、Alt 與視覺完成圖）',
    duration: '3-5 個工作天',
  },
  {
    step: '06',
    title: '檢視成效與調整完稿',
    shortDesc: '精確校對交付，持續追蹤文章表現與搜尋流量成長',
    detailedDesc: '微調潤飾文字細節與排版像素，輸出最終交付檔案。上線後提供成效檢視建議，觀察關鍵字排名、點擊率與 AI 搜尋摘要卡位狀況。',
    deliverable: '最終完稿交付檔 & 上線發布建議檢核表',
    duration: '1-2 個工作天',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case_ur_automation',
    title: '工業自動化領導品牌：SEO/GEO霸榜與雙語電子書',
    category: 'industrial',
    categoryLabel: '工業自動化',
    client: 'Universal Robots (上市公司)',
    industry: '工業製造 / 機器手臂',
    highlightMetric: 'Google #1 霸榜 + GEO 卡位',
    metricLabel: '關鍵字「工業自動化」直衝首頁第一位',
    rankings: [
      { keyword: '工業自動化', rank: 1, note: '超越競品登上首頁首位' },
      { keyword: '半導體自動化', rank: 2, note: 'SOLOMON 3D 案例' },
      { keyword: '工廠自動化怎麼做', rank: 1, note: '卡位 Google AI 搜尋摘要' },
    ],
    summary:
      '將艱深的機器人規格與協作型手臂技術，梳理為「企業導入指南」深度長文與中文/英文雙版本電子書。不僅在 Google 奪得第 1 名，更在最新 AI 搜尋總結（GEO）中成為推薦引用來源。',
    strategy: [
      '拆解製造業決策者痛點：「導入自動化前先想清楚的10個關鍵問題」',
      'AI 搜尋提問時代問答型字詞布局（如「工廠自動化優勢」「常見手臂型號」）',
      '電子書資訊階層化：圖表規格重新視覺化，告別死板表格',
    ],
    results: [
      '關鍵字「工業自動化」榮登 Google 搜尋第一名',
      'AI Overviews 智慧摘要推薦來源',
      '海內外業務簡報與經銷商型錄下載量大幅成長',
    ],
    quote: '「強唷 厲害 果然在專家！很感謝尼，文字溫度很貼近我的喜愛，深具說服力！」',
  },
  {
    id: 'case_traffic_growth',
    title: '長期代操網站行銷：突破 15.1 萬點擊、380 萬曝光',
    category: 'seo_geo',
    categoryLabel: '流量暴衝案例',
    client: '知名生活消費與品牌客戶',
    industry: '生活居家 / 醫療健檢',
    highlightMetric: '15.1 萬次點擊 · 380 萬曝光',
    metricLabel: 'Google Search Console 實測數據',
    rankings: [
      { keyword: '烤牛排', rank: 1, note: '新手也能學會 2倍時間公式' },
      { keyword: '美耐板是什麼', rank: 1, note: '富美家/KD科定建材關鍵字' },
      { keyword: '舞光軟條燈', rank: 1, note: '照明設備規格選購指南' },
      { keyword: '沙發配色', rank: 1, note: '零失敗搭配指南' },
    ],
    summary:
      '透過全站自然搜尋流量健檢、頁面優化建議執行，搭配定期高轉換文章策劃，帶動顧客網站自然頁面流量長效直線攀升，平均點閱率達 4%、平均排名 10.8。',
    strategy: [
      '全面盤點高搜尋量但低轉換關鍵字，補強搜尋意圖',
      '文章內容深度化：平均每篇 2,500 字，完整回答潛在受眾疑問',
      '頁面優化建議：改善排版動線與標題吸睛度，提升停留時間',
    ],
    results: [
      '代操期間累積 15.1 萬點擊與 380 萬曝光',
      '多個高難度民生及工業詞奪下 Google #1',
      '有效轉換率提升，客戶續約擴大合作規模',
    ],
  },
  {
    id: 'case_food_industry',
    title: '食品與生技業：全站 30 個產品頁面內容重塑',
    category: 'medical_food',
    categoryLabel: '食品與生技',
    client: '國內知名健康食品與餐飲品牌',
    industry: '食品生技 / 精緻料理',
    highlightMetric: '93.5 萬曝光 · 1.23 萬點擊',
    metricLabel: '30 篇產品文案全數排進前 3 頁',
    rankings: [
      { keyword: '烤牛排秘訣', rank: 1, note: '手把手教學' },
      { keyword: '乳酪狀保養品成分', rank: 1, note: '精準鎖定敏感肌保養' },
      { keyword: '胃癌前兆 (舊文優化)', rank: 1, note: '流量翻倍' },
      { keyword: '大腸鏡檢查常見問題', rank: 2, note: '單篇 31.7 萬曝光' },
    ],
    summary:
      '協助撰寫約 30 個產品頁面與深度知識文章，將枯燥的成份分析轉化為生動的使用者痛點解答，結合低渣飲食建議圖表排版，極大化提升品牌信任。',
    strategy: [
      '痛點提問法：解答大眾最關切的日常生活健康與烹飪難題',
      '低渣飲食與保養品成分圖解排版，降低閱讀門檻',
      '關鍵字自然融入故事性文章，消除推銷感',
    ],
    results: [
      '單篇產品介紹文創下 9.2% 高點擊率',
      '醫療衛教專欄成為診所顧客諮詢的主要指名文章',
      '舊文章翻新後點擊次數成長逾 300%',
    ],
  },
  {
    id: 'case_hometist_branding',
    title: 'Hometist 居家品牌：電子書型錄與識別美學排版',
    category: 'editorial',
    categoryLabel: '電子書與DM',
    client: 'Hometist (自創居家新創品牌)',
    industry: '居家生活美學 / 軟裝設計',
    highlightMetric: '極致閱讀流與品牌高質感',
    metricLabel: '從名片、品牌手冊到線上電子書',
    summary:
      '針對自創居家生活品牌 Hometist，梳理全系列家具與家飾資料，打造極具留白呼吸感與北歐風格的品牌手冊、電子書型錄與名片系統。',
    strategy: [
      '資訊結構化梳理：確立符合眼球動線的圖文配置',
      '低飽和溫潤大地色系，營造溫馨寧靜生活氛圍',
      '客製化網格系統，維持全系列刊物統一視覺信任度',
    ],
    results: [
      '成功打入高端選品店與設計師通路',
      '實體展示名片與線上手冊獲得廣泛好評',
      '建立完整品牌視覺資產規範，降低後續設計成本',
    ],
  },
  {
    id: 'case_social_campaigns',
    title: '跨產業社群圖文系統：高張力主圖與高轉化文案',
    category: 'social',
    categoryLabel: '社群圖文系統',
    client: '工業科技、精品床墊、自創品牌等',
    industry: '跨產業行銷',
    highlightMetric: '高轉發率與秒殺眼球首圖',
    metricLabel: '包含文案企劃、格線系統與首圖張力',
    summary:
      '針對精品床墊品牌（2025/4-9月貼文）與工業自動化品牌，策劃痛點主題、高轉化文案與高張力封面圖，擺脫教科書式無聊貼文。',
    strategy: [
      '首圖黃金 1 秒卡位：提煉最具共鳴的痛點問句與大膽對比配色',
      '滑動誘導架構：第一張吸睛、中間給乾貨、末張強烈 CTA 促轉換',
      '統一格線與配色規則，建立一目了然的品牌專屬識別',
    ],
    results: [
      '床墊客戶貼文互動率提升 180%，諮詢量顯著增加',
      '社群圖文直接成為業務開發時的利器',
      '客戶回饋「文字溫度很貼近受眾喜愛，解決問題能力極強」',
    ],
  },
];

export const CLIENT_REVIEWS = [
  {
    id: 'rev_1',
    author: '知名家居品牌 行銷總監',
    avatar: '家',
    industry: '居家生活 / 床墊品牌',
    time: '2025年 合作反饋',
    text: '嗨嗨~ 我有看完文章囉 >< 很感謝尼！這次也有列參考資料讓我查看 :) 我覺得文字上都沒什麼問題，文字溫度很貼近我的喜愛（私心很喜歡XD），解決問題的切入點太強了！',
    rating: 5,
    tag: '文字溫度 & 專業整合',
  },
  {
    id: 'rev_2',
    author: '工業自動化品牌 專案負責人',
    avatar: '工',
    industry: '工業科技 / 製造業',
    time: '2025年 合作反饋',
    text: '好強唷！厲害！果然在專家手中完全不一樣！既不說到別人的品牌又達到我們想表達的方式！原本生硬的機械規格變成客戶讀得津津有味的指南，SEO 排名第一名真的名不虛傳！',
    rating: 5,
    tag: 'SEO首頁第一 & 痛點轉化',
  },
  {
    id: 'rev_3',
    author: '生技醫療衛教網站 主編',
    avatar: '醫',
    industry: '醫療衛教 / 健康食品',
    time: '2025年 合作反饋',
    text: '舊文章優化後，我們的胃癌前兆跟大腸鏡專題曝光直接突破 30 萬次，而且文字符合專業醫療考證卻非常白話好懂，病患諮詢時都會主動提到這幾篇文章！',
    rating: 5,
    tag: '舊文翻新 & 搜尋流量暴衝',
  },
  {
    id: 'rev_4',
    author: '新創生活品牌 創辦人',
    avatar: '創',
    industry: '新創品牌 / 品牌識別',
    time: '2026年 合作反饋',
    text: '電子書和社群圖文一條龍交給 Hui-Chiao 是最正確的決定！省下我們反覆教 AI 寫空洞廢話的時間，行銷邏輯跟排版美學都在同一個檔次，客戶反饋視覺質感極高。',
    rating: 5,
    tag: '一條龍整合 & 視覺吸睛',
  },
];

/**
 * 4 Distinct Social Promotion Campaigns for Kung, Hui-Chiao's own agency promotion:
 * Used in the "接案社群圖文宣傳產生器"
 */
export const SOCIAL_PROMO_CAMPAIGNS = [
  {
    id: 'campaign_ai_problem',
    title: '痛點共鳴篇：既然有了 AI，為什麼還需要花錢請專業人員？',
    subtitle: 'SEO/GEO 行銷的隱性成本真相',
    slides: [
      {
        badge: 'MARKET TRENDS',
        headline: '既然現在有 AI，為什麼你還需要花錢請專業人員？',
        subtext: '消除 AI 帶來的隱性時間成本，把時間留給核心商業決策',
        points: [
          '反覆修改 AI 空洞公式化的內容，反而耗費更多時間成本',
          '市面接案者單點執行斷層：給關鍵字的不懂寫作，寫作的不懂商業策略',
          '由同一個行銷大腦貫徹：從痛點分析、搜尋意圖到高轉換文章一氣呵成',
        ],
        footer: 'Kung, Hui-Chiao · SEO/GEO 全方位整合策略',
      },
      {
        badge: 'SOLUTIONS',
        headline: '經驗與洞察的實戰降維打擊',
        subtext: 'AI 工具人人都能用，但長年累積的行銷策略無法被複製',
        points: [
          '一眼看穿客群痛點與潛意識搜尋動機',
          '將生硬規格資訊轉化為具備商業影響力的深度內容',
          '不只卡位 Google 排名，更卡位 AI 搜尋時代的智慧摘要推薦',
        ],
        footer: '精準行銷心理學 ✕ 長效品牌價值',
      },
      {
        badge: 'TAKE ACTION',
        headline: '將專業整合力交給專家，創造無可取代的品牌壁壘',
        subtext: '歡迎預約 2026 專案合作 · 立即私訊索取案例與報價單',
        points: [
          '✓ SEO/GEO 專業新文章撰寫（2,000-3,000字）',
          '✓ 舊文章搜尋意圖翻新優化',
          '✓ 電子書型錄與高質感排版一條龍',
        ],
        footer: '立即點擊個人檔案連結 / 私訊諮詢',
      },
    ],
    copywriting: `【既然現在有 AI，為什麼你還需要花錢請專業人員寫文章？】

許多企業主以為有了 AI 能省時，現實卻往往是：
為了讓 AI 學習品牌調性、反覆修改那些空洞套公式的廢話，反而耗費了老闆和行銷團隊更多的時間成本。

而且更致命的是：
市場上的接案者常常各做各的——給關鍵字的不知道怎麼寫出溫度，寫文章的又搞不懂商業轉換路徑，最後做出一堆沒流量也沒人看的文字垃圾。

我的接案承諾：
由同一個「行銷大腦」貫徹全流程！
從受眾痛點分析 ➔ 高轉化關鍵字篩選 ➔ 搜尋意圖考證 ➔ 原創深度好文 ➔ SEO/GEO 排版布局，不走任何彎路。

📌 2026 檔期開放預約中：
· SEO/GEO 專業新文章撰寫
· 舊文章流量翻新優化
· 電子書型錄與社群圖文系統

歡迎點擊連結或私訊諮詢，幫你的品牌打造無可取代的搜尋壁壘！

#SEO行銷 #GEO優化 #內容行銷 #接案設計師 #行銷文案 #文案策略 #AI搜尋時代 #品牌定位`,
  },
  {
    id: 'campaign_visual_crisis',
    title: '視覺美學篇：為什麼你的內容再好，也得不到客戶青睞？',
    subtitle: '排版美學如何留住你的精準客戶',
    slides: [
      {
        badge: 'VISUAL STRATEGY',
        headline: '為什麼你的內容再好，也得不到青睞？',
        subtext: '告別死板教科書排版，用排版美學留住精準客戶',
        points: [
          '排版凌亂內容像教科書：沒有清晰閱讀動線與留白，讀者根本看不下去',
          '視覺混亂默默勸退客戶：貼文缺乏統一格線與品牌色，悄悄稀釋專業信任度',
          '資訊梳理 ＋ 視覺設計化：將生硬資料梳理為極致的眼球動線',
        ],
        footer: 'Kung, Hui-Chiao · 視覺吸睛術提案',
      },
      {
        badge: 'SERVICE & VALUE',
        headline: '高張力主圖 ＋ 高轉換文案 ＋ 極致留白',
        subtext: '為最具決定性的「第一張圖」進行最高規格視覺打造',
        points: [
          '鎖定貼文核心痛點，用最抓眼球的提問建立第一層對話',
          '設計具備邏輯、層次與情緒共鳴點的行銷文案',
          '建立專屬品牌代表色與排版格線，告別拼湊感',
        ],
        footer: '包含品牌深度理解 · 高質感排版實作交付',
      },
      {
        badge: 'OFFER & CONTACT',
        headline: '精緻視覺美學，建立專業底氣',
        subtext: '用更具美學觀念的方式，為你的品牌在 AI 時代提升吸睛效果',
        points: [
          '電子書及 DM 型錄設計：NT$ 800 / 頁',
          '社群圖文設計：NT$ 850 / 式（文案+主圖）',
          '平面設計與客製化排版：依需求彈性報價',
        ],
        footer: '歡迎私訊諮詢 · 打造專屬品牌識別',
      },
    ],
    copywriting: `【為什麼你的內容再好，也得不到客戶青睞？】

許多品牌創作者花費大量心思撰寫優質內容，卻在電子書、型錄或社群上套用死板無聊的模板。
沒有清晰的閱讀動線與留白，讀者看兩秒就滑掉，直接摧毀了整份資料的轉換率！

零碎、拼湊感重的貼文牆，不僅無法在一秒內卡位讀者的眼球，更會悄悄稀釋掉你在該領域本該擁有的專業信任度。

🎨 我能為你做什麼？
1. 【資訊梳理】：對繁雜文章、數據與文案進行系統化分類，劃分主次，確立符合眼球動線的流暢度。
2. 【視覺設計化】：客製化美學排版，兼具呼吸感與高商業轉換率。
3. 【社群高張力主圖】：為最關鍵的「第一張圖」注入超強吸睛力！

📩 歡迎預約合作，讓我們一起為你的品牌建立專業底氣！

#品牌設計 #平面排版 #電子書設計 #型錄設計 #社群排版 #視覺美學 #品牌形象 #高質感排版`,
  },
  {
    id: 'campaign_case_proof',
    title: '成效驗證篇：單案突破 15.1 萬點擊、380 萬曝光的實戰秘密',
    subtitle: 'Google #1 霸榜 ✕ AI Overviews 智慧摘要推薦',
    slides: [
      {
        badge: 'REAL CASE STUDY',
        headline: '不走彎路的 SEO/GEO 實戰成效',
        subtext: '從零佈局到舊文翻新，專業整合力是轉換率的保障',
        points: [
          '單一客戶代操累積 15.1 萬次點擊 · 380 萬次高意圖曝光',
          '高難度字詞「工業自動化」榮登 Google #1，並卡位 AI 搜尋首位',
          '食品與醫療業舊文翻新，單篇文章曝光飆破 31.7 萬次',
        ],
        footer: '真實 GSC 數據認證 · 非空泛數字',
      },
      {
        badge: 'CLIENT FEEDBACK',
        headline: '客戶好評回饋，是最好的品質保證',
        subtext: '「文字溫度很貼近我的喜愛，厲害果然在專家！」',
        points: [
          '「既不說到別人品牌又達到我們想表達的方式，太強了！」',
          '「有列出詳細參考資料，文字架構順暢度超乎預期」',
          '各產業客戶續約代操，合作滿意度高達 98%',
        ],
        footer: '跨足上市公司、新創品牌、生技食品與精品家具',
      },
      {
        badge: 'RESERVE NOW',
        headline: '啟動你的流量變現計畫',
        subtext: '用更正確、更有效的專業文章，為你的品牌卡位第一眼曝光',
        points: [
          '提供免費初步官網健檢與關鍵字評估',
          '透明報價、清楚的 6 階段作業流程',
          '名額有限，立即填寫預約表單',
        ],
        footer: '立即點擊下方連結 / 私訊預約諮詢',
      },
    ],
    copywriting: `【單篇累積 15.1 萬點擊、380 萬曝光！SEO/GEO 時代如何讓搜尋力直接變現？】

還在花大錢買廣告，停掉廣告流量就立刻歸零嗎？
真正的品牌資產，是能持續為你帶來精準客戶的「長效自然搜尋壁壘」。

📊 實戰數據分享：
🔹 工業自動化大廠：關鍵字「工業自動化」奪得 Google #1，並成功卡位 Google AI 搜尋摘要推薦！
🔹 代操客戶自然流量：突破 15.1 萬點擊、380 萬曝光，平均點閱率達 4%！
🔹 舊文章優化案例：醫療衛教專題翻新後，單篇曝光暴增至 31.7 萬次！

「文字溫度貼近受眾、切入點直擊痛點、數據真實可檢驗」
這就是為什麼包括上市櫃企業、新創團隊到醫師診所都選擇與我合作。

🚀 想要為你的品牌啟動流量變現計畫嗎？
歡迎私訊領取「免費初步網站 SEO & 排版健檢」！

#SEO優化 #SEO成功案例 #流量變現 #內容行銷 #搜尋引擎優化 #Google第一名 #商業思維 #行銷顧問`,
  },
  {
    id: 'campaign_services_pricing',
    title: '方案透明篇：2026 最新接案服務價目表與合作流程透明公開',
    subtitle: '不踩雷、無隱藏費用的專業整合清單',
    slides: [
      {
        badge: 'PRICING 2026',
        headline: '清晰透明的接案服務與報價清單',
        subtext: '省去反覆探聽與不確定性，讓預算花在真正的刀口上',
        points: [
          'SEO/GEO 專業新文章：NT$ 3,000 / 篇（工業技術文 NT$ 4,000）',
          'SEO/GEO 舊文章翻新優化：NT$ 3,000 / 篇（重組搜尋意圖）',
          '電子書及 DM 型錄設計：NT$ 800 / 頁（包含資訊梳理與美學排版）',
          '社群圖文系統設計：NT$ 850 / 式（文案+主圖1張）',
        ],
        footer: 'Kung, Hui-Chiao · 專業行銷與視覺交付',
      },
      {
        badge: 'SIX STAGES',
        headline: '嚴謹的 6 階段作業流程，產出更加瞭若指掌',
        subtext: '每一步都有明確交付物與討論節點，絕不瞎忙',
        points: [
          '1. 痛點及需求了解 ➔ 2. 關鍵字與風格規劃',
          '3. 資料整合與動線梳理 ➔ 4. 討論與動筆釐清',
          '5. 原創文章撰寫與設計實作 ➔ 6. 檢視成效與調整完稿',
        ],
        footer: '溝通零斷層 · 確保每一次交付的高品質',
      },
      {
        badge: 'COLLABORATE',
        headline: '現在就開始規劃下一季的爆款內容與精緻視覺',
        subtext: '單篇試寫、整包專案代操皆可洽詢',
        points: [
          '提供即時線上報價試算器',
          '可開立發票與簽訂正式智慧財產保密合約',
          '直接點擊個人檔案網站試算與預約諮詢',
        ],
        footer: 'Email: homentist@gmail.com · 私訊立即回覆',
      },
    ],
    copywriting: `【2026 接案服務價目表與合作流程透明公開！】

許多客戶找接案者最怕遇到：報價不透明、寫出來的東西跟一開始溝通完全兩回事，最後還得自己重改。

在我的合作模式裡，透明度與專業交付是最高準則：

📋 2026 核心服務價目：
1️⃣ SEO/GEO 專業新文章撰寫：NT$ 3,000 / 篇（工業文 NT$ 4,000）
2️⃣ SEO/GEO 舊文章翻新：NT$ 3,000 / 篇
3️⃣ 電子書及 DM 型錄排版：NT$ 800 / 頁
4️⃣ 社群圖文系統：NT$ 850 / 式（純圖 NT$ 500 / 張）
5️⃣ 平面與品牌客製化排版：依需求階段性透明報價

🛠 嚴謹 6 階段流程：
痛點釐清 ➔ 關鍵字篩選 ➔ 資訊整合 ➔ 討論對接 ➔ 撰寫實作 ➔ 成效交付。

想要預估專案預算？歡迎點進個人簡介網站，使用「即時報價試算器」！

#接案報價 #接案日常 #SEO文章 #排版設計 #型錄設計 #社群小編 #自由工作者 #專案管理`,
  },
];
