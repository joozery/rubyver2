import React from 'react';
import icon001 from '../assets/FEATURES/001.svg';
import iconEconomic from '../assets/FEATURES/ECONOMIC.svg';
import iconImproved from '../assets/FEATURES/IMPROVED .svg';
import iconEfficient from '../assets/FEATURES/EFFICIENT.svg';
import iconFull from '../assets/FEATURES/FULL.svg';
import iconMore from '../assets/FEATURES/MORE.svg';

const MT5Features = () => {
    const features = [
        {
            icon: icon001,
            title: "ADVANCED ANALYSIS TOOLS",
            description: "Tailor the trading environment to your strategies with 21 chart timeframes and 38 technical indicators."
        },
        {
            icon: iconEconomic,
            title: "ECONOMIC CALENDAR",
            description: "Monitor markets in real-time, staying up to date with economic events and data."
        },
        {
            icon: iconImproved,
            title: "IMPROVED EXPERT ADVISORS",
            description: "Automate trading with upgraded Expert Advisors and more precise and accurate trading algorithms."
        },
        {
            icon: iconEfficient,
            title: "EFFICIENT MANAGEMENT",
            description: "Optimize risk management by utilizing hedging option for your positions."
        },
        {
            icon: iconFull,
            title: "FULL MARKET COVERAGE",
            description: "Trade 550+ instruments, including Forex, metals, indices, stocks, and energies, all in one place."
        },
        {
            icon: iconMore,
            title: "MORE PENDING ORDER TYPES",
            description: "Gain precise control over your positions with 8 pending order types."
        }
    ];

    return (
        <section className="bg-[#DEDFE3] py-24">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[36px] lg:text-[64px] font-black uppercase leading-[1.1] tracking-tight mb-2 text-black">
                        METATRADER 5
                    </h2>
                    <h2 className="text-[32px] lg:text-[54px] font-black uppercase text-[#ff0000] tracking-tight">
                        FEATURES
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-none p-8 flex items-start gap-6 hover:shadow-md transition-shadow min-h-[160px]">
                            <div className="shrink-0 mt-1 w-12 h-12 flex items-center justify-center">
                                <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-black text-xl mb-2 tracking-tight uppercase leading-tight">{feature.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed text-sm lg:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Download Button */}
                <div className="flex justify-center">
                    <button className="bg-[#2EB059] hover:bg-green-700 text-white px-16 py-4 rounded-lg font-bold text-xl transition-all active:scale-[0.98] shadow-lg shadow-green-500/20">
                        Get MT5
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MT5Features;
