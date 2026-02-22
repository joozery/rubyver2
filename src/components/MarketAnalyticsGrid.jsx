import React, { useState } from 'react';
import nvidiaImg from '../assets/market/navidia.png';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const tabs = ['All', 'Stocks', 'Metals', 'Currencies', 'Energies'];

const articles = Array(4).fill(null).map((_, i) => ({
    id: i,
    image: nvidiaImg,
    date: 'Oct 27, 2025',
    time: '09:33',
    title: 'NVIDIA: What to Watch Before the November 19, 2025 Earnings',
    tag: 'Stocks',
}));

const MarketAnalyticsGrid = () => {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Title */}
                <h2 className="text-[36px] lg:text-[48px] font-black uppercase text-black mb-8 tracking-tight">
                    MARKET ANALYSIS
                </h2>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all ${activeTab === tab
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-black border-gray-300 hover:border-black'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-[#f5f5f5] rounded-lg overflow-hidden flex flex-col cursor-pointer group hover:shadow-md transition-shadow">
                            {/* Image */}
                            <div className="h-[160px] overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col flex-1">
                                {/* Date */}
                                <p className="text-gray-400 text-xs mb-2">
                                    {article.date} <span className="font-semibold ml-1">{article.time}</span>
                                </p>

                                {/* Title */}
                                <h3 className="text-black font-bold text-sm leading-snug mb-4 flex-1">
                                    {article.title}
                                </h3>

                                {/* Tag + Arrow */}
                                <div className="flex items-center gap-2 mt-auto">
                                    <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-xs font-medium text-black hover:border-black transition-colors">
                                        {article.tag}
                                        <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                                            <ArrowUpRight size={12} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explore more articles */}
                <div className="flex justify-end">
                    <button className="flex items-center gap-2 border border-gray-300 rounded-full px-6 py-3 text-sm font-semibold text-black hover:border-black hover:bg-gray-50 transition-all">
                        Explore more articles
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MarketAnalyticsGrid;
