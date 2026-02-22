import React from 'react';
import { Play } from 'lucide-react';

const ProgramPayout = () => {
    return (
        <section className="bg-white py-24 relative z-20">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px]">

                {/* Header */}
                <h2 className="font-black text-[32px] md:text-[46px] uppercase tracking-wide leading-tight mb-14">
                    <span className="text-black">EXPLORE OUR </span>
                    <span className="text-[#f13a04]">PAYOUT SYSTEM</span>
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Video Thumbnail */}
                    <div className="w-full lg:w-[60%] relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg">
                        {/* Fake thumbnail using gradient and grid pattern */}
                        <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#0a0f0d] via-[#0b2414] to-[#125c27] relative">
                            {/* Dot pattern overlay */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] opacity-50"></div>

                            {/* Center title */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-105">
                                <h3 className="text-white text-[24px] md:text-[32px] font-medium tracking-wide">
                                    Commission Payout System
                                </h3>
                            </div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors shadow-lg shadow-black/20">
                                    <Play size={32} className="text-white ml-2" fill="white" />
                                </div>
                            </div>

                            {/* Author Row */}
                            <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-transparent group-hover:border-white/50 transition-colors">
                                    {/* Placeholder avatar image */}
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        alt="Author"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-white/90 text-[14px] font-medium tracking-wide">
                                    Diego <span className="mx-1">•</span> RUBY IB Program
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-[40%] flex flex-col justify-center">
                        <h3 className="text-black font-black text-[28px] md:text-[36px] uppercase leading-[1.2] mb-6">
                            THE HIGHER THE GRADE,<br />
                            THE MORE YOU EARN
                        </h3>
                        <p className="text-[#333] text-[18px] md:text-[20px] font-medium leading-[1.6]">
                            Your Grade determines the percentage of the spread you will receive. For example, with Grade 1, you'll get 30% of the spread, while with Grade 6, it will be 43%.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProgramPayout;
