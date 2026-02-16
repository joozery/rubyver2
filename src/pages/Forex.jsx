import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import ForexHero from '../components/ForexHero';
import ForexDiscover from '../components/ForexDiscover';
import ForexSpreads from '../components/ForexSpreads';
import ForexWhyTrade from '../components/ForexWhyTrade';
import ForexConditions from '../components/ForexConditions';
import ForexFundsSecure from '../components/ForexFundsSecure';
import ForexIdeas from '../components/ForexIdeas';

const Forex = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <ForexHero />
                <ForexDiscover />
                <ForexSpreads />
                <ForexWhyTrade />
                <ForexConditions />
                <ForexFundsSecure />
                <ForexIdeas />
                {/* Additional Forex sections can be added here */}
            </main>
            <TradingFooter />
        </div>
    );
};

export default Forex;
