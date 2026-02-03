import React from 'react';
import { ChevronRight } from 'lucide-react';

const ImpactSection = () => {
    return (
        <section className="w-full bg-[#f4f4f4] pt-16 pb-24">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-5xl lg:text-6xl font-black uppercase leading-none text-black">
                            MAKE AN IMPACT <br />
                            <span className="text-[#ff0000]">WITH RUBY</span>
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl ml-auto">
                            Ruby is more than just a broker, we are deeply involved in community support, collaborating with local charities to drive genuine, meaningful change.
                        </p>
                    </div>
                </div>

                {/* Large Banner Image */}
                <div className="w-full h-[300px] lg:h-[500px] rounded-lg overflow-hidden mb-16 relative">
                    {/* Placeholder for the main charity image (man and girl) */}
                    <img
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000"
                        alt="Ruby Community Impact"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Divider with Button */}
                <div className="relative border-t border-gray-300 mb-16">
                    <div className="absolute top-0 right-0 -mt-5 bg-gray-700 hover:bg-black text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-colors">
                        <ChevronRight size={20} />
                    </div>
                </div>

                {/* Sub-Header */}
                <h3 className="text-2xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
                    Ruby supports your trading journey with a genuine care for people.
                </h3>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">

                    {/* Left Card */}
                    <div className="flex flex-col">
                        <div className="relative h-[250px] lg:h-[300px] rounded-lg overflow-hidden mb-6">
                            <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded shadow-sm z-10">
                                Thailand
                            </span>
                            <img
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000"
                                alt="Charity Event Thailand"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                            For Ruby, true success includes making a difference. We partner with local groups and charitable organizations to support the people who need it most.
                        </p>
                    </div>

                    {/* Right Card */}
                    <div className="flex flex-col">
                        <div className="relative h-[250px] lg:h-[300px] rounded-lg overflow-hidden mb-6">
                            <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded shadow-sm z-10">
                                Thailand
                            </span>
                            <img
                                src="https://images.unsplash.com/photo-1617450365226-9bf28c5d66e6?auto=format&fit=crop&q=80&w=1000"
                                alt="Donation Supplies"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                            Ruby is dedicated to more than trading — we’re committed to supporting the communities around us. Through meaningful social initiatives, we work to create positive change where it truly matters."
                        </p>
                    </div>
                </div>

                {/* Bottom Button */}
                <div className="flex justify-center">
                    <button className="bg-[#ff0000] hover:bg-red-700 text-white font-bold py-4 px-12 rounded shadow-lg shadow-red-900/20 text-xl transition-all">
                        Join RUBY
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ImpactSection;
