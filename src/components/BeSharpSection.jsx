import React from 'react';
import { useTranslation } from 'react-i18next';
import besharpBg from '../assets/besharp.jpg';
import stayImg from '../assets/stay.jpg';
import sharoMobileBg from '../assets/moblie/sharp/sharo.jpg';
import { ChevronRight } from 'lucide-react';

const BeSharpSection = () => {
    const { t } = useTranslation();
    return (
        <section className="relative w-full h-auto bg-black overflow-hidden flex flex-col">
            {/* Background for Desktop & Mobile */}
            <div className="absolute inset-0 z-0">
                {/* Desktop Background */}
                <div
                    className="hidden lg:block absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${besharpBg})` }}
                />
                {/* Mobile Background */}
                <div
                    className="block lg:hidden absolute top-0 left-0 w-full h-[600px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${sharoMobileBg})` }}
                />

                {/* Dark Gradient Overlay for Desktop */}
                <div className="hidden lg:block absolute inset-0 bg-black/10"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col pt-8 lg:pt-12 pb-12 justify-between">

                {/* Top Section: Title & Cards */}
                <div className="w-full lg:ml-auto lg:w-fit mb-12 lg:mb-auto flex flex-col gap-6 lg:gap-10">

                    {/* Title */}
                    <div className="text-left w-full max-w-2xl mx-auto lg:mx-0 pt-4 lg:pt-0">
                        <h2 className="text-[32px] lg:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-tight whitespace-pre-line">
                            {t('home.besharp.title')}
                        </h2>
                        <p className="text-white text-base lg:text-lg max-w-md leading-relaxed mb-6">
                            {t('home.besharp.desc')}
                        </p>
                        <a
                            href="https://client.rubyfxtrade.com/register/trader"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-md font-bold text-sm lg:text-lg transition-all inline-flex items-center shadow-lg border border-white/10"
                        >
                            {t('home.besharp.btn')}
                        </a>
                    </div>

                    {/* Blue Cards Container */}
                    <div className="flex flex-col md:flex-row gap-5 mt-48 lg:mt-0">
                        {/* Card 1 */}
                        <div className="bg-[#0033ff] p-6 lg:p-8 text-white relative overflow-hidden group w-full md:w-1/2 lg:w-[412px] h-auto lg:h-[339px] flex flex-col justify-start rounded-none shrink-0 border border-white/10">
                            <div>
                                <h3 className="text-2xl lg:text-[28px] font-bold mb-3 leading-tight whitespace-pre-line">
                                    {t('home.besharp.card1_title')}
                                </h3>
                                <p className="text-[13px] lg:text-sm opacity-90 leading-relaxed mb-6">
                                    {t('home.besharp.card1_desc')}
                                </p>
                            </div>
                            <div className="flex flex-row md:flex-col gap-3 mt-auto">
                                <a
                                    href="https://client.rubyfxtrade.com/register/trader"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-[4px] text-[11px] lg:text-xs font-bold flex-1 md:w-max flex items-center justify-center uppercase tracking-wider"
                                >
                                    {t('home.besharp.card1_btn1')} <ChevronRight size={14} className="ml-1" />
                                </a>
                                <a
                                    href="https://client.rubyfxtrade.com/register/trader"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-[4px] text-[11px] lg:text-xs font-bold flex-1 md:w-max flex items-center justify-center uppercase tracking-wider"
                                >
                                    {t('home.besharp.card1_btn2')} <ChevronRight size={14} className="ml-1" />
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="relative overflow-hidden flex flex-col justify-start w-full md:w-1/2 lg:w-[412px] h-[339px] rounded-none shrink-0 border border-white/10 text-white p-6 lg:p-8"
                            style={{
                                backgroundImage: `url(${stayImg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                <h3 className="text-2xl lg:text-[28px] font-bold mb-3 leading-tight whitespace-pre-line">
                                    {t('home.besharp.card2_title')}
                                </h3>
                                <p className="text-[13px] lg:text-sm opacity-90 leading-relaxed mb-6">
                                    {t('home.besharp.card2_desc')}
                                </p>

                                <div className="mt-auto">
                                    <a
                                        href="https://client.rubyfxtrade.com/register/trader"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-black text-white px-6 py-3 rounded-[4px] text-xs font-bold w-max flex items-center uppercase tracking-wider relative z-10"
                                    >
                                        {t('home.besharp.card2_btn')} <ChevronRight size={14} className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Level Up Section - Bottom Full Width */}
                <div className="w-full mt-12 lg:mt-auto">
                    <h3 className="text-[28px] lg:text-4xl font-bold text-white mb-2 uppercase tracking-tight">
                        {t('home.besharp.level_title')}
                    </h3>
                    <p className="text-white/80 mb-8 lg:mb-6 text-sm lg:text-base leading-relaxed max-w-3xl">
                        {t('home.besharp.level_desc')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-3 lg:gap-4 w-full">
                        {[
                            t('home.besharp.level_item1'),
                            t('home.besharp.level_item2'),
                            t('home.besharp.level_item3'),
                            t('home.besharp.level_item4')
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href="https://client.rubyfxtrade.com/register/trader"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-6 rounded-md lg:rounded-lg flex-1 flex items-center justify-between transition-all text-base lg:text-lg shadow-lg whitespace-nowrap"
                            >
                                <span>{item}</span>
                                <ChevronRight size={18} className="text-black transition-colors stroke-[2.5]" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeSharpSection;
