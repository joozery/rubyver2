import React from 'react';
import stayImg from '../assets/market/stay.png';
import { ArrowRight } from 'lucide-react';

const MarketAnalyticsVIP = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left: Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={stayImg}
                            alt="Stay ahead of the market"
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[36px] lg:text-[52px] font-black uppercase text-black tracking-tight leading-none mb-6">
                            VIP ANALYTICS
                        </h2>
                        <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-10 max-w-md">
                            Don't miss out on opportunities with our daily market reports. Get essential news, trade ideas, and insights from RUBY experts.
                        </p>

                        {/* Learn more button */}
                        <button className="flex items-center gap-3 border border-gray-300 rounded-full px-8 py-3 text-sm font-semibold text-black hover:border-black hover:bg-gray-50 transition-all">
                            Learn more
                            <ArrowRight size={16} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MarketAnalyticsVIP;
