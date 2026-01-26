import React, { useState } from 'react';
import { Shield, FileText, Brain, Users, AlertTriangle, TrendingUp, Scale, FileCheck, Clock, DollarSign, Radio, FileSignature, Zap, Database, Lock, ArrowLeft, CheckCircle, Target, Sparkles, Globe, ArrowUp } from 'lucide-react';

const AIArsenalDashboard = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getText = (enText, msText) => language === 'en' ? enText : msText;

  const products = [
    {
      id: 1,
      name: "MyDokumen AI",
      icon: FileText,
      category: getText("Document Warriors", "Pasukan Dokumen"),
      power: getText("Reads & sorts like 1000 officers", "Baca & susun seperti 1000 pegawai"),
      savingsPerYear: "RM500K",
      timeReduction: "70%",
      color: "from-blue-500 to-blue-600",
      deployment: getText("Plug & Play", "Sedia Guna"),
      roi: getText("6 months", "6 bulan")
    },
    {
      id: 2,
      name: "MyKnowledge Hub",
      icon: Brain,
      category: getText("Document Warriors", "Pasukan Dokumen"),
      power: getText("Instant policy recall", "Ingat dasar serta-merta"),
      savingsPerYear: "RM300K",
      timeReduction: "95%",
      color: "from-purple-500 to-purple-600",
      deployment: getText("Stackable", "Boleh Susun"),
      roi: getText("8 months", "8 bulan")
    },
    {
      id: 3,
      name: "MyAssist",
      icon: Users,
      category: getText("Citizen Interface", "Antara Muka Rakyat"),
      power: getText("24/7 citizen service", "Perkhidmatan rakyat 24/7"),
      savingsPerYear: "RM400K",
      timeReduction: "50%",
      color: "from-green-500 to-green-600",
      deployment: getText("Standalone", "Berdiri Sendiri"),
      roi: getText("7 months", "7 bulan")
    },
    {
      id: 4,
      name: "MyInspector",
      icon: Shield,
      category: getText("Defense Systems", "Sistem Pertahanan"),
      power: getText("X-ray compliance vision", "Penglihatan pematuhan sinar-X"),
      savingsPerYear: "RM600K",
      timeReduction: "80%",
      color: "from-red-500 to-red-600",
      deployment: getText("Stackable", "Boleh Susun"),
      roi: getText("9 months", "9 bulan")
    },
    {
      id: 5,
      name: "MyFraudGuard",
      icon: AlertTriangle,
      category: getText("Defense Systems", "Sistem Pertahanan"),
      power: getText("Catches fraud instantly", "Tangkap penipuan serta-merta"),
      savingsPerYear: "RM2-5M",
      timeReduction: "90%",
      color: "from-orange-500 to-orange-600",
      deployment: getText("Network", "Rangkaian"),
      roi: getText("3 months", "3 bulan")
    },
    {
      id: 6,
      name: "MyForecast",
      icon: TrendingUp,
      category: getText("Intelligence", "Perisikan"),
      power: getText("Predicts 3 months ahead", "Ramal 3 bulan ke hadapan"),
      savingsPerYear: "RM800K",
      timeReduction: "60%",
      color: "from-indigo-500 to-indigo-600",
      deployment: getText("Stackable", "Boleh Susun"),
      roi: getText("10 months", "10 bulan")
    },
    {
      id: 7,
      name: "MyLegal AI",
      icon: Scale,
      category: getText("Document Warriors", "Pasukan Dokumen"),
      power: getText("Legal research in 10 mins", "Penyelidikan undang-undang dalam 10 minit"),
      savingsPerYear: "RM400K",
      timeReduction: "95%",
      color: "from-gray-600 to-gray-700",
      deployment: getText("Specialized", "Khusus"),
      roi: getText("8 months", "8 bulan")
    },
    {
      id: 8,
      name: "MyPermit Pro",
      icon: FileCheck,
      category: getText("Citizen Interface", "Antara Muka Rakyat"),
      power: "45 days → 7 days",
      savingsPerYear: "RM600K",
      timeReduction: "85%",
      color: "from-teal-500 to-teal-600",
      deployment: getText("Stackable", "Boleh Susun"),
      roi: getText("6 months", "6 bulan")
    },
    {
      id: 9,
      name: "MyMeeting AI",
      icon: Clock,
      category: getText("Productivity", "Produktiviti"),
      power: getText("Never forgets decisions", "Tidak lupa keputusan"),
      savingsPerYear: "RM200K",
      timeReduction: "75%",
      color: "from-pink-500 to-pink-600",
      deployment: getText("Standalone", "Berdiri Sendiri"),
      roi: getText("5 months", "5 bulan")
    },
    {
      id: 10,
      name: "MyBudget Advisor",
      icon: DollarSign,
      category: getText("Intelligence", "Perisikan"),
      power: getText("Finds hidden savings", "Jumpa penjimatan tersembunyi"),
      savingsPerYear: "RM500K",
      timeReduction: "70%",
      color: "from-yellow-500 to-yellow-600",
      deployment: getText("Stackable", "Boleh Susun"),
      roi: getText("9 months", "9 bulan")
    },
    {
      id: 11,
      name: "MySentinel",
      icon: Radio,
      category: getText("Defense Systems", "Sistem Pertahanan"),
      power: getText("48hr crisis warning", "Amaran krisis 48 jam"),
      savingsPerYear: "RM300K",
      timeReduction: "100%",
      color: "from-cyan-500 to-cyan-600",
      deployment: getText("Standalone", "Berdiri Sendiri"),
      roi: getText("7 months", "7 bulan")
    },
    {
      id: 12,
      name: "MyContract AI",
      icon: FileSignature,
      category: getText("Defense Systems", "Sistem Pertahanan"),
      power: getText("Spots bad deals early", "Kesan tawaran buruk awal"),
      savingsPerYear: "RM450K",
      timeReduction: "80%",
      color: "from-violet-500 to-violet-600",
      deployment: getText("Stackable", "Boleh Susun"),
      roi: getText("8 months", "8 bulan")
    }
  ];

  const combos = [
    {
      id: "combo1",
      name: getText("Document Domination", "Dominasi Dokumen"),
      systems: ["MyDokumen AI", "MyKnowledge Hub", "MyLegal AI"],
      cost: "RM900K",
      effect: getText("Complete intel superiority", "Keunggulan perisikan lengkap"),
      icon: FileText,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "combo2",
      name: getText("Fortress Protocol", "Protokol Kubu"),
      systems: ["MyInspector", "MyFraudGuard", "MyContract AI"],
      cost: "RM900K",
      effect: getText("Triple-layer defense", "Pertahanan tiga lapisan"),
      icon: Shield,
      color: "from-red-500 to-orange-600"
    },
    {
      id: "combo3",
      name: getText("Speed Run", "Larian Pantas"),
      systems: ["MyPermit Pro", "MyDokumen AI", "MyAssist"],
      cost: "RM900K",
      effect: getText("Hours not weeks", "Jam bukan minggu"),
      icon: Zap,
      color: "from-green-500 to-teal-600"
    },
    {
      id: "combo4",
      name: getText("Oracle Suite", "Suite Oracle"),
      systems: ["MyForecast", "MySentinel", "MyBudget Advisor"],
      cost: "RM900K",
      effect: getText("See the future", "Lihat masa depan"),
      icon: Brain,
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const deploymentTiers = [
    { 
      name: "BRONZE", 
      cost: "RM300K", 
      systems: 1, 
      timeline: getText("1 month", "1 bulan"), 
      roi: getText("6 months", "6 bulan") 
    },
    { 
      name: "SILVER", 
      cost: "RM900K", 
      systems: 3, 
      timeline: getText("3 months", "3 bulan"), 
      roi: getText("8 months", "8 bulan") 
    },
    { 
      name: "GOLD", 
      cost: "RM3.6M", 
      systems: 12, 
      timeline: getText("12 months", "12 bulan"), 
      roi: getText("12 months", "12 bulan") 
    }
  ];

  if (currentPage !== 'home') {
    const product = products.find(p => p.id === currentPage);
    if (product) {
      const Icon = product.icon;
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 mr-2" />
                {getText("Back to Arsenal", "Kembali ke Senjata")}
              </button>
              <button
                onClick={() => setLanguage(language === 'en' ? 'ms' : 'en')}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>{language === 'en' ? 'Bahasa Malaysia' : 'English'}</span>
              </button>
            </div>

            <div className={`bg-gradient-to-br ${product.color} rounded-2xl p-12 mb-8 shadow-2xl`}>
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

              <div className="grid grid-cols-4 gap-6 mt-8">
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold mb-2">RM300K</div>
                  <div className="text-sm opacity-75">{getText("Investment", "Pelaburan")}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold mb-2">{product.savingsPerYear}</div>
                  <div className="text-sm opacity-75">{getText("Saved Per Year", "Penjimatan Setahun")}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold mb-2">{product.timeReduction}</div>
                  <div className="text-sm opacity-75">{getText("Time Reduction", "Pengurangan Masa")}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold mb-2">{product.roi}</div>
                  <div className="text-sm opacity-75">{getText("ROI Timeline", "Tempoh Pulangan")}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">
                {getText("Ready to Deploy", "Bersedia Melaksanakan")} {product.name}?
              </h3>
              <p className="text-xl mb-6">
                {getText(
                  "One-time investment • Perpetual license • Full sovereignty",
                  "Pelaburan sekali • Lesen kekal • Kedaulatan penuh"
                )}
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                  {getText("Request Demo", "Minta Demo")}
                </button>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
                >
                  {getText("View All Systems", "Lihat Semua Sistem")}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ms' : 'en')}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>{language === 'en' ? 'Bahasa Malaysia' : 'English'}</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {getText("JARVIS PROTOCOL", "PROTOKOL JARVIS")}
          </h1>
          <p className="text-2xl text-gray-300">
            {getText("Malaysian Gov-Tech AI Arsenal", "Senjata AI Gov-Tech Malaysia")}
          </p>
          <p className="text-lg text-gray-400 mt-2">
            {getText(
              "12 AI Systems • RM300K Each • Sovereign & Secure",
              "12 Sistem AI • RM300K Setiap Satu • Berdaulat & Selamat"
            )}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold">12</div>
            <div className="text-sm text-blue-200">{getText("AI Systems", "Sistem AI")}</div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold">70%</div>
            <div className="text-sm text-green-200">{getText("Avg Time Saved", "Purata Masa Jimat")}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold">6-12</div>
            <div className="text-sm text-purple-200">{getText("Months ROI", "Bulan Pulangan")}</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold">100%</div>
            <div className="text-sm text-orange-200">{getText("Data Sovereign", "Kedaulatan Data")}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          🤖 {getText("12 AI SYSTEMS", "12 SISTEM AI")}
        </h2>
        <p className="text-center text-gray-400 mb-8">
          {getText("Click any system to view full details", "Klik mana-mana sistem untuk lihat butiran penuh")}
        </p>
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
                    <div className="opacity-75">{getText("Time Saved", "Masa Jimat")}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{product.savingsPerYear}</div>
                    <div className="opacity-75">{getText("Saved/Year", "Jimat/Tahun")}</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-blue-200 text-sm font-semibold hover:text-white transition-colors">
                    {getText("View Details →", "Lihat Butiran →")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          💥 {getText("POWER COMBOS", "PAKEJ BERKUASA")}
        </h2>
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
                  <div className="text-sm opacity-75 mb-1">{getText("Includes:", "Termasuk:")}</div>
                  {combo.systems.map((sys, idx) => (
                    <div key={idx} className="text-sm font-semibold">• {sys}</div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{combo.cost}</div>
                  <div className="text-sm opacity-75">{getText("Total Investment", "Jumlah Pelaburan")}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          🚀 {getText("DEPLOYMENT STRATEGIES", "STRATEGI PELAKSANAAN")}
        </h2>
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
                  <span className="opacity-75">{getText("Systems:", "Sistem:")}</span>
                  <span className="font-bold">{tier.systems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-75">{getText("Timeline:", "Tempoh Masa:")}</span>
                  <span className="font-bold">{tier.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-75">{getText("ROI:", "Pulangan:")}</span>
                  <span className="font-bold">{tier.roi}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          ⚙️ {getText("TECH ARCHITECTURE", "SENI BINA TEKNOLOGI")}
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6">
            <Database className="w-12 h-12 mb-3 text-blue-400" />
            <h3 className="font-bold text-lg mb-2">NVIDIA DGX Spark</h3>
            <p className="text-sm opacity-75">
              {getText(
                "On-premise supercomputer. Malaysian soil only.",
                "Superkomputer dalaman. Di bumi Malaysia sahaja."
              )}
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6">
            <Brain className="w-12 h-12 mb-3 text-purple-400" />
            <h3 className="font-bold text-lg mb-2">
              {getText("Open-Source LLMs", "LLM Sumber Terbuka")}
            </h3>
            <p className="text-sm opacity-75">
              {getText(
                "Llama, Mistral, Qwen. No vendor lock-in.",
                "Llama, Mistral, Qwen. Tiada penguncian vendor."
              )}
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6">
            <Lock className="w-12 h-12 mb-3 text-green-400" />
            <h3 className="font-bold text-lg mb-2">
              {getText("100% Sovereign", "100% Berdaulat")}
            </h3>
            <p className="text-sm opacity-75">
              {getText(
                "Data never leaves Malaysia. MAMPU compliant.",
                "Data tidak keluar dari Malaysia. Mematuhi MAMPU."
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            🎯 {getText("THE BOTTOM LINE", "KESIMPULAN")}
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-300">
                ❌ {getText("OLD WAY", "CARA LAMA")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• {getText("Officers buried in paperwork", "Pegawai ditimbus kertas kerja")}</li>
                <li>• {getText("Citizens waiting weeks", "Rakyat menunggu berminggu")}</li>
                <li>• {getText("Fraud slipping through", "Penipuan terlepas pandang")}</li>
                <li>• {getText("Policies lost in folders", "Dasar hilang dalam folder")}</li>
                <li>• {getText("Expensive cloud subscriptions", "Langganan awan mahal")}</li>
                <li>• {getText("Data in foreign servers", "Data di pelayan asing")}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-300">
                ✅ {getText("JARVIS WAY", "CARA JARVIS")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• {getText("AI handles routine work", "AI kendalikan kerja rutin")}</li>
                <li>• {getText("Citizens served in minutes", "Rakyat dilayan dalam minit")}</li>
                <li>• {getText("Fraud caught automatically", "Penipuan ditangkap automatik")}</li>
                <li>• {getText("Instant policy recall", "Ingat dasar serta-merta")}</li>
                <li>• {getText("One-time investment", "Pelaburan sekali sahaja")}</li>
                <li>• {getText("Data stays in Malaysia", "Data kekal di Malaysia")} 🇲🇾</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-2xl font-bold">
              {getText("Ready to deploy, Sir?", "Bersedia untuk pelaksanaan, Tuan?")} 🚀
            </p>
            <p className="text-sm opacity-75 mt-2">
              {getText(
                '"The future of Malaysian governance is compiling..."',
                '"Masa depan tadbir urus Malaysia sedang dikompil..."'
              )}
            </p>
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