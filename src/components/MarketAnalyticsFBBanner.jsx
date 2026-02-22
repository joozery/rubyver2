import React from 'react';
import bgImg from '../assets/market/fbbaner.jpg';

const MarketAnalyticsFBBanner = () => {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Optional slight overlay for readability */}
            <div className="absolute inset-0 bg-blue-600/30 pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 py-10 flex flex-col sm:flex-row items-center gap-6 justify-between">

                {/* Left: Text only — shifted right to not cover FB logo in background */}
                <div className="flex items-center pl-24 lg:pl-32">
                    <p className="text-white text-base lg:text-lg leading-relaxed max-w-xl drop-shadow">
                        Join out{' '}
                        <span className="font-black text-white">Facebook channel</span>
                        {' '}to unlock exciting trade ideas and stay ahead with timely market updates.
                    </p>
                </div>

                {/* Right: CTA */}
                <a
                    href="#"
                    className="flex items-center gap-2 text-white font-bold text-base whitespace-nowrap hover:opacity-80 transition-opacity shrink-0"
                >
                    Unlock trade ideas
                    <span className="text-xl leading-none">→</span>
                </a>
            </div>
        </section>
    );
};

export default MarketAnalyticsFBBanner;
