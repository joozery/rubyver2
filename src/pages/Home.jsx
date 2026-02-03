import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBanner from '../components/StatsBanner';
import BeSharpSection from '../components/BeSharpSection';
import JoinCommunitySection from '../components/JoinCommunitySection';
import PlatformsSection from '../components/PlatformsSection';
import ForexPromotionsSection from '../components/ForexPromotionsSection';
import ImpactSection from '../components/ImpactSection';
import InfrastructureSection from '../components/InfrastructureSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <main className="-mt-[81px]">
                <Hero />
                <StatsBanner />
                <BeSharpSection />
                <JoinCommunitySection />
                <PlatformsSection />
                <ForexPromotionsSection />
                <ImpactSection />
                <InfrastructureSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
