import React from 'react';
import { useTranslation } from 'react-i18next';

const DepositStepsSection = () => {
    const { t } = useTranslation();
    const steps = t('steps.items', { returnObjects: true }) || [];

    return (
        <section className="bg-[#111111] py-20 px-6 lg:px-12 font-['Sukhumvit_Set',_sans-serif]">
            <div className="max-w-[1240px] mx-auto text-white">
                <h2 className="text-2xl lg:text-[40px] font-black uppercase mb-8 lg:mb-12">
                    {t('steps.title')}
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                    {/* Left: Steps List */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {Array.isArray(steps) && steps.map((step, idx) => (
                            <div
                                key={idx}
                                className="border border-white/20 rounded-lg p-8 bg-black/40 backdrop-blur-sm"
                            >
                                <span className="text-gray-400 text-lg mb-2 block">{step.number}</span>
                                <h3 className="text-xl font-black mb-3">{step.title}</h3>
                                <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
                            </div>
                        ))}
                    </div>

                    {/* Right: Phone Mockup - hidden on mobile */}
                    <div className="hidden lg:flex w-full lg:w-1/2 justify-center bg-white rounded-lg p-10 min-h-[500px] relative overflow-hidden">
                        {/* Fake Phone Frame using CSS */}
                        <div className="w-[280px] h-[580px] bg-[#333] rounded-[48px] border-[12px] border-black shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20" /> {/* Notch */}
                            <div className="absolute inset-0 bg-gray-200" /> {/* Screen content placeholder */}
                        </div>
                        {/* Accent side bar as seen in image */}
                        <div className="absolute right-0 top-0 w-4 h-full bg-[#00CC00]" />
                    </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="flex justify-center">
                    <button className="bg-[#FF0000] hover:bg-[#D40000] text-white font-black py-3 lg:py-4 px-10 lg:px-20 rounded-xl text-xl lg:text-3xl transition-all shadow-xl shadow-red-900/20 uppercase tracking-wide w-full sm:w-auto">
                        {t('steps.btn')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DepositStepsSection;
