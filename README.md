# Ruby FX - Web Application
**Project Name:** Ruby FX Trading Platform Website
**Description:** A multilingual landing page and marketing website for Ruby FX, an advanced trading platform for Forex, Metals, Indices, Energies, and Stocks. Built using React and Vite, featuring a premium design, responsive layouts, and robust internationalization support (English and Thai).

![Tech Stack](https://img.shields.io/badge/React-19.2.0-blue.svg?logo=react) 
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple.svg?logo=vite) 
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC.svg?logo=tailwind-css) 
![i18n](https://img.shields.io/badge/i18next-25.8.3-green.svg)

---

## 🚀 Features (คุณสมบัติเด่น)

- **Multilingual Support (รองรับหลายภาษา):** Built with `react-i18next`. Currently supports English (`en`) and Thai (`th`), structured directly inside `src/i18n.js`.
- **Responsive UI/UX (ดีไซน์รองรับทุกขนาดหน้าจอ):** Built strictly with Tailwind CSS, ensuring pixel-perfect adaptability from mobile phones to ultra-wide desktop monitors.
- **Premium Animations & Design (ดีไซน์พรีเมียมระดับสากล):** Makes wide use of Drop shadows, gradients, and specialized layouts to give a modern, trusted fintech feel.
- **Routing:** Handled manually via `react-router-dom` incorporating multiple specialized pages.
- **Iconography:** Utilitized `lucide-react` and standard SVGs for crisp UI icons.

---

## 📂 Project Structure (โครงสร้างโปรเจกต์)

The project follows a standard React/Vite structure:

```text
rubyv2/
├── public/                 # Static public assets
├── src/                    # Source files
│   ├── assets/             # Images, Banners, Mockups (e.g., macbook.png, Phone.png, bannerapp.jpg)
│   ├── components/         # Reusable React UI Components (Heroes, Feature sections, Footers, etc.)
│   ├── pages/              # Main Page routes (Home, Forex, Metals, RubyApp, MetaTrader5, etc.)
│   ├── App.jsx             # Main Router and Global Layout Wrapper
│   ├── i18n.js             # Configuration for Localizations/Translations (EN/TH content)
│   ├── index.css           # Global Styles and Tailwind imports
│   └── main.jsx            # Entry point for React
├── package.json            # Dependencies and Scripts
├── tailwind.config.js      # Tailwind configurations
└── vite.config.js          # Vite configurations
```

---

## 🛠️ Key Pages & Routes (หน้าเด่นๆ ที่มีในระบบ)

- `/` **(Home Page)**: Overview of Ruby FX, Hero banner, Markets, CTA to start trading.
- `/forex`, `/metals`, `/indices`, etc.: Detailed specific market pages.
- `/deposits`: Deposit methods, speeds, and quick onboarding instructions.
- `/ruby-app`: The comprehensive landing page for the proprietary Ruby App mobile platform.
- `/metatrader-5`: Information & Download links for the flagship MT5 platform.
- `/training-conditions`: Information on spreads, leverage, margins.

---

## 🔧 Installation & Setup (การติดตั้งและการเปิดใช้งาน)

To get this project up and running locally, follow these steps:

**1. Clone the repository**
```bash
git clone <repository-url>
cd rubyv2
```

**2. Install Dependencies**
```bash
npm install
```

**3. Start the Development Server**
```bash
npm run dev
```

**4. Build for Production**
```bash
npm run build
```

---

## 🌍 How to Add Translations (วิธีการแก้ไขภาษา)

Translations are handled directly via the object within `src/i18n.js`. 

To update or add new text:
1. Open `src/i18n.js`.
2. Locate the target section key (e.g., `ruby_app`, `mt5`, `navbar`).
3. Add or modify the string inside both the `en` object (English) and the `th` object (Thai).
4. Inside your component, use the hook `useTranslation`:
   ```jsx
   import { useTranslation } from 'react-i18next';

   const MyComponent = () => {
       const { t } = useTranslation();
       return <h1>{t('your.new.key')}</h1>;
   };
   ```

---

## 🎨 Styling Convention (การกำหนดสไตล์)

- **Utility First:** Standard Tailwind classes are mandatory for layouts (`flex`, `grid`, `padding`, `margin`).
- **Brand Colors:** Main primary colors rely heavily on specific hex codes like blue (`#0724FF`) and red (`#ff0000`/`#D32F2F`) directly defined inline or globally in custom styles.
- **Responsiveness Check:** Develop keeping `(default)` for mobile, `sm:`, `md:`, and `lg:` classes to tweak behavior as screens expand.

---

*Documentation generated and maintained to support further development scaling.*
