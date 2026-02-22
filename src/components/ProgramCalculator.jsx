import React, { useState } from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

const ProgramCalculator = () => {
    const [lot, setLot] = useState(500);
    const [grade, setGrade] = useState(1);
    const [instrument, setInstrument] = useState('XAUUSD');

    // Mock calculation
    // Base commission per lot for XAUUSD might be around ~36.6 USD but we use grade %
    // Let's just create a dynamic number that looks close to the image
    const baseCpl = 36.63; // Example base
    const gradeMultipliers = {
        1: 0.30,
        2: 0.32,
        3: 0.35,
        4: 0.38,
        5: 0.40,
        6: 0.43
    };

    const currentMultiplier = gradeMultipliers[grade];
    const avgCpl = baseCpl * currentMultiplier;
    const totalCommission = avgCpl * lot;

    return (
        <section className="bg-[#e9e9e9] py-24">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px]">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-16">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-[45%] flex flex-col items-start">
                        <h2 className="font-black text-[32px] md:text-[46px] uppercase tracking-wide leading-tight mb-6 text-black">
                            SEE HOW MUCH YOU<br />
                            CAN EARN
                        </h2>
                        <p className="text-[#333] text-[18px] md:text-[20px] font-medium leading-[1.6] mb-8">
                            Explore our progressive commission payout system to estimate your potential income as an RUBY Partner.
                        </p>
                        <button className="bg-[#f13a04] hover:bg-red-600 text-white font-bold text-[18px] lg:text-[20px] px-8 py-3 md:py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                            Open Partner account
                        </button>
                    </div>

                    {/* Right: Calculator Card */}
                    <div className="w-full lg:w-[50%] bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">

                        {/* Values */}
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <p className="text-gray-500 text-[12px] font-medium mb-1">
                                    Avg. monthly commission
                                </p>
                                <p className="font-black text-[32px] md:text-[36px] text-black leading-none">
                                    {totalCommission.toFixed(2)} USD
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-500 text-[12px] font-medium mb-1">
                                    Avg. commission per lot
                                </p>
                                <p className="font-black text-[18px] md:text-[20px] text-black leading-none">
                                    {avgCpl.toFixed(2)} USD
                                </p>
                            </div>
                        </div>

                        <hr className="border-gray-200 mb-8" />

                        {/* Lot Slider */}
                        <div className="mb-8">
                            <div className="flex flex-col mb-4">
                                <label className="text-gray-500 text-[12px] font-medium mb-1">Lot</label>
                                <span className="font-bold text-[18px] text-black">{lot}</span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="2000"
                                value={lot}
                                onChange={(e) => setLot(Number(e.target.value))}
                                style={{
                                    background: `linear-gradient(to right, black ${((lot - 10) / (2000 - 10)) * 100}%, #e5e7eb ${((lot - 10) / (2000 - 10)) * 100}%)`
                                }}
                                className="w-full h-1 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full"
                            />
                        </div>

                        {/* Choose Grade */}
                        <div className="mb-8">
                            <label className="text-gray-500 text-[12px] font-medium block mb-3">Choose your Grade</label>
                            <div className="grid grid-cols-2 gap-3">
                                {[1, 2, 3, 4, 5, 6].map((g) => (
                                    <button
                                        key={g}
                                        onClick={() => setGrade(g)}
                                        className={`py-3 px-4 rounded-lg font-medium text-[15px] border transition-colors ${grade === g
                                            ? 'bg-[#f13a04] text-white border-[#f13a04]'
                                            : 'bg-white text-black border-gray-400 hover:border-black'
                                            }`}
                                    >
                                        Grade {g}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Instrument */}
                        <div className="mb-8">
                            <label className="text-gray-500 text-[12px] font-medium block mb-3">Instrument</label>
                            <div className="relative">
                                <select
                                    value={instrument}
                                    onChange={(e) => setInstrument(e.target.value)}
                                    className="w-full appearance-none bg-white border border-gray-200 rounded-lg py-3 px-4 outline-none focus:border-gray-400 text-black font-medium text-[15px] cursor-pointer"
                                >
                                    <option value="XAUUSD">XAUUSD</option>
                                    <option value="EURUSD">EURUSD</option>
                                    <option value="GBPUSD">GBPUSD</option>
                                    <option value="BTCUSD">BTCUSD</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-gray-400 text-[11px] leading-tight">
                            The calculation results are approximate and should not be considered trading advice.
                        </p>

                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-300 my-16" />

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">

                    {/* Left Card: How Grade is calculated */}
                    <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col">
                        <AlertTriangle size={24} className="text-black mb-6" strokeWidth={1.5} />
                        <h3 className="text-[22px] md:text-[26px] font-bold text-black mb-4">
                            How your Grade is calculated
                        </h3>
                        <p className="text-[#333] text-[15px] font-medium leading-relaxed mb-6">
                            Your Grade is based on your average commission earned over the last 3 months, plus an experience bonus. Grades are recalculated on the first day of each month.
                        </p>

                        <div className="border border-gray-400 rounded-lg py-3 px-4 text-center mb-6">
                            <span className="font-bold text-[15px] text-black">
                                Grade = Average commission + Experience bonus
                            </span>
                        </div>

                        <p className="text-black text-[15px] mb-4">
                            <span className="font-bold">Average commission</span> is calculated over the last 3 months.
                        </p>

                        <div className="border border-gray-400 rounded-lg py-4 px-4 text-center flex flex-col items-center justify-center mb-6">
                            <span className="font-bold text-[15px] text-black mb-1">
                                ($90 + $130 + $80) : 3 = $100
                            </span>
                            <span className="text-gray-500 text-[14px]">
                                (January + February + March) : 3 = Avg. Commission
                            </span>
                        </div>

                        <p className="text-[#333] text-[15px] font-medium leading-relaxed">
                            <span className="font-bold text-black">Experience bonus</span> is calculated as your commission over the last three years divided by 100.
                        </p>
                    </div>

                    {/* Right Card: What else affects */}
                    <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col">
                        <AlertTriangle size={24} className="text-black mb-6" strokeWidth={1.5} />
                        <h3 className="text-[22px] md:text-[26px] font-bold text-black mb-4">
                            What else affects your commission
                        </h3>
                        <p className="text-[#333] text-[15px] font-medium leading-relaxed mb-6">
                            Partner commission depends on the spread. To calculate the appropriate commission, multiply the instrument's average spread by your Grade percentage or use our calculator below.
                        </p>

                        <div className="border border-gray-400 rounded-lg py-3 px-4 text-center mb-6">
                            <span className="font-bold text-[15px] text-black">
                                Commission = Spread &times; % of your Grade
                            </span>
                        </div>

                        <p className="text-[#333] text-[15px] font-medium leading-relaxed mt-1">
                            Since spreads are always floating, the actual commission may differ from your calculations.
                        </p>
                    </div>

                </div>

                {/* See All Commissions Link */}
                <div className="flex justify-center">
                    <a href="#" className="flex items-center gap-2 font-bold text-black text-[15px] hover:underline underline-offset-4 decoration-2">
                        See all commissions <ArrowRight size={18} strokeWidth={2} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ProgramCalculator;
