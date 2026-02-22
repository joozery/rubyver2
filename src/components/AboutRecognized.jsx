import React from 'react';
import mostImg from '../assets/about/most.png';

const AboutRecognized = () => {
    return (
        <section className="bg-gradient-to-b from-[#343434] to-[#3E3E3E] py-20 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-16 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-white font-black text-[32px] lg:text-[46px] uppercase leading-tight mb-4">
                        WE'RE RECOGNIZED <span className="text-[#e42e2e]">GLOBALLY</span>
                    </h2>
                    <p className="text-white text-base lg:text-[22px] font-medium leading-relaxed">
                        Our 100+ trophies are a testament to the trust, loyalty, and respect our clients and the global trading community have placed in us.
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-center">
                    <button className="bg-[#e42e2e] hover:bg-red-600 text-white font-semibold text-lg px-10 py-3 rounded-md transition-colors shadow-lg">
                        Trade with RUBY
                    </button>
                </div>
            </div>

            {/* Awards Image replacing the SVG lists */}
            <div className="w-full flex justify-center mt-12 relative z-0">
                <img
                    src={mostImg}
                    alt="Ruby Global Awards"
                    className="w-full object-contain pointer-events-none select-none max-w-[1400px] mix-blend-lighten"
                />
            </div>
        </section>
    );
};

export default AboutRecognized;
