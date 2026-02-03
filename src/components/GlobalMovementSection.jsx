import React from 'react';
import { Globe, Users, Trophy } from 'lucide-react';
import bgMovement from '../assets/bgmovement.png';

const GlobalMovementSection = () => {
    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden text-white text-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${bgMovement})`,
                    filter: 'brightness(0.6)'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-black uppercase mb-12 tracking-tight">
                    JOIN A GLOBAL MOVEMENT
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
                    {/* StatCard 1 */}
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-lg flex items-center gap-4 text-left">
                        <div className="bg-white/10 p-3 rounded-full">
                            <Globe size={32} className="text-white" />
                        </div>
                        <div>
                            <div className="text-xl lg:text-2xl font-black uppercase leading-tight">150+ COUNTRIES</div>
                            <div className="text-sm text-gray-400">with Ruby presence</div>
                        </div>
                    </div>

                    {/* StatCard 2 */}
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-lg flex items-center gap-4 text-left">
                        <div className="bg-white/10 p-3 rounded-full">
                            <Users size={32} className="text-white" />
                        </div>
                        <div>
                            <div className="text-xl lg:text-2xl font-black uppercase leading-tight">27+ MILLION CUSTOMERS</div>
                            <div className="text-sm text-gray-400">already members of our community</div>
                        </div>
                    </div>

                    {/* StatCard 3 */}
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-lg flex items-center gap-4 text-left">
                        <div className="bg-white/10 p-3 rounded-full">
                            <Trophy size={32} className="text-white" />
                        </div>
                        <div>
                            <div className="text-xl lg:text-2xl font-black uppercase leading-tight">100+ AWARDS</div>
                            <div className="text-sm text-gray-400">from international organizations</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-[#ff0000] hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all shadow-xl">
                        Open Account
                    </button>
                    <button className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all shadow-xl border border-white/10">
                        Open Demo Account
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GlobalMovementSection;
