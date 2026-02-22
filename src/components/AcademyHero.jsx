import React from 'react';
import bgImg from '../assets/acadamy/acdamy.jpg';
import newImg from '../assets/acadamy/new.png';
import areadImg from '../assets/acadamy/aread.png';
import { ArrowRight } from 'lucide-react';

const AcademyHero = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Image — covers entire section including cards */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImg}
                    alt="RUBY Academy"
                    className="w-full h-full object-cover object-top"
                />
                {/* Gradient fade to black at the bottom for cards readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 pointer-events-none"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-12">
                {/* ── Top text ── */}
                <div className="pt-24 pb-8 max-w-xl">
                    <h1 className="text-[40px] lg:text-[58px] font-black uppercase leading-[0.95] text-white tracking-tighter mb-5 drop-shadow-lg">
                        LEARN TO TRADE <br />
                        SMARTER{' '}
                        <span className="text-[#FF0000]">WITH RUBY</span>
                    </h1>
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-sm">
                        Transform uncertainty into confidence, with guidance available throughout your journey
                    </p>
                </div>

                {/* ── "Find your path" ── */}
                <div className="text-center py-6">
                    <p className="text-white font-black text-[22px] lg:text-[28px] uppercase tracking-widest drop-shadow-lg">
                        FIND YOUR TRADING PATH.
                    </p>
                </div>

                {/* ── Two Cards ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-12">

                    {/* Card 1 – NEW TO TRADING */}
                    <div
                        className="relative rounded-2xl overflow-hidden min-h-[210px]"
                        style={{
                            backgroundImage: `url(${newImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Text content */}
                        <div className="relative z-10 flex flex-col h-full p-7">
                            <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                Foundations
                            </p>
                            <h2 className="text-white font-black text-[22px] uppercase leading-tight mb-2">
                                NEW TO TRADING?
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-[55%]">
                                Learn the essentials no prior experience required.
                            </p>
                            <button className="flex items-center gap-2 border border-white/40 rounded-full px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-all w-max mt-auto">
                                Start learning
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Card 2 – ALREADY TRADING */}
                    <div
                        className="relative rounded-2xl overflow-hidden min-h-[210px]"
                        style={{
                            backgroundImage: `url(${areadImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Text content */}
                        <div className="relative z-10 flex flex-col h-full p-7">
                            <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                                Next Steps
                            </p>
                            <h2 className="text-white font-black text-[22px] uppercase leading-tight mb-2">
                                ALREADY TRADING?
                            </h2>
                            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-[55%]">
                                Advance your skills with professional tools and strategies.
                            </p>
                            <button className="flex items-center gap-2 border border-white/40 rounded-full px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-all w-max mt-auto">
                                Upgrade now
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AcademyHero;
