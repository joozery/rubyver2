import React from 'react';
import { ChevronRight } from 'lucide-react';

import tradingMobileImg from '../assets/modelpic/1.png';

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

                    {/* Center: Smartphone Mockup Image */}
                    <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
                        <div className="relative w-[300px] md:w-[350px] lg:w-[400px]">
                            <img
                                src={tradingMobileImg}
                                alt="RUBY Trading Mobile App"
                                className="w-full h-auto drop-shadow-2xl"
                            />
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
