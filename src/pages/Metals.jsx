import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import MetalsHero from '../components/MetalsHero';
import MetalsDiscover from '../components/MetalsDiscover';
import MetalsSpreads from '../components/MetalsSpreads';
import MetalsWhyTrade from '../components/MetalsWhyTrade';
import MetalsConditions from '../components/MetalsConditions';
import MetalsFundsSecure from '../components/MetalsFundsSecure';
import MetalsIdeas from '../components/MetalsIdeas';

const Metals = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <MetalsHero />
                <MetalsDiscover />
                <MetalsSpreads />
                <MetalsWhyTrade />
                <MetalsConditions />
                <MetalsFundsSecure />
                <MetalsIdeas />
            </main>
            <TradingFooter />
        </div>
    );
};

export default Metals;
