import React from 'react';
import { ChevronRight } from 'lucide-react';

import stayConfidentImg from '../assets/modelpic/3.png';

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

                    {/* Center: Smartphone Mockup Image */}
                    <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
                        <div className="relative w-[300px] md:w-[350px] lg:w-[400px]">
                            <img
                                src={stayConfidentImg}
                                alt="RUBY Confidence Mobile App"
                                className="w-full h-auto drop-shadow-2xl"
                            />
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

                        <a
                            href="https://client.rubyfxtrade.com/register/trader"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border-2 border-black rounded-lg px-6 py-3 font-bold hover:bg-black hover:text-white transition-all w-max"
                        >
                            More about margin and leverage <ChevronRight size={18} />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StayConfidentSection;
