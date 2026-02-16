import React from 'react';
import { Zap, Shield, BarChart3, Globe2 } from 'lucide-react';

const MT5WhyRuby = () => {
    const reasons = [
        {
            icon: <Zap className="text-[#ff0000]" size={40} />,
            title: "ULTRA-FAST EXECUTION",
            desc: "Experience lightning-fast order execution with minimal slippage on our high-performance infrastructure."
        },
        {
            icon: <Shield className="text-[#ff0000]" size={40} />,
            title: "SECURE & REGULATED",
            desc: "Your funds are protected with segregated accounts and industry-leading security protocols."
        },
        {
            icon: <BarChart3 className="text-[#ff0000]" size={40} />,
            title: "RAW SPREADS",
            desc: "Get the best market pricing with raw spreads starting from 0.0 pips on major pairs."
        },
        {
            icon: <Globe2 className="text-[#ff0000]" size={40} />,
            title: "24/7 SUPPORT",
            desc: "Our expert support team is available around the clock to assist you with any platform-related queries."
        }
    ];

    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-[32px] lg:text-[54px] font-black uppercase leading-[1.1] mb-8 tracking-tight text-black">
                            WHY TRADE <br />
                            <span className="text-[#ff0000]">MT5 WITH RUBY?</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10">
                            We combine the powerful MetaTrader 5 technology with our premium trading conditions to give you the ultimate edge in the markets.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#ff0000] text-white px-10 py-4 rounded-xl font-bold uppercase transition-all hover:bg-red-700 shadow-xl shadow-red-500/20">
                                Create Account
                            </button>
                            <button className="bg-transparent border-2 border-black text-black px-10 py-4 rounded-xl font-bold uppercase transition-all hover:bg-black hover:text-white">
                                View Accounts
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {reasons.map((item, index) => (
                            <div key={index} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-black uppercase mb-3 text-black leading-tight">{item.title}</h3>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MT5WhyRuby;
