import { useState, FormEvent } from 'react';
import { X, CheckCircle2, ArrowUpRight, Phone, MessageSquare, Sparkles, Dumbbell } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanOrProgram?: string;
}

export default function JoinModal({ isOpen, onClose, defaultPlanOrProgram }: JoinModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(defaultPlanOrProgram || 'Membership & Free Pass');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please provide your name and phone number.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = `Hi Gym Bean Fitness Studio! My name is ${name || 'Friend'}. I want to join / inquire about "${selectedTopic}" at your Egmore studio (Kamatchi Building, 140 Marshall Road / Rukmani Lakshmipathi Salai).`;
    window.open(`https://wa.me/916385664871?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#031B36] border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-4 shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">
              YOU'RE ON THE LIST!
            </h3>
            <p className="text-xs sm:text-sm text-[#DCE7F5] mb-6 leading-relaxed">
              Thanks <strong className="text-white">{name}</strong>! Our master coach will reach out to you at <strong className="text-[#38BDF8]">{phone}</strong> within 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-4 rounded-xl bg-white/10 text-white font-semibold text-xs uppercase hover:bg-white/15 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#1687F5] flex items-center justify-center text-white">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-bold text-white uppercase tracking-wider">
                JOIN GYM BEAN FITNESS
              </span>
            </div>

            <p className="text-xs text-[#DCE7F5]/80 mb-6">
              Kamatchi Building, 140 Marshall Road, Egmore, Chennai • {GYM_INFO.rating} ★ {GYM_INFO.reviewCount}
            </p>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-400/40 text-xs text-rose-200 font-medium mb-4">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#DCE7F5] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#1687F5] text-white placeholder-gray-400 text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#DCE7F5] mb-1.5">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9840151814"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#1687F5] text-white placeholder-gray-400 text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#DCE7F5] mb-1.5">
                  Inquiry Topic / Program
                </label>
                <input
                  type="text"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#1687F5] text-white text-sm focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0759B8] via-[#1687F5] to-[#38BDF8] hover:from-[#1687F5] hover:to-[#0759B8] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-[#1687F5]/40 hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50 mt-2"
              >
                <span>{isSubmitting ? 'SUBMITTING...' : 'CONFIRM INQUIRY & GET PASS'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center">
                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="text-xs text-[#38BDF8] font-bold hover:underline flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Or call directly: {GYM_INFO.phone}</span>
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
