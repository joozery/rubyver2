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
            },
            "deposits_page": {
                "hero": {
                    "title1": "DEPOSITS",
                    "title_and": "AND",
                    "title2": "WITHDRAWALS",
                    "desc": "Every transaction you make with RubyFX is fast, convenient, and protected.",
                    "btn": "Deposit to trade",
                    "card1": "UNLIMITED TRANSACTIONS UPON FULL VERIFICATION",
                    "card2": "COMPREHENSIVE GLOBAL AND LOCAL PAYMENT OPTIONS",
                    "card3": "ZERO COMMISSION FEES",
                    "card4": "INSTANT AUTOMATED WITHDRAWALS AVAILABLE"
                }
            },
            "payment": {
                "title1": "200+",
                "title2": "Payment methods",
                "deposit": "To deposit",
                "withdraw": "To withdraw",
                "country": "Thailand",
                "btn": "Make deposit",
                "fund_btn": "Fund account",
                "tags": {
                    "new": "NEW",
                    "need_verif": "NEED VERIFICATION"
                },
                "details": {
                    "commission": "Commission",
                    "time": "Avg. time",
                    "limits": "Limits",
                    "instantly": "Instantly",
                    "visa_limits": "From 5 to 10,000 EUR",
                    "sticpay_limits": "From 5 USD",
                    "qr_limits": "From 350 to 2,000,000"
                },
                "bonus": {
                    "title1": "DOUBLE",
                    "title2": "YOUR FIRST",
                    "title3": "DEPOSIT",
                    "title4": "TODAY",
                    "desc": "Enjoy 100% bonus now, then up to 60% extra on every deposit over $100.",
                    "btn": "Go to bonus"
                },
                "protection": {
                    "title1": "YOUR FUNDS ARE PROTECTED",
                    "title2": "WITH RUBY",
                    "items": [
                        {
                            "title": "SEGREGATED ACCOUNTS",
                            "desc": "Client funds are maintained in insured Tier-1 banking institutions, entirely separate from company operating capital."
                        },
                        {
                            "title": "SECURE WITHDRAWALS",
                            "desc": "All withdrawals are protected through one-time password (OTP) verification procedures."
                        },
                        {
                            "title": "PCI DSS COMPLIANCE",
                            "desc": "We adhere to the Payment Card Industry Data Security Standard to minimize card-related risks and safeguard sensitive information."
                        },
                        {
                            "title": "3D SECURE PAYMENTS",
                            "desc": "An additional SMS authentication step ensures that only the authorized account holder can approve online card transactions."
                        }
                    ]
                }
            },
            "steps": {
                "title": "DEPOSIT IN THREE STEPS",
                "btn": "Open Account",
                "items": [
                    {
                        "number": "Step 1",
                        "title": "VERIFY YOUR ACCOUNT",
                        "desc": "Download the RubyFX application or select \"Open Account\" to complete registration and identity verification."
                    },
                    {
                        "number": "Step 2",
                        "title": "SELECT A PAYMENT METHOD",
                        "desc": "Click the <span class=\"text-[#00CC00]\">\"Deposit\"</span> button to access both international and local payment channels."
                    },
                    {
                        "number": "Step 3",
                        "title": "PROVIDE THE REQUIRED INFORMATION",
                        "desc": "Follow the on-screen instructions and submit the necessary details to complete your transaction."
                    }
                ]
            },
            "unlock_potential": {
                "title1": "OUR CONDITIONS UNLOCK",
                "title2": "YOUR POTENTIAL",
                "desc1": "Order execution from 0.01 seconds.",
                "desc2": "Floating spreads from 0.7 pips.",
                "desc3": "Demo and Swap Free options available.",
                "items": [
                    {
                        "label": "Open positions",
                        "value": "up to 500, including 200 pending orders"
                    },
                    {
                        "label": "Flexible leverage",
                        "value": "up to 1:3000"
                    },
                    {
                        "label": "Initial deposit",
                        "value": "from $5"
                    },
                    {
                        "label": "Order volume",
                        "value": "from 0.01 to 500 lots"
                    },
                    {
                        "label": "Margin call",
                        "value": "40%"
                    },
                    {
                        "label": "Stop out",
                        "value": "20%"
                    }
                ],
                "btn": "See all conditions"
            },
            "ruby_app": {
                "hero": {
                    "title1": "TRADE SEAMLESSLY",
                    "title2": "ANYWHERE WITH",
                    "title3": "THE RUBY APP",
                    "desc": "A refined, secure, and intuitive platform designed to help you unlock your full trading potential.",
                    "btn": "GET RUBY APP"
                },
                "features": {
                    "title1": "THE APP THAT MAKES",
                    "title2": "YOU",
                    "title3": "STRONGER",
                    "card1_title1": "ENTER HIGH-POTENTIAL",
                    "card1_title2": "TRADES INSTANTLY",
                    "card1_desc": "Analyze market trends with intuitive charting tools, manage orders effortlessly, and access the market anytime, anywhere."
                },
                "onboarding": {
                    "title": "START TRADING WITHOUT DELAY",
                    "desc": "Enjoy swift onboarding with quick registration, seamless verification, and efficient deposit processing."
                },
                "stats": {
                    "title": "ACCESS YOUR TRADING STATS",
                    "desc": "View your equity, margin levels, free margin, and floating P&L in a single tap to assess potential opportunities with precision."
                },
                "charts": {
                    "title1": "PREVIEW AND PERSONALIZE",
                    "title2": "YOUR CHARTS",
                    "desc": "Access charts throughout the app and configure them to your preferences. Leverage over 90 indicators to identify trends and support informed decision-making."
                },
                "everything": {
                    "title1": "EVERYTHING FOR TRADING",
                    "title2": "IN ONE APP",
                    "items": [
                        {
                            "title": "ACCURATE CHARTS",
                            "desc": "Analyze price movements on charts provided directly by"
                        },
                        {
                            "title": "24/7 SUPPORT",
                            "desc": "Get a reply in under a minute, right in the app."
                        },
                        {
                            "title": "DATA SECURITY",
                            "desc": "Stay protected from hacking and data theft."
                        },
                        {
                            "title": "RUBY UPDATES",
                            "desc": "Receive trading insights, promotions, and transaction notifications on the go."
                        }
                    ],
                    "btn": "Download RUBY app"
                },
                "buttons": {
                    "google": "Get it on the",
                    "apple_mt5": "Get MT5 on the",
                    "apple_mt4": "Get MT4 on the",
                    "apk": "Download APK",
                    "app_store": "App Store",
                    "play_store": "Google Play"
                }
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
            },
            "deposits_page": {
                "hero": {
                    "title1": "การฝาก",
                    "title_and": "และ",
                    "title2": "การถอนเงิน",
                    "desc": "ทุกธุรกรรมที่คุณทำกับ RubyFX รวดเร็ว สะดวกสบาย และปลอดภัย",
                    "btn": "ฝากเงินเพื่อเทรด",
                    "card1": "ทำธุรกรรมได้ไม่จำกัดเมื่อยืนยันตัวตนสำเร็จ",
                    "card2": "ครอบคลุมตัวเลือกการชำระเงินทั้งในประเทศและระดับโลก",
                    "card3": "ไม่มีค่าธรรมเนียมคอมมิชชั่น",
                    "card4": "รองรับระบบฝากถอนอัตโนมัติรวดเร็วทันใจ"
                }
            },
            "payment": {
                "title1": "200+",
                "title2": "ช่องทางการชำระเงิน",
                "deposit": "ฝากเงิน",
                "withdraw": "ถอนเงิน",
                "country": "ประเทศไทย",
                "btn": "ทำการฝากเงิน",
                "fund_btn": "เติมเงินเข้าบัญชี",
                "tags": {
                    "new": "ใหม่",
                    "need_verif": "ต้องยืนยันตัวตน"
                },
                "details": {
                    "commission": "ค่าธรรมเนียม",
                    "time": "เวลาเฉลี่ย",
                    "limits": "ขีดจำกัด",
                    "instantly": "ทันที",
                    "visa_limits": "ตั้งแต่ 5 ถึง 10,000 EUR",
                    "sticpay_limits": "ตั้งแต่ 5 USD",
                    "qr_limits": "ตั้งแต่ 350 ถึง 2,000,000"
                },
                "bonus": {
                    "title1": "เพิ่มโบนัส",
                    "title2": "เป็นสองเท่าใน",
                    "title3": "การฝากเงิน",
                    "title4": "ครั้งแรกของคุณ",
                    "desc": "รับโบนัส 100% ตอนนี้ และรับเพิ่มอีกสูงสุด 60% สำหรับทุกการฝากเงินเกิน $100",
                    "btn": "รับโบนัส"
                },
                "protection": {
                    "title1": "เงินทุนของคุณได้รับการปกป้อง",
                    "title2": "กับ RUBY",
                    "items": [
                        {
                            "title": "บัญชีที่แยกต่างหาก",
                            "desc": "เงินทุนของลูกค้าจะถูกเก็บไว้ในสถาบันการเงินระดับ Tier-1 ที่มีประกัน โดยแยกต่างหากจากเงินทุนหมุนเวียนของบริษัทอย่างชัดเจน"
                        },
                        {
                            "title": "การถอนเงินที่ปลอดภัย",
                            "desc": "กระบวนการถอนเงินทั้งหมดได้รับการปกป้องด้วยขั้นตอนการยืนยันตัวตนผ่านรหัสผ่านแบบใช้ครั้งเดียว (OTP)"
                        },
                        {
                            "title": "มาตรฐานความปลอดภัย PCI DSS",
                            "desc": "เราปฏิบัติตามมาตรฐานความปลอดภัยของข้อมูลบัตรเพื่อลดความเสี่ยงที่เกี่ยวข้องกับบัตรและปกป้องข้อมูลที่ละเอียดอ่อน"
                        },
                        {
                            "title": "การชำระเงินแบบ 3D SECURE",
                            "desc": "ขั้นตอนการยืนยันตัวตนเพิ่มเติมผ่าน SMS เพื่อให้แน่ใจว่าเฉพาะเจ้าของบัญชีที่ได้รับอนุญาตเท่านั้นที่สามารถอนุมัติการทำธุรกรรมออนไลน์ผ่านบัตรได้"
                        }
                    ]
                }
            },
            "steps": {
                "title": "ฝากเงินง่ายๆ ใน 3 ขั้นตอน",
                "btn": "เปิดบัญชี",
                "items": [
                    {
                        "number": "ขั้นตอนที่ 1",
                        "title": "ยืนยันบัญชีของคุณ",
                        "desc": "ดาวน์โหลดแอปพลิเคชัน RubyFX หรือเลือก \"เปิดบัญชี\" เพื่อลงทะเบียนและทำการยืนยันตัวตนให้เสร็จสมบูรณ์"
                    },
                    {
                        "number": "ขั้นตอนที่ 2",
                        "title": "เลือกวิธีการชำระเงิน",
                        "desc": "คลิกปุ่ม <span class=\"text-[#00CC00]\">\"ฝากเงิน\"</span> เพื่อเข้าใช้ช่องทางการชำระเงินทั้งในประเทศและระดับสากล"
                    },
                    {
                        "number": "ขั้นตอนที่ 3",
                        "title": "ระบุข้อมูลที่จำเป็น",
                        "desc": "ทำตามคำแนะนำบนหน้าจอและส่งรายละเอียดที่จำเป็นเพื่อทำธุรกรรมให้เสร็จสมบูรณ์"
                    }
                ]
            },
            "unlock_potential": {
                "title1": "เงื่อนไขของเราช่วย",
                "title2": "ปลดล็อกศักยภาพของคุณ",
                "desc1": "ส่งคำสั่งซื้อขายเริ่มต้นที่ 0.01 วินาที",
                "desc2": "สเปรดแบบลอยตัวเริ่มต้นที่ 0.7 pips",
                "desc3": "มีบัญชี Demo และ Swap Free ให้บริการ",
                "items": [
                    {
                        "label": "ตำแหน่งที่เปิดอยู่",
                        "value": "สูงสุด 500 ออเดอร์ รวมถึงออเดอร์ล่วงหน้า 200 รายการ"
                    },
                    {
                        "label": "เลเวอเรจที่ยืดหยุ่น",
                        "value": "สูงสุด 1:3000"
                    },
                    {
                        "label": "เงินฝากเริ่มต้น",
                        "value": "ตั้งแต่ 5 USD"
                    },
                    {
                        "label": "ปริมาณคำสั่งซื้อขาย",
                        "value": "ตั้งแต่ 0.01 ถึง 500 ล็อต"
                    },
                    {
                        "label": "Margin call",
                        "value": "40%"
                    },
                    {
                        "label": "Stop out",
                        "value": "20%"
                    }
                ],
                "btn": "ดูเงื่อนไขทั้งหมด"
            },
            "ruby_app": {
                "hero": {
                    "title1": "เทรดอย่างราบรื่น",
                    "title2": "ได้ทุกที่ด้วย",
                    "title3": "RUBY APP",
                    "desc": "แพลตฟอร์มที่ประณีต ปลอดภัย และใช้งานง่าย ซึ่งออกแบบมาเพื่อช่วยให้คุณปลดล็อกศักยภาพการเทรดได้อย่างเต็มที่",
                    "btn": "ดาวน์โหลด RUBY APP"
                },
                "features": {
                    "title1": "แอปพลิเคชันที่ทำ",
                    "title2": "ให้คุณ",
                    "title3": "แข็งแกร่งขึ้น",
                    "card1_title1": "เข้าถึงโอกาสทำกำไร",
                    "card1_title2": "อย่างรวดเร็ว",
                    "card1_desc": "วิเคราะห์แนวโน้มตลาดด้วยเครื่องมือกราฟที่ใช้งานง่าย จัดการคำสั่งซื้อขายได้ราบรื่น เข้าถึงตลาดได้ทุกที่ทุกเวลา"
                },
                "onboarding": {
                    "title": "เริ่มเทรดได้โดยไม่ล่าช้า",
                    "desc": "สัมผัสประสบการณ์การเริ่มต้นใช้งานที่รวดเร็ว ทั้งการลงทะเบียน การยืนยันตัวตน และการประมวลผลการฝากเงิน"
                },
                "stats": {
                    "title": "เข้าถึงสถิติการเทรดของคุณ",
                    "desc": "ดู Equity, ระดับ Margin, Free Margin และ P&L แบบเรียลไทม์ได้ในคลิกเดียว เพื่อประเมินโอกาสได้อย่างแม่นยำ"
                },
                "charts": {
                    "title1": "ดูตัวอย่างและปรับแต่ง",
                    "title2": "กราฟของคุณ",
                    "desc": "เข้าถึงกราฟได้ทั่วทั้งแอปและตั้งค่าตามความชอบ ใช้ประโยชน์จากอินดิเคเตอร์กว่า 90 ตัวเพื่อระบุแนวโน้มและสนับสนุนการตัดสินใจ"
                },
                "everything": {
                    "title1": "ครบทุกเรื่องเทรด",
                    "title2": "ในแอปพลิเคชันเดียว",
                    "items": [
                        {
                            "title": "กราฟที่แม่นยำ",
                            "desc": "วิเคราะห์ความเคลื่อนไหวของราคาบนแผนภูมิที่จัดเตรียมโดยตรงจาก"
                        },
                        {
                            "title": "บริการลูกค้า 24/7",
                            "desc": "รับการตอบกลับในเวลาน้อยกว่าหนึ่งนาที ผ่านแอปพลิเคชันโดยตรง"
                        },
                        {
                            "title": "ความปลอดภัยของข้อมูล",
                            "desc": "ได้รับการปกป้องจากการแฮ็กและการโจรกรรมข้อมูล"
                        },
                        {
                            "title": "อัปเดตจาก RUBY",
                            "desc": "รับข้อมูลเชิงลึก โปรโมชั่น และการแจ้งเตือนยอดเงิน ได้ทุกที่ทุกเวลา"
                        }
                    ],
                    "btn": "ดาวน์โหลด RUBY APP"
                },
                "buttons": {
                    "google": "ดาวน์โหลดได้จาก",
                    "apple_mt5": "ดาวน์โหลด MT5 ได้ที่",
                    "apple_mt4": "ดาวน์โหลด MT4 ได้ที่",
                    "apk": "ดาวน์โหลดไฟล์ APK",
                    "app_store": "App Store",
                    "play_store": "Google Play"
                }
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
