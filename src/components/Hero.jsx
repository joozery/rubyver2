import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import heroBg1 from '../assets/herosection/backgorund.jpeg';
import heroBg2 from '../assets/herosection/Banner-home-Top2.jpg';
import heroBg3 from '../assets/herosection/Banner-home-Top-3.jpg';

import heroMobile1 from '../assets/moblie/herosection/m1.jpg';
import heroMobile2 from '../assets/moblie/herosection/m2.jpg';
import heroMobile3 from '../assets/moblie/herosection/m3.jpg';

const Hero = () => {
    const { t } = useTranslation();
    const images = [
        { desktop: heroBg1, mobile: heroMobile1 },
        { desktop: heroBg2, mobile: heroMobile2 },
        { desktop: heroBg3, mobile: heroMobile3 }
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative h-[720px] md:h-[587px] w-full flex items-center pt-[81px] overflow-hidden bg-white">
            {/* 
              Background Image Slider
            */}
            <div className="absolute inset-0 z-0 flex justify-end">
                {images.map((pair, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Desktop Image */}
                        <img
                            src={pair.desktop}
                            alt={`Trading Background ${index + 1}`}
                            className="hidden md:block w-full h-full object-cover object-center"
                        />
                        {/* Mobile Image */}
                        <img
                            src={pair.mobile}
                            alt={`Trading Background Mobile ${index + 1}`}
                            className="block md:hidden w-full h-full object-cover object-center"
                        />
                    </div>
                ))}
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-start md:items-center h-full">
                <div className="lg:w-1/2 pt-16 lg:pt-0">
                    <h1 className="flex flex-col mb-4">
                        <span className="text-[36px] lg:text-[75px] font-black leading-[1] text-[#E31E24] tracking-tight uppercase">
                            {t('home.hero.title_1')}
                        </span>
                        <span className="text-[36px] lg:text-[75px] font-black leading-[1] text-[#E31E24] tracking-tight uppercase">
                            {t('home.hero.title_2')}
                        </span>
                        <span className="text-[28px] lg:text-[52px] font-medium mt-2 tracking-tight uppercase text-[#666666]">
                            {t('home.hero.subtitle')}
                        </span>
                    </h1>

                    <p className="text-base lg:text-lg max-w-xl mb-8 leading-snug font-medium text-[#666666]">
                        {t('home.hero.desc')}
                    </p>

                    <div className="flex flex-col gap-3 w-full sm:w-auto">
                        <a
                            href="https://client.rubyfxtrade.com/register/trader"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#d33027] hover:bg-red-700 text-white px-10 py-3 rounded-md font-bold text-lg transition-all active:scale-[0.98] shadow-lg shadow-red-900/20 w-max text-center"
                        >
                            {t('home.hero.open_live')}
                        </a>
                        <a
                            href="https://client.rubyfxtrade.com/register/trader"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-gray-50 text-gray-500 px-10 py-3 rounded-md font-medium text-lg border border-[#d33027] transition-all active:scale-[0.98] w-max text-center"
                        >
                            {t('home.hero.open_demo')}
                        </a>
                    </div>
                </div>

                {/* Right side focus for the image */}
                <div className="lg:w-1/2 h-full"></div>
            </div>
        </section>
    );
};

export default Hero;
