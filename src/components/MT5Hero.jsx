import React from 'react';
import macbookImg from '../assets/macbook.png';
import mobileImg from '../assets/5moblie.png';
import rubygemImg from '../assets/rubygem.png';

const MT5Hero = () => {
    return (
        <section className="relative w-full min-h-[500px] lg:h-[600px] bg-[#DEDFE3] flex items-center overflow-hidden py-16 lg:py-0">
            <div className="container mx-auto px-6 lg:px-12 relative z-20">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-left z-20 w-full relative">
                        <h1 className="text-[32px] xs:text-[36px] sm:text-[48px] lg:text-[72px] font-black leading-[1.1] mb-4 sm:mb-6 tracking-tighter uppercase text-black">
                            META TRADER 5
                        </h1>

                        <div className="relative w-full">
                            {/* Content container with right padding to clear the absolute imaged phone on mobile */}
                            <div className="pr-[120px] xs:pr-[150px] sm:pr-[200px] lg:pr-0">
                                <p className="text-[14px] xs:text-[15px] sm:text-xl lg:text-3xl font-medium lg:font-bold mb-6 sm:mb-10 text-gray-800 leading-snug">
                                    Experience an enhanced trading platform offering a broad selection of instruments and intuitive technical tools.
                                </p>
                                <button className="bg-[#ff0000] hover:bg-red-700 text-white px-6 xs:px-8 sm:px-12 py-3 sm:py-5 rounded-[8px] sm:rounded-xl font-bold text-sm sm:text-xl transition-all active:scale-[0.98] shadow-[0_8px_20px_rgba(255,0,0,0.3)] inline-block">
                                    Download MT5
                                </button>
                            </div>

                            {/* Mobile Image (Absolute to the right) */}
                            <div className="block lg:hidden absolute right-[-24px] xs:right-[-10px] top-[-10px] w-[150px] xs:w-[180px] sm:w-[240px] z-10 pointer-events-none">
                                <img
                                    src={mobileImg}
                                    alt="MT5 on Phone"
                                    className="w-full h-auto object-contain scale-[1.1] origin-top"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Image (MacBook) */}
                    <div className="hidden lg:flex lg:w-1/2 relative justify-end mt-8 lg:mt-0 w-full">
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
