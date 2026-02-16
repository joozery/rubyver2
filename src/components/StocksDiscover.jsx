import React from 'react';
import phoneImg from '../assets/forex/phone.jpg';

const StocksDiscover = () => {
    return (
        <section className="bg-white py-20 border-b border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="w-full mb-12 overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
                    <img
                        src={phoneImg}
                        alt="Discover Stocks Trading"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl">
                    <h2 className="text-[32px] lg:text-[48px] font-black uppercase text-black leading-tight mb-6 tracking-tight">
                        DISCOVER STOCKS TRADING WITH RUBY
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-700 font-bold leading-relaxed max-w-3xl">
                        Invest in global giants. Trade CFDs on hundreds of stocks from US, EU, and Asian markets with competitive conditions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StocksDiscover;
