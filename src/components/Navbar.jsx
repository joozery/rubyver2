import { ChevronDown, Globe, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo/logo.png';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isTradingOpen, setIsTradingOpen] = useState(false);
    const [isMarketsOpen, setIsMarketsOpen] = useState(false);
    const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    return (
        <nav className="h-20 w-full bg-black sticky top-0 z-50 font-['Sukhumvit_Set',_sans-serif]">
            {/* Content Area */}
            <div className="mx-auto max-w-[1512px] h-full flex items-center justify-between px-6 lg:px-12 relative text-white">

                <div className="flex items-center space-x-12 h-full">
                    {/* Logo wrapped in Link to home */}
                    <Link to="/" className="flex items-center cursor-pointer shrink-0">
                        <img
                            src={logoIcon}
                            alt="Ruby FX"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    <div className="hidden lg:flex items-center space-x-7 text-base font-normal">
                        {/* Trading Dropdown */}
                        <div className="relative h-20 flex items-center">
                            <button
                                onClick={() => { setIsTradingOpen(!isTradingOpen); setIsMarketsOpen(false); setIsAnalyticsOpen(false); setIsCompanyOpen(false); setIsPartnershipOpen(false); }}
                                className={`flex items-center space-x-1.5 transition-colors py-8 ${isTradingOpen ? 'text-red-500' : 'hover:text-red-500'}`}
                            >
                                <span>{t('nav.trading')}</span>
                                <ChevronDown size={14} className={`opacity-80 transition-transform duration-200 ${isTradingOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isTradingOpen && (
                                <>
                                    {/* Backdrop to close when clicking outside */}
                                    <div
                                        className="fixed inset-0 z-[-1]"
                                        onClick={() => setIsTradingOpen(false)}
                                    />
                                    <div className="absolute top-[60px] left-[-20px] bg-white w-[374px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-10 px-[22px] grid grid-cols-[58%_42%] gap-x-[10px] border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                                        {/* Conditions Column */}
                                        <div className="border-r border-gray-50">
                                            <h4 className="text-[#a0a0a0] font-bold text-sm uppercase mb-3 tracking-wider">{t('nav.trading')}</h4>
                                            <div className="space-y-3">
                                                <Link
                                                    to="/trading-conditions"
                                                    onClick={() => setIsTradingOpen(false)}
                                                    className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors"
                                                >
                                                    {t('nav.conditions')}
                                                </Link>
                                                <Link
                                                    to="/deposits"
                                                    onClick={() => setIsTradingOpen(false)}
                                                    className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors"
                                                >
                                                    {t('nav.deposits_withdrawals')}
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Platforms Column */}
                                        <div className="pl-[10px]">
                                            <h4 className="text-[#a0a0a0] font-bold text-sm uppercase mb-3 tracking-wider">{t('nav.platforms')}</h4>
                                            <div className="space-y-3">
                                                <Link
                                                    to="/ruby-app"
                                                    onClick={() => setIsTradingOpen(false)}
                                                    className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors text-left uppercase"
                                                >
                                                    {t('nav.ruby_app')}
                                                </Link>
                                                <Link
                                                    to="/metatrader-5"
                                                    onClick={() => setIsTradingOpen(false)}
                                                    className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors text-left uppercase whitespace-nowrap"
                                                >
                                                    {t('nav.metatrader_5')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Markets Dropdown */}
                        <div className="relative h-20 flex items-center">
                            <button
                                onClick={() => { setIsMarketsOpen(!isMarketsOpen); setIsTradingOpen(false); setIsAnalyticsOpen(false); setIsCompanyOpen(false); setIsPartnershipOpen(false); }}
                                className={`flex items-center space-x-1.5 transition-colors py-8 ${isMarketsOpen ? 'text-red-500' : 'hover:text-red-500'}`}
                            >
                                <span>{t('nav.markets')}</span>
                                <ChevronDown size={14} className={`opacity-80 transition-transform duration-200 ${isMarketsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isMarketsOpen && (
                                <>
                                    {/* Backdrop */}
                                    <div
                                        className="fixed inset-0 z-[-1]"
                                        onClick={() => setIsMarketsOpen(false)}
                                    />
                                    <div className="absolute top-[60px] left-[-20px] bg-white w-[240px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-10 px-[22px] flex flex-col border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                                        <h4 className="text-[#a0a0a0] font-bold text-sm uppercase mb-3 tracking-wider">{t('nav.markets')}</h4>
                                        <div className="space-y-3">
                                            {['Forex', 'Metals', 'Indices', 'Energies', 'Stocks', 'Forex Exotic'].map((item) => (
                                                <Link
                                                    key={item}
                                                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                                                    onClick={() => setIsMarketsOpen(false)}
                                                    className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors text-left"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Analytics & Education Dropdown */}
                        <div className="relative h-20 flex items-center">
                            <button
                                onClick={() => { setIsAnalyticsOpen(!isAnalyticsOpen); setIsTradingOpen(false); setIsMarketsOpen(false); setIsCompanyOpen(false); setIsPartnershipOpen(false); }}
                                className={`flex items-center space-x-1.5 transition-colors py-8 ${isAnalyticsOpen ? 'text-red-500' : 'hover:text-red-500'}`}
                            >
                                <span>{t('nav.analytics_edu')}</span>
                                <ChevronDown size={14} className={`opacity-80 transition-transform duration-200 ${isAnalyticsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isAnalyticsOpen && (
                                <>
                                    {/* Backdrop */}
                                    <div
                                        className="fixed inset-0 z-[-1]"
                                        onClick={() => setIsAnalyticsOpen(false)}
                                    />
                                    <div className="absolute top-[60px] left-[-20px] bg-white w-[374px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-10 px-[22px] grid grid-cols-2 gap-x-[10px] border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                                        {/* Analytics Column */}
                                        <div className="border-r border-gray-50">
                                            <h4 className="text-[#a0a0a0] font-bold text-sm uppercase mb-3 tracking-wider">Analytics</h4>
                                            <div className="space-y-3">
                                                <Link
                                                    to="/market-analytics"
                                                    onClick={() => setIsAnalyticsOpen(false)}
                                                    className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors text-left"
                                                >
                                                    {t('nav.market_analytics')}
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Education Column */}
                                        <div className="pl-[10px]">
                                            <h4 className="text-[#a0a0a0] font-bold text-sm uppercase mb-3 tracking-wider">Education</h4>
                                            <div className="space-y-3">
                                                <Link
                                                    to="/academy"
                                                    onClick={() => setIsAnalyticsOpen(false)}
                                                    className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors text-left whitespace-nowrap"
                                                >
                                                    {t('nav.ruby_academy')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Company Dropdown */}
                        <div className="relative h-20 flex items-center">
                            <button
                                onClick={() => { setIsCompanyOpen(!isCompanyOpen); setIsTradingOpen(false); setIsMarketsOpen(false); setIsAnalyticsOpen(false); setIsPartnershipOpen(false); }}
                                className={`flex items-center space-x-1.5 transition-colors py-8 ${isCompanyOpen ? 'text-red-500' : 'hover:text-red-500'}`}
                            >
                                <span>{t('nav.company')}</span>
                                <ChevronDown size={14} className={`opacity-80 transition-transform duration-200 ${isCompanyOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isCompanyOpen && (
                                <>
                                    {/* Backdrop */}
                                    <div
                                        className="fixed inset-0 z-[-1]"
                                        onClick={() => setIsCompanyOpen(false)}
                                    />
                                    <div className="absolute top-[60px] left-[-20px] bg-white w-[240px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-10 px-[22px] flex flex-col border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                                        <h4 className="text-[#a0a0a0] font-bold text-sm uppercase mb-3 tracking-wider">{t('nav.company')}</h4>
                                        <div className="space-y-3">
                                            <Link to="/about" onClick={() => setIsCompanyOpen(false)} className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors text-left whitespace-nowrap">
                                                {t('nav.about')}
                                            </Link>
                                            <Link to="/support" onClick={() => setIsCompanyOpen(false)} className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors text-left whitespace-nowrap">
                                                {t('nav.support')}
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Ruby Partnership Programs Dropdown */}
                        <div className="relative h-20 flex items-center">
                            <button
                                onClick={() => { setIsPartnershipOpen(!isPartnershipOpen); setIsTradingOpen(false); setIsMarketsOpen(false); setIsAnalyticsOpen(false); setIsCompanyOpen(false); }}
                                className={`flex items-center space-x-1.5 transition-colors py-8 ${isPartnershipOpen ? 'text-red-500' : 'hover:text-red-500'}`}
                            >
                                <span>{t('nav.partnership')}</span>
                                <ChevronDown size={14} className={`opacity-80 transition-transform duration-200 ${isPartnershipOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isPartnershipOpen && (
                                <>
                                    {/* Backdrop */}
                                    <div
                                        className="fixed inset-0 z-[-1]"
                                        onClick={() => setIsPartnershipOpen(false)}
                                    />
                                    <div className="absolute top-[60px] left-[-20px] bg-white w-[300px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-10 px-[22px] flex flex-col border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                                        <h4 className="text-[#a0a0a0] font-bold text-sm uppercase mb-3 tracking-wider whitespace-nowrap">{t('nav.partnership')}</h4>
                                        <div className="space-y-3">
                                            <Link to="/ruby-ib-program" onClick={() => setIsPartnershipOpen(false)} className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors text-left whitespace-nowrap">
                                                {t('nav.ib_program')}
                                            </Link>
                                            <Link to="/ruby-multi-level" onClick={() => setIsPartnershipOpen(false)} className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors text-left whitespace-nowrap">
                                                {t('nav.multi_level')}
                                            </Link>
                                            <Link to="/ruby-forex-loyalty" onClick={() => setIsPartnershipOpen(false)} className="block text-black font-bold text-[15px] hover:text-red-600 transition-colors text-left whitespace-nowrap">
                                                {t('nav.loyalty')}
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex items-center shrink-0">
                    {/* Red Slanted Separator */}
                    <div className="hidden lg:block h-20 w-3 bg-red-700 -skew-x-[20deg] mr-8" />

                    <div className="flex items-center space-x-2 lg:space-x-4">
                        <button className="bg-red-700 hover:bg-red-800 text-white px-3 lg:px-5 h-8 rounded-[10px] text-sm lg:text-base font-normal transition-all flex items-center justify-center whitespace-nowrap">
                            {t('nav.open_account')}
                        </button>
                        <button className="hidden lg:flex border border-red-700 hover:bg-red-700/10 text-white px-5 h-8 rounded-[10px] text-base font-normal transition-all items-center justify-center whitespace-nowrap">
                            {t('nav.login')}
                        </button>

                        {/* Language Selector */}
                        <div className="relative ml-2 lg:ml-6">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center space-x-1 lg:space-x-2 text-sm lg:text-base font-normal text-white cursor-pointer hover:text-red-500 transition-colors group"
                            >
                                <Globe size={20} className="text-white shrink-0 lg:w-6 lg:h-6" />
                                <span className="uppercase">{i18n.language.split('-')[0]}</span>
                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-32 bg-black border border-white/10 rounded-lg shadow-xl py-2 z-50">
                                    <button
                                        onClick={() => toggleLanguage('en')}
                                        className={`w-full text-left px-4 py-2 hover:bg-red-700/20 transition-colors ${i18n.language.startsWith('en') ? 'text-red-500' : 'text-white'}`}
                                    >
                                        English (EN)
                                    </button>
                                    <button
                                        onClick={() => toggleLanguage('th')}
                                        className={`w-full text-left px-4 py-2 hover:bg-red-700/20 transition-colors ${i18n.language.startsWith('th') ? 'text-red-500' : 'text-white'}`}
                                    >
                                        ไทย (TH)
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-white hover:text-red-500 transition-colors ml-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-x-0 bottom-0 top-[80px] bg-black z-40 overflow-y-auto animate-in fade-in duration-300 border-t border-white/5">
                    <div className="flex flex-col p-6 space-y-6">
                        {/* Trading Section */}
                        <div className="space-y-4">
                            <h4 className="text-[#a0a0a0] font-bold text-sm uppercase tracking-wider border-b border-gray-800 pb-2">
                                {t('nav.trading')}
                            </h4>
                            <div className="flex flex-col space-y-3 pl-2">
                                <Link to="/trading-conditions" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium text-lg hover:text-red-500">{t('nav.conditions')}</Link>
                                <Link to="/deposits" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium text-lg hover:text-red-500">{t('nav.deposits_withdrawals')}</Link>
                                <Link to="/ruby-app" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium text-lg hover:text-red-500">{t('nav.ruby_app')}</Link>
                                <Link to="/metatrader-5" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium text-lg hover:text-red-500">{t('nav.metatrader_5')}</Link>
                            </div>
                        </div>

                        {/* Markets Section */}
                        <div className="space-y-4">
                            <h4 className="text-[#a0a0a0] font-bold text-sm uppercase tracking-wider border-b border-gray-800 pb-2">
                                {t('nav.markets')}
                            </h4>
                            <div className="grid grid-cols-2 gap-4 pl-2">
                                {['Forex', 'Metals', 'Indices', 'Energies', 'Stocks', 'Forex Exotic'].map((item) => (
                                    <Link
                                        key={item}
                                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-white font-medium text-lg hover:text-red-500"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Partnership Section */}
                        <div className="space-y-4">
                            <h4 className="text-[#a0a0a0] font-bold text-sm uppercase tracking-wider border-b border-gray-800 pb-2">
                                {t('nav.partnership')}
                            </h4>
                            <div className="flex flex-col space-y-3 pl-2">
                                <Link to="/ruby-ib-program" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium text-lg hover:text-red-500">{t('nav.ib_program')}</Link>
                                <Link to="/ruby-multi-level" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium text-lg hover:text-red-500">{t('nav.multi_level')}</Link>
                                <Link to="/ruby-forex-loyalty" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium text-lg hover:text-red-500">{t('nav.loyalty')}</Link>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="space-y-4">
                            <h4 className="text-[#a0a0a0] font-bold text-sm uppercase tracking-wider border-b border-gray-800 pb-2">
                                {t('nav.analytics_edu')}
                            </h4>
                            <div className="flex flex-col space-y-3 pl-2">
                                <Link to="/market-analytics" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium text-lg hover:text-red-500">{t('nav.market_analytics')}</Link>
                                <Link to="/academy" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium text-lg hover:text-red-500">{t('nav.ruby_academy')}</Link>
                            </div>
                        </div>

                        {/* Company Section */}
                        <div className="space-y-4">
                            <h4 className="text-[#a0a0a0] font-bold text-sm uppercase tracking-wider border-b border-gray-800 pb-2">
                                {t('nav.company')}
                            </h4>
                            <div className="flex flex-col space-y-3 pl-2">
                                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium text-lg hover:text-red-500">{t('nav.about')}</Link>
                                <Link to="/support" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-medium text-lg hover:text-red-500">{t('nav.support')}</Link>
                            </div>
                        </div>

                        {/* CTA Buttons for Mobile */}
                        <div className="flex flex-col space-y-3 pt-4 pb-10">
                            <button className="bg-red-700 hover:bg-red-800 text-white w-full py-4 rounded-[10px] text-lg font-bold transition-all">
                                {t('nav.open_account')}
                            </button>
                            <button className="border border-red-700 hover:bg-red-700/10 text-white w-full py-4 rounded-[10px] text-lg font-bold transition-all">
                                {t('nav.login')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
