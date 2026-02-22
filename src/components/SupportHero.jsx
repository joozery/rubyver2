import React from 'react';
import supportBg from '../assets/support/support.jpg';

const SupportHero = () => {
    return (
        <section
            className="w-full bg-cover bg-center bg-no-repeat min-h-[400px] xl:min-h-[500px] flex items-center relative"
            style={{ backgroundImage: `url(${supportBg})` }}
        >
            <div className="container mx-auto px-6 lg:px-16 xl:px-24 mb-16 lg:mb-24 z-10 relative">
                <div className="max-w-[700px] xl:max-w-[800px]">
                    <h1 className="text-white font-black text-[40px] md:text-[50px] lg:text-[60px] uppercase tracking-wide mb-4">
                        HELP CENTER
                    </h1>
                    <p className="text-white text-base md:text-lg lg:text-[20px] leading-[1.6] font-medium max-w-[700px]">
                        Our Help Center is designed to give you reliable guidance and smooth support at every stage of your Forex trading experience. Whether you are new to the market or an advanced trader, this is where you can quickly find straightforward information and solutions to your questions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SupportHero;
