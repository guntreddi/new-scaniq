
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { DashboardMockup } from './components/DashboardMockup';
import { Footer } from './components/Footer';
import { Cta } from './components/Cta';
import { DataInsights } from './components/DataInsights';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Sitemap } from './components/Sitemap';
import { FreeTrial } from './components/FreeTrial';
import { Pricing } from './components/Pricing';
import { PlatformPage } from './components/PlatformPage';
import { CompanyPage } from './components/CompanyPage';
import { PhishingCourse } from './components/resources/PhishingCourse';
import { CyberEssentialsCourse } from './components/resources/CyberEssentialsCourse';
import { DailyBlog } from './components/resources/DailyBlog';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'privacy' | 'terms' | 'sitemap' | 'free-trial' | 'pricing' | 'company' | 'phishing' | 'cyber-essentials' | 'blog'>('home');

  useEffect(() => {
    // 1. Force Home view on initial load/refresh ONLY
    try {
      if (window.location.hash && !['#pricing', '#privacy-policy', '#terms-of-service', '#sitemap', '#free-trial', '#company', '#phishing-course', '#cyber-essentials', '#daily-blog'].includes(window.location.hash)) {
         // If the hash is a section on the homepage (like #platform), we still want to be in 'home' view
         // but we don't necessarily want to clear it if we want to scroll there.
      } else if (window.location.hash) {
          // It is a specific "page" view
      } else {
          window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
      }
    } catch (e) {
      console.warn("Could not clear hash from URL:", e);
    }
    
    // Initial View Logic
    const initialHash = window.location.hash;
    if (initialHash === '#pricing') setView('pricing');
    else if (initialHash === '#privacy-policy') setView('privacy');
    else if (initialHash === '#terms-of-service') setView('terms');
    else if (initialHash === '#sitemap') setView('sitemap');
    else if (initialHash === '#free-trial') setView('free-trial');
    else if (initialHash === '#company') setView('company');
    else if (initialHash === '#phishing-course') setView('phishing');
    else if (initialHash === '#cyber-essentials') setView('cyber-essentials');
    else if (initialHash === '#daily-blog') setView('blog');
    else setView('home');

    // 2. Define hash change handler
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#privacy-policy') {
        setView('privacy');
        window.scrollTo(0, 0);
      } else if (hash === '#terms-of-service') {
        setView('terms');
        window.scrollTo(0, 0);
      } else if (hash === '#sitemap') {
        setView('sitemap');
        window.scrollTo(0, 0);
      } else if (hash === '#free-trial') {
        setView('free-trial');
        window.scrollTo(0, 0);
      } else if (hash === '#pricing') {
        setView('pricing');
        window.scrollTo(0, 0);
      } else if (hash === '#company') {
        setView('company');
        window.scrollTo(0, 0);
      } else if (hash === '#phishing-course') {
        setView('phishing');
        window.scrollTo(0, 0);
      } else if (hash === '#cyber-essentials') {
        setView('cyber-essentials');
        window.scrollTo(0, 0);
      } else if (hash === '#daily-blog') {
        setView('blog');
        window.scrollTo(0, 0);
      } else if (hash === '' || hash === '#') {
        setView('home');
        window.scrollTo(0, 0);
      } else {
        // Section on home page (e.g., #platform, #solutions)
        setView('home');
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-brand-deep-blue text-brand-light-slate font-sans selection:bg-brand-cyan selection:text-brand-deep-blue min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl filter opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl filter opacity-40 animate-pulse"></div>
      </div>
      <div className="relative z-10 flex-grow flex flex-col">
        <Header />
        
        {view === 'home' && (
          <main className="flex-grow">
            <Hero />
            <PlatformPage />
            <Solutions />
            <DashboardMockup />
            <DataInsights />
            <Cta />
          </main>
        )}

        {view === 'pricing' && (
          <main className="flex-grow">
            <Pricing />
          </main>
        )}

        {view === 'company' && (
          <main className="flex-grow">
            <CompanyPage />
          </main>
        )}
        
        {view === 'privacy' && (
          <main className="flex-grow">
             <PrivacyPolicy />
          </main>
        )}

        {view === 'terms' && (
          <main className="flex-grow">
             <TermsOfService />
          </main>
        )}

        {view === 'sitemap' && (
          <main className="flex-grow">
             <Sitemap />
          </main>
        )}

        {view === 'free-trial' && (
          <main className="flex-grow">
             <FreeTrial />
          </main>
        )}

        {view === 'phishing' && (
            <main className="flex-grow">
                <PhishingCourse />
            </main>
        )}

        {view === 'cyber-essentials' && (
            <main className="flex-grow">
                <CyberEssentialsCourse />
            </main>
        )}

        {view === 'blog' && (
            <main className="flex-grow">
                <DailyBlog />
            </main>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default App;
