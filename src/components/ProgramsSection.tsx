import { useState } from 'react';
import { ArrowUpRight, Dumbbell, Sparkles, Check, Info } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';
import { Program } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onOpenJoinModal: () => void;
}

export default function ProgramsSection({ onSelectProgram, onOpenJoinModal }: ProgramsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredPrograms = activeTab === 'all'
    ? PROGRAMS
    : PROGRAMS.filter((p) => {
        if (activeTab === 'strength') return p.id.includes('strength') || p.id.includes('personal');
        if (activeTab === 'loss') return p.id.includes('loss') || p.id.includes('cardio');
        if (activeTab === 'functional') return p.id.includes('functional') || p.id.includes('general');
        return true;
      });

  return (
    <section id="programs" className="relative py-24 bg-[#031B36] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0759B8]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#1687F5]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1687F5]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#38BDF8]">
                TRANSFORMATION BLUEPRINT
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              BUILT FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1687F5] via-[#38BDF8] to-white">
                YOUR GOALS.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#DCE7F5] max-w-md">
            Whether you want to build raw barbell strength, torch body fat, or optimize everyday mobility, our structured programs deliver measurable, sustainable results.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Programs' },
            { id: 'strength', label: 'Strength & Muscle' },
            { id: 'loss', label: 'Fat Loss & HIIT' },
            { id: 'functional', label: 'Mobility & Wellness' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#0759B8] to-[#1687F5] text-white shadow-lg shadow-[#1687F5]/30'
                  : 'bg-white/5 hover:bg-white/10 text-[#DCE7F5] border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              onClick={() => onSelectProgram(program)}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#063A78]/40 to-[#031B36]/80 border border-white/15 hover:border-[#1687F5]/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1687F5]/30 flex flex-col cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={`${program.title} at RIO Fitness`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark & Blue Atmospheric Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031B36] via-[#031B36]/50 to-transparent" />

                {/* Program Tag Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#031B36]/85 border border-white/20 text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    {program.tag}
                  </span>
                </div>

                {/* Floating Interactive Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#1687F5] border border-white/20 flex items-center justify-center text-white backdrop-blur-md group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Subtitle pill at bottom of image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#38BDF8]">
                    {program.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DCE7F5]/85 leading-relaxed mb-4 line-clamp-3">
                    {program.description}
                  </p>
                </div>

                {/* Card Footer Feature Highlights */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#DCE7F5]/70">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#1687F5]" />
                    {program.fullDetails.duration}
                  </span>
                  <span className="text-[11px] font-bold text-[#38BDF8] group-hover:underline flex items-center gap-1">
                    Explore Details <Info className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Subtle Blue Glow Rim on Hover */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-[#1687F5]/50 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Custom Advice Callout */}
        <div className="mt-16 p-8 rounded-3xl glass-panel border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0759B8] to-[#1687F5] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#1687F5]/40">
              <Dumbbell className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-white uppercase">
                Not sure which program fits your goals?
              </h4>
              <p className="text-xs sm:text-sm text-[#DCE7F5]/80">
                Book a complimentary 15-minute consultation with a Gym Bean Fitness Studio master coach in Egmore.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenJoinModal}
            className="px-6 py-3 rounded-full bg-white text-[#031B36] hover:bg-[#DCE7F5] font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
          >
            GET COACH CONSULTATION
          </button>
        </div>

      </div>
    </section>
  );
}
