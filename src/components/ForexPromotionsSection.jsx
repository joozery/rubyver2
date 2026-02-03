import React from 'react';
import bgImage from '../assets/Rectangle19.jpg';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ForexPromotionsSection = () => {
    return (
        <section
            className="w-full bg-black text-white relative bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay for readability if needed, though design seems to use the image directly */}
            {/* <div className="absolute inset-0 bg-black/50"></div> */}

            <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20 lg:py-32">

                {/* --- Top Part: Promotions --- */}
                <div className="mb-24">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-5xl lg:text-7xl font-black uppercase leading-none">
                                FOREX <br />
                                <span className="text-[#ff0000]">PROMOTIONS</span>
                            </h2>
                        </div>
                        <div className="text-right mt-6 lg:mt-0">
                            <h3 className="text-xl lg:text-2xl font-medium text-gray-200">
                                Weekly Promotions from Ruby FX <br />
                                Trade Smart, Gain More
                            </h3>
                        </div>
                    </div>

                    {/* Promotions Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Large Featured Card (Left) */}
                        <div className="lg:col-span-6 relative h-[400px] lg:h-[500px] bg-gray-800 rounded-sm overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&q=80&w=1000"
                                alt="Ruby Cards"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold uppercase hover:bg-red-600 transition-colors">
                                    Learn more
                                </button>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 bg-black flex items-center justify-center rounded-full text-white hover:bg-red-600 transition-colors">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button className="w-10 h-10 bg-black flex items-center justify-center rounded-full text-white hover:bg-red-600 transition-colors">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Smaller Cards (Right) */}
                        <div className="lg:col-span-6 flex flex-col gap-6">
                            {/* Card 1 */}
                            <div className="flex-1 bg-white/90 p-8 text-black flex flex-col justify-center rounded-sm">
                                <h4 className="text-xl font-bold uppercase text-gray-500 mb-2">PROMOTION</h4>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                </p>
                                <button className="bg-[#ff0000] text-white px-8 py-3 rounded-full text-sm font-bold uppercase w-max flex items-center gap-2 hover:bg-red-700 transition-colors">
                                    Join Event <ChevronRight size={16} />
                                </button>
                            </div>
                            {/* Card 2 */}
                            <div className="flex-1 bg-white/90 p-8 text-black flex flex-col justify-center rounded-sm">
                                <h4 className="text-xl font-bold uppercase text-gray-500 mb-2">PROMOTION</h4>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                </p>
                                <button className="bg-[#ff0000] text-white px-8 py-3 rounded-full text-sm font-bold uppercase w-max flex items-center gap-2 hover:bg-red-700 transition-colors">
                                    Join Event <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <a href="#" className="flex items-center gap-2 text-white font-bold hover:text-[#ff0000] transition-colors">
                            More Promotion <ChevronRight size={16} />
                        </a>
                    </div>
                </div>

                {/* --- Bottom Part: Stay Bold --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Image with Blue Border */}
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-2/3 h-2/3 border-[20px] border-[#0033ff] z-0 hidden lg:block"></div>
                        <div className="relative z-10 h-[500px] lg:h-[700px] w-full bg-gray-800">
                            <img
                                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000"
                                alt="Man Trading"
                                className="w-full h-full object-cover"
                            />
                            {/* Blue overlay tint at the bottom or graphic elements can go here */}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div>
                        <h2 className="text-5xl lg:text-7xl font-black uppercase leading-tight text-[#0033ff] mb-6">
                            STAY BOLD, <br />
                            STAY SURE.
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
                            Get inspired by top RubyFX traders and their performance to aim for the next leaderboard position.
                        </p>

                        <button className="bg-[#ff0000] hover:bg-red-700 text-white px-10 py-4 rounded text-xl font-bold mb-12 shadow-lg shadow-red-900/40 transition-all">
                            Trade with Confidence
                        </button>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Info Box 1 */}
                            <div className="bg-white p-6 rounded text-black h-full flex flex-col justify-between">
                                <div>
                                    <h5 className="font-bold text-lg mb-2">Trade with Confidence</h5>
                                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                        Ruby operates under the FSC (Belize) license, helping traders grow stronger at every step of their trading journey.
                                    </p>
                                </div>
                                <div className="text-[#0033ff] font-serif font-bold text-xl">IFSC</div>
                            </div>

                            {/* Info Box 2 */}
                            <div className="bg-white p-6 rounded text-black h-full flex flex-col justify-between">
                                <div>
                                    <h5 className="font-bold text-lg mb-2">200+ payment methods</h5>
                                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                        Deposit and withdraw via local banks & global methods. Instant automated withdrawals available.
                                    </p>
                                </div>
                                <div className="text-right">
                                    {/* Placeholder logo */}
                                    <div className="inline-block bg-blue-100 p-1 text-[10px] font-bold text-[#0033ff] rounded">PLAY SOLUTION</div>
                                </div>
                            </div>

                            {/* Info Box 3 (Wide) */}
                            <div className="md:col-span-2 bg-white p-6 rounded text-black flex items-center justify-between">
                                <div className="max-w-xs">
                                    <h5 className="font-bold text-lg mb-1">24/7 support</h5>
                                    <p className="text-xs text-gray-600">
                                        Get a reply in less than a minute or schedule a callback.
                                    </p>
                                </div>
                                <div className="bg-white border-2 border-[#ff0000] rounded-full w-12 h-12 flex items-center justify-center text-[#ff0000] font-black italic shadow-lg">
                                    24/7
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ForexPromotionsSection;
