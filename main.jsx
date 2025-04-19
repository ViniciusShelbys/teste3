import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Transacoes from './Transacoes.jsx';
import Splash from './Splash.jsx';

const App = () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/dashboard" element={<Dashboard darkMode={darkMode} />} />
        <Route path="/transacoes" element={<Transacoes darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);