import React from 'react';
import gempartner from '../assets/program/gempartner.png';

const ProgramSteps = () => {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px] relative">

                {/* Header */}
                <div className="text-center mb-16 relative z-30">
                    <h2 className="font-black text-[36px] md:text-[50px] uppercase tracking-wide leading-tight">
                        <span className="text-black block">START EARNING</span>
                        <span className="text-[#f13a04] block">IN THREE STEPS</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="bg-[#bcbcbc] rounded-3xl p-8 border border-gray-300 shadow-sm transition-shadow">
                        <p className="text-[#555] text-[12px] font-bold uppercase mb-3">Step 1</p>
                        <h3 className="text-white font-bold text-[18px] lg:text-[20px] uppercase mb-6">
                            OPEN A PARTNER ACCOUNT
                        </h3>
                        <p className="text-white text-[14.5px] leading-relaxed font-light">
                            Click Open Partner account below and register. <br className="hidden lg:block" />
                            Confirm your email to access the RUBY Partner Area.
                        </p>
                    </div>

                    <div className="bg-[#bcbcbc] rounded-3xl p-8 border border-gray-300 shadow-sm transition-shadow">
                        <p className="text-[#555] text-[12px] font-bold uppercase mb-3">Step 2</p>
                        <h3 className="text-white font-bold text-[18px] lg:text-[20px] uppercase mb-6">
                            OPEN A PARTNER ACCOUNT
                        </h3>
                        <p className="text-white text-[14.5px] leading-relaxed font-light">
                            Use the advertising materials in your RUBY Partner Area to attach clients to your account by Partner ID or referral link.
                        </p>
                    </div>

                    <div className="bg-[#bcbcbc] rounded-3xl p-8 border border-gray-300 shadow-sm transition-shadow">
                        <p className="text-[#555] text-[12px] font-bold uppercase mb-3">Step 3</p>
                        <h3 className="text-white font-bold text-[18px] lg:text-[20px] uppercase mb-6">
                            PROMOTE TRADING WITH RUBY
                        </h3>
                        <p className="text-white text-[14.5px] leading-relaxed font-light">
                            Motivate your clients to trade. Once they start trading with RUBY, you will receive daily payouts in your RUBY Partner Area.
                        </p>
                    </div>
                </div>

                {/* Call to Action Button */}
                <div className="mt-14 flex justify-center relative z-30">
                    <button className="bg-[#f13a04] hover:bg-red-600 text-white font-bold text-[18px] lg:text-[20px] px-12 py-3 md:py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                        Open Partner account
                    </button>
                </div>
            </div>

            {/* Background Image */}
            <div className="absolute bottom-0 right-[-60%] md:right-[-40%] lg:right-[-20%] z-20 pointer-events-none translate-y-0 flex justify-end">
                <img
                    src={gempartner}
                    alt="Ruby Gem Partner"
                    className="w-[1200px] md:w-[1800px] lg:w-[2400px] max-w-none object-contain select-none object-bottom"
                />
            </div>

        </section>
    );
};

export default ProgramSteps;
