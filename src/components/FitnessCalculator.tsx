import { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, Flame, Scale, Activity } from 'lucide-react';

interface FitnessCalculatorProps {
  onSelectRecommendedProgram: (programName: string) => void;
}

export default function FitnessCalculator({ onSelectRecommendedProgram }: FitnessCalculatorProps) {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<number>(72);
  const [height, setHeight] = useState<number>(174);
  const [age, setAge] = useState<number>(26);
  const [goal, setGoal] = useState<'loss' | 'muscle' | 'strength' | 'general'>('muscle');

  // Simple scientific calculations
  const heightInMeters = height / 100;
  const bmi = +(weight / (heightInMeters * heightInMeters)).toFixed(1);

  // Basal Metabolic Rate (Mifflin-St Jeor)
  const bmr = gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  // Target maintenance calories with moderate activity factor 1.45
  const maintenance = Math.round(bmr * 1.45);

  let targetCalories = maintenance;
  let targetProtein = Math.round(weight * 1.8);
  let recommendedProgram = 'STRENGTH TRAINING';

  if (goal === 'loss') {
    targetCalories = maintenance - 450;
    targetProtein = Math.round(weight * 2.0);
    recommendedProgram = 'FAT LOSS & METABOLIC HIIT';
  } else if (goal === 'muscle') {
    targetCalories = maintenance + 300;
    targetProtein = Math.round(weight * 2.0);
    recommendedProgram = 'STRENGTH & HYPERTROPHY';
  } else if (goal === 'strength') {
    targetCalories = maintenance + 150;
    targetProtein = Math.round(weight * 2.2);
    recommendedProgram = 'POWERLIFTING & STRENGTH';
  } else {
    targetCalories = maintenance;
    targetProtein = Math.round(weight * 1.6);
    recommendedProgram = 'GENERAL FITNESS & MOBILITY';
  }

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { text: 'Underweight', color: 'text-amber-400' };
    if (val < 24.9) return { text: 'Optimal Range', color: 'text-emerald-400' };
    if (val < 29.9) return { text: 'Overweight', color: 'text-amber-400' };
    return { text: 'High Bodyfat', color: 'text-rose-400' };
  };

  const bmiStatus = getBmiCategory(bmi);

  return (
    <section className="relative py-20 bg-[#031B36] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE TOOL</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            CALCULATE YOUR TARGETS
          </h2>
          <p className="text-xs sm:text-sm text-[#DCE7F5]/80 mt-2">
            Get instant estimates for daily caloric baseline, protein requirements, and ideal Gym Bean training program.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Controls Input Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-white/15">
            
            {/* Gender Toggle */}
            <div className="flex items-center gap-3 mb-6">
              <label className="text-xs font-bold uppercase text-[#DCE7F5] tracking-wider w-20">Gender</label>
              <div className="flex gap-2 flex-1">
                {(['male', 'female'] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      gender === g
                        ? 'bg-gradient-to-r from-[#0759B8] to-[#1687F5] text-white shadow-md'
                        : 'bg-white/5 text-[#DCE7F5] border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-5">
              {/* Weight */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold uppercase text-[#DCE7F5] mb-2">
                  <span>Current Weight</span>
                  <span className="text-[#38BDF8] text-sm font-display">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="140"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#1687F5]"
                />
              </div>

              {/* Height */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold uppercase text-[#DCE7F5] mb-2">
                  <span>Height</span>
                  <span className="text-[#38BDF8] text-sm font-display">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="210"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#1687F5]"
                />
              </div>

              {/* Age */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold uppercase text-[#DCE7F5] mb-2">
                  <span>Age</span>
                  <span className="text-[#38BDF8] text-sm font-display">{age} years</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="70"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#1687F5]"
                />
              </div>

              {/* Fitness Goal */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#DCE7F5] mb-2">Primary Goal</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'loss', label: 'Fat Loss' },
                    { id: 'muscle', label: 'Muscle Gain' },
                    { id: 'strength', label: 'Raw Strength' },
                    { id: 'general', label: 'General Fitness' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id as typeof goal)}
                      className={`p-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-left ${
                        goal === item.id
                          ? 'bg-[#1687F5] text-white shadow-md'
                          : 'bg-white/5 text-[#DCE7F5]/80 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#063A78] to-[#031B36] border-2 border-[#1687F5]/60 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                <span className="text-xs uppercase font-bold text-[#38BDF8] tracking-wider">YOUR METRIC SUMMARY</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                  Personalized
                </span>
              </div>

              {/* BMI & Status */}
              <div className="mb-6">
                <div className="text-xs text-[#DCE7F5]/70 uppercase font-semibold">Body Mass Index (BMI)</div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-display font-extrabold text-4xl text-white">{bmi}</span>
                  <span className={`text-xs font-bold ${bmiStatus.color}`}>• {bmiStatus.text}</span>
                </div>
              </div>

              {/* Target Calories & Protein Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>DAILY CALORIES</span>
                  </div>
                  <div className="font-display font-bold text-2xl text-white">{targetCalories}</div>
                  <div className="text-[10px] text-[#DCE7F5]/60">kcal / day estimate</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-[#38BDF8] font-semibold mb-1">
                    <Scale className="w-3.5 h-3.5" />
                    <span>TARGET PROTEIN</span>
                  </div>
                  <div className="font-display font-bold text-2xl text-white">{targetProtein}g</div>
                  <div className="text-[10px] text-[#DCE7F5]/60">grams / day estimate</div>
                </div>
              </div>

              {/* Recommendation Callout */}
              <div className="p-4 rounded-2xl bg-[#0759B8]/40 border border-white/15 mb-6">
                <div className="text-[10px] uppercase font-bold text-[#38BDF8] tracking-wider mb-1">
                  RECOMMENDED PROGRAM
                </div>
                <div className="font-display font-bold text-lg text-white uppercase">
                  {recommendedProgram}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectRecommendedProgram(recommendedProgram)}
              className="w-full py-3.5 rounded-xl bg-white text-[#031B36] hover:bg-[#DCE7F5] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>DISCUSS THIS PLAN WITH A COACH</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
