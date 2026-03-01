import React from 'react';
import { useTranslation } from 'react-i18next';
import bannerApp from '../assets/bannerapp.jpg';

const RubyAppHero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative w-full min-h-[500px] lg:h-[600px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bannerApp}
                    alt="Ruby App Banner"
                    className="w-full h-full object-cover object-[65%_top] lg:object-center"
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Wrap in a container that strictly limits width on mobile */}
                <div className="lg:w-1/2 text-white max-w-[250px] sm:max-w-[280px] md:max-w-none pt-10 sm:pt-0">
                    <h1 className="text-3xl sm:text-3xl md:text-[40px] lg:text-[64px] font-black leading-[1.3] lg:leading-[1.2] mb-4 sm:mb-6 tracking-tight uppercase">
                        {t('ruby_app.hero.title1')}<br />
                        {t('ruby_app.hero.title2')}<br />
                        {t('ruby_app.hero.title3')}
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl max-w-[230px] sm:max-w-xs md:max-w-xl mb-6 sm:mb-10 opacity-90 font-medium leading-relaxed">
                        {t('ruby_app.hero.desc')}
                    </p>
                    <button className="bg-white text-[#0047FF] hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-full font-bold text-sm lg:text-lg transition-all active:scale-[0.98] shadow-xl shadow-blue-900/20 uppercase whitespace-nowrap">
                        {t('ruby_app.hero.btn')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RubyAppHero;
