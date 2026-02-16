import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "nav": {
                "trading": "Trading",
                "analytics": "Analytics & Education",
                "company": "Company",
                "partnership": "Partnership Programs",
                "deposits": "Deposits & Withdrawals",
                "bonus": "Get the Deposit Bonus",
                "open_account": "Open Account",
                "login": "Login"
            }
        }
    },
    th: {
        translation: {
            "nav": {
                "trading": "การเทรด",
                "analytics": "บทวิเคราะห์และการศึกษา",
                "company": "บริษัท",
                "partnership": "โปรแกรมพันธมิตร",
                "deposits": "การฝากและถอนเงิน",
                "bonus": "รับโบนัสเงินฝาก",
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
