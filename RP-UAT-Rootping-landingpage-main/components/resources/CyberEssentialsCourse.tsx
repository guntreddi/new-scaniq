
import React, { useState, useEffect } from 'react';
import { RootpingLogo } from '../icons/RootpingLogo';

const EXAM_QUESTIONS = [
  { q: "What is the purpose of Multi-Factor Authentication (MFA)?", options: ["To slow down login", "To add a second layer of security beyond just a password", "To share passwords", "To encrypt the hard drive"], ans: 1 },
  { q: "Which password is the strongest?", options: ["Password123", "Rootping2024", "Tr0ub4dor&3", "admin"], ans: 2 },
  { q: "Why should you keep software updated?", options: ["To get new colors", "To patch known security vulnerabilities", "To use more battery", "To slow down the device"], ans: 1 },
  { q: "What is 'Social Engineering'?", options: ["Manipulating people into giving up confidential info", "Coding social apps", "Fixing society", "Networking events"], ans: 0 },
  { q: "Is public Wi-Fi (e.g., at a cafe) secure?", options: ["Yes, always", "No, data can be intercepted easily without a VPN", "Yes, if it has a password", "Only on Tuesdays"], ans: 1 },
  { q: "What does a firewall do?", options: ["Cools down the computer", "Monitors and controls incoming/outgoing network traffic", "Burns viruses", "Speeds up internet"], ans: 1 },
  { q: "What is 'Ransomware'?", options: ["Free software", "Malware that encrypts data and demands payment for the key", "Anti-virus software", "A backup tool"], ans: 1 },
  { q: "What is the best practice for backups?", options: ["Never backup", "Backup once a year", "Follow the 3-2-1 rule (3 copies, 2 media types, 1 offsite)", "Backup to the same drive"], ans: 2 },
  { q: "If you find a USB drive in the parking lot, you should:", options: ["Plug it in to see who owns it", "Format it and keep it", "Hand it to security/IT without plugging it in", "Throw it in the trash"], ans: 2 },
  { q: "What constitutes PII (Personally Identifiable Information)?", options: ["Weather forecast", "SSN, Full Name, Biometrics", "Company logo", "Public news"], ans: 1 },
  { q: "What is the principle of 'Least Privilege'?", options: ["Giving everyone admin access", "Giving users only the access they need to do their job", "Giving no one access", "Giving access based on age"], ans: 1 },
  { q: "How can you secure a mobile device?", options: ["Remove the passcode", "Enable screen lock and encryption", "Leave it unlocked", "Share it with strangers"], ans: 1 },
  { q: "What is 'Shoulder Surfing'?", options: ["A water sport", "Looking at someone's screen to steal information", "Massaging shoulders", "Online surfing"], ans: 1 },
  { q: "When should you lock your computer?", options: ["Only at night", "Whenever you leave your desk", "Never", "When it rains"], ans: 1 },
  { q: "What is a 'Zero Day' vulnerability?", options: ["A flaw known for 0 days (no patch exists yet)", "A flaw fixed yesterday", "A harmless bug", "A calendar error"], ans: 0 },
  { q: "What is the safest way to share a password?", options: ["Email", "Sticky note", "You shouldn't share passwords; delegate access if possible or use a secure manager", "Text message"], ans: 2 },
  { q: "What indicates a secure website connection?", options: ["HTTP", "HTTPS and a padlock icon", "Flashy banners", "Pop-ups"], ans: 1 },
  { q: "Why is 'Shadow IT' dangerous?", options: ["It's dark", "Unapproved software/devices lack security controls and visibility", "It saves money", "It makes IT jealous"], ans: 1 },
  { q: "What is data encryption?", options: ["Deleting data", "Encoding data so only authorized parties can read it", "Copying data", "Printing data"], ans: 1 },
  { q: "What is the role of an Antivirus?", options: ["To make the PC faster", "To detect and remove malicious software", "To browse the web", "To create viruses"], ans: 1 },
  { q: "What should you do with sensitive paper documents?", options: ["Recycle bin", "Trash can", "Shred them", "Make airplanes"], ans: 2 },
  { q: "What is 'Tailgating' in physical security?", options: ["Driving close", "Following someone through a secure door without a badge", "Partying", "Waiting in line"], ans: 1 },
  { q: "Why are default passwords dangerous?", options: ["They are too hard to remember", "They are publicly known and easily guessed", "They expire fast", "They are too long"], ans: 1 },
  { q: "What is 'Insider Threat'?", options: ["A ghost", "A threat originating from within the organization (employee/contractor)", "A threat from outside", "A software bug"], ans: 1 },
  { q: "What is the first step in Incident Response?", options: ["Panic", "Preparation", "Identification", "Recovery"], ans: 1 },
];

export const CyberEssentialsCourse: React.FC = () => {
  const [step, setStep] = useState<'register' | 'content' | 'quiz' | 'certificate'>('register');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '' });
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(EXAM_QUESTIONS.length).fill(-1));
  const [score, setScore] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('content');
  };

  const startQuiz = () => setStep('quiz');

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = optionIndex;
    setAnswers(newAnswers);
  };

  const submitQuiz = () => {
    let s = 0;
    answers.forEach((ans, idx) => {
        if (ans === EXAM_QUESTIONS[idx].ans) s++;
    });
    setScore(s);
    setStep('certificate');
  };

  const renderRegistration = () => (
    <div className="max-w-md mx-auto bg-brand-navy p-8 rounded-xl border border-slate-700 shadow-2xl">
        <h2 className="text-2xl font-bold text-brand-lightest-slate mb-6 text-center font-syne">Cyber Security Essentials</h2>
        <p className="text-brand-slate mb-6 text-center text-sm">Fundamental knowledge for the modern digital landscape.</p>
        <form onSubmit={handleRegister} className="space-y-4">
            <input required placeholder="First Name" className="w-full p-3 bg-brand-deep-blue border border-slate-600 rounded text-white" onChange={e => setFormData({...formData, firstName: e.target.value})} />
            <input required placeholder="Last Name" className="w-full p-3 bg-brand-deep-blue border border-slate-600 rounded text-white" onChange={e => setFormData({...formData, lastName: e.target.value})} />
            <input required placeholder="Work Email" type="email" className="w-full p-3 bg-brand-deep-blue border border-slate-600 rounded text-white" onChange={e => setFormData({...formData, email: e.target.value})} />
            <input required placeholder="Company Name" className="w-full p-3 bg-brand-deep-blue border border-slate-600 rounded text-white" onChange={e => setFormData({...formData, company: e.target.value})} />
            <button type="submit" className="w-full py-3 bg-brand-cyan text-brand-deep-blue font-bold rounded hover:bg-opacity-90 transition-colors">Start Course</button>
        </form>
    </div>
  );

  const renderContent = () => (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-lightest-slate font-syne">Core Security Concepts</h2>
            <p className="text-brand-cyan">Welcome, {formData.firstName}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-navy/50 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Access Control</h3>
                <p className="text-brand-slate text-sm">The foundation of security. Use strong, unique passwords managed by a Password Manager. Enable Multi-Factor Authentication (MFA) on every account that supports it. Adhere to the Principle of Least Privilege.</p>
            </div>
             <div className="bg-brand-navy/50 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4">📡</div>
                <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Network Hygiene</h3>
                <p className="text-brand-slate text-sm">Avoid public Wi-Fi for sensitive tasks unless using a VPN. Ensure home routers use WPA3 encryption. Corporate firewalls and endpoint detection (EDR) act as the immune system of the network.</p>
            </div>
             <div className="bg-brand-navy/50 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4">💾</div>
                <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Data Protection</h3>
                <p className="text-brand-slate text-sm">Data should be encrypted at rest and in transit. Follow the 3-2-1 backup rule: 3 copies of data, 2 different media types, 1 copy offsite (cloud/immutable). This is the only true defense against Ransomware.</p>
            </div>
             <div className="bg-brand-navy/50 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4">👀</div>
                <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Physical Security</h3>
                <p className="text-brand-slate text-sm">Digital security fails if someone steals the laptop. Lock devices when away. Prevent tailgating at office entries. Destroy sensitive paper documents. Be aware of shoulder surfing in public spaces.</p>
            </div>
        </div>

        <div className="text-center pt-8">
            <button onClick={startQuiz} className="px-8 py-4 bg-brand-cyan text-brand-deep-blue font-bold rounded shadow-lg hover:scale-105 transition-transform">Take Essentials Exam</button>
        </div>
    </div>
  );

  const renderQuiz = () => (
    <div className="max-w-2xl mx-auto bg-brand-navy/50 p-8 rounded-xl border border-slate-700 shadow-2xl">
        <div className="mb-6 flex justify-between items-center text-brand-slate text-sm">
            <span>Question {currentQ + 1} of {EXAM_QUESTIONS.length}</span>
            <span>Progress: {Math.round(((currentQ) / EXAM_QUESTIONS.length) * 100)}%</span>
        </div>
        <div className="h-2 bg-brand-deep-blue rounded-full mb-8">
            <div className="h-full bg-brand-cyan rounded-full transition-all duration-300" style={{ width: `${((currentQ) / EXAM_QUESTIONS.length) * 100}%` }}></div>
        </div>
        
        <h3 className="text-xl font-bold text-brand-lightest-slate mb-6">{EXAM_QUESTIONS[currentQ].q}</h3>
        
        <div className="space-y-3">
            {EXAM_QUESTIONS[currentQ].options.map((opt, idx) => (
                <button 
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full text-left p-4 rounded border transition-colors ${answers[currentQ] === idx ? 'bg-brand-cyan text-brand-deep-blue border-brand-cyan font-bold' : 'bg-brand-deep-blue border-slate-700 text-brand-slate hover:border-brand-cyan'}`}
                >
                    {opt}
                </button>
            ))}
        </div>

        <div className="mt-8 flex justify-between">
            <button 
                disabled={currentQ === 0}
                onClick={() => setCurrentQ(prev => prev - 1)}
                className="px-4 py-2 text-brand-slate hover:text-brand-cyan disabled:opacity-50"
            >
                Previous
            </button>
            {currentQ < EXAM_QUESTIONS.length - 1 ? (
                <button 
                    disabled={answers[currentQ] === -1}
                    onClick={() => setCurrentQ(prev => prev + 1)}
                    className="px-6 py-2 bg-brand-cyan text-brand-deep-blue rounded font-bold disabled:opacity-50"
                >
                    Next
                </button>
            ) : (
                <button 
                    disabled={answers[currentQ] === -1}
                    onClick={submitQuiz}
                    className="px-6 py-2 bg-green-500 text-white rounded font-bold disabled:opacity-50"
                >
                    Submit Exam
                </button>
            )}
        </div>
    </div>
  );

  const renderCertificate = () => {
    const passed = score >= 20; // 80% to pass
    if (!passed) {
        return (
            <div className="max-w-md mx-auto text-center bg-brand-navy p-8 rounded-xl border border-red-500/50">
                <h2 className="text-2xl font-bold text-red-400 mb-4">Exam Failed</h2>
                <p className="text-brand-slate mb-6">You scored {score} out of 25. You need 20 correct answers to pass.</p>
                <button onClick={() => {setStep('content'); setAnswers(new Array(25).fill(-1)); setCurrentQ(0);}} className="px-6 py-3 border border-brand-cyan text-brand-cyan rounded hover:bg-brand-cyan-tint">Review & Retake</button>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="bg-[#fdfbf7] text-brand-deep-blue p-12 rounded-xl border-8 border-double border-brand-cyan shadow-[0_0_50px_rgba(100,255,218,0.2)] relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-32 h-32 bg-brand-cyan/20 rounded-br-full"></div>
                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-cyan/20 rounded-tl-full"></div>
                 
                 <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                        <RootpingLogo className="w-16 h-16 text-brand-deep-blue" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-brand-deep-blue tracking-wider">CERTIFICATE</h1>
                    <p className="text-xl tracking-[0.3em] uppercase mb-8 text-gray-500">Of Achievement</p>
                    
                    <p className="text-lg mb-2">This certifies that</p>
                    <h2 className="text-3xl font-bold text-brand-cyan mb-2 font-syne border-b-2 border-brand-deep-blue/10 inline-block pb-2 px-8 min-w-[300px]">
                        {formData.firstName} {formData.lastName}
                    </h2>
                    <p className="text-gray-600 mb-8">{formData.company}</p>
                    
                    <p className="text-lg mb-6">Has demonstrated proficiency in the core principles of</p>
                    <h3 className="text-2xl font-bold text-brand-deep-blue mb-8 uppercase">Cyber Security Essentials</h3>
                    
                    <div className="flex justify-between items-end mt-12 px-12">
                        <div className="text-center">
                            <div className="w-32 border-b border-gray-400 mb-2"></div>
                            <p className="text-sm font-bold">Rootping Academy</p>
                        </div>
                        <div className="w-24 h-24 rounded-full border-4 border-brand-deep-blue flex items-center justify-center relative">
                            <div className="absolute inset-1 border border-brand-deep-blue rounded-full border-dashed"></div>
                            <span className="font-bold text-xs transform -rotate-12">CERTIFIED</span>
                        </div>
                        <div className="text-center">
                             <p className="mb-2 font-mono text-sm">{new Date().toLocaleDateString()}</p>
                             <div className="w-32 border-b border-gray-400 mb-2"></div>
                             <p className="text-sm font-bold">Date</p>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="mt-8">
                <button onClick={() => window.print()} className="px-8 py-3 bg-brand-cyan text-brand-deep-blue font-bold rounded hover:bg-opacity-90">Print Certificate</button>
            </div>
        </div>
    );
  };

  return (
    <section className="py-24 px-6 md:px-10 lg:px-24 min-h-screen">
      {step === 'register' && renderRegistration()}
      {step === 'content' && renderContent()}
      {step === 'quiz' && renderQuiz()}
      {step === 'certificate' && renderCertificate()}
    </section>
  );
};
