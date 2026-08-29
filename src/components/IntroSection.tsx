import { Check, Flame, Shield, Trophy, Activity, ArrowRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface IntroSectionProps {
  onOpenJoinModal: () => void;
}

export default function IntroSection({ onOpenJoinModal }: IntroSectionProps) {
  const highlights = [
    {
      icon: Trophy,
      title: 'Science-Backed Protocols',
      desc: 'Workouts designed on progressive overload and biomechanical safety, not arbitrary exhaustion.'
    },
    {
      icon: Shield,
      title: 'Premium International Equipment',
      desc: 'Heavy-duty power cages, calibrated plates, functional rigs, and high-performance cardio machines.'
    },
    {
      icon: Activity,
      title: 'Real-Time Progress Tracking',
      desc: 'Periodic body composition assessments and personalized milestone checkpoints.'
    },
    {
      icon: Flame,
      title: 'Electric & Motivating Culture',
      desc: 'An inspiring, supportive atmosphere with 500+ active members lifting each other up.'
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#031B36] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0759B8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1687F5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-0.5 w-8 bg-[#1687F5]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#38BDF8]">
            GYM BEAN FITNESS STUDIO • EGMORE • CHENNAI
          </span>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95] mb-6">
              TRAIN WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1687F5] via-[#38BDF8] to-white">
                PURPOSE.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#DCE7F5] leading-relaxed mb-8 max-w-2xl">
              Gym Bean Fitness Studio Egmore is built for people who want more from their training. Whether your goal is strength, fitness, conditioning, or a healthier lifestyle, train in an environment designed to keep you moving forward.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#1687F5]/40 hover:bg-white/[0.07] transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0759B8]/40 border border-[#1687F5]/30 flex items-center justify-center text-[#38BDF8] mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#DCE7F5]/80 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0759B8] to-[#1687F5] hover:from-[#1687F5] hover:to-[#0759B8] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#1687F5]/30 hover:scale-105 transition-all cursor-pointer"
              >
                <span>BOOK A FREE GYM TOUR</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${GYM_INFO.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <span>CALL {GYM_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Large Editorial Fitness Image & Stats Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Border Box */}
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-[#031B36]">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"
                  alt="Gym Bean Fitness Studio training floor in Egmore Chennai"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031B36] via-transparent to-transparent opacity-80" />

                {/* Bottom Card Overlay inside Image */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl glass-panel border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#38BDF8] tracking-wider">
                        EGMORE FACILITY
                      </div>
                      <div className="font-display font-bold text-sm sm:text-base text-white">
                        Kamatchi Building, 140 Marshall Road
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#1687F5] flex items-center justify-center text-white font-bold text-[10px] text-center px-1">
                      GB
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-[11px] text-[#DCE7F5]/90 pt-2 border-t border-white/10">
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Mon-Sat: 5:30AM-10PM
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Sunday Access
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-tr from-[#0759B8] to-[#1687F5] p-3.5 rounded-2xl border border-white/30 shadow-xl shadow-[#1687F5]/40 flex items-center gap-2.5">
                <Flame className="w-5 h-5 text-amber-300" />
                <div className="text-left">
                  <div className="font-display text-sm font-bold text-white uppercase leading-none">
                    {GYM_INFO.rating} RATING
                  </div>
                  <div className="text-[9px] text-[#DCE7F5] font-semibold">
                    {GYM_INFO.reviewCount}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
