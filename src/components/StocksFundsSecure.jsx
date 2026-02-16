import React from 'react';
import coinImg from '../assets/coin.png';

const StocksFundsSecure = () => {
    const features = [
        { title: "NEGATIVE BALANCE PROTECTION", desc: "With margin call and stop out, you will never go negative. Your funds are always protected." },
        { title: "DATA SECURITY", desc: "We provide segregated accounts, SSL certification, and more." },
        { title: "SECURE WITHDRAWALS", desc: "Your withdrawals are protected by one-time password verification methods." },
        { title: "SEGREGATED ACCOUNTS", desc: "We keep your funds safe in insured accounts at multiple top-ranking banks, separate from company balances." }
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] lg:text-[48px] font-black uppercase text-black tracking-tight flex items-center justify-center gap-3">
                        YOUR FUNDS ARE <span className="text-[#10b981]">SECURE</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {features.map((item, index) => (
                        <div key={index} className="bg-[#f2f2f2] border border-gray-300 px-8 py-10 flex gap-6 items-start rounded-none shadow-sm h-full">
                            <div className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
                                <img src={coinImg} alt="Coin" className="w-full h-full object-contain opacity-80" />
                            </div>
                            <div>
                                <h3 className="text-black text-[17px] font-black uppercase mb-2 tracking-tight">{item.title}</h3>
                                <p className="text-gray-700 text-[14px] font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <button className="bg-[#10b981] text-white px-16 py-4 rounded-md font-bold text-lg hover:bg-[#059669] transition-all uppercase shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Start trading
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StocksFundsSecure;
