import React from 'react';
import bannerui from '../assets/support/bannerui.png';

const MultiLevelCTA = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-[610px] flex items-center justify-center py-20"
            style={{ backgroundImage: `url(${bannerui})` }}
        >

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <h2 className="font-black text-[32px] md:text-[46px] lg:text-[54px] uppercase tracking-wide leading-tight text-white mb-4 drop-shadow-lg">
                    PARTNERSHIP MADE PERFECT
                </h2>
                <p className="text-white text-[18px] md:text-[22px] font-medium mb-10 max-w-[800px] drop-shadow-md">
                    Join the RUBY Multi-Level Partnership to discover a rewarding opportunity.
                </p>
                <button className="bg-[#ff0000] hover:bg-red-700 text-white font-medium text-[18px] px-14 py-4 rounded-xl shadow-[0_4px_14px_0_rgba(255,0,0,0.39)] transition-transform hover:-translate-y-1">
                    Join Now
                </button>
            </div>
        </section>
    );
};

export default MultiLevelCTA;
