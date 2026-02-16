import React from 'react';
import iconLicensed from '../assets/forex/iconforex/LICENSED.svg';
import iconCfd from '../assets/forex/iconforex/CFD.svg';
import iconTrading from '../assets/forex/iconforex/TRADING.svg';
import icon200 from '../assets/forex/iconforex/200+.svg';
import icon247 from '../assets/forex/iconforex/24:7.svg';
import iconAwards from '../assets/forex/iconforex/AWARDS.svg';

const ForexWhyTrade = () => {
    const reasons = [
        {
            icon: iconLicensed,
            title: "LICENSED FOREX BROKER",
            desc: "We operate under FSC (Belize) license and comply with international financial regulations, ensuring secure and legal trading."
        },
        {
            icon: iconCfd,
            title: "70+ CFD FOREX ASSETS",
            desc: "Get access to global currency markets, tight spreads, and fast execution for all your trading needs."
        },
        {
            icon: iconTrading,
            title: "TRADING TUTORIALS",
            desc: "Explore RUBY trading courses, tailored by market experts for traders at any level."
        },
        {
            icon: icon200,
            title: "200+ PAYMENT METHODS",
            desc: "We continuously introduce new local and global methods to deposit and withdraw."
        },
        {
            icon: icon247,
            title: "24/7 SUPPORT",
            desc: "Get a reply in less than a minute or schedule a callback."
        },
        {
            icon: iconAwards,
            title: "100+ AWARDS",
            desc: "Our trophies showcase the trust we've earned from the global trading community."
        }
    ];

    return (
        <section className="bg-black py-24">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[32px] lg:text-[64px] font-black uppercase tracking-tight leading-none">
                        <span className="text-white">WHY TRADE FOREX</span> <br />
                        <span className="text-[#FF0000]">WITH RUBY?</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] border border-white/10 p-10 flex flex-col gap-6 hover:bg-[#222222] transition-all group"
                        >
                            <div className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity w-12 h-12 flex items-center">
                                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold uppercase mb-3 tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-[15px] leading-relaxed font-medium">
                                    {item.desc.split('RUBY').map((part, i, arr) => (
                                        <React.Fragment key={i}>
                                            {part}
                                            {i < arr.length - 1 && <span className="text-[#FF0000]">RUBY</span>}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForexWhyTrade;
