import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
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
      </Routes>
    </Router>
  )
}

export default App;
