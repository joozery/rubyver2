import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import EnergiesHero from '../components/EnergiesHero';
import EnergiesDiscover from '../components/EnergiesDiscover';
import EnergiesSpreads from '../components/EnergiesSpreads';
import EnergiesWhyTrade from '../components/EnergiesWhyTrade';
import EnergiesConditions from '../components/EnergiesConditions';
import EnergiesFundsSecure from '../components/EnergiesFundsSecure';
import EnergiesIdeas from '../components/EnergiesIdeas';

const Energies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <EnergiesHero />
                <EnergiesDiscover />
                <EnergiesSpreads />
                <EnergiesWhyTrade />
                <EnergiesConditions />
                <EnergiesFundsSecure />
                <EnergiesIdeas />
            </main>
            <TradingFooter />
        </div>
    );
};

export default Energies;
