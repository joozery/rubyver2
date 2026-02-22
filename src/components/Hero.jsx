import React, { useState, useEffect } from 'react';
import heroBg1 from '../assets/herosection/backgorund.jpeg';
import heroBg2 from '../assets/herosection/Banner-home-Top2.jpg';
import heroBg3 from '../assets/herosection/Banner-home-Top-3.jpg';

const Hero = () => {
    const images = [heroBg1, heroBg2, heroBg3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative h-[587px] w-full flex items-center pt-[81px] overflow-hidden bg-white">
            {/* 
              Background Image Slider
            */}
            <div className="absolute inset-0 z-0 flex justify-end">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Trading Background ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                ))}
            </div>



            {/* Content Container */}
            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center h-full">
                <div className="lg:w-1/2 pt-10 lg:pt-0">
                    <h1 className="flex flex-col mb-4">
                        <span className="text-[40px] lg:text-[75px] font-black leading-[0.9] text-red-600 tracking-tight">
                            UNCOVER YOUR
                        </span>
                        <span className="text-[40px] lg:text-[75px] font-black leading-[0.9] text-red-600 tracking-tight">
                            POTENTIAL.
                        </span>
                        <span className="text-[24px] lg:text-[52px] font-bold mt-2 tracking-tight" style={{ color: '#817C7B' }}>
                            TRADE WITH RUBY
                        </span>
                    </h1>

                    <p className="text-base lg:text-lg max-w-xl mb-10 leading-snug font-medium" style={{ color: '#817C7B' }}>
                        Everything you need for seamless, efficient trading. Partner with an established online broker and take control of your financial future.
                    </p>

                    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-0 w-full lg:w-auto">
                        <button className="bg-[#d33027] hover:bg-red-700 text-white px-8 py-3 rounded-[10px] lg:rounded-l-2xl lg:rounded-r-none font-bold text-lg transition-all active:scale-[0.98] shadow-xl shadow-red-900/40 z-10 w-full lg:w-auto">
                            Open Account
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-gray-500 px-8 py-3 rounded-[10px] lg:rounded-r-2xl lg:rounded-l-none font-bold text-lg border border-[#d33027] lg:border-l-0 lg:-ml-px transition-all active:scale-[0.98] shadow-xl shadow-black/5 w-full lg:w-auto">
                            Open Demo Account
                        </button>
                    </div>
                </div>

                {/* Right side focus for the image */}
                <div className="lg:w-1/2 h-full"></div>
            </div>
        </section>
    );
};

export default Hero;
