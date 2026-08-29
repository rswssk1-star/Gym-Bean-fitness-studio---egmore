import { MapPin, Phone, Clock, Navigation, Check, Train, Car } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function LocationSection() {
  return (
    <section id="location" className="relative py-24 bg-[#031B36] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0759B8]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1687F5]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#38BDF8]">
                LOCATION & ACCESSIBILITY
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              FIND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1687F5] via-[#38BDF8] to-white">
                GYM BEAN FITNESS.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#DCE7F5] max-w-md">
            Conveniently situated at Kamatchi Building, 140 Rukmani Lakshmipathi Salai (Marshall Road) in Egmore, Chennai (Plus Code: 37C6+F8).
          </p>
        </div>

        {/* Split Grid: Details Card + Map Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-white/20 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1687F5] flex items-center justify-center text-white shadow-lg shadow-[#1687F5]/40">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight">
                    GYM BEAN FITNESS
                  </h3>
                  <span className="text-xs text-[#38BDF8] font-semibold uppercase tracking-wider">
                    Egmore • Chennai
                  </span>
                </div>
              </div>

              {/* Address details */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div className="text-xs uppercase font-bold text-[#DCE7F5]/70 mb-1">Physical Address</div>
                <p className="text-sm font-medium text-white leading-relaxed">
                  BUILDING, 3rd floor 140,<br />
                  Rukmani Lakshmipathi Salai (Marshall Road),<br />
                  Kamatchi Building, Egmore, Chennai,<br />
                  Tamil Nadu 600008
                </p>
                <div className="mt-2 text-xs font-semibold text-[#38BDF8]">
                  Plus Code: 37C6+F8 Chennai, Tamil Nadu
                </div>
              </div>

              {/* Operating Hours */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  <Clock className="w-4 h-4" />
                  <span>OPERATING HOURS</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm py-2 border-b border-white/10 text-[#DCE7F5]">
                  <span>Monday – Saturday:</span>
                  <span className="font-bold text-white">{GYM_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm py-2 border-b border-white/10 text-[#DCE7F5]">
                  <span>Sunday:</span>
                  <span className="font-bold text-white">{GYM_INFO.hours.sunday}</span>
                </div>
              </div>

              {/* Transit & Landmarks */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-xs text-[#DCE7F5]/90">
                  <Train className="w-4 h-4 text-[#1687F5] shrink-0" />
                  <span>Kamatchi Building, Marshall Road, Egmore</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#DCE7F5]/90">
                  <Car className="w-4 h-4 text-[#1687F5] shrink-0" />
                  <span>Dedicated Two-Wheeler & Nearby Parking</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0759B8] to-[#1687F5] hover:from-[#1687F5] hover:to-[#0759B8] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#1687F5]/30 hover:scale-[1.02] transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ↗</span>
              </a>

              <a
                href={`tel:${GYM_INFO.phone}`}
                className="flex-1 py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                <span>CALL {GYM_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Map Visual Box */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative min-h-[400px] lg:min-h-[500px] flex flex-col bg-[#063A78]/30">
            {/* Embedded Responsive Google Map */}
            <iframe
              title="Gym Bean Fitness Studio Location in Egmore Chennai"
              src="https://maps.google.com/maps?q=140+Rukmani+Lakshmipathi+Salai+Kamatchi+Building+Egmore+Chennai+Tamil+Nadu+600008&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] flex-1 border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom Overlay Pill on Map */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel border border-white/20 flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Open Today: {GYM_INFO.hours.weekdays}
                </span>
              </div>
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#38BDF8] hover:text-white uppercase tracking-wider flex items-center gap-1 underline underline-offset-4"
              >
                <span>Open in Google Maps App</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
