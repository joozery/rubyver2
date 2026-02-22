import React from 'react';
import { BadgeDollarSign } from 'lucide-react';

const MultiLevelBenefits = () => {
    return (
        <section className="bg-black py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px]">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-8">

                    {/* Left: Heading */}
                    <div className="w-full lg:w-[45%] flex flex-col items-start">
                        <h2 className="font-black text-[42px] md:text-[54px] lg:text-[60px] xl:text-[64px] uppercase tracking-wide leading-[1.1] text-white whitespace-nowrap">
                            BENEFITS FOR <br />
                            <span className="text-[#f10d0d]">SUB-PARTNERS</span>
                        </h2>
                    </div>

                    {/* Right: Cards List */}
                    <div className="w-full lg:w-[50%] flex flex-col gap-4">

                        {/* Card 1 */}
                        <div className="bg-gradient-to-r from-[#2a2a2a] to-[#121212] border border-gray-600 rounded-[4px] p-6 lg:p-8 flex items-start gap-6">
                            <div className="flex-shrink-0 pt-1">
                                <BadgeDollarSign size={28} strokeWidth={1.5} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[18px] md:text-[20px] text-white uppercase tracking-wide mb-2 leading-tight">
                                    BUSINESS WITHOUT INVESTMENT
                                </h3>
                                <p className="text-gray-300 text-[14px] font-medium leading-relaxed">
                                    The more clients trade, the more sub-Partners receive.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gradient-to-r from-[#2a2a2a] to-[#121212] border border-gray-600 rounded-[4px] p-6 lg:p-8 flex items-start gap-6">
                            <div className="flex-shrink-0 pt-1">
                                <BadgeDollarSign size={28} strokeWidth={1.5} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[18px] md:text-[20px] text-white uppercase tracking-wide mb-2 leading-tight">
                                    FULL COMMISSION
                                </h3>
                                <p className="text-gray-300 text-[14px] font-medium leading-relaxed">
                                    Sub-Partners earn 100% on their clients' trades.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gradient-to-r from-[#2a2a2a] to-[#121212] border border-gray-600 rounded-[4px] p-6 lg:p-8 flex items-start gap-6">
                            <div className="flex-shrink-0 pt-1">
                                <BadgeDollarSign size={28} strokeWidth={1.5} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[18px] md:text-[20px] text-white uppercase tracking-wide mb-2 leading-tight">
                                    PROFESSIONAL GROWTH
                                </h3>
                                <p className="text-gray-300 text-[14px] font-medium leading-relaxed">
                                    Sub-Partners can become Partners by expanding the trading community.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default MultiLevelBenefits;
