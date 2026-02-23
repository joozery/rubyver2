import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "nav": {
                "trading": "Trading",
                "markets": "Markets",
                "analytics_edu": "Analytics & Education",
                "company": "Company",
                "partnership": "Partnership Programs",
                "conditions": "Trading Conditions",
                "deposits_withdrawals": "Deposits & Withdrawals",
                "platforms": "Platforms",
                "ruby_app": "RUBY APP",
                "metatrader_5": "METATRADER 5",
                "market_analytics": "Market Analytics",
                "ruby_academy": "RUBY Academy",
                "about": "About RUBY",
                "support": "Support",
                "ib_program": "RUBY IB Program",
                "multi_level": "RUBY Multi-level Partnership",
                "loyalty": "RUBY Forex Loyalty",
                "open_account": "Open Account",
                "login": "Login"
            },
            "home": {
                "hero": {
                    "title_1": "UNCOVER YOUR",
                    "title_2": "POTENTIAL.",
                    "subtitle": "TRADE WITH RUBY",
                    "desc": "Everything you need for seamless, efficient trading. Partner with an established online broker and take control of your financial future.",
                    "open_live": "Open Account",
                    "open_demo": "Open Demo Account"
                },
                "stats": {
                    "title": "Exceptional \n Trading Conditions",
                    "commission": "Trading commission",
                    "leverage": "Maximum Leverage",
                    "execution": "Order Execution Speed",
                    "deposit": "Minimum Account Deposit",
                    "spread": "Spreads Starting At"
                },
                "besharp": {
                    "title": "Be Sharp, \n Trade Sharper",
                    "desc": "We understand that trading is difficult, and only a small number of traders succeed. We are here to help change that.",
                    "btn": "Trade with RB",
                    "card1_title": "Sharpen Your \n Strategy",
                    "card1_desc": "Stay ahead in the market with our comprehensive analytics: daily entries, technical analysis, real-time notifications, and more.",
                    "card1_btn1": "MARKET INSIGHTS",
                    "card1_btn2": "TRADE IDEA",
                    "card2_title": "Stay \n Informed",
                    "card2_desc": "Receive daily VIP Analytics with essential news, trade ideas, and expert insights from RUBY.",
                    "card2_btn": "LEARN MORE",
                    "level_title": "Level Up Your Knowledge",
                    "level_desc": "Our structured approach to sharpening your trading expertise. Trading courses are designed by seasoned market professionals for traders at every skill level.",
                    "level_item1": "Beginner Courses",
                    "level_item2": "Advanced Lessons",
                    "level_item3": "Tutorials",
                    "level_item4": "Trader’s Blog"
                },
                "community": {
                    "title": "JOIN THE RUBY COMMUNITY",
                    "desc": "Connect and grow with thousands of engaged enthusiasts and industry professionals in the Forex trading world.",
                    "row1_text": "We attend major forex exhibitions and host exclusive events to connect directly with our trading community.",
                    "row2_title": "Join Online Sessions with RB Analysts.",
                    "row2_btn": "Watch live streams",
                    "row2_card_desc": "Link up with traders on our social media channels. Network online to stay on top of market updates, economic releases, and emerging trading trends.",
                    "row3_title": "United With Partners",
                    "row3_desc": "Over 700,000 partners put their trust in us through RUBY Partnership Programs. Together, we form a community focused on growth within the trading world.",
                    "partners": "Partners",
                    "commission": "Commission paid monthly",
                    "join_btn": "Join RUBY"
                },
                "platforms": {
                    "title1": "Strengthen Your Edge",
                    "title2": "With Our Platforms",
                    "desc": "Transform your experience with our mobile platform. Deposit, withdraw, and manage trades effortlessly on the move.",
                    "start": "Start Trading",
                    "execution_title": "Fast and stable order execution,",
                    "execution_desc": "starting from 0.01 seconds. Zero requotes. VPS hosting is available for optimal performance.",
                    "start_btn": "Start trading",
                    "google_play": "GET IT ON",
                    "app_store": "Download on the",
                    "tabs": {
                        "popular": "Popular",
                        "currency": "Currency pairs",
                        "metals": "Metals",
                        "energies": "Energies",
                        "indices": "Indices",
                        "stock": "Stock"
                    }
                },
                "promotions": {
                    "promotion_label": "PROMOTION",
                    "title1": "FOREX",
                    "title2": "PROMOTIONS",
                    "subtitle": "Weekly Promotions from Ruby FX \n Trade Smart, Gain More",
                    "learn_more": "Learn more",
                    "join_event": "Join Event",
                    "more_promo": "More Promotion",
                    "stay_bold": "STAY BOLD, \n STAY SURE.",
                    "stay_bold_desc": "Get inspired by top RubyFX traders and their performance to aim for the next leaderboard position.",
                    "btn_confidence": "Trade with Confidence",
                    "box1_title": "Trade with Confidence",
                    "box1_desc": "Ruby operates under the FSC (Belize) license, helping traders grow stronger at every step of their trading journey.",
                    "box2_title": "200+ payment methods",
                    "box2_desc": "Deposit and withdraw via local banks & global methods. Instant automated withdrawals available.",
                    "box3_title": "24/7 support",
                    "box3_desc": "Get a reply in less than a minute or schedule a callback."
                },
                "impact": {
                    "thailand": "Thailand",
                    "title1": "MAKE AN IMPACT",
                    "title2": "WITH RUBY",
                    "desc": "Ruby is more than just a broker, we are deeply involved in community support, collaborating with local charities to drive genuine, meaningful change.",
                    "sub_title": "Ruby supports your trading journey with a genuine care for people.",
                    "card1_desc": "For Ruby, true success includes making a difference. We partner with local groups and charitable organizations to support the people who need it most.",
                    "card2_desc": "Ruby is dedicated to more than trading — we’re committed to supporting the communities around us. Through meaningful social initiatives, we work to create positive change where it truly matters."
                },
                "infrastructure": {
                    "title": "YOU FOCUS ON TRADING. \n WE HANDLE THE INFRASTRUCTURE",
                    "open_live": "Open Account",
                    "open_demo": "Open Demo Account"
                }
            },
            "footer": {
                "social_media": "RUBY ad social media",
                "get_it_on": "Get it on the",
                "get_mt4": "Get MT4 on the",
                "get_mt5": "Get MT5 on the",
                "legal_1": "RUBYFX GLOBAL LIMITED is a private limited company registered in England and Wales under company number 16723963. RUBYFX GLOBAL LIMITED operates the Ruby FX brand and manages its online services through:",
                "legal_2": "RUBYFX GLOBAL LIMITED is authorized by the Financial Sector Conduct Authority (FSCA) in South Africa as a Financial Service Provider FSP : 1234567890. RUBYFX GLOBAL LIMITED Operates under",
                "legal_3": "Ruby FX operates under SERENE CAPITAL (PTY) LTD, authorized and regulated by the Financial Sector Conduct Authority (FSCA), South Africa (FSP No. 55069). Trading leveraged products involves high risk and may result in the loss of your invested capital.",
                "important_notice": "Important Notice",
                "notice_text": "RUBYFX GLOBAL LIMITED is registered as a private limited company under the laws of England and Wales. This registration confirms the company's legal establishment; however, it does not constitute authorization or licensing from any financial regulatory authority in the United Kingdom, including the Financial Conduct Authority (FCA). Clients should carefully review all regulatory information and risk disclosures provided by Ruby FX before engaging in financial or trading activities. Trading leveraged financial products involves a high level of risk and may not be suitable for all investors."
            },
            "trading_footer": {
                "title_1": "NEED MORE",
                "title_2": "INFORMATION?",
                "faqs": [
                    {
                        "question": "What instruments can I trade with RUBY?",
                        "answer": "You can trade over 550+ CFD instruments including Forex, Metals, Indices, and Energies."
                    },
                    {
                        "question": "What are RUBY market trading hours?",
                        "answer": "Trading hours vary by market. Generally, Forex is available 24/5 from Monday to Friday."
                    },
                    {
                        "question": "What spreads are available?",
                        "answer": "We offer tight floating spreads starting from as low as 0.7 pips."
                    },
                    {
                        "question": "What are the leverage and margin rules?",
                        "answer": "We provide flexible leverage up to 1:3000. Margin call is at 40% and Stop out is at 20%."
                    }
                ]
            }
        }
    },
    th: {
        translation: {
            "nav": {
                "trading": "การเทรด",
                "markets": "ตลาด",
                "analytics_edu": "บทวิเคราะห์และการศึกษา",
                "company": "บริษัท",
                "partnership": "โปรแกรมพันธมิตร",
                "conditions": "เงื่อนไขการเทรด",
                "deposits_withdrawals": "การฝากและถอนเงิน",
                "platforms": "แพลตฟอร์ม",
                "ruby_app": "RUBY APP",
                "metatrader_5": "METATRADER 5",
                "market_analytics": "บทวิเคราะห์ตลาด",
                "ruby_academy": "RUBY Academy",
                "about": "เกี่ยวกับ RUBY",
                "support": "ฝ่ายสนับสนุน",
                "ib_program": "RUBY IB โปรแกรม",
                "multi_level": "RUBY พาร์ทเนอร์หลายระดับ",
                "loyalty": "RUBY ลอยัลตี้โปรแกรม",
                "open_account": "เปิดบัญชี",
                "login": "เข้าสู่ระบบ"
            },
            "home": {
                "hero": {
                    "title_1": "ปลดล็อก",
                    "title_2": "ศักยภาพของคุณ",
                    "subtitle": "เทรดกับ RUBY",
                    "desc": "ทุกสิ่งที่คุณต้องการเพื่อการเทรดที่ราบรื่นและมีประสิทธิภาพ ร่วมเป็นพาร์ทเนอร์กับโบรกเกอร์ออนไลน์ที่มั่นคงและควบคุมอนาคตการเงินของคุณ",
                    "open_live": "เปิดบัญชีจริง",
                    "open_demo": "เปิดบัญชีทดลอง"
                },
                "stats": {
                    "title": "เงื่อนไขการเทรด \n ที่ยอดเยี่ยม",
                    "commission": "ค่าคอมมิชชั่นการเทรด",
                    "leverage": "เลเวอเรจสูงสุด",
                    "execution": "ความเร็วในการส่งคำสั่ง",
                    "deposit": "เงินฝากขั้นต่ำ",
                    "spread": "สเปรดเริ่มต้นที่"
                },
                "besharp": {
                    "title": "เฉียบคมกว่า \n เทรดอย่างเหนือชั้น",
                    "desc": "เราเข้าใจว่าการเทรดนั้นยาก และมีเพียงส่วนน้อยที่ประสบความสำเร็จ เราอยู่ที่นี่เพื่อช่วยเปลี่ยนแปลงสิ่งนั้น",
                    "btn": "เทรดกับ RUBY",
                    "card1_title": "ลับกลยุทธ์ \n ของคุณ",
                    "card1_desc": "ก้าวล้ำนำตลาดด้วยบทวิเคราะห์ที่ครอบคลุม: ข้อมูลรายวัน, วิเคราะห์ปัจจัยทางเทคนิค และการแจ้งเตือนแบบเรียลไทม์",
                    "card1_btn1": "ข้อมูลเชิงลึกตลาด",
                    "card1_btn2": "ไอเดียการเทรด",
                    "card2_title": "เกาะติด \n ข้อมูลข่าวสาร",
                    "card2_desc": "รับบทวิเคราะห์ระดับ VIP รายวัน พร้อมข่าวสารสำคัญ ไอเดียการเทรด และข้อมูลจากผู้เชี่ยวชาญของ RUBY",
                    "card2_btn": "เรียนรู้เพิ่มเติม",
                    "level_title": "ยกระดับความรู้ของคุณ",
                    "level_desc": "แนวทางที่เป็นระบบเพื่อเสริมทักษะการเทรดของคุณ คอร์สเรียนออกแบบโดยมืออาชีพสำหรับเทรดเดอร์ทุกระดับ",
                    "level_item1": "คอร์สสำหรับมือใหม่",
                    "level_item2": "บทเรียนขั้นสูง",
                    "level_item3": "วิดีโอสอนการใช้งาน",
                    "level_item4": "บล็อกเทรดเดอร์"
                },
                "community": {
                    "title": "เข้าร่วมชุมชน RUBY",
                    "desc": "เชื่อมต่อและเติบโตไปพร้อมกับเพื่อนร่วมอาชีพและผู้เชี่ยวชาญในโลกของการเทรด Forex",
                    "row1_text": "เราเข้าร่วมงานจัดแสดง Forex ระดับโลกและจัดกิจกรรมสุดพิเศษเพื่อเชื่อมต่อกับชุมชนของเราโดยตรง",
                    "row2_title": "เข้าร่วมเซสชันออนไลน์กับนักวิเคราะห์ RUBY",
                    "row2_btn": "รับชมไลฟ์สด",
                    "row2_card_desc": "เชื่อมต่อกับเทรดเดอร์ผ่านโซเชียลมีเดียของเรา ติดตามการอัปเดตตลาด ข่าวเศรษฐกิจ และเทรนด์การเทรดใหม่ๆ",
                    "row3_title": "ร่วมมือกับพันธมิตร",
                    "row3_desc": "พาร์ทเนอร์กว่า 700,000 รายให้ความไว้วางใจผ่านโปรแกรมพันธมิตรของ RUBY เราสร้างชุมชนที่มุ่งเน้นการเติบโตร่วมกัน",
                    "partners": "พาร์ทเนอร์",
                    "commission": "ค่าคอมมิชชั่นที่จ่ายรายเดือน",
                    "join_btn": "เข้าร่วม RUBY"
                },
                "platforms": {
                    "title1": "เสริมความได้เปรียบ",
                    "title2": "ด้วยแพลตฟอร์มของเรา",
                    "desc": "เปลี่ยนประสบการณ์ของคุณด้วยแพลตฟอร์มมือถือ ฝาก ถอน และจัดการออเดอร์ได้อย่างง่ายดายทุกที่ทุกเวลา",
                    "start": "เริ่มการเทรด",
                    "execution_title": "ส่งคำสั่งรวดเร็วและเสถียร",
                    "execution_desc": "เริ่มต้นเพียง 0.01 วินาที ไม่มีรีโควต พร้อมบริการ VPS เพื่อประสิทธิภาพสูงสุด",
                    "start_btn": "เริ่มเทรดเลย",
                    "google_play": "ดาวน์โหลดได้ที่",
                    "app_store": "ดาวน์โหลดจาก",
                    "tabs": {
                        "popular": "ยอดนิยม",
                        "currency": "คู่สกุลเงิน",
                        "metals": "โลหะเงิน",
                        "energies": "พลังงาน",
                        "indices": "ดัชนี",
                        "stock": "หุ้น"
                    }
                },
                "promotions": {
                    "promotion_label": "โปรโมชั่น",
                    "title1": "โปรโมชั่น",
                    "title2": "FOREX",
                    "subtitle": "โปรโมชั่นรายสัปดาห์จาก Ruby FX \n เทรดอย่างชาญฉลาด รับผลตอบแทนที่มากกว่า",
                    "learn_more": "เรียนรู้เพิ่มเติม",
                    "join_event": "เข้าร่วมกิจกรรม",
                    "more_promo": "โปรโมชั่นเพิ่มเติม",
                    "stay_bold": "มั่นใจทุกย่างก้าว \n เทรดอย่างแม่นยำ",
                    "stay_bold_desc": "รับแรงบันาลใจจากเทรดเดอร์ชั้นนำของ RubyFX และผลงานของพวกเขาเพื่อก้าวสู่ตำแหน่งผู้นำ",
                    "btn_confidence": "เทรดด้วยความมั่นใจ",
                    "box1_title": "เทรดอย่างมั่นใจ",
                    "box1_desc": "Ruby ดำเนินการภายใต้ใบอนุญาต FSC (Belize) ช่วยให้เทรดเดอร์เติบโตอย่างมั่นคงในทุกย่างก้าว",
                    "box2_title": "200+ ช่องทางชำระเงิน",
                    "box2_desc": "ฝากและถอนผ่านธนาคารท้องถิ่นและช่องทางระดับโลก พร้อมระบบถอนเงินอัตโนมัติทันที",
                    "box3_title": "ดูแล 24/7",
                    "box3_desc": "ตอบกลับภายในไม่กี่นาทีหรือนัดหมายให้เราโทรกลับหาคุณ"
                },
                "impact": {
                    "thailand": "ประเทศไทย",
                    "title1": "สร้างการเปลี่ยนแปลง",
                    "title2": "ร่วมกับ RUBY",
                    "desc": "Ruby เป็นมากกว่าโบรกเกอร์ เรามีส่วนร่วมในการสนับสนุนชุมชน ร่วมมือกับองค์กรการกุศลเพื่อขับเคลื่อนการเปลี่ยนแปลงที่แท้จริง",
                    "sub_title": "Ruby สนับสนุนการเดินทางของคุณด้วยความใส่ใจที่แท้จริง",
                    "card1_desc": "สำหรับ Ruby ความสำเร็จที่แท้จริงคือการแบ่งปัน เราเป็นพันธมิตรกับกลุ่มท้องถิ่นและองค์กรการกุศลเพื่อช่วยเหลือผู้ที่ต้องการมากที่สุด",
                    "card2_desc": "Ruby มุ่งมั่นมากกว่าแค่การเทรด — เราทุ่มเทเพื่อพัฒนาสังคม ผ่านโครงการสร้างสรรค์ต่างๆ เพื่อสร้างผลลัพธ์ที่ดีอย่างยั่งยืน"
                },
                "infrastructure": {
                    "title": "คุณโฟกัสกับการเทรด \n เราดูแลระบบโครงสร้างพื้นฐานให้คุณเอง",
                    "open_live": "เปิดบัญชีจริง",
                    "open_demo": "เปิดบัญชีทดลอง"
                }
            },
            "footer": {
                "social_media": "RUBY โซเชียลมีเดีย",
                "get_it_on": "ดาวน์โหลดได้จาก",
                "get_mt4": "ดาวน์โหลด MT4 ได้ที่",
                "get_mt5": "ดาวน์โหลด MT5 ได้ที่",
                "legal_1": "RUBYFX GLOBAL LIMITED เป็นบริษัทจำกัดส่วนบุคคลที่จดทะเบียนในอังกฤษและเวลส์ ภายใต้หมายเลขบริษัท 16723963. RUBYFX GLOBAL LIMITED ดำเนินการแบรนด์ Ruby FX และจัดการบริการออนไลน์ผ่าน:",
                "legal_2": "RUBYFX GLOBAL LIMITED ได้รับการอนุญาตจาก Financial Sector Conduct Authority (FSCA) ในแอฟริกาใต้ ในฐานะผู้ให้บริการทางการเงิน FSP : 1234567890. RUBYFX GLOBAL LIMITED ดำเนินการภายใต้",
                "legal_3": "Ruby FX ดำเนินการภายใต้ SERENE CAPITAL (PTY) LTD ซึ่งได้รับอนุญาตและควบคุมโดยหน่วยงานกำกับดูแลภาคการเงิน (FSCA) ของแอฟริกาใต้ (FSP เลขที่ 55069) การซื้อขายผลิตภัณฑ์ที่มีเลเวอเรจมีความเสี่ยงสูง และอาจส่งผลให้สูญเสียเงินลงทุนของคุณ",
                "important_notice": "ประกาศสำคัญ",
                "notice_text": "RUBYFX GLOBAL LIMITED จดทะเบียนเป็นบริษัทจำกัดส่วนบุคคลภายใต้กฎหมายของอังกฤษและเวลส์ การจดทะเบียนนี้เป็นการยืนยันสถานะทางกฎหมายของบริษัท อย่างไรก็ตาม ไม่ถือเป็นการอนุญาตหรือการออกใบอนุญาตจากหน่วยงานกำกับดูแลทางการเงินใดๆ ในสหราชอาณาจักร รวมถึง Financial Conduct Authority (FCA) ลูกค้าควรตรวจสอบข้อมูลกฎระเบียบและการเปิดเผยความเสี่ยงทั้งหมดที่จัดทำโดย Ruby FX ก่อนเริ่มกิจกรรมทางการเงินหรือการเทรด การเทรดผลิตภัณฑ์ทางการเงินที่มีเลเวอเรจมีความเสี่ยงสูง และอาจไม่เหมาะสมสำหรับนักลงทุนทุกคน"
            },
            "trading_footer": {
                "title_1": "ต้องการข้อมูล",
                "title_2": "เพิ่มเติมหรือไม่?",
                "faqs": [
                    {
                        "question": "ผลิตภัณฑ์อะไรบ้างที่ฉันสามารถเทรดกับ RUBY ได้?",
                        "answer": "คุณสามารถเทรดตราสาร CFD ได้มากกว่า 550 รายการ รวมถึง Forex, โลหะเงิน, ดัชนี และพลังงาน"
                    },
                    {
                        "question": "ชั่วโมงการเทรดของตลาด RUBY คือเวลาใด?",
                        "answer": "ชั่วโมงการเทรดแตกต่างกันไปตามแต่ละตลาด โดยทั่วไป Forex สามารถเทรดได้ตลอด 24 ชั่วโมง 5 วันต่อสัปดาห์ ตั้งแต่วันจันทร์ถึงวันศุกร์"
                    },
                    {
                        "question": "สเปรดที่มีให้บริการคือเท่าใด?",
                        "answer": "เรานำเสนอสเปรดแบบลอยตัวที่แคบมาก โดยเริ่มต้นจากเพียง 0.7 pips"
                    },
                    {
                        "question": "กฎเลเวอเรจและมาร์จิ้นคืออะไร?",
                        "answer": "เรามีเลเวอเรจที่ยืดหยุ่นได้สูงสุดถึง 1:3000 โดย Margin call อยู่ที่ 40% และ Stop out อยู่ที่ 20%"
                    }
                ]
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
