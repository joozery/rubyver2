import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

const reviews = [
    { id: 1, text: 'Trading is good', author: 'firstname lastname', time: '1 day ago' },
    { id: 2, text: 'Trading is good', author: 'firstname lastname', time: '1 day ago' },
    { id: 3, text: 'Trading is good', author: 'firstname lastname', time: '1 day ago' },
    { id: 4, text: 'Trading is good', author: 'firstname lastname', time: '1 day ago' },
];

const StarRow = () => (
    <div className="flex gap-0.5">
        {Array(5).fill(null).map((_, i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="#00b67a" rx="2" />
                <path d="M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.9L12 16.5 6.7 19.2l1-5.9L3.5 9.2l5.9-.9L12 3z" fill="white" />
            </svg>
        ))}
    </div>
);

const AboutClients = () => {
    const [, setPage] = useState(0);

    return (
        <section className="bg-[#0E0E0E] py-16 px-6 lg:px-12">
            <div className="container mx-auto">

                {/* Title */}
                <h2 className="text-white font-black text-[32px] lg:text-[48px] text-center mb-2">
                    We put our clients first
                </h2>

                {/* Trustpilot Header */}
                <div className="flex flex-col items-center justify-center gap-1 mb-10">
                    <div className="flex items-center gap-4">
                        <span className="text-white font-bold text-2xl">Excellent</span>
                        <StarRow />
                        <div className="flex items-center gap-1.5 ml-2 border-l border-white/20 pl-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <polygon points="12,2 15.1,8.3 22,9.3 17,14.1 18.2,21 12,17.8 5.8,21 7,14.1 2,9.3 8.9,8.3" fill="#00b67a" />
                            </svg>
                            <span className="text-white font-semibold text-lg tracking-tight">Trustpilot</span>
                        </div>
                    </div>
                    <p className="text-white/60 text-sm mt-1">Based on 8,921 Reviews</p>
                </div>

                {/* Review Card Container */}
                <div className="bg-[#333333] rounded-sm py-10 px-8 flex items-center justify-between gap-6 overflow-hidden">

                    {/* Reviews */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-1">
                        {reviews.slice(0, 3).map((r) => (
                            <div key={r.id} className="flex flex-col gap-2 border-r border-white/10 pr-6 last:border-0">
                                <div className="flex items-center gap-2">
                                    <StarRow />
                                    <span className="text-white text-xs flex items-center gap-1 font-semibold">
                                        <CheckCircle size={14} className="text-white fill-black" strokeWidth={1} />
                                        Verified
                                    </span>
                                </div>
                                <p className="text-white font-bold text-base mt-2">{r.text}</p>
                                <p className="text-[#a0a0a0] text-xs">{r.author}, {r.time}</p>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="shrink-0 flex gap-3 ml-4">
                        <button
                            onClick={() => setPage(p => Math.max(0, p - 1))}
                            className="w-12 h-10 rounded-lg border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition"
                        >
                            <ArrowLeft size={20} strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => setPage(p => p + 1)}
                            className="w-12 h-10 rounded-lg border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition"
                        >
                            <ArrowRight size={20} strokeWidth={1.5} />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutClients;
