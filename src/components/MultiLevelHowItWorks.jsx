import React from 'react';
import gemhowitwork from '../assets/support/gemhowitwork.png';

const MultiLevelHowItWorks = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#050000] via-[#1a0404] to-[#4d0000] py-24 lg:py-32 overflow-hidden min-h-[700px] flex items-center">

            {/* Background Image: Big Gem bottom left */}
            <div className="absolute bottom-0 left-[-40%] md:left-[-20%] lg:left-[-5%] z-10 pointer-events-none pr-0 flex items-end h-[110%]">
                <img
                    src={gemhowitwork}
                    alt="How it works gem"
                    className="w-[900px] md:w-[1300px] lg:w-[1800px] max-w-none object-contain select-none object-bottom mix-blend-screen"
                />
            </div>

            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px] relative z-20">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-8">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-[45%] flex flex-col items-start lg:-mt-20">
                        <h2 className="font-black text-[42px] md:text-[54px] lg:text-[60px] xl:text-[64px] uppercase tracking-wide leading-tight text-white mb-8 drop-shadow-md whitespace-nowrap">
                            HOW IT WORKS
                        </h2>
                        <button className="bg-[#da292e] hover:bg-red-600 text-white font-medium text-[18px] px-14 py-4 rounded-[10px] shadow-lg transition-transform hover:-translate-y-1">
                            Join now
                        </button>
                    </div>

                    {/* Right: Steps Card */}
                    <div className="w-full lg:w-[50%] bg-black/40 backdrop-blur-md border border-white/10 rounded-[30px] p-8 md:p-14 shadow-2xl relative z-20">

                        {/* Step 1 */}
                        <div className="flex gap-6 mb-8">
                            <div className="flex-shrink-0">
                                <div className="w-[50px] h-[36px] border border-red-600/40 bg-[#160202]/50 rounded-lg flex items-center justify-center font-medium text-white shadow-inner">
                                    1
                                </div>
                            </div>
                            <div className="pt-1">
                                <h3 className="font-bold text-[18px] md:text-[22px] text-white uppercase tracking-wide mb-2 leading-tight">
                                    START AS A PARTNER
                                </h3>
                                <p className="text-gray-300 text-[15px] md:text-[16px] font-medium leading-relaxed">
                                    Open an RUBY Partner account.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="border-white/20 my-8 ml-[74px]" />

                        {/* Step 2 */}
                        <div className="flex gap-6 mb-8">
                            <div className="flex-shrink-0">
                                <div className="w-[50px] h-[36px] border border-red-600/40 bg-[#160202]/50 rounded-lg flex items-center justify-center font-medium text-white shadow-inner">
                                    2
                                </div>
                            </div>
                            <div className="pt-1">
                                <h3 className="font-bold text-[18px] md:text-[22px] text-white uppercase tracking-wide mb-2 leading-tight">
                                    INVITE SUB-PARTNERS TO THE PROGRAM
                                </h3>
                                <p className="text-gray-300 text-[15px] md:text-[16px] font-medium leading-relaxed max-w-[400px]">
                                    Share your referral link and use the provided advertising materials to attract sub-Partners.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="border-white/20 my-8 ml-[74px]" />

                        {/* Step 3 */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-[50px] h-[36px] border border-red-600/40 bg-[#160202]/50 rounded-lg flex items-center justify-center font-medium text-white shadow-inner">
                                    3
                                </div>
                            </div>
                            <div className="pt-1">
                                <h3 className="font-bold text-[18px] md:text-[22px] text-white uppercase tracking-wide mb-2 leading-tight">
                                    GET A REWARD
                                </h3>
                                <p className="text-gray-300 text-[15px] md:text-[16px] font-medium leading-relaxed max-w-[400px]">
                                    Receive a 20% commission on every trade made by your sub-Partners' clients.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default MultiLevelHowItWorks;
