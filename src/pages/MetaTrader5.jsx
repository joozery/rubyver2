import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import MT5Hero from '../components/MT5Hero';
import MT5Features from '../components/MT5Features';
import MT5WhyRuby from '../components/MT5WhyRuby';
import MT5Download from '../components/MT5Download';
import MT5Comparison from '../components/MT5Comparison';

const MetaTrader5 = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <MT5Hero />
                <MT5Features />
                <MT5Download />
                {/* Additional sections for MT5 features can be added here */}
            </main>
            <TradingFooter />
        </div>
    );
};

export default MetaTrader5;
