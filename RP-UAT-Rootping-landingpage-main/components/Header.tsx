
import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon, XIcon } from './icons/AppNavIcons';
import { RootpingLogo } from './icons/RootpingLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    window.location.hash = '';
    setTimeout(() => {
        window.location.hash = hash;
    }, 10);
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setIsResourcesOpen(false);
    }, 200); // Small delay to prevent flickering
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-deep-blue/90 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 md:px-10 lg:px-24 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group z-50 relative outline-none !ring-0 !border-0 focus:!outline-none focus:!ring-0">
          <RootpingLogo className="w-8 h-8 text-brand-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180" />
          <span className="text-xl font-bold text-brand-lightest-slate font-syne tracking-tight group-hover:text-brand-cyan transition-colors">
            Rootping<span className="text-brand-cyan">.</span>Security
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
           <a 
              href="#platform" 
              onClick={(e) => handleNavClick(e, 'platform')}
              className="text-slate-400 hover:text-brand-cyan focus:text-brand-cyan active:text-brand-cyan transition-colors duration-200 text-sm font-medium outline-none !ring-0 !border-0 focus:!outline-none focus:!ring-0 focus-visible:!outline-none cursor-pointer"
            >
              Platform
          </a>
          <a 
              href="#solutions" 
              onClick={(e) => handleNavClick(e, 'solutions')}
              className="text-slate-400 hover:text-brand-cyan focus:text-brand-cyan active:text-brand-cyan transition-colors duration-200 text-sm font-medium outline-none !ring-0 !border-0 focus:!outline-none focus:!ring-0 focus-visible:!outline-none cursor-pointer"
            >
              Solutions
          </a>
          <a 
              href="#pricing" 
              onClick={(e) => handleNavClick(e, 'pricing')}
              className="text-slate-400 hover:text-brand-cyan focus:text-brand-cyan active:text-brand-cyan transition-colors duration-200 text-sm font-medium outline-none !ring-0 !border-0 focus:!outline-none focus:!ring-0 focus-visible:!outline-none cursor-pointer"
            >
              Pricing
          </a>
          
          {/* Resources Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 outline-none !ring-0 focus:!outline-none ${isResourcesOpen ? 'text-brand-cyan' : 'text-slate-400 hover:text-brand-cyan'}`}
            >
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-3 h-3 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 transition-all duration-200 ${isResourcesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'}`}>
                <div className="bg-brand-navy border border-slate-700/50 rounded-lg shadow-xl overflow-hidden p-2">
                    <a 
                        href="#free-trial"
                        onClick={(e) => handleNavClick(e, 'free-trial')}
                        className="block px-4 py-3 text-sm text-brand-lightest-slate hover:bg-brand-deep-blue hover:text-brand-cyan rounded-md transition-colors"
                    >
                        Rootping Academy
                    </a>
                    <a 
                        href="#phishing-course"
                        onClick={(e) => handleNavClick(e, 'phishing-course')}
                        className="block px-4 py-3 text-sm text-brand-lightest-slate hover:bg-brand-deep-blue hover:text-brand-cyan rounded-md transition-colors"
                    >
                        Email Phishing
                    </a>
                    <a 
                        href="#cyber-essentials"
                        onClick={(e) => handleNavClick(e, 'cyber-essentials')}
                        className="block px-4 py-3 text-sm text-brand-lightest-slate hover:bg-brand-deep-blue hover:text-brand-cyan rounded-md transition-colors"
                    >
                        Cyber Security Essentials
                    </a>
                    <a 
                        href="#daily-blog"
                        onClick={(e) => handleNavClick(e, 'daily-blog')}
                        className="block px-4 py-3 text-sm text-brand-lightest-slate hover:bg-brand-deep-blue hover:text-brand-cyan rounded-md transition-colors"
                    >
                        Daily Blog
                    </a>
                </div>
            </div>
          </div>

          <a 
              href="#company"
              onClick={(e) => handleNavClick(e, 'company')}
              className="text-slate-400 hover:text-brand-cyan focus:text-brand-cyan active:text-brand-cyan transition-colors duration-200 text-sm font-medium outline-none !ring-0 !border-0 focus:!outline-none focus:!ring-0 focus-visible:!outline-none cursor-pointer"
            >
              Company
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="https://accounts.google.com/" className="text-slate-400 hover:text-brand-cyan focus:text-brand-cyan transition-colors duration-200 text-sm font-medium outline-none !ring-0 !border-0 focus:!outline-none focus:!ring-0 focus-visible:!outline-none">
            Login
          </a>
          <a href="#free-trial" onClick={(e) => handleNavClick(e, 'free-trial')} className="px-4 py-2 border border-brand-cyan text-brand-cyan rounded-md hover:bg-brand-cyan-tint focus:bg-brand-cyan-tint transition-colors duration-300 text-sm font-medium outline-none !ring-0 focus:!outline-none focus:!ring-0 focus-visible:!outline-none">
            Request Demo
          </a>
           <a href="#free-trial" onClick={(e) => handleNavClick(e, 'free-trial')} className="px-4 py-2 bg-brand-cyan text-brand-deep-blue font-bold rounded-md hover:bg-opacity-90 focus:bg-opacity-90 transition-all duration-300 shadow-lg shadow-brand-cyan/20 text-sm outline-none !ring-0 focus:!outline-none focus:!ring-0 focus-visible:!outline-none">
            Start Free Trial
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-cyan z-50 relative focus:outline-none !ring-0 focus:!ring-0 outline-none border-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-brand-deep-blue/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-300 overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
           <div className="flex flex-col items-center space-y-6 py-10">
                <a 
                  href="#platform" 
                  className="text-xl font-bold text-brand-lightest-slate hover:text-brand-cyan transition-colors duration-200 font-syne outline-none !ring-0 focus:!outline-none"
                  onClick={(e) => handleNavClick(e, 'platform')}
                >
                  Platform
                </a>
                <a 
                  href="#solutions" 
                  className="text-xl font-bold text-brand-lightest-slate hover:text-brand-cyan transition-colors duration-200 font-syne outline-none !ring-0 focus:!outline-none"
                  onClick={(e) => handleNavClick(e, 'solutions')}
                >
                  Solutions
                </a>
                <a 
                  href="#pricing" 
                  className="text-xl font-bold text-brand-lightest-slate hover:text-brand-cyan transition-colors duration-200 font-syne outline-none !ring-0 focus:!outline-none"
                  onClick={(e) => handleNavClick(e, 'pricing')}
                >
                  Pricing
                </a>
                
                {/* Mobile Resources Section */}
                <div className="text-center space-y-3 border-y border-slate-800 py-4 w-full px-8">
                    <p className="text-brand-cyan font-bold text-sm uppercase tracking-widest">Resources</p>
                    <a 
                        href="#free-trial"
                        onClick={(e) => handleNavClick(e, 'free-trial')}
                        className="block text-lg text-brand-lightest-slate hover:text-brand-cyan"
                    >
                        Rootping Academy
                    </a>
                    <a 
                        href="#phishing-course"
                        onClick={(e) => handleNavClick(e, 'phishing-course')}
                        className="block text-lg text-brand-lightest-slate hover:text-brand-cyan"
                    >
                        Email Phishing
                    </a>
                    <a 
                        href="#cyber-essentials"
                        onClick={(e) => handleNavClick(e, 'cyber-essentials')}
                        className="block text-lg text-brand-lightest-slate hover:text-brand-cyan"
                    >
                        Cyber Security Essentials
                    </a>
                    <a 
                        href="#daily-blog"
                        onClick={(e) => handleNavClick(e, 'daily-blog')}
                        className="block text-lg text-brand-lightest-slate hover:text-brand-cyan"
                    >
                        Daily Blog
                    </a>
                </div>

                <a 
                  href="#company" 
                  className="text-xl font-bold text-brand-lightest-slate hover:text-brand-cyan transition-colors duration-200 font-syne outline-none !ring-0 focus:!outline-none"
                  onClick={(e) => handleNavClick(e, 'company')}
                >
                  Company
                </a>

              <div className="flex flex-col gap-4 mt-4 w-full px-12">
                <a href="https://accounts.google.com/" className="text-center text-brand-lightest-slate hover:text-brand-cyan transition-colors duration-200 font-medium py-2 outline-none !ring-0 focus:!outline-none">
                    Login
                </a>
                <a href="#free-trial" onClick={(e) => handleNavClick(e, 'free-trial')} className="text-center px-6 py-3 border border-brand-cyan text-brand-cyan rounded-md hover:bg-brand-cyan-tint transition-colors duration-300 font-medium outline-none !ring-0 focus:!outline-none">
                    Request Demo
                </a>
                <a href="#free-trial" onClick={(e) => handleNavClick(e, 'free-trial')} className="text-center px-6 py-3 bg-brand-cyan text-brand-deep-blue font-bold rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-brand-cyan/20 outline-none !ring-0 focus:!outline-none">
                    Start Free Trial
                </a>
              </div>
           </div>
        </div>
      </nav>
    </header>
  );
};
