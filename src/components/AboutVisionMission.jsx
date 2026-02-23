import React from 'react';
import katingImg from '../assets/about/kating.png';
import bareImg from '../assets/about/bare.png';

const AboutVisionMission = () => {
    return (
        <section className="bg-[#0E0E0E] py-12 px-6 lg:px-16">
            <div className="container mx-auto space-y-6">

                {/* OUR VISION Card */}
                <div className="border border-white/15 rounded-2xl p-10 flex flex-col sm:flex-row items-center gap-10 min-h-[280px]">
                    {/* Image left */}
                    <div className="shrink-0 w-[430px] h-[390px]">
                        <img src={katingImg} alt="Our Vision" className="w-full h-full object-contain" />
                    </div>

                    {/* Text right */}
                    <div className="flex-1">
                        <h2 className="text-white font-black text-3xl lg:text-[40px] uppercase mb-5">
                            OUR VISION
                        </h2>
                        <p className="text-white/70 text-base lg:text-[18px] leading-relaxed mb-4">
                            We recognize the real challenges that traders encounter from navigating volatility to managing information overload. Not everyone can withstand the emotional highs and lows of the market.
                        </p>
                        <p className="text-white/70 text-base lg:text-[18px] leading-relaxed">
                            We believe trading is more than a path to financial independence, it is a long-term journey of personal development. Through learning, reflection, and experience, traders can progress toward the results they aspire to. Our role is to support them every step of the way.
                        </p>
                    </div>
                </div>

                {/* OUR MISSION Card */}
                <div className="border border-white/15 rounded-2xl p-10 flex flex-col sm:flex-row items-center gap-10 min-h-[280px]">
                    {/* Text left */}
                    <div className="flex-1">
                        <h2 className="text-white font-black text-3xl lg:text-[40px] uppercase mb-5">
                            OUR MISSION
                        </h2>
                        <p className="text-white/70 text-base lg:text-[18px] leading-relaxed mb-4">
                            At RUBY, we are dedicated to delivering a trading environment that is seamless, reliable, and rewarding. Our goal is to encourage you to begin your trading journey and to stay committed as you grow.
                        </p>
                        <p className="text-white/70 text-base lg:text-[18px] leading-relaxed">
                            With premium conditions, advanced trading tools, and a strong community, RUBY is more than just a broker , we are a partner and mentor, helping you build confidence and achieve lasting growth in both trading and life.
                        </p>
                    </div>

                    {/* Image right */}
                    <div className="shrink-0 w-[430px] h-[390px]">
                        <img src={bareImg} alt="Our Mission" className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* JOIN RUBY Button */}
                <div className="flex justify-center pt-6">
                    <a
                        href="https://client.rubyfxtrade.com/register/trader"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white font-black text-sm uppercase tracking-widest w-[240px] py-4 rounded-lg transition-colors flex items-center justify-center text-center"
                    >
                        JOIN RUBY
                    </a>
                </div>

            </div>
        </section>
    );
};

export default AboutVisionMission;
