
import React, { useState, useEffect } from 'react';
import { RootpingLogo } from '../icons/RootpingLogo';

const EXAM_QUESTIONS = [
  { q: "What is the primary goal of a phishing attack?", options: ["To upgrade your software", "To steal sensitive information or credentials", "To speed up your computer", "To test internet speed"], ans: 1 },
  { q: "Which of these is a common sign of a phishing email?", options: ["Personalized greeting", "Urgent or threatening language", "Sent from a known contact", "Contains a valid invoice"], ans: 1 },
  { q: "What does 'URL spoofing' refer to?", options: ["Creating a fake website address that looks real", "Encrypting a website", "Speeding up a website", "Blocking a website"], ans: 0 },
  { q: "What should you do if you receive a suspicious email from a colleague?", options: ["Reply immediately", "Click all links to verify", "Contact them via a separate channel (e.g., phone/Slack)", "Forward it to everyone"], ans: 2 },
  { q: "What is 'Spear Phishing'?", options: ["A broad attack on everyone", "A targeted attack on a specific individual or organization", "Fishing with a spear", "A virus that deletes files"], ans: 1 },
  { q: "Which file extension is often blocked because it can carry malware?", options: [".txt", ".jpg", ".exe", ".pdf"], ans: 2 },
  { q: "What is 'Whaling' in cybersecurity?", options: ["Hunting whales", "Phishing attacks targeting high-profile executives", "A large data breach", "Phishing via SMS"], ans: 1 },
  { q: "What does HTTPS indicate in a URL?", options: ["The site is 100% safe", "The connection is encrypted", "The site is fast", "The site is owned by Google"], ans: 1 },
  { q: "What is 'Vishing'?", options: ["Video phishing", "Voice phishing via phone calls", "Virtual phishing", "Virus phishing"], ans: 1 },
  { q: "What is 'Smishing'?", options: ["Small phishing", "Smart phishing", "SMS/Text message phishing", "Social media phishing"], ans: 2 },
  { q: "If an email asks you to 'verify your account' urgently, it is likely:", options: ["A security protocol", "A phishing attempt", "A system update", "A standard procedure"], ans: 1 },
  { q: "Where can you hover your mouse to see the real destination of a link?", options: ["The subject line", "The link itself", "The send button", "The attachment"], ans: 1 },
  { q: "What is a 'waterhole attack'?", options: ["Compromising a site frequently visited by the target", "Attacking water infrastructure", "Flooding an inbox", "Leaking data"], ans: 0 },
  { q: "Legitimate companies will never ask for this via email:", options: ["Feedback", "Order confirmation", "Your password", "Survey participation"], ans: 2 },
  { q: "What is 'Business Email Compromise' (BEC)?", options: ["Spam emails", "Compromising legitimate business email accounts to conduct fraud", "Email server downtime", "Encrypting emails"], ans: 1 },
  { q: "Which of these is a good defense against phishing?", options: ["Using the same password everywhere", "Multi-Factor Authentication (MFA)", "Disabling antivirus", "Sharing passwords"], ans: 1 },
  { q: "What is 'Clone Phishing'?", options: ["Copying a legitimate email and replacing the link with a malicious one", "Phishing with a clone", "Two emails sent at once", "Phishing on two devices"], ans: 0 },
  { q: "Why do phishers shorten URLs (e.g., bit.ly)?", options: ["To save space", "To hide the true destination", "To track clicks", "To look professional"], ans: 1 },
  { q: "What is 'Social Engineering'?", options: ["Building social networks", "Manipulating people into divulging confidential information", "Fixing society", "Coding social apps"], ans: 1 },
  { q: "If you fall for a phish, what is the first thing you should do?", options: ["Delete the email", "Disconnect from network and report it", "Shut down the computer", "Reply to the attacker"], ans: 1 },
  { q: "Which department handles phishing reports?", options: ["HR", "Sales", "IT / Security Operations", "Marketing"], ans: 2 },
  { q: "What is a 'payload' in a phishing context?", options: ["The money stolen", "The malicious script or malware delivered", "The email subject", "The sender's name"], ans: 1 },
  { q: "Phishing emails often try to exploit which human emotion?", options: ["Happiness", "Fear or Curiosity", "Boredom", "Hunger"], ans: 1 },
  { q: "Can phishing happen on social media?", options: ["No, only email", "Yes, via direct messages or fake posts", "No, platforms are secure", "Only on LinkedIn"], ans: 1 },
  { q: "What is the best way to verify a sender's identity?", options: ["Ask them in the email", "Check the display name", "Verify the email address domain precisely", "Trust their profile picture"], ans: 2 },
];

export const PhishingCourse: React.FC = () => {
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
        <h2 className="text-2xl font-bold text-brand-lightest-slate mb-6 text-center font-syne">Phishing Defense Training</h2>
        <p className="text-brand-slate mb-6 text-center text-sm">Identify, Contain, and Respond to advanced email threats.</p>
        <form onSubmit={handleRegister} className="space-y-4">
            <input required placeholder="First Name" className="w-full p-3 bg-brand-deep-blue border border-slate-600 rounded text-white" onChange={e => setFormData({...formData, firstName: e.target.value})} />
            <input required placeholder="Last Name" className="w-full p-3 bg-brand-deep-blue border border-slate-600 rounded text-white" onChange={e => setFormData({...formData, lastName: e.target.value})} />
            <input required placeholder="Work Email" type="email" className="w-full p-3 bg-brand-deep-blue border border-slate-600 rounded text-white" onChange={e => setFormData({...formData, email: e.target.value})} />
            <input required placeholder="Company Name" className="w-full p-3 bg-brand-deep-blue border border-slate-600 rounded text-white" onChange={e => setFormData({...formData, company: e.target.value})} />
            <button type="submit" className="w-full py-3 bg-brand-cyan text-brand-deep-blue font-bold rounded hover:bg-opacity-90 transition-colors">Start Training</button>
        </form>
    </div>
  );

  const renderContent = () => (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-lightest-slate font-syne">Phishing Defense Module</h2>
            <p className="text-brand-cyan">Welcome, {formData.firstName}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-navy/50 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Identification</h3>
                <p className="text-brand-slate text-sm">Phishing often relies on urgency, fear, or authority. Look for mismatched domains (e.g., support@g00gle.com), generic greetings ("Dear Customer"), and unsolicited attachments. Hover over links to see the true destination.</p>
            </div>
             <div className="bg-brand-navy/50 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Detection</h3>
                <p className="text-brand-slate text-sm">Modern phishing uses "typosquatting" and homoglyphs. Automated tools like Rootping detect these externally. Internally, pay attention to "External Sender" banners and verify requests for funds via a second channel (phone/Slack).</p>
            </div>
             <div className="bg-brand-navy/50 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4">🧱</div>
                <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Containment</h3>
                <p className="text-brand-slate text-sm">If you click a link, disconnect from the network immediately to prevent lateral movement. Reset credentials from a different device. Do not forward the email to others; forward it only to the security team as an attachment.</p>
            </div>
             <div className="bg-brand-navy/50 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Response</h3>
                <p className="text-brand-slate text-sm">Reporting is critical. Security Operations Centers (SOC) can purge malicious emails from all inboxes once identified. Your quick report protects the entire organization.</p>
            </div>
        </div>

        <div className="bg-brand-deep-blue p-6 rounded-lg border border-brand-cyan/20 mt-8">
             <h3 className="text-lg font-bold text-brand-cyan mb-2">Advanced Tactics: BEC</h3>
             <p className="text-brand-slate">Business Email Compromise (BEC) involves compromising legitimate accounts. These emails come from real colleagues but ask for wire transfers or gift cards. Always verbal-verify payment changes.</p>
        </div>

        <div className="text-center pt-8">
            <button onClick={startQuiz} className="px-8 py-4 bg-brand-cyan text-brand-deep-blue font-bold rounded shadow-lg hover:scale-105 transition-transform">Take Certification Exam</button>
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
                    <p className="text-xl tracking-[0.3em] uppercase mb-8 text-gray-500">Of Completion</p>
                    
                    <p className="text-lg mb-2">This certifies that</p>
                    <h2 className="text-3xl font-bold text-brand-cyan mb-2 font-syne border-b-2 border-brand-deep-blue/10 inline-block pb-2 px-8 min-w-[300px]">
                        {formData.firstName} {formData.lastName}
                    </h2>
                    <p className="text-gray-600 mb-8">{formData.company}</p>
                    
                    <p className="text-lg mb-6">Has successfully completed the comprehensive training and examination on</p>
                    <h3 className="text-2xl font-bold text-brand-deep-blue mb-8 uppercase">Advanced Phishing Defense & Response</h3>
                    
                    <div className="flex justify-between items-end mt-12 px-12">
                        <div className="text-center">
                            <div className="w-32 border-b border-gray-400 mb-2"></div>
                            <p className="text-sm font-bold">Rootping Academy</p>
                        </div>
                        <div className="w-24 h-24 rounded-full border-4 border-brand-deep-blue flex items-center justify-center relative">
                            <div className="absolute inset-1 border border-brand-deep-blue rounded-full border-dashed"></div>
                            <span className="font-bold text-xs transform -rotate-12">PASSED</span>
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
