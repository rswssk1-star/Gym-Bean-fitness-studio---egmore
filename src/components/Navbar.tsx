import { useState, useEffect, MouseEvent } from 'react';
import { Phone, Menu, X, ArrowUpRight, Dumbbell } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenJoinModal?: () => void;
}

export default function Navbar({ onOpenJoinModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#programs' },
    { label: 'Why Us', href: '#why-rio' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Membership', href: '#membership' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#031B36]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="brand-logo"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0759B8] via-[#1687F5] to-[#38BDF8] flex items-center justify-center shadow-lg shadow-[#1687F5]/30 group-hover:scale-105 transition-transform duration-200">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white uppercase leading-none">
                GYM BEAN <span className="text-[#1687F5]">FITNESS</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#DCE7F5]/70 uppercase font-medium">
                Egmore • Chennai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-1.5 text-sm font-medium text-[#DCE7F5] hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-call-btn"
              href={`tel:${GYM_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#1687F5]" />
              <span>CALL {GYM_INFO.phone}</span>
            </a>

            <button
              id="nav-join-btn"
              onClick={onOpenJoinModal || (() => {
                const el = document.querySelector('#contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="flex items-center gap-1.5 px-6 py-2.5 text-xs md:text-sm font-black tracking-wide uppercase text-[#031B36] bg-white hover:bg-[#1687F5] hover:text-white rounded-full shadow-lg hover:shadow-[#1687F5]/50 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <span>JOIN NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="nav-mobile-call-icon"
              href={`tel:${GYM_INFO.phone}`}
              aria-label="Call Gym Bean Fitness Studio"
              className="w-10 h-10 rounded-full bg-[#1687F5]/20 border border-[#1687F5]/40 flex items-center justify-center text-white"
            >
              <Phone className="w-4 h-4 text-[#38BDF8]" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="sm:hidden fixed inset-x-0 top-[68px] bg-[#031B36]/98 border-b border-white/15 backdrop-blur-2xl px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-3 text-base font-semibold text-white hover:text-[#1687F5] hover:bg-white/5 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${GYM_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#1687F5]" />
              <span>CALL {GYM_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenJoinModal) {
                  onOpenJoinModal();
                } else {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#0759B8] to-[#1687F5] rounded-xl text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#1687F5]/30"
            >
              <span>JOIN GYM BEAN FITNESS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
