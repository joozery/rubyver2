import React, { useState } from 'react';

const ForexExoticSpreads = () => {
    // Mock Data for Exotic Currency Pairs
    const spreadsData = [
        { pair: 'USDZAR', spread: { min: 200, avg: 250 } },
        { pair: 'USDMXN', spread: { min: 100, avg: 150 } },
        { pair: 'USDTRY', spread: { min: 120, avg: 180 } },
        { pair: 'USDSGD', spread: { min: 30, avg: 45 } },
        { pair: 'USDHKD', spread: { min: 40, avg: 60 } },
    ];

    const [activeTab, setActiveTab] = useState('Spreads');

    return (
        <section className="bg-[#111] text-white py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] lg:text-[48px] font-black uppercase text-white leading-tight mb-4 tracking-tight">
                        EXOTIC PAIRS <span className="text-[#EBCBA5]">SPREADS</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto">
                        Access emerging markets with competitive spreads and high liquidity.
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto w-full border border-white/10 rounded-lg">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-wider">
                            <tr>
                                <th className="py-4 px-6 border-b border-white/10">Currency Pair</th>
                                <th className="py-4 px-6 border-b border-white/10 text-center">Standard Min</th>
                                <th className="py-4 px-6 border-b border-white/10 text-center">Standard Avg</th>
                                <th className="py-4 px-6 border-b border-white/10 text-center">Pro Min</th>
                                <th className="py-4 px-6 border-b border-white/10 text-center">Pro Avg</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {spreadsData.map((item, index) => (
                                <tr key={index} className="hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 font-bold text-white flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/20 flex items-center justify-center text-[10px]">
                                            {item.pair.substring(0, 2)}
                                        </div>
                                        {item.pair}
                                    </td>
                                    <td className="py-4 px-6 text-center text-gray-300">{item.spread.min}</td>
                                    <td className="py-4 px-6 text-center text-gray-300">{item.spread.avg}</td>
                                    <td className="py-4 px-6 text-center text-[#EBCBA5] font-bold">{Math.floor(item.spread.min * 0.8)}</td>
                                    <td className="py-4 px-6 text-center text-[#EBCBA5] font-bold">{Math.floor(item.spread.avg * 0.8)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#EBCBA5] text-black px-12 py-4 rounded font-bold text-lg hover:bg-[#d9b894] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-wide">
                        See All Spreads
                    </button>
                    <p className="text-gray-500 text-sm mt-4">
                        *Spreads are variable and may widen during volatile market conditions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ForexExoticSpreads;
