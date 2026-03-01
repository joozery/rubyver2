import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
// Using the specified background image
import crystalBg from '../assets/condition.jpg';

const UnlockPotentialSection = () => {
    const { t } = useTranslation();
    const conditions = t('unlock_potential.items', { returnObjects: true }) || [];

    return (
        <section className="bg-black py-24 px-6 lg:px-12 relative overflow-hidden font-['Sukhumvit_Set',_sans-serif] min-h-[600px] flex items-center">
            {/* Background Image - Exactly as design */}
            <div className="absolute inset-0 z-0">
                <div className="absolute left-0 bottom-0 w-full lg:w-[60%] h-full">
                    <img
                        src={crystalBg}
                        alt=""
                        className="w-full h-full object-cover object-left-bottom opacity-90"
                    />
                    {/* Dark gradient to blend with black background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-black" />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black" />
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto relative z-10 w-full flex flex-col lg:flex-row gap-12 lg:gap-24">

                {/* Left Side: Headline & Subtext */}
                <div className="lg:w-[45%]">
                    <h2 className="text-4xl lg:text-[48px] font-black uppercase text-white leading-[1.1] mb-10 tracking-tight">
                        {t('unlock_potential.title1')} <br />
                        {t('unlock_potential.title2')}
                    </h2>

                    <div className="space-y-1 text-white text-lg lg:text-[22px] font-normal max-w-sm leading-snug">
                        <p>{t('unlock_potential.desc1')}</p>
                        <p>{t('unlock_potential.desc2')}</p>
                        <p>{t('unlock_potential.desc3')}</p>
                    </div>
                </div>

                {/* Right Side: Conditions Data */}
                <div className="lg:w-[55%] pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {Array.isArray(conditions) && conditions.map((item, idx) => (
                            <div key={idx} className="space-y-1.5 border-none">
                                <h4 className="text-white/70 font-normal text-lg lg:text-xl">
                                    {item.label}
                                </h4>
                                <p className="text-white font-black text-xl lg:text-[22px] leading-tight">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14">
                        <a
                            href="https://client.rubyfxtrade.com/register/trader"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 border border-gray-400 rounded-lg px-8 py-2.5 text-white font-medium hover:bg-white/10 transition-all text-lg group w-max"
                        >
                            {t('unlock_potential.btn')}
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UnlockPotentialSection;
