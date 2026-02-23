import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import strangImg from '../assets/strang.png';
import platdormMobileBg from '../assets/moblie/platform/platdorm.jpg';
import googlePlayImg from '../assets/moblie/logoplay.png';
import { ChevronRight, TrendingUp, TrendingDown } from 'lucide-react';

const GooglePlayIcon = () => (
    <svg viewBox="0 0 512 512" width="28" height="28">
        <path d="M325.3 234.3L104.2 13c-5.6-5.6-14.7-5.6-20.3 0l-7 7L312.3 255.3l13-21z" fill="#00e676" />
        <path d="M26.2 30L26.1 482c0 7.9 6.4 14.3 14.3 14.3.7 0 1.4-.1 2.1-.2l233-233.1L26.2 30z" fill="#42a5f5" />
        <path d="M325.3 277.7l-13-21L76.9 492.1l7.1 7.1c5.6 5.6 14.7 5.6 20.3 0l221-221.5z" fill="#ffca28" />
        <path d="M485.8 234.3l-123.6-70.6-26.9 26.9 117.4 117.5c5.6 5.6 14.7 5.6 20.3 0l6-6c5.6-5.6 10.4-15.3 6.8-27.8z" fill="#ff5252" />
    </svg>
);

const AppStoreIcon = () => (
    <svg viewBox="0 0 512 512" width="28" height="28" fill="white">
        <path d="M407.4 251.6c.1-61.9 50.4-91.5 52.7-92.8-28.7-42-73.3-47.7-89.2-48.4-38-3.9-74.1 22.3-93.3 22.3-19.2 0-48.4-21.7-80.1-21.1-41.7.6-80.1 24.3-101.5 61.5-43.5 75.6-11.1 187.4 31.4 248.8 20.8 29.9 45.4 63.4 77.8 62.2 31.2-1.2 43-20.1 80.8-20.1 37.7 0 48.6 20.1 81.3 19.5 33.3-.6 54.7-30.3 75.3-60.3 23.8-34.8 33.7-68.5 34.2-70.3-.7-.3-65.7-25.2-66.4-100.3zM358.9 91.2c17.1-20.7 28.5-49.5 25.4-78.2-24.7 1-54.6 16.5-72.3 37.1-15.9 18.5-29.8 47.9-26 75.9 27.5 2.1 55.8-14.1 72.9-34.8z" />
    </svg>
);

const PlatformsSection = () => {
    const { t } = useTranslation();
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
        <section className="w-full relative">
            {/* Top Red Section - Responsive Backgrounds */}
            <div className="relative text-white overflow-hidden -mt-16 lg:-mt-32 z-10 transition-colors duration-300">
                {/* Desktop Background Layer */}
                <div
                    className="hidden lg:block absolute inset-0 bg-cover bg-top z-0"
                    style={{ backgroundImage: `url(${strangImg})` }}
                />

                {/* Mobile Background Layer */}
                <div
                    className="block lg:hidden absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${platdormMobileBg})` }}
                />

                <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center lg:items-start relative z-10 pt-24 pb-16 lg:pt-44 lg:pb-32">

                    {/* Main Content Area */}
                    <div className="w-full lg:w-1/2 z-20 flex flex-col items-start text-left">
                        <h2 className="text-2xl lg:text-5xl font-black uppercase mb-6 leading-tight drop-shadow-md">
                            {t('home.platforms.title1')} <br className="hidden lg:block" />
                            <span className="text-white lg:text-[#0033ff] leading-none uppercase">
                                {t('home.platforms.title2')}
                            </span>
                        </h2>

                        {/* Platform Toggles */}
                        <div className="flex w-full sm:w-auto gap-3 mb-6">
                            <button
                                onClick={() => setActivePlatform('RUBY app')}
                                className={`flex-1 sm:px-8 py-2.5 rounded text-sm lg:text-lg font-bold transition-all border ${activePlatform === 'RUBY app' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200'}`}
                            >
                                RUBY app
                            </button>
                            <button
                                onClick={() => setActivePlatform('MetaTrader 5')}
                                className={`flex-1 sm:px-8 py-2.5 rounded text-sm lg:text-lg font-bold transition-all border ${activePlatform === 'MetaTrader 5' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200'}`}
                            >
                                MetaTrader 5
                            </button>
                        </div>

                        <p className="text-sm lg:text-lg mb-8 max-w-lg leading-relaxed font-medium drop-shadow-lg text-white">
                            {t('home.platforms.desc')}
                        </p>

                        {/* Spacer for background image on mobile */}
                        <div className="h-[350px] lg:hidden w-full"></div>

                        {/* Store Buttons Area */}
                        <div className="w-full lg:w-auto mt-auto">
                            <div className="mb-4 font-bold text-sm lg:text-xl drop-shadow-md text-white hidden lg:block">{t('home.platforms.start')}</div>

                            {/* Store Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 items-center lg:items-start">
                                <a
                                    href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=th"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black hover:bg-gray-900 text-white rounded-xl px-5 py-2 flex items-center gap-3 w-[220px] lg:w-max min-w-[200px] border border-white/20 transition-all shadow-xl"
                                >
                                    <img src={googlePlayImg} alt="Google Play Icon" className="w-7 h-7 object-contain" />
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold opacity-90 leading-none mb-1">GET IT ON</div>
                                        <div className="text-[20px] font-bold leading-none tracking-tight">Google Play</div>
                                    </div>
                                </a>
                                <a
                                    href="https://apps.apple.com/us/app/metatrader-5/id413251709"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black hover:bg-gray-900 text-white rounded-xl px-5 py-2 flex items-center gap-3 w-[220px] lg:w-max min-w-[200px] border border-white/20 transition-all shadow-xl"
                                >
                                    <AppStoreIcon />
                                    <div className="text-left">
                                        <div className="text-[10px] font-medium opacity-90 leading-none mb-1">Download on the</div>
                                        <div className="text-[20px] font-bold leading-none tracking-tight">App Store</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom White Section */}
            <div className="bg-white py-16 lg:py-20 text-black">
                <div className="container mx-auto px-6 lg:px-12">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                        {t('home.platforms.execution_title')}
                    </h3>
                    <p className="text-gray-600 text-lg mb-4">
                        {t('home.platforms.execution_desc')}
                    </p>
                    <a href="#" className="text-red-600 font-bold flex items-center gap-1 hover:gap-2 transition-all mb-10 w-fit">
                        {t('home.platforms.start_btn')} <ChevronRight size={16} strokeWidth={3} />
                    </a>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 lg:gap-4 mb-8">
                        {[
                            { id: 'Popular', key: 'popular' },
                            { id: 'Currency pairs', key: 'currency' },
                            { id: 'Metals', key: 'metals' },
                            { id: 'Energies', key: 'energies' },
                            { id: 'Indices', key: 'indices' },
                            { id: 'Stock', key: 'stock' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2 rounded-md font-bold text-sm transition-colors ${activeTab === tab.id ? 'bg-black text-white' : 'bg-[#ff0000] text-white hover:bg-gray-800'}`}
                            >
                                {t(`home.platforms.tabs.${tab.key}`)}
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
