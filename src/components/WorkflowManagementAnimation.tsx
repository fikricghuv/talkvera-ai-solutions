import { useState, useEffect } from 'react';
import { FileText, Zap, Cog, Database, Repeat, CheckCircle2, ShieldCheck } from 'lucide-react';

const WorkflowManagementAnimation = () => {
  // State untuk mengontrol langkah animasi
  // 0: Idle (menunggu input)
  // 1: Input -> Hub (proses dikirim)
  // 2: Processing (hub bekerja, langkah-langkah berputar)
  // 3: Hub -> Output (hasil dikirim)
  // 4: Done (hasil ditampilkan)
  const [step, setStep] = useState(0);

  // State untuk mengontrol ikon workflow mana yang aktif
  const [activeOrbitIndex, setActiveOrbitIndex] = useState(0);

  // 4 ikon workflow
  const workflowSteps = [
    { icon: Cog, label: 'Processing', color: 'text-cyan-400', shadow: 'shadow-cyan-500/50' },
    { icon: Database, label: 'Data Sync', color: 'text-green-400', shadow: 'shadow-green-500/50' },
    { icon: Repeat, label: 'Monitoring', color: 'text-yellow-400', shadow: 'shadow-yellow-500/50' },
    { icon: ShieldCheck, label: 'Security', color: 'text-red-400', shadow: 'shadow-red-500/50' },
  ];

  // Efek untuk siklus utama animasi (tidak berubah)
  useEffect(() => {
    const cycle = [
      () => setStep(1), // 1. Input -> Hub
      () => setStep(2), // 2. Processing
      () => setStep(3), // 3. Hub -> Output
      () => setStep(4), // 4. Done
      () => setStep(0), // 5. Reset ke Idle
    ];

    let currentStepIndex = 0;
    const interval = setInterval(() => {
      cycle[currentStepIndex]();
      currentStepIndex = (currentStepIndex + 1) % cycle.length;
    }, 2500); 

    return () => clearInterval(interval);
  }, []);

  // Efek untuk animasi ikon yang mengorbit (hanya saat step 2)
  useEffect(() => {
    let orbitInterval: ReturnType<typeof setInterval> | undefined;
    if (step === 2) {
      orbitInterval = setInterval(() => {
        setActiveOrbitIndex(prev => (prev + 1) % workflowSteps.length);
      }, 800); 
    }
    return () => clearInterval(orbitInterval);
  }, [step, workflowSteps.length]); 

  // Keyframes untuk animasi garis (flow)
  const flowAnimation = `
    @keyframes flow {
      from {
        stroke-dashoffset: 0;
      }
      to {
        stroke-dashoffset: -20;
      }
    }
  `;

  return (
    <div className="w-full flex items-center justify-center p-8 overflow-hidden">
      {/* Menambahkan keyframes ke DOM */}
      <style>{flowAnimation}</style>
      
      <div className="relative w-full max-w-xs h-[450px]">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>

        {/* 1. INPUT NODE (Proses Anda) */}
        <div
          className="absolute top-8 left-1/2 -translate-x-1/2 transition-all duration-500 z-10"
          style={{ transform: `translateX(-50%) scale(${step === 0 || step === 1 ? 1.1 : 0.9})` }}
        >
          <div className={`relative p-4 rounded-2xl border-2 transition-all duration-500 ${
            step === 0 || step === 1
              ? 'bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-500/50'
              : 'bg-gray-800/50 border-gray-700/50 opacity-50'
          }`}>
            <FileText className={`w-8 h-8 ${step === 0 || step === 1 ? 'text-blue-400' : 'text-gray-500'}`} />
          </div>
          <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap transition-opacity ${
            step === 0 || step === 1 ? 'opacity-100 text-blue-400' : 'opacity-50 text-gray-400'
          }`}>
            Proses Anda
          </span>
        </div>

        {/* 2. CENTRAL HUB (Solusi Kami) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className={`relative p-6 bg-gray-800 rounded-full border-2 transition-all duration-500 ${
              step === 2 
                ? 'border-purple-400 shadow-2xl shadow-purple-500/60' 
                : 'border-gray-700'
            }`}
            style={{ transform: `scale(${step === 2 ? 1.15 : 1})` }}
          >
            <Zap className={`w-12 h-12 transition-colors ${step === 2 ? 'text-purple-400' : 'text-gray-500'}`} />
            {step === 2 && (
              <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-75"></div>
            )}
          </div>
          <span className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap transition-opacity ${
            step === 2 ? 'opacity-100 text-purple-400' : 'opacity-50 text-gray-400'
          }`}>
            Automasi Kami
          </span>
        </div>

        {/* 3. ORBITING WORKFLOW STEPS */}
        {workflowSteps.map((item, index) => {
          
          // !! PERUBAHAN 1 DI SINI:
          // Menambahkan offset 45 derajat agar ikon tidak tumpang tindih
          // dengan garis vertikal.
          const baseAngle = (index * 360) / workflowSteps.length;
          const angle = baseAngle + 45; // 45 derajat offset
          // !! BATAS PERUBAHAN 1
          
          const radius = 110; // Radius orbit
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          const isActive = step === 2 && index === activeOrbitIndex;
          const ItemIcon = item.icon;

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 z-0 transition-all duration-500 ease-out"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? 1.2 : 0.9})`,
                opacity: step === 2 ? 1 : 0.3,
              }}
            >
              <div className={`relative p-3 rounded-full border transition-all duration-300 ${
                isActive 
                  ? `${item.color.replace('text-', 'bg-')}/20 ${item.color.replace('text-', 'border-')} ${item.shadow}`
                  : 'bg-gray-800/50 border-gray-700/50'
              }`}>
                <ItemIcon className={`w-5 h-5 transition-colors ${isActive ? item.color : 'text-gray-500'}`} />
              </div>
            </div>
          );
        })}

        {/* 4. OUTPUT NODE (Operasional Lancar) */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 z-10 flex flex-col items-center" 
          style={{ transform: `translateX(-50%) scale(${step === 3 || step === 4 ? 1.1 : 0.9})` }}
        >
          {/* Icon Box */}
          <div className={`relative p-4 rounded-2xl border-2 transition-all duration-500 ${
            step === 3 || step === 4
              ? 'bg-green-500/20 border-green-400 shadow-lg shadow-green-500/50'
              : 'bg-gray-800/50 border-gray-700/50 opacity-50'
          }`}>
            <CheckCircle2 className={`w-8 h-8 ${step === 3 || step === 4 ? 'text-green-400' : 'text-gray-500'}`} />
          </div>
          {/* Teks di bawah icon */}
          <span className={`mt-2 text-xs font-semibold whitespace-nowrap transition-opacity ${ 
            step === 3 || step === 4 ? 'opacity-100 text-green-400' : 'opacity-50 text-gray-400'
          }`}>
            Operasional Efisien
          </span>
        </div>


        {/* Connector Lines */}
        <svg className="absolute inset-0 w-full h-full z-0" fill="none">
          {/* Garis Input -> Hub */}
          <line
            x1="50%"
            y1="88px" 
            x2="50%"
            y2="calc(50% - 48px)" 
            strokeWidth="2.5"
            strokeDasharray="10 10" 
            strokeLinecap="round"
            className="transition-all duration-500"
            style={{
              stroke: step === 1 ? '#60A5FA' : '#4B5563', 
              opacity: (step === 0 || step === 1 || step === 2) ? 0.6 : 0.3,
              animation: step === 1 ? 'flow 1s linear infinite' : 'none',
            }}
          />
          {/* Garis Hub -> Output */}
          <line
            x1="50%"
            y1="calc(50% + 48px)" 
            // !! PERUBAHAN 2 DI SINI:
            // Mengganti x2 kembali ke 50% agar garis lurus vertikal
            x2="50%" // <-- DIPERBAIKI: tadinya 'calc(100% - 88px)'
            y2="calc(100% - 88px)" 
            // !! BATAS PERUBAHAN 2
            strokeWidth="2.5"
            strokeDasharray="10 10"
            strokeLinecap="round"
            className="transition-all duration-500"
            style={{
              stroke: step === 3 ? '#34D399' : '#4B5563', 
              opacity: (step === 2 || step === 3 || step === 4) ? 0.6 : 0.3,
              animation: step === 3 ? 'flow 1s linear infinite' : 'none',
            }}
          />
        </svg>
        
      </div>
    </div>
  );
};

export default WorkflowManagementAnimation;