import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import coinImg from '../assets/coin.png';
import rewardImg from '../assets/0deb11f29406614c13e56d973e6de513c9275dc1.png';

const PaymentMethodsSection = () => {
    const [activeTab, setActiveTab] = useState('deposit');

    const paymentMethods = [
        {
            title: "Visa, Mastercard, Maestro",
            logos: ["https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg", "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"],
            tags: [{ text: "NEW", color: "bg-red-500" }, { text: "NEED VERIFICATION", color: "bg-blue-100 text-blue-600" }],
            details: [
                { label: "Commission", value: "0%" },
                { label: "Avg. time", value: "Instantly" },
                { label: "Limits", value: "From 5 to 10,000 EUR" }
            ]
        },
        {
            title: "Sticpay",
            logoText: "STICPAY",
            logoColor: "text-orange-600",
            details: [
                { label: "Commission", value: "0%" },
                { label: "Avg. time", value: "Instantly" },
                { label: "Limits", value: "From 5 USD" }
            ]
        },
        {
            title: "Thai QR",
            logoText: "QR",
            logoIcon: "🇹🇭", // Placeholder for Thai QR icon
            tags: [{ text: "NEED VERIFICATION", color: "bg-blue-100 text-blue-600" }],
            details: [
                { label: "Commission", value: "0%" },
                { label: "Avg. time", value: "Instantly" },
                { label: "Limits", value: "From 350 to 2,000,000" }
            ]
        }
    ];

    const securityFeatures = [
        {
            title: "SEGREGATED ACCOUNTS",
            desc: "Client funds are maintained in insured Tier-1 banking institutions, entirely separate from company operating capital."
        },
        {
            title: "SECURE WITHDRAWALS",
            desc: "All withdrawals are protected through one-time password (OTP) verification procedures."
        },
        {
            title: "PCI DSS COMPLIANCE",
            desc: "We adhere to the Payment Card Industry Data Security Standard to minimize card-related risks and safeguard sensitive information."
        },
        {
            title: "3D SECURE PAYMENTS",
            desc: "An additional SMS authentication step ensures that only the authorized account holder can approve online card transactions."
        }
    ];

    return (
        <section className="bg-white py-16 px-6 lg:px-12 font-['Sukhumvit_Set',_sans-serif]">
            <div className="max-w-[1240px] mx-auto">

                {/* Header Part */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                    <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight">
                        <span className="text-[#00CC00]">200+</span> <span className="text-black">Payment methods</span>
                    </h2>

                    <div className="flex items-center gap-4">
                        <div className="flex bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setActiveTab('deposit')}
                                className={`px-6 py-2 rounded-lg text-lg font-bold transition-all ${activeTab === 'deposit' ? 'bg-black text-white' : 'text-gray-500'}`}
                            >
                                To deposit
                            </button>
                            <button
                                onClick={() => setActiveTab('withdraw')}
                                className={`px-6 py-2 rounded-lg text-lg font-bold transition-all ${activeTab === 'withdraw' ? 'bg-black text-white' : 'text-gray-500'}`}
                            >
                                To withdraw
                            </button>
                        </div>

                        <div className="relative group">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-2 bg-white text-lg font-bold min-w-[160px] justify-between">
                                Thailand
                                <ChevronDown size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Payment Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {paymentMethods.map((method, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-xl mb-2">{method.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {method.tags?.map((tag, tIdx) => (
                                            <span key={tIdx} className={`${tag.color} px-2 py-0.5 rounded text-[10px] font-bold`}>
                                                {tag.text}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2 h-8 items-center">
                                    {method.logos?.map((logo, lIdx) => (
                                        <img key={lIdx} src={logo} alt="" className="h-4 lg:h-5 object-contain" />
                                    ))}
                                    {method.logoText && (
                                        <span className={`font-black italic ${method.logoColor}`}>{method.logoText}</span>
                                    )}
                                    {method.logoIcon && <span className="text-2xl">{method.logoIcon}</span>}
                                </div>
                            </div>

                            <div className="space-y-1 mt-6">
                                {method.details.map((detail, dIdx) => (
                                    <div key={dIdx} className="flex text-sm">
                                        <span className="text-gray-400 w-24">{detail.label}</span>
                                        <span className="font-bold text-gray-800">{detail.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mb-16">
                    <button className="bg-[#34A853] hover:bg-[#2d9147] text-white font-bold py-3 px-16 rounded-xl text-2xl transition-all shadow-lg shadow-green-900/10">
                        Make deposit
                    </button>
                </div>

                {/* Bonus Banner */}
                <div className="border border-gray-300 rounded-lg p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between mb-24 gap-8">
                    <div className="flex-shrink-0">
                        <h2 className="text-4xl lg:text-[45px] font-[900] uppercase leading-[1.1]">
                            <span className="text-[#E31E24]">DOUBLE</span> <span className="text-black">YOUR FIRST</span><br />
                            <span className="text-black">DEPOSIT</span> <span className="text-[#E31E24]">TODAY</span>
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 flex-1 justify-center">
                        <img src={rewardImg} alt="Reward" className="w-28 lg:w-36 h-auto object-contain" />

                        <div className="max-w-sm">
                            <p className="text-black font-bold text-xl lg:text-2xl leading-tight mb-4">
                                Enjoy 100% bonus now, then up to 60% extra on every deposit over $100.
                            </p>
                            <button className="flex items-center justify-center gap-2 border border-gray-400 rounded px-8 py-2 hover:bg-black hover:text-white transition-all font-bold text-lg min-w-[200px]">
                                Go to bonus <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Funds Protected Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black uppercase mb-2">YOUR FUNDS ARE PROTECTED</h2>
                    <h3 className="text-3xl lg:text-4xl font-black uppercase text-[#E31E24]">WITH RUBY</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {securityFeatures.map((feature, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-xl p-8 bg-gray-50/30 flex flex-col items-start min-h-[300px]">
                            <div className="w-12 h-12 mb-8 flex items-center justify-center">
                                <img src={coinImg} alt="" className="w-12 h-12 object-contain" />
                            </div>
                            <h4 className="font-black text-xl mb-4 leading-tight uppercase">{feature.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="bg-[#34A853] hover:bg-[#2d9147] text-white font-bold py-3 px-16 rounded-xl text-2xl transition-all shadow-lg shadow-green-900/10">
                        Fund account
                    </button>
                </div>

            </div>
        </section>
    );
};

export default PaymentMethodsSection;
