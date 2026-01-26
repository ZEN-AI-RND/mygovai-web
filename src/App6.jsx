import React, { useState } from 'react';
import { Shield, FileText, Brain, Users, AlertTriangle, TrendingUp, Scale, FileCheck, Clock, DollarSign, Radio, FileSignature, Zap, Database, Lock, ArrowLeft, CheckCircle, Target, Sparkles, Globe, ArrowUp, Server } from 'lucide-react';

const AIArsenalDashboard = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getText = (key) => {
    return translations[language][key] || key;
  };

  const translations = {
    en: {
      title: "MyAIGOV",
      subtitle: "AI Operating System for Malaysian Government",
      statsLine: "12 AI Agents • RM300K Each • Sovereign & Secure",
      aiSystems: "AI Agents",
      avgTimeSaved: "Avg Time Saved",
      monthsROI: "Months ROI",
      dataSovereign: "Data Sovereign",
      systemsTitle: "🤖 12 AI Agents",
      clickToView: "Click any system to view full details",
      powerCombos: "💥 POWER COMBOS",
      deploymentStrategies: "🚀 DEPLOYMENT STRATEGIES",
      techArchitecture: "⚙️ TECH ARCHITECTURE",
      bottomLine: "🎯 THE BOTTOM LINE",
      oldWay: "❌ OLD WAY",
      zaraWay: "✅ ZARA WAY",
      readyToDeploy: "Ready to deploy, Sir? 🚀",
      futureQuote: '"The future of Malaysian governance is compiling..."',
      backToArsenal: "Back to Home",
      investment: "Investment",
      savedPerYear: "Saved Per Year",
      timeReduction: "Time Reduction",
      roiTimeline: "ROI Timeline",
      problemSolved: "Problem Solved",
      targetUsers: "Target Users",
      keyFeatures: "Key Features",
      howAIWorks: "How AI Works",
      llmEngine: "LLM Engine",
      ragSystem: "RAG System",
      yourDataContext: "Your Data + Context",
      automation: "Automation",
      processing247: "24/7 Processing",
      governmentBenefit: "Government Benefit",
      readyToDeploySystem: "Ready to Deploy",
      oneTimeInvestment: "One-time investment • Perpetual license • Full sovereignty",
      requestDemo: "Request Demo",
      viewAllSystems: "View All Systems",
      includes: "Includes:",
      totalInvestment: "Total Investment",
      systems: "Systems:",
      timeline: "Timeline:",
      roi: "ROI:",
      oldWayItems: [
        "Officers buried in paperwork",
        "Citizens waiting weeks",
        "Fraud slipping through",
        "Policies lost in folders",
        "Expensive cloud subscriptions",
        "Data in foreign servers"
      ],
      zaraWayItems: [
        "AI handles routine work",
        "Citizens served in minutes",
        "Fraud caught automatically",
        "Instant policy recall",
        "One-time investment",
        "Data stays in Malaysia 🇲🇾"
      ],
      techItems: [
        {
          title: "NVIDIA DGX Spark",
          desc: "On-premise supercomputer. Malaysian soil only."
        },
        {
          title: "Open-Source LLMs",
          desc: "Full control, secure and customizable AI."
        },
        {
          title: "100% Sovereign",
          desc: "Data never leaves Malaysia. MAMPU compliant."
        }
      ],
      timeSaved: "Time Saved"
    },
    ms: {
      title: "🇲🇾 MyAIGOV",
      subtitle: "Senjata AI Gov-Tech Malaysia",
      statsLine: "12 Sistem AI • RM300K Setiap Satu • Berdaulat & Selamat",
      aiSystems: "Sistem AI",
      avgTimeSaved: "Purata Masa Jimat",
      monthsROI: "Bulan Pulangan",
      dataSovereign: "Kedaulatan Data",
      systemsTitle: "🤖 12 SISTEM AI",
      clickToView: "Klik mana-mana sistem untuk lihat butiran penuh",
      powerCombos: "💥 KOMBO BERKUASA",
      deploymentStrategies: "🚀 STRATEGI PELAKSANAAN",
      techArchitecture: "⚙️ SENI BINA TEKNOLOGI",
      bottomLine: "🎯 KESIMPULAN",
      oldWay: "❌ CARA LAMA",
      zaraWay: "✅ CARA ZARA",
      readyToDeploy: "Bersedia untuk dilaksanakan, Tuan? 🚀",
      futureQuote: '"Masa depan tadbir urus Malaysia sedang dikompil..."',
      backToArsenal: "Kembali ke Senjata",
      investment: "Pelaburan",
      savedPerYear: "Jimat Setahun",
      timeReduction: "Pengurangan Masa",
      roiTimeline: "Tempoh Pulangan",
      problemSolved: "Masalah Diselesaikan",
      targetUsers: "Pengguna Sasaran",
      keyFeatures: "Ciri-ciri Utama",
      howAIWorks: "Cara AI Berfungsi",
      llmEngine: "Enjin LLM",
      ragSystem: "Sistem RAG",
      yourDataContext: "Data Anda + Konteks",
      automation: "Automasi",
      processing247: "Pemprosesan 24/7",
      governmentBenefit: "Manfaat Kerajaan",
      readyToDeploySystem: "Bersedia Melaksanakan",
      oneTimeInvestment: "Pelaburan sekali • Lesen kekal • Kedaulatan penuh",
      requestDemo: "Minta Demo",
      viewAllSystems: "Lihat Semua Sistem",
      includes: "Termasuk:",
      totalInvestment: "Jumlah Pelaburan",
      systems: "Sistem:",
      timeline: "Jangka Masa:",
      roi: "Pulangan:",
      oldWayItems: [
        "Pegawai ditimbus kerja bertulis",
        "Rakyat menunggu berminggu-minggu",
        "Penipuan terlepas pandang",
        "Polisi hilang dalam folder",
        "Langganan awan yang mahal",
        "Data di pelayan asing"
      ],
      zaraWayItems: [
        "AI kendalikan kerja rutin",
        "Rakyat dilayan dalam minit",
        "Penipuan ditangkap automatik",
        "Ingat polisi serta-merta",
        "Pelaburan sekali sahaja",
        "Data kekal di Malaysia 🇲🇾"
      ],
      techItems: [
        {
          title: "NVIDIA DGX Spark",
          desc: "Superkomputer di premis. Hanya tanah Malaysia."
        },
        {
          title: "LLM Sumber Terbuka",
          desc: "Llama, Mistral, Qwen. Tiada terikat vendor."
        },
        {
          title: "100% Berdaulat",
          desc: "Data tidak keluar Malaysia. Patuh MAMPU."
        }
      ],
      timeSaved: "Masa Jimat"
    }
  };

  const products = [
    {
      id: 1,
      name: "MyDokumen AI",
      icon: FileText,
      category: "Document Warriors",
      // power: "Reads & sorts like 1000 officers",
      power: getText("Reads & sorts like 1000 officers", "Baca & susun seperti 1000 pegawai"),
      savingsPerYear: "RM500K",
      timeReduction: "70%",
      color: "from-blue-500 to-blue-600",
      deployment: "Plug & Play",
      problemSolved: "Government agencies handle thousands of documents daily—reports, letters, forms, contracts, and citizen submissions. Manually reading, categorizing, extracting data, and routing these documents is slow, error-prone, and consumes significant staff time.",
      targetUsers: ["Ministry administrative units", "Agencies processing public submissions", "Document management teams", "Land offices and licensing bodies"],
      features: [
        "Automatic document classification (invoice, memo, application form, etc.)",
        "Data extraction from PDFs, scanned images, and Word files",
        "Intelligent routing to appropriate departments based on content",
        "Searchable document archive with natural language queries",
        "Multi-language support (Malay, English, Chinese, Tamil)"
      ],
      aiRole: "The LLM reads and understands document content just like a human officer would. Combined with RAG (Retrieval-Augmented Generation), it searches previous documents to ensure consistency. Automation handles repetitive tasks like sorting and data entry, freeing officers for decision-making work.",
      benefit: "Reduces document processing time by 60-70%. Minimizes manual data entry errors. Allows officers to focus on policy work rather than paperwork. Ensures data sovereignty with all processing on-premise.",
      roi: "6 months"
    },
    {
      id: 2,
      name: "MyKnowledge Hub",
      icon: Brain,
      category: "Document Warriors",
      power: "Instant policy recall",
      savingsPerYear: "RM300K",
      timeReduction: "95%",
      color: "from-purple-500 to-purple-600",
      deployment: "Stackable",
      problemSolved: "Government officers often need to reference past circulars, policies, meeting minutes, legal guidelines, and best practices. Finding the right document or clause across hundreds of files stored in different folders or systems wastes hours and leads to inconsistent decision-making.",
      targetUsers: ["Policy officers in ministries", "Legal and compliance units", "Planning and strategy departments", "Training and knowledge management divisions"],
      features: [
        "Natural language search across all government documents",
        "Instant answers with source citations from policy documents",
        "Summarization of long circulars and reports",
        "Comparison of policies across different years or departments",
        "Personalized knowledge base per ministry or agency"
      ],
      aiRole: "The LLM functions as an intelligent search assistant. RAG connects the LLM to your document repositories, allowing it to retrieve accurate information and answer questions based on actual government records—not generic internet knowledge.",
      benefit: "Officers get instant access to institutional knowledge. New staff onboard faster. Decisions are consistent with established policies. Reduces reliance on a few senior officers who 'know everything.'",
      roi: "8 months"
    },
    {
      id: 3,
      name: "MyAssist",
      icon: Users,
      category: "Citizen Interface",
      power: "24/7 citizen service",
      savingsPerYear: "RM400K",
      timeReduction: "50%",
      color: "from-green-500 to-green-600",
      deployment: "Standalone",
      problemSolved: "Citizens calling government hotlines or visiting counters often ask repetitive questions: office hours, required documents, application status, eligibility criteria. This overwhelms frontline staff and leads to long wait times and inconsistent answers.",
      targetUsers: ["Public service counters (immigration, registration, licensing)", "Call centers and helpdesks", "Agencies with high public interaction (KWSP, LHDN, JPJ)", "Local councils"],
      features: [
        "24/7 chatbot answering common citizen questions in Malay and English",
        "Guides citizens step-by-step through application processes",
        "Checks application status via backend API integration",
        "Escalates complex cases to human officers with context",
        "Learns from interactions to improve answers over time"
      ],
      aiRole: "The LLM acts as a tireless virtual officer, trained on your agency's FAQs, procedures, and regulations. It understands citizen intent even when questions are phrased informally. RAG ensures answers stay current with the latest policies.",
      benefit: "Reduces call center load by 40-50%. Provides consistent, accurate answers 24/7. Improves citizen satisfaction. Frees human officers to handle complex cases requiring judgment.",
      roi: "7 months"
    },
    {
      id: 4,
      name: "MyInspector",
      icon: Shield,
      category: "Defense Systems",
      power: "X-ray compliance vision",
      savingsPerYear: "RM600K",
      timeReduction: "80%",
      color: "from-red-500 to-red-600",
      deployment: "Stackable",
      problemSolved: "Regulators and auditors must review reports, financial statements, licenses, and submissions to ensure compliance with regulations. Manual review is slow and misses subtle red flags. Non-compliance often discovered only after incidents occur.",
      targetUsers: ["Regulatory bodies (SSM, Bank Negara, securities regulators)", "Internal audit units in ministries", "Enforcement agencies monitoring license holders", "Environmental and safety compliance teams"],
      features: [
        "Automated review of submitted reports against regulatory checklists",
        "Flags inconsistencies, missing information, or unusual patterns",
        "Highlights high-risk submissions for officer attention",
        "Generates compliance summaries and risk scores",
        "Tracks historical compliance trends by entity"
      ],
      aiRole: "The LLM reads submissions and cross-checks them against regulations stored via RAG. It identifies discrepancies that might take a human hours to spot. Automation prioritizes cases, so officers focus on genuine risks, not routine checks.",
      benefit: "Increases audit coverage without increasing headcount. Detects non-compliance earlier, preventing costly problems. Ensures fair, consistent enforcement. Protects public interest and government reputation.",
      roi: "9 months"
    },
    {
      id: 5,
      name: "MyFraudGuard",
      icon: AlertTriangle,
      category: "Defense Systems",
      power: "Catches fraud instantly",
      savingsPerYear: "RM2-5M",
      timeReduction: "90%",
      color: "from-orange-500 to-orange-600",
      deployment: "Network",
      problemSolved: "Government agencies lose millions annually to fraudulent claims, duplicate applications, identity fraud, and abuse of public programs (subsidies, grants, welfare). Manual checking of applications against databases is incomplete and reactive.",
      targetUsers: ["Welfare and subsidy agencies (JKM, KPWKM)", "Grant and loan administrators (MARA, SME Corp, TEKUN)", "Revenue collection units (customs, inland revenue)", "Public procurement oversight bodies"],
      features: [
        "Real-time screening of applications for duplicate identities or suspicious patterns",
        "Cross-reference against multiple government databases",
        "Flags unusual claim amounts, frequencies, or beneficiary profiles",
        "Generates investigation leads with evidence summaries",
        "Learns fraud patterns to improve detection accuracy"
      ],
      aiRole: "The LLM analyzes application text for inconsistencies (e.g., income claims vs. stated profession). RAG pulls data from historical cases to identify known fraud patterns. Automation scores each application for fraud risk.",
      benefit: "Prevents leakage of public funds. Ensures assistance reaches truly eligible citizens. Deters fraudsters through improved detection rates. Builds public trust in government programs.",
      roi: "3 months"
    },
    {
      id: 6,
      name: "MyForecast",
      icon: TrendingUp,
      category: "Intelligence",
      power: "Predicts 3 months ahead",
      savingsPerYear: "RM800K",
      timeReduction: "60%",
      color: "from-indigo-500 to-indigo-600",
      deployment: "Stackable",
      problemSolved: "Government leaders need to anticipate issues—budget shortfalls, service demand spikes, supply chain disruptions, public health trends—but currently rely on lagging indicators and reactive responses.",
      targetUsers: ["Economic planning units (EPU, state planning departments)", "Health ministries (epidemic surveillance)", "Treasury and finance divisions", "Disaster management agencies (NADMA)"],
      features: [
        "Analyzes historical data to identify trends and patterns",
        "Generates forecasts for key metrics (hospital admissions, revenue collection)",
        "Issues early warnings when indicators deviate from normal patterns",
        "Provides scenario analysis ('What if unemployment rises by 2%?')",
        "Plain-language summaries for non-technical decision makers"
      ],
      aiRole: "The LLM interprets complex datasets and translates statistical findings into clear narratives. RAG connects to internal reports and external data sources. Automation runs periodic analyses and alerts relevant officers.",
      benefit: "Enables proactive policymaking instead of crisis management. Optimizes resource allocation based on predicted demand. Improves public service delivery. Demonstrates data-driven governance to stakeholders.",
      roi: "10 months"
    },
    {
      id: 7,
      name: "MyLegal AI",
      icon: Scale,
      category: "Document Warriors",
      power: "Legal research in 10 mins",
      savingsPerYear: "RM400K",
      timeReduction: "95%",
      color: "from-gray-600 to-gray-700",
      deployment: "Specialized",
      problemSolved: "Legal officers, drafters, and policy makers must research laws, past cases, legal opinions, and international precedents. Manually searching through volumes of legal texts and cross-referencing amendments is extremely time-consuming.",
      targetUsers: ["Attorney General's Chambers (AGC)", "Legal divisions in ministries", "Parliamentary drafting units", "Tribunal and board secretariats"],
      features: [
        "Natural language search across Malaysian legislation, subsidiary laws, and case law",
        "Identifies relevant legal provisions for specific policy questions",
        "Compares Malaysian law with foreign jurisdictions",
        "Tracks regulatory changes and amendments over time",
        "Assists in drafting by suggesting standard clauses and checking consistency"
      ],
      aiRole: "The LLM acts as a junior legal researcher, trained on Malaysian legal corpus via RAG. It quickly locates relevant sections, summarizes precedents, and highlights potential legal conflicts—tasks that would take a legal officer days.",
      benefit: "Accelerates legal research and policy drafting. Ensures consistency with existing laws. Reduces dependency on expensive external legal consultants. Strengthens quality of legislation and regulations.",
      roi: "8 months"
    },
    {
      id: 8,
      name: "MyPermit Pro",
      icon: FileCheck,
      category: "Citizen Interface",
      power: "45 days → 7 days",
      savingsPerYear: "RM600K",
      timeReduction: "85%",
      color: "from-teal-500 to-teal-600",
      deployment: "Stackable",
      problemSolved: "Processing applications for business licenses, permits (construction, food handling, environmental), and registrations involves checking eligibility, verifying documents, and ensuring compliance with regulations. This is repetitive, slow, and creates bottlenecks for businesses and citizens.",
      targetUsers: ["Local councils (PBT) processing business licenses", "Construction and development approval units", "Professional licensing boards (engineers, doctors, accountants)", "Trade and investment facilitation agencies (MIDA, MITI)"],
      features: [
        "Automated eligibility screening based on regulatory criteria",
        "Document verification (checks for completeness, validity)",
        "Instant feedback to applicants on missing requirements",
        "Intelligent routing to approval officers based on risk level",
        "Automated approval for straightforward, low-risk applications"
      ],
      aiRole: "The LLM reads applications and supporting documents, comparing them against regulatory requirements stored via RAG. It identifies gaps or red flags. Automation handles routine approvals, escalating only complex or high-risk cases.",
      benefit: "Cuts processing time from weeks to days. Improves Malaysia's ease of doing business ranking. Reduces corruption opportunities through transparent, automated checks. Increases compliance through clear guidance to applicants.",
      roi: "6 months"
    },
    {
      id: 9,
      name: "MyMeeting AI",
      icon: Clock,
      category: "Productivity",
      power: "Never forgets decisions",
      savingsPerYear: "RM200K",
      timeReduction: "75%",
      color: "from-pink-500 to-pink-600",
      deployment: "Standalone",
      problemSolved: "Government officers attend countless meetings. Recording minutes, tracking action items, and following up on commitments manually is tedious. Important decisions and tasks often fall through the cracks.",
      targetUsers: ["Meeting secretariats in ministries", "Cabinet and committee support units", "Project management offices", "Management teams across all agencies"],
      features: [
        "Automatic transcription of meeting recordings (Malay and English)",
        "Generates structured meeting minutes with key decisions and action items",
        "Extracts and assigns tasks to responsible officers",
        "Sends automated reminders for pending actions",
        "Searchable archive of all past meetings and decisions"
      ],
      aiRole: "The LLM transcribes speech, identifies speakers, and understands context to summarize discussions. RAG connects to previous meeting records to track recurring issues. Automation handles task assignment and follow-up reminders.",
      benefit: "Saves hours of administrative work per meeting. Ensures accountability through clear action tracking. Improves organizational memory and decision continuity. Allows officers to focus on discussion, not note-taking.",
      roi: "5 months"
    },
    {
      id: 10,
      name: "MyBudget Advisor",
      icon: DollarSign,
      category: "Intelligence",
      power: "Finds hidden savings",
      savingsPerYear: "RM500K",
      timeReduction: "70%",
      color: "from-yellow-500 to-yellow-600",
      deployment: "Stackable",
      problemSolved: "Budget officers must analyze spending patterns, justify allocations, identify savings opportunities, and prepare reports for management and Treasury. Manual analysis of expenditure data across programs and departments is overwhelming and slow.",
      targetUsers: ["Finance and budget divisions in all ministries", "State treasury departments", "Agency heads preparing annual budget submissions", "Performance management units"],
      features: [
        "Analyzes historical spending patterns by program, department, and category",
        "Identifies underspending, overspending, and potential cost savings",
        "Answers budget questions in natural language",
        "Generates draft budget narratives and justifications",
        "Compares spending against peer agencies or benchmarks"
      ],
      aiRole: "The LLM interprets financial data and translates it into clear insights. RAG connects to budget databases and past reports. Automation generates routine reports and highlights anomalies for officer review.",
      benefit: "Improves budget accuracy and accountability. Frees finance officers from repetitive reporting. Identifies efficiency gains and reallocation opportunities. Supports evidence-based resource allocation decisions.",
      roi: "9 months"
    },
    {
      id: 11,
      name: "MySentinel",
      icon: Radio,
      category: "Defense Systems",
      power: "48hr crisis warning",
      savingsPerYear: "RM300K",
      timeReduction: "100%",
      color: "from-cyan-500 to-cyan-600",
      deployment: "Standalone",
      problemSolved: "Government agencies need to understand public sentiment, detect emerging issues, and respond to misinformation or crises. Manually monitoring social media, news, and public feedback across platforms is impossible at scale.",
      targetUsers: ["Communications and public relations units (JAPEN, UPEN)", "Crisis management centers", "Policy evaluation units", "Service delivery agencies monitoring feedback"],
      features: [
        "Monitors social media, news sites, and public forums for mentions of government programs",
        "Analyzes sentiment (positive, negative, neutral) toward policies or services",
        "Detects emerging issues or viral complaints before they escalate",
        "Summarizes daily public discourse on key topics",
        "Provides early warning on misinformation or reputational risks"
      ],
      aiRole: "The LLM reads and interprets public posts, news articles, and comments in multiple languages. RAG connects to historical sentiment data to identify unusual patterns. Automation continuously scans sources and alerts officers to significant shifts.",
      benefit: "Enables rapid response to public concerns. Prevents crises through early detection. Informs policy adjustments based on real citizen feedback. Protects government reputation through timely communication.",
      roi: "7 months"
    },
    {
      id: 12,
      name: "MyContract AI",
      icon: FileSignature,
      category: "Defense Systems",
      power: "Spots bad deals early",
      savingsPerYear: "RM450K",
      timeReduction: "80%",
      color: "from-violet-500 to-violet-600",
      deployment: "Stackable",
      problemSolved: "Government procurement involves complex contracts with suppliers. Reviewing contracts for compliance with Treasury circulars, identifying unfavorable terms, and tracking obligations manually is slow and risky. Non-compliance or poor contract terms lead to cost overruns and disputes.",
      targetUsers: ["Procurement units in all ministries", "Contract management offices", "Internal audit teams reviewing procurement", "Legal units vetting supplier agreements"],
      features: [
        "Automated review of supplier contracts against procurement regulations",
        "Flags non-standard clauses or unfavorable terms",
        "Extracts key obligations, deadlines, and payment terms",
        "Compares pricing and terms with previous contracts",
        "Tracks contract performance and renewal dates"
      ],
      aiRole: "The LLM reads contract documents and identifies deviations from standard templates or regulations via RAG. It highlights risks like missing penalty clauses or excessive liability. Automation tracks deadlines and triggers renewal reviews.",
      benefit: "Reduces contract risks and disputes. Ensures compliance with procurement rules. Achieves better value for money through informed negotiation. Improves transparency and audit readiness.",
      roi: "8 months"
    }
  ];

  const combos = [
    {
      id: "combo1",
      name: "Document Domination",
      systems: ["MyDokumen AI", "MyKnowledge Hub", "MyLegal AI"],
      cost: "RM900K",
      effect: "Complete intel superiority",
      icon: FileText,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "combo2",
      name: "Fortress Protocol",
      systems: ["MyInspector", "MyFraudGuard", "MyContract AI"],
      cost: "RM900K",
      effect: "Triple-layer defense",
      icon: Shield,
      color: "from-red-500 to-orange-600"
    },
    {
      id: "combo3",
      name: "Speed Run",
      systems: ["MyPermit Pro", "MyDokumen AI", "MyAssist"],
      cost: "RM900K",
      effect: "Hours not weeks",
      icon: Zap,
      color: "from-green-500 to-teal-600"
    },
    {
      id: "combo4",
      name: "Oracle Suite",
      systems: ["MyForecast", "MySentinel", "MyBudget Advisor"],
      cost: "RM900K",
      effect: "See the future",
      icon: Brain,
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const deploymentTiers = [
    { name: "BRONZE", cost: "RM300K", systems: 1, timeline: "1 month", roi: "6 months" },
    { name: "SILVER", cost: "RM900K", systems: 3, timeline: "3 months", roi: "8 months" },
    { name: "GOLD", cost: "RM3.6M", systems: 12, timeline: "12 months", roi: "12 months" }
  ];

  const DetailPage = ({ product }) => {
    const Icon = product.icon;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Home
          </button>

          <div className={`bg-gradient-to-br ${product.color} rounded-2xl p-12 mb-8 shadow-2xl`}>
            <div className="flex items-start justify-between">
              <div className="flex items-center mb-6">
                <Icon className="w-24 h-24 mr-6" />
                <div>
                  <h1 className="text-5xl font-bold mb-2">{product.name}</h1>
                  <p className="text-2xl opacity-90">{product.power}</p>
                  <div className="flex gap-4 mt-4">
                    <span className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">
                      {product.category}
                    </span>
                    <span className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">
                      {product.deployment}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">RM300K</div>
                <div className="text-sm opacity-75">Investment</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">{product.savingsPerYear}</div>
                <div className="text-sm opacity-75">Saved Per Year</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">{product.timeReduction}</div>
                <div className="text-sm opacity-75">Time Reduction</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">{product.roi}</div>
                <div className="text-sm opacity-75">ROI Timeline</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 mr-3 text-red-400" />
              <h2 className="text-3xl font-bold">Problem Solved</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">{product.problemSolved}</p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 mr-3 text-blue-400" />
              <h2 className="text-3xl font-bold">Target Users</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.targetUsers.map((user, idx) => (
                <div key={idx} className="flex items-center bg-gray-700/50 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{user}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 mr-3 text-yellow-400" />
              <h2 className="text-3xl font-bold">Key Features</h2>
            </div>
            <div className="space-y-4">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start bg-gray-700/50 rounded-lg p-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-gray-900">
                    {idx + 1}
                  </div>
                  <span className="text-gray-200 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 mr-3 text-purple-400" />
              <h2 className="text-3xl font-bold">How AI Works</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">{product.aiRole}</p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-purple-900/30 border border-purple-500 rounded-lg p-4 text-center">
                <div className="font-bold text-purple-300 mb-2">LLM Engine</div>
                <div className="text-sm text-gray-400">Llama / Mistral / Qwen</div>
              </div>
              <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-4 text-center">
                <div className="font-bold text-blue-300 mb-2">RAG System</div>
                <div className="text-sm text-gray-400">Your Data + Context</div>
              </div>
              <div className="bg-green-900/30 border border-green-500 rounded-lg p-4 text-center">
                <div className="font-bold text-green-300 mb-2">Automation</div>
                <div className="text-sm text-gray-400">24/7 Processing</div>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-br ${product.color} rounded-2xl p-8 mb-8`}>
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">Government Benefit</h2>
            </div>
            <p className="text-lg leading-relaxed">{product.benefit}</p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Deploy {product.name}?</h3>
            <p className="text-xl mb-6">One-time investment • Perpetual license • Full sovereignty</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Request Demo
              </button>
              <button 
                onClick={() => setCurrentPage('home')}
                className="bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
              >
                View All Systems
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (currentPage !== 'home') {
    const product = products.find(p => p.id === currentPage);
    if (product) {
      return <DetailPage product={product} />;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto mb-12">
        {/* <div className="flex justify-end mb-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ms' : 'en')}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>{language === 'en' ? 'Bahasa Malaysia' : 'English'}</span>
          </button>
        </div> */}

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/320px-Flag_of_Malaysia.svg.png" 
              alt="Malaysian Flag" 
              className="h-12 w-auto"
            />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {getText('title')}
            </h1>
          </div>
          <p className="text-2xl text-gray-300">{getText('subtitle')}</p>
          <p className="text-lg text-gray-400 mt-2 max-w-4xl mx-auto">
A modular AI operating system that powers plug-and-play AI agents to run standalone, as combined suites, or as a fully integrated ecosystem for internal operations and select citizen services.
          </p>
          <p className="text-lg text-gray-400 mt-2 max-w-6xl mx-auto">
Enabling ministries to work smarter, respond faster and deliver trusted services fully secure, sustainable and sovereign.
          </p>
          
          <p className="text-lg text-gray-400 mt-2">{getText('statsLine')}</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold">12</div>
            <div className="text-sm text-blue-200">{getText('aiSystems')}</div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold">70%</div>
            <div className="text-sm text-green-200">{getText('avgTimeSaved')}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold">6-12</div>
            <div className="text-sm text-purple-200">{getText('monthsROI')}</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold">100%</div>
            <div className="text-sm text-orange-200">{getText('dataSovereign')}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        {/* <h2 className="text-3xl font-bold mb-6 text-center">🤖 12 AI Agents
          {getText('aiSystems')}
        </h2> */}

        <h2 className="text-3xl font-bold mb-6 text-center">🤖 12 {getText('aiSystems')}
        </h2>

        <p className="text-center text-gray-400 mb-8">Click any system to view full details</p>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                onClick={() => setCurrentPage(product.id)}
                className={`bg-gradient-to-br ${product.color} rounded-lg p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl`}
              >
                <div className="flex items-start justify-between mb-3">
                  <Icon className="w-10 h-10" />
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">{product.deployment}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm opacity-90 mb-3">{product.power}</p>
                <div className="flex justify-between text-xs">
                  <div>
                    <div className="font-bold text-lg">{product.timeReduction}</div>
                    <div className="opacity-75">Time Saved</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{product.savingsPerYear}</div>
                    <div className="opacity-75">Saved/Year</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-blue-200 text-sm font-semibold hover:text-white transition-colors">
                    View Details →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">💥 POWER COMBOS</h2>
        <div className="grid grid-cols-2 gap-6">
          {combos.map((combo) => {
            const ComboIcon = combo.icon;
            return (
              <div
                key={combo.id}
                className={`bg-gradient-to-br ${combo.color} rounded-lg p-6 transform transition-all hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  <ComboIcon className="w-12 h-12 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">{combo.name}</h3>
                    <p className="text-sm opacity-90">{combo.effect}</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded p-3 mb-3">
                  <div className="text-sm opacity-75 mb-1">Includes:</div>
                  {combo.systems.map((sys, idx) => (
                    <div key={idx} className="text-sm font-semibold">• {sys}</div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{combo.cost}</div>
                  <div className="text-sm opacity-75">Total Investment</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">🚀 DEPLOYMENT STRATEGIES</h2>
        <div className="grid grid-cols-3 gap-6">
          {deploymentTiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`rounded-lg p-6 border-4 ${
                idx === 0 ? 'border-orange-400 bg-orange-900/20' :
                idx === 1 ? 'border-gray-400 bg-gray-900/20' :
                'border-yellow-400 bg-yellow-900/20'
              }`}
            >
              <div className="text-center mb-4">
                <div className={`text-2xl font-bold mb-2 ${
                  idx === 0 ? 'text-orange-400' :
                  idx === 1 ? 'text-gray-400' :
                  'text-yellow-400'
                }`}>{tier.name}</div>
                <div className="text-4xl font-bold mb-2">{tier.cost}</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-75">Systems:</span>
                  <span className="font-bold">{tier.systems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-75">Timeline:</span>
                  <span className="font-bold">{tier.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-75">ROI:</span>
                  <span className="font-bold">{tier.roi}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">⚙️ TECH ARCHITECTURE</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6">
            <Brain className="w-12 h-12 mb-3 text-purple-400" />
            <h3 className="font-bold text-lg mb-2">Open-Source LLMs</h3>
            <p className="text-sm opacity-75">Full control, secure and customizable AI.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6">
            <Database className="w-12 h-12 mb-3 text-blue-400" />
            <h3 className="font-bold text-lg mb-2">RAG knowledge base</h3>
            <p className="text-sm opacity-75">Updated, accurate and trusted in-house datasets.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6">
            <Server className="w-12 h-12 mb-3 text-green-400  " />
            <h3 className="font-bold text-lg mb-2">NVIDIA DGX Spark</h3>
            <p className="text-sm opacity-75">On-premise supercomputer. Malaysian soil only.</p>
          </div>
          {/* <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6">
            <Lock className="w-12 h-12 mb-3 text-green-400" />
            <h3 className="font-bold text-lg mb-2">100% Sovereign</h3>
            <p className="text-sm opacity-75">Data never leaves Malaysia. MAMPU compliant.</p>
          </div> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">🎯 THE BOTTOM LINE</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-300">❌ OLD WAY</h3>
              <ul className="space-y-2 text-sm">
                <li>• Officers buried in paperwork</li>
                <li>• Citizens waiting weeks</li>
                <li>• Fraud slipping through</li>
                <li>• Policies lost in folders</li>
                <li>• Expensive cloud subscriptions</li>
                <li>• Data in foreign servers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-300">✅ ZARA WAY</h3>
              <ul className="space-y-2 text-sm">
                <li>• AI handles routine work</li>
                <li>• Citizens served in minutes</li>
                <li>• Fraud caught automatically</li>
                <li>• Instant policy recall</li>
                <li>• One-time investment</li>
                <li>• Data stays in Malaysia 🇲🇾</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-2xl font-bold">Ready to deploy, Sir? 🚀</p>
            <p className="text-sm opacity-75 mt-2">"The future of Malaysian governance is compiling..."</p>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default AIArsenalDashboard;
