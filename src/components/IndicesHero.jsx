import React, { useState } from 'react';
import heroImg from '../assets/Indices/Indices.png';
import { Link } from 'react-router-dom';

const IndicesHero = () => {
    const categories = [
        'Forex', 'Metals', 'Indices', 'Energies', 'Stocks', 'Forex Exotic'
    ];

    return (
        <section className="relative w-full min-h-[600px] lg:h-[700px] bg-gradient-to-r from-[#6e7a85] to-[#caced1] flex items-center overflow-hidden pt-10">
            {/* Top Navigation Tabs - Overlaying the Hero */}
            <div className="absolute top-20 left-0 w-full z-30">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center gap-6 lg:gap-10 border-b border-black/10 pb-4 overflow-x-auto no-scrollbar">
                        {categories.map((cat, index) => (
                            <Link
                                key={index}
                                to={cat === 'Indices' ? '/indices' : cat === 'Forex' ? '/forex' : cat === 'Metals' ? '/metals' : cat === 'Energies' ? '/energies' : cat === 'Stocks' ? '/stocks' : '#'}
                                className={`text-sm lg:text-base font-bold uppercase tracking-wider whitespace-nowrap transition-colors pb-2 relative ${cat === 'Indices'
                                    ? 'text-black'
                                    : 'text-gray-700 hover:text-black'
                                    }`}
                            >
                                {cat}
                                {cat === 'Indices' && (
                                    <span className="absolute bottom-[-17px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-black"></span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Gradient matching screenshot - Dark Slate to Light Grey */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3e4a59] via-[#8c9ab0] to-[#e2e4e6] z-0"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-20 flex items-center h-full mt-16">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left pt-12">
                    <h1 className="text-[54px] lg:text-[80px] font-black uppercase leading-[0.9] text-white mb-4 tracking-tighter drop-shadow-md">
                        TRADE INDICES <br />
                        <span className="text-[#333333]">WITH RUBY</span>
                    </h1>

                    <p className="text-lg lg:text-xl text-white font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-sm">
                        Excel in trading indices with powerful tools, tight spreads, and expert analysis.
                    </p>

                    <button className="bg-[#FF0000] text-white px-12 py-4 rounded font-bold text-lg hover:bg-[#cc0000] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Trade with RUBY
                    </button>
                </div>
            </div>

            {/* Hero Image - Positioned slightly overflowing bottom right */}
            <div className="absolute right-0 bottom-0 lg:h-[85%] h-[50%] w-full lg:w-[50%] z-10 pointer-events-none flex items-end justify-end">
                <img
                    src={heroImg}
                    alt="Trade Indices with Ruby"
                    className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                />
            </div>

            {/* Decorative Overlay Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-white/10 to-transparent opacity-50 z-0 pointer-events-none mix-blend-overlay"></div>
        </section>
    );
};

export default IndicesHero;
