import React, { useState } from 'react';
import metalsImg from '../assets/metals/metals.png';
import { Link } from 'react-router-dom';

const MetalsHero = () => {
    const [activeTab, setActiveTab] = useState('Metals');

    const categories = [
        'Forex', 'Metals', 'Indices', 'Energies', 'Stocks', 'Forex Exotic'
    ];

    return (
        <section className="relative w-full min-h-[600px] lg:h-[700px] bg-gradient-to-br from-[#FFF8E7] via-[#f7d683] to-[#eebc5d] flex items-center overflow-hidden pt-10">
            {/* Top Navigation Tabs - Overlaying the Hero */}
            <div className="absolute top-20 left-0 w-full z-30">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center gap-6 lg:gap-10 border-b border-black/10 pb-4 overflow-x-auto no-scrollbar">
                        {categories.map((cat, index) => (
                            <Link
                                key={index}
                                to={cat === 'Metals' ? '/metals' : cat === 'Forex' ? '/forex' : '#'}
                                className={`text-sm lg:text-base font-bold uppercase tracking-wider whitespace-nowrap transition-colors pb-2 relative ${cat === 'Metals'
                                        ? 'text-black'
                                        : 'text-gray-500 hover:text-black'
                                    }`}
                            >
                                {cat}
                                {cat === 'Metals' && (
                                    <span className="absolute bottom-[-17px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-black"></span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col-reverse lg:flex-row items-center h-full mt-16">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left z-20">
                    <h1 className="text-[48px] lg:text-[72px] font-black uppercase leading-[0.9] text-black mb-6 tracking-tighter">
                        TRADE PRECIOUS <br />
                        METALS <span className="text-[#F7931A]">WITH RUBY</span>
                    </h1>

                    <p className="text-lg lg:text-xl text-black/80 font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Conquer the global economy by trading CFDs on precious metals like gold and silver.
                    </p>

                    <button className="bg-[#F7931A] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#e68a19] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Trade with RUBY
                    </button>
                </div>

                {/* Hero Image */}
                <div className="w-full lg:w-1/2 relative h-[400px] lg:h-full flex items-center justify-center lg:justify-end z-10">
                    <div className="relative w-[120%] h-[120%] lg:w-[140%] lg:h-[140%] right-[-10%] lg:right-[-20%]">
                        <img
                            src={metalsImg}
                            alt="Trade Metals with Ruby"
                            className="w-full h-full object-contain animate-float"
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Overlay Elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] z-0 pointer-events-none mix-blend-multiply"></div>
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-yellow-400 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        </section>
    );
};

export default MetalsHero;
