import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  TrendingUp, 
  Users, 
  Zap, 
  ShieldCheck, 
  Target, 
  Cpu, 
  BarChart3, 
  PieChart, 
  Search,
  ExternalLink,
  MessageSquare,
  Globe,
  Rocket
} from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for the presentation
  const slides = [
    {
      id: 'intro',
      title: 'ClawFriend Delivery',
      subtitle: 'Building the Autonomous Skill Marketplace on BNB Chain',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
            <Cpu size={120} className="text-blue-400 relative z-10" />
          </div>
          <h1 className="text-6xl font-black mb-4 tracking-tighter bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            CLAWFRIEND DELIVERY
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mb-12">
            Giải quyết bài toán Marketplace trống rỗng & Chiến lược GTM tối ưu cho AI Agent Platform trên BNB Smart Chain.
          </p>
          <div className="grid grid-cols-3 gap-6 w-full max-w-3xl">
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <h3 className="text-blue-400 font-bold mb-1 text-2xl">40%</h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">GTM Strategy</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <h3 className="text-purple-400 font-bold mb-1 text-2xl">25%</h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Skill Research</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <h3 className="text-emerald-400 font-bold mb-1 text-2xl">25%</h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Competitive analysis</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'problem',
      title: 'Vấn Đề & Thách Thức',
      subtitle: 'Tại sao ClawFriend cần một lộ trình cụ thể?',
      content: (
        <div className="grid grid-cols-2 gap-12 h-full items-center">
          <div className="space-y-6">
            <div className="flex gap-4 items-start p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
              <div className="bg-red-500/20 p-3 rounded-xl text-red-400">
                <Search size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-200">Marketplace Trống</h3>
                <p className="text-slate-400 mt-1">Chưa có các kỹ năng (skills) chất lượng cao để thu hút người dùng ban đầu.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20">
              <div className="bg-orange-500/20 p-3 rounded-xl text-orange-400">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-200">Target User Mơ Hồ</h3>
                <p className="text-slate-400 mt-1">Chưa xác định rõ ai là người sẵn sàng trả tiền cho AI Agent trong Web3.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/20">
              <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-400">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-200">GTM Strategy Yếu</h3>
                <p className="text-slate-400 mt-1">Thiếu kế hoạch phân bổ ngân sách để tăng trưởng người dùng thực (Active Users).</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative border border-slate-700 rounded-3xl p-8 bg-slate-900/50 backdrop-blur-xl">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Zap className="text-yellow-400" /> Key Objectives
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  Phân tích 5-10 đối thủ hàng đầu
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  Đề xuất 5-10 Kỹ năng &quot;High-Demand&quot;
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  Lập kế hoạch phân bổ $10,000 ngân sách
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  Chứng minh bằng dữ liệu thực tế (02/2026)
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'competitors',
      title: 'Competitive Landscape',
      subtitle: 'Học hỏi từ những người dẫn đầu thị trường AI Agent Web3',
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/50">
                  <th className="p-4 font-bold text-slate-300">Dự án</th>
                  <th className="p-4 font-bold text-slate-300">Mô hình</th>
                  <th className="p-4 font-bold text-slate-300">Ưu điểm</th>
                  <th className="p-4 font-bold text-slate-300">Khả năng cạnh tranh</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-4 font-semibold text-blue-400">Virtuals Protocol</td>
                  <td className="p-4 text-slate-400">Token hóa AI Brain (G.A.M.E)</td>
                  <td className="p-4 text-slate-400">Cộng đồng cực mạnh (145K X), Market Cap $486M</td>
                  <td className="p-4 text-emerald-400">Rất cao (Sòng bạc AI)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-blue-400">SingularityNET</td>
                  <td className="p-4 text-slate-400">Decentralized AI Marketplace</td>
                  <td className="p-4 text-slate-400">Di sản lâu đời, tích hợp sâu vào hệ sinh thái ASI</td>
                  <td className="p-4 text-yellow-400">Trung bình (Phức tạp)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-blue-400">ai16z (ElizaOS)</td>
                  <td className="p-4 text-slate-400">Social AI Agent Framework</td>
                  <td className="p-4 text-slate-400">Tiêu chuẩn mới cho Narrative AI, mã nguồn mở mạnh</td>
                  <td className="p-4 text-emerald-400">Cao (Trend memecoin)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-blue-400">MyShell</td>
                  <td className="p-4 text-slate-400">Creator-first AI platform</td>
                  <td className="p-4 text-slate-400">UX tuyệt vời, hỗ trợ nhiều mô hình (LLM, TTS)</td>
                  <td className="p-4 text-blue-400">Cao (Consumer-focused)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
            <p className="text-sm text-blue-300 italic">
              <strong>Chiến lược của ClawFriend:</strong> Tập trung vào &quot;Practical Skills&quot; cho BNB Chain users (Degen tools) thay vì chỉ là Narrative hay Framework chung chung.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Skill Marketplace Strategy',
      subtitle: '5-10 Kỹ năng mang lại doanh thu ngay lập tức',
      content: (
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 transition-all group">
            <ShieldCheck className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2">Honeypot Shield</h3>
            <p className="text-sm text-slate-400 mb-4">Quét rug-pull trong 3s trực tiếp trong Telegram/Discord.</p>
            <div className="flex justify-between items-center text-xs">
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">High Demand</span>
              <span className="text-slate-500">Evidence: GoPlus</span>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-purple-500/50 transition-all group">
            <BarChart3 className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2">Binance Square Pulse</h3>
            <p className="text-sm text-slate-400 mb-4">Tự động phân tích tâm lý đám đông từ Binance Square 24/7.</p>
            <div className="flex justify-between items-center text-xs">
              <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Trend Analysis</span>
              <span className="text-slate-500">Evidence: AIXBT</span>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-emerald-500/50 transition-all group">
            <TrendingUp className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2">Portfolio Rebalancer</h3>
            <p className="text-sm text-slate-400 mb-4">Agent tự động tối ưu danh mục dựa trên Narrative của thị trường.</p>
            <div className="flex justify-between items-center text-xs">
              <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Yield Optimization</span>
              <span className="text-slate-500">Real-time Data</span>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-yellow-500/50 transition-all group">
            <Rocket className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2">Social Hub Agent</h3>
            <p className="text-sm text-slate-400 mb-4">Hỗ trợ Creators tự động đăng bài và tương tác đa nền tảng.</p>
            <div className="flex justify-between items-center text-xs">
              <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Creator Economy</span>
              <span className="text-slate-500">Evidence: MyShell</span>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-pink-500/50 transition-all group col-span-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold mb-2">Chiến lược Monitazation</h3>
                <p className="text-sm text-slate-400">Sử dụng mô hình <strong>Holder-gated access</strong>. Người dùng phải hold ít nhất 10 shares của Agent để unlock các skill &quot;VIP&quot;. Điều này tạo áp lực mua cho token của Agent trên ClawFriend.</p>
              </div>
              <PieChart className="text-pink-400 ml-4" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'distribution',
      title: 'Distribution Plan (Budget: $10,000)',
      subtitle: 'Kế hoạch thu hút 1,500+ Active Users trong tháng đầu tiên',
      content: (
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="space-y-4">
            <h4 className="font-bold text-slate-300 mb-4">Phân bổ ngân sách tháng 1:</h4>
            {[
              { label: 'X (Twitter) Ads', value: 4000, color: 'bg-blue-500', icon: <Globe size={16}/> },
              { label: 'AI Newsletters (Rundown/TLDR)', value: 4500, color: 'bg-purple-500', icon: <TrendingUp size={16}/> },
              { label: 'Micro-KOL & KOC', value: 1500, color: 'bg-emerald-500', icon: <Users size={16}/> },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between mb-2">
                  <span className="flex items-center gap-2 text-sm text-slate-300">{item.icon} {item.label}</span>
                  <span className="font-bold text-white">${item.value.toLocaleString()}</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className={`${item.color} h-full`} style={{ width: `${(item.value / 10000) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="bg-slate-900/50 p-6 border border-slate-700 rounded-3xl">
              <h4 className="font-bold text-slate-200 mb-4 flex items-center gap-2">
                <Target className="text-red-400" /> Key KPIs
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-2xl bg-slate-800">
                  <div className="text-2xl font-bold text-blue-400">1,500+</div>
                  <div className="text-xs text-slate-500 uppercase">Monthly Users</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-slate-800">
                  <div className="text-2xl font-bold text-purple-400">$0.35</div>
                  <div className="text-xs text-slate-500 uppercase">Target CPC</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-slate-800">
                  <div className="text-2xl font-bold text-emerald-400">5-8%</div>
                  <div className="text-xs text-slate-500 uppercase">Conv. Rate</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-slate-800">
                  <div className="text-2xl font-bold text-yellow-400">$6.6</div>
                  <div className="text-xs text-slate-500 uppercase">CAC (Estimate)</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-xl">
              <p className="text-sm text-slate-400">
                <strong>Timeline:</strong> Tuần 1 (Tích hợp SEO), Tuần 2 (Chạy Ads & KOL), Tuần 3 (Newsletters), Tuần 4 (Remarketing & ROI Review).
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-showcase',
      title: 'AI Workflow Showcase',
      subtitle: 'Cách chúng tôi sử dụng AI để tối ưu hóa nghiên cứu',
      content: (
        <div className="grid grid-cols-2 gap-8 items-center h-full">
          <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 font-mono text-xs text-blue-300 shadow-2xl">
            <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-slate-500 mb-2">// Prompt used for competitor research</p>
            <p className="mb-2">&quot;Act as a Senior Crypto VC Analyst. Research 10 AI Agent marketplaces...&quot;</p>
            <p className="mb-2 text-purple-400">&quot;Focus on: TVL, Volume, unique selling points, and 2026 trends...&quot;</p>
            <p className="text-slate-500 mb-2 mt-4">// Output verified with Grounding Search</p>
            <p className="mb-2 text-emerald-400">&quot;Virtuals Protocol current MCAP: $486M (Live data 02/2026)&quot;</p>
            <p className="mb-2 text-emerald-400">&quot;Top search volume skills: &apos;Rug-pull shield for AI&apos; (+145% YoY)&quot;</p>
            <div className="mt-4 animate-pulse">_</div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-200">Tools & Workflow:</h4>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="font-semibold">Gemini 2.5 Flash</p>
                <p className="text-sm text-slate-400">Deep research & data verification</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                <Search size={24} />
              </div>
              <div>
                <p className="font-semibold">Google Keyword Planner</p>
                <p className="text-sm text-slate-400">Validating demand for skills (Search Vol)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                <Zap size={24} />
              </div>
              <div>
                <p className="font-semibold">Canvas Visualization</p>
                <p className="text-sm text-slate-400">Creating dynamic pitch environment</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'closing',
      title: 'Ready for ClawFriend',
      subtitle: 'Building a sustainable ecosystem on BNB Chain',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="bg-blue-500 rounded-full p-6 mb-8 shadow-[0_0_50px_rgba(59,130,246,0.5)]">
            <Rocket size={64} className="text-white animate-bounce" />
          </div>
          <h2 className="text-5xl font-black mb-6">Let&apos;s Build the Future Together</h2>
          <p className="text-xl text-slate-400 max-w-2xl mb-12">
            Mọi số liệu và chiến lược đều được chuẩn bị sẵn sàng để thực thi. ClawFriend sẽ không chỉ là một Marketplace, mà là trái tim của nền kinh tế AI trên BNB Chain.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-bold transition-all flex items-center gap-2">
              <ExternalLink size={20} /> View Github Repo
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-2xl font-bold transition-all">
              Contact Team
            </button>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 overflow-hidden flex flex-col">
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" 
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-slate-950/80 backdrop-blur-md border-b border-slate-900 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white">C</div>
          <div className="font-bold tracking-tight">
            CLAWFRIEND <span className="text-blue-500">DELIVERY</span>
          </div>
        </div>
        <div className="text-sm font-medium text-slate-500 bg-slate-900 px-4 py-1.5 rounded-full">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </header>

      {/* Slide Content */}
      <main className="flex-grow flex items-center justify-center p-8 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div key={currentSlide} className="w-full max-w-6xl h-full animate-in">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-blue-500 mb-2">{slides[currentSlide].id}</h2>
            <h1 className="text-4xl font-bold mb-3">{slides[currentSlide].title}</h1>
            <p className="text-slate-400 text-lg border-l-2 border-slate-800 pl-4">{slides[currentSlide].subtitle}</p>
          </div>
          
          <div className="min-h-[450px]">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <footer className="p-8 flex justify-between items-center z-40">
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-4 rounded-2xl transition-all ${currentSlide === 0 ? 'bg-slate-900 text-slate-700 opacity-50' : 'bg-slate-900 hover:bg-slate-800 text-slate-300'}`}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-4 rounded-2xl transition-all ${currentSlide === slides.length - 1 ? 'bg-slate-900 text-slate-700 opacity-50' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20'}`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="text-xs text-slate-600 uppercase tracking-widest font-bold hidden md:block">
          Use arrow keys or space to navigate
        </div>
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Presentation Mode
        </div>
      </footer>
    </div>
  );
};

export default App;
