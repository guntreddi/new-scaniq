
import React, { useState, useEffect } from 'react';
import { fetchDailyInsights } from '../../services/blogService';
import { BlogPost } from '../../types';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

export const DailyBlog: React.FC = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadBlog = async () => {
      const data = await fetchDailyInsights();
      setPost(data);
      setLoading(false);
    };
    loadBlog();
  }, []);

  return (
    <section className="py-24 px-6 md:px-10 lg:px-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center animate-fade-in-up">
            <span className="text-brand-cyan font-mono text-sm tracking-wider uppercase">Rootping Insights</span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-lightest-slate mt-2 mb-4 font-syne">
                Cybersecurity Trends & Intelligence
            </h1>
            <p className="text-brand-slate">
                Daily Briefings for Security Leaders
            </p>
        </div>

        {loading ? (
           <div className="flex flex-col items-center justify-center py-20 space-y-6">
                <div className="w-16 h-16 border-4 border-brand-navy border-t-brand-cyan rounded-full animate-spin"></div>
                <p className="text-brand-cyan font-mono animate-pulse">Fetching latest intelligence...</p>
           </div>
        ) : post ? (
           <article className="bg-brand-navy/40 p-8 md:p-12 rounded-2xl border border-slate-700/50 shadow-2xl animate-fade-in-up backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8 border-b border-slate-700 pb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-deep-blue flex items-center justify-center border border-brand-cyan/30 text-brand-cyan font-bold text-xl">
                        R
                    </div>
                    <div>
                        <p className="text-brand-lightest-slate font-bold">{post.author}</p>
                        <p className="text-brand-slate text-xs">
                            {post.date} • {post.readTime} • <span className="text-brand-cyan">{post.category}</span>
                        </p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-brand-lightest-slate mb-6 font-syne">{post.title}</h2>

                <div 
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-syne prose-headings:text-brand-lightest-slate prose-a:text-brand-cyan prose-strong:text-brand-cyan prose-li:marker:text-brand-cyan"
                    dangerouslySetInnerHTML={{ 
                        __html: DOMPurify.sanitize(marked.parse(post.content) as string) 
                    }} 
                />
                
                <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-brand-slate italic">
                        Stay ahead of the threat curve with Rootping.
                    </p>
                    <a href="#free-trial" onClick={(e) => { e.preventDefault(); window.location.hash = 'free-trial'; }} className="px-6 py-3 bg-brand-cyan text-brand-deep-blue font-bold rounded hover:bg-opacity-90 transition-colors">
                        Protect Your Organization
                    </a>
                </div>
           </article>
        ) : (
            <div className="text-center text-brand-slate">Unable to load content. Please try again later.</div>
        )}
      </div>
    </section>
  );
};
