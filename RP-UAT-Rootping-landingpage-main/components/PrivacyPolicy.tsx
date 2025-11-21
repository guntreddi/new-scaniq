
import React, { useEffect } from 'react';

export const PrivacyPolicy: React.FC = () => {
  // Ensure we start at the top of the page when navigating here
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
        <h1 className="text-4xl md:text-5xl font-bold text-brand-lightest-slate mb-4 font-syne">Rootping Privacy Policy</h1>
        <p className="text-sm font-mono text-brand-cyan">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="space-y-10 bg-brand-navy/50 p-8 md:p-12 rounded-lg border border-slate-700/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div>
          <p className="leading-relaxed mb-6">
            Rootping (“Rootping”, “we”, “us”, “our”) is committed to protecting your privacy and maintaining your trust. This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit our website, use our services, or interact with us.
          </p>
          <p className="leading-relaxed mb-6">
            This Policy applies to all visitors of www.rootping.com and to all products and services we offer, including our Threat Exposure Management and Threat Intelligence solutions.
          </p>
          <p className="font-bold text-brand-lightest-slate">
            By accessing our website or using our services, you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">1. Information We Collect</h2>
          <p className="mb-4">We collect two categories of data:</p>
          
          <div className="ml-4 mb-6 border-l-2 border-brand-cyan/30 pl-6">
            <h3 className="text-xl font-semibold text-brand-lightest-slate mb-3">A. Information You Provide Directly</h3>
            <p className="mb-3">This includes personal information you voluntarily submit through forms, contact requests, demo bookings, email interactions, or account creation, such as:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
                <li>Name</li>
                <li>Email address</li>
                <li>Company name</li>
                <li>Job title</li>
                <li>Phone number</li>
                <li>Account login details (if applicable)</li>
                <li>Billing or transaction information</li>
                <li>Any message or information you send to us</li>
            </ul>
          </div>

          <div className="ml-4 mb-6 border-l-2 border-brand-cyan/30 pl-6">
            <h3 className="text-xl font-semibold text-brand-lightest-slate mb-3">B. Information We Collect Automatically</h3>
            <p className="mb-3">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-brand-light-slate marker:text-brand-cyan">
                <li>IP address</li>
                <li>Device type and browser type</li>
                <li>Pages viewed and time spent</li>
                <li>Referring links</li>
                <li>Cookies, analytics data, and tracking information</li>
                <li>Website interaction behavior (clicks, navigation, downloads)</li>
            </ul>
          </div>

          <div className="ml-4 border-l-2 border-brand-cyan/30 pl-6">
            <h3 className="text-xl font-semibold text-brand-lightest-slate mb-3">C. Data Processed Through Our Security Products (If Applicable)</h3>
            <p className="mb-3">Rootping’s Threat Exposure Management and Threat Intelligence products may process data such as:</p>
            <ul className="list-disc pl-5 space-y-1 text-brand-light-slate marker:text-brand-cyan">
                <li>Exposed credentials, domains, or assets you monitor</li>
                <li>Security telemetry or threat indicators</li>
                <li>Publicly available intelligence used to alert you of risks</li>
            </ul>
            <p className="mt-4 text-sm italic text-brand-lightest-slate bg-brand-deep-blue/50 p-3 rounded inline-block border border-brand-cyan/20">Rootping does not sell or share customer security data with third parties, and this data is used only to provide the services you requested.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">2. How We Use Your Information</h2>
          <p className="mb-4">Rootping uses the information collected for purposes such as:</p>
          <ul className="grid md:grid-cols-2 gap-3 pl-5 mb-6">
            {[
                "Providing and improving our website and services",
                "Delivering Threat Exposure Management insights",
                "Responding to contact requests or support inquiries",
                "Personalizing user experience",
                "Sending service updates or product announcements",
                "Enhancing website performance and security",
                "Protecting Rootping systems from misuse",
                "Complying with legal requirements"
            ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">›</span> {item}
                </li>
            ))}
          </ul>
          <p>We never use your data in ways that conflict with your rights under applicable privacy laws.</p>
        </section>

        <section>
           <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">3. Cookies and Tracking Technologies</h2>
           <p className="mb-4">Rootping uses cookies and similar technologies to analyze website usage, remember your preferences, improve performance, and support security functionality.</p>
           <p className="text-sm bg-brand-navy p-4 rounded border border-slate-700">You can control or disable cookies through your browser settings. Some features may not work properly if cookies are disabled.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">4. How We Share Information</h2>
            <p className="mb-4 font-bold text-brand-lightest-slate">We do not sell your personal information.</p>
            <p className="mb-4">We may share data only in the following cases:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-brand-light-slate marker:text-brand-cyan">
                <li>Service providers who help operate our website, analytics, hosting, email systems, and payment processing</li>
                <li>Security partners strictly for delivering Rootping’s cyber threat services</li>
                <li>Legal obligations, such as responding to lawful requests or protecting rights and safety</li>
                <li>Business transfers, such as mergers, acquisitions, or corporate restructuring (you will be notified in such cases)</li>
            </ul>
            <p>All service providers are bound by strict confidentiality and data protection agreements.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">5. International Data Transfers</h2>
            <p className="mb-4">Rootping may process or store information in countries where we or our service providers operate, including Canada, the United States, and the European Union.</p>
            <p>We comply with all applicable data transfer rules, including GDPR mechanisms such as Standard Contractual Clauses where required.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">6. Data Security</h2>
            <p className="mb-4">We take data security seriously. Rootping uses industry-standard encryption, network and infrastructure security controls, continuous monitoring, access controls, and regular audits.</p>
            <p>While no system is fully immune from risks, we take reasonable precautions to protect your data from unauthorized access, alteration, or disclosure.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">7. Your Privacy Rights</h2>
            <p className="mb-4">Depending on your jurisdiction (e.g., GDPR, PIPEDA, CCPA), you may have the right to:</p>
            <ul className="grid md:grid-cols-2 gap-2 mb-6 pl-4 border-l-2 border-brand-cyan/30">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your information</li>
                <li>Object to or limit processing</li>
                <li>Withdraw consent</li>
                <li>Request data portability</li>
                <li>Opt out of marketing communications</li>
            </ul>
            <p>To exercise your rights, email us at <a href="mailto:privacy@rootping.com" className="text-brand-cyan hover:underline">privacy@rootping.com</a>.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">8. Data Retention</h2>
            <p className="mb-4">We retain personal information only for as long as necessary to provide the services you requested, comply with legal obligations, resolve disputes, and improve our systems. You may request deletion at any time.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">9. Third-Party Websites</h2>
            <p>Our website may contain links to external websites. We are not responsible for their privacy practices. We encourage you to review the privacy policies of those third-party sites.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">10. Children’s Privacy</h2>
            <p>Rootping does not knowingly collect personal information from individuals under the age of 18. If you believe a child has provided information to us, please contact us so we can remove it promptly.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">11. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. When changes are made, we will update the “Last updated” date at the top of the page. Significant changes will be communicated clearly on our website.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-brand-cyan mb-6 font-syne">12. Contact Us</h2>
            <p className="mb-6">If you have questions, requests, or concerns about this Privacy Policy or Rootping’s privacy practices, please contact:</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a href="mailto:privacy@rootping.com" className="flex items-center gap-2 text-brand-lightest-slate hover:text-brand-cyan transition-colors group">
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
