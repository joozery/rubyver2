import React from 'react';

const DepositFeatureCard = ({ text }) => {
    return (
        <div className="w-80 h-60 bg-gray-50 rounded-[20px] border border-lime-600 p-8 flex items-center justify-center text-center transition-transform hover:scale-[1.02] cursor-default shadow-lg">
            <h4 className="text-black font-black text-xl lg:text-[22px] leading-tight uppercase tracking-tight">
                {text}
            </h4>
        </div>
    );
};

export default DepositFeatureCard;
