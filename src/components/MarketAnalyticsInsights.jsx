import React from 'react';
import xauImg from '../assets/market/xau.jpg';
import btcImg from '../assets/market/btc.jpg';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const articles = [
    {
        id: 1,
        symbol: 'XAUUSD',
        image: xauImg,
        title: 'XAUUSD: Strat of decline',
        date: 'Oct 27, 2025',
        time: '09:33',
        tag: 'Trade ideas',
        size: 'large',
    },
    {
        id: 2,
        symbol: 'BTCUSD',
        image: btcImg,
        title: 'BTCUSD: Detailed Outlook',
        date: 'Oct 27, 2025',
        time: '09:33',
        tag: 'Trade ideas',
        size: 'small',
    },
    {
        id: 3,
        symbol: 'BTCUSD',
        image: btcImg,
        title: 'BTCUSD: Detailed Outlook',
        date: 'Oct 27, 2025',
        time: '09:33',
        tag: 'Trade ideas',
        size: 'small',
    },
];

const MarketAnalyticsInsights = () => {
    const [large, ...smalls] = articles;

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Title */}
                <h2 className="text-[36px] lg:text-[48px] font-black uppercase text-black mb-10 tracking-tight">
                    TRADING INSIGHTS
                </h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left: Large Card */}
                    <div className="flex flex-col gap-4">
                        {/* Image with label */}
                        <div className="relative bg-black rounded-lg overflow-hidden h-[260px] lg:h-[300px]">
                            <img
                                src={large.image}
                                alt={large.symbol}
                                className="w-full h-full object-cover opacity-90"
                            />
                            {/* Symbol Label */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className="bg-white border border-white text-black font-bold text-xl px-6 py-2 rounded">
                                    {large.symbol}
                                </span>
                            </div>
                        </div>

                        {/* Meta */}
                        <div>
                            <h3 className="text-black font-bold text-lg mb-1">{large.title}</h3>
                            <p className="text-gray-400 text-xs mb-3">
                                {large.date} <span className="ml-2 font-semibold">{large.time}</span>
                            </p>
                            <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-black hover:border-black transition-colors">
                                {large.tag}
                                <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                                    <ArrowUpRight size={14} />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right: Two Small Cards stacked */}
                    <div className="flex flex-col gap-6">
                        {smalls.map((article) => (
                            <div key={article.id} className="flex gap-4 items-start">
                                {/* Image */}
                                <div className="relative bg-black rounded-lg overflow-hidden w-[200px] min-w-[200px] h-[140px]">
                                    <img
                                        src={article.image}
                                        alt={article.symbol}
                                        className="w-full h-full object-cover opacity-90"
                                    />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-white border border-white text-black font-bold text-base px-4 py-1.5 rounded">
                                            {article.symbol}
                                        </span>
                                    </div>
                                </div>

                                {/* Meta */}
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-black font-bold text-base mb-1">{article.title}</h3>
                                    <p className="text-gray-400 text-xs mb-3">
                                        {article.date} <span className="ml-2 font-semibold">{article.time}</span>
                                    </p>
                                    <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-black hover:border-black transition-colors w-max">
                                        {article.tag}
                                        <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                                            <ArrowUpRight size={14} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Explore more articles */}
                        <div className="flex justify-end mt-auto pt-4">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-full px-6 py-3 text-sm font-semibold text-black hover:border-black hover:bg-gray-50 transition-all">
                                Explore more articles
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketAnalyticsInsights;
