
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedStatProps {
  endValue: number;
  duration?: number;
  isFloat?: boolean;
  startAnimation: boolean;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({ endValue, duration = 2000, isFloat = false, startAnimation }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startAnimation) return;

        let startTime: number | null = null;
        const easeOutCubic = (t: number) => (--t) * t * t + 1;

        const animationFrame = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easedPercentage = easeOutCubic(percentage);
            
            const currentValue = easedPercentage * endValue;

            setCount(currentValue);

            if (progress < duration) {
                requestAnimationFrame(animationFrame);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(animationFrame);

    }, [endValue, duration, startAnimation]);

    const formatValue = () => {
        if (isFloat) {
            return count.toFixed(1);
        }
        return new Intl.NumberFormat('en-US').format(Math.floor(count));
    };

    return <span className="font-mono">{formatValue()}</span>;
};

const stats = [
    { value: 1.4, suffix: 'M+', isFloat: true, label: 'new breached identities every week' },
    { value: 19, suffix: 'B+', isFloat: false, label: 'leaked credentials' },
    { value: 50, suffix: '+', isFloat: false, label: 'ransomware leak sites tracked' },
    { value: 45000, suffix: '+', isFloat: false, label: 'monitored Telegram channels & forums' },
    { value: 2, suffix: 'M+', isFloat: true, label: 'mapped threat actor profiles' },
    { value: 140, suffix: '+', isFloat: false, label: 'global cybercriminal forums covered' },
];

export const DataInsights: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if(sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-10 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-lightest-slate">Data Is Power</h2>
          <p className="text-lg text-brand-slate mt-4 max-w-3xl mx-auto">Unrivaled Insight Into the Cybercrime Ecosystem</p>
           <p className="text-md text-brand-slate mt-4 max-w-3xl mx-auto">
            Backed by nearly a decade of continuous collection and real-time monitoring, Rootping delivers unmatched visibility into underground threats—ensuring defenders never operate in the dark.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-brand-navy p-6 rounded-lg text-center border border-slate-700/50 hover:border-brand-cyan/50 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl md:text-5xl font-bold text-brand-cyan mb-2">
                <AnimatedStat endValue={stat.value} isFloat={stat.isFloat} startAnimation={isInView} />
                {stat.suffix}
              </h3>
              <p className="text-brand-slate capitalize">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
