import React, { useState } from 'react';

const ForexExoticConditions = () => {
    return (
        <section className="bg-[#111] text-white py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
                    <div className="flex flex-col gap-2">
                        <div className="text-[48px] font-black text-[#EBCBA5]">
                            1:500
                        </div>
                        <h4 className="text-xl font-bold uppercase tracking-wide">Leverage</h4>
                        <p className="text-gray-400 text-sm">Maximize potential with flexible leverage options.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[48px] font-black text-[#EBCBA5]">
                            0.0
                        </div>
                        <h4 className="text-xl font-bold uppercase tracking-wide">Pips</h4>
                        <p className="text-gray-400 text-sm">Spreads starting from 0.0 pips on major accounts.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[48px] font-black text-[#EBCBA5]">
                            &lt; 30ms
                        </div>
                        <h4 className="text-xl font-bold uppercase tracking-wide">Execution</h4>
                        <p className="text-gray-400 text-sm">Ultra-fast execution speeds with no requotes.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[48px] font-black text-[#EBCBA5]">
                            24/7
                        </div>
                        <h4 className="text-xl font-bold uppercase tracking-wide">Support</h4>
                        <p className="text-gray-400 text-sm">Dedicated support team available around the clock.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForexExoticConditions;
