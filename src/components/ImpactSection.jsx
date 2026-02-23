import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import img1 from '../assets/MAKE/1.jpg';
import img2 from '../assets/MAKE/2.jpg';
import img3 from '../assets/MAKE/3.jpg';

const ImpactSection = () => {
    const { t } = useTranslation();
    return (
        <section className="w-full bg-[#f4f4f4] pt-16 pb-24">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-5xl lg:text-6xl font-black uppercase leading-none text-black">
                            {t('home.impact.title1')} <br />
                            <span className="text-[#ff0000]">{t('home.impact.title2')}</span>
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl ml-auto">
                            {t('home.impact.desc')}
                        </p>
                    </div>
                </div>

                {/* Large Banner Image */}
                <div className="w-full h-[300px] lg:h-[500px] rounded-lg overflow-hidden mb-16 relative">
                    {/* Placeholder for the main charity image (man and girl) */}
                    <img
                        src={img1}
                        alt="Ruby Community Impact"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Divider with Button */}
                <div className="relative border-t border-gray-300 mb-16">
                    <div className="absolute top-0 right-0 -mt-5 bg-gray-700 hover:bg-black text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-colors">
                        <ChevronRight size={20} />
                    </div>
                </div>

                {/* Sub-Header */}
                <h3 className="text-2xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
                    {t('home.impact.sub_title')}
                </h3>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">

                    {/* Left Card */}
                    <div className="flex flex-col">
                        <div className="relative h-[250px] lg:h-[300px] rounded-lg overflow-hidden mb-6">
                            <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded shadow-sm z-10">
                                {t('home.impact.thailand')}
                            </span>
                            <img
                                src={img2}
                                alt="Charity Event Thailand"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                            {t('home.impact.card1_desc')}
                        </p>
                    </div>

                    {/* Right Card */}
                    <div className="flex flex-col">
                        <div className="relative h-[250px] lg:h-[300px] rounded-lg overflow-hidden mb-6">
                            <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded shadow-sm z-10">
                                {t('home.impact.thailand')}
                            </span>
                            <img
                                src={img3}
                                alt="Donation Supplies"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                            {t('home.impact.card2_desc')}
                        </p>
                    </div>
                </div>

                {/* Bottom Button */}
                <div className="flex justify-center">
                    <button className="bg-[#ff0000] hover:bg-red-700 text-white font-bold py-4 px-12 rounded shadow-lg shadow-red-900/20 text-xl transition-all">
                        {t('home.community.join_btn')}
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ImpactSection;
