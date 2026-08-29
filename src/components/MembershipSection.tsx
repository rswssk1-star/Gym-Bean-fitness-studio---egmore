import { useState } from 'react';
import { ArrowUpRight, Phone, Check, Sparkles, Shield, Clock, HelpCircle, MessageSquare } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface MembershipSectionProps {
  onOpenJoinModal: (planName?: string) => void;
}

export default function MembershipSection({ onOpenJoinModal }: MembershipSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>('Quarterly Pass');

  const tiers = [
    {
      name: 'Monthly Pass',
      badge: 'Flexible',
      description: 'Ideal for trial periods and short-term workout goals.',
      features: [
        'Full Gym & Cardio Floor Access',
        'Locker & Shower Amenities',
        'General Fitness Guidance',
        'Daily Operating Hours (5:30 AM - 10 PM)'
      ],
      popular: false,
    },
    {
      name: 'Quarterly Pass',
      badge: 'Most Popular',
      description: 'The golden standard for establishing consistent, transformative habits.',
      features: [
        'Everything in Monthly Pass',
        'Free 1-on-1 Trainer Assessment',
        'Custom Diet & Protein Blueprint',
        'Body Composition Tracking'
      ],
      popular: true,
    },
    {
      name: 'Annual Elite Pass',
      badge: 'Best Value',
      description: 'Complete 365-day dedication to your peak physical lifestyle.',
      features: [
        'Everything in Quarterly Pass',
        'Priority Trainer Consultation',
        'Quarterly Body Recomposition Reviews',
        'Complimentary Guest Passes'
      ],
      popular: false,
    }
  ];

  return (
    <section id="membership" className="relative py-24 bg-gradient-to-b from-[#031B36] via-[#063A78]/40 to-[#031B36] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1687F5]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT MEMBERSHIP OPTIONS</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight uppercase leading-[0.9] mb-4">
            YOUR NEXT LEVEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1687F5] via-[#38BDF8] to-white">
              STARTS HERE.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#DCE7F5] font-medium max-w-xl mx-auto mb-2">
            Ready to make fitness part of your lifestyle?
          </p>
          <p className="text-xs text-[#DCE7F5]/70 uppercase tracking-widest font-semibold">
            Contact us for membership options & exclusive seasonal offers.
          </p>
        </div>

        {/* Membership Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'bg-gradient-to-b from-[#0759B8]/70 via-[#063A78]/80 to-[#031B36] border-2 border-[#1687F5] shadow-2xl shadow-[#1687F5]/30 md:-translate-y-2'
                  : 'bg-white/[0.04] border border-white/15 hover:border-white/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#1687F5] to-[#38BDF8] text-[#031B36] text-[10px] font-extrabold uppercase tracking-widest shadow-lg">
                  {tier.badge}
                </div>
              )}

              <div>
                {!tier.popular && (
                  <div className="inline-block px-3 py-0.5 rounded-full bg-white/10 text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider mb-3">
                    {tier.badge}
                  </div>
                )}

                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-[#DCE7F5]/80 mb-6">
                  {tier.description}
                </p>

                {/* Clear Pricing Note */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-6 text-center">
                  <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block">
                    Flexible Pricing
                  </span>
                  <span className="text-[11px] text-[#DCE7F5]/70">
                    Contact us for current seasonal rates & offers
                  </span>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#DCE7F5]">
                      <div className="w-4 h-4 rounded-full bg-[#1687F5]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#38BDF8]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onOpenJoinModal(tier.name)}
                className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  tier.popular
                    ? 'bg-white text-[#031B36] hover:bg-[#DCE7F5] shadow-xl hover:scale-[1.02]'
                    : 'bg-[#1687F5]/30 hover:bg-[#1687F5] text-white border border-[#1687F5]/50'
                }`}
              >
                <span>INQUIRE ABOUT {tier.name.split(' ')[0]}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Primary Conversion Callout Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0759B8] via-[#063A78] to-[#031B36] border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-2">
              READY TO COMMIT TO YOUR BEST SELF?
            </h3>
            <p className="text-sm text-[#DCE7F5] max-w-xl">
              Visit Gym Bean Fitness Studio in Egmore today for an in-person orientation and body assessment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => onOpenJoinModal('General Membership')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#031B36] hover:bg-[#DCE7F5] font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 transition-all cursor-pointer"
            >
              <span>JOIN GYM BEAN FITNESS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${GYM_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <Phone className="w-4 h-4 text-[#38BDF8]" />
              <span>CALL {GYM_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
