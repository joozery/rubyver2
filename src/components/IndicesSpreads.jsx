import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IndicesSpreads = () => {
    // Mock data for Indices
    const spreadData = [
        { asset: "US500", desc: "S&P 500 Index", min: "0.4", typ: "0.5", cur: "0.45", size: "1", long: "-5.2", short: "1.2" },
        { asset: "US30", desc: "US Wall Street 30", min: "1.2", typ: "1.5", cur: "1.3", size: "1", long: "-6.0", short: "0.5" },
        { asset: "US100", desc: "US Tech 100", min: "0.8", typ: "1.0", cur: "0.9", size: "1", long: "-4.5", short: "0.8" },
        { asset: "DE40", desc: "Germany 40", min: "0.9", typ: "1.1", cur: "1.0", size: "1", long: "-3.0", short: "-1.0" },
        { asset: "UK100", desc: "UK 100", min: "1.0", typ: "1.2", cur: "1.1", size: "1", long: "-2.5", short: "-0.5" },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-[40px] lg:text-[64px] font-black uppercase leading-none tracking-tight">
                        <span className="text-[#FF0000]">SPREADS</span> <br />
                        <span className="text-black">AND CONDITIONS</span>
                    </h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px] border-collapse bg-white shadow-lg rounded-2xl overflow-hidden">
                        <thead>
                            <tr className="bg-[#444444] text-white">
                                <th className="py-4 px-6 text-left font-bold text-sm uppercase rounded-tl-2xl">Asset</th>
                                <th className="py-4 px-6 text-left font-bold text-sm uppercase">Description</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase">Minimal Spread</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase">Typical Spread</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase">Current Spread</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase">Contract Size</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase">Swap Long</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase rounded-tr-2xl">Swap Short</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {spreadData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 font-black text-black">{item.asset}</td>
                                    <td className="py-5 px-6 font-medium text-gray-500 max-w-[200px]">{item.desc}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.min}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.typ}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.cur}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.size}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.long}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.short}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end items-center gap-4 mt-8 px-2">
                    <button className="text-gray-300 hover:text-black transition-colors"><ChevronLeft size={20} /></button>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center font-bold text-[#FF0000] bg-red-50 rounded-full">1</button>
                    </div>
                    <button className="text-gray-400 hover:text-black transition-colors"><ChevronRight size={20} /></button>
                </div>
            </div>
        </section>
    );
};

export default IndicesSpreads;
