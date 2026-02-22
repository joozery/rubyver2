import React from 'react';
import aboutImg from '../assets/about/about.png';

const AboutHero = () => {
    return (
        <section className="bg-[#0E0E0E] relative overflow-hidden">
            {/* Top part: text left + image right */}
            <div className="relative min-h-[380px] lg:min-h-[420px] flex items-center">
                {/* about.png — top right decorative */}
                <img
                    src={aboutImg}
                    alt="About RUBY"
                    className="absolute top-0 right-0 h-full w-auto object-contain object-top pointer-events-none select-none"
                />

                {/* Text Content */}
                <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16">
                    <div className="max-w-lg">
                        <h1 className="text-[40px] lg:text-[56px] font-black uppercase leading-tight text-white mb-5">
                            WE ARE <span className="text-[#FF0000]">RUBY</span>
                        </h1>
                        <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-8">
                            We operate under several locally authorized RUBY licenses, ensuring that traders receive dependable guidance and continuous support throughout every stage of their trading journey.
                        </p>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold w-[240px] py-3 rounded-lg text-sm transition-colors">
                            Join us
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom tagline */}
            <div className="py-10 text-center">
                <p className="text-white font-black text-[28px] lg:text-[48px] uppercase leading-tight tracking-tight">
                    WE EMPOWER TRADERS<br />
                    <span className="text-[#FF0000]">TO ACHIEVE THEIR AMBITIONS</span>
                </p>
            </div>
        </section>
    );
};

export default AboutHero;
