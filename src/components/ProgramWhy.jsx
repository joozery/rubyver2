import React from 'react';
import bannerImg from '../assets/program/banner.png';

const cards = [
    {
        title: "Competitive Commission Rates",
        desc: "Receive a share of the spread generated from your clients' activity, credited to your Partner account every day with full transparency."
    },
    {
        title: "Professional Education Suite",
        desc: "Offer refined training experiences and exclusive knowledge sessions supported by RUBY's distinguished educational platform. Elevate your professional stature and align your reputation with a brand renowned for its global excellence and unwavering trust."
    },
    {
        title: "Sustainable Client Partnerships",
        desc: "Develop long-term client relationships with the support of a regulated and internationally recognized brokerage."
    },
    {
        title: (
            <>
                Withdrawal Methods<br />Always Accessible
            </>
        ),
        desc: "Access a wide range of local and global payout solutions with fast, automated processing designed for your convenience."
    },
    {
        title: (
            <>
                Global Partnership<br />Network
            </>
        ),
        desc: "Join a global network of partners committed to expanding high-quality, accessible trading experiences with RUBY."
    },
    {
        title: (
            <>
                Internationally<br />Award-Winning
            </>
        ),
        desc: "Benefit from the confidence and recognition earned from traders and industry experts across the world."
    }
];

const ProgramWhy = () => {
    return (
        <section className="bg-gradient-to-b from-[#FFCE68] to-[#FFBB74] pt-20 pb-0 flex flex-col items-center relative z-10">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px]">
                <h2 className="text-center font-black text-[32px] md:text-[46px] uppercase tracking-wide mb-14 drop-shadow-sm">
                    <span className="text-white">WHY PARTNER </span>
                    <span className="text-[#f13a04]">WITH RUBY</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="border border-white/60 bg-gradient-to-br from-[#FED76E] to-[#FF6D28] rounded-2xl p-8 flex flex-col justify-between shadow-sm transition-transform hover:-translate-y-1">
                            <h3 className="text-white font-medium text-[20px] lg:text-[22px] leading-snug mb-16">
                                {card.title}
                            </h3>
                            <p className="text-white text-[14px] lg:text-[15px] leading-relaxed mt-auto font-light">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Become Partner Section */}
                <div className="mt-16 flex flex-col items-center">
                    <button className="bg-[#f13a04] hover:bg-red-600 text-white font-bold text-[18px] lg:text-[20px] px-12 py-3 md:py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 mb-8 w-full md:w-auto relative z-20">
                        Become Partner
                    </button>
                </div>
            </div>

            {/* Banner Image */}
            <div className="w-full relative flex justify-center mt-[-40px] md:mt-[-80px] lg:mt-[-120px] z-0">
                {/* Gradient blend for seamless transition */}
                <div className="absolute top-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-b from-[#FFBB74] via-[#FFBB74]/60 to-transparent z-20 pointer-events-none"></div>
                <img
                    src={bannerImg}
                    alt="Ruby Partnership Banner"
                    className="w-full max-w-none object-cover block pointer-events-none select-none relative z-10"
                />
            </div>
        </section>
    );
};

export default ProgramWhy;
