import { useState } from 'react';
import { Phone, MessageSquare, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { TRAINERS, GYM_INFO } from '../data/gymData';
import { Trainer } from '../types';

interface TrainersSectionProps {
  onBookTrainer: (trainer: Trainer) => void;
}

export default function TrainersSection({ onBookTrainer }: TrainersSectionProps) {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <section id="trainers" className="relative py-24 bg-[#031B36] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0759B8]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#1687F5]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1687F5]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#38BDF8]">
                ELITE COACHING MASTERY
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              MEET YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1687F5] via-[#38BDF8] to-white">
                FITNESS TEAM.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#DCE7F5] max-w-md">
            Our certified master trainers bring sports science credentials, relentless energy, and personalized accountability to every single workout.
          </p>
        </div>

        {/* Trainer 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#063A78]/30 to-[#031B36]/90 border border-white/15 hover:border-[#1687F5]/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1687F5]/25 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.role} at Gym Bean Fitness Studio`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transform group-hover:scale-108 transition-transform duration-700"
                />
                
                {/* Gradient Rim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031B36] via-[#031B36]/40 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#031B36]/80 border border-white/20 text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    {trainer.experience}
                  </span>
                </div>

                {/* Quick Chat Bubble Icon */}
                <a
                  href={`https://wa.me/916385664871?text=Hi%20Gym%20Bean%20Fitness%20Studio,%20I%20would%20like%20to%20train%20with%20coach%20${encodeURIComponent(trainer.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Chat with ${trainer.name}`}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-[#1687F5] border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>

                {/* Name & Role overlay on image bottom */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                    {trainer.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider">
                    {trainer.role}
                  </div>
                </div>
              </div>

              {/* Bio & Specialties */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#DCE7F5]/80 leading-relaxed mb-4">
                    {trainer.bio}
                  </p>

                  {/* Specialty Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {trainer.specialty.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium text-[#DCE7F5]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trainer Action Button */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onBookTrainer(trainer)}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#0759B8] to-[#1687F5] hover:from-[#1687F5] hover:to-[#0759B8] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Train with {trainer.name.split(' ')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
