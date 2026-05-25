import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Check, Copy, RefreshCw, Smartphone, Mail, MessageSquare, Terminal, ChevronRight, Lock } from 'lucide-react';
import { TerminalLog, SimulatedChannel, SimulationStep } from '../types';

export default function APIPlayground() {
  const [recipient, setRecipient] = useState('');
  const [channel, setChannel] = useState<SimulatedChannel>('whatsapp');
  const [step, setStep] = useState<SimulationStep>('idle');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [sentOtp, setSentOtp] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'curl' | 'node' | 'python' | 'dart'>('node');
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: '1',
      time: '18:56:23',
      channel: 'whatsapp',
      type: 'info',
      message: 'Easy Top client initialized. Sandbox environment ready.',
    },
    {
      id: '2',
      time: '18:56:25',
      channel: 'whatsapp',
      type: 'info',
      message: 'Select channel, input recipient, and trigger simulated API dispatch.',
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Handle single action logger helper
  const addLog = (msg: string, type: 'info' | 'success' | 'warning' | 'error' = 'info', chan: SimulatedChannel = channel) => {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    const newLog: TerminalLog = {
      id: Math.random().toString(),
      time: timeStr,
      channel: chan,
      type,
      message: msg,
    };
    setLogs((prev) => [...prev, newLog]);
  };

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => {
      setCopiedCode(false);
    }, 2000);
  };

  // Run the automated send sequence
  const triggerSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient) {
      addLog('Recipient target phone/email is required to send OTP.', 'error');
      return;
    }

    setStep('sending');
    addLog(`POST /v1/otp/send HTTP/1.1 - Initiating request...`, 'info');
    
    // Step-by-step dispatch simulation logs
    setTimeout(() => {
      addLog(`Validating token authentication: 'Bearer easy_top_sk_89f41' -> APPROVED`, 'success');
    }, 500);

    setTimeout(() => {
      addLog(`Selected high-reliability routing route for [${channel.toUpperCase()}] channel...`, 'info');
    }, 1000);

    setTimeout(() => {
      const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
      setSentOtp(generatedCode);
      setStep('sent');
      addLog(`OTP Verification Code Generated: [ ${generatedCode} ] (Internal debug)`, 'warning');
      addLog(`Dispatch status: DISPATCHED SUCCESSFULLY. Reference ID: et_ref_${Math.floor(Math.random() * 900000)}`, 'success');
      
      // Auto success modal trigger
    }, 1800);
  };

  // Run verification simulation
  const triggerVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredOtp.length !== 6) {
      addLog('Please enter the standard 6 digit numeric code.', 'error');
      return;
    }

    setStep('verifying');
    addLog(`POST /v1/otp/verify - Attempting authorization checking...`, 'info');

    setTimeout(() => {
      if (enteredOtp === sentOtp) {
        setStep('success');
        addLog(`OTP Match Result: CORRECT. Authentication token issued. Access granted!`, 'success');
      } else {
        setStep('failed');
        addLog(`OTP Match Result: INCORRECT CODE [${enteredOtp}]. Security check failed!`, 'error');
      }
    }, 1200);
  };

  const resetPlayground = () => {
    setStep('idle');
    setEnteredOtp('');
    setSentOtp('');
    addLog('Playground session reset. Server ready to listen.', 'info');
  };

  // Dynamic code highlights
  const codeSnippets = {
    curl: `curl -X POST https://api.easytop.com/v1/otp/send \\
  -H "Authorization: Bearer easy_top_sk_89f41" \\
  -H "Content-Type: application/json" \\
  -d '{
    "channel": "${channel}",
    "recipient": "${recipient || (channel === 'gmail' ? 'user@gmail.com' : '+919876543210')}",
    "expiry": 300
  }'`,
    node: `// Node.js - Easy Top Integration
import fetch from 'node-fetch';

const sendOtp = async () => {
  const res = await fetch('https://api.easytop.com/v1/otp/send', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer easy_top_sk_89f41',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      channel: '${channel}',
      recipient: '${recipient || (channel === 'gmail' ? 'user@gmail.com' : '+919876543210')}',
      expiry: 300
    })
  });
  
  const result = await res.json();
  console.log(\`Ref ID: \${result.reference_id} | Status: \${result.status}\`);
};

sendOtp();`,
    python: `# Python - Easy Top Integration
import requests

payload = {
    "channel": "${channel}",
    "recipient": "${recipient || (channel === 'gmail' ? 'user@gmail.com' : '+919876543210')}",
    "expiry": 300
}

headers = {
    "Authorization": "Bearer easy_top_sk_89f41",
    "Content-Type": "application/json"
}

response = requests.post(
    "https://api.easytop.com/v1/otp/send",
    json=payload,
    headers=headers
)
print(response.json())`,
    dart: `// Dart / Flutter - Easy Top SDK
import 'package:http/http.dart' as http;
import 'dart:convert';

void sendVerification() async {
  final url = Uri.parse('https://api.easytop.com/v1/otp/send');
  final response = await http.post(
    url,
    headers: {
      'Authorization': 'Bearer easy_top_sk_89f41',
      'Content-Type': 'application/json',
    },
    body: jsonEncode({
      'channel': '${channel}',
      'recipient': '${recipient || (channel === 'gmail' ? 'user@gmail.com' : '+919876543210')}',
      'expiry': 300,
    }),
  );
  
  print('Response body: \${response.body}');
}`
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-2 pb-6">
      {/* LEFT: THE OTP LIVE TESTER FORM (Matches visual card frame from Image 3, with Running Google Border) */}
      <div className="google-glow-border-wrapper h-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
        <div className="google-glow-border-bg" />
        <div className="google-glow-border-inner bg-white/95 backdrop-blur-md p-6 md:p-8 relative overflow-hidden flex flex-col justify-between flex-1">
          {/* Soft decorative visual circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/40 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl pointer-events-none" />

        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2 bg-zinc-100 rounded-xl text-indigo-600 border border-zinc-200">
              <Lock className="w-5 h-5" id="icon-playground-lock" />
            </span>
            <div>
              <h3 className="font-sans font-semibold text-lg text-zinc-950 tracking-tight leading-tight">
                Live Verification Playground
              </h3>
              <p className="font-sans text-xs text-zinc-500 font-medium">
                Simulate client API dispatch and instant validation flows
              </p>
            </div>
          </div>

          {/* Step Based Interactivity */}
          <AnimatePresence mode="wait">
            {step === 'idle' || step === 'sending' ? (
              <motion.form
                key="send-form"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onSubmit={triggerSendOtp}
                className="space-y-5"
              >
                {/* Channel Switch Tabs */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                    Select Gateway Channel
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare, color: 'hover:text-emerald-600 hover:bg-emerald-50 text-emerald-600 bg-emerald-50/50' },
                      { id: 'gmail', label: 'Gmail', icon: Mail, color: 'hover:text-blue-600 hover:bg-blue-50 text-blue-600 bg-blue-50/50' },
                      { id: 'sms', label: 'SMS Gateway', icon: Smartphone, color: 'hover:text-indigo-600 hover:bg-indigo-50 text-indigo-600 bg-indigo-50/50' },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isActive = channel === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setChannel(item.id as SimulatedChannel);
                            addLog(`Channel gateway switched to: [${item.id.toUpperCase()}]`, 'info');
                          }}
                          className={`flex items-center justify-center flex-col md:flex-row gap-2 py-3 px-3 rounded-2xl border text-xs font-semibold cursor-pointer transition-all ${
                            isActive
                              ? 'bg-zinc-950 border-zinc-950 text-white shadow-sm'
                              : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'
                          }`}
                        >
                          <Icon className="w-4 h-4" id={`channel-icon-${item.id}`} />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Recipient Input */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Target Recipient
                    </label>
                    <span className="text-[10px] font-mono font-medium text-zinc-400">
                      {channel === 'gmail' ? 'example@gmail.com' : 'E.164 formats supported'}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type={channel === 'gmail' ? 'email' : 'text'}
                      required
                      placeholder={channel === 'gmail' ? 'customer@example.com' : '+91 98765 43210'}
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-2xl px-4 py-3.5 text-sm font-medium text-zinc-950 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Advanced Mock Settings Hint */}
                <div className="p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl flex items-start gap-2.5">
                  <Smartphone className="w-4 h-4 text-zinc-400 mt-0.5" id="playground-phone-hint" />
                  <p className="font-sans text-xs text-zinc-500 leading-normal">
                    This simulation runs over Easy Top's server cluster. Dispatched OTPs will display instantly in the terminal panel opposite!
                  </p>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={step === 'sending'}
                  className="w-full bg-zinc-950 text-white hover:bg-zinc-900 active:scale-[0.99] disabled:bg-zinc-300 font-semibold rounded-2xl py-4 flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all"
                >
                  {step === 'sending' ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" id="play-loader" />
                      <span>Dispatching Secure Session...</span>
                    </>
                  ) : (
                    <>
                      <Play className="fill-current w-4 h-4" id="play-run" />
                      <span>Trigger Simulated Dispatch</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="verify-container"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                {step === 'sent' || step === 'verifying' ? (
                  <form onSubmit={triggerVerifyOtp} className="space-y-5">
                    <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-center justify-between">
                      <div>
                        <p className="font-sans text-xs text-blue-800 font-semibold uppercase tracking-wider">
                          OTP Sent Successfully
                        </p>
                        <p className="font-sans text-xs text-blue-600 mt-0.5">
                          Sent via <strong className="capitalize">{channel}</strong> to {recipient}
                        </p>
                      </div>
                      <div className="h-2.5 w-2.5 bg-blue-500 rounded-full animate-ping" />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                        Enter 6-Digit Verification Code
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        required
                        placeholder="••••••"
                        value={enteredOtp}
                        onChange={(e) => setEnteredOtp(e.target.value.replace(/\D/g, ''))}
                        className="w-full text-center bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-2xl px-4 py-4 text-2xl font-mono tracking-[0.5em] text-zinc-950 transition-all outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={step === 'verifying'}
                      className="w-full bg-zinc-950 text-white hover:bg-zinc-900 active:scale-[0.99] disabled:bg-zinc-300 font-semibold rounded-2xl py-4 flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all"
                    >
                      {step === 'verifying' ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" id="verifying-loader" />
                          <span>Verifying OTP Signature...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4" id="verify-check" />
                          <span>Verify and Authenticate</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={resetPlayground}
                      className="w-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 font-semibold rounded-2xl py-3 text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                    >
                      Cancel & Start Over
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-6 space-y-5">
                    {step === 'success' ? (
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-emerald-100 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                          <Check className="w-8 h-8 stroke-[3]" id="huge-check" />
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-xl text-zinc-950">
                            Verification Successful!
                          </h4>
                          <p className="font-sans text-xs text-zinc-500 max-w-sm mx-auto mt-1 leading-relaxed">
                            Easy Top high-reliability relay has verified the identity. Response token has been successfully signed.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-red-100 border border-red-200 text-red-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                          <span className="font-sans font-black text-2xl">!</span>
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-xl text-zinc-950">
                            Verification Failed
                          </h4>
                          <p className="font-sans text-xs text-zinc-500 max-w-sm mx-auto mt-1 leading-relaxed">
                            The code [<strong>{enteredOtp}</strong>] does not match active reference parameters. Secure token expired or is incorrect.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={resetPlayground}
                        className="bg-zinc-950 text-white hover:bg-zinc-900 font-semibold rounded-2xl px-6 py-3 text-xs inline-flex items-center gap-1.5 cursor-pointer transition-all"
                      >
                        <RefreshCw className="w-3.5 h-3.5" id="restart-play" />
                        <span>Run Another Simulator Test</span>
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic code blocks and configurations */}
        <div className="mt-8 border-t border-zinc-100 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
              Integration Snippets
            </span>
            <div className="flex bg-zinc-100 rounded-lg p-0.5 border border-zinc-200">
              {(['node', 'python', 'dart', 'curl'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCodeTab(tab)}
                  className={`px-2.5 py-1 text-[10px] font-mono font-semibold rounded-md cursor-pointer transition-all uppercase ${
                    activeCodeTab === tab
                      ? 'bg-white text-zinc-950 shadow-sm font-bold'
                      : 'text-zinc-500 hover:text-zinc-950'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-3 bg-zinc-950 rounded-2xl border border-zinc-800 p-4">
            <button
              onClick={() => handleCopyCode(codeSnippets[activeCodeTab])}
              className="absolute top-3 right-3 p-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-all cursor-pointer"
              title="Copy snippet"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" id="copied-icon" /> : <Copy className="w-3.5 h-3.5" id="copy-icon" />}
            </button>
            <pre className="font-mono text-[11px] text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre select-all max-h-[140px] pr-6">
              <code>{codeSnippets[activeCodeTab]}</code>
            </pre>
          </div>
        </div>
        </div>
      </div>

      {/* RIGHT: THE HIGH-TECH TERMINAL MONITOR (Interactive console displaying logs, with Running Google Border) */}
      <div className="google-glow-border-wrapper h-full shadow-xl flex flex-col">
        <div className="google-glow-border-bg" />
        <div className="google-glow-border-inner bg-zinc-950/98 p-5 md:p-6 relative overflow-hidden flex flex-col justify-between flex-1">
          {/* Real-time matrix-like dot decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />

        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-zinc-500 px-1 font-sans">|</span>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Terminal className="w-4 h-4" id="console-header-term" />
              <span className="text-xs font-mono font-bold">easy-top@gateway-monitor: ~</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <span className="inline-block w-2 class-glow h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400">
              Live Feed
            </span>
          </div>
        </div>

        {/* Logs terminal content scroll container */}
        <div className="font-mono text-[11px] md:text-xs leading-relaxed space-y-3.5 flex-1 overflow-y-auto pr-2 min-h-[220px]">
          {logs.map((log) => {
            let color = 'text-zinc-400';
            let prefix = '•';
            if (log.type === 'success') {
              color = 'text-emerald-400';
              prefix = '[✓]';
            } else if (log.type === 'warning') {
              color = 'text-amber-400';
              prefix = '[!]';
            } else if (log.type === 'error') {
              color = 'text-red-400';
              prefix = '[✗]';
            }

            return (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 bg-zinc-900/40 p-2.5 border border-zinc-800/25 rounded-xl hover:bg-zinc-900/80 transition-all group"
              >
                <span className="text-zinc-600 select-none text-[10px] mt-0.5">{log.time}</span>
                <span className={`${color} font-bold select-none text-xs`}>{prefix}</span>
                <div className="flex-1 text-zinc-300">
                  <span className="text-zinc-500 font-semibold capitalize bg-zinc-800 px-1.5 py-0.5 rounded mr-2 text-[10px] tracking-wide select-none">
                    {log.channel}
                  </span>
                  <span className="group-hover:text-white transition-all">{log.message}</span>
                </div>
              </motion.div>
            );
          })}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Controls */}
        <div className="border-t border-zinc-800/80 pt-4 mt-4 flex items-center justify-between text-zinc-500 text-[10px] md:text-xs">
          <div className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500" id="cmd-prompt-chevron" />
            <span className="font-mono animate-pulse text-zinc-400 font-bold">_</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setLogs([
                {
                  id: '1',
                  time: new Date().toTimeString().split(' ')[0],
                  channel: 'whatsapp',
                  type: 'info',
                  message: 'Security log history cleared by administrator.',
                },
              ]);
            }}
            className="text-zinc-500 hover:text-zinc-300 transition-colors font-mono font-bold cursor-pointer"
          >
            Clear Console
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
