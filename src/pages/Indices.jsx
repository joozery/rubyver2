import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import IndicesHero from '../components/IndicesHero';
import IndicesDiscover from '../components/IndicesDiscover';
import IndicesSpreads from '../components/IndicesSpreads';
import IndicesWhyTrade from '../components/IndicesWhyTrade';
import IndicesConditions from '../components/IndicesConditions';
import IndicesFundsSecure from '../components/IndicesFundsSecure';
import IndicesIdeas from '../components/IndicesIdeas';

const Indices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <IndicesHero />
                <IndicesDiscover />
                <IndicesSpreads />
                <IndicesWhyTrade />
                <IndicesConditions />
                <IndicesFundsSecure />
                <IndicesIdeas />
            </main>
            <TradingFooter />
        </div>
    );
};

export default Indices;
