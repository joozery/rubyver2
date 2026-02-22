import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import AcademyHero from '../components/AcademyHero';
import AcademyLearn from '../components/AcademyLearn';
import AcademyArticles from '../components/AcademyArticles';
import AcademyDeepInsight from '../components/AcademyDeepInsight';
import AcademyWhyRuby from '../components/AcademyWhyRuby';
import AcademyCTA from '../components/AcademyCTA';

const Academy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <AcademyHero />
                <AcademyLearn />
                <AcademyArticles />
                <AcademyDeepInsight />
                <AcademyWhyRuby />
                <AcademyCTA />
            </main>
            <TradingFooter />
        </div>
    );
};

export default Academy;
