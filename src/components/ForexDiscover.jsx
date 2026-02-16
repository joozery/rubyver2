import React from 'react';
import phoneImg from '../assets/forex/phone.jpg';

const ForexDiscover = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Large Featured Image */}
                <div className="w-full mb-12 overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
                    <img
                        src={phoneImg}
                        alt="Discover Forex Trading"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="max-w-4xl">
                    <h2 className="text-[32px] lg:text-[48px] font-black uppercase text-black leading-tight mb-6 tracking-tight">
                        DISCOVER FOREX TRADING WITH RUBY
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-700 font-bold leading-relaxed max-w-3xl">
                        Trade currency pairs with RUBY and enjoy low spreads, fast execution, and tools designed for beginners and experts.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ForexDiscover;
