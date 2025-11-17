import { motion } from "framer-motion";
import { Slack, Database, FileText, Phone, Settings, Mail, Globe, Code } from "lucide-react";

const AnimatedWorkflow = () => {
  const tools = [
    { icon: <Slack size={22} />, x: -185, y: -95 },
    { icon: <Database size={22} />, x: 145, y: -140 },
    { icon: <FileText size={22} />, x: -215, y: 45 },
    { icon: <Phone size={22} />, x: 195, y: -25 },
    { icon: <Settings size={22} />, x: -105, y: 155 },
    { icon: <Mail size={22} />, x: 165, y: 120 },
    { icon: <Globe size={22} />, x: -100, y: -165 },
    { icon: <Code size={22} />, x: 60, y: 175 },
  ];

  // Fungsi untuk membuat path berbelok seperti n8n dengan sudut-sudut
  const createCurvedPath = (x : number, y  : number, index: number) => {
    // Tentukan titik start berdasarkan posisi target (atas/bawah/kiri/kanan)
    let startX = 0;
    let startY = 0;
    
    // Logika menentukan dari sisi mana wire keluar
    const angle = Math.atan2(y, x);
    const absAngle = Math.abs(angle);
    
    if (absAngle < Math.PI / 4) {
      // Kanan
      startX = 80;
      startY = 0;
    } else if (absAngle > (3 * Math.PI) / 4) {
      // Kiri
      startX = -80;
      startY = 0;
    } else if (angle > 0) {
      // Bawah
      startX = 0;
      startY = 48;
    } else {
      // Atas
      startX = 0;
      startY = -48;
    }
    
    // Buat path dengan sudut-sudut seperti n8n
    const horizontalDist = Math.abs(x - startX) * 0.4;
    const bendRadius = 12; // Radius untuk sudut melengkung
    
    // Untuk horizontal start (kiri/kanan)
    if (absAngle < Math.PI / 4 || absAngle > (3 * Math.PI) / 4) {
      const midX = startX + (x > startX ? horizontalDist : -horizontalDist);
      
      // Path dengan sudut rounded
      if (Math.abs(y - startY) > bendRadius * 2) {
        return `M ${startX} ${startY} 
                L ${midX - (x > startX ? bendRadius : -bendRadius)} ${startY}
                Q ${midX} ${startY}, ${midX} ${startY + (y > startY ? bendRadius : -bendRadius)}
                L ${midX} ${y - (y > startY ? bendRadius : -bendRadius)}
                Q ${midX} ${y}, ${midX + (x > midX ? bendRadius : -bendRadius)} ${y}
                L ${x} ${y}`;
      } else {
        return `M ${startX} ${startY} 
                L ${midX} ${startY}
                L ${midX} ${y}
                L ${x} ${y}`;
      }
    } 
    // Untuk vertical start (atas/bawah)
    else {
      const midY = startY + (y > startY ? horizontalDist : -horizontalDist);
      
      if (Math.abs(x - startX) > bendRadius * 2) {
        return `M ${startX} ${startY} 
                L ${startX} ${midY - (y > startY ? bendRadius : -bendRadius)}
                Q ${startX} ${midY}, ${startX + (x > startX ? bendRadius : -bendRadius)} ${midY}
                L ${x - (x > startX ? bendRadius : -bendRadius)} ${midY}
                Q ${x} ${midY}, ${x} ${midY + (y > midY ? bendRadius : -bendRadius)}
                L ${x} ${y}`;
      } else {
        return `M ${startX} ${startY} 
                L ${startX} ${midY}
                L ${x} ${midY}
                L ${x} ${y}`;
      }
    }
  };

  return (
    <div className="relative w-[450px] h-[450px] flex items-center justify-center">
      {/* TALKVERA CORE NODE - PERSEGI PANJANG */}
      <motion.div
        className="absolute w-36 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-lg font-semibold shadow-2xl shadow-blue-500/30 z-10"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        Talkvera
      </motion.div>

      {/* CURVED PATHS + TOOLS */}
      {tools.map((t, i) => (
        <div key={i} className="absolute top-1/2 left-1/2">
          {/* SVG untuk curved path */}
          <svg 
            className="absolute overflow-visible pointer-events-none" 
            style={{ 
              width: 500, 
              height: 500, 
              left: -250, 
              top: -250 
            }}
          >
            <defs>
              <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#7b8eedff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              
              <filter id={`glow-${i}`}>
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Background glow line */}
            <motion.path
              d={createCurvedPath(t.x, t.y, i)}
              fill="none"
              stroke={`url(#grad-${i})`}
              strokeWidth="4"
              strokeOpacity="0.2"
              strokeLinecap="round"
              transform="translate(250, 250)"
              filter={`url(#glow-${i})`}
            />
            
            {/* Main animated line */}
            <motion.path
              d={createCurvedPath(t.x, t.y, i)}
              fill="none"
              stroke={`url(#grad-${i})`}
              strokeWidth="2.5"
              strokeOpacity="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(250, 250)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ 
                pathLength: { duration: 2, delay: i * 0.15 },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Flowing dot animation (Perbaikan dimulai di sini) */}
            <motion.circle
              r="3"
              fill="#60a5fa"
              filter={`url(#glow-${i})`}
              
              // Hapus prop 'initial' yang menyebabkan warning
              
              animate={{ 
                // Animasikan offsetDistance sebagai properti CSS
                offsetDistance: ["0%", "100%"],
                opacity: [0, 1, 1, 0]
              }}
              
              transition={{
                offsetDistance: {
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "linear" // Lebih baik menggunakan linear untuk pergerakan path
                },
                opacity: {
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
              }}
              
              style={{
                // Tetapkan nilai awal CSS dan properti path
                offsetPath: `path('${createCurvedPath(t.x, t.y, i)}')`,
                transform: "translate(250px, 250px)",
                offsetDistance: "0%", // Nilai awal (initial) untuk dianimasikan
              }}
            />
          </svg>

          {/* TOOLS NODE */}
          <motion.div
            className="absolute w-16 h-16 flex items-center justify-center 
                       bg-gray-900/70 backdrop-blur-md border border-gray-700 
                       rounded-xl shadow-lg text-blue-400"
            style={{ 
              left: t.x - 32,
              top: t.y - 32
            }}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.2 }}
          >
            {t.icon}

            {/* Pulse ring */}
            <motion.span
              className="absolute w-full h-full rounded-xl border border-blue-400/30"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.2 }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedWorkflow;