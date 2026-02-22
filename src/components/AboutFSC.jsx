import React from 'react';
import fscImg from '../assets/about/fsc.png';

const points = [
    'The FSC (Belize) license allows us to help traders worldwide overcome trading challenges and pursue their dreams.',
    'The FSC (Belize) simplifies legal processes by streamlining regulatory procedures and maintaining all documentation in English.',
    "Belize's legal system adheres to international standards, ensuring transparency and consistency in regulation.",
];

const AboutFSC = () => {
    return (
        <section className="w-full relative bg-[#7a0000] min-h-[650px] flex flex-col lg:flex-row items-center overflow-hidden">
            {/* fsc.png decorative — bottom left */}
            <img
                src={fscImg}
                alt=""
                className="absolute bottom-0 left-0 w-[1400px] pointer-events-none select-none"
            />

            {/* Left Content */}
            <div className="relative z-10 p-10 lg:pl-20 flex-1 w-full flex flex-col justify-center">
                <h2 className="text-white font-black text-[36px] lg:text-[56px] uppercase leading-tight mb-6">
                    WE'RE REGULATER<br />
                    BY <span className="text-[#FF0000]">FSC (Belize)</span>
                </h2>
                <p className="text-white text-base lg:text-[22px] leading-relaxed mb-10 max-w-xl">
                    The FSC (Belize) license allows us to help traders worldwide overcome trading challenges and pursue their dreams.
                </p>
                <button className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-lg text-lg transition-all w-max">
                    Start trading
                </button>
            </div>

            {/* Right Content — Floating white card */}
            <div className="relative z-10 bg-[#f4f4f4] w-full lg:w-[600px] shrink-0 lg:my-16 lg:mr-16 p-10 lg:p-14 shadow-2xl flex flex-col justify-center">
                <h3 className="text-black font-black text-[28px] lg:text-[36px] mb-8">
                    Why FSC (belize) license
                </h3>
                <div className="flex flex-col">
                    {points.map((point, i) => (
                        <div key={i} className={`flex items-start gap-5 py-6 ${i !== points.length - 1 ? 'border-b border-gray-200' : ''}`}>
                            <div className="shrink-0 w-[56px] h-[36px] border border-red-500 rounded-xl flex items-center justify-center text-black font-medium text-lg bg-white shadow-sm mt-1">
                                {i + 1}
                            </div>
                            <p className="text-black text-[18px] leading-relaxed font-medium">
                                {point}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutFSC;
