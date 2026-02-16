import React from 'react';
import Navbar from '../components/Navbar';
import DepositsHero from '../components/DepositsHero';
import PaymentMethodsSection from '../components/PaymentMethodsSection';
import DepositStepsSection from '../components/DepositStepsSection';
import UnlockPotentialSection from '../components/UnlockPotentialSection';
import TradingFooter from '../components/TradingFooter';

const Deposits = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="-mt-[80px]">
                <DepositsHero />
                <PaymentMethodsSection />
                <DepositStepsSection />
                <UnlockPotentialSection />
            </main>
            <TradingFooter />
        </div>
    );
};

export default Deposits;
