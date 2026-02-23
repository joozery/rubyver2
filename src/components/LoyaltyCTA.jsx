import React from 'react';
import bannerstar from '../assets/loyalty/bannerstar.png';

const LoyaltyCTA = () => {
    return (
        <section
            className="relative bg-cover bg-top bg-no-repeat h-[450px] md:h-[550px] lg:h-[610px] flex items-center overflow-hidden mt-[-45px] md:mt-[-75px] lg:mt-[-90px] z-10"
            style={{ backgroundImage: `url(${bannerstar})` }}
        >
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px] relative z-10">
                <div className="flex justify-end">
                    <div className="w-full lg:w-[50%] flex flex-col items-start lg:items-start text-left">
                        <h2 className="font-black text-[32px] md:text-[46px] lg:text-[64px] uppercase tracking-wide leading-tight text-white mb-4 drop-shadow-lg">
                            READY TO START <br />
                            EARNING?
                        </h2>
                        <p className="text-white text-[18px] md:text-[22px] font-medium mb-10 max-w-[500px] drop-shadow-md">
                            Join thousands of traders who are already enjoying exclusive rewards.
                        </p>
                        <a
                            href="https://client.rubyfxtrade.com/register/trader"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#f13010] hover:bg-[#d6290e] text-white font-bold text-[18px] px-14 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 text-center"
                        >
                            Join Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoyaltyCTA;
