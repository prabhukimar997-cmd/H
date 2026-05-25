import { motion } from 'motion/react';

// ================= 1. WHATSAPP PROFESSIONAL ICON IN 3D MOTION (Zero Approval Time) =================
export function WhatsAppZeroApprovalGraphic() {
  return (
    <div className="w-full h-[140px] flex items-center justify-center select-none overflow-visible">
      <motion.svg
        viewBox="0 0 200 150"
        className="w-full h-full max-h-[120px] overflow-visible"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="waGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="waShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.9" />
          </linearGradient>
          <filter id="waShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#15803d" floodOpacity="0.25" />
          </filter>
        </defs>

        <g transform="translate(10, 10)" filter="url(#waShadow)">
          {/* Circular platform backup */}
          <ellipse cx="90" cy="115" rx="55" ry="12" fill="#15803d" opacity="0.15" />

          {/* Isometric Shield and Instant Token representation */}
          <motion.g
            animate={{ rotateY: [0, 15, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "90px 65px" }}
          >
            {/* 3D-styled Green Shield base for No-PAN/No-License verification */}
            <path
              d="M 60 35 Q 90 20 120 35 Q 120 75 90 105 Q 60 75 60 35 Z"
              fill="url(#waShieldGrad)"
              stroke="#22c55e"
              strokeWidth="2.5"
            />

            {/* Glowing Internal Circle representing instant key delivery */}
            <motion.circle
              cx="90"
              cy="62"
              r="22"
              fill="#ffffff"
              animate={{ scale: [0.93, 1.05, 0.93], opacity: [0.95, 1, 0.95] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />

            {/* WhatsApp brand logo symbol embedded in the center */}
            <path
              d="M 90 48 C 82.27 48 76 54.27 76 62 C 76 64.46 76.63 66.78 77.74 68.81 L 76.5 73.5 L 81.33 72.24 C 83.25 73.29 85.45 73.91 87.8 73.91 M 93.9 57 C 93.45 56.5 92.2 56.5 91.5 56.8 C 91.0 57.0 90.0 58.2 90.0 59.5 C 90.0 60.8 90.8 62.0 91.5 62.8 C 92.5 64.0 94.5 65.5 96.5 66.0 C 97.4 66.2 98.2 66.2 98.8 65.8 C 99.4 65.4 99.8 64.2 99.9 63.5 C 100.0 62.8 99.5 62.2 99.1 62.0 L 97.2 61.1 C 96.8 60.9 96.4 60.9 96.1 61.3 L 95.3 62.3 C 95.0 62.7 94.5 62.8 94.1 62.5 C 93.3 62.1 92.3 61.3 91.5 59.9 C 91.1 59.2 91.5 58.8 91.8 58.4 L 92.5 57.6 C 92.8 57.2 92.7 56.8 92.5 56.5 L 91.5 55.4 Z"
              fill="#16a34a"
              transform="translate(-4, -4) scale(1.05)"
            />
          </motion.g>

          {/* Flash message bubble passing across */}
          <motion.g
            animate={{ x: [-15, 15, -15], y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="115" y="65" width="45" height="22" rx="8" fill="#16a34a" stroke="#4ade80" strokeWidth="1.5" />
            <polygon points="120,87 125,87 120,95" fill="#16a34a" stroke="#4ade80" strokeWidth="1.5" />
            <text x="137.5" y="79" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">API KEY</text>
          </motion.g>
        </g>
      </motion.svg>
    </div>
  );
}

// ================= 2. GMAIL PROFESSIONAL ICON IN 3D MOTION (Gmail Delivery) =================
export function GmailDeliveryGraphic() {
  return (
    <div className="w-full h-[140px] flex items-center justify-center select-none overflow-visible">
      <motion.svg
        viewBox="0 0 200 150"
        className="w-full h-full max-h-[120px] overflow-visible"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="gmailBg_1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <filter id="gmailShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="7" stdDeviation="5" floodColor="#ef4444" floodOpacity="0.2" />
          </filter>
        </defs>

        <g transform="translate(10, 10)" filter="url(#gmailShadow)">
          {/* Base Platform Shadow */}
          <ellipse cx="95" cy="118" rx="55" ry="10" fill="#ef4444" opacity="0.12" />

          {/* Isometric Gmail envelope with dynamic 3D opening flap */}
          <motion.g
            animate={{ rotateY: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: "95px 65px" }}
          >
            {/* Mail Box backplate */}
            <rect x="52" y="45" width="86" height="54" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />

            {/* The actual mail insert card pulsing in and out (OTPs Delivering!) */}
            <motion.g
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="58" y="32" width="74" height="42" rx="6" fill="#3b82f6" stroke="#93c5fd" strokeWidth="1.5" />
              {/* Fake coding verification layout inside */}
              <rect x="65" y="40" width="30" height="3" fill="#ffffff" opacity="0.8" rx="1.5" />
              <rect x="65" y="47" width="50" height="3" fill="#ffffff" opacity="0.5" rx="1.5" />
              {/* Highlight verification code */}
              <text x="95" y="64" fill="#ffffff" fontSize="10" fontWeight="950" fontFamily="monospace" textAnchor="middle">9 1 0 2</text>
            </motion.g>

            {/* Red glass-like envelopes folds */}
            <path
              d="M 52 45 L 95 76 L 138 45 Z"
              fill="url(#gmailBg_1)"
              opacity="0.9"
            />
            {/* Left fold */}
            <path
              d="M 52 45 L 95 76 L 52 99 Z"
              fill="#dc2626"
              opacity="0.85"
            />
            {/* Right fold */}
            <path
              d="M 138 45 L 95 76 L 138 99 Z"
              fill="#b91c1c"
              opacity="0.85"
            />
            {/* Bottom overlap fold */}
            <path
              d="M 52 99 L 95 74 L 138 99 Z"
              fill="#991b1b"
              opacity="0.95"
            />
          </motion.g>

          {/* Micro dispatch dots representing 99.9% inbox rate */}
          <motion.circle cx="34" cy="50" r="4" fill="#ef4444" animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
          <motion.circle cx="156" cy="40" r="5" fill="#22c55e" animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
          <motion.circle cx="45" cy="100" r="3.5" fill="#3b82f6" animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 }} />
        </g>
      </motion.svg>
    </div>
  );
}

// ================= 3. WHATSAPP ROUTING PROFESSIONAL ICON IN 3D MOTION (WhatsApp Routing) =================
export function WhatsAppRoutingGraphic() {
  return (
    <div className="w-full h-[140px] flex items-center justify-center select-none overflow-visible">
      <motion.svg
        viewBox="0 0 200 150"
        className="w-full h-full max-h-[120px] overflow-visible"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="routingLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <filter id="routingShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0891b2" floodOpacity="0.25" />
          </filter>
        </defs>

        <g transform="translate(10, 10)" filter="url(#routingShadow)">
          {/* Base ellipse shadow */}
          <ellipse cx="95" cy="115" rx="60" ry="11" fill="#0891b2" opacity="0.15" />

          {/* The Multi-carrier network pipelines with pulse signals */}
          <path
            d="M 40 95 L 95 60 L 150 95"
            fill="none"
            stroke="url(#routingLineGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 40 95 C 70 120 120 120 150 95"
            fill="none"
            stroke="url(#routingLineGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.6"
          />

          {/* Pulsing signal on the main carrier line (represent 3-second delivery) */}
          <motion.circle
            cx="40"
            cy="95"
            r="5"
            fill="#34d399"
            animate={{
              cx: [40, 95, 150],
              cy: [95, 60, 95],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Node columns representing operators */}
          <g transform="translate(40, 95)">
            <ellipse cx="0" cy="0" rx="14" ry="7" fill="#1e293b" />
            <ellipse cx="0" cy="-4" rx="14" ry="7" fill="#0f766e" />
            <ellipse cx="0" cy="-4" rx="10" ry="5" fill="#14b8a6" />
            <circle cx="0" cy="-4" r="3" fill="#ffffff" />
          </g>

          <g transform="translate(150, 95)">
            <ellipse cx="0" cy="0" rx="14" ry="7" fill="#1e293b" />
            <ellipse cx="0" cy="-4" rx="14" ry="7" fill="#0f766e" />
            <ellipse cx="0" cy="-4" rx="10" ry="5" fill="#14b8a6" />
            <circle cx="0" cy="-4" r="3" fill="#ffffff" />
          </g>

          {/* Central heavy Gateway controller core */}
          <motion.g
            transform="translate(95, 60)"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          >
            {/* Gear-looking hub built styled beautifully */}
            <circle cx="0" cy="0" r="18" fill="#0f172a" />
            <circle cx="0" cy="0" r="14" fill="#047857" />
            <circle cx="0" cy="0" r="10" fill="#10b981" />
            
            {/* Brand icon inside */}
            <path
              d="M-3 -4 L3 -4 L4 -1 L2 4 L-2 4 L-4 -1 Z"
              fill="#ffffff"
            />
          </motion.g>

          {/* Central floating core highlight ring */}
          <motion.circle
            cx="95"
            cy="60"
            r="28"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
        </g>
      </motion.svg>
    </div>
  );
}

// ================= 4. DASHBOARD REALTIME PROFESSIONAL ICON IN 3D MOTION (Clean Dashboard) =================
export function DashboardRealtimeGraphic() {
  return (
    <div className="w-full h-[140px] flex items-center justify-center select-none overflow-visible">
      <motion.svg
        viewBox="0 0 200 150"
        className="w-full h-full max-h-[120px] overflow-visible"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="dbGrad_1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <filter id="dbShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="7" stdDeviation="5" floodColor="#06b6d4" floodOpacity="0.2" />
          </filter>
        </defs>

        <g transform="translate(10, 10)" filter="url(#dbShadow)">
          {/* Base shadow ellipse */}
          <ellipse cx="95" cy="115" rx="58" ry="11" fill="#0891b2" opacity="0.15" />

          {/* Flat glass grid dashboard layer */}
          <motion.g
            animate={{ rotateY: [0, -8, 8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: "95px 65px" }}
          >
            {/* The Dashboard screen */}
            <rect x="42" y="32" width="106" height="66" rx="12" fill="#020617" stroke="#1e293b" strokeWidth="2" />
            <rect x="44" y="34" width="102" height="62" rx="10" fill="#0f172a" />

            {/* Simulated UPI Top up credit bar */}
            <g transform="translate(50, 42)">
              <rect x="0" y="0" width="45" height="10" rx="3" fill="#1e293b" />
              <rect x="0" y="0" width="30" height="10" rx="3" fill="#14b8a6" />
              <text x="5" y="8" fill="#ffffff" fontSize="6" fontWeight="bold" fontFamily="monospace">₹8,450</text>
            </g>

            {/* Instant checkout symbol (UPI trigger key) */}
            <circle cx="112" cy="47" r="5" fill="#3b82f6" />
            <path d="M 110 47 L 112 49 L 115 45" stroke="#ffffff" strokeWidth="1" fill="none" />

            {/* Isometric Real-time Bar charts pulsing */}
            <g transform="translate(50, 62)">
              {/* Bar 1 */}
              <motion.rect
                x="0"
                y="0"
                width="8"
                height="15"
                fill="url(#dbGrad_1)"
                rx="1.5"
                animate={{ height: [8, 22, 12, 8] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                transform="scale(1, -1) translate(0, -25)"
              />
              {/* Bar 2 */}
              <motion.rect
                x="14"
                y="0"
                width="8"
                height="24"
                fill="url(#dbGrad_1)"
                rx="1.5"
                animate={{ height: [12, 6, 26, 12] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                transform="scale(1, -1) translate(0, -25)"
              />
              {/* Bar 3 */}
              <motion.rect
                x="28"
                y="0"
                width="8"
                height="18"
                fill="#10b981"
                rx="1.5"
                animate={{ height: [18, 28, 14, 18] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                transform="scale(1, -1) translate(0, -25)"
              />
              {/* Bar 4 */}
              <motion.rect
                x="42"
                y="0"
                width="8"
                height="8"
                fill="url(#dbGrad_1)"
                rx="1.5"
                animate={{ height: [6, 16, 8, 6] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                transform="scale(1, -1) translate(0, -25)"
              />
            </g>

            {/* Delivery Success rates (99.8% indicator) */}
            <g transform="translate(112, 66)">
              <circle cx="15" cy="15" r="14" fill="none" stroke="#1e293b" strokeWidth="3.5" />
              <motion.circle
                cx="15"
                cy="15"
                r="14"
                fill="none"
                stroke="#10b981"
                strokeWidth="3.5"
                strokeDasharray="88 88"
                strokeDashoffset="12"
                animate={{ strokeDashoffset: [12, 2, 12] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <text x="15" y="18" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">99%</text>
            </g>
          </motion.g>
        </g>
      </motion.svg>
    </div>
  );
}
