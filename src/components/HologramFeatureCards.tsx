import { motion } from 'motion/react';
import { 
  WhatsAppZeroApprovalGraphic, 
  GmailDeliveryGraphic, 
  WhatsAppRoutingGraphic, 
  DashboardRealtimeGraphic 
} from './ServiceGraphics';

export default function HologramFeatureCards({ setConsoleOpen }: { setConsoleOpen: (open: boolean) => void }) {
  const scrollPlayground = () => {
    setConsoleOpen(true);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const loopDuration = 6.0; // Perfect duration for clear, powerful pacing

  // Card 1 Animation Cycle Definitions
  const card1Animate = {
    x: [
      -150, // 0%: Start offscreen left
      0,    // 7%: Arrive home
      0,    // 24%: Stay home
      230,  // 29%: Move to center of cluster
      380,  // 33.6%: Orbit step 1 (Rightmost outer)
      230,  // 38.1%: Orbit step 2 (Rear)
      80,   // 42.7%: Orbit step 3 (Leftmost inner)
      230,  // 47.3%: Orbit step 4 (Completed 360)
      0,    // 51%: Return home
      0,    // 92%: Stay home
      -100  // 100%: Fade out prep
    ],
    z: [
      -50, 0, 0, 0, -120, 0, 120, 0, 0, 0, -50
    ],
    scale: [
      0.82, 1, 1, 1.05, 0.85, 1.05, 1.15, 1.05, 1, 1, 0.82
    ],
    rotateY: [
      0, 0, 0, 0, 90, 180, 270, 360, 0, 0, 0
    ],
    opacity: [
      0, 1, 1, 1, 0.85, 0.95, 1, 0.95, 1, 1, 0
    ],
    y: [
      15, 0, 0, -10, 0, -10, 10, -10, 0, 0, 15
    ]
  };

  // Card 2 Animation Cycle Definitions
  const card2Animate = {
    x: [
      -150, // 0%: Hidden init
      -150, // 6%: Hold hidden
      0,    // 13%: Arrive home
      0,    // 24%: Stay home
      220,  // 29%: Move to center structure
      70,   // 33.6%: Orbit step 1
      -80,  // 38.1%: Orbit step 2
      70,   // 42.7%: Orbit step 3
      220,  // 47.3%: Orbit step 4
      0,    // 51%: Return home
      0,    // 92%: Stay home
      -100  // 100%: Fade out
    ],
    z: [
      -50, -50, 0, 0, -120, 0, 120, 0, -120, 0, 0, -50
    ],
    scale: [
      0.82, 0.82, 1, 1, 0.85, 1.05, 1.15, 1.05, 0.85, 1, 1, 0.82
    ],
    rotateY: [
      0, 0, 0, 0, 90, 180, 270, 360, 450, 0, 0, 0
    ],
    opacity: [
      0, 0, 1, 1, 0.85, 1, 1, 1, 0.85, 1, 1, 0
    ],
    y: [
      15, 15, 0, 0, -10, 0, 10, 0, -10, 0, 0, 15
    ]
  };

  // Card 3 Animation Cycle Definitions
  const card3Animate = {
    x: [
      -150, // 0%: Hidden init
      -150, // 12%: Hold hidden
      0,    // 19%: Arrive home
      0,    // 24%: Stay home
      -70,  // 29%: Move to center structure
      -220, // 33.6%: Orbit step 1
      -70,  // 38.1%: Orbit step 2
      80,   // 42.7%: Orbit step 3
      -70,  // 47.3%: Orbit step 4
      0,    // 51%: Return home
      0,    // 92%: Stay home
      -100  // 100%: Fade out
    ],
    z: [
      -50, -50, 0, 0, 0, 120, 0, -120, 0, 0, 0, -50
    ],
    scale: [
      0.82, 0.82, 1, 1, 1.05, 1.15, 1.05, 0.85, 1.05, 1, 1, 0.82
    ],
    rotateY: [
      0, 0, 0, 0, 180, 270, 360, 450, 540, 0, 0, 0
    ],
    opacity: [
      0, 0, 1, 1, 1, 1, 1, 0.85, 1, 1, 1, 0
    ],
    y: [
      15, 15, 0, 0, -10, 10, -10, 0, -10, 0, 0, 15
    ]
  };

  // Card 4 Animation Cycle Definitions
  const card4Animate = {
    x: [
      -150, // 0%: Hidden init
      -150, // 18%: Hold hidden
      0,    // 25%: Arrive home
      0,    // 26%: Wait 0.1s at home position
      -380, // 29%: Move to center structure
      -230, // 33.6%: Orbit step 1
      -80,  // 38.1%: Orbit step 2
      -230, // 42.7%: Orbit step 3
      -380, // 47.3%: Orbit step 4
      0,    // 51%: Return home
      0,    // 92%: Stay home
      -100  // 100%: Fade out
    ],
    z: [
      -50, -50, 0, 0, 120, 0, -120, 0, 120, 0, 0, -50
    ],
    scale: [
      0.82, 0.82, 1, 1, 1.15, 1.05, 0.85, 1.05, 1.15, 1, 1, 0.82
    ],
    rotateY: [
      0, 0, 0, 0, 270, 360, 450, 540, 630, 0, 0, 0
    ],
    opacity: [
      0, 0, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 0
    ],
    y: [
      15, 15, 0, 0, 10, -10, 0, -10, 10, 0, 0, 15
    ]
  };

  const transitConfig = {
    duration: loopDuration,
    repeat: Infinity,
    ease: "easeInOut",
    times: [
      0,      // 0%: Start
      0.07,   // Arrival 1
      0.13,   // Arrival 2
      0.19,   // Arrival 3
      0.25,   // Arrival 4 / 25%: Wait 0.1s
      0.29,   // Cluster step
      0.336,  // Orbit 1st quadrant
      0.381,  // Orbit 2nd quadrant
      0.427,  // Orbit 3rd quadrant
      0.473,  // Orbit completed
      0.51,   // Explode return home
      0.92,   // Settle
      1.0     // Outro / Reset loop
    ]
  };

  return (
    <div className="relative w-full overflow-visible py-8 rounded-[36px]">
      
      {/* 3D PERSPECTIVE PORT STAGE WRAPPER */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
      >
        
        {/* Hologram Matrix Scanning Ring Background Overlay (Active during rotation phase) */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-0"
          animate={{
            opacity: [0, 0, 0.8, 0.8, 0, 0],
            scale: [0.7, 0.7, 1.1, 1.1, 0.7, 0.7],
            rotate: [0, 0, 180, 180, 0, 0]
          }}
          transition={{
            duration: loopDuration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.29, 0.473, 0.51, 1.0]
          }}
        >
          {/* Neon rotating scan ring representing easy top authentication gateway */}
          <div className="w-[500px] h-[550px] border-2 border-dashed border-cyan-500/20 rounded-full flex items-center justify-center relative">
            <div className="w-[420px] h-[470px] border border-dotted border-indigo-500/35 rounded-full animate-ping" />
            
            {/* Hologram matrix data particles */}
            <div className="absolute top-[10%] left-[20%] w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] animate-pulse" />
            <div className="absolute bottom-[10%] right-[20%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399] animate-pulse" />
          </div>
        </motion.div>

        {/* Card 1: Zero Approval Time */}
        <motion.div
          animate={{
            x: card1Animate.x,
            z: card1Animate.z,
            scale: card1Animate.scale,
            rotateY: card1Animate.rotateY,
            opacity: card1Animate.opacity,
            y: card1Animate.y
          }}
          transition={transitConfig}
          style={{ transformStyle: 'preserve-3d' }}
          className="group bg-slate-900/65 border border-zinc-800/80 hover:border-emerald-500/40 rounded-3xl p-5 shadow-inner hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col justify-between h-[395px] relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          <div>
            <WhatsAppZeroApprovalGraphic />
            <div className="mt-3">
              <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-mono font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>INSTANT API DEPLOY</span>
              </div>
              <h3 className="font-sans font-black text-lg text-white tracking-tight mt-1">
                Zero Approval Time
              </h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed mt-1.5">
                Sign in with your phone number, get your API key, and push to production instantly. We never ask for your PAN card or business registration.
              </p>
            </div>
          </div>
          
          <button
            onClick={scrollPlayground}
            className="w-full mt-4 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[11px] rounded-xl cursor-pointer hover:underline text-center shadow-lg transition-all flashy-btn uppercase tracking-widest z-10"
          >
            get started for free
          </button>
        </motion.div>

        {/* Card 2: Gmail Delivery */}
        <motion.div
          animate={{
            x: card2Animate.x,
            z: card2Animate.z,
            scale: card2Animate.scale,
            rotateY: card2Animate.rotateY,
            opacity: card2Animate.opacity,
            y: card2Animate.y
          }}
          transition={transitConfig}
          style={{ transformStyle: 'preserve-3d' }}
          className="group bg-slate-900/65 border border-zinc-800/80 hover:border-red-500/40 rounded-3xl p-5 shadow-inner hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] flex flex-col justify-between h-[395px] relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
          <div>
            <GmailDeliveryGraphic />
            <div className="mt-3">
              <div className="flex items-center gap-1.5 text-rose-400 text-[10px] font-mono font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>GMAIL SECURE TUNNEL (₹0.10)</span>
              </div>
              <h3 className="font-sans font-black text-lg text-white tracking-tight mt-1">
                Gmail Delivery
              </h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed mt-1.5">
                High-deliverability email OTPs routed directly to the primary inbox. Fixed at ₹0.10 per email with 99.9% uptime SLA and smart auto-retries.
              </p>
            </div>
          </div>
          
          <button
            onClick={scrollPlayground}
            className="w-full mt-4 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-[11px] rounded-xl cursor-pointer text-center shadow-lg transition-all flashy-btn uppercase tracking-widest z-10"
          >
            get started for free
          </button>
        </motion.div>

        {/* Card 3: WhatsApp Routing */}
        <motion.div
          animate={{
            x: card3Animate.x,
            z: card3Animate.z,
            scale: card3Animate.scale,
            rotateY: card3Animate.rotateY,
            opacity: card3Animate.opacity,
            y: card3Animate.y
          }}
          transition={transitConfig}
          style={{ transformStyle: 'preserve-3d' }}
          className="group bg-slate-900/65 border border-zinc-800/80 hover:border-teal-500/40 rounded-3xl p-5 shadow-inner hover:shadow-[0_0_20px_rgba(20,184,166,0.15)] flex flex-col justify-between h-[395px] relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
          <div>
            <WhatsAppRoutingGraphic />
            <div className="mt-3">
              <div className="flex items-center gap-1.5 text-teal-400 text-[10px] font-mono font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span>WHATSAPP OFFICIAL (₹0.30)</span>
              </div>
              <h3 className="font-sans font-black text-lg text-white tracking-tight mt-1">
                WhatsApp Routing
              </h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed mt-1.5">
                Built on the official WhatsApp Business API. 98% open rate with sub-3-second latency. Fixed at ₹0.30 per message.
              </p>
            </div>
          </div>
          
          <button
            onClick={scrollPlayground}
            className="w-full mt-4 py-3 px-4 bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-[11px] rounded-xl cursor-pointer text-center shadow-lg transition-all flashy-btn uppercase tracking-widest z-10"
          >
            get started for free
          </button>
        </motion.div>

        {/* Card 4: Clean Dashboard */}
        <motion.div
          animate={{
            x: card4Animate.x,
            z: card4Animate.z,
            scale: card4Animate.scale,
            rotateY: card4Animate.rotateY,
            opacity: card4Animate.opacity,
            y: card4Animate.y
          }}
          transition={transitConfig}
          style={{ transformStyle: 'preserve-3d' }}
          className="group bg-slate-900/65 border border-zinc-800/80 hover:border-cyan-500/50 rounded-3xl p-5 shadow-inner hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col justify-between h-[395px] relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
          <div>
            <DashboardRealtimeGraphic />
            <div className="mt-3">
              <div className="flex items-center gap-1.5 text-cyan-400 text-[10px] font-mono font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>INSTANT UPI TOPUPS</span>
              </div>
              <h3 className="font-sans font-black text-lg text-white tracking-tight mt-1">
                Clean Dashboard
              </h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed mt-1.5">
                Track delivery rates, failures, and latency in real-time. Top-up credits instantly using UPI without ever talking to sales.
              </p>
            </div>
          </div>
          
          <button
            onClick={scrollPlayground}
            className="w-full mt-4 py-3 px-4 bg-cyan-600 hover:bg-cyan-500 text-white font-extrabold text-[11px] rounded-xl cursor-pointer text-center shadow-lg transition-all flashy-btn uppercase tracking-widest z-10"
          >
            get started for free
          </button>
        </motion.div>

      </div>
    </div>
  );
}
