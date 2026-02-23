import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Trading from './pages/Trading';
import Deposits from './pages/Deposits';
import RubyApp from './pages/RubyApp';
import MetaTrader5 from './pages/MetaTrader5';
import Forex from './pages/Forex';
import Metals from './pages/Metals';
import Indices from './pages/Indices';
import Energies from './pages/Energies';
import Stocks from './pages/Stocks';
import ForexExotic from './pages/ForexExotic';
import MarketAnalytics from './pages/MarketAnalytics';
import Academy from './pages/Academy';
import About from './pages/About';
import Support from './pages/Support';
import Program from './pages/Program';
import MultiLevel from './pages/MultiLevel';
import Loyalty from './pages/Loyalty';


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'th') {
      document.body.classList.add('lang-th');
    } else {
      document.body.classList.remove('lang-th');
    }
  }, [i18n.language]);

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Redirect old /trading to /trading-conditions */}
        <Route path="/trading" element={<Navigate to="/trading-conditions" replace />} />
        <Route path="/trading-conditions" element={<Trading />} />
        <Route path="/deposits" element={<Deposits />} />
        <Route path="/ruby-app" element={<RubyApp />} />
        <Route path="/metatrader-5" element={<MetaTrader5 />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/metals" element={<Metals />} />
        <Route path="/indices" element={<Indices />} />
        <Route path="/energies" element={<Energies />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/forex-exotic" element={<ForexExotic />} />
        <Route path="/market-analytics" element={<MarketAnalytics />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/ruby-ib-program" element={<Program />} />
        <Route path="/ruby-multi-level" element={<MultiLevel />} />
        <Route path="/ruby-forex-loyalty" element={<Loyalty />} />
      </Routes>
    </Router>
  )
}

export default App;
