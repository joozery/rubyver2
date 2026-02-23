import React from 'react';
import { useTranslation } from 'react-i18next';
import infrastructureBg from '../assets/4a1007b2a1c3eb4c012e5b4830cb3897f8e88ddc.jpg';

const InfrastructureSection = () => {
    const { t } = useTranslation();
    return (
        <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-[center_top] lg:bg-center"
                style={{
                    backgroundImage: `url(${infrastructureBg})`,
                    filter: 'brightness(0.7)'
                }}
            />

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center">
                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight max-w-5xl leading-tight mb-10 drop-shadow-lg whitespace-pre-line">
                    {t('home.infrastructure.title')}
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a
                        href="https://client.rubyfxtrade.com/register/trader"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#ff0000] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-xl text-center"
                    >
                        {t('home.infrastructure.open_live')}
                    </a>
                    <a
                        href="https://client.rubyfxtrade.com/register/trader"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-xl text-center"
                    >
                        {t('home.infrastructure.open_demo')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InfrastructureSection;
