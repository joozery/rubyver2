import React, { useState } from 'react';
import grapImg from '../assets/acadamy/bear/grap.png';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const tabs = ['All', 'How to start', 'Fundamental analysis', 'Technical analysis', 'Strategy & risks'];

const articles = Array(4).fill({
    date: 'Oct 27, 2025',
    time: '09:33',
    title: 'How to Stop Impulsive Trading',
    tag: 'Strategy & risks',
});

const AcademyDeepInsight = () => {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <section className="bg-[#f5f5f5] py-16">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-[32px] lg:text-[44px] font-black uppercase text-black leading-tight mb-3">
                        READY FOR DEEPER INSIGHT?<br />START HERE.
                    </h2>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        Discover the logic behind every trade.<br />
                        Expert articles keep it clear and easy.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${activeTab === tab
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-black border-gray-300 hover:border-black'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Article Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden cursor-pointer group hover:shadow-md transition-shadow">
                            {/* Image */}
                            <div className="overflow-hidden h-[240px]">
                                <img
                                    src={grapImg}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                {/* Date */}
                                <p className="text-gray-400 text-xs mb-3">
                                    {article.date}{' '}
                                    <span className="text-red-500 font-bold">{article.time}</span>
                                </p>
                                {/* Title */}
                                <h4 className="text-black font-bold text-sm leading-snug mb-4">
                                    {article.title}
                                </h4>
                                {/* Tag + Arrow */}
                                <div className="flex items-center justify-between">
                                    <button className="border border-gray-300 rounded-full px-4 py-1.5 text-xs font-semibold text-black hover:border-black transition-colors">
                                        {article.tag}
                                    </button>
                                    <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                                        <ArrowUpRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Let's learn Button */}
                <div className="flex justify-center">
                    <button className="flex items-center gap-2 border border-gray-400 rounded-full px-8 py-3 text-sm font-semibold text-black hover:border-black hover:bg-black hover:text-white transition-all">
                        Let's learn
                        <ArrowRight size={15} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AcademyDeepInsight;
