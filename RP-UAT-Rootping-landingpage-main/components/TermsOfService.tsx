
import React, { useEffect } from 'react';

export const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 px-6 md:px-10 lg:px-24 max-w-5xl mx-auto text-brand-slate">
      <div className="mb-8">
        <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
                window.scrollTo(0,0);
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
        <h1 className="text-4xl md:text-5xl font-bold text-brand-lightest-slate mb-4 font-syne">Rootping Terms of Service</h1>
        <p className="text-sm font-mono text-brand-cyan">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="space-y-10 bg-brand-navy/50 p-8 md:p-12 rounded-lg border border-slate-700/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        
        <section>
            <p className="leading-relaxed mb-6">
                Welcome to Rootping. These Terms of Service (“Terms”) govern your access to and use of the Rootping website, platform, and services, including our Threat Exposure Management and Threat Intelligence products (collectively, the “Services”).
            </p>
            <p className="font-bold text-brand-lightest-slate mb-4">
                By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.
            </p>
            <p>“Rootping,” “we,” “us,” and “our” refer to Rootping and its affiliates.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">1. Eligibility</h2>
          <p className="mb-4">To use the Services, you must:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Be at least 18 years old</li>
             <li>Have the authority to enter into a legally binding agreement</li>
             <li>Use the Services in compliance with all applicable laws and regulations</li>
          </ul>
          <p>If you are using the Services on behalf of an organization, you represent that you are authorized to bind that organization to these Terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">2. Services Provided</h2>
          <p className="mb-4">Rootping provides cybersecurity solutions including, but not limited to:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Threat Exposure Management</li>
             <li>Threat Intelligence & Monitoring</li>
             <li>Credential and asset exposure detection</li>
             <li>Attack surface analysis</li>
             <li>Risk insights and reporting</li>
          </ul>
          <p>Rootping may expand, update, or modify these Services at any time.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">3. Account Registration and Security</h2>
          <p className="mb-4">Some features require an account. You agree to:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Provide accurate and complete information</li>
             <li>Keep your credentials confidential</li>
             <li>Be responsible for all activities under your account</li>
             <li>Notify Rootping immediately of any unauthorized access</li>
          </ul>
          <p>Rootping is not liable for loss or damage arising from your failure to safeguard login credentials.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">4. Acceptable Use</h2>
          <p className="mb-4">You agree not to use the Services to:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Violate any laws or regulations</li>
             <li>Interfere with or disrupt the Services</li>
             <li>Reverse engineer, decompile, or attempt to extract source code</li>
             <li>Access data or systems you do not own or have explicit authorization to monitor</li>
             <li>Upload or transmit malicious software or harmful content</li>
             <li>Use Rootping’s Services for competitive intelligence, scraping, or benchmarking</li>
          </ul>
          <p>Rootping reserves the right to suspend or terminate access for violations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">5. Customer Data & Security</h2>
          <p className="mb-4">“Customer Data” means information you submit, monitor, upload, or configure within the Services.</p>
          <p className="mb-4">You retain all ownership rights to your Customer Data. Rootping does not claim ownership.</p>
          <p className="mb-4">You grant Rootping a limited, worldwide, non-exclusive license to:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Process Customer Data</li>
             <li>Analyze it for threat detection</li>
             <li>Provide the Services</li>
             <li>Improve the functionality and performance of the Services (in anonymized or aggregated form)</li>
          </ul>
          <p className="mb-4">Rootping uses industry-standard security measures to protect Customer Data but cannot guarantee absolute security.</p>
          <p>You are responsible for ensuring your use complies with relevant privacy, regulatory, and data-governance requirements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">6. Subscription, Fees, & Payment</h2>
          <p className="mb-4">If the Services are offered on a paid basis:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Fees will be specified at the time of purchase or in your service agreement</li>
             <li>Payments are due according to the billing cycle you select</li>
             <li>All fees are non-refundable unless stated otherwise</li>
             <li>Late payments may result in suspension or termination of services</li>
          </ul>
          <p>Taxes, duties, or additional charges imposed by law are your responsibility.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">7. Intellectual Property</h2>
          <p className="mb-4">All content, software, designs, trademarks, and materials related to the Services are the property of Rootping and protected by intellectual property laws.</p>
          <p className="mb-4">You may not:</p>
           <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Copy, modify, or distribute any part of the Services</li>
             <li>Use Rootping trademarks without written permission</li>
             <li>Create derivative works based on the Services</li>
           </ul>
          <p>Rootping grants you a limited, revocable, non-transferable license to use the Services for your internal business purposes only.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">8. Third-Party Services</h2>
          <p className="mb-4">The Services may integrate with or rely on third-party tools or platforms. Rootping is not responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Third-party content</li>
             <li>Their terms or privacy practices</li>
             <li>Any issues arising from third-party integrations</li>
          </ul>
          <p>Your use of third-party services is governed by their respective terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">9. Service Availability and Updates</h2>
          <p className="mb-4">Rootping strives for continuous availability but does not guarantee:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Uninterrupted access</li>
             <li>Error-free operation</li>
             <li>Absence of delays or outages</li>
          </ul>
          <p className="mb-4">We may:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Modify or discontinue features</li>
             <li>Perform maintenance</li>
             <li>Roll out updates or improvements</li>
          </ul>
          <p>Where practical, Rootping will provide advance notice of major changes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">10. Confidentiality</h2>
          <p className="mb-4">Both parties agree to keep confidential information private and use it only for performing their obligations under these Terms.</p>
          <p className="mb-4">Confidential information does not include:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Publicly available data</li>
             <li>Information already known to the receiving party</li>
             <li>Information independently developed</li>
             <li>Data required to be disclosed by law (with notice when permissible)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">11. Disclaimers</h2>
          <p className="mb-4">To the fullest extent permitted by law:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>The Services are provided “as is” and “as available.”</li>
             <li>Rootping makes no warranties, express or implied.</li>
          </ul>
          <p className="mb-4">Rootping does not guarantee:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>the accuracy of threat intelligence</li>
             <li>detection of all vulnerabilities</li>
             <li>prevention of security breaches</li>
             <li>uninterrupted service availability</li>
          </ul>
          <p>The Services are designed to support, not replace, professional security practices.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">12. Limitation of Liability</h2>
          <p className="mb-4">To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Rootping is not liable for indirect, incidental, special, consequential, or punitive damages.</li>
             <li>Rootping’s total liability for any claim will not exceed the amount paid by you in the past 12 months (or $100 USD if no fees were paid).</li>
          </ul>
          <p>These limitations apply even if Rootping was advised of the possibility of such damages.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">13. Termination</h2>
          <p className="mb-4">You may stop using the Services at any time.</p>
          <p className="mb-4">Rootping may suspend or terminate your access if:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>You violate these Terms</li>
             <li>You fail to pay required fees</li>
             <li>Your use poses a security, legal, or operational risk</li>
             <li>We discontinue the Services</li>
          </ul>
          <p>Upon termination, you must stop using all Services, and we may delete stored data unless retention is legally required.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">14. Governing Law</h2>
          <p className="mb-4">These Terms are governed by the laws of Ontario, Canada without regard to conflict of law principles.</p>
          <p>Any disputes must be resolved in the courts of that jurisdiction.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">15. Changes to These Terms</h2>
          <p className="mb-4">Rootping may update or modify these Terms at any time. When changes occur, we will:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
             <li>Update the “Last Updated” date</li>
             <li>Provide notice on the website or via email (when appropriate)</li>
          </ul>
          <p>Continued use of the Services after changes constitutes acceptance of the updated Terms.</p>
        </section>

        <section className="bg-brand-deep-blue p-8 rounded-lg border border-brand-cyan/20 text-center">
            <h2 className="text-2xl font-bold text-brand-cyan mb-4 font-syne">Contact Information</h2>
            <p className="mb-6">If you have questions about these Terms, please contact:</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a href="mailto:legal@rootping.com" className="flex items-center gap-2 text-brand-lightest-slate hover:text-brand-cyan transition-colors group">
                    <span className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center border border-slate-700 group-hover:border-brand-cyan">📧</span>
                    security@rootping.com
                </a>
                <a href="https://www.rootping.com" className="flex items-center gap-2 text-brand-lightest-slate hover:text-brand-cyan transition-colors group">
                    <span className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center border border-slate-700 group-hover:border-brand-cyan">🌐</span>
                    https://www.rootping.com
                </a>
            </div>
        </section>
      </div>
    </section>
  );
};
