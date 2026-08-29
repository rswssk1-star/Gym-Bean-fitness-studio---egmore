import { useState } from 'react';
import { ArrowUpRight, Phone, MessageSquare, Video, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeroProps {
  onOpenVideoModal: () => void;
  onOpenJoinModal: () => void;
}

export default function Hero({ onOpenVideoModal, onOpenJoinModal }: HeroProps) {
  const [trainerActionMsg, setTrainerActionMsg] = useState<string | null>(null);

  const handleTrainerAction = (type: 'message' | 'call' | 'video') => {
    if (type === 'message') {
      window.open(GYM_INFO.whatsappUrl, '_blank');
      setTrainerActionMsg('Opening WhatsApp with Alex Morgan...');
    } else if (type === 'call') {
      window.location.href = `tel:${GYM_INFO.phone}`;
      setTrainerActionMsg('Calling Alex Morgan...');
    } else {
      onOpenVideoModal();
      setTrainerActionMsg('Launching video overview...');
    }
    setTimeout(() => setTrainerActionMsg(null), 3200);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-24 pb-14 lg:pt-28 lg:pb-16 overflow-hidden flex flex-col justify-between bg-[#031B36]"
    >
      {/* ========================================================================= */}
      {/* LAYER 1: CINEMATIC ATMOSPHERIC BACKGROUND & VOLUMETRIC LIGHTING          */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Deep Multi-stop Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#062F5E] via-[#041F3F] to-[#031B36]" />

        {/* Primary Electric Center Flare & Backlight */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[550px] sm:h-[750px] lg:h-[950px] bg-[radial-gradient(ellipse_at_center,#1687F5_0%,#0759B8_38%,rgba(3,27,54,0)_72%)] opacity-60 blur-3xl" />

        {/* Core Hotspot Intense Bloom (Directly behind athlete's torso) */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] lg:w-[620px] h-[340px] sm:h-[480px] lg:h-[620px] bg-[radial-gradient(circle,#60A5FA_0%,#1687F5_45%,transparent_75%)] opacity-40 blur-2xl" />

        {/* Cyan Ambient Light Rays from Upper Center */}
        <div 
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1400px] h-[800px] opacity-25"
          style={{
            background: 'conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(56,189,248,0.3) 48%, rgba(22,135,245,0.4) 50%, rgba(56,189,248,0.3) 52%, transparent 60%)',
            filter: 'blur(30px)'
          }}
        />

        {/* High-Tech Concentric HUD Orbit Arcs */}
        <div className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[680px] lg:w-[920px] h-[480px] sm:h-[680px] lg:h-[920px] rounded-full border border-white/10" />
        <div className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] lg:w-[640px] h-[340px] sm:h-[480px] lg:h-[640px] rounded-full border border-cyan-400/15 border-dashed" />
        <div className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] sm:w-[900px] lg:w-[1240px] h-[640px] sm:h-[900px] lg:h-[1240px] rounded-full border border-[#1687F5]/20" />

        {/* Ambient Particle Specks & Energy Sparks */}
        <div className="absolute top-[28%] left-[22%] w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#38BDF8] animate-pulse" />
        <div className="absolute top-[35%] right-[24%] w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_14px_#60A5FA] animate-ping opacity-75" />
        <div className="absolute top-[62%] left-[18%] w-1.5 h-1.5 rounded-full bg-sky-200 shadow-[0_0_10px_#38BDF8]" />
        <div className="absolute top-[58%] right-[20%] w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_15px_#38BDF8] animate-pulse" />
        <div className="absolute top-[20%] left-[45%] w-1 h-1 rounded-full bg-white shadow-[0_0_8px_#FFF]" />

        {/* Vignette Edge Shading for Maximum Focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#031B36_98%)] opacity-85" />
      </div>

      {/* ========================================================================= */}
      {/* MAIN HERO CONTENT STAGE                                                   */}
      {/* ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between z-10">
        
        {/* Top Centered Status Pill */}
        <div className="flex items-center justify-center pt-1 pb-3 sm:pb-4 select-none">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-xs font-bold tracking-widest text-[#DCE7F5] uppercase shadow-lg shadow-black/20">
            <span className="w-2 h-2 rounded-full bg-[#1687F5] shadow-[0_0_8px_#1687F5] animate-ping" />
            <span className="text-[11px] sm:text-xs">HIGH PERFORMANCE STRENGTH & FITNESS</span>
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>

        {/* Central Dynamic Stage: Title Layer + Seamless Athlete + Flanking Widgets */}
        <div className="relative w-full flex-1 min-h-[600px] sm:min-h-[680px] lg:min-h-[760px] flex items-center justify-center">
          
          {/* ===================================================================== */}
          {/* LAYER 2: MASSIVE "STRONGER TOGETHER" CINEMATIC HEADLINE                */}
          {/* ===================================================================== */}
          <div className="absolute inset-0 top-1 sm:top-3 flex flex-col items-center justify-start text-center pointer-events-none select-none z-20">
            <h1
              id="hero-main-heading"
              className="font-display font-black tracking-tight uppercase leading-[0.80] text-center"
              style={{ fontSize: 'clamp(4.4rem, 13vw, 11.5rem)' }}
            >
              {/* Word 1: STRONGER */}
              <span 
                className="block text-white"
                style={{
                  textShadow: '0 8px 30px rgba(0, 0, 0, 0.9), 0 0 60px rgba(22, 135, 245, 0.4)',
                  filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.85))'
                }}
              >
                STRONGER
              </span>

              {/* Word 2: TOGETHER (Crisp, highly readable pure white with subtle cyan shadow) */}
              <span 
                className="block text-white"
                style={{
                  textShadow: '0 10px 40px rgba(0, 0, 0, 0.95), 0 0 70px rgba(22, 135, 245, 0.45)',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.9))'
                }}
              >
                TOGETHER
              </span>
            </h1>
          </div>

          {/* ===================================================================== */}
          {/* LAYER 3: ATHLETE FOREGROUND HERO SUBJECT (Seamless Cinematic Blending)*/}
          {/* ===================================================================== */}
          <div className="relative z-10 w-full max-w-[440px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[880px] xl:max-w-[980px] h-[520px] sm:h-[620px] md:h-[700px] lg:h-[780px] xl:h-[840px] flex items-end justify-center pointer-events-none mt-16 sm:mt-20">
            
            {/* Direct Silhouette Backlight Bloom */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-gradient-to-t from-[#1687F5]/50 via-[#0759B8]/30 to-transparent rounded-full blur-3xl transform scale-95 pointer-events-none" />

            {/* Seamless Masked Athlete Image with Smooth Soft Top & Side Transitions */}
            <div 
              className="relative w-full h-full flex items-end justify-center"
              style={{
                /* Completely remove any top rectangular edge so it never cuts across text */
                maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 12%, rgba(0,0,0,0.6) 24%, black 36%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 12%, rgba(0,0,0,0.6) 24%, black 36%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'destination-in',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=88&w=1500&auto=format&fit=crop"
                alt="Athletic runner sprinting forward in royal blue sportswear"
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-full object-contain object-bottom"
                style={{
                  filter: 'contrast(1.18) brightness(1.08) saturate(1.15) drop-shadow(0 0 50px rgba(22,135,245,0.5))',
                }}
              />
            </div>

            {/* Ground Atmosphere Blue Mist to anchor the subject */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full h-36 bg-gradient-to-t from-[#031B36] via-[#031B36]/80 to-transparent pointer-events-none z-15" />
          </div>

          {/* ===================================================================== */}
          {/* LAYER 4: LEFT FLOATING WIDGET (25K+ Members Community Pill)           */}
          {/* ===================================================================== */}
          <div
            id="hero-happy-members-card"
            className="absolute left-2 sm:left-4 lg:left-8 bottom-4 sm:bottom-8 lg:bottom-12 z-30 bg-[#041F3F]/85 hover:bg-[#062F5E]/90 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl shadow-black/60 flex flex-col gap-2.5 max-w-[210px] sm:max-w-[245px] transition-all duration-300 hover:scale-105"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white leading-none tracking-tight">25K+</div>
              <div className="text-xs font-medium text-[#DCE7F5] mt-1 flex items-center gap-1.5">
                <span>Happy Members</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
            
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2 pt-0.5">
              <img
                className="w-8 h-8 rounded-full border-2 border-[#041F3F] object-cover ring-1 ring-white/20"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                alt="Member"
                referrerPolicy="no-referrer"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-[#041F3F] object-cover ring-1 ring-white/20"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                alt="Member"
                referrerPolicy="no-referrer"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-[#041F3F] object-cover ring-1 ring-white/20"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop"
                alt="Member"
                referrerPolicy="no-referrer"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-[#041F3F] object-cover ring-1 ring-white/20"
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop"
                alt="Member"
                referrerPolicy="no-referrer"
              />
              <div className="w-8 h-8 rounded-full border-2 border-[#041F3F] bg-[#1687F5] flex items-center justify-center text-[11px] font-black text-white shadow-md">
                +
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* LAYER 4: RIGHT FLOATING WIDGETS (Narrative CTA & Trainer Alex Morgan) */}
          {/* ===================================================================== */}
          
          {/* Right Subtitle & "Start Your Journey" CTA Button (Right Mid - Brought down to prevent clashing with headline) */}
          <div className="absolute right-2 sm:right-4 lg:right-8 top-[48%] sm:top-[50%] lg:top-[52%] -translate-y-1/2 z-30 flex flex-col items-start lg:items-end text-left lg:text-right max-w-[210px] sm:max-w-[280px] gap-3">
            {/* 5-Star Rating Ribbon */}
            <div className="flex items-center gap-1.5 bg-[#031B36]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white ml-1">{GYM_INFO.rating}</span>
              <span className="text-[10px] text-white/70">({GYM_INFO.reviewCount})</span>
            </div>

            {/* Narrative text with subtle background protection for readability */}
            <div className="bg-[#031B36]/60 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-white/10 shadow-lg">
              <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                Personalized fitness plans, expert coaching, and measurable results.
              </p>
            </div>

            {/* Primary Action Button */}
            <button
              id="hero-start-journey-btn"
              type="button"
              onClick={onOpenJoinModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1687F5] hover:bg-[#1270cc] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#1687F5]/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Start Your Journey</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trainer Card: Alex Morgan (Strength Coach) (Bottom Right) */}
          <div
            id="hero-trainer-alex-morgan"
            className="absolute right-2 sm:right-4 lg:right-8 bottom-4 sm:bottom-8 lg:bottom-12 z-30 bg-[#041F3F]/85 hover:bg-[#062F5E]/90 backdrop-blur-2xl border border-white/20 p-3.5 sm:p-4 rounded-3xl shadow-2xl shadow-black/60 flex flex-col gap-3 min-w-[210px] sm:min-w-[245px] transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=200&auto=format&fit=crop"
                alt="Trainer Alex Morgan"
                referrerPolicy="no-referrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl object-cover ring-2 ring-[#1687F5]/80 shadow-md"
              />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-[#DCE7F5] uppercase font-semibold tracking-wide">Your Trainer</span>
                <span className="text-sm sm:text-base font-bold text-white leading-tight">Alex Morgan</span>
                <span className="text-[11px] text-cyan-400 font-medium">Strength Coach</span>
              </div>
            </div>

            {/* Quick Interactive Trainer Action Icons: WhatsApp Chat, Video Intro, Direct Call */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/15">
              <button
                type="button"
                onClick={() => handleTrainerAction('message')}
                aria-label="Chat with Alex Morgan on WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1687F5] flex items-center justify-center text-white transition-all hover:scale-110 cursor-pointer shadow-sm"
                title="WhatsApp Chat"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleTrainerAction('video')}
                aria-label="Video Call or Intro with Alex Morgan"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1687F5] flex items-center justify-center text-white transition-all hover:scale-110 cursor-pointer shadow-sm"
                title="Video Intro"
              >
                <Video className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleTrainerAction('call')}
                aria-label="Phone Call Alex Morgan"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1687F5] flex items-center justify-center text-white transition-all hover:scale-110 cursor-pointer shadow-sm"
                title="Direct Phone Call"
              >
                <Phone className="w-4 h-4" />
              </button>
            </div>

            {trainerActionMsg && (
              <div className="text-[10px] text-cyan-300 font-medium text-center animate-in fade-in">
                {trainerActionMsg}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}


