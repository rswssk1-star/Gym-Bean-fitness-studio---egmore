import { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, ArrowUpRight, Dumbbell } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenJoinModal: () => void;
}

export default function VideoModal({ isOpen, onClose, onOpenJoinModal }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#031B36] border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-[#021326]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1687F5] flex items-center justify-center text-white">
              <Dumbbell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white uppercase leading-none">
                GYM BEAN FITNESS EXPERIENCE
              </h3>
              <span className="text-[10px] text-[#38BDF8] font-semibold uppercase tracking-wider">
                Egmore • Chennai
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Video"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Stage / Visual Player Area */}
        <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center group">
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            src="https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-a-gym-42777-large.mp4"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#031B36] via-transparent to-transparent opacity-60" />

          {/* Floating On-Screen Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/15">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-lg bg-[#1687F5] flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 text-[#DCE7F5] hover:text-white transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-xs font-semibold text-white uppercase tracking-wider hidden sm:inline">
                HIGH PERFORMANCE TRAINING FLOOR
              </span>
            </div>

            <div className="text-[11px] text-[#38BDF8] font-bold uppercase tracking-wider">
              GYM BEAN FITNESS EGMORE
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-4 sm:p-6 bg-[#021326] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white uppercase">
              Ready to feel this energy in real life?
            </div>
            <div className="text-xs text-[#DCE7F5]/70">
              Claim your 1-day complimentary workout pass at Gym Bean Fitness Studio Egmore.
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenJoinModal();
              }}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-[#0759B8] via-[#1687F5] to-[#38BDF8] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>CLAIM FREE PASS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
