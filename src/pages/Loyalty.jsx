import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import LoyaltyHero from '../components/LoyaltyHero';
import LoyaltyWhy from '../components/LoyaltyWhy';
import LoyaltyCTA from '../components/LoyaltyCTA';

const Loyalty = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f4f4f4] flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow bg-white">
                <LoyaltyHero />
                <LoyaltyWhy />
                <LoyaltyCTA />
            </main>
            <TradingFooter />
        </div>
    );
};

export default Loyalty;
