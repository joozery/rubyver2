import React from 'react';
import bg3 from '../assets/bg3.jpg';

const ThreeStepsSection = () => {
    return (
        <section className="relative text-white py-24 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${bg3})`,
                    filter: 'brightness(0.3)'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black uppercase mb-6 leading-tight max-w-4xl">
                        <span className="text-[#ff0000]">THREE SIMPLE</span> STEPS TO <br />
                        TRADE WITH RUBY
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-300 max-w-2xl">
                        We offer over 200 deposit and withdrawal options so nothing interferes between you and the market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Step 1 */}
                    <div className="relative pt-10">
                        <div className="absolute top-0 left-0 bg-white text-black px-6 py-2 font-bold text-lg">
                            Step 1
                        </div>
                        <div className="h-full border border-white/20 p-8 pt-12 bg-white/5 hover:bg-white/10 transition-colors">
                            <h4 className="text-xl font-bold uppercase mb-4">
                                REGISTER AND VALIDATE PROFILE
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Download our application or visit the RUBY website and enroll. Afterward, complete our rapid validation. Congratulations, you now possess a trading account.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative pt-10">
                        <div className="absolute top-0 left-0 bg-white text-black px-6 py-2 font-bold text-lg">
                            Step 2
                        </div>
                        <div className="h-full border border-white/20 p-8 pt-12 bg-white/5 hover:bg-white/10 transition-colors">
                            <h4 className="text-xl font-bold uppercase mb-4">
                                TRANSFER CAPITAL
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                After validation, transfer funds to your trading account. With 200+ funding options, there's always an ideal choice just for you.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative pt-10">
                        <div className="absolute top-0 left-0 bg-white text-black px-6 py-2 font-bold text-lg">
                            Step 3
                        </div>
                        <div className="h-full border border-white/20 p-8 pt-12 bg-white/5 hover:bg-white/10 transition-colors">
                            <h4 className="text-xl font-bold uppercase mb-4">
                                ENTER THE MARKET
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                With your trading account, access the markets via our app or MetaTrader software. Establish positions and conquer the trading momentum.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="bg-[#ff0000] hover:bg-red-700 text-white font-bold py-4 px-16 rounded-lg text-xl transition-all shadow-xl">
                        Start trading
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ThreeStepsSection;
