import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import AboutFooter from '../components/AboutFooter';
import AboutHero from '../components/AboutHero';
import AboutVisionMission from '../components/AboutVisionMission';
import AboutFSC from '../components/AboutFSC';
import AboutClients from '../components/AboutClients';
import AboutHistory from '../components/AboutHistory';
import AboutRecognized from '../components/AboutRecognized';
import AboutUpdates from '../components/AboutUpdates';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <AboutHero />
                <AboutVisionMission />
                <AboutFSC />
                <AboutClients />
                <AboutHistory />
                <AboutUpdates />
                <AboutRecognized />
            </main>
            <AboutFooter />
        </div>
    );
};

export default About;
