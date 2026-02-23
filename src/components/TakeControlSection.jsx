import React from 'react';
import { ChevronRight } from 'lucide-react';

import controlMobileImg from '../assets/modelpic/4.png';

const TakeControlSection = () => {
    return (
        <section className="w-full bg-white py-20 lg:py-32 overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

                    {/* Left: Headline & Text */}
                    <div className="lg:w-1/4 order-2 lg:order-1">
                        <div className="border-l-[6px] border-[#0033ff] pl-6 py-2">
                            <h3 className="text-3xl lg:text-4xl font-black uppercase text-black leading-tight mb-6 tracking-tighter">
                                TAKE CONTROL OF YOUR CAPITAL
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We offer 200+ ways to deposit and withdraw, ensuring nothing stands between you and the market.
                            </p>
                        </div>
                    </div>

                    {/* Center: Smartphone Mockup Image */}
                    <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
                        <div className="relative w-[300px] md:w-[350px] lg:w-[400px]">
                            <img
                                src={controlMobileImg}
                                alt="RUBY Control Mobile App"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right: Features */}
                    <div className="lg:w-1/4 space-y-12 order-3">
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Payment methods</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                No commission
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Initial deposit</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                Available
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Instant withdrawals</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                Available
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 font-bold mb-1">Commission</h4>
                            <p className="text-2xl lg:text-3xl font-black text-black leading-tight">
                                Not charged by RUBY
                            </p>
                        </div>

                        <a
                            href="https://client.rubyfxtrade.com/register/trader"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border-2 border-black rounded-lg px-6 py-3 font-bold hover:bg-black hover:text-white transition-all w-max"
                        >
                            See all payment methods <ChevronRight size={18} />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TakeControlSection;
