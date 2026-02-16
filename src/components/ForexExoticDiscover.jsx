import React, { useState } from 'react';
import phoneImg from '../assets/forex/phone.jpg';

const ForexExoticDiscover = () => {
    return (
        <section className="bg-black text-white relative h-[600px] lg:h-[700px] flex items-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-900 to-transparent opacity-50 z-0"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col-reverse lg:flex-row items-center h-full">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left z-20">
                    <h2 className="text-[32px] lg:text-[48px] font-black uppercase text-white leading-tight mb-8">
                        DISCOVER <span className="text-[#EBCBA5]">EXOTIC FOREX</span> <br />
                        OPPORTUNITIES
                    </h2>

                    <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                        Diversify your portfolio by trading exotic currency pairs. Access markets like USD/MXN, USD/ZAR, and USD/THB with competitive spreads and deep liquidity.
                    </p>

                    <button className="border border-white/20 text-white px-8 py-3 rounded text-sm font-bold hover:bg-[#EBCBA5] hover:text-black hover:border-transparent transition-all tracking-wider uppercase">
                        Explore Markets
                    </button>
                </div>

                {/* Right Image (Phone App) */}
                <div className="w-full lg:w-1/2 h-full relative flex items-center justify-center lg:justify-end">
                    {/* Glow effect behind phone */}
                    <div className="absolute w-[500px] h-[500px] bg-[#EBCBA5]/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <img
                        src={phoneImg}
                        alt="Ruby Trading App"
                        className="relative z-10 max-h-[80%] object-contain drop-shadow-2xl translate-y-10 lg:translate-y-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default ForexExoticDiscover;
