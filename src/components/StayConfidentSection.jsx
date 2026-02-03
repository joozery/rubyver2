import React from 'react';
import { ChevronRight } from 'lucide-react';

const StayConfidentSection = () => {
    return (
        <section className="w-full bg-[#f8f9fa] py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

                    {/* Left: Headline & Text */}
                    <div className="lg:w-1/4 order-2 lg:order-1">
                        <div className="border-l-[6px] border-[#0033ff] pl-6 py-2">
                            <h3 className="text-3xl lg:text-4xl font-black uppercase text-black leading-tight mb-6 tracking-tighter">
                                STAY CONFIDENT AT EVERY STEP
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Wherever the market moves, RubyFX equips you with tools to enter quality trades and safeguard your funds.
                            </p>
                        </div>
                    </div>

                    {/* Center: Smartphone Mockup */}
                    <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
                        <div className="relative w-[300px] md:w-[350px] lg:w-[400px]">
                            {/* iPhone Mockup Frame */}
                            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] md:h-[700px] w-full shadow-2xl overflow-hidden">
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
                                    {/* Quote List */}
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

                    {/* Right: Features */}
                    <div className="lg:w-1/4 space-y-12 order-3">
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Flexible leverage</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                up to 1:3000
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Negative balance protection</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                Active
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Margin call</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                40%
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Stop out</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                20%
                            </p>
                        </div>

                        <button className="flex items-center gap-2 border-2 border-black rounded-lg px-6 py-3 font-bold hover:bg-black hover:text-white transition-all">
                            More about margin and leverage <ChevronRight size={18} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StayConfidentSection;
