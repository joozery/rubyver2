import React from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '../assets/Rectangle19.jpg';
import promotionHome from '../assets/promotionhome.jpg';
import aw12 from '../assets/aw12.png';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ForexPromotionsSection = () => {
    const { t } = useTranslation();
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
                                {t('home.promotions.title1')} <br />
                                <span className="text-[#ff0000]">{t('home.promotions.title2')}</span>
                            </h2>
                        </div>
                        <div className="text-right mt-6 lg:mt-0">
                            <h3 className="text-xl lg:text-2xl font-medium text-gray-200 whitespace-pre-line">
                                {t('home.promotions.subtitle')}
                            </h3>
                        </div>
                    </div>

                    {/* Promotions Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Large Featured Card (Left) */}
                        <div className="lg:col-span-6 relative h-[400px] lg:h-[500px] bg-gray-800 rounded-sm overflow-hidden group">
                            <img
                                src={promotionHome}
                                alt="Promotion Illustration"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold uppercase hover:bg-red-600 transition-colors">
                                    {t('home.promotions.learn_more')}
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
                                <h4 className="text-xl font-bold uppercase text-gray-500 mb-2">{t('home.promotions.promotion_label')}</h4>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Get the most out of your trading experience with our exclusive weekly promotions. Deposit, trade, and collect rewards as you grow.
                                </p>
                                <button className="bg-[#ff0000] text-white px-8 py-3 rounded-full text-sm font-bold uppercase w-max flex items-center gap-2 hover:bg-red-700 transition-colors">
                                    {t('home.promotions.join_event')} <ChevronRight size={16} />
                                </button>
                            </div>
                            {/* Card 2 */}
                            <div className="flex-1 bg-white/90 p-8 text-black flex flex-col justify-center rounded-sm">
                                <h4 className="text-xl font-bold uppercase text-gray-500 mb-2">{t('home.promotions.promotion_label')}</h4>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Explore unique opportunities designed to boost your potential. Stay informed about upcoming events and special offers through our platform.
                                </p>
                                <button className="bg-[#ff0000] text-white px-8 py-3 rounded-full text-sm font-bold uppercase w-max flex items-center gap-2 hover:bg-red-700 transition-colors">
                                    {t('home.promotions.join_event')} <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <a href="#" className="flex items-center gap-2 text-white font-bold hover:text-[#ff0000] transition-colors">
                            {t('home.promotions.more_promo')} <ChevronRight size={16} />
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
                                src={aw12}
                                alt="Stay Bold Illustration"
                                className="w-full h-full object-cover"
                            />
                            {/* Blue overlay tint at the bottom or graphic elements can go here */}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div>
                        <h2 className="text-5xl lg:text-7xl font-black uppercase leading-tight text-[#0033ff] mb-6 whitespace-pre-line">
                            {t('home.promotions.stay_bold')}
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
                            {t('home.promotions.stay_bold_desc')}
                        </p>

                        <button className="bg-[#ff0000] hover:bg-red-700 text-white px-10 py-4 rounded text-xl font-bold mb-12 shadow-lg shadow-red-900/40 transition-all">
                            {t('home.promotions.btn_confidence')}
                        </button>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Info Box 1 */}
                            <div className="bg-white p-6 rounded text-black h-full flex flex-col justify-between">
                                <div>
                                    <h5 className="font-bold text-lg mb-2">{t('home.promotions.box1_title')}</h5>
                                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                        {t('home.promotions.box1_desc')}
                                    </p>
                                </div>
                                <div className="text-[#0033ff] font-serif font-bold text-xl">IFSC</div>
                            </div>

                            {/* Info Box 2 */}
                            <div className="bg-white p-6 rounded text-black h-full flex flex-col justify-between">
                                <div>
                                    <h5 className="font-bold text-lg mb-2">{t('home.promotions.box2_title')}</h5>
                                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                        {t('home.promotions.box2_desc')}
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
                                    <h5 className="font-bold text-lg mb-1">{t('home.promotions.box3_title')}</h5>
                                    <p className="text-xs text-gray-600">
                                        {t('home.promotions.box3_desc')}
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
