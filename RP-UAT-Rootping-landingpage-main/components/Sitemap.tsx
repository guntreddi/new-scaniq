
import React, { useEffect } from 'react';

export const Sitemap: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = (hash: string) => {
    window.location.hash = hash;
    if (!hash) {
        window.scrollTo(0,0);
    }
  };

  return (
    <section className="py-24 px-6 md:px-10 lg:px-24 max-w-5xl mx-auto text-brand-slate">
      <div className="mb-8">
        <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                navigate('');
            }}
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-lightest-slate transition-colors font-mono text-sm cursor-pointer"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
        </a>
      </div>

      <div className="mb-12 text-center md:text-left animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-lightest-slate mb-4 font-syne">Site Map</h1>
        <p className="text-brand-slate">Overview of Rootping Security structure</p>
      </div>
      
      <div className="bg-brand-navy/50 p-8 md:p-12 rounded-lg border border-slate-700/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Main Navigation */}
            <div>
                <h2 className="text-xl font-bold text-brand-cyan mb-6 font-syne border-b border-slate-700 pb-2">Main Pages</h2>
                <ul className="space-y-4">
                    <li>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate('');}} className="text-brand-lightest-slate hover:text-brand-cyan transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span> Home
                        </a>
                    </li>
                    <li>
                        <a href="#platform" onClick={(e) => {e.preventDefault(); navigate('platform');}} className="text-brand-lightest-slate hover:text-brand-cyan transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span> Platform
                        </a>
                    </li>
                    <li>
                        <a href="#solutions" onClick={(e) => {e.preventDefault(); navigate('solutions');}} className="text-brand-lightest-slate hover:text-brand-cyan transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span> Solutions (Use Cases & Industries)
                        </a>
                    </li>
                     <li>
                        <a href="#pricing" onClick={(e) => {e.preventDefault(); navigate('pricing');}} className="text-brand-lightest-slate hover:text-brand-cyan transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span> Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#company" onClick={(e) => {e.preventDefault(); navigate('company');}} className="text-brand-lightest-slate hover:text-brand-cyan transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span> Company
                        </a>
                    </li>
                </ul>
            </div>

            {/* Legal & Resources */}
            <div>
                <h2 className="text-xl font-bold text-brand-cyan mb-6 font-syne border-b border-slate-700 pb-2">Legal & Resources</h2>
                <ul className="space-y-4">
                    <li>
                        <a href="#privacy-policy" onClick={(e) => {e.preventDefault(); navigate('privacy-policy');}} className="text-brand-lightest-slate hover:text-brand-cyan transition-colors flex items-center gap-2">
                             <span className="w-1.5 h-1.5 bg-brand-slate rounded-full"></span> Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#terms-of-service" onClick={(e) => {e.preventDefault(); navigate('terms-of-service');}} className="text-brand-lightest-slate hover:text-brand-cyan transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-slate rounded-full"></span> Terms of Service
                        </a>
                    </li>
                     <li>
                        <a href="#sitemap" onClick={(e) => {e.preventDefault(); navigate('sitemap');}} className="text-brand-cyan font-bold transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-slate rounded-full"></span> Site Map
                        </a>
                    </li>
                </ul>
            </div>

             {/* Actions */}
            <div className="md:col-span-2">
                <h2 className="text-xl font-bold text-brand-cyan mb-6 font-syne border-b border-slate-700 pb-2">Actions</h2>
                <div className="flex flex-wrap gap-4">
                     <a href="https://accounts.google.com/" className="px-4 py-2 border border-slate-600 text-brand-lightest-slate rounded hover:border-brand-cyan hover:text-brand-cyan transition-colors">
                        Login
                    </a>
                     <a href="#free-trial" onClick={(e) => {e.preventDefault(); navigate('free-trial');}} className="px-4 py-2 border border-slate-600 text-brand-lightest-slate rounded hover:border-brand-cyan hover:text-brand-cyan transition-colors">
                        Request Demo
                    </a>
                     <a href="#free-trial" onClick={(e) => {e.preventDefault(); navigate('free-trial');}} className="px-4 py-2 bg-brand-cyan text-brand-deep-blue font-bold rounded hover:bg-opacity-90 transition-colors">
                        Start Free Trial
                    </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
