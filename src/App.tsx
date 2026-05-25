import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Mail, MessageSquare, Smartphone, Zap, Code, ShieldCheck, HelpCircle } from 'lucide-react';
import HologramFeatureCards from './components/HologramFeatureCards';
import { DeveloperAvatar, ManagerAvatar, FemaleSupportAvatar } from './components/TeamAvatars';
import APIPlayground from './components/APIPlayground';
import DeveloperConsole from './components/DeveloperConsole';
import InteractivePhoneGraphic from './components/InteractivePhoneGraphic';
import ImagePhone3DGraphic from './components/ImagePhone3DGraphic';
import FastReviewTicker from './components/FastReviewTicker';

export default function App() {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [activePlaygroundChannel, setActivePlaygroundChannel] = useState<'whatsapp' | 'gmail' | 'sms'>('whatsapp');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="halftone-theme-bg text-zinc-900 selection:bg-indigo-100 selection:text-indigo-900 min-h-screen relative overflow-x-hidden transition-colors duration-500">
      
      {/* Absolute halftone grid background from Image 3 */}
      <div className="diamond-halftone-grid" />

      {/* Sleek top glowing accents (mirroring Image 1 lighting style mapped on dotted white canvas) */}
      <div className="absolute top-0 left-12 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-24 right-12 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* ================= HEADER SECTION (IMAGE 1 LAYOUT) ================= */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between sticky top-0 bg-white/40 backdrop-blur-md z-40 border-b border-zinc-100/50">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { setConsoleOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          {/* Futuristic geometric key logo mimicking apex symbol but tailored to Easy Top */}
          <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center text-white border border-zinc-800 shadow-sm relative overflow-hidden transition-transform group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/10 opacity-50" />
            <Lock className="w-4.5 h-4.5" id="header-logo-lock" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-black text-lg tracking-tight text-zinc-950 relative uppercase leading-none">
              easy top
            </span>
            <span className="text-[10px] font-mono tracking-wider font-bold text-indigo-600 mt-0.5 leading-none">
              OTP RELAY
            </span>
          </div>
        </div>

        {/* Navigation Links (Exactly mirroring Image 1 tabs + customized elegantly for OTP) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-zinc-600">
          <button onClick={() => { setConsoleOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-zinc-950 cursor-pointer relative py-1 focus:outline-none transition-colors">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 rounded-full" />
          </button>
          <button onClick={() => scrollToSection('services')} className="hover:text-zinc-950 cursor-pointer transition-colors focus:outline-none">
            Services
          </button>
          <button onClick={() => scrollToSection('playground')} className="hover:text-zinc-950 cursor-pointer transition-colors focus:outline-none">
            Interactive Test
          </button>
          <button onClick={() => scrollToSection('team')} className="hover:text-zinc-950 cursor-pointer transition-colors focus:outline-none">
            Support Info
          </button>
        </nav>

        {/* Get Started Header CTA Button */}
        <div>
          {consoleOpen ? (
            <button
              onClick={() => setConsoleOpen(false)}
              className="px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold rounded-full transition-all cursor-pointer shadow-sm border border-zinc-200/80 flashy-btn"
            >
              Back to Home
            </button>
          ) : (
            <button
              onClick={() => {
                setConsoleOpen(true);
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 bg-zinc-950 text-white hover:bg-zinc-900 text-xs font-bold rounded-full cursor-pointer shadow-md transition-all border border-zinc-800 flashy-btn-dark"
            >
              Get started
            </button>
          )}
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-6 py-6 md:py-12 relative">
        <AnimatePresence mode="wait">
          {consoleOpen ? (
            <motion.div
              key="console"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <DeveloperConsole onBack={() => setConsoleOpen(false)} />
            </motion.div>
          ) : (
            <div className="space-y-24">
              
              {/* ================= 1. HERO SECTION (IMAGE 1 COMPLIANCE) ================= */}
              <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4 md:pt-10">
                {/* Hero Left Content */}
                <div className="lg:col-span-6 space-y-6 md:space-y-8">
                  <div className="space-y-3">
                    {/* Glowing highlight tag line */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full">
                      <Zap className="w-3.5 h-3.5 text-indigo-600 fill-current animate-pulse" id="hero-badge-zap" />
                      <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-800 select-none">
                        No KYC required. Instant access.
                      </span>
                    </div>

                    {/* Massive Display stacked headers matching original stacked text style of original screenshot */}
                    <h1 className="font-sans font-black text-4xl md:text-6xl text-zinc-950 tracking-tight leading-[1.05] flex flex-col gap-1.5">
                      <span className="text-zinc-950">Developer-first OTP API.</span>
                      <span className="text-indigo-600">Built for India.</span>
                    </h1>
                  </div>

                  <p className="font-sans text-sm md:text-base text-zinc-550 max-w-lg leading-relaxed font-semibold">
                    Integrate robust verification into your app in minutes. Reliable Gmail and WhatsApp OTPs with clean documentation and zero paperwork.
                  </p>

                  {/* Actions buttons identical to original screenshot layouts */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => {
                        setConsoleOpen(true);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className="px-6 py-3.5 bg-zinc-950 text-white hover:bg-zinc-900 font-bold text-xs md:text-sm rounded-full cursor-pointer shadow-md transition-all border border-zinc-800 flashy-btn-dark uppercase tracking-wider"
                    >
                      get started for free
                    </button>
                    <button
                      onClick={() => scrollToSection('playground')}
                      className="px-6 py-3.5 text-zinc-600 hover:text-zinc-950 bg-white/80 border border-zinc-200/80 hover:border-zinc-300 font-bold text-xs md:text-sm rounded-full cursor-pointer shadow-sm transition-all flashy-btn uppercase tracking-wider"
                    >
                      read the docs
                    </button>
                  </div>
                </div>

                {/* Hero Right Content - Advanced Interactive Phone Graphics */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <InteractivePhoneGraphic />
                </div>
              </section>

              {/* ================= 2. SERVICES FEATURE CARDS (NEON-CRESCENT THEME) ================= */}
              <section id="services" className="scroll-mt-24 relative rounded-[36px] overflow-hidden bg-[#030712] border border-zinc-900 p-8 md:p-12 space-y-12">
                
                {/* The Glowing Neon crescent arch background matching the uploaded styling perfectly */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
                  {/* Outer violet glow */}
                  <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[160%] h-[120%] rounded-[100%] border-t-[4px] border-t-indigo-500/80 shadow-[0_-25px_90px_rgba(99,102,241,0.45)] opacity-95" />
                  {/* High heat light core blue-cyan gradient */}
                  <div className="absolute bottom-[-32%] left-1/2 -translate-x-1/2 w-[130%] h-[100%] rounded-[100%] border-t-[1.8px] border-t-cyan-400/40 shadow-[0_-12px_50px_rgba(34,211,238,0.3)]" />
                  {/* Subtle starlight ambient dust in background area */}
                  <div className="absolute top-4 left-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-[80px]" />
                </div>

                {/* Mini Segment title bar mimicking original decoration in a beautiful dark context */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-850 pb-6 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-6 bg-cyan-400 rounded-full" />
                    <div>
                      <h2 className="font-sans font-black text-xl text-white tracking-tight uppercase leading-none">
                        Everything you need. Nothing you don't.
                      </h2>
                      <p className="font-sans text-xs text-zinc-400 font-semibold mt-1.5 max-w-xl">
                        We stripped away the enterprise bloat. Just clean APIs, transparent pricing, and robust infrastructure.
                      </p>
                    </div>
                  </div>
                  <div className="flex bg-zinc-900 border border-zinc-800 p-1.5 rounded-lg">
                    <span className="px-3 py-1 text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                      ENTERPRISE PERFORMANCE
                    </span>
                  </div>
                </div>

                {/* Hand off layout rendering and custom 360 Hologram dynamic looping animation to dedicated component */}
                <HologramFeatureCards setConsoleOpen={setConsoleOpen} />


              </section>

              {/* ================= 3. TESTIMONIALS SECTION (THIRD PAGE) ================= */}
              <section id="team" className="scroll-mt-24 space-y-10">
                
                {/* Clean Segment title bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                    <div>
                      <h2 className="font-sans font-black text-2xl text-zinc-950 tracking-tight uppercase leading-none">
                        Trusted by engineering teams
                      </h2>
                      <p className="font-sans text-xs text-zinc-500 font-semibold mt-1.5 max-w-2xl">
                        Join thousands of Indian developers who have switched to a faster, simpler authentication API.
                      </p>
                    </div>
                  </div>
                  <div className="flex bg-zinc-100 border border-zinc-200 p-1 rounded-lg">
                    <span className="px-3 py-1 text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                      ENG-VERIFIED
                    </span>
                  </div>
                </div>

                {/* Staggered double-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* LEFT: Live rotating user engineer reviews in fast motion */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-indigo-600" />
                        <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-650">
                          Live Feedback Feed
                        </span>
                      </div>
                      <h3 className="font-sans font-black text-xl text-zinc-900 leading-tight">
                        What builders are deploying
                      </h3>
                    </div>
                    
                    {/* Fast rotating review list */}
                    <FastReviewTicker />
                  </div>

                  {/* RIGHT: High quality phone 360 rotating fast with messages popping up */}
                  <div className="lg:col-span-6 flex items-center justify-center">
                    <ImagePhone3DGraphic />
                  </div>

                </div>

              </section>

              {/* ================= 4. READ API DOCS & PLAYGROUND (FOURTH PAGE) ================= */}
              <section id="playground" className="scroll-mt-24 space-y-10">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-6 bg-cyan-500 rounded-full" />
                    <div>
                      <h2 className="font-sans font-black text-2xl text-zinc-950 tracking-tight uppercase leading-none">
                        READ API DOCS
                      </h2>
                      <p className="font-sans text-xs text-zinc-550 font-semibold mt-1.5">
                        Trigger simulated queries and watch logs stream through our flowing Google glow-border gateways
                      </p>
                    </div>
                  </div>
                </div>

                {/* Live Playground component with two containers wrapped in Google color combination running borders */}
                <div>
                  <APIPlayground />
                </div>

              </section>

              {/* ================= 4. CALL TO ACTION & FOOTER (IMAGE 4 COMPLIANCE) ================= */}
              <section className="bg-white/60 backdrop-blur-md border border-zinc-200 rounded-3xl p-10 text-center relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.1] -z-10" />
                <div className="absolute top-0 right-1/4 w-40 h-40 bg-indigo-200/20 rounded-full blur-2xl" />

                <div className="max-w-2xl mx-auto space-y-5">
                  <h3 className="font-sans font-black text-3xl md:text-5xl text-zinc-950 tracking-tight">
                    Ready to integrate?
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-zinc-500 font-semibold leading-relaxed">
                    Get 50 free Gmail OTPs and 20 free WhatsApp OTPs when you trigger an active sandbox account. No credit card, commitment, or developer authorization required.
                  </p>
                  
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setConsoleOpen(true);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className="px-8 py-4 bg-zinc-950 text-white hover:bg-zinc-900 font-black text-xs md:text-sm rounded-xl cursor-pointer shadow-md border border-zinc-950 hover:scale-[1.01] active:scale-[0.99] transition-all uppercase tracking-widest flashy-btn-dark"
                    >
                      get started for free
                    </button>
                  </div>
                </div>
              </section>

            </div>
          )}
        </AnimatePresence>
      </main>

      {/* ================= FOOTER LINKS (IMAGE 4 COMPLIANCE) ================= */}
      <footer className="max-w-7xl mx-auto px-6 py-10 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-mono font-bold text-zinc-400">
        <div>
          <span>© 2026 Easy OTP API | Easy Top App. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#playground" onClick={() => scrollToSection('playground')} className="hover:text-zinc-900 transition-colors uppercase">Documentation</a>
          <a href="#services" onClick={() => scrollToSection('services')} className="hover:text-zinc-900 transition-colors uppercase">Terms of Service</a>
          <a href="#team" onClick={() => scrollToSection('team')} className="hover:text-zinc-900 transition-colors uppercase">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
