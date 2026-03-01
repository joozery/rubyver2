import React from 'react';
import { useTranslation } from 'react-i18next';
import depositsBg from '../assets/desposits.jpg';
import DepositFeatureCard from './DepositFeatureCard';

const DepositsHero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative w-full bg-black min-h-[600px] lg:min-h-[799px] flex items-center pt-[100px] pb-8 lg:pb-0 overflow-hidden">
            {/* Background Image - only covers on desktop */}
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0">
                <img
                    src={depositsBg}
                    alt=""
                    className="w-full h-full object-cover object-right grayscale-[0.3] brightness-[0.7]"
                />
                {/* Gradient Masks */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                <div className="absolute inset-0 bg-green-600/10 mix-blend-color" />
            </div>

            <div className="max-w-[1240px] mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col justify-between h-full pt-6 lg:pt-20">
                <div className="w-full max-w-lg lg:max-w-4xl">
                    <h1 className="text-3xl lg:text-[61px] font-black uppercase leading-[1.1] mb-4 lg:mb-6 tracking-tighter">
                        <span className="text-[#00CC00]">{t('deposits_page.hero.title1')}</span> <span className="text-white">{t('deposits_page.hero.title_and')}</span> <br />
                        <span className="text-white">{t('deposits_page.hero.title2')}</span>
                    </h1>
                    <p className="text-white text-base lg:text-[36px] font-medium mb-6 lg:mb-8 leading-normal tracking-tight">
                        {t('deposits_page.hero.desc')}
                    </p>

                    <button className="bg-[#00CC00] hover:bg-[#00AA00] text-white font-medium w-full sm:w-[280px] lg:w-[336px] h-12 lg:h-[62px] flex items-center justify-center rounded-xl text-base lg:text-2xl transition-all shadow-lg shadow-green-900/20 mb-6 lg:mb-[43px]">
                        {t('deposits_page.hero.btn')}
                    </button>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 w-full mt-8 lg:mt-auto mb-4 lg:mb-12">
                    {[
                        t('deposits_page.hero.card1'),
                        t('deposits_page.hero.card2'),
                        t('deposits_page.hero.card3'),
                        t('deposits_page.hero.card4')
                    ].map((text, idx) => (
                        <DepositFeatureCard key={idx} text={text} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DepositsHero;
