import React, { useState } from 'react';
import strangImg from '../assets/strang.png';
import { Apple, Play, ChevronRight, TrendingUp, TrendingDown } from 'lucide-react';

const PlatformsSection = () => {
    const [activePlatform, setActivePlatform] = useState('RUBY app');
    const [activeTab, setActiveTab] = useState('Popular');

    const marketData = [
        {
            symbol: 'XAUUSD',
            icon: '🟡', // Placeholder for Gold icon
            chartColor: 'red',
            change: '-0.09%',
            sell: '4023.5',
            buy: '4023.15'
        },
        {
            symbol: 'US30',
            icon: '🇺🇸', // Placeholder for US Flag/Icon
            chartColor: 'red',
            change: '-0.52%',
            sell: '4023.5',
            buy: '4023.15'
        },
        {
            symbol: 'EURUSD',
            icon: '🇪🇺', // Placeholder for EU Flag
            chartColor: 'green',
            change: '0.03%',
            sell: '4023.5',
            buy: '4023.15'
        }
    ];

    return (
        <section className="w-full">
            {/* Top Red Section - Now with Background Image */}
            <div
                className="text-white relative overflow-hidden bg-cover bg-[right_top] lg:bg-top -mt-16 lg:-mt-32 z-10"
                style={{ backgroundImage: `url(${strangImg})` }}
            >
                <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center relative z-10 pt-24 pb-16 lg:pt-44 lg:pb-32">

                    {/* Left Content */}
                    <div className="lg:w-1/2 z-20">
                        <h2 className="text-4xl lg:text-5xl font-black uppercase mb-2 leading-none drop-shadow-md">
                            Strengthen Your Edge
                        </h2>
                        <h2 className="text-4xl lg:text-5xl font-black uppercase text-[#0033ff] mb-8 leading-none drop-shadow-sm">
                            With Our Platforms
                        </h2>

                        {/* Platform Toggles */}
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={() => setActivePlatform('RUBY app')}
                                className={`px-8 py-3 rounded text-lg font-bold transition-colors ${activePlatform === 'RUBY app' ? 'bg-black text-white' : 'bg-white text-black'}`}
                            >
                                RUBY app
                            </button>
                            <button
                                onClick={() => setActivePlatform('MetaTrader 5')}
                                className={`px-8 py-3 rounded text-lg font-bold transition-colors ${activePlatform === 'MetaTrader 5' ? 'bg-black text-white' : 'bg-white text-black'}`}
                            >
                                MetaTrader 5
                            </button>
                        </div>

                        <p className="text-lg mb-8 max-w-lg leading-relaxed font-medium drop-shadow-md">
                            Transform your experience with our mobile platform. Deposit, withdraw, and manage trades effortlessly on the move.
                        </p>

                        <div className="mb-2 font-bold text-xl drop-shadow-md">Start Trading</div>

                        {/* Store Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-black hover:bg-gray-900 text-white rounded-lg px-4 py-2 flex items-center gap-3 w-max min-w-[160px] border border-white/20 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <Play size={28} className="fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-medium">GET IT ON</div>
                                    <div className="text-base font-bold leading-none">Google Play</div>
                                </div>
                            </button>
                            <button className="bg-black hover:bg-gray-900 text-white rounded-lg px-4 py-2 flex items-center gap-3 w-max min-w-[160px] border border-white/20 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <Apple size={28} className="fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-medium">Download on the</div>
                                    <div className="text-base font-bold leading-none">App Store</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Background decorative elements could go here (grids, lines) */}
            </div>

            {/* Bottom White Section */}
            <div className="bg-white py-16 lg:py-20 text-black">
                <div className="container mx-auto px-6 lg:px-12">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                        Fast and stable order execution,
                    </h3>
                    <p className="text-gray-600 text-lg mb-4">
                        starting from 0.01 seconds. Zero requotes. VPS hosting is available for optimal performance.
                    </p>
                    <a href="#" className="text-red-600 font-bold flex items-center gap-1 hover:gap-2 transition-all mb-10 w-fit">
                        Start trading <ChevronRight size={16} strokeWidth={3} />
                    </a>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 lg:gap-4 mb-8">
                        {['Popular', 'Currency pairs', 'Metals', 'Energies', 'Indices', 'Stock'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-md font-bold text-sm transition-colors ${activeTab === tab ? 'bg-black text-white' : 'bg-[#ff0000] text-white hover:bg-gray-800'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Market Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {marketData.map((item, index) => (
                            <div key={index} className="bg-gray-100 rounded-xl p-6 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="text-2xl">{item.icon}</div>
                                        <span className="font-black text-lg text-gray-800">{item.symbol}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {/* Simplified Sparkline Representation */}
                                        <svg width="40" height="20" viewBox="0 0 40 20" className="opacity-70">
                                            <path
                                                d="M0,15 Q10,18 20,10 T40,5"
                                                fill="none"
                                                stroke={item.chartColor}
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span className={`text-xs font-bold ${item.chartColor === 'green' ? 'text-green-600' : 'text-red-500'}`}>
                                            {item.change}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center bg-white rounded-lg p-3 gap-4">
                                    <div className="text-center w-1/2">
                                        <div className="text-xs text-red-500 font-bold mb-1">Sell <span className="text-gray-900 text-sm">{item.sell}</span></div>
                                    </div>
                                    <div className="w-[1px] h-6 bg-gray-200"></div>
                                    <div className="text-center w-1/2">
                                        <div className="text-xs text-red-500 font-bold mb-1">Buy <span className="text-gray-900 text-sm">{item.buy}</span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformsSection;
