import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ChevronLeft, ChevronRight as ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
import joinImg1 from '../assets/jhon/Rectangle 6.png';
import joinImg2 from '../assets/jhon/Rectangle 9.png';
import joinImg3 from '../assets/jhon/Rectangle 10.png';

const JoinCommunitySection = () => {
    const { t } = useTranslation();
    return (
        <section className="w-full bg-[#f4f4f4] py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="flex items-start mb-16">
                    <div className="w-3 h-full min-h-[80px] bg-[#0033ff] mr-6 shrink-0"></div>
                    <div>
                        <h2 className="text-4xl lg:text-6xl font-black text-[#0033ff] uppercase leading-none mb-4">
                            {t('home.community.title')}
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl font-medium">
                            {t('home.community.desc')}
                        </p>
                    </div>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Row 1 Left: Handshake Image */}
                    <div className="relative h-[300px] lg:h-[350px] bg-blue-900 overflow-hidden group">
                        <img
                            src={joinImg1}
                            alt="Handshake"
                            className="w-full h-full object-cover mix-blend-overlay opacity-80"
                        />
                        <div className="absolute inset-0 bg-blue-600/30 mix-blend-multiply"></div>

                        <div className="absolute bottom-6 left-6">
                            <span className="bg-black text-white text-xs font-bold px-4 py-2 rounded">Post Event</span>
                        </div>
                        <div className="absolute bottom-6 right-6 flex gap-2">
                            <button className="w-8 h-8 bg-black flex items-center justify-center rounded-full text-white hover:bg-gray-800 transition">
                                <ChevronLeft size={16} />
                            </button>
                            <button className="w-8 h-8 bg-black flex items-center justify-center rounded-full text-white hover:bg-gray-800 transition">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Row 1 Right: Text */}
                    <div className="flex items-center">
                        <p className="text-2xl lg:text-3xl font-medium text-gray-700 leading-snug">
                            {t('home.community.row1_text')}
                        </p>
                    </div>

                    {/* Row 2 Left: Online Sessions Image */}
                    <div className="relative h-[300px] lg:h-[350px] bg-gray-800 overflow-hidden">
                        <img
                            src={joinImg2}
                            alt="Online Session"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-y-0 right-0 w-3 bg-[#0033ff]"></div> {/* Blue right border accent */}

                        <div className="absolute top-10 left-10 max-w-xs">
                            <h3 className="text-white text-2xl font-bold uppercase leading-tight mb-8 drop-shadow-md">
                                {t('home.community.row2_title')}
                            </h3>
                            <button className="bg-white text-black px-4 py-2 rounded text-sm font-bold flex items-center hover:bg-gray-100 transition">
                                {t('home.community.row2_btn')} <ChevronRight size={14} className="ml-1" />
                            </button>
                        </div>
                    </div>

                    {/* Row 2 Right: Social Media Card */}
                    <div className="bg-white p-10 flex flex-col justify-center border-b-[6px] border-[#0033ff] shadow-sm h-full max-h-[350px]">
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            {t('home.community.row2_card_desc')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-white hover:bg-[#0033ff] transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-white hover:bg-[#0033ff] transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-white hover:bg-[#0033ff] transition-colors">
                                <Youtube size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Row 3 Left: Partners Image */}
                    <div className="relative h-[400px] lg:h-full min-h-[400px] bg-gray-300 overflow-hidden">
                        <img
                            src={joinImg3}
                            alt="Partners"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-y-0 right-0 w-3 bg-[#0033ff]"></div>
                    </div>

                    {/* Row 3 Right: United With Partners Info */}
                    <div className="flex flex-col justify-center py-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 uppercase mb-4">
                            {t('home.community.row3_title')}
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {t('home.community.row3_desc')}
                        </p>

                        <div className="flex gap-12 mb-10">
                            <div>
                                <div className="text-3xl font-bold text-gray-800">700,000+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">{t('home.community.partners')}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-800">$1,500,000</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">{t('home.community.commission')}</div>
                            </div>
                        </div>

                        <a
                            href="https://client.rubyfxtrade.com/register/trader"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#d33027] hover:bg-red-700 text-white px-8 py-3 rounded text-lg font-bold w-full lg:w-max transition-colors shadow-lg shadow-red-900/20 text-center"
                        >
                            {t('home.community.join_btn')}
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default JoinCommunitySection;
