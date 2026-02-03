import React from 'react';
import besharpBg from '../assets/besharp.jpg';
import { ChevronRight } from 'lucide-react';

const BeSharpSection = () => {
    return (
        <section className="relative w-full h-auto lg:h-[889px] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${besharpBg})` }}>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col pt-12 pb-12 justify-between">

                {/* Top Section: Title & Cards (Right Aligned Group on Desktop) */}
                <div className="w-full lg:ml-auto lg:w-fit mb-12 lg:mb-auto flex flex-col gap-10">

                    {/* Title - Aligned to the start of the cards container (left of the container) */}
                    <div className="text-left w-full max-w-2xl mx-auto lg:mx-0">
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                            Be Sharp, <br className="lg:hidden" /> Trade Sharper
                        </h2>
                        <p className="text-white text-lg max-w-md leading-relaxed">
                            We understand that trading is difficult, and only a small number of traders succeed. We are here to help change that.
                        </p>
                        <button className="bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all inline-flex items-center shadow-lg mt-6">
                            Trade with RB
                        </button>
                    </div>

                    {/* Blue Cards */}
                    <div className="flex flex-col md:flex-row gap-5">
                        {/* Card 1 */}
                        <div className="bg-[#0033ff] p-8 text-white relative overflow-hidden group w-full md:w-1/2 lg:w-[412px] h-[339px] flex flex-col justify-start rounded-none shrink-0 border border-white/10">
                            <div>
                                <h3 className="text-[28px] font-bold mb-3 leading-tight">Sharpen Your <br /> Strategy</h3>
                                <p className="text-sm opacity-90 leading-relaxed mb-6">
                                    Stay ahead in the market with our comprehensive analytics: daily entries, technical analysis, real-time notifications, and more.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-3 mt-auto">
                                <button className="bg-black text-white px-6 py-3 rounded-[4px] text-xs font-bold w-max flex items-center uppercase tracking-wider">
                                    MARKET INSIGHTS <ChevronRight size={14} className="ml-1" />
                                </button>
                                <button className="bg-black text-white px-6 py-3 rounded-[4px] text-xs font-bold w-max flex items-center uppercase tracking-wider">
                                    TRADE IDEA <ChevronRight size={14} className="ml-1" />
                                </button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#0033ff] p-8 text-white relative overflow-hidden flex flex-col justify-start w-full md:w-1/2 lg:w-[412px] h-[339px] rounded-none shrink-0 border border-white/10">
                            <div>
                                <h3 className="text-[28px] font-bold mb-3 leading-tight">Stay <br /> Informed</h3>
                                <p className="text-sm opacity-90 leading-relaxed mb-6">
                                    Receive daily VIP Analytics with essential news, trade ideas, and expert insights from RUBY.
                                </p>
                            </div>

                            <div className="relative h-full flex items-end">
                                {/* Placeholder for graphic element */}
                                <div className="absolute right-0 bottom-8 opacity-20 font-black text-7xl tracking-tighter leading-none text-white select-none pointer-events-none">
                                    RUBY
                                </div>
                                <button className="bg-black text-white px-6 py-3 rounded-[4px] text-xs font-bold w-max flex items-center uppercase tracking-wider relative z-10">
                                    LEARN MORE <ChevronRight size={14} className="ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Level Up Section - Bottom Full Width */}
                <div className="w-full mt-auto">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 uppercase tracking-tight">
                        Level Up Your Knowledge
                    </h3>
                    <p className="text-white/80 mb-6 text-base leading-relaxed max-w-3xl">
                        Our structured approach to sharpening your trading expertise. Trading courses are designed by seasoned market professionals for traders at every skill level.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-4 w-full">
                        {['Beginner Courses', 'Advanced Lessons', 'Tutorials', 'Trader’s Blog'].map((item, idx) => (
                            <button key={idx} className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-6 rounded-lg flex-1 flex items-center justify-center gap-3 transition-all text-lg shadow-lg whitespace-nowrap">
                                <span>{item}</span>
                                <ChevronRight size={18} className="text-black transition-colors stroke-[3]" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeSharpSection;
