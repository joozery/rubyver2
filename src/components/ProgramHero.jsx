import React from 'react';
import programBg from '../assets/program/program.jpg';

const ProgramHero = () => {
    return (
        <section
            className="w-full bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center relative overflow-hidden"
            style={{ backgroundImage: `url(${programBg})` }}
        >
            {/* Optional gradient overlay if the image requires it to make text legible */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/60 to-transparent pointer-events-none md:hidden"></div>

            <div className="container mx-auto px-6 lg:px-16 xl:px-24 py-20 z-10 relative">
                <div className="max-w-[700px]">
                    <h1 className="text-white font-black text-[38px] md:text-[50px] lg:text-[64px] uppercase tracking-wide leading-none mb-4 md:mb-6">
                        RUBY IB PROGRAM
                    </h1>
                    <p className="text-white text-[18px] md:text-[22px] font-medium mb-8">
                        Build your own business with zero upfront costs.
                    </p>

                    <button className="bg-[#facc15] hover:bg-yellow-500 text-white font-bold text-lg px-8 py-3 rounded-md mb-10 transition-colors shadow-lg shadow-[#d97706]/40">
                        Open Partner Account
                    </button>

                    <p className="text-white text-base md:text-[19px] leading-[1.6] font-medium max-w-[650px]">
                        Invite your clients to trade with RUBY and unlock access to some of the industry’s most competitive commission structures. As your clients grow, your earnings grow alongside them.
                    </p>
                </div>
            </div>

            {/* Bottom Gradient Overlay similar to the design */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FFCE68] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default ProgramHero;
