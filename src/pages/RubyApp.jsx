import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import RubyAppHero from '../components/RubyAppHero';
import RubyAppFeatures from '../components/RubyAppFeatures';
import RubyAppOnboarding from '../components/RubyAppOnboarding';
import RubyAppStats from '../components/RubyAppStats';
import RubyAppCharts from '../components/RubyAppCharts';
import RubyAppEverything from '../components/RubyAppEverything';

const RubyApp = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <RubyAppHero />
                <RubyAppFeatures />
                <RubyAppOnboarding />
                <RubyAppStats />
                <RubyAppCharts />
                <RubyAppEverything />
                {/* Additional sections can be added here later */}
            </main>
            <TradingFooter />
        </div>
    );
};

export default RubyApp;
