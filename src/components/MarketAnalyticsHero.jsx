import React from 'react';
import heroImg from '../assets/market/academybanner1.png';

const MarketAnalyticsHero = () => {
    return (
        <section className="relative w-full min-h-[400px] lg:min-h-[480px] bg-black flex items-center overflow-hidden">
            {/* Subtle red glow on the right */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-red-900/20 blur-[100px] pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 py-16 lg:py-0 min-h-[400px] lg:min-h-[480px]">
                {/* Left: Text Content */}
                <div className="w-full lg:w-1/2 text-left">
                    <h1 className="text-[48px] lg:text-[72px] font-black uppercase leading-none text-white tracking-tighter mb-6 drop-shadow-lg">
                        MARKET <br />ANALYTICS
                    </h1>
                    <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg font-medium">
                        Don't miss out on opportunities with our daily market reports. Get essential news, trade ideas, and insights from RUBY experts.
                    </p>
                </div>

                {/* Right: Hero Image */}
                <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end h-[300px] lg:h-[480px]">
                    <img
                        src={heroImg}
                        alt="Market Analytics Ruby"
                        className="absolute right-[-5%] top-[-10%] h-[120%] w-auto object-contain object-right"
                    />
                </div>
            </div>
        </section>
    );
};

export default MarketAnalyticsHero;
