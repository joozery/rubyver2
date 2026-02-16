import React from 'react';
import bannerApp from '../assets/bannerapp.jpg';

const RubyAppHero = () => {
    return (
        <section className="relative w-full min-h-[500px] lg:h-[600px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bannerApp}
                    alt="Ruby App Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="lg:w-1/2 text-white">
                    <h1 className="text-[40px] lg:text-[64px] font-black leading-[1.1] mb-6 tracking-tight uppercase">
                        TRADE SEAMLESSLY<br />
                        ANYWHERE WITH<br />
                        THE RUBY APP
                    </h1>
                    <p className="text-lg lg:text-xl max-w-xl mb-10 opacity-90 font-medium">
                        A refined, secure, and intuitive platform designed to help you unlock your full trading potential.
                    </p>
                    <button className="bg-white text-[#0047FF] hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all active:scale-[0.98] shadow-xl shadow-blue-900/20 uppercase">
                        GET RUBY APP
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RubyAppHero;
