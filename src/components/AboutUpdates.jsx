import React from 'react';
import { ArrowRight } from 'lucide-react';

const updates = Array(6).fill({
    title: 'Trading Schedule Changes in November',
    time: '10 days ago',
});

const AboutUpdates = () => {
    return (
        <section className="bg-[#111111] py-16 px-6 lg:px-16">
            <div className="container mx-auto">

                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <h2 className="text-white font-black text-[28px] lg:text-[36px] uppercase tracking-wide">
                        WE KEEP CLIENTS UPDATED
                    </h2>
                    <button className="flex items-center gap-2 border border-white/30 text-white px-5 py-2 rounded-md hover:bg-white/10 transition-colors shrink-0 font-medium">
                        Read more <ArrowRight size={18} />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                    {updates.map((item, i) => (
                        <div
                            key={i}
                            className={`flex justify-between gap-6 py-8 border-white/10 border-b ${i >= 4 ? 'lg:border-b-0' : ''
                                } ${i === 5 ? 'border-b-0' : ''}`}
                        >
                            {/* Text part */}
                            <div className="flex flex-col justify-between flex-1 py-1">
                                <h4 className="text-white font-medium text-[16px] xl:text-[18px] leading-snug">
                                    {item.title}
                                </h4>
                                <div className="flex items-center mt-4">
                                    <span className="text-white/40 text-sm">{item.time}</span>
                                    <button className="w-8 h-8 rounded border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors ml-auto shrink-0">
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="shrink-0 w-[140px] md:w-[306px] h-[100px] md:h-[190px] bg-[#d9d9d9] rounded-sm relative overflow-hidden flex items-center justify-center">
                                {/* Simulated image design for the first two items based on the screenshot */}
                                {i === 0 && (
                                    <>
                                        <div className="absolute inset-0 bg-[#e3d1d3]"></div>
                                        <div className="border border-[#7a0000] text-[#7a0000] font-black text-sm lg:text-lg px-4 py-1.5 rounded-full bg-white/70 z-10 tracking-widest uppercase shadow-sm">
                                            NOVEMBER
                                        </div>
                                    </>
                                )}
                                {i === 1 && (
                                    <>
                                        <div className="absolute inset-0 bg-[#3a0000]"></div>
                                        <div className="border border-white/60 text-white font-black text-sm lg:text-lg px-4 py-1.5 rounded-full bg-black/40 z-10 tracking-widest uppercase shadow-sm">
                                            OCTOBER
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Button */}
                <div className="flex justify-center mt-6 lg:mt-8 pt-10 border-t border-white/10">
                    <a
                        href="https://client.rubyfxtrade.com/register/trader"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#e42e2e] hover:bg-red-600 text-white font-semibold text-[17px] w-full max-w-[360px] py-3.5 rounded-lg transition-colors shadow-lg flex items-center justify-center text-center"
                    >
                        Join RUBY
                    </a>
                </div>

            </div>
        </section>
    );
};

export default AboutUpdates;
