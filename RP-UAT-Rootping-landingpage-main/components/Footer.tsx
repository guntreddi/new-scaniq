
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-brand-navy border-t border-slate-700/50 text-center text-brand-slate relative z-20 pb-28 md:pb-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-24">
        <div className="flex justify-center items-center space-x-6 mb-6">
            <a 
              href="#privacy-policy" 
              onClick={() => window.location.hash = 'privacy-policy'}
              className="hover:text-brand-cyan transition-colors text-sm cursor-pointer"
            >
              Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="#sitemap" 
              onClick={() => window.location.hash = 'sitemap'}
              className="hover:text-brand-cyan transition-colors text-sm cursor-pointer"
            >
              Sitemap
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="#terms-of-service" 
              onClick={() => window.location.hash = 'terms-of-service'}
              className="hover:text-brand-cyan transition-colors text-sm cursor-pointer"
            >
              Terms of Service
            </a>
        </div>
        <div className="space-y-3 font-mono text-sm">
             <p>Copyright {new Date().getFullYear()} Rootping Systems, Inc.</p>
            <p>Made in India ❤️ Collecting Cybercrime Intelligence Globally</p>
        </div>
      </div>
    </footer>
  );
};
