import React from 'react';
import { Search, Plus, ArrowRight, ArrowUp } from 'lucide-react';
import supporterImg from '../assets/support/supporter.png';

const generalInfo = [
    "Does RubyFX provide a No Deposit Bonus?",
    "Where can I find my 100% Deposit Bonus?",
    "What is the 100% Deposit Bonus?",
    "How do I receive a 100% Deposit Bonus?",
    "What is a Cent Account?"
];

const clientPortal = [
    "How do I complete verification for my Trader Area?",
    "Why has my account been archived?",
    "Why am I unable to verify my second Trader Area?",
    "When will my Trader Area be approved?",
    "How can I open a Demo account in the RUBY Trader Area?"
];

const depositsInfo = [
    "Does Ruby provide a No Deposit Bonus?",
    "Where can I find my 100% Deposit Bonus?",
    "What is included in the 100% Deposit Bonus?",
    "How do I claim the 100% Deposit Bonus?",
    "What is a Cent Account?"
];

const tradingInfo = [
    "What is a VPS service?",
    "What should I do if I believe my order was closed incorrectly?",
    "How do I log in to my trading account?",
    "What are dividends, and how can I receive them?",
    "How can I begin trading?"
];

const partnershipInfo = [
    "What distinguishes the IB partnership program from the CPA partnership program?",
    "Where can I access my Partner link?",
    "What does the Multi-level Partnership Program include?",
    "What is a rebate?",
    "What does IB Grade mean?"
];

const trendingArticles = [
    "I would like to set up an Investor password",
    "How can I make a withdrawal?",
    "I would like to close my account",
    "What is a Cent account?",
    "Why was my withdrawal request declined?",
    "How can I adjust the leverage of my account?",
    "I forgot my trading password"
];

const SupportContent = () => {
    return (
        <section className="bg-white pt-20 pb-0 px-6 lg:px-16 overflow-hidden relative">
            <div className="container mx-auto max-w-[1100px] relative">

                {/* Header & Search */}
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-black font-black text-[32px] md:text-[38px] uppercase tracking-wide mb-6">
                        HELP CENTER
                    </h2>

                    <div className="relative w-full max-w-[760px]">
                        <input
                            type="text"
                            placeholder="Search in help center"
                            className="w-full border border-gray-200 rounded-xl py-4 pl-6 pr-14 text-[17px] text-gray-500 outline-none focus:border-red-500 transition-colors shadow-sm"
                        />
                        <button className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors">
                            <Search size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

                    {/* General Information */}
                    <div>
                        <h3 className="text-black font-bold text-[24px] mb-8">General Information</h3>
                        <div className="space-y-6">
                            {generalInfo.map((item, index) => (
                                <button key={index} className="flex items-start gap-5 text-left w-full group">
                                    <Plus size={18} strokeWidth={2.5} className="text-gray-500 mt-[3px] shrink-0 group-hover:text-red-600 transition-colors" />
                                    <span className="text-[#555555] text-[17px] leading-snug group-hover:text-red-600 transition-colors">
                                        {item}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-md px-5 py-2.5 text-[#555555] text-[15px] hover:border-gray-400 transition-colors">
                                See all articles <ArrowRight size={16} strokeWidth={1.5} className="text-gray-400" />
                            </button>
                        </div>
                    </div>

                    {/* Client Portal */}
                    <div>
                        <h3 className="text-black font-bold text-[24px] mb-8">Client Portal</h3>
                        <div className="space-y-6">
                            {clientPortal.map((item, index) => (
                                <button key={index} className="flex items-start gap-5 text-left w-full group">
                                    <Plus size={18} strokeWidth={2.5} className="text-gray-500 mt-[3px] shrink-0 group-hover:text-red-600 transition-colors" />
                                    <span className="text-[#555555] text-[17px] leading-snug group-hover:text-red-600 transition-colors">
                                        {item}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-md px-5 py-2.5 text-[#555555] text-[15px] hover:border-gray-400 transition-colors">
                                See all articles <ArrowRight size={16} strokeWidth={1.5} className="text-gray-400" />
                            </button>
                        </div>
                    </div>

                    {/* Deposits and Withdrawals */}
                    <div>
                        <h3 className="text-black font-bold text-[24px] mb-8">Deposits and Withdrawals</h3>
                        <div className="space-y-6">
                            {depositsInfo.map((item, index) => (
                                <button key={index} className="flex items-start gap-5 text-left w-full group">
                                    <Plus size={18} strokeWidth={2.5} className="text-gray-500 mt-[3px] shrink-0 group-hover:text-red-600 transition-colors" />
                                    <span className="text-[#555555] text-[17px] leading-snug group-hover:text-red-600 transition-colors">
                                        {item}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-md px-5 py-2.5 text-[#555555] text-[15px] hover:border-gray-400 transition-colors">
                                See all articles <ArrowRight size={16} strokeWidth={1.5} className="text-gray-400" />
                            </button>
                        </div>
                    </div>

                    {/* Trading */}
                    <div>
                        <h3 className="text-black font-bold text-[24px] mb-8">Trading</h3>
                        <div className="space-y-6">
                            {tradingInfo.map((item, index) => (
                                <button key={index} className="flex items-start gap-5 text-left w-full group">
                                    <Plus size={18} strokeWidth={2.5} className="text-gray-500 mt-[3px] shrink-0 group-hover:text-red-600 transition-colors" />
                                    <span className="text-[#555555] text-[17px] leading-snug group-hover:text-red-600 transition-colors">
                                        {item}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-md px-5 py-2.5 text-[#555555] text-[15px] hover:border-gray-400 transition-colors">
                                See all articles <ArrowRight size={16} strokeWidth={1.5} className="text-gray-400" />
                            </button>
                        </div>
                    </div>

                    {/* RUBY Partnership Program */}
                    <div>
                        <h3 className="text-black font-bold text-[24px] mb-8">RUBY Partnership Program</h3>
                        <div className="space-y-6">
                            {partnershipInfo.map((item, index) => (
                                <button key={index} className="flex items-start gap-5 text-left w-full group">
                                    <Plus size={18} strokeWidth={2.5} className="text-gray-500 mt-[3px] shrink-0 group-hover:text-red-600 transition-colors" />
                                    <span className="text-[#555555] text-[17px] leading-snug group-hover:text-red-600 transition-colors">
                                        {item}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-md px-5 py-2.5 text-[#555555] text-[15px] hover:border-gray-400 transition-colors">
                                See all articles <ArrowRight size={16} strokeWidth={1.5} className="text-gray-400" />
                            </button>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div>
                        <h3 className="text-black font-bold text-[24px] mb-8">FAQs</h3>
                        <p className="text-[#555555] text-[17px] leading-relaxed">
                            There are no frequently asked questions available at the moment.
                        </p>
                    </div>

                </div>

                {/* Trending Articles Section */}
                <div className="mt-32 pt-16 flex flex-col md:flex-row justify-between items-end gap-10 relative">
                    <div className="w-full md:w-[55%] pb-0 md:pb-16 relative z-10">
                        <h3 className="text-black font-bold text-[32px] mb-8">Trending Articles</h3>
                        <div className="space-y-6">
                            {trendingArticles.map((item, index) => (
                                <button key={index} className="flex items-start gap-4 text-left w-full group">
                                    <Plus size={20} strokeWidth={2.5} className="text-gray-500 mt-[2px] shrink-0 group-hover:text-red-600 transition-colors" />
                                    <span className="text-[#555555] text-[18px] leading-snug group-hover:text-red-600 transition-colors">
                                        {item}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

            {/* Supporter Image aligned to right edge of screen */}
            <div className="hidden md:flex absolute right-0 bottom-0 z-0 pointer-events-none">
                <img
                    src={supporterImg}
                    alt="Ruby Supporter"
                    className="w-[350px] lg:w-[450px] xl:w-[550px] max-w-none object-contain object-bottom select-none"
                />
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-10 right-10 z-50 bg-[#ff0000] hover:bg-red-700 text-white w-14 h-14 rounded-2xl flex justify-center items-center shadow-lg transition-colors"
                aria-label="Scroll to top"
            >
                <ArrowUp size={28} strokeWidth={2.5} />
            </button>
        </section>
    );
};

export default SupportContent;
