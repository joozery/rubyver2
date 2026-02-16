import React from 'react';
import { Monitor, Apple, Globe, Play, Smartphone, Laptop } from 'lucide-react';
import gemMeta from '../assets/FEATURES/gemmeta.png';

const MT5Download = () => {
    const platforms = [
        {
            name: "MT5 for Windows",
            buttonText: "Download",
            subText: "for Windows",
            icon: <Monitor size={24} />,
            link: "#"
        },
        {
            name: "MT5 for Android",
            buttonText: "Get it on the",
            subText: "Google Play",
            icon: <Play size={24} fill="currentColor" />,
            link: "#"
        },
        {
            name: "MT5 for MacOS",
            buttonText: "Download",
            subText: "for macOS",
            icon: <Apple size={24} fill="currentColor" />,
            link: "#"
        },
        {
            name: "MT5 for iOS",
            buttonText: "Get MT5 on the",
            subText: "App Store",
            icon: <Apple size={24} fill="currentColor" />,
            link: "#"
        },
        {
            name: "WebTrader",
            buttonText: "Download",
            subText: "for macOS",
            icon: <Globe size={24} />,
            link: "#"
        },
        {
            name: "WebTrader for Demo",
            buttonText: "Launch",
            subText: "",
            icon: <Globe size={24} />,
            link: "#"
        }
    ];

    return (
        <section className="bg-[#111111] py-16 relative overflow-hidden">
            {/* Background Decorative Gem */}
            <div className="absolute top-[-600px] right-[-100px] w-[1800px] h-[1400px] pointer-events-none z-0">
                <img
                    src={gemMeta}
                    alt="Decorative Ruby"
                    className="w-full h-full object-contain rotate-12"
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-7xl mx-auto mb-10">
                    <h2 className="text-[32px] lg:text-[48px] font-black uppercase text-[#D32F2F] leading-tight tracking-tight">
                        DOWNLOAD
                    </h2>
                    <h2 className="text-[40px] lg:text-[64px] font-black uppercase text-white leading-tight tracking-tight">
                        METATRADER 5
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-7xl mx-auto">
                    {platforms.map((platform, index) => (
                        <div key={index} className="bg-transparent border border-[#222222] p-6 flex items-center justify-between rounded-[24px] group hover:border-[#444444] transition-all">
                            <span className="text-white text-[20px] lg:text-[24px] font-bold">{platform.name}</span>

                            <a
                                href={platform.link}
                                className="flex items-center gap-4 bg-transparent border border-[#333333] rounded-[12px] px-6 py-3 min-w-[210px] hover:bg-white hover:text-black transition-all group/btn"
                            >
                                <div className="shrink-0 text-white group-hover/btn:text-black">
                                    {platform.icon}
                                </div>
                                <div className="flex flex-col text-left text-white group-hover/btn:text-black transition-colors">
                                    <span className="text-[10px] uppercase font-black tracking-wider leading-none opacity-80">
                                        {platform.buttonText}
                                    </span>
                                    <span className="text-[16px] font-black leading-tight">
                                        {platform.subText || platform.buttonText}
                                    </span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MT5Download;
