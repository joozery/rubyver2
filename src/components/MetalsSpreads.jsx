import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MetalsSpreads = () => {
    // Mock data for Metals
    const spreadData = Array(7).fill({
        asset: "XAUUSD",
        description: "Gold / US Dollar",
        minimal: "0.20",
        typical: "0.25",
        current: "0.22",
        contractSize: "100000 USD",
        swapLong: "-3.5",
        swapShort: "-1.5"
    });

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[40px] lg:text-[64px] font-black uppercase leading-none tracking-tight">
                        <span className="text-[#FF0000]">SPREADS</span> <br />
                        <span className="text-black">AND CONDITIONS</span>
                    </h2>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px] border-collapse bg-white shadow-lg rounded-2xl overflow-hidden">
                        <thead>
                            <tr className="bg-[#444444] text-white">
                                <th className="py-4 px-6 text-left font-bold text-sm uppercase rounded-tl-2xl">Asset</th>
                                <th className="py-4 px-6 text-left font-bold text-sm uppercase">Description</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase">Minimalspread</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase">Typicalspread</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase">Current spread</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase">Contractsize</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase">Swaplong</th>
                                <th className="py-4 px-6 text-center font-bold text-sm uppercase rounded-tr-2xl">Swapshort</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {spreadData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 font-black text-black">{item.asset}</td>
                                    <td className="py-5 px-6 font-medium text-gray-500 max-w-[200px]">{item.description}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.minimal}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.typical}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.current}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.contractSize}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.swapLong}</td>
                                    <td className="py-5 px-6 text-center font-medium text-black">{item.swapShort}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-end items-center gap-4 mt-8 px-2">
                    <button className="text-gray-300 hover:text-black transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center font-bold text-[#FF0000] bg-red-50 rounded-full">1</button>
                        <button className="w-8 h-8 flex items-center justify-center font-bold text-gray-400 hover:text-black transition-colors">2</button>
                    </div>
                    <button className="text-gray-400 hover:text-black transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MetalsSpreads;
