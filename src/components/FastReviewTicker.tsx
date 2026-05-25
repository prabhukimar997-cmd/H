import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: '1',
    name: "Arpit Gupta",
    role: "Lead Engineer, IndiaPay",
    quote: "Switched from overpriced enterprise SMS gateway. Our integration with Easy Top took exactly 10 minutes. Delivered 45,000 WhatsApp OTPs on launch day with 99.8% inbox rate.",
    rating: 5,
  },
  {
    id: '2',
    name: "Meera Nair",
    role: "CTO, GrowTech",
    quote: "No PAN card verification, no manual signups or waiting 3 weeks for cellular gateway approvals. Under-3-second latency for email OTPs is genuinely game-changing.",
    rating: 5,
  },
  {
    id: '3',
    name: "Vikram Malhotra",
    role: "Founder, RapidAuth",
    quote: "UPI instant top-up means we don't have to talk to greedy sales representatives. We pay strictly ₹0.10 for Gmail and ₹0.30 for WhatsApp message delivery. Absolute gold.",
    rating: 5,
  },
  {
    id: '4',
    name: "Neha Joshi",
    role: "Principal Architect, NeoTrade",
    quote: "Robust auto-failovers mean if the primary WhatsApp route has high traffic delay, the transaction redirects smoothly to secondary networks. Highly recommended.",
    rating: 5,
  }
];

export default function FastReviewTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fast rotation ticker - 3.5 seconds per testimonial
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const current = reviews[currentIndex];

  return (
    <div className="w-full space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -15 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-white/90 backdrop-blur-md border border-zinc-200 rounded-[28px] p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between min-h-[190px]"
        >
          {/* Subtle watermarks or layout lines */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/40 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-3">
            {/* Stars Row */}
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>

            {/* Testimonial Quote with stylized high-quality quotes */}
            <p className="font-sans text-xs md:text-[13px] text-zinc-700 font-semibold leading-relaxed italic pr-4">
              "{current.quote}"
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3.5">
            <div>
              <h4 className="font-sans font-extrabold text-xs md:text-sm text-zinc-950 leading-none">
                {current.name}
              </h4>
              <span className="text-[10px] font-mono tracking-wider font-bold text-indigo-600 mt-1 block uppercase">
                {current.role}
              </span>
            </div>
            
            {/* Display index tag indicator */}
            <span className="text-[10px] font-mono font-bold text-zinc-400">
              0{currentIndex + 1} / 0{reviews.length}
            </span>
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Manual fast indicators / index dots */}
      <div className="flex gap-1.5 justify-center md:justify-start pl-4">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 pointer-events-auto ${
              idx === currentIndex ? 'w-6 bg-zinc-950' : 'w-1.5 bg-zinc-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
