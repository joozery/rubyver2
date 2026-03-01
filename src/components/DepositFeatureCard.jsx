import React from 'react';

const DepositFeatureCard = ({ text }) => {
    return (
        <div className="w-full h-auto min-h-[90px] sm:min-h-[110px] lg:h-[220px] bg-white rounded-xl lg:rounded-[20px] border-2 border-[#00CC00] p-3 lg:p-6 flex items-center justify-center text-center transition-transform hover:scale-[1.02] cursor-default shadow-lg shadow-black/10">
            <h4 className="text-black font-black text-[10px] sm:text-xs lg:text-[18px] xl:text-[20px] leading-tight uppercase tracking-tight">
                {text}
            </h4>
        </div>
    );
};

export default DepositFeatureCard;
