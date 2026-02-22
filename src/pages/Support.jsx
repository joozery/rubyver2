import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import SupportHero from '../components/SupportHero';
import SupportContent from '../components/SupportContent';

const Support = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f4f4f4] flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow bg-[#111]">
                <SupportHero />
                <SupportContent />
            </main>
            <TradingFooter />
        </div>
    );
};

export default Support;
