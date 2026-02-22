import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import MultiLevelHero from '../components/MultiLevelHero';
import MultiLevelConditions from '../components/MultiLevelConditions';
import MultiLevelHowItWorks from '../components/MultiLevelHowItWorks';
import MultiLevelExperience from '../components/MultiLevelExperience';
import MultiLevelBenefits from '../components/MultiLevelBenefits';
import MultiLevelCTA from '../components/MultiLevelCTA';

const MultiLevel = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f4f4f4] flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow bg-white">
                <MultiLevelHero />
                <MultiLevelConditions />
                <MultiLevelHowItWorks />
                <MultiLevelExperience />
                <MultiLevelBenefits />
                <MultiLevelCTA />
            </main>
            <TradingFooter />
        </div>
    );
};

export default MultiLevel;
