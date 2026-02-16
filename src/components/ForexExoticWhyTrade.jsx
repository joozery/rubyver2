import React, { useState } from 'react';

const ForexExoticWhyTrade = () => {
    return (
        <section className="bg-black text-white py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] lg:text-[48px] font-black uppercase text-white leading-tight mb-4 tracking-tight">
                        WHY TRADE <span className="text-[#EBCBA5]">EXOTIC FOREX</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto">
                        Unlock unique trading opportunities in the forex market with exotic pairs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-8 border border-white/10 rounded-lg hover:border-[#EBCBA5]/50 transition-colors group">
                        <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center text-3xl group-hover:bg-[#EBCBA5]/10 group-hover:text-[#EBCBA5] transition-colors">
                            📈
                        </div>
                        <h3 className="text-xl font-bold mb-4 uppercase">High Volatility</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Emerging market currencies often exhibit higher volatility, presenting more opportunities for profit.
                        </p>
                    </div>

                    <div className="p-8 border border-white/10 rounded-lg hover:border-[#EBCBA5]/50 transition-colors group">
                        <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center text-3xl group-hover:bg-[#EBCBA5]/10 group-hover:text-[#EBCBA5] transition-colors">
                            🌍
                        </div>
                        <h3 className="text-xl font-bold mb-4 uppercase">Diversification</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Add exposure to developing economies like South Africa, Turkey, and Mexico to your portfolio.
                        </p>
                    </div>

                    <div className="p-8 border border-white/10 rounded-lg hover:border-[#EBCBA5]/50 transition-colors group">
                        <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center text-3xl group-hover:bg-[#EBCBA5]/10 group-hover:text-[#EBCBA5] transition-colors">
                            ⚡
                        </div>
                        <h3 className="text-xl font-bold mb-4 uppercase">Carry Trade</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Benefit from potentially higher interest rates often associated with emerging market currencies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForexExoticWhyTrade;
