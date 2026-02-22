import React from 'react';
import popularImg from '../assets/acadamy/poppular.jpg';
import { ArrowRight } from 'lucide-react';

const AcademyLearn = () => {
    return (
        <section className="bg-white py-14">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Title */}
                <div className="text-center mb-8">
                    <h2 className="text-[32px] lg:text-[44px] font-black uppercase text-black leading-tight tracking-tight">
                        BEGIN LEARNING TO TRADE NOW
                    </h2>
                    <p className="text-black font-bold text-base lg:text-lg mt-2">
                        Begin learning to trade now
                    </p>
                </div>

                {/* Image Card */}
                <div className="relative rounded-2xl overflow-hidden mb-8">
                    <img
                        src={popularImg}
                        alt="Why Are CFDs So Popular?"
                        className="w-full h-auto object-cover"
                    />
                    {/* Overlay text on image */}
                    <div className="absolute inset-0 flex flex-col items-end justify-center pr-8 lg:pr-16">
                        <p className="text-white text-xl lg:text-2xl font-medium drop-shadow-lg">
                            Why Are <span className="text-cyan-400 font-black">CFDs</span>
                        </p>
                        <p className="text-white text-[28px] lg:text-[40px] font-black uppercase leading-tight drop-shadow-lg">
                            SO POPULAR?
                        </p>
                    </div>
                </div>

                {/* Bottom: description + button */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
                    <div className="max-w-xl">
                        <p className="text-black font-bold text-base lg:text-lg leading-relaxed mb-2">
                            CFDs, or Contracts for Difference, allow you to profit from price movements without owning the actual asset.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Why Investors Choose CFDs? Access to a wide range of markets: stocks, indices, gold, oil, forex, and crypto
                        </p>
                    </div>
                    <a
                        href="#"
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-lg text-sm transition-colors shrink-0"
                    >
                        Let's learn
                        <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default AcademyLearn;
