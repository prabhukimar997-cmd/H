import { motion } from 'motion/react';
import { Mail, MessageSquare, ShieldAlert, Smartphone } from 'lucide-react';

export default function ImagePhone3DGraphic() {
  return (
    <div className="w-full max-w-[480px] h-[480px] flex items-center justify-center relative select-none overflow-visible">
      
      {/* Container holding the Phone & Bubbles together */}
      <div className="relative w-full h-full flex items-center justify-center">

        {/* 1. THE PHONE WRAPPER with Fast 360 Horizontal Spin on Loop / Trigger */}
        <motion.div
          className="w-[230px] h-[380px] bg-slate-950 rounded-[38px] p-2 border-[1.5px] border-slate-900 shadow-2xl relative flex flex-col justify-between overflow-hidden z-20"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            rotateY: [0, 360], // Fast 360 degree rotation on loop
          }}
          transition={{
            duration: 3.0, // Fast 360 degree spin
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.5
          }}
        >
          {/* Speaker / Notch */}
          <div className="w-20 h-3 bg-slate-900 rounded-full mx-auto mb-1 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
          </div>

          {/* Core App Display inside Phone */}
          <div className="flex-1 bg-white rounded-[32px] p-4 flex flex-col justify-between border border-slate-100 relative">
            
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-radial-gradient(from 50% 50%, #f0f9ff 0%, #ffffff 100%) opacity-80 pointer-events-none rounded-[32px]" />

            {/* Header text */}
            <div className="text-center relative z-10 mt-1">
              <h4 className="font-sans font-extrabold text-[12px] text-zinc-900 tracking-tight">
                OTP Verification
              </h4>
            </div>

            {/* Shield Center Icon block (replicates the uploaded sketch) */}
            <div className="flex flex-col items-center justify-center my-2 relative z-10">
              <motion.div
                className="w-16 h-16 bg-blue-50/70 rounded-full flex items-center justify-center border border-blue-100 shadow-inner"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </motion.div>
              <p className="text-[9px] font-semibold text-zinc-500 text-center max-w-[130px] mt-2 leading-tight">
                We've sent you an OTP on your Connected channels.
              </p>
            </div>

            {/* OTP Inputs Boxes representation */}
            <div className="space-y-3 relative z-10">
              <div className="text-center">
                <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest block">
                  Enter OTP here
                </span>
                <div className="flex justify-center gap-2 mt-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="w-6.5 h-8 bg-slate-50 border border-slate-200 rounded-md flex items-center justify-center text-[11px] font-black text-blue-600 font-mono"
                      animate={{
                        borderColor: i === 3 ? ['#e2e8f0', '#3b82f6', '#e2e8f0'] : '#e2e8f0',
                        scale: i === 3 ? [1, 1.1, 1] : 1
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    >
                      *
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Resend Link and Verify CTA Button */}
              <div className="space-y-1.5 text-center">
                <span className="text-[7.5px] text-zinc-400 block font-semibold">
                  Didn't receive OTP? <span className="text-blue-600 font-extrabold cursor-pointer hover:underline">Resend</span>
                </span>
                
                <motion.div
                  className="w-full bg-blue-600 text-white font-extrabold text-[9px] py-2 rounded-md text-center shadow-md select-none"
                  whileHover={{ scale: 1.02 }}
                >
                  Verify
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. DYNAMIC FLOATING MESSAGE SPEECH BUBBLES popping up sequentially one by one */}
        {/* We animate these in a continuous sequence with precise delay offsets */}

        {/* Bubble 1: Top Right Orange Mail Bubble (replicates sketch perfectly) */}
        <motion.div
          className="absolute top-[20px] right-2 md:right-[-20px] bg-amber-50/95 border border-amber-200 shadow-xl rounded-[18px] p-2.5 flex items-start gap-2 max-w-[150px] z-30 pointer-events-none"
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.7, 1, 1, 0.7],
            y: [15, 0, 0, -10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 0,
            times: [0, 0.15, 0.85, 1],
            ease: "easeInOut",
          }}
        >
          <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0 mt-0.5">
            <span className="text-[10px] font-black leading-none">✉</span>
          </div>
          <div className="flex-1">
            <span className="text-[8px] font-mono text-amber-500 font-bold block mb-0.5 uppercase tracking-wide">Gmail Channel</span>
            <p className="text-[8.5px] font-semibold text-zinc-800 leading-snug">
              Hello, Your one-time password is <strong className="text-amber-600">2345</strong>.
            </p>
          </div>
        </motion.div>

        {/* Bubble 2: Left Top Blue Message Bubble */}
        <motion.div
          className="absolute top-[80px] left-[-15px] md:left-[-55px] bg-blue-50/95 border border-blue-200 shadow-xl rounded-[18px] p-2.5 flex items-start gap-2 max-w-[150px] z-30 pointer-events-none"
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.7, 1, 1, 0.7],
            y: [15, 0, 0, -10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 1.5,
            times: [0, 0.15, 0.85, 1],
            ease: "easeInOut",
          }}
        >
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 mt-0.5">
            <span className="text-[10px] font-black leading-none">💬</span>
          </div>
          <div className="flex-1">
            <span className="text-[8px] font-mono text-blue-500 font-bold block mb-0.5 uppercase tracking-wide">SMS Gateway</span>
            <p className="text-[8.5px] font-semibold text-zinc-800 leading-snug">
              Hello, Your one-time password is <strong className="text-blue-600">2345</strong>.
            </p>
          </div>
        </motion.div>

        {/* Bubble 3: Left Bottom Green WhatsApp Bubble */}
        <motion.div
          className="absolute bottom-[40px] left-[-10px] md:left-[-45px] bg-emerald-50/95 border border-emerald-200 shadow-xl rounded-[18px] p-2.5 flex items-start gap-2 max-w-[150px] z-30 pointer-events-none"
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.7, 1, 1, 0.7],
            y: [15, 0, 0, -10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 3.2,
            times: [0, 0.15, 0.85, 1],
            ease: "easeInOut",
          }}
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mt-0.5">
            <span className="text-[9px] font-black leading-none">✆</span>
          </div>
          <div className="flex-1">
            <span className="text-[8px] font-mono text-emerald-500 font-bold block mb-0.5 uppercase tracking-wide">WhatsApp</span>
            <p className="text-[8.5px] font-semibold text-zinc-800 leading-snug">
              Hello, Your one-time password is <strong className="text-emerald-600">2345</strong>.
            </p>
          </div>
        </motion.div>

        {/* Bubble 4: Right Bottom Royal Blue Bubble */}
        <motion.div
          className="absolute bottom-[90px] right-[-10px] md:right-[-45px] bg-slate-50/95 border border-slate-200 shadow-xl rounded-[18px] p-2.5 flex items-start gap-2 max-w-[150px] z-30 pointer-events-none"
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.7, 1, 1, 0.7],
            y: [15, 0, 0, -10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 4.8,
            times: [0, 0.15, 0.85, 1],
            ease: "easeInOut",
          }}
        >
          <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0 mt-0.5">
            <span className="text-[9px] font-black leading-none">✉</span>
          </div>
          <div className="flex-1">
            <span className="text-[8px] font-mono text-indigo-500 font-bold block mb-0.5 uppercase tracking-wide">Backup Route</span>
            <p className="text-[8.5px] font-semibold text-zinc-800 leading-snug">
              Hello, Your one-time password is <strong className="text-indigo-600">2345</strong>.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
