import { motion } from 'motion/react';

// Common wrapper properties
interface AvatarProps {
  className?: string;
}

// 1. Male Developer Avatar with Glasses (Black Hair, Suit)
export function DeveloperAvatar({ className = 'w-24 h-24' }: AvatarProps) {
  return (
    <div className={`${className} flex items-center justify-center overflow-visible pointer-events-none select-none`}>
      <motion.svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <defs>
          <linearGradient id="avatarMaleGlassesBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#fde047" />
          </linearGradient>
          <linearGradient id="suitGrad" x1="0%" y1="0%" x2="150%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>

        {/* Circular blue styled backdrop */}
        <circle cx="60" cy="55" r="45" fill="url(#avatarMaleGlassesBg)" />
        <circle cx="60" cy="55" r="42" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.6" />

        {/* Neck */}
        <rect x="54" y="68" width="12" height="15" fill="#fbcfe8" rx="2" />
        <path d="M 54 75 L 66 75 L 60 84 Z" fill="#e9d5ff" opacity="0.8" />

        {/* Suit & Collar */}
        <path d="M 28 92 C 28 80, 40 76, 45 78 L 75 78 C 80 76, 92 80, 92 92 Z" fill="url(#suitGrad)" />
        {/* White shirt inner */}
        <polygon points="52,78 68,78 60,94" fill="#fff" />
        {/* Necktie - black */}
        <polygon points="57,90 63,90 61,114 59,114" fill="#0f172a" />
        {/* Suit collars (lapels) */}
        <polygon points="44,78 52,94 40,94" fill="#0f172a" />
        <polygon points="76,78 68,94 80,94" fill="#0f172a" />

        {/* Head/Face */}
        <circle cx="60" cy="52" r="22" fill="#fed7aa" />

        {/* Smile & Blush */}
        <path d="M 55 58 C 55 64, 65 64, 65 58" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="46" cy="56" rx="3" ry="1.5" fill="#f43f5e" opacity="0.4" />
        <ellipse cx="74" cy="56" rx="3" ry="1.5" fill="#f43f5e" opacity="0.4" />

        {/* Beautiful signature wire black glasses */}
        {/* Left lens */}
        <circle cx="48" cy="48" r="9" fill="none" stroke="#1e293b" strokeWidth="2.5" />
        <circle cx="48" cy="48" r="8" fill="#38bdf8" opacity="0.15" />
        {/* Right lens */}
        <circle cx="72" cy="48" r="9" fill="none" stroke="#1e293b" strokeWidth="2.5" />
        <circle cx="72" cy="48" r="8" fill="#38bdf8" opacity="0.15" />
        {/* Glasses bridge node */}
        <path d="M 57 48 L 63 48" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
        {/* Glasses temple pieces */}
        <path d="M 39 48 L 34 46" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
        <path d="M 81 48 L 86 46" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />

        {/* Eyes (behind glasses) */}
        <circle cx="48" cy="48" r="2.5" fill="#0f172a" />
        <circle cx="72" cy="48" r="2.5" fill="#0f172a" />
        <circle cx="50" cy="46" r="0.8" fill="#fff" />
        <circle cx="74" cy="46" r="0.8" fill="#fff" />

        {/* Black hair */}
        <path
          d="M 36 44 
             C 34 40, 36 28, 50 24 
             C 65 20, 80 26, 84 38 
             C 86 42, 84 48, 82 50 
             C 80 52, 76 50, 76 46
             C 76 40, 70 38, 64 38
             C 52 38, 44 42, 40 48
             C 38 51, 36 48, 36 44 Z"
          fill="#1e293b"
        />
        {/* Small ears */}
        <circle cx="37" cy="52" r="4.5" fill="#fca5a5" opacity="0.9" />
        <circle cx="83" cy="52" r="4.5" fill="#fca5a5" opacity="0.9" />
      </motion.svg>
    </div>
  );
}

// 2. Male Manager Avatar with Orange Hair (Grey Suit, Blue Necktie)
export function ManagerAvatar({ className = 'w-24 h-24' }: AvatarProps) {
  return (
    <div className={`${className} flex items-center justify-center overflow-visible pointer-events-none select-none`}>
      <motion.svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <defs>
          <linearGradient id="avatarMaleOrangeBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="greySuit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>

        {/* Backdrop scale */}
        <circle cx="60" cy="55" r="45" fill="url(#avatarMaleOrangeBg)" />
        <circle cx="60" cy="55" r="42" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.6" />

        {/* Neck */}
        <rect x="54" y="68" width="12" height="15" fill="#fed7aa" rx="2" />
        <path d="M 54 75 L 66 75 L 60 84 Z" fill="#e2e8f0" opacity="0.9" />

        {/* Grey suit & Blue striped tie */}
        <path d="M 28 92 C 28 80, 40 76, 45 78 L 75 78 C 80 76, 92 80, 92 92 Z" fill="url(#greySuit)" />
        <polygon points="52,78 68,78 60,94" fill="#fff" />
        {/* Tie in Blue */}
        <polygon points="58,90 62,90 61,114 59,114" fill="#1d4ed8" />
        {/* Striped pattern over necktie */}
        <line x1="59" y1="94" x2="61" y2="92" stroke="#fff" strokeWidth="1" />
        <line x1="59" y1="100" x2="61" y2="98" stroke="#fff" strokeWidth="1" />
        <line x1="59" y1="106" x2="61" y2="104" stroke="#fff" strokeWidth="1" />
        {/* Lapels */}
        <polygon points="44,78 52,94 40,94" fill="#475569" />
        <polygon points="76,78 68,94 80,94" fill="#475569" />

        {/* Head Shape */}
        <circle cx="60" cy="52" r="21" fill="#ffedd5" />

        {/* Cute orange spikes hair */}
        <path
          d="M 37 44 
             C 35 34, 42 22, 56 20 
             C 70 18, 81 25, 83 38 
             C 84 42, 82 46, 80 48 
             L 76 44 
             L 70 47 
             L 64 42 
             L 58 46 
             L 52 41 
             L 46 47 
             L 42 41 Z"
          fill="#f97316"
        />

        {/* Eyes (friendly brown/orange) */}
        <circle cx="50" cy="49" r="3" fill="#475569" />
        <circle cx="70" cy="49" r="3" fill="#475569" />
        <circle cx="51" cy="47" r="1" fill="#fff" />
        <circle cx="71" cy="47" r="1" fill="#fff" />
        {/* Soft dark eyebrows */}
        <path d="M 44 43 C 48 42, 52 44, 52 44" fill="none" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 76 43 C 72 42, 68 44, 68 44" fill="none" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />

        {/* Smile */}
        <path d="M 55 58 C 55 63, 65 63, 65 58" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="48" cy="55" rx="2" ry="1.5" fill="#f43f5e" opacity="0.3" />
        <ellipse cx="72" cy="55" rx="2" ry="1.5" fill="#f43f5e" opacity="0.3" />
      </motion.svg>
    </div>
  );
}

// 3. Female Support Hero with glasses (Brown Hair, Light Blue shirt)
export function FemaleSupportAvatar({ className = 'w-24 h-24' }: AvatarProps) {
  return (
    <div className={`${className} flex items-center justify-center overflow-visible pointer-events-none select-none`}>
      <motion.svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <defs>
          <linearGradient id="avatarFemaleBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="purpleGown" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fca5a5" />
          </linearGradient>
        </defs>

        {/* Background core */}
        <circle cx="60" cy="55" r="45" fill="url(#avatarFemaleBg)" />
        <circle cx="60" cy="55" r="42" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.6" />

        {/* Neck */}
        <rect x="54" y="68" width="12" height="15" fill="#ffedd5" rx="2" />
        <path d="M 54 75 L 66 75 L 60 84 Z" fill="#ffedd5" />

        {/* Light pink shirt dress */}
        <path d="M 28 92 C 28 80, 40 76, 45 78 L 75 78 C 80 76, 92 80, 92 92 Z" fill="url(#purpleGown)" />
        {/* Cute necklaces pattern */}
        <path d="M 52 78 C 52 86, 68 86, 68 78" fill="none" stroke="#eab308" strokeWidth="1.5" />

        {/* Head Face */}
        <circle cx="60" cy="51" r="21" fill="#fff7ed" />

        {/* Neat Hair cut (Brown) */}
        <path
          d="M 36 42 
             C 33 28, 45 18, 60 18 
             C 75 18, 87 28, 84 42 
             C 83 48, 82 52, 80 54 
             C 78 54, 76 52, 75 46
             C 75 34, 45 34, 45 46
             C 44 52, 42 54, 40 54 
             C 38 52, 37 48, 36 42 Z"
          fill="#78350f"
        />

        {/* Cute glasses frame */}
        <circle cx="48" cy="48" r="8" fill="none" stroke="#78350f" strokeWidth="2" />
        <circle cx="48" cy="48" r="7" fill="#fda4af" opacity="0.1" />
        <circle cx="72" cy="48" r="8" fill="none" stroke="#78350f" strokeWidth="2" />
        <circle cx="72" cy="48" r="7" fill="#fda4af" opacity="0.1" />
        <line x1="56" y1="48" x2="64" y2="48" stroke="#78350f" strokeWidth="2" />

        {/* Eyes (Smiling curves) */}
        <path d="M 45 47 C 47 49, 51 49, 53 47" fill="none" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
        <path d="M 67 47 C 69 49, 73 49, 75 47" fill="none" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />

        {/* Cute Warm Smile */}
        <path d="M 54 57 C 54 62, 66 62, 66 57" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="46" cy="54" rx="3" ry="1.5" fill="#fda4af" />
        <ellipse cx="74" cy="54" rx="3" ry="1.5" fill="#fda4af" />
      </motion.svg>
    </div>
  );
}
