
import React, { useEffect, useState } from 'react';

export const FreeTrial: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    phoneNumber: '',
    linkedinUrl: '',
    hearAboutUs: '',
    complianceCheck: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form Data Submitted:", formData);
    // Ideally, this would post to an endpoint like https://uat.rootping.com/free-trial/
    
    setIsSubmitting(false);
    setIsSuccess(true);
    window.scrollTo(0,0);
  };

  if (isSuccess) {
    return (
      <section className="py-24 px-6 md:px-10 lg:px-24 min-h-[80vh] flex flex-col items-center justify-center text-center animate-fade-in-up">
        <div className="w-24 h-24 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-8 border-2 border-brand-cyan shadow-[0_0_30px_rgba(100,255,218,0.3)]">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-brand-cyan">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-lightest-slate mb-6 font-syne">Application Received</h1>
        <p className="text-xl text-brand-slate max-w-2xl leading-relaxed">
          Thank you for your interest in Rootping. Your request has been securely transmitted to our vetting team.
        </p>
        <p className="text-lg text-brand-slate mt-4 max-w-2xl leading-relaxed">
          We will review your credentials and contact you at <span className="text-brand-cyan">{formData.businessEmail}</span> shortly to schedule your identity validation call.
        </p>
        <div className="mt-12">
            <a 
                href="#" 
                onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '';
                }}
                className="px-8 py-3 border border-brand-cyan text-brand-cyan rounded-md hover:bg-brand-cyan-tint transition-colors font-medium"
            >
                Return to Home
            </a>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 md:px-10 lg:px-24 max-w-4xl mx-auto">
      <div className="mb-8">
        <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
            }}
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-lightest-slate transition-colors font-mono text-sm cursor-pointer"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
        </a>
      </div>

      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-bold text-brand-lightest-slate mb-4 font-syne">Start Your Free Trial</h1>
        <p className="text-brand-slate text-lg max-w-2xl mx-auto">
          Gain immediate visibility into your attack surface. Secure your organization with Rootping's Threat Exposure Management platform.
        </p>
      </div>

      <div className="bg-brand-navy/50 p-6 md:p-10 rounded-lg border border-slate-700/50 backdrop-blur-sm shadow-2xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-brand-lightest-slate">First Name <span className="text-brand-cyan">*</span></label>
                    <input 
                        required
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-brand-deep-blue border border-slate-600 rounded-md p-3 text-brand-lightest-slate focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                        placeholder="Jane"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-brand-lightest-slate">Last Name <span className="text-brand-cyan">*</span></label>
                    <input 
                        required
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-brand-deep-blue border border-slate-600 rounded-md p-3 text-brand-lightest-slate focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                        placeholder="Doe"
                    />
                </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="businessEmail" className="block text-sm font-medium text-brand-lightest-slate">Business Email <span className="text-brand-cyan">*</span></label>
                    <input 
                        required
                        type="email" 
                        id="businessEmail" 
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        className="w-full bg-brand-deep-blue border border-slate-600 rounded-md p-3 text-brand-lightest-slate focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                        placeholder="jane@company.com"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-brand-lightest-slate">Mobile / Direct Phone <span className="text-brand-cyan">*</span></label>
                    <input 
                        required
                        type="tel" 
                        id="phoneNumber" 
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full bg-brand-deep-blue border border-slate-600 rounded-md p-3 text-brand-lightest-slate focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>
            </div>

            {/* Row 3: LinkedIn */}
            <div className="space-y-2">
                <label htmlFor="linkedinUrl" className="block text-sm font-medium text-brand-lightest-slate">LinkedIn Profile URL / Link to Public Info <span className="text-brand-cyan">*</span></label>
                <input 
                    required
                    type="url" 
                    id="linkedinUrl" 
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                    className="w-full bg-brand-deep-blue border border-slate-600 rounded-md p-3 text-brand-lightest-slate focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    placeholder="https://linkedin.com/in/..."
                />
                <p className="text-xs text-brand-slate bg-brand-deep-blue/50 p-3 rounded border border-brand-cyan/20 mt-2">
                    <span className="text-brand-cyan font-bold">Note:</span> Due to security requirements and the sensitive nature of our data, we require this information to verify that you are a legitimate cybersecurity practitioner. If you do not have a LinkedIn profile, please provide alternative supporting links or documentation to confirm your identity.                </p>
            </div>

             {/* Row 4: Source */}
             <div className="space-y-2">
                <label htmlFor="hearAboutUs" className="block text-sm font-medium text-brand-lightest-slate">How did you hear about us? <span className="text-brand-cyan">*</span></label>
                <select 
                    required
                    id="hearAboutUs" 
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full bg-brand-deep-blue border border-slate-600 rounded-md p-3 text-brand-lightest-slate focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                >
                    <option value="" disabled>Select an option</option>
                    <option value="Search Engine">Search Engine (Google, Bing, etc.)</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="News/Article">News or Article</option>
                    <option value="Event/Conference">Event or Conference</option>
                    <option value="Referral">Referral</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            {/* Checkbox */}
            <div className="pt-4">
                <div className="flex items-start gap-3">
                    <div className="flex items-center h-5">
                        <input 
                            required
                            id="complianceCheck" 
                            name="complianceCheck" 
                            type="checkbox" 
                            checked={formData.complianceCheck}
                            onChange={handleCheckboxChange}
                            className="w-5 h-5 text-brand-cyan bg-brand-deep-blue border-slate-600 rounded focus:ring-brand-cyan focus:ring-2" 
                        />
                    </div>
                    <div className="ml-1 text-sm">
                        <label htmlFor="complianceCheck" className="font-medium text-brand-lightest-slate">
                            I accept Rootping <a href="#terms-of-service" className="text-brand-cyan hover:underline">Terms of Service</a> and <a href="#privacy-policy" className="text-brand-cyan hover:underline">Privacy Policy</a> and I understand that for security reasons I must have a call with Rootping to validate my identity before a free trial.*
                        </label>
                    </div>
                </div>
            </div>

            <div className="pt-6">
                <button 
                    type="submit"
                    disabled={isSubmitting || !formData.complianceCheck}
                    className="w-full py-4 bg-brand-cyan text-brand-deep-blue font-bold rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-brand-cyan/20 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                    {isSubmitting ? 'Processing Request...' : 'Submit Request'}
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">
                    Secure 256-bit TLS Encrypted Connection.
                </p>
            </div>

        </form>
      </div>
    </section>
  );
};
