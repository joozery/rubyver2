import React from 'react';
import { useTranslation } from 'react-i18next';
import { CandlestickChart, MessageCircle, ShieldCheck, Percent } from 'lucide-react';

const RubyAppEverything = () => {
    const { t } = useTranslation();
    const everythingItems = t('ruby_app.everything.items', { returnObjects: true }) || [];

    const features = [
        {
            icon: <CandlestickChart className="text-[#0047FF]" size={40} />,
            title: everythingItems[0]?.title || "ACCURATE CHARTS",
            description: <>{everythingItems[0]?.desc} <span className="text-[#D32F2F]">TradingView.</span></>
        },
        {
            icon: <MessageCircle className="text-[#0047FF]" size={40} />,
            title: everythingItems[1]?.title || "24/7 SUPPORT",
            description: everythingItems[1]?.desc || "Get a reply in under a minute, right in the app."
        },
        {
            icon: <ShieldCheck className="text-[#0047FF]" size={40} />,
            title: everythingItems[2]?.title || "DATA SECURITY",
            description: everythingItems[2]?.desc || "Stay protected from hacking and data theft."
        },
        {
            icon: <Percent className="text-[#0047FF]" size={40} />,
            title: everythingItems[3]?.title || "RUBY UPDATES",
            description: everythingItems[3]?.desc || "Receive trading insights, promotions, and transaction notifications on the go."
        }
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[36px] lg:text-[64px] font-black uppercase leading-[1.1] tracking-tight mb-2">
                        {t('ruby_app.everything.title1')}
                    </h2>
                    <h2 className="text-[32px] lg:text-[54px] font-black uppercase text-[#D32F2F] tracking-tight">
                        {t('ruby_app.everything.title2')}
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-[#f2f2f2] border border-gray-200 rounded-lg p-8 flex items-start gap-6 hover:shadow-md transition-shadow">
                            <div className="shrink-0">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="font-black text-xl mb-2 tracking-tight uppercase">{feature.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Download Button */}
                <div className="flex justify-center">
                    <button className="bg-[#ff0000] hover:bg-red-700 text-white px-12 py-5 rounded-xl font-bold text-xl uppercase transition-all active:scale-[0.98] shadow-lg shadow-red-500/20">
                        {t('ruby_app.everything.btn')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RubyAppEverything;
