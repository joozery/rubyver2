import React from 'react';
import { useTranslation } from 'react-i18next';

const StatsBanner = () => {
    const { t } = useTranslation();
    const stats = [
        { label: t('home.stats.commission'), value: '0' },
        { label: t('home.stats.leverage'), value: '1:1000' },
        { label: t('home.stats.execution'), value: '0.01 seconds' },
        { label: t('home.stats.deposit'), value: '$1' },
        { label: t('home.stats.spread'), value: '1.5 pips' },
    ];

    return (
        <div className="relative w-full bg-black flex flex-row items-stretch h-[85px] lg:h-[102px] overflow-hidden border-b border-red-700/30">
            {/* Red Accent Section (Left) */}
            <div className="w-[30px] lg:w-[150px] bg-red-600 shrink-0"
                style={{ clipPath: 'polygon(0 0, 100% 0, 40% 100%, 0% 100%)' }}>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-center pl-3 lg:pl-10">
                {/* Title Section */}
                <h3 className="text-white font-bold text-sm lg:text-2xl uppercase tracking-wider mb-1">
                    {t('home.stats.title').replace('\n', ' ')}
                </h3>

                {/* Stats Scrolling Area */}
                <div className="flex items-center overflow-hidden py-0.5 relative">
                    <div className="flex items-center gap-4 lg:gap-12 animate-marquee lg:animate-none whitespace-nowrap">
                        {[...stats, ...stats].map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-1 text-[9px] lg:text-sm text-white/90">
                                <span className="font-light">{stat.label} :</span>
                                <span className="font-bold text-white">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        display: flex;
                        width: max-content;
                        animation: marquee 20s linear infinite;
                    }
                    @media (min-width: 1024px) {
                        .animate-marquee {
                            animation: none;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default StatsBanner;
