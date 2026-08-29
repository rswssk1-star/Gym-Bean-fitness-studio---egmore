import { Dumbbell, Phone, MapPin, Star, ArrowUpRight, Instagram, Facebook, Youtube } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="relative bg-[#021326] border-t border-white/10 pt-16 pb-12 text-[#DCE7F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Tagline (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0759B8] to-[#1687F5] flex items-center justify-center shadow-lg text-white">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-white uppercase">
                GYM BEAN <span className="text-[#1687F5]">FITNESS</span>
              </span>
            </div>

            <p className="font-display text-lg text-white font-medium tracking-wide mb-3 italic">
              "{GYM_INFO.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-[#DCE7F5]/80 leading-relaxed mb-6 max-w-sm">
              Egmore's premier strength, conditioning, and transformation fitness studio. Designed for results, powered by science.
            </p>

            {/* Rating Tag */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 w-fit">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-display font-bold text-sm text-white">{GYM_INFO.rating} ★</span>
              <span className="text-xs text-[#DCE7F5]/70">{GYM_INFO.reviewCount}</span>
            </div>
          </div>

          {/* Quick Nav Links (Col 6-8) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Programs', href: '#programs' },
                { name: 'Why Us', href: '#why-rio' },
                { name: 'Membership', href: '#membership' },
                { name: 'Trainers', href: '#trainers' },
                { name: 'About', href: '#about' },
                { name: 'Location', href: '#location' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="hover:text-[#1687F5] transition-colors flex items-center gap-1.5"
                  >
                    <span>•</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Info & Location (Col 9-12) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4">
              EGMORE LOCATION
            </h4>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1687F5] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  BUILDING, 3rd floor 140,<br />
                  Rukmani Lakshmipathi Salai (Marshall Road),<br />
                  Kamatchi Building, Egmore, Chennai,<br />
                  Tamil Nadu 600008<br />
                  <span className="text-[#38BDF8] font-semibold">Plus Code: 37C6+F8 Chennai</span>
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1687F5] shrink-0" />
                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="font-bold text-white hover:text-[#38BDF8] transition-colors"
                >
                  {GYM_INFO.phone}
                </a>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 mt-2">
                <div className="font-bold text-white text-[11px] uppercase mb-1">
                  Working Hours
                </div>
                <div className="text-[11px] text-[#DCE7F5]/80">
                  Mon – Sat: 5:30 AM – 10:00 PM<br />
                  Sun: 6:00 AM – 1:00 PM
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Local SEO Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCE7F5]/60">
          <div>
            © 2026 Gym Bean Fitness Studio - Egmore. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Gym in Egmore</span>
            <span>•</span>
            <span>Fitness Center Chennai</span>
            <span>•</span>
            <span>Personal Training Egmore</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
