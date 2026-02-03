import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Send, MessageCircle, Play, Plus, Minus } from 'lucide-react';

const TradingFooter = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What instruments can I trade with RUBY?",
            answer: "You can trade over 550+ CFD instruments including Forex, Metals, Indices, and Energies."
        },
        {
            question: "What are RUBY market trading hours?",
            answer: "Trading hours vary by market. Generally, Forex is available 24/5 from Monday to Friday."
        },
        {
            question: "What spreads are available?",
            answer: "We offer tight floating spreads starting from as low as 0.7 pips."
        },
        {
            question: "What are the leverage and margin rules?",
            answer: "We provide flexible leverage up to 1:3000. Margin call is at 40% and Stop out is at 20%."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <footer className="bg-[#f2f2f2] text-[#444444] pt-20 pb-16 px-6 lg:px-12 border-t border-gray-200">
            <div className="container mx-auto">

                {/* Top Section: FAQ */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl lg:text-5xl font-black uppercase leading-none">
                            <span className="text-[#ff0000]">NEED MORE</span> <br />
                            <span className="text-black">INFORMATION?</span>
                        </h2>
                    </div>
                    <div className="lg:w-2/3 border-t border-gray-300">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-300">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center py-6 text-left hover:text-black transition-colors"
                                >
                                    <span className="text-lg lg:text-xl font-bold text-black">{faq.question}</span>
                                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                </button>
                                {openIndex === index && (
                                    <div className="pb-6 text-gray-600 animate-fadeIn">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle Section: Social & App Stores */}
                <div className="pt-12 pb-12 border-t border-gray-300">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

                        <div className="flex flex-col md:flex-row gap-8 w-full lg:w-auto">
                            {/* Social Media 1 */}
                            <div className="flex flex-col gap-3">
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">RUBY ad social media</span>
                                <div className="flex gap-2">
                                    {[Facebook, Instagram, Youtube, Send].map((Icon, idx) => (
                                        <a key={idx} href="#" className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
                                            <Icon size={16} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Social Media 2 */}
                            <div className="flex flex-col gap-3">
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">RUBY ad social media</span>
                                <div className="flex gap-2">
                                    {[MessageCircle, Send, MessageCircle].map((Icon, idx) => (
                                        <a key={idx} href="#" className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
                                            <Icon size={16} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* App Store Buttons */}
                        <div className="flex flex-wrap gap-3">
                            {/* Google Play */}
                            <a href="#" className="flex items-center gap-3 border border-gray-400 rounded-lg px-4 py-2 hover:bg-gray-100 transition-all min-w-[160px] bg-white">
                                <Play className="text-black fill-black" size={24} />
                                <div className="flex flex-col">
                                    <span className="text-[9px] text-gray-500 leading-none uppercase">Get it on the</span>
                                    <span className="text-sm text-black font-bold leading-tight">Google Play</span>
                                </div>
                            </a>

                            {/* Apple MT4 */}
                            <a href="#" className="flex items-center gap-3 border border-gray-400 rounded-lg px-4 py-2 hover:bg-gray-100 transition-all min-w-[160px] bg-white">
                                <div className="text-black">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.3-.79-1.53 0-2 .76-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] text-gray-500 leading-none uppercase">Get MT4 on the</span>
                                    <span className="text-sm text-black font-bold leading-tight">App Store</span>
                                </div>
                            </a>

                            {/* Apple MT5 */}
                            <a href="#" className="flex items-center gap-3 border border-gray-400 rounded-lg px-4 py-2 hover:bg-gray-100 transition-all min-w-[160px] bg-white">
                                <div className="text-black">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.3-.79-1.53 0-2 .76-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] text-gray-500 leading-none uppercase">Get MT5 on the</span>
                                    <span className="text-sm text-black font-bold leading-tight">App Store</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Legal Content */}
                <div className="pt-12 border-t border-gray-300 space-y-6 text-sm leading-relaxed text-gray-600">
                    <p>
                        RUBYFX GLOBAL LIMITED is a private limited company registered in England and Wales under company number 16723963.
                        RUBYFX GLOBAL LIMITED operates the Ruby FX brand and manages its online services through:
                        <a href="https://www.rubyfxtrade.com" className="hover:text-black ml-1 font-medium underline">www.rubyfxtrade.com</a>
                    </p>

                    <p>
                        RUBYFX GLOBAL LIMITED is authorized by the Financial Sector Conduct Authority (FSCA) in South Africa as a Financial Service Provider FSP : 1234567890. RUBYFX GLOBAL LIMITED Operates under
                        <a href="https://www.rubyfxtrade.com" className="hover:text-black ml-1 font-medium underline">www.rubyfxtrade.com</a>
                    </p>

                    <div className="pt-4">
                        <h4 className="font-bold text-black mb-2">Important Notice</h4>
                        <p>
                            RUBYFX GLOBAL LIMITED is registered as a private limited company under the laws of England and Wales.
                            This registration confirms the company's legal establishment; however, it does not constitute authorization or licensing from any financial regulatory authority in the United Kingdom, including the Financial Conduct Authority (FCA).
                            Clients should carefully review all regulatory information and risk disclosures provided by Ruby FX before engaging in financial or trading activities. Trading leveraged financial products involves a high level of risk and may not be suitable for all investors.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default TradingFooter;
