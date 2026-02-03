import React from 'react';
import { ChevronRight } from 'lucide-react';

const TradingConditions = () => {
    return (
        <section id="trading-section" className="w-full bg-[#f8f9fa] py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Upper Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
                    <div className="lg:w-2/3">
                        <h2 className="text-5xl lg:text-7xl font-black uppercase leading-tight mb-6">
                            <span className="text-[#ff0000]">TRADING</span> <br />
                            <span className="text-black">CONDITIONS</span>
                        </h2>
                        <p className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight max-w-2xl">
                            Navigate through market complexities with ease. Our trading terms are designed to make your experience smooth and effortless.
                        </p>
                    </div>
                    <div>
                        <button className="bg-[#ff0000] hover:bg-red-700 text-white font-bold py-5 px-10 rounded-xl text-xl transition-all shadow-xl mt-4 lg:mt-0">
                            Join the market
                        </button>
                    </div>
                </div>

                {/* Main Content Layout: Left Text | Center Phone | Right List */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

                    {/* Left: Diversify Text */}
                    <div className="lg:w-1/4 order-2 lg:order-1">
                        <div className="border-l-[6px] border-[#0033ff] pl-6 py-2">
                            <h3 className="text-3xl lg:text-4xl font-black uppercase text-black leading-tight mb-6 tracking-tighter">
                                DIVERSIFY LIKE NEVER BEFORE
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Access over 550+ CFD instruments anytime. All order types are executed at genuine market prices without requotes.
                            </p>
                        </div>
                    </div>

                    {/* Center: Smartphone Mockup */}
                    <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
                        <div className="relative w-[300px] md:w-[350px] lg:w-[400px]">
                            {/* iPhone Mockup Frame (CSS based) */}
                            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] md:h-[700px] w-full shadow-2xl overflow-hidden">
                                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

                                {/* Screen Content */}
                                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white flex flex-col">
                                    {/* App Header */}
                                    <div className="bg-white px-4 pt-12 pb-4 flex justify-between items-center border-b">
                                        <div className="text-xs font-bold text-gray-400">15:19</div>
                                        <div className="text-sm font-bold text-black uppercase">Quotes</div>
                                        <div className="flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                            <div className="w-3 h-1 bg-gray-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    {/* Quote List (Simulation) */}
                                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                        {[
                                            { pair: 'XAUUSD.qrs', price: '4203.88', change: '-4.33 -0.10%', up: false },
                                            { pair: 'XAGUSD.qrs', price: '61.47', change: '+8.35 1.29%', up: true },
                                            { pair: 'XFOUUSD.qrs', price: '1505.08', change: '+34 0.02%', up: true },
                                            { pair: 'XPTUSD.qrs', price: '1676.03', change: '-1282 -0.77%', up: false },
                                            { pair: 'ALUMINIUM.qrs', price: '2867', change: '+12 0.42%', up: true },
                                            { pair: 'COPPER.qrs', price: '11590', change: '+123 1.07%', up: true },
                                            { pair: 'GBPUSD.qrs', price: '1.33203', change: '+362 0.20%', up: true },
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center border-b pb-2">
                                                <div>
                                                    <div className="text-[10px] font-bold text-gray-500">{item.pair}</div>
                                                    <div className={`text-[10px] ${item.up ? 'text-green-500' : 'text-red-500'}`}>{item.change}</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className={`text-base font-black ${item.up ? 'text-blue-600' : 'text-black'}`}>{item.price}</div>
                                                    <div className="text-[8px] text-gray-400">L: 4200.31 H: 4218.72</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* App Nav */}
                                    <div className="bg-gray-50 border-t flex justify-between px-6 py-4">
                                        <div className="w-6 h-6 bg-blue-600 rounded"></div>
                                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Conditions List */}
                    <div className="lg:w-1/4 space-y-12 order-3">
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Tight spreads</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                floating from 0.7 pips
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Order volume</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                from 0.01 to 500 lots
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Open positions</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                up to 500, including 200 pending orders
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Order execution</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                from 0.01 seconds
                            </p>
                        </div>

                        <button className="flex items-center gap-2 border-2 border-black rounded-lg px-6 py-3 font-bold hover:bg-black hover:text-white transition-all">
                            See all instruments <ChevronRight size={18} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TradingConditions;
