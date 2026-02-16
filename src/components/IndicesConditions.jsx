import React from 'react';
import bgConditions from '../assets/forex/BG1.png';

const IndicesConditions = () => {
    const conditions = [
        { label: "Open positions", value: "up to 500 orders" },
        { label: "Flexible leverage", value: "up to 1:500" },
        { label: "Initial deposit", value: "from $5" },
        { label: "Order volume", value: "from 0.01 lots" },
        { label: "Margin call", value: "40%" },
        { label: "Stop out", value: "20%" },
    ];

    return (
        <section className="relative bg-black overflow-hidden">
            <div
                className="absolute inset-0 z-0 opacity-100 bg-cover bg-bottom lg:bg-right-bottom pointer-events-none"
                style={{ backgroundImage: `url(${bgConditions})`, minHeight: '600px' }}
            >
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/80 to-transparent" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-12 pb-32 max-w-7xl">
                <h2 className="text-[32px] lg:text-[54px] font-[900] uppercase text-[#4DA6FF] mb-16 tracking-tighter leading-none">
                    OUR CONDITIONS UNLOCK YOUR POTENTIAL
                </h2>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 justify-between">
                    <div className="lg:w-[38%]">
                        <p className="text-white text-xl lg:text-2xl font-bold leading-snug">
                            Fast execution on index CFDs. Competitive spreads on S&P 500, NASDAQ 100, and more.
                        </p>
                    </div>

                    <div className="lg:w-[58%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                        {conditions.map((item, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <span className="text-gray-500 font-bold uppercase text-xs tracking-[0.2em]">{item.label}</span>
                                <span className="text-white text-2xl lg:text-3xl font-black tracking-tight">{item.value}</span>
                            </div>
                        ))}

                        <div className="sm:col-span-2 pt-8">
                            <button className="border border-white/20 text-white px-10 py-3.5 rounded-md font-bold text-sm uppercase flex items-center gap-3 hover:bg-white hover:text-black transition-all group">
                                See all conditions <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndicesConditions;
