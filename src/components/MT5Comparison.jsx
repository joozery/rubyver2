import React from 'react';

const MT5Comparison = () => {
    const specs = [
        { feature: "Pending Order Types", mt4: "4", mt5: "6" },
        { feature: "Analytical Objects", mt4: "31", mt5: "44" },
        { feature: "Timeframes", mt4: "9", mt5: "21" },
        { feature: "Economic Calendar", mt4: "No", mt5: "Yes" },
        { feature: "Markets", mt4: "FX & CFDs", mt5: "FX, CFDs, Stocks, Futures" },
        { feature: "Hedge and Netting", mt4: "Hedge only", mt5: "Both" },
        { feature: "Depth of Market (DOM)", mt4: "No", mt5: "Yes" },
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] lg:text-[54px] font-black uppercase tracking-tight text-black flex flex-wrap justify-center gap-4">
                        <span>METATRADER 4</span>
                        <span className="text-[#ff0000]">VS</span>
                        <span>METATRADER 5</span>
                    </h2>
                    <p className="text-gray-600 font-bold mt-4 max-w-2xl mx-auto uppercase">
                        Choose the platform that better suits your trading style and advanced strategy needs.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto overflow-hidden border border-gray-200 shadow-xl rounded-2xl">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="p-6 font-black text-gray-400 uppercase tracking-wider">Features</th>
                                <th className="p-6 font-black text-black text-center uppercase tracking-wider">MT4</th>
                                <th className="p-6 font-black text-[#ff0000] text-center bg-red-50/50 uppercase tracking-wider">MT5</th>
                            </tr>
                        </thead>
                        <tbody>
                            {specs.map((spec, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                    <td className="p-6 font-bold text-gray-700 uppercase leading-snug">{spec.feature}</td>
                                    <td className="p-6 font-medium text-gray-500 text-center">{spec.mt4}</td>
                                    <td className="p-6 font-black text-black text-center bg-red-50/20">{spec.mt5}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-16 flex flex-col items-center gap-6">
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Experience the upgrade now</p>
                    <button className="bg-black hover:bg-gray-900 text-white px-12 py-4 rounded-xl font-bold text-lg uppercase transition-all active:scale-[0.98] shadow-lg">
                        Open MT5 Account
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MT5Comparison;
