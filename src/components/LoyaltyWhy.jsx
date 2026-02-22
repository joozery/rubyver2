import React from 'react';
import point from '../assets/loyalty/point.png';
import system from '../assets/loyalty/system.png';
import gif from '../assets/loyalty/gif.png';
import ribbin from '../assets/loyalty/ribbin.png';
import coint from '../assets/loyalty/coint.png';
import bron from '../assets/loyalty/royal/bron.png';
import silver from '../assets/loyalty/royal/silver.png';
import gold from '../assets/loyalty/royal/gold.png';
import patinum from '../assets/loyalty/royal/patinum.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LoyaltyWhy = () => {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#fae29c] via-[#ffd762] to-[#d6a528]">

            {/* Background floating elements */}
            {/* Top Left Ribbon */}
            <div className="absolute top-[-5%] left-[-5%] z-[15] pointer-events-none -rotate-12">
                <img src={ribbin} alt="Gold Ribbon" className="w-[120px] md:w-[200px] lg:w-[250px] max-w-none object-contain drop-shadow-xl" />
            </div>

            {/* Middle Left Ribbon */}
            <div className="absolute top-[40%] left-0 -translate-x-[40%] z-[15] pointer-events-none">
                <img src={ribbin} alt="Gold Ribbon" className="w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] max-w-none object-contain drop-shadow-2xl" />
            </div>

            {/* Top Right Coin */}
            <div className="absolute top-[-5%] right-[-5%] z-[15] pointer-events-none">
                <img src={coint} alt="Gold Coin" className="w-[150px] md:w-[220px] lg:w-[280px] xl:w-[320px] max-w-none object-contain drop-shadow-2xl" />
            </div>

            {/* Bottom Left Coin */}
            <div className="absolute bottom-[5%] left-[-5%] z-[15] pointer-events-none">
                <img src={coint} alt="Gold Coin" className="w-[180px] md:w-[250px] lg:w-[320px] max-w-none object-contain drop-shadow-2xl" />
            </div>



            {/* Bottom Right Ribbon */}
            <div className="absolute bottom-[-10%] right-[-10%] z-[15] pointer-events-none rotate-45">
                <img src={ribbin} alt="Gold Ribbon" className="w-[200px] md:w-[300px] lg:w-[400px] max-w-none object-contain drop-shadow-2xl" />
            </div>

            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px] relative z-20">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-black text-[36px] md:text-[50px] lg:text-[54px] uppercase tracking-wide leading-tight text-black mb-4">
                        WHY CHOOSE <span className="text-[#f13a04]">RUBY</span> FOREX?
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 relative z-30">

                    {/* Card 1 */}
                    <div className="bg-[#f5f5f5] border border-gray-400 p-8 pt-10 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1 min-h-[420px]">
                        <div className="inline-block relative mb-4">
                            <h3 className="font-black text-[20px] md:text-[22px] text-black uppercase tracking-wide z-10 relative">
                                EARN POINTS
                            </h3>
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0b65b1] translate-y-2"></div>
                        </div>
                        <p className="text-black text-[16px] md:text-[18px] font-medium leading-relaxed mb-8 flex-grow">
                            Convert your trading lots into loyalty points automatically
                        </p>
                        <div className="mt-auto h-[180px] lg:h-[220px] flex items-center justify-center">
                            <img src={point} alt="Earn Points" className="max-h-full object-contain drop-shadow-lg" />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#f5f5f5] border border-gray-400 p-8 pt-10 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1 min-h-[420px]">
                        <h3 className="font-black text-[20px] md:text-[22px] text-black uppercase tracking-wide mb-5">
                            TIER SYSTEM
                        </h3>
                        <p className="text-black text-[16px] md:text-[18px] font-medium leading-relaxed mb-8 flex-grow">
                            Advance through tiers to unlock better rewards and benefits
                        </p>
                        <div className="mt-auto h-[180px] lg:h-[220px] flex items-center justify-center">
                            <img src={system} alt="Tier System" className="max-h-full object-contain drop-shadow-lg" />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#f5f5f5] border border-gray-400 p-8 pt-10 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1 min-h-[420px]">
                        <h3 className="font-black text-[20px] md:text-[22px] text-black uppercase tracking-wide mb-5">
                            EXCLUSIVE REWARDS
                        </h3>
                        <p className="text-black text-[16px] md:text-[18px] font-medium leading-relaxed mb-8 flex-grow">
                            Redeem premium rewards without losing your points
                        </p>
                        <div className="mt-auto h-[180px] lg:h-[220px] flex items-center justify-center">
                            <img src={gif} alt="Exclusive Rewards" className="max-h-full object-contain drop-shadow-lg" />
                        </div>
                    </div>

                </div>

                <div className="text-center mt-10 mb-12 relative z-30">
                    <h2 className="font-black text-[36px] md:text-[50px] lg:text-[54px] uppercase tracking-wide leading-tight text-[#f13010] mb-3 drop-shadow-sm">
                        AVAILABLE REWARDS
                    </h2>
                    <p className="text-black text-[18px] md:text-[24px] font-medium">
                        Discover what you can unlock with your loyalty points
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 relative z-30">
                    <button className="bg-[#b36b1d] text-white px-8 py-2 md:px-12 md:py-3 rounded-lg font-bold text-[14px] md:text-[16px] shadow-md border border-[#91540f]">
                        All Tiers
                    </button>
                    <button className="bg-white text-[#444] px-8 py-2 md:px-12 md:py-3 rounded-lg font-bold text-[14px] md:text-[16px] shadow-sm border border-gray-300 hover:bg-gray-50 transition-colors">
                        Bronze
                    </button>
                    <button className="bg-white text-[#444] px-8 py-2 md:px-12 md:py-3 rounded-lg font-bold text-[14px] md:text-[16px] shadow-sm border border-gray-300 hover:bg-gray-50 transition-colors">
                        Silver
                    </button>
                    <button className="bg-white text-[#444] px-8 py-2 md:px-12 md:py-3 rounded-lg font-bold text-[14px] md:text-[16px] shadow-sm border border-gray-300 hover:bg-gray-50 transition-colors">
                        Gold
                    </button>
                    <button className="bg-white text-[#444] px-8 py-2 md:px-12 md:py-3 rounded-lg font-bold text-[14px] md:text-[16px] shadow-sm border border-gray-300 hover:bg-gray-50 transition-colors">
                        Platinum
                    </button>
                </div>

                {/* Rewards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-30 mb-16">
                    {/* Reward Item 1 */}
                    <div className="bg-[#e9e9e9] rounded-[4px] overflow-hidden flex flex-col shadow-md">
                        <img src={bron} alt="Bronze Reward" className="w-full h-auto object-cover" />
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-3">
                                <span className="bg-white border border-gray-200 rounded-full px-3 py-1 flex items-center gap-2 text-[12px] font-bold text-[#666]">
                                    <div className="w-3 h-3 rounded-full bg-[#8c5a2b]"></div>
                                    Bronze
                                </span>
                                <span className="text-[11px] font-semibold text-green-600">
                                    100 Available
                                </span>
                            </div>
                            <h4 className="font-bold text-[18px] text-black mb-2">Lorem Ipsum</h4>
                            <p className="text-[#555] text-[13px] leading-relaxed mb-6 flex-grow">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button className="bg-[#b36b1d] hover:bg-[#91540f] text-white font-bold py-2.5 rounded-[4px] text-[14px] transition-colors w-full">
                                Login to Redeem
                            </button>
                        </div>
                    </div>

                    {/* Reward Item 2 */}
                    <div className="bg-[#e9e9e9] rounded-[4px] overflow-hidden flex flex-col shadow-md">
                        <img src={silver} alt="Silver Reward" className="w-full h-auto object-cover" />
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-3">
                                <span className="bg-white border border-gray-200 rounded-full px-3 py-1 flex items-center gap-2 text-[12px] font-bold text-[#666]">
                                    <div className="w-3 h-3 rounded-full bg-[#a5a5a5]"></div>
                                    Silver
                                </span>
                                <span className="text-[11px] font-semibold text-green-600">
                                    100 Available
                                </span>
                            </div>
                            <h4 className="font-bold text-[18px] text-black mb-2">Lorem Ipsum</h4>
                            <p className="text-[#555] text-[13px] leading-relaxed mb-6 flex-grow">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button className="bg-[#b36b1d] hover:bg-[#91540f] text-white font-bold py-2.5 rounded-[4px] text-[14px] transition-colors w-full">
                                Login to Redeem
                            </button>
                        </div>
                    </div>

                    {/* Reward Item 3 */}
                    <div className="bg-[#e9e9e9] rounded-[4px] overflow-hidden flex flex-col shadow-md">
                        <img src={gold} alt="Gold Reward" className="w-full h-auto object-cover" />
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-3">
                                <span className="bg-white border border-gray-200 rounded-full px-3 py-1 flex items-center gap-2 text-[12px] font-bold text-[#666]">
                                    <div className="w-3 h-3 rounded-full bg-[#f1c40f]"></div>
                                    Gold
                                </span>
                                <span className="text-[11px] font-semibold text-green-600">
                                    100 Available
                                </span>
                            </div>
                            <h4 className="font-bold text-[18px] text-black mb-2">Lorem Ipsum</h4>
                            <p className="text-[#555] text-[13px] leading-relaxed mb-6 flex-grow">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button className="bg-[#b36b1d] hover:bg-[#91540f] text-white font-bold py-2.5 rounded-[4px] text-[14px] transition-colors w-full">
                                Login to Redeem
                            </button>
                        </div>
                    </div>

                    {/* Reward Item 4 */}
                    <div className="bg-[#e9e9e9] rounded-[4px] overflow-hidden flex flex-col shadow-md">
                        <img src={patinum} alt="Platinum Reward" className="w-full h-auto object-cover" />
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-3">
                                <span className="bg-white border border-gray-200 rounded-full px-3 py-1 flex items-center gap-2 text-[12px] font-bold text-[#666]">
                                    <div className="w-3 h-3 rounded-full bg-[#3498db]"></div>
                                    Platinum
                                </span>
                                <span className="text-[11px] font-semibold text-green-600">
                                    100 Available
                                </span>
                            </div>
                            <h4 className="font-bold text-[18px] text-black mb-2">Lorem Ipsum</h4>
                            <p className="text-[#555] text-[13px] leading-relaxed mb-6 flex-grow">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button className="bg-[#b36b1d] hover:bg-[#91540f] text-white font-bold py-2.5 rounded-[4px] text-[14px] transition-colors w-full">
                                Login to Redeem
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-end items-center gap-2 relative z-30 mb-8">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-400 bg-white/20 hover:bg-white/40 transition-colors">
                        <ChevronLeft size={20} className="text-black" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-black text-white font-bold shadow-md">
                        1
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-400 bg-white/20 hover:bg-white/40 font-bold transition-colors">
                        2
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-400 bg-white/20 hover:bg-white/40 font-bold transition-colors">
                        3
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-400 bg-white/20 hover:bg-white/40 transition-colors">
                        <ChevronRight size={20} className="text-black" />
                    </button>
                </div>

            </div>

        </section>
    );
};

export default LoyaltyWhy;
