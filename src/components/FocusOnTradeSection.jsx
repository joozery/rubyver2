import React from 'react';
import { CheckCircle, MessageCircle, Shield, CreditCard } from 'lucide-react';

const FocusOnTradeSection = () => {
    return (
        <section className="w-full bg-[#f8f9fa] py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-black uppercase leading-tight mb-2">
                        <span className="text-[#ff0000]">Focus on the trade</span>
                    </h2>
                    <h3 className="text-4xl lg:text-6xl font-black uppercase leading-tight">
                        We handle everything else.
                    </h3>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

                    {/* Feature 1: Licensed CFD Broker */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="mb-6">
                            <CheckCircle className="w-12 h-12 text-[#0033ff]" strokeWidth={2} />
                        </div>
                        <h4 className="text-xl font-black uppercase mb-3 tracking-tight">
                            LICENSED CFD BROKER
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We operate under an FSC license and follow global financial guidelines.
                        </p>
                    </div>

                    {/* Feature 2: 24/7 Support */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="mb-6">
                            <MessageCircle className="w-12 h-12 text-[#0033ff]" strokeWidth={2} />
                        </div>
                        <h4 className="text-xl font-black uppercase mb-3 tracking-tight">
                            24/7 SUPPORT
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our team, proficient in multiple languages, responds in under a minute. Arrange for a callback if you prefer to speak.
                        </p>
                    </div>

                    {/* Feature 3: Data Security */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="mb-6">
                            <Shield className="w-12 h-12 text-[#0033ff]" strokeWidth={2} />
                        </div>
                        <h4 className="text-xl font-black uppercase mb-3 tracking-tight">
                            DATA SECURITY
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Your data is secure. We protect accounts and personal information from unauthorized access and theft.
                        </p>
                    </div>

                    {/* Feature 4: Negative Balance Protection */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="mb-6">
                            <CreditCard className="w-12 h-12 text-[#0033ff]" strokeWidth={2} />
                        </div>
                        <h4 className="text-xl font-black uppercase mb-3 tracking-tight">
                            NEGATIVE BALANCE PROTECTION
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            With margin call and stop out, your balance will never become negative.
                        </p>
                    </div>

                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-[#ff0000] hover:bg-red-700 text-white font-bold py-5 px-16 rounded-xl text-xl transition-all shadow-xl">
                        Join RUBY
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FocusOnTradeSection;
