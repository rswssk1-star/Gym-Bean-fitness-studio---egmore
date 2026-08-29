import { X, Check, ArrowUpRight, Clock, Target, Calendar, Dumbbell } from 'lucide-react';
import { Program } from '../types';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onSelectForInquiry: (programName: string) => void;
}

export default function ProgramModal({ program, onClose, onSelectForInquiry }: ProgramModalProps) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#031B36] border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close program modal"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Header Image Strip */}
          <div className="relative h-48 sm:h-56 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 rounded-t-3xl overflow-hidden">
            <img
              src={program.image}
              alt={program.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031B36] via-[#031B36]/60 to-transparent" />
            
            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-[#1687F5] text-white text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                {program.category}
              </span>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase leading-none">
                {program.title}
              </h3>
            </div>
          </div>

          {/* Subtitle & Description */}
          <p className="text-sm font-semibold text-[#38BDF8] mb-2 uppercase tracking-wide">
            {program.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#DCE7F5] leading-relaxed mb-6">
            {program.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-center">
            <div>
              <div className="text-[10px] uppercase font-bold text-gray-400">Duration</div>
              <div className="font-display font-bold text-sm text-white">{program.fullDetails.duration}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-gray-400">Intensity</div>
              <div className="font-display font-bold text-sm text-[#38BDF8]">{program.fullDetails.intensity}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-gray-400">Frequency</div>
              <div className="font-display font-bold text-sm text-white">{program.fullDetails.scheduleFrequency}</div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-2.5">
              Key Focus Areas
            </div>
            <div className="flex flex-wrap gap-2">
              {program.fullDetails.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Included Program Benefits */}
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-2.5">
              What's Included in This Program
            </div>
            <div className="space-y-2">
              {program.fullDetails.includedBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#DCE7F5]">
                  <div className="w-4 h-4 rounded-full bg-[#1687F5]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#38BDF8]" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectForInquiry(program.title);
            }}
            className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0759B8] via-[#1687F5] to-[#38BDF8] hover:from-[#1687F5] hover:to-[#0759B8] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#1687F5]/40 cursor-pointer"
          >
            <span>ENROLL IN {program.title}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
