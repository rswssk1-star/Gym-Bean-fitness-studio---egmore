import { Target, Users, Zap, Calendar, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { WHY_RIO_FEATURES, GYM_INFO } from '../data/gymData';

interface WhyRioSectionProps {
  onOpenJoinModal: () => void;
}

export default function WhyRioSection({ onOpenJoinModal }: WhyRioSectionProps) {
  const iconMap: Record<string, typeof Target> = {
    '01': Target,
    '02': Users,
    '03': Zap,
    '04': Calendar,
  };

  return (
    <section id="why-rio" className="relative py-24 bg-gradient-to-b from-[#031B36] via-[#063A78]/30 to-[#031B36] overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0759B8]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE GYM BEAN FITNESS ADVANTAGE</span>
          </div>
          
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight mb-4">
            WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1687F5] via-[#38BDF8] to-white">GYM BEAN FITNESS?</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#DCE7F5] leading-relaxed">
            We tore down everything broken about ordinary gyms to build Egmore's highest-standard strength and fitness powerhouse.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_RIO_FEATURES.map((feature) => {
            const Icon = iconMap[feature.number] || Target;
            return (
              <div
                key={feature.number}
                className="group relative p-8 rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#1687F5]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Number & Icon Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-4xl sm:text-5xl text-white/20 group-hover:text-[#1687F5] transition-colors">
                      {feature.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#0759B8]/40 border border-white/15 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#1687F5] group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-3 group-hover:text-[#38BDF8] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#DCE7F5]/85 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1687F5]" />
                  <span className="text-[11px] font-semibold text-[#DCE7F5]/70 uppercase tracking-wider">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Proof Metrics Row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-6 rounded-2xl glass-panel border border-white/15">
            <div className="font-display font-black text-3xl sm:text-4xl text-white mb-1">
              {GYM_INFO.rating} ★
            </div>
            <div className="text-xs font-semibold text-[#DCE7F5]/80 uppercase tracking-wider">
              {GYM_INFO.reviewCount}
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/15">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#38BDF8] mb-1">
              500+
            </div>
            <div className="text-xs font-semibold text-[#DCE7F5]/80 uppercase tracking-wider">
              Active Chennai Members
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/15">
            <div className="font-display font-black text-3xl sm:text-4xl text-white mb-1">
              100%
            </div>
            <div className="text-xs font-semibold text-[#DCE7F5]/80 uppercase tracking-wider">
              Air-Conditioned Floor
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/15">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#38BDF8] mb-1">
              16 Hrs
            </div>
            <div className="text-xs font-semibold text-[#DCE7F5]/80 uppercase tracking-wider">
              Daily Access (5:30 AM - 10 PM)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
