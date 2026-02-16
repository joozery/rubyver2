import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TradingFooter from '../components/TradingFooter';
import StocksHero from '../components/StocksHero';
import StocksDiscover from '../components/StocksDiscover';
import StocksSpreads from '../components/StocksSpreads';
import StocksWhyTrade from '../components/StocksWhyTrade';
import StocksConditions from '../components/StocksConditions';
import StocksFundsSecure from '../components/StocksFundsSecure';
import StocksIdeas from '../components/StocksIdeas';

const Stocks = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <StocksHero />
                <StocksDiscover />
                <StocksSpreads />
                <StocksWhyTrade />
                <StocksConditions />
                <StocksFundsSecure />
                <StocksIdeas />
            </main>
            <TradingFooter />
        </div>
    );
};

export default Stocks;
