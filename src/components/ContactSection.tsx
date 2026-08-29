import { useState, FormEvent } from 'react';
import { Phone, Mail, Send, CheckCircle2, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialGoal?: string;
}

export default function ContactSection({ initialGoal }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    goal: initialGoal || '',
    preferredTime: 'Morning (6 AM - 10 AM)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const goalOptions = [
    'Weight Loss',
    'Muscle Building',
    'Strength',
    'General Fitness',
    'Personal Training',
    'Other',
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number so we can reach you.');
      return;
    }
    if (formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    // Simulate instant secure processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Gym Bean Fitness Studio! My name is ${formData.name || 'Friend'}. I am interested in ${formData.goal || 'getting started with fitness training'} at your Egmore studio (Kamatchi Building, 140 Marshall Road / Rukmani Lakshmipathi Salai). Please share details.`;
    window.open(`https://wa.me/916385664871?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#031B36] via-[#063A78]/30 to-[#031B36] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#1687F5]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Direct Contact Links */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START YOUR TRANSFORMATION</span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95] mb-6">
              LET'S GET <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1687F5] via-[#38BDF8] to-white">
                STARTED.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#DCE7F5] leading-relaxed mb-8">
              Take the first step toward peak strength and energy. Fill out the quick form to claim a complimentary 1-day guest pass & personalized workout plan.
            </p>

            {/* Direct Phone Call Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-[#0759B8]/40 to-[#1687F5]/20 border border-[#1687F5]/40 mb-6">
              <div className="text-xs uppercase font-bold text-[#38BDF8] tracking-wider mb-1">
                PREFER TO SPEAK DIRECTLY?
              </div>
              <div className="flex items-center justify-between mt-2">
                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="font-display font-extrabold text-2xl sm:text-3xl text-white hover:text-[#38BDF8] transition-colors"
                >
                  {GYM_INFO.phone}
                </a>
                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="w-10 h-10 rounded-xl bg-[#1687F5] flex items-center justify-center text-white shadow-lg shadow-[#1687F5]/40 hover:scale-105 transition-transform"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
              <span className="text-[11px] text-[#DCE7F5]/80 mt-1 block">
                Direct desk line • 5:30 AM – 10:00 PM Mon-Sat
              </span>
            </div>

            {/* Quick WhatsApp Support Trigger */}
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600/80 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>CHAT ON WHATSAPP (+91 {GYM_INFO.phone})</span>
            </button>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/20 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-4 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase mb-2">
                    WELCOME TO GYM BEAN FITNESS!
                  </h3>
                  <p className="text-sm text-[#DCE7F5] max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. A master coach from our Egmore team will call or WhatsApp you at <strong className="text-[#38BDF8]">{formData.phone}</strong> shortly to schedule your orientation.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>OPEN WHATSAPP NOW</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="py-3 px-4 rounded-xl bg-white/10 text-[#DCE7F5] font-semibold text-xs uppercase hover:bg-white/15 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="font-display font-bold text-2xl text-white uppercase">
                      REQUEST MEMBERSHIP & FREE TRIAL
                    </h3>
                    <p className="text-xs text-[#DCE7F5]/70 mt-1">
                      No spam. No obligations. Experience the difference in person.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-400/40 text-xs text-rose-200 font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#DCE7F5] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sundaram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#1687F5] focus:bg-white/10 text-white placeholder-gray-400 text-sm focus:outline-none transition-all"
                    />
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#DCE7F5] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9840151814"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#1687F5] focus:bg-white/10 text-white placeholder-gray-400 text-sm focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#DCE7F5] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#1687F5] focus:bg-white/10 text-white placeholder-gray-400 text-sm focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Goal Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#DCE7F5] mb-1.5">
                      Your Fitness Goal *
                    </label>
                    <select
                      required
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#063A78] border border-white/20 focus:border-[#1687F5] text-white text-sm focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#031B36] text-gray-400">Select your goal</option>
                      {goalOptions.map((goal) => (
                        <option key={goal} value={goal} className="bg-[#031B36] text-white">
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#DCE7F5] mb-1.5">
                      Preferred Workout Time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        'Morning (5:30 AM - 10 AM)',
                        'Afternoon (11 AM - 4 PM)',
                        'Evening (5 PM - 10 PM)',
                      ].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredTime: slot })}
                          className={`py-2 px-2 rounded-lg text-[11px] font-semibold transition-all cursor-pointer text-center ${
                            formData.preferredTime === slot
                              ? 'bg-[#1687F5] text-white shadow-md'
                              : 'bg-white/5 text-[#DCE7F5]/80 border border-white/10 hover:bg-white/10'
                          }`}
                        >
                          {slot.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0759B8] via-[#1687F5] to-[#38BDF8] hover:from-[#1687F5] hover:to-[#0759B8] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl shadow-[#1687F5]/40 hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'PROCESSING...' : 'START MY FITNESS JOURNEY'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[11px] text-[#DCE7F5]/60">
                    By submitting, you agree to receive training updates & special membership offers via Call/WhatsApp.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
