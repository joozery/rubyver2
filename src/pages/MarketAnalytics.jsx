import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import MarketAnalyticsHero from '../components/MarketAnalyticsHero';
import MarketAnalyticsInsights from '../components/MarketAnalyticsInsights';
import MarketAnalyticsGrid from '../components/MarketAnalyticsGrid';
import MarketAnalyticsFBBanner from '../components/MarketAnalyticsFBBanner';
import MarketAnalyticsVIP from '../components/MarketAnalyticsVIP';

const MarketAnalytics = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <MarketAnalyticsHero />
                <MarketAnalyticsInsights />
                <MarketAnalyticsGrid />
                <MarketAnalyticsFBBanner />
                <MarketAnalyticsVIP />
            </main>
            <TradingFooter />
        </div>
    );
};

export default MarketAnalytics;
