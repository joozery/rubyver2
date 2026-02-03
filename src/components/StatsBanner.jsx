import React from 'react';

const StatsBanner = () => {
    const stats = [
        { label: 'Trading commission', value: '0' },
        { label: 'Maximum Leverage', value: '1:1000' },
        { label: 'Order Execution Speed', value: '0.01 seconds' },
        { label: 'Minimum Account Deposit', value: '$1' },
        { label: 'Spreads Starting At', value: '1.5 pips' },
    ];

    return (
        <div className="relative w-full bg-black flex flex-row items-stretch h-[102px] overflow-hidden">
            {/* Red Slanted Section */}
            <div className="relative z-10 bg-[#AA1111] flex items-center pl-8 pr-16 shrink-0"
                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
                <h3 className="text-white font-bold text-sm lg:text-base leading-tight uppercase">
                    Exceptional <br /> Trading Conditions
                </h3>
            </div>

            {/* Stats Scrolling Area */}
            <div className="flex-1 flex items-center overflow-x-auto no-scrollbar">
                <div className="flex items-center space-x-8 px-4 whitespace-nowrap min-w-full">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-white">
                            <span className="text-white/80 font-normal capitalize">{stat.label} :</span>
                            <span className="font-bold">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsBanner;
