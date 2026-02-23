import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube, Send, MessageCircle, Play } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-black text-[#888888] pt-12 pb-20 px-6 lg:px-12 border-t border-white/10">
            <div className="container mx-auto">

                {/* Upper Section: Social & App Stores */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12 border-b border-white/10 pb-12">

                    {/* Social Media 1 */}
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-bold text-white uppercase tracking-tight">{t('footer.social_media')}</span>
                        <div className="flex gap-2">
                            {[Facebook, Instagram, Youtube, Send].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 border border-white/20 rounded flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Media 2 */}
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-bold text-white uppercase tracking-tight">{t('footer.social_media')}</span>
                        <div className="flex gap-2">
                            {[MessageCircle, Send, MessageCircle].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 border border-white/20 rounded flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* App Store Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {/* Google Play */}
                        <a href="#" className="flex items-center gap-3 border border-white/20 rounded-lg px-4 py-2 hover:bg-white/5 transition-all min-w-[180px]">
                            <Play className="text-white fill-white" size={24} />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-white leading-none uppercase">{t('footer.get_it_on')}</span>
                                <span className="text-base text-white font-bold leading-tight">Google Play</span>
                            </div>
                        </a>

                        {/* MT4 App Store */}
                        <a href="#" className="flex items-center gap-3 border border-white/20 rounded-lg px-4 py-2 hover:bg-white/5 transition-all min-w-[180px]">
                            <div className="text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.3-.79-1.53 0-2 .76-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-white leading-none uppercase">{t('footer.get_mt4')}</span>
                                <span className="text-base text-white font-bold leading-tight">App Store</span>
                            </div>
                        </a>

                        {/* MT5 App Store */}
                        <a href="#" className="flex items-center gap-3 border border-white/20 rounded-lg px-4 py-2 hover:bg-white/5 transition-all min-w-[180px]">
                            <div className="text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.3-.79-1.53 0-2 .76-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-white leading-none uppercase">{t('footer.get_mt5')}</span>
                                <span className="text-base text-white font-bold leading-tight">App Store</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Lower Section: Legal Content */}
                <div className="space-y-6 max-w-7xl text-xs lg:text-[13px] leading-relaxed">
                    <p>
                        {t('footer.legal_1')}
                        <a href="https://www.rubyfxtrade.com" className="hover:text-white ml-1">www.rubyfxtrade.com</a>
                    </p>

                    <p>
                        {t('footer.legal_2')}
                        <a href="https://www.rubyfxtrade.com" className="hover:text-white ml-1">www.rubyfxtrade.com</a>
                    </p>

                    <p>
                        {t('footer.legal_3')}
                    </p>

                    <div className="pt-4">
                        <h4 className="font-bold text-white mb-2">{t('footer.important_notice')}</h4>
                        <p>
                            {t('footer.notice_text')}
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
