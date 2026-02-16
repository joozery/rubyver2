import React, { useState } from 'react';
import heroImg from '../assets/energies/energies.jpg';
import { Link } from 'react-router-dom';

const EnergiesHero = () => {
    const categories = [
        'Forex', 'Metals', 'Indices', 'Energies', 'Stocks', 'Forex Exotic'
    ];

    return (
        <section className="relative w-full min-h-[600px] lg:h-[700px] flex items-center overflow-hidden pt-10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImg}
                    alt="Trade Energies with Ruby"
                    className="w-full h-full object-cover"
                />
                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0"></div>
            </div>

            {/* Top Navigation Tabs - Overlaying the Hero */}
            <div className="absolute top-20 left-0 w-full z-30">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center gap-6 lg:gap-10 border-b border-white/20 pb-4 overflow-x-auto no-scrollbar">
                        {categories.map((cat, index) => (
                            <Link
                                key={index}
                                to={cat === 'Energies' ? '/energies' : cat === 'Forex' ? '/forex' : cat === 'Metals' ? '/metals' : cat === 'Indices' ? '/indices' : cat === 'Stocks' ? '/stocks' : '#'}
                                className={`text-sm lg:text-base font-bold uppercase tracking-wider whitespace-nowrap transition-colors pb-2 relative ${cat === 'Energies'
                                    ? 'text-[#FF4500]'
                                    : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                {cat}
                                {cat === 'Energies' && (
                                    <span className="absolute bottom-[-17px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#FF4500]"></span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col-reverse lg:flex-row items-center h-full mt-16">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left z-20">
                    <h1 className="text-[48px] lg:text-[72px] font-black uppercase leading-[0.9] text-white mb-6 tracking-tighter drop-shadow-lg">
                        TRADE ENERGY <br />
                        ASSETS <span className="text-[#FF0000]">WITH RUBY</span>
                    </h1>

                    <p className="text-lg lg:text-xl text-white font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
                        Trade CFDs on energy instruments like oil and gas with better-than-market conditions.
                    </p>

                    <button className="bg-[#FF0000] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#cc0000] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Trade with RUBY
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EnergiesHero;
