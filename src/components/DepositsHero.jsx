import React from 'react';
import depositsBg from '../assets/desposits.jpg';
import DepositFeatureCard from './DepositFeatureCard';

const DepositsHero = () => {
    return (
        <section className="relative w-full bg-black h-[799px] flex items-center pt-20 pb-0 overflow-hidden">
            {/* Background Image / Original Position with Improved Clarity */}
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0">
                <img
                    src={depositsBg}
                    alt=""
                    className="w-full h-full object-cover object-right grayscale-[0.3] brightness-[0.7]"
                />
                {/* Gradient Masks */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-green-600/10 mix-blend-color" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center">
                <div className="max-w-4xl pt-20">
                    <h1 className="text-4xl lg:text-[61px] font-black uppercase leading-[1.1] mb-6 tracking-tighter">
                        <span className="text-[#00CC00]">DEPOSITS</span> <span className="text-white">AND</span> <br />
                        <span className="text-white">WITHDRAWALS</span>
                    </h1>
                    <p className="text-white text-2xl lg:text-[36px] font-medium mb-8 leading-normal max-w-2xl tracking-tight">
                        Every transaction you make with RubyFX is fast, convenient, and protected.
                    </p>

                    <button className="bg-[#00CC00] hover:bg-[#00AA00] text-white font-medium w-[336px] h-[62px] flex items-center justify-center rounded-xl text-2xl transition-all shadow-lg shadow-green-900/20 mb-[43px]">
                        Deposit to trade
                    </button>
                </div>

                {/* Feature Cards */}
                <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4 w-full mt-auto mb-10">
                    {[
                        "UNLIMITED TRANSACTIONS UPON FULL VERIFICATION",
                        "COMPREHENSIVE GLOBAL AND LOCAL PAYMENT OPTIONS",
                        "ZERO COMMISSION FEES",
                        "INSTANT AUTOMATED WITHDRAWALS AVAILABLE"
                    ].map((text, idx) => (
                        <DepositFeatureCard key={idx} text={text} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DepositsHero;
