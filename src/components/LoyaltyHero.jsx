import React from 'react';
import banner from '../assets/loyalty/banner.jpg';

const LoyaltyHero = () => {
    return (
        <section
            className="relative bg-cover bg-[position:40%_center] lg:bg-[position:30%_center] xl:bg-[position:20%_center] bg-no-repeat pt-24 pb-32 lg:pt-32 lg:pb-40 min-h-[600px] flex items-center overflow-hidden"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px] relative z-20">
                <div className="w-full lg:w-[60%] flex flex-col justify-center">
                    <h1 className="text-white font-black text-[42px] md:text-[54px] lg:text-[72px] leading-[1.1] tracking-wide uppercase mb-6 drop-shadow-md">
                        RUBY FOREX <br />
                        LOYALTY
                    </h1>
                    <p className="text-white text-[18px] md:text-[22px] font-medium leading-relaxed mb-10 max-w-[650px]">
                        Trade, earn points, and unlock exclusive rewards. Join our premium loyalty program designed for serious traders.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#ffaa00] hover:bg-[#e69900] text-white font-bold text-[18px] px-10 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 w-full sm:w-[200px]">
                            Get Started
                        </button>
                        <button className="bg-black hover:bg-gray-900 text-white font-bold text-[18px] px-10 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 w-full sm:w-[240px]">
                            Browse Rewards
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoyaltyHero;
