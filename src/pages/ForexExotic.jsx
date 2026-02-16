import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import ForexExoticHero from '../components/ForexExoticHero';
import ForexExoticDiscover from '../components/ForexExoticDiscover';
import ForexExoticSpreads from '../components/ForexExoticSpreads';
import ForexExoticWhyTrade from '../components/ForexExoticWhyTrade';
import ForexExoticConditions from '../components/ForexExoticConditions';
import ForexExoticFundsSecure from '../components/ForexExoticFundsSecure';
import ForexExoticIdeas from '../components/ForexExoticIdeas';

const ForexExotic = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <ForexExoticHero />
                <ForexExoticDiscover />
                <ForexExoticSpreads />
                <ForexExoticWhyTrade />
                <ForexExoticConditions />
                <ForexExoticFundsSecure />
                <ForexExoticIdeas />
            </main>
            <TradingFooter />
        </div>
    );
};

export default ForexExotic;
