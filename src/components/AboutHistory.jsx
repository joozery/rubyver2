import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const events2024 = [
    { id: 1, text: 'Celebrated our 15-year anniversary.', colSpan: 1 },
    { id: 2, text: 'Increased leverage on metals to 1:500.', colSpan: 1 },
    { id: 3, text: 'Introduced the upgraded RUBY app for an all-in-one trading experience on the go.', colSpan: 2 },
    { id: 4, text: 'Announced major rebranding featuring a new visual style and brand philosophy.', colSpan: 2 },
    { id: 5, text: 'Became one of the key sponsors of the Finance Magnates Summit 2024.', colSpan: 2 },
];

const AboutHistory = () => {
    return (
        <section className="bg-white py-16 px-6 lg:px-16 border-t border-gray-100/50">
            <div className="container mx-auto">

                {/* Top: Headline & Button */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
                    <h2 className="text-black font-black text-[32px] lg:text-[45px] uppercase leading-tight tracking-tight">
                        WE'VE DONE A LOT<br />
                        AND <span className="text-[#db2727]">WE KEEP GOING</span>
                    </h2>
                    <a
                        href="https://client.rubyfxtrade.com/register/trader"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#db2727] hover:bg-red-700 text-white font-semibold text-lg px-8 py-3 rounded-lg transition-colors w-max flex items-center justify-center text-center"
                    >
                        Trade with RUBY
                    </a>
                </div>

                {/* Year Selector */}
                <div className="flex items-center gap-4 mb-8">
                    {/* Year Badge */}
                    <div className="border border-[#db2727] rounded-lg px-12 py-2 flex items-center justify-center">
                        <span className="text-[#db2727] font-black text-[28px] tracking-wide">
                            2024
                        </span>
                    </div>

                    {/* Arrows */}
                    <div className="flex items-center gap-3">
                        <button className="w-10 h-8 bg-black hover:bg-gray-800 text-white rounded-md flex items-center justify-center transition-colors">
                            <ArrowLeft size={16} strokeWidth={2} />
                        </button>
                        <button className="w-10 h-8 bg-white border border-gray-300 hover:bg-gray-50 text-black rounded-md flex items-center justify-center transition-colors">
                            <ArrowRight size={16} strokeWidth={2} />
                        </button>
                    </div>
                </div>

                {/* Event List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {events2024.map((ev) => (
                        <div
                            key={ev.id}
                            className={`bg-[#f4f4f4] rounded-lg py-5 px-6 flex items-center justify-center text-center shadow-sm ${ev.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'
                                }`}
                        >
                            <p className="text-black font-medium text-[17px]">
                                {ev.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutHistory;
