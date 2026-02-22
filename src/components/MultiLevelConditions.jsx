import React from 'react';
import { Percent, Handshake, DollarSign } from 'lucide-react';

const MultiLevelConditions = () => {
    return (
        <section className="bg-white py-24 border-b border-gray-100">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px]">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-black text-[32px] md:text-[46px] uppercase tracking-wide leading-tight text-black">
                        BETTER-THAN-MARKET<br />
                        CONDITIONS
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className="bg-[#f5f5f5] border border-gray-200 rounded-lg p-8 flex flex-col items-start transition-shadow hover:shadow-md">
                        <div className="mb-6">
                            <Percent size={36} strokeWidth={1.5} className="text-black" />
                        </div>
                        <h3 className="font-bold text-[20px] text-black mb-3">
                            20% COMMISSION
                        </h3>
                        <p className="text-[#333] text-[15px] font-medium leading-relaxed">
                            Get a commission on every trade made by your sub-Partner's clients.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#f5f5f5] border border-gray-200 rounded-lg p-8 flex flex-col items-start transition-shadow hover:shadow-md">
                        <div className="mb-6">
                            <Handshake size={36} strokeWidth={1.5} className="text-black" />
                        </div>
                        <h3 className="font-bold text-[20px] text-black mb-3">
                            1 SUB-PARTNER TO START
                        </h3>
                        <p className="text-[#333] text-[15px] font-medium leading-relaxed">
                            Begin with just one sub-Partner to start earning extra rewards.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#f5f5f5] border border-gray-200 rounded-lg p-8 flex flex-col items-start transition-shadow hover:shadow-md">
                        <div className="mb-6 border-2 border-black rounded-md p-1">
                            <DollarSign size={24} strokeWidth={2} className="text-black" />
                        </div>
                        <h3 className="font-bold text-[20px] text-black mb-3">
                            24/7 WITHDRAWALS
                        </h3>
                        <p className="text-[#333] text-[15px] font-medium leading-relaxed">
                            Receive your earnings with regular daily payouts.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MultiLevelConditions;
