import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, CheckCircle } from 'lucide-react';
import rockImg from '../assets/rock.png';

const reviews = [
    { id: 1, text: 'Trading is good', author: 'firstname lastname', time: '1 day ago' },
    { id: 2, text: 'Trading is good', author: 'firstname lastname', time: '1 day ago' },
    { id: 3, text: 'Trading is good', author: 'firstname lastname', time: '1 day ago' },
    { id: 4, text: 'Trading is good', author: 'firstname lastname', time: '1 day ago' },
];

const StarRow = () => (
    <div className="flex gap-0.5">
        {Array(5).fill(null).map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#00b67a" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="#00b67a" rx="2" />
                <path d="M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.9L12 16.5 6.7 19.2l1-5.9L3.5 9.2l5.9-.9L12 3z" fill="white" />
            </svg>
        ))}
    </div>
);

const AcademyWhyRuby = () => {
    const [reviewStart, setReviewStart] = useState(0);

    const prev = () => setReviewStart((p) => Math.max(0, p - 1));
    const next = () => setReviewStart((p) => Math.min(reviews.length - 4, p + 1));

    return (
        <section className="bg-[#6a0000] relative overflow-hidden">

            {/* ── WHY TRADERS CHOOSE RUBY ── */}
            <div className="container mx-auto px-6 lg:px-12 py-16">

                {/* Title */}
                <h2 className="text-white font-black text-[28px] lg:text-[42px] uppercase text-center mb-8 tracking-tight">
                    WHY TRADERS CHOOSE RUBY
                </h2>

                {/* Trustpilot rating */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                    <div className="text-center">
                        <p className="text-white font-bold text-lg">Excellent</p>
                        <p className="text-white/60 text-xs">Based on 8,921 Reviews</p>
                    </div>
                    <StarRow />
                    {/* Trustpilot logo text */}
                    <div className="flex items-center gap-1.5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <polygon points="12,2 15.1,8.3 22,9.3 17,14.1 18.2,21 12,17.8 5.8,21 7,14.1 2,9.3 8.9,8.3" fill="#00b67a" />
                        </svg>
                        <span className="text-white font-semibold text-sm">Trustpilot</span>
                    </div>
                </div>

                {/* Review Cards */}
                <div className="flex gap-4 items-center">
                    <button onClick={prev} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition shrink-0">
                        <ArrowLeft size={16} />
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
                        {reviews.map((r) => (
                            <div key={r.id} className="bg-white/10 border border-white/20 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <StarRow />
                                    <span className="text-white/60 text-xs flex items-center gap-1">
                                        <CheckCircle size={12} className="text-green-400" /> Verified
                                    </span>
                                </div>
                                <p className="text-white font-bold text-sm mb-1">{r.text}</p>
                                <p className="text-white/50 text-xs">{r.author}, {r.time}</p>
                            </div>
                        ))}
                    </div>

                    <button onClick={next} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition shrink-0">
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            {/* ── TOOLS TO HELP YOU START STRONG ── */}
            <div className="relative overflow-hidden">
                {/* Crystal decoration right */}
                <div className="absolute right-0 top-0 bottom-0 w-[40%] opacity-40 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at right, #ff2200 0%, transparent 70%)',
                    }}
                />

                <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
                    <h2 className="text-white font-black text-[26px] lg:text-[40px] uppercase text-center mb-10 leading-tight">
                        TOOLS TO HELP<br />YOU START STRONG
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                        {/* Card 1 – Trading tutorials */}
                        <div className="bg-[#3d0000]/80 border border-white/10 rounded-2xl p-8 flex flex-col">
                            <h3 className="text-white font-black text-xl mb-4">Trading tutorials</h3>
                            <p className="text-white/70 text-sm leading-relaxed flex-1 mb-8">
                                Learn the basics with step-by-step lessons — perfect for beginners, useful at every level.
                            </p>
                            <div className="flex justify-end">
                                <button className="flex items-center gap-2 border border-white/40 rounded-full px-6 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-all">
                                    Open tutorials
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Card 2 – Demo trading */}
                        <div className="bg-[#3d0000]/80 border border-white/10 rounded-2xl p-8 flex flex-col">
                            <h3 className="text-white font-black text-xl mb-4">Demo trading</h3>
                            <p className="text-white/70 text-sm leading-relaxed flex-1 mb-8">
                                Practice with zero risk. The RUBY Demo account helps you build skills and confidence for free.
                            </p>
                            <div className="flex justify-end">
                                <button className="flex items-center gap-2 border border-white/40 rounded-full px-6 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-all">
                                    Learn more
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Rock decoration – bottom right */}
            <img
                src={rockImg}
                alt=""
                className="absolute bottom-0 right-0 w-[600px] lg:w-[850px] pointer-events-none select-none opacity-90 translate-x-12 translate-y-8"
            />

        </section>
    );
};

export default AcademyWhyRuby;
