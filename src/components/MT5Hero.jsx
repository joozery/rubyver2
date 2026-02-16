import React from 'react';
import macbookImg from '../assets/macbook.png';
import rubygemImg from '../assets/rubygem.png';

const MT5Hero = () => {
    return (
        <section className="relative w-full min-h-[500px] lg:h-[600px] bg-[#DEDFE3] flex items-center overflow-hidden py-16 lg:py-0">
            <div className="container mx-auto px-6 lg:px-12 relative z-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-left">
                        <h1 className="text-[48px] lg:text-[72px] font-black leading-[1.1] mb-6 tracking-tighter uppercase text-black">
                            META TRADER 5
                        </h1>
                        <p className="text-xl lg:text-3xl font-bold max-w-xl mb-10 text-gray-800 leading-tight">
                            Experience an enhanced trading platform offering a broad selection of instruments and intuitive technical tools.
                        </p>
                        <button className="bg-[#ff0000] hover:bg-red-700 text-white px-12 py-5 rounded-xl font-bold text-xl uppercase transition-all active:scale-[0.98] shadow-xl shadow-red-500/30 inline-block">
                            Download MT5
                        </button>
                    </div>

                    {/* MacBook Image Area */}
                    <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
                        <div className="relative z-10 transform lg:scale-[1.5] lg:translate-x-12 -translate-y-10">
                            <img
                                src={macbookImg}
                                alt="MT5 on MacBook"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MT5Hero;
