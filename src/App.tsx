import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Incubation from './pages/Incubation/Incubation';

const App: React.FC = () => (
  <Router>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incubation" element={<Incubation />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;