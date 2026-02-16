import React, { useState } from 'react';
import coinImg from '../assets/coin.png';

const ForexExoticFundsSecure = () => {
    return (
        <section className="bg-black text-white relative py-20 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Text */}
                <div className="md:w-1/2">
                    <h2 className="text-[36px] lg:text-[56px] font-black uppercase leading-tight mb-8 tracking-tight">
                        YOUR FUNDS ARE <br />
                        <span className="text-[#EBCBA5]">SECURE WITH US</span>
                    </h2>
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-[#EBCBA5]/10 flex items-center justify-center shrink-0 text-[#EBCBA5] text-xl font-bold border border-[#EBCBA5]/20">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-2">Segregated Accounts</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Client funds are kept in top-tier bank accounts, completely separate from company operational funds.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-[#EBCBA5]/10 flex items-center justify-center shrink-0 text-[#EBCBA5] text-xl font-bold border border-[#EBCBA5]/20">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-2">Negative Balance Protection</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Ensure that you never lose more than your account balance, even during extreme volatility.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-[#EBCBA5]/10 flex items-center justify-center shrink-0 text-[#EBCBA5] text-xl font-bold border border-[#EBCBA5]/20">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-2">Regulated Broker</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    We adhere to strict financial standards and regular audits to ensure transparency and safety.
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className="mt-12 bg-[#EBCBA5] text-black px-10 py-4 rounded-md font-bold text-lg hover:bg-[#d9b894] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-wide">
                        Secure Your Account
                    </button>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center lg:justify-end relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EBCBA5]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <img
                        src={coinImg}
                        alt="Join Ruby"
                        className="relative z-10 w-full max-w-sm lg:max-w-md object-contain animate-float drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default ForexExoticFundsSecure;
