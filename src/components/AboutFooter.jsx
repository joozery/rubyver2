import React from 'react';
import { Facebook, Instagram, Youtube, Send, MessageCircle, MessageSquare } from 'lucide-react';

const AboutFooter = () => {
    return (
        <footer className="bg-[#111111] text-white pt-16 pb-20 px-6 lg:px-12 border-t border-white/5">
            <div className="container mx-auto">
                <div className="border-t border-[#333] pt-10">
                    {/* Top Row: Social + App Links */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12">

                        {/* Social Media Columns */}
                        <div className="flex flex-col sm:flex-row gap-16">
                            {/* Column 1 */}
                            <div>
                                <h4 className="text-white text-[13px] font-medium mb-3">RUBY ad social media</h4>
                                <div className="flex items-center gap-2.5">
                                    <a href="#" className="w-[38px] h-[38px] rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>
                                    </a>
                                    <a href="#" className="w-[38px] h-[38px] rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                    </a>
                                    <a href="#" className="w-[38px] h-[38px] rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.01 29.01 0 0 0 1 11.75a29.01 29.01 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29.01 29.01 0 0 0 .46-5.33 29.01 29.01 0 0 0-.46-5.33zM9.75 15.02V8.48l6.19 3.27-6.19 3.27z" /></svg>
                                    </a>
                                    <a href="#" className="w-[38px] h-[38px] rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div>
                                <h4 className="text-white text-[13px] font-medium mb-3">RUBY ad social media</h4>
                                <div className="flex items-center gap-2.5">
                                    <a href="#" className="w-[38px] h-[38px] rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z" /></svg>
                                    </a>
                                    <a href="#" className="w-[38px] h-[38px] rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                                    </a>
                                    <a href="#" className="w-[38px] h-[38px] rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="m9 10 1.5 1.5L14 8"></path><path d="m19 5-3 3"></path><path d="m21 8-2-2"></path></svg>
                                        <MessageCircle size={20} />
                                    </a>
                                    <a href="#" className="w-[38px] h-[38px] rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <Send size={20} />
                                    </a>
                                    <a href="#" className="w-[38px] h-[38px] rounded-xl border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <MessageSquare size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* App Download Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mt-2 lg:mt-6">
                            {/* Google Play */}
                            <button className="flex items-center gap-3 bg-transparent border border-white/30 rounded-[10px] px-5 py-2 hover:bg-white/5 transition-colors">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 3L18.5 12L4.5 21V3Z" fill="url(#paint0_linear)" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="4.5" y1="3" x2="18.5" y2="21" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00E6FF" />
                                            <stop offset="0.5" stopColor="#00FF33" />
                                            <stop offset="1" stopColor="#FFE600" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="text-left">
                                    <p className="text-[11px] text-white/90 leading-tight">Get on the</p>
                                    <p className="text-[16px] font-bold leading-tight tracking-wide">Google Play</p>
                                </div>
                            </button>

                            {/* App Store MT4 */}
                            <button className="flex items-center gap-3 bg-transparent border border-white/30 rounded-[10px] px-5 py-2 hover:bg-white/5 transition-colors">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 13.5C16.5 16 18 17 18 17C17.5 18.5 16.5 20 15.5 20C14.5 20 14 19.5 12.5 19.5C11 19.5 10.5 20 9.5 20C8.5 20 7 18 6.5 16.5C5.5 14 5.5 10.5 7.5 9C8.5 8 9.5 8 10.5 8C11.5 8 12.5 8.5 13.5 8.5C14.5 8.5 15.5 8 16.5 8C17.5 8 19 8.5 19.5 10C19.5 10 16.5 11 16.5 13.5ZM14.5 7C15 6 15 5 14.5 4C13.5 4.5 12.5 5.5 13 6.5C13 7 14 7.5 14.5 7Z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-[11px] text-white/90 leading-tight">Get MT4 on the</p>
                                    <p className="text-[16px] font-bold leading-tight tracking-wide">App Store</p>
                                </div>
                            </button>

                            {/* App Store MT5 */}
                            <button className="flex items-center gap-3 bg-transparent border border-white/30 rounded-[10px] px-5 py-2 hover:bg-white/5 transition-colors">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 13.5C16.5 16 18 17 18 17C17.5 18.5 16.5 20 15.5 20C14.5 20 14 19.5 12.5 19.5C11 19.5 10.5 20 9.5 20C8.5 20 7 18 6.5 16.5C5.5 14 5.5 10.5 7.5 9C8.5 8 9.5 8 10.5 8C11.5 8 12.5 8.5 13.5 8.5C14.5 8.5 15.5 8 16.5 8C17.5 8 19 8.5 19.5 10C19.5 10 16.5 11 16.5 13.5ZM14.5 7C15 6 15 5 14.5 4C13.5 4.5 12.5 5.5 13 6.5C13 7 14 7.5 14.5 7Z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-[11px] text-white/90 leading-tight">Get MT5 on the</p>
                                    <p className="text-[16px] font-bold leading-tight tracking-wide">App Store</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-[#333] pt-10">
                        {/* Disclaimer Text */}
                        <div className="text-[#666666] text-[11px] font-medium leading-[1.8] space-y-6">
                            <p>
                                RUBYFX GLOBAL LIMITED is a private limited company registered in England and Wales under company number 16723963. RUBYFX GLOBAL LIMITED operates the Ruby FX brand and manages its online services through: www.rubyfxtrade.com
                            </p>
                            <p>
                                RUBYFX GLOBAL LIMITED is authorized by the Financial Sector Conduct Authority (FSCA) in South Africa as a Financial Service Provider FSP: 1234567890. RUBYFX GLOBAL LIMITED Operates under www.rubyfxtrade.com
                            </p>
                            <div>
                                <p className="font-bold mb-1">Important Notice</p>
                                <p>
                                    RUBYFX GLOBAL LIMITED is registered as a private limited company under the laws of England and Wales. This registration confirms the company's legal establishment; however, it does not constitute authorization or licensing from any financial regulatory authority in the United Kingdom, including the Financial Conduct Authority (FCA).
                                    <br />
                                    Clients should carefully review all regulatory information and risk disclosures provided by Ruby FX before engaging in financial or trading activities. Trading leveraged financial products involves a high level of risk and may not be suitable for all investors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AboutFooter;
