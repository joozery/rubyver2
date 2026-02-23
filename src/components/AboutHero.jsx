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
                    <div className="max-w-2xl">
                        <h1 className="text-[40px] lg:text-[56px] font-black uppercase leading-tight text-white mb-5">
                            WE ARE <span className="text-[#FF0000]">RUBY</span>
                        </h1>
                        <div className="text-white/80 text-sm lg:text-base leading-relaxed mb-8 whitespace-pre-line space-y-4">
                            <p>
                                Ruby FX เป็นผู้ให้บริการซื้อขาย Forex และ CFD ที่มุ่งเน้นการให้บริการด้านตราสารอนุพันธ์ทางการเงิน โดยเฉพาะตลาดทองคำ (XAUUSD) และคู่เงินหลัก ภายใต้ระบบการซื้อขายที่มีเสถียรภาพ โปร่งใส และยึดหลักการบริหารความเสี่ยงเป็นสำคัญ
                            </p>
                            <p>
                                บริษัทดำเนินงานภายใต้ SERENE CAPITAL (PTY) LTD ซึ่งเป็นนิติบุคคลที่จดทะเบียนถูกต้องตามกฎหมาย และได้รับอนุญาตให้ดำเนินธุรกิจด้านบริการทางการเงิน
                            </p>

                            <div className="pt-2 border-t border-white/10 mt-4">
                                <h3 className="text-white font-bold mb-2">Regulatory & License Information</h3>
                                <p>
                                    SERENE CAPITAL (PTY) LTD ได้รับอนุญาตและอยู่ภายใต้การกำกับดูแลของ<br />
                                    Financial Sector Conduct Authority (FSCA), South Africa
                                </p>
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    <li>ประเภทใบอนุญาต: Financial Service Provider (FSP)</li>
                                    <li>เลขที่ใบอนุญาต (FSP No.): 55069</li>
                                    <li>สิทธิทางธุรกิจ: การให้บริการซื้อขายตราสารอนุพันธ์ทางการเงิน</li>
                                    <li>สถานะ: อยู่ภายใต้การกำกับดูแลตามกฎหมาย</li>
                                </ul>
                                <p className="mt-2">
                                    ที่อยู่จดทะเบียน:<br />
                                    39 Doak Street, Hazel Park<br />
                                    Germiston, Gauteng 1401<br />
                                    South Africa
                                </p>
                            </div>

                            <p className="mt-4 italic text-xs lg:text-sm">
                                Ruby FX ดำเนินงานภายใต้กรอบกฎหมายและข้อกำหนดของหน่วยงานกำกับดูแลที่เกี่ยวข้อง รวมถึงนโยบายด้าน AML (Anti-Money Laundering), KYC (Know Your Customer) และมาตรการบริหารความเสี่ยง เพื่อสร้างความโปร่งใสและความมั่นใจแก่ลูกค้า
                            </p>

                            <div className="pt-2 border-t border-white/10 mt-4">
                                <h3 className="text-white font-bold mb-1 uppercase text-xs">Risk Disclosure</h3>
                                <p className="text-xs lg:text-sm text-white/60">
                                    การซื้อขายผลิตภัณฑ์ที่มีเลเวอเรจ เช่น Forex และ CFD มีความเสี่ยงสูง และอาจไม่เหมาะสมสำหรับนักลงทุนทุกประเภท ผู้ลงทุนควรศึกษาข้อมูลให้ครบถ้วน ทำความเข้าใจความเสี่ยง และพิจารณาความสามารถในการรับความเสี่ยงก่อนตัดสินใจลงทุน
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://client.rubyfxtrade.com/register/trader"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 hover:bg-red-700 text-white font-bold w-[240px] py-3 rounded-lg text-sm transition-colors flex items-center justify-center text-center"
                        >
                            Join us
                        </a>
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
