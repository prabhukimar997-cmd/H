import { useState } from 'react';
import { motion } from 'motion/react';
import { Key, Copy, Check, Server, RefreshCw, BarChart3, Database, Cable, Settings2, Sliders, Play, Github } from 'lucide-react';

interface DeveloperConsoleProps {
  onBack: () => void;
}

export default function DeveloperConsole({ onBack }: DeveloperConsoleProps) {
  const [apiKey, setApiKey] = useState('easy_top_live_sk_89fd41c9bc5e3d1ba10fa950a2df38e');
  const [copiedKey, setCopiedKey] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('https://api.my-app.com/v1/webhook/easytop');
  const [webhookStatus, setWebhookStatus] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle');
  const [failoverEnabled, setFailoverEnabled] = useState(true);
  const [retryAttempts, setRetryAttempts] = useState(2);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'keys' | 'webhooks' | 'settings'>('dashboard');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleRotateKey = () => {
    const randomHex = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setApiKey(`easy_top_live_sk_${randomHex}`);
  };

  const handleTestWebhook = () => {
    setWebhookStatus('testing');
    setTimeout(() => {
      setWebhookStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-white/80 backdrop-blur-md border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden">
      {/* Absolute background visual details */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-zinc-100 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
              Easy Top Live Console
            </span>
          </div>
          <h2 className="font-sans font-bold text-2xl text-zinc-950 tracking-tight mt-1">
            Developer Dashboard
          </h2>
          <p className="font-sans text-xs text-zinc-500 mt-1">
            Configure live secrets, examine analytics, and manage multi-channel fallbacks.
          </p>
        </div>
        <button
          onClick={onBack}
          className="px-5 py-2.5 bg-zinc-950 text-white hover:bg-zinc-900 border border-zinc-800 text-xs font-semibold rounded-xl cursor-pointer shadow-sm transition-all"
        >
          ← Go To Homepage
        </button>
      </div>

      {/* Main Console Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        {/* Navigation Sidebar */}
        <div className="flex md:flex-col gap-1 b bg-zinc-50/50 border border-zinc-200/80 p-1.5 rounded-2xl overflow-x-auto">
          {[
            { id: 'dashboard', label: 'API Analytics', icon: BarChart3 },
            { id: 'keys', label: 'Secrets & Keys', icon: Key },
            { id: 'webhooks', label: 'Webhooks Handler', icon: Cable },
            { id: 'settings', label: 'Failovers & Retry', icon: Settings2 },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`flex items-center gap-2.5 px-4 py-3 text-xs font-semibold rounded-xl cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-zinc-950 text-white shadow-sm'
                    : 'text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                <Icon className="w-4 h-4" id={`sidebar-tab-icon-${item.id}`} />
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Block */}
        <div className="md:col-span-3 min-h-[340px]">
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Stats overview widgets */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'OTP Success Rate', val: '99.82%', color: 'text-emerald-600', desc: 'Industry leading metrics' },
                  { label: 'Mean Latency', val: '1.42 sec', color: 'text-blue-600', desc: 'Globally routed relays' },
                  { label: 'Carrier Resilient', val: '99.99%', color: 'text-indigo-600', desc: 'Zero packet loss' },
                ].map((stat, i) => (
                  <div key={i} className="bg-zinc-50 border border-zinc-200/80 p-4 rounded-2xl">
                    <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</p>
                    <h3 className={`text-xl md:text-2xl font-bold ${stat.color} mt-1.5 tracking-tight`}>{stat.val}</h3>
                    <p className="text-[11px] text-zinc-500 font-medium mt-1 leading-normal">{stat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Delivery Chart drawn in clean SVG */}
              <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-zinc-900">Total API Transactions</h4>
                    <p className="text-xs text-zinc-500 font-medium">OTP requests routed across all channels (last 7 days)</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-indigo-600 px-2 py-0.5 bg-indigo-50 border border-indigo-100 rounded-lg">
                    482,912 requests
                  </span>
                </div>

                <div className="w-full h-[180px] overflow-visible relative">
                  {/* Subtle vector pure-SVG line chart */}
                  <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="75" x2="500" y2="75" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#f1f5f9" strokeWidth="1" />

                    {/* Gradient Area under the curve */}
                    <path
                      d="M 10 130 Q 80 80, 160 100 T 320 40 T 490 20 L 490 140 L 10 140 Z"
                      fill="url(#chartGradient)"
                    />

                    {/* Curve line */}
                    <path
                      d="M 10 130 Q 80 80, 160 100 T 320 40 T 490 20"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Data Points */}
                    <circle cx="160" cy="100" r="4.5" fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="320" cy="40" r="4.5" fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="490" cy="20" r="4.5" fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
                  </svg>
                  
                  {/* Chart X axis text */}
                  <div className="flex justify-between font-mono text-[9px] text-zinc-400 mt-2 hover:text-zinc-600 px-1 font-bold">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'keys' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-start gap-3">
                <span className="p-1.5 bg-orange-100 text-orange-700 rounded-lg shrink-0">
                  <Sliders className="w-4 h-4" id="keys-caution-icon" />
                </span>
                <div>
                  <h4 className="font-sans font-bold text-xs text-orange-900">Security Precautionary Advice</h4>
                  <p className="font-sans text-xs text-orange-700 leading-relaxed mt-0.5">
                    Never expose these secret client API keys on standard client-side codebases. Always proxy transactions via server side controllers.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                    Production Secret Key (sk_live)
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 font-mono text-xs text-zinc-800 select-all overflow-x-auto whitespace-nowrap">
                      {apiKey}
                    </div>
                    <button
                      onClick={() => handleCopy(apiKey)}
                      className="px-4 bg-zinc-950 text-white hover:bg-zinc-900 border border-zinc-200/20 rounded-2xl flex items-center justify-center transition-all cursor-pointer"
                      title="Copy Keys"
                    >
                      {copiedKey ? <Check className="w-4 h-4 text-emerald-400" id="copied-con-key" /> : <Copy className="w-4 h-4" id="copy-con-key" />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleRotateKey}
                    className="px-5 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200/80 text-xs font-bold rounded-2xl inline-flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" id="rotate-key-spin" />
                    <span>Rotate Production Key Signature</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'webhooks' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                  Webhook Event Dispatch Listener
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    className="flex-1 bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-2xl px-4 py-3 text-sm font-medium text-zinc-800 outline-none transition-all"
                  />
                  <button
                    onClick={handleTestWebhook}
                    disabled={webhookStatus === 'testing'}
                    className="px-5 bg-zinc-900 text-white hover:bg-zinc-800 rounded-2xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer disabled:bg-zinc-300"
                  >
                    <Play className="w-3 h-3 fill-current" id="test-webhook-play" />
                    Test Endpoint
                  </button>
                </div>
                <p className="text-xs text-zinc-400 font-medium mt-1.5 leading-normal">
                  Easy Top fires verification payload events to this endpoint upon auth successes.
                </p>
              </div>

              {webhookStatus !== 'idle' && (
                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
                    <span className="text-zinc-500 font-bold uppercase">PING TRANSMITTER RESULT</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      webhookStatus === 'testing' 
                        ? 'bg-amber-950 text-amber-400 border border-amber-900'
                        : webhookStatus === 'success'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-900'
                        : 'bg-red-950 text-red-400 border border-red-900'
                    }`}>
                      {webhookStatus === 'testing' ? 'SENDING...' : webhookStatus === 'success' ? 'HTTP 200 OK' : 'FAILED'}
                    </span>
                  </div>
                  <pre className="text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
                    <code>
                      {webhookStatus === 'testing' ? (
                        'POST /v1/webhook HTTP/1.1\nHost: api.my-app.com\nUser-Agent: EasyTopWebhookRelay/2.0\nSending ping event payload...'
                      ) : (
                        `POST /v1/webhook HTTP/1.1\nHost: api.my-app.com\nUser-Agent: EasyTopWebhookRelay/2.0\nContent-Type: application/json\n\n{\n  "event": "otp.verified",\n  "timestamp": "${new Date().toISOString()}",\n  "ref_id": "et_ref_932014",\n  "status": "success",\n  "delivery_ms": 1390\n}`
                      )}
                    </code>
                  </pre>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-2xl space-y-5">
                {/* Gateway failover switch */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-zinc-950">
                      Auto-Failover routing mechanism
                    </h4>
                    <p className="font-sans text-xs text-zinc-500 mt-1 max-w-sm leading-normal">
                      When enabled, if a WhatsApp/Gmail dispatch faces network timeout, Easy Top automatically redirects delivery over local SMS carrier block layers seamlessly.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={failoverEnabled}
                      onChange={(e) => setFailoverEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:height-5 after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-950" />
                  </label>
                </div>

                <hr className="border-zinc-200/85" />

                {/* Retries count selection */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-zinc-950">
                      Retry dispatch windows
                    </h4>
                    <p className="font-sans text-xs text-zinc-500 mt-1 max-w-sm leading-normal">
                      Total system attempt cycles performed before throwing delivery exhaustion codes.
                    </p>
                  </div>
                  <div className="flex bg-zinc-100 rounded-lg p-1 border border-zinc-200">
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        onClick={() => setRetryAttempts(num)}
                        className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-md cursor-pointer transition-all ${
                          retryAttempts === num
                            ? 'bg-white text-zinc-950 shadow-sm'
                            : 'text-zinc-500 hover:text-zinc-950'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
