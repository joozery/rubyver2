import React from 'react';
import { Play } from 'lucide-react';
import phoneMobile from '../assets/Phone.png';

const AppleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.3-.79-1.53 0-2 .76-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
);

const AndroidIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.523 15.3414c-.5511 0-.9981-.447-.9981-.9981s.447-.9981.9981-.9981.9981.447.9981.9981-.447.9981-.9981.9981zm-11.046 0c-.5511 0-.9981-.447-.9981-.9981s.447-.9981.9981-.9981.9981.447.9981.9981-.447.9981-.9981.9981zm11.4045-6.027l1.9973-3.4592a.4158.4158 0 0 0-.1521-.5676.4158.4158 0 0 0-.5676.1521l-2.0223 3.503c-1.5312-.699-3.2307-1.0853-5.0118-1.0853-1.781 0-3.4806.3863-5.0118 1.0853l-2.0223-3.503a.4158.4158 0 0 0-.5676-.1521.4158.4158 0 0 0-.1521.5676l1.9973 3.4592C4.3015 10.4485 2.75 12.7188 2.75 15.3444h18.5c0-2.6256-1.5515-4.8959-4.1685-6.03z"></path>
    </svg>
);

const RubyAppCharts = () => {
    return (
        <section className="bg-white pb-24 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Main Content Box - Reversed layout (Text LEFT, Image RIGHT, Accent LEFT) */}
                <div className="relative border border-gray-200 rounded-none p-8 lg:p-16 flex flex-col lg:flex-row-reverse items-center gap-12 max-w-6xl mx-auto shadow-sm min-h-[500px]">
                    {/* Blue accent bar - Left side */}
                    <div className="absolute top-0 bottom-0 left-0 w-4 bg-[#0724FF]"></div>

                    {/* Phone Mockup */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-64 lg:w-80">
                            <img
                                src={phoneMobile}
                                alt="Phone App Charts"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Charts Content */}
                    <div className="lg:w-1/2 text-left">
                        <h3 className="text-2xl lg:text-4xl font-black uppercase mb-6 leading-tight">
                            PREVIEW AND PERSONALIZE<br />YOUR CHARTS
                        </h3>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium max-w-lg">
                            Access charts throughout the app and configure them to your preferences. Leverage over 90 indicators to identify trends and support informed decision-making.
                        </p>

                        {/* Store Buttons Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a href="#" className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-50 transition-all group">
                                <div className="text-black">
                                    <Play size={24} fill="currentColor" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-[10px] text-gray-500 leading-none uppercase font-bold">Get it on the</span>
                                    <span className="text-base text-black font-black leading-tight">Google Play</span>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-50 transition-all group">
                                <div className="text-black">
                                    <AppleIcon />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-[10px] text-gray-500 leading-none uppercase font-bold">Get MT5 on the</span>
                                    <span className="text-base text-black font-black leading-tight">App Store</span>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-50 transition-all group">
                                <div className="text-black">
                                    <AppleIcon />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-[10px] text-gray-500 leading-none uppercase font-bold">Get MT4 on the</span>
                                    <span className="text-base text-black font-black leading-tight">App Store</span>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-50 transition-all group">
                                <div className="text-black">
                                    <AndroidIcon />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-base text-black font-black leading-tight">Download APK</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RubyAppCharts;
