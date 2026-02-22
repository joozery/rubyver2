import React from 'react';
import { Gift, Coins, TrendingUp, Box, Users, UserCog } from 'lucide-react';

const MultiLevelExperience = () => {
    return (
        <section className="bg-white py-24 pb-32">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px]">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-black text-[36px] md:text-[50px] uppercase tracking-wide leading-tight mb-4">
                        <span className="text-black block">ENHANCE YOUR PARTNER</span>
                        <span className="text-[#da292e] block">EXPERIENCE</span>
                    </h2>
                    <p className="text-black text-[18px] md:text-[22px] font-medium max-w-[800px] mx-auto">
                        Enjoy exclusive benefits with the RUBY Multi-Level Partnership.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-16">

                    {/* Card 1 */}
                    <div className="bg-[#f5f5f5] border border-gray-300 p-8 flex gap-6 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 pt-1">
                            <Gift size={32} strokeWidth={1.5} className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] md:text-[20px] text-black uppercase tracking-wide mb-2 leading-tight">
                                GENEROUS REWARDS
                            </h3>
                            <p className="text-[#333] text-[14px] font-medium leading-relaxed">
                                Earn commissions on all trades of your sub-partners' clients.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#f5f5f5] border border-gray-300 p-8 flex gap-6 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 pt-1">
                            <Coins size={32} strokeWidth={1.5} className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] md:text-[20px] text-black uppercase tracking-wide mb-2 leading-tight">
                                EASY FUND MANAGEMENT
                            </h3>
                            <p className="text-[#333] text-[14px] font-medium leading-relaxed">
                                Manage your daily payouts in the RUBY Partner Area.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#f5f5f5] border border-gray-300 p-8 flex gap-6 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 pt-1">
                            <TrendingUp size={32} strokeWidth={1.5} className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] md:text-[20px] text-black uppercase tracking-wide mb-2 leading-tight">
                                UNLIMITED GROWTH
                            </h3>
                            <p className="text-[#333] text-[14px] font-medium leading-relaxed">
                                Grow your partner network as much as you want to maximize your earnings.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#f5f5f5] border border-gray-300 p-8 flex gap-6 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 pt-1">
                            <Box size={32} strokeWidth={1.5} className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] md:text-[20px] text-black uppercase tracking-wide mb-2 leading-tight">
                                FREE MATERIALS
                            </h3>
                            <p className="text-[#333] text-[14px] font-medium leading-relaxed">
                                Access a range of tools and materials to effectively promote and educate.
                            </p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#f5f5f5] border border-gray-300 p-8 flex gap-6 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 pt-1">
                            <Users size={32} strokeWidth={1.5} className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] md:text-[20px] text-black uppercase tracking-wide mb-2 leading-tight">
                                ATTRACT MORE TRADERS
                            </h3>
                            <p className="text-[#333] text-[14px] font-medium leading-relaxed">
                                Gain clients whose trading increases your income.
                            </p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#f5f5f5] border border-gray-300 p-8 flex gap-6 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 pt-1">
                            <UserCog size={32} strokeWidth={1.5} className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] md:text-[20px] text-black uppercase tracking-wide mb-2 leading-tight">
                                PERSONAL MANAGER
                            </h3>
                            <p className="text-[#333] text-[14px] font-medium leading-relaxed">
                                Receive dedicated support to help you grow and succeed.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Become Partner Button */}
                <div className="flex justify-center">
                    <button className="bg-[#da292e] hover:bg-red-700 text-white font-medium text-[18px] px-16 py-4 rounded-[10px] shadow-lg transition-transform hover:-translate-y-1">
                        Become Partner
                    </button>
                </div>

            </div>
        </section>
    );
};

export default MultiLevelExperience;
