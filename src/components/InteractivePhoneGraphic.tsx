import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, Check, Sparkles } from 'lucide-react';

export default function InteractivePhoneGraphic() {
  const [animationStep, setAnimationStep] = useState<
    'init' | 'rotate360' | 'typing' | 'clicking' | 'verified'
  >('rotate360');
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shaking, setShaking] = useState(false);

  // Full continuous loop coordinator
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const startSequence = () => {
      // Step 1: 3D Rotation
      setAnimationStep('rotate360');
      setPhoneNumber('');
      
      // After 3D rotation completes, trigger Typing sequence
      timer = setTimeout(() => {
        setAnimationStep('typing');
        
        // Simulate progressive digit typing inside the mock input box
        const targetNumber = '+91 91024 ' + Math.floor(1000 + Math.random() * 9000);
        let currentString = '';
        let charIndex = 0;
        
        const typeInterval = setInterval(() => {
          if (charIndex < targetNumber.length) {
            currentString += targetNumber[charIndex];
            setPhoneNumber(currentString);
            charIndex++;
          } else {
            clearInterval(typeInterval);
            
            // Move to pointing/clicking hand gesture phase after text complete
            setTimeout(() => {
              setAnimationStep('clicking');
              
              // Simulate click event 1 second after hand positions itself
              setTimeout(() => {
                setShaking(true);
                setTimeout(() => setShaking(false), 200);
                setAnimationStep('verified');
                
                // Show verified state for 4.5 seconds before starting loop again
                setTimeout(() => {
                  startSequence();
                }, 4000);
              }, 1200);
              
            }, 600);
          }
        }, 80); // speed of typing
        
      }, 2200); // Wait for phone spin to settle (3D transition is 2s)
    };

    startSequence();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] md:h-[585px] flex items-center justify-center overflow-visible select-none py-4">
      
      {/* Absolute pricing labels with high engagement glow floaters floating next to the phone graphic */}
      <div className="absolute top-10 left-[-15px] md:top-14 md:left-2 z-30 pointer-events-none">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-white/95 border-2 border-emerald-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-3 px-4 flex items-center gap-2.5 backdrop-blur-sm"
        >
          <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-extrabold border border-emerald-200">
            WA
          </div>
          <div>
            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase leading-none">WhatsApp OTP</p>
            <p className="text-xl font-bold text-emerald-600 mt-1">₹0.30<span className="text-xs font-semibold text-zinc-400">/api</span></p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-16 right-[-15px] md:bottom-24 md:right-2 z-30 pointer-events-none">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="bg-white/95 border-2 border-indigo-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-3 px-4 flex items-center gap-2.5 backdrop-blur-sm"
        >
          <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 font-extrabold border border-indigo-200">
            GM
          </div>
          <div>
            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase leading-none">Gmail Secure OTP</p>
            <p className="text-xl font-bold text-indigo-600 mt-1">₹0.10<span className="text-xs font-semibold text-zinc-400">/api</span></p>
          </div>
        </motion.div>
      </div>

      {/* Radial ambient lighting in the background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[360px] h-[360px] bg-indigo-400/10 rounded-full blur-[90px] animate-pulse" />
        <div className="w-[200px] h-[200px] bg-blue-300/15 rounded-full blur-[60px]" />
      </div>

      {/* Interactive 3D Phone Chassis Wrapper */}
      <motion.div
        className="relative w-[280px] h-[550px] bg-[#020617] rounded-[48px] p-3 border-4 border-zinc-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] flex flex-col items-center justify-start overflow-visible cursor-pointer group"
        style={{ perspective: 1200 }}
        animate={
          animationStep === 'rotate360'
            ? {
                rotateY: [0, 360],
                rotateZ: [0, 2, -2, 0],
                scale: [0.93, 1, 1],
              }
            : shaking
            ? { x: [0, -8, 8, -6, 6, 0], scale: 1 }
            : { rotateY: 0, rotateZ: 0, scale: 1 }
        }
        transition={
          animationStep === 'rotate360'
            ? { duration: 2.2, ease: 'easeInOut' }
            : { duration: 0.25 }
        }
      >
        {/* Mirror High-gloss side details */}
        <div className="absolute -left-1.5 top-28 w-[3px] h-12 bg-zinc-650 rounded-r-md" />
        <div className="absolute -left-1.5 top-44 w-[3px] h-16 bg-zinc-650 rounded-r-md" />
        <div className="absolute -left-1.5 top-64 w-[3px] h-16 bg-zinc-650 rounded-r-md" />
        <div className="absolute -right-1.5 top-44 w-[3px] h-20 bg-zinc-650 rounded-l-md" />

        {/* Shiny absolute cover element mimicking natural phone bezel glass */}
        <div className="absolute inset-2 top-2 bottom-2 bg-gradient-to-tr from-white/0 via-white/4 to-white/0 rounded-[38px] z-20 pointer-events-none" />

        {/* Mock Screen face */}
        <div className="relative w-full h-full bg-white rounded-[38px] overflow-hidden flex flex-col justify-between pt-7 pb-6 px-5 border border-zinc-200">
          
          {/* Dynamic Island Notch top detail */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-[18px] bg-black rounded-full z-30 flex items-center justify-between px-3">
            <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />
            <span className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse" />
          </div>

          {/* Screen Top Status bar */}
          <div className="flex items-center justify-between text-zinc-950 font-mono text-[9px] font-bold tracking-tight select-none mt-1 z-10 px-1">
            <span>19:30</span>
            <div className="flex items-center gap-1">
              {/* Cellular signal shape */}
              <svg className="w-3.5 h-2" viewBox="0 0 14 8">
                <rect x="0" y="6" width="2" height="2" rx="0.5" fill="#0f172a" />
                <rect x="3" y="4" width="2" height="4" rx="0.5" fill="#0f172a" />
                <rect x="6" y="2" width="2" height="6" rx="0.5" fill="#0f172a" />
                <rect x="9" y="0" width="2" height="8" rx="0.5" fill="#0f172a" />
              </svg>
              {/* Wifi Shape */}
              <svg className="w-3 h-3 text-zinc-950" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.187 0-2.302.318-3.264.87-.285.166-.324.545-.1.75l.193.194a.5.5 0 0 0 .717-.008A5.465 5.465 0 0 1 8 10c1.007 0 1.95.273 2.757.75a.5.5 0 0 0 .717.008l.193-.194zM8 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
              </svg>
              {/* Battery */}
              <div className="w-5 h-2.5 border border-zinc-950 rounded-[3px] p-0.5 flex items-center">
                <div className="w-3.5 h-full bg-zinc-950 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Dynamic Content Switching with motion transitions */}
          <div className="flex-1 mt-10 flex flex-col items-center justify-between">
            <AnimatePresence mode="wait">
              {animationStep !== 'verified' ? (
                <motion.div
                  key="phone-verification-form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="w-full flex-1 flex flex-col justify-between"
                >
                  <div className="flex flex-col items-center text-center space-y-5">
                    {/* Top Shield Icon within soft blue highlight orbit */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                      className="w-24 h-24 bg-blue-50 hover:bg-blue-100 rounded-full flex items-center justify-center shadow-inner relative overflow-visible border border-blue-50"
                    >
                      <Shield className="w-12 h-12 text-blue-500 fill-blue-50/20" />
                      <Lock className="w-5 h-5 text-blue-600 absolute bottom-6 right-6 bg-white rounded-full p-1 border border-blue-100 shadow-sm" />
                    </motion.div>

                    {/* Headline and text */}
                    <div>
                      <h3 className="font-sans font-black text-[19px] text-zinc-950 tracking-tight leading-none uppercase">
                        OTP Verification
                      </h3>
                      <p className="font-sans text-[10px] text-zinc-400 mt-2 font-semibold max-w-[190px] mx-auto leading-normal">
                        We will send you a One Time Password on this mobile number
                      </p>
                    </div>
                  </div>

                  {/* Input and interactive field section */}
                  <div className="space-y-4 my-auto">
                    <div className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl p-3.5 flex items-center justify-start gap-2 shadow-sm">
                      <div className="flex items-center gap-1 pr-2 border-r border-zinc-200">
                        {/* Indian Flag indicator */}
                        <div className="flex flex-col w-4 h-3 rounded-[1px] overflow-hidden border border-zinc-200">
                          <div className="bg-orange-400 h-1/3 w-full" />
                          <div className="bg-white h-1/3 w-full flex items-center justify-center">
                            <span className="w-0.5 h-0.5 bg-blue-900 rounded-full" />
                          </div>
                          <div className="bg-emerald-600 h-1/3 w-full" />
                        </div>
                        <span className="text-xs font-bold text-zinc-900">+91</span>
                      </div>
                      
                      <div className="flex-1 font-mono text-sm font-bold text-zinc-950 tracking-wide text-left overflow-hidden min-h-[20px] flex items-center">
                        {phoneNumber || (
                          <span className="text-zinc-300 font-sans font-medium text-xs">Enter phone number</span>
                        )}
                        {animationStep === 'typing' && (
                          <span className="w-1 h-4 bg-indigo-600 ml-0.5 animate-pulse inline-block" />
                        )}
                      </div>
                    </div>

                    {/* Verify Number interactive Button (this receives simulated clicks) */}
                    <div className="relative">
                      <motion.button
                        type="button"
                        animate={
                          animationStep === 'clicking'
                            ? { scale: [1, 0.95, 1], backgroundColor: ['#3b82f6', '#1d4ed8', '#3b82f6'] }
                            : { scale: 1 }
                        }
                        transition={{ duration: 0.4, delay: 0.8 }}
                        className="w-full bg-blue-500 text-white font-extrabold text-[12.5px] py-4 rounded-2xl flex items-center justify-center gap-1.5 shadow-md border-b-2 border-blue-600 pointer-events-none"
                      >
                        Verify Number
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="phone-verified-layout"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="w-full flex-1 flex flex-col justify-between"
                >
                  <div className="flex flex-col items-center justify-center text-center space-y-6 my-auto">
                    {/* Glowing Check animation */}
                    <motion.div
                      initial={{ scale: 0.3, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 shadow-sm relative"
                    >
                      <div className="absolute inset-0 bg-emerald-200/20 rounded-full animate-ping" />
                      <Check className="w-11 h-11 text-emerald-600 stroke-[3.5]" />
                    </motion.div>

                    <div>
                      <h4 className="font-sans font-black text-xl text-emerald-600 tracking-tight leading-tight uppercase">
                        Number Verified
                      </h4>
                      <p className="font-sans text-[11px] text-zinc-500 mt-2 font-semibold max-w-[200px] leading-relaxed mx-auto">
                        Your phone number is verified through invisible OTP.
                      </p>
                    </div>

                    {/* Integration Successful popup indicators */}
                    <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3 inline-flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500 fill-amber-50/20 animate-spin" />
                      <span className="font-mono text-[9px] font-black text-zinc-600 uppercase tracking-widest">
                        SECURE TOKEN ISSUED
                      </span>
                    </div>
                  </div>

                  {/* Reset loading status */}
                  <div className="text-zinc-300 text-[10px] font-mono font-bold tracking-widest uppercase text-center mt-5">
                    re-loading simulator...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Screen Bottom indicator stick */}
          <div className="w-28 h-1 bg-zinc-300 rounded-full mx-auto mt-2 z-10" />
        </div>

        {/* Hand pointer cursor overlay (Appears visually to click the button) */}
        {animationStep === 'clicking' && (
          <motion.div
            initial={{ scale: 1.2, x: 120, y: 460, opacity: 0 }}
            animate={{
              x: [110, 0, 0, 110],
              y: [420, 265, 265, 420], // points down onto input then down onto verify button
              opacity: [0, 1, 1, 0],
              scale: [1.2, 1, 0.9, 1.2],
            }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute z-50 pointer-events-none"
          >
            {/* Elegant 3D SVG cursor hand model */}
            <svg
              className="w-12 h-12 text-zinc-950 drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.5 10c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v2.85c-.93-.41-1.92-.35-2.77.16l-1.07.64 4.54 4.54c.71.71 1.67 1.11 2.67 1.11h4.63c1.64 0 2.97-1.33 2.97-2.97V13.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v-.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v-.5c0-.83-.67-1.5-1.5-1.5zM11 2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1-1-1z" />
            </svg>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
