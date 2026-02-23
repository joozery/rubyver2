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
