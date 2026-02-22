import React, { useState } from 'react';
import ruby01 from '../assets/acadamy/bear/ruby01.png';
import ruby02 from '../assets/acadamy/bear/ruby02.png';
import ruby03 from '../assets/acadamy/bear/ruby03.png';
import ruby04 from '../assets/acadamy/bear/ruby04.png';
import { ArrowRight } from 'lucide-react';

const tabs = ['All', 'About Forex', 'MT Tutorials', 'Trading', 'RUBY Services'];

const smallArticles = [
    {
        id: 2,
        image: ruby02,
        tag: 'Trading',
        title: 'Swing Trading is a strategy that focuses on holding positions for several day...',
    },
    {
        id: 3,
        image: ruby03,
        tag: 'Trading',
        title: 'RubyFX Trading You Can Trust. A reliable, stable system with low spreads and ...',
    },
    {
        id: 4,
        image: ruby04,
        tag: 'Trading',
        title: "In a market that moves every second, a single order that doesn't execute can...",
    },
];

const AcademyArticles = () => {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <section className="bg-white py-14 border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">

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

                {/* Featured Article — large card */}
                <div className="flex flex-col lg:flex-row gap-8 mb-10 pb-10 border-b border-gray-200">
                    {/* Image */}
                    <div className="w-full lg:w-[45%] rounded-xl overflow-hidden">
                        <img
                            src={ruby01}
                            alt="Bull Market and Bear Market"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col justify-center flex-1">
                        <h3 className="text-black font-bold text-[22px] lg:text-[26px] leading-snug mb-4">
                            What "Bull Market" and "Bear Market" Really Mean.
                        </h3>
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                            When it comes to investing, you've probably heard the terms Bull Market and Bear Market. But if you're new, the meanings might still be confusing. Let's break them down in a simple way.
                        </p>
                        <div className="flex items-center gap-3">
                            <button className="border border-gray-300 rounded-full px-5 py-2 text-sm font-semibold text-black hover:border-black transition-colors">
                                Trading
                            </button>
                            <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                                <ArrowRight size={15} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Small Articles — 3 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {smallArticles.map((article) => (
                        <div key={article.id} className="flex flex-col cursor-pointer group">
                            {/* Image */}
                            <div className="rounded-xl overflow-hidden mb-4 h-[320px]">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            {/* Title */}
                            <p className="text-black font-semibold text-sm leading-snug mb-4 flex-1">
                                {article.title}
                            </p>
                            {/* Tag + Arrow */}
                            <div className="flex items-center justify-between">
                                <button className="border border-gray-300 rounded-full px-5 py-2 text-sm font-semibold text-black hover:border-black transition-colors">
                                    {article.tag}
                                </button>
                                <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                                    <ArrowRight size={15} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AcademyArticles;
