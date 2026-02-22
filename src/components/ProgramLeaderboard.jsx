import React from 'react';

const leaders = [
    {
        rank: "TOP 1 IB",
        medal: "🥇",
        name: "NAME",
        commission: "+ $371 034",
        asset: "XAUUSD"
    },
    {
        rank: "TOP 2 IB",
        medal: "🥈",
        name: "NAME",
        commission: "+ $203 653",
        asset: "US100"
    },
    {
        rank: "TOP 3 IB",
        medal: "🥉",
        name: "NAME",
        commission: "+ $192 878",
        asset: "XAUUSD"
    },
    {
        rank: "TOP 4 IB",
        medal: null,
        name: "NAME",
        commission: "+ $371 034",
        asset: "XAUUSD"
    },
    {
        rank: "TOP 5 IB",
        medal: null,
        name: "NAME",
        commission: "+ $203 653",
        asset: "US100"
    },
    {
        rank: "TOP 6 IB",
        medal: null,
        name: "NAME",
        commission: "+ $192 878",
        asset: "XAUUSD"
    }
];

const ProgramLeaderboard = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6 lg:px-16 max-w-[1240px]">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-black text-[36px] md:text-[48px] uppercase tracking-wide leading-tight mb-6">
                        <span className="text-black block">PARTNER WITH RUBY</span>
                        <span className="text-[#f13a04] block">LEAD YOUR REGION</span>
                    </h2>
                    <p className="text-[#333333] text-[18px] md:text-[22px] font-medium max-w-[800px] mx-auto leading-relaxed">
                        Meet the top-performing RUBY IBs in your region —<br className="hidden md:block" />
                        updated monthly. See who's leading and what drives<br className="hidden md:block" />
                        their performance.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {leaders.map((leader, index) => (
                        <div key={index} className="bg-[#bcbcbc] rounded-3xl p-8 pb-10 flex flex-col justify-between border border-gray-300 shadow-sm hover:shadow-md transition-shadow">

                            {/* Top row */}
                            <div className="flex justify-between items-center mb-10">
                                <div className="flex items-center gap-2">
                                    {leader.medal && (
                                        <span className="text-[20px]">{leader.medal}</span>
                                    )}
                                    <h3 className="text-white font-bold text-[22px] uppercase">
                                        {leader.rank}
                                    </h3>
                                </div>
                                <span className="text-white text-[11px] font-bold uppercase tracking-wider opacity-80">
                                    {leader.name}
                                </span>
                            </div>

                            {/* Bottom row */}
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-white text-[10px] font-bold uppercase mb-1 opacity-80">
                                        Commission earned
                                    </p>
                                    <p className="text-white font-black text-[24px]">
                                        {leader.commission}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-white text-[10px] font-bold uppercase mb-1 opacity-80">
                                        Top traded asset
                                    </p>
                                    <p className="text-white font-black text-[24px]">
                                        {leader.asset}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramLeaderboard;
