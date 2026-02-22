import React from 'react';

const ProgramRebate = () => {
    return (
        <section className="bg-[#050505] py-24 border-t border-gray-800 border-b border-gray-800">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1000px]">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-16">

                    {/* Left: Text Content */}
                    <div className="w-full md:w-[45%] flex flex-col">
                        <h2 className="font-black text-[28px] md:text-[36px] lg:text-[40px] uppercase tracking-wide leading-tight mb-6 text-white">
                            INCREASE INCOME<br />
                            WITH REBATE
                        </h2>
                        <p className="text-gray-200 text-[16px] md:text-[17px] leading-relaxed mb-6 font-light">
                            Share part of your commission with your clients as a token of gratitude. This will motivate them to keep trading.
                        </p>
                        <p className="text-gray-200 text-[16px] md:text-[17px] leading-relaxed font-light">
                            According to our survey, Rebate can increase
                            your commission by up to 4 times. This
                            retention tool allows you to build long-term
                            relationships with your clients and ultimately
                            earn more commission.
                        </p>
                    </div>

                    {/* Right: List Items */}
                    <div className="w-full md:w-[55%] flex flex-col justify-center gap-3">
                        {[
                            "1. Clients trade with RUBY",
                            "2. You receive commissions",
                            "3. You thank clients by sharing part of your commissions",
                            "4. Clients are motivated to trade more",
                            "5. You earn more income"
                        ].map((item, index) => (
                            <div key={index} className="bg-[#3a3a3a] rounded-[10px] px-6 py-[14px]">
                                <span className="text-white text-[15px] md:text-[17px] leading-snug tracking-wide">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center Button */}
                <div className="flex justify-center">
                    <button className="bg-[#f13a04] hover:bg-red-600 text-white font-medium text-[16px] md:text-[18px] px-12 py-[14px] rounded-lg transition-colors">
                        Earn with RUBY
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProgramRebate;
