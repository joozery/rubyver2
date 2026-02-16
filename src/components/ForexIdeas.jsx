import React from 'react';

const ForexIdeas = () => {
    const articles = Array(6).fill(null).map((_, i) => ({
        id: i,
        title: "Update XAUUSD Trading Strategy for November 6, 2025",
        author: "NAME LASTNAME",
        date: "a month ago"
    }));

    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-white/10 pb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-[32px] lg:text-[48px] font-black uppercase text-white leading-tight mb-4 tracking-tight">
                            IDEAS TO EXCEL IN TRADING
                        </h2>
                        <p className="text-gray-400 text-lg font-medium">
                            By traders, for traders. Stay up to date with market news and analytics.
                        </p>
                    </div>
                    <button className="border border-white/30 text-white px-8 py-3 rounded text-sm font-bold hover:bg-white hover:text-black transition-all tracking-wider uppercase">
                        JOIN RUBY
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {articles.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <h3 className="text-white text-xl font-bold mb-6 leading-snug group-hover:text-[#FF0000] transition-colors line-clamp-2">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-400 shrink-0"></div>
                                <div className="text-sm font-bold uppercase tracking-wide">
                                    <span className="text-white mr-2">{item.author}</span>
                                    <span className="text-gray-500">: {item.date}</span>
                                </div>
                            </div>
                            <div className="mt-8 border-b border-white/10 w-full group-hover:border-[#FF0000]/50 transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForexIdeas;
