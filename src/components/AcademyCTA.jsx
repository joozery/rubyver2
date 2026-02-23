import React from 'react';
import stoneImg from '../assets/stone.png';

const AcademyCTA = () => {
    return (
        <section
            className="relative w-full min-h-[380px] lg:min-h-[480px] flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${stoneImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >


            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <h2 className="text-white font-black text-[28px] lg:text-[48px] uppercase leading-tight mb-8 drop-shadow-lg">
                    READY TO TRADE MORE EFFECTIVELY?<br />
                    START HERE
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://client.rubyfxtrade.com/register/trader"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-3.5 rounded-lg text-base transition-colors w-full sm:w-auto inline-flex items-center justify-center text-center"
                    >
                        Let's trade
                    </a>
                    <button className="bg-transparent border-2 border-white/60 hover:border-white text-white font-bold px-12 py-3.5 rounded-lg text-base transition-colors w-full sm:w-auto">
                        Learn first
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AcademyCTA;
