import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import ProgramHero from '../components/ProgramHero';
import ProgramWhy from '../components/ProgramWhy';
import ProgramLeaderboard from '../components/ProgramLeaderboard';
import ProgramSteps from '../components/ProgramSteps';
import ProgramPayout from '../components/ProgramPayout';
import ProgramCalculator from '../components/ProgramCalculator';
import ProgramRebate from '../components/ProgramRebate';
import ProgramSupport from '../components/ProgramSupport';

const Program = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f4f4f4] flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow bg-[#111]">
                <ProgramHero />
                <ProgramWhy />
                <ProgramLeaderboard />
                <ProgramSteps />
                <ProgramPayout />
                <ProgramCalculator />
                <ProgramRebate />
                <ProgramSupport />
            </main>
            <TradingFooter />
        </div>
    );
};

export default Program;
