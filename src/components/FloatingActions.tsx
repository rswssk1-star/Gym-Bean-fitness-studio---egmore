import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface FloatingActionsProps {
  onOpenJoinModal: () => void;
}

export default function FloatingActions({ onOpenJoinModal }: FloatingActionsProps) {
  return (
    <div className="fixed bottom-4 inset-x-4 z-40 sm:hidden flex items-center gap-2">
      {/* Call Button */}
      <a
        href={`tel:${GYM_INFO.phone}`}
        aria-label="Direct Phone Call"
        className="w-13 h-13 rounded-2xl bg-[#0759B8] border border-white/25 flex items-center justify-center text-white shadow-2xl shadow-black/60 shrink-0"
      >
        <Phone className="w-5 h-5 text-white animate-pulse" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={GYM_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Message"
        className="w-13 h-13 rounded-2xl bg-emerald-600 border border-white/25 flex items-center justify-center text-white shadow-2xl shadow-black/60 shrink-0"
      >
        <MessageSquare className="w-5 h-5 text-white" />
      </a>

      {/* Main Join CTA Button */}
      <button
        type="button"
        onClick={onOpenJoinModal}
        className="flex-1 h-13 rounded-2xl bg-gradient-to-r from-[#0759B8] via-[#1687F5] to-[#38BDF8] border border-white/30 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-2xl shadow-[#1687F5]/50 active:scale-95 transition-transform"
      >
        <span>JOIN GYM BEAN FITNESS</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
}
