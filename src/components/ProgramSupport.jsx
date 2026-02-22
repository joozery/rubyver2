import React from 'react';
import worldImg from '../assets/support/world.png';
import bookImg from '../assets/support/book.png';
import { ArrowRight } from 'lucide-react';

const ProgramSupport = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px]">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-black text-[32px] md:text-[42px] uppercase tracking-wide leading-tight text-black">
                        GROW YOUR BUSINESS<br />
                        WITH OUR SUPPORT
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                    {/* Marketing Materials Card */}
                    <div className="bg-[#fcfcfc] border border-gray-100 shadow-sm rounded-xl p-8 lg:p-12 flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="mb-8">
                            <h3 className="font-black text-[22px] md:text-[26px] text-black uppercase tracking-wide mb-2">
                                MARKETING MATERIALS
                            </h3>
                            <p className="text-[#333] text-[16px] md:text-[18px]">
                                Access a wide range of advertising tools.
                            </p>
                        </div>

                        <div className="flex-grow flex justify-center items-center py-8">
                            <img
                                src={worldImg}
                                alt="Marketing Materials"
                                className="w-full max-w-[280px] object-contain select-none"
                            />
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="flex-1 min-w-[140px] border border-gray-400 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-black font-medium text-[15px]">
                                Website banners <ArrowRight size={18} strokeWidth={1.5} className="text-gray-600" />
                            </button>
                            <button className="flex-1 min-w-[140px] border border-gray-400 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-black font-medium text-[15px]">
                                SMM materials <ArrowRight size={18} strokeWidth={1.5} className="text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Educational Resources Card */}
                    <div className="bg-[#fcfcfc] border border-gray-100 shadow-sm rounded-xl p-8 lg:p-12 flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="mb-8">
                            <h3 className="font-black text-[22px] md:text-[26px] text-black uppercase tracking-wide mb-2">
                                EDUCATIONAL RESOURCES
                            </h3>
                            <p className="text-[#333] text-[16px] md:text-[18px]">
                                Utilize our materials to educate and support clients.
                            </p>
                        </div>

                        <div className="flex-grow flex justify-center items-center py-8">
                            <img
                                src={bookImg}
                                alt="Educational Resources"
                                className="w-full max-w-[320px] object-contain select-none"
                            />
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="flex-1 min-w-[140px] border border-gray-400 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-black font-medium text-[15px]">
                                Help Center <ArrowRight size={18} strokeWidth={1.5} className="text-gray-600" />
                            </button>
                            <button className="flex-1 min-w-[140px] border border-gray-400 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-black font-medium text-[15px]">
                                Market Analytics <ArrowRight size={18} strokeWidth={1.5} className="text-gray-600" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Become Partner Button */}
                <div className="flex justify-center">
                    <button className="bg-[#f13a04] hover:bg-red-600 text-white font-bold text-[18px] lg:text-[22px] px-14 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-1">
                        Become Partner
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ProgramSupport;
