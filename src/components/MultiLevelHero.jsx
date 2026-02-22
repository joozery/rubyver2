import React from 'react';
import ibgem from '../assets/support/ibgem.png';

const MultiLevelHero = () => {
    return (
        <section className="relative bg-gradient-to-tr from-[#3b4756] via-[#272f38] to-[#161a20] pt-16 pb-20 lg:pt-20 lg:pb-28 min-h-[500px] flex items-center overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px] relative z-20">
                <div className="w-full lg:w-[65%] flex flex-col justify-center">
                    <h1 className="text-white font-black text-[38px] md:text-[54px] lg:text-[64px] leading-[1.1] tracking-wide uppercase mb-6 drop-shadow-lg">
                        RUBY MULTI-LEVEL <br />
                        PARTNERSHIP
                    </h1>
                    <p className="text-white/90 text-[18px] md:text-[22px] font-medium leading-relaxed mb-10 max-w-[600px]">
                        Get rewarded while growing your trading community.
                    </p>
                    <div>
                        <button className="bg-[#da292e] hover:bg-red-600 text-white font-bold text-[18px] px-10 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                            Partner with RUBY
                        </button>
                    </div>
                </div>
            </div>

            {/* Gem Image */}
            <div className="absolute top-[-5%] right-[-50%] md:right-[-25%] lg:right-[0%] z-10 pointer-events-none pr-0">
                <img
                    src={ibgem}
                    alt="Ruby Multi-level Gem"
                    className="w-[800px] md:w-[1200px] lg:w-[1500px] max-w-none object-contain select-none drop-shadow-2xl translate-x-10 lg:-translate-y-8"
                />
            </div>

        </section>
    );
};

export default MultiLevelHero;
