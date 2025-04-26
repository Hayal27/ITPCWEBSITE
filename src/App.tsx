import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Incubation from './pages/Incubation/Incubation';
import StartupPage from './pages/Startup/Startup';
import StartupDirectory from './pages/StartupDirectory/StartupDirectory';
import TrainingWorkshops from './pages/TrainingWorkshops/TrainingWorkshops';

const App: React.FC = () => (
  <Router>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incubation" element={<Incubation />} />
        <Route path="/incubation/startups" element={<StartupPage />} />
        <Route path="/incubation/startups/directory" element={<StartupDirectory />} />
        <Route path="/incubation/training" element={<TrainingWorkshops />} />
          {/* Add more routes here as needed */}
          </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;