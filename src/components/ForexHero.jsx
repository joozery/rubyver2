import React from 'react';
import rubygemForex from '../assets/forex/rubygemforex.png';

const ForexHero = () => {
    const categories = [
        "Forex", "Metals", "Indices", "Energies", "Stocks", "Forex Exotic"
    ];

    return (
        <section className="relative w-full min-h-[600px] lg:h-[700px] bg-gradient-to-br from-[#FF001D] to-[#310006] flex items-center overflow-hidden pt-10">
            {/* Top Navigation Tabs - Overlaying the Hero */}
            <div className="absolute top-20 left-0 w-full z-30">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center gap-6 lg:gap-10 border-b border-white/10 pb-4 overflow-x-auto no-scrollbar">
                        {categories.map((cat, index) => (
                            <div key={index} className="relative group cursor-pointer shrink-0">
                                <span className={`text-sm lg:text-[15px] font-bold uppercase transition-all ${cat === "Forex" ? "text-white scale-105" : "text-white/70 hover:text-white"}`}>
                                    {cat}
                                </span>
                                {cat === "Forex" && (
                                    <div className="absolute -bottom-[17px] left-0 w-full h-[3px] bg-white">
                                        <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-20 mt-16 lg:mt-0">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-left animate-in fade-in slide-in-from-left duration-700">
                        <h1 className="text-[48px] lg:text-[84px] font-[900] leading-[0.95] mb-8 tracking-tighter uppercase text-white drop-shadow-lg">
                            TRADE FOREX <br />
                            WITH RUBY
                        </h1>
                        <p className="text-xl lg:text-[22px] font-bold max-w-xl mb-12 text-white/95 leading-snug drop-shadow-md">
                            Trade the most popular currency pairs like XAUUSD, JPYUSD, BTCUSD, and MORE 24 hours a day, 5 days a week.
                        </p>
                        <button className="bg-white hover:bg-gray-100 text-black px-12 py-5 rounded-md font-black text-xl tracking-tight transition-all active:scale-[0.98] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                            Trade with RUBY
                        </button>
                    </div>

                    {/* Image Area */}
                    <div className="lg:w-1/2 relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
                        <div className="relative z-10 transform lg:scale-[1.4] lg:translate-x-16">
                            <img
                                src={rubygemForex}
                                alt="Ruby Gem Forex"
                                className="w-full h-auto object-contain drop-shadow-[0_45px_65px_rgba(0,0,0,0.6)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-400 rounded-full blur-[150px] opacity-20"></div>
        </section>
    );
};

export default ForexHero;
