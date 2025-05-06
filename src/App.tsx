import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Incubation from './pages/Incubation/Incubation';
import StartupPage from './pages/Startup/Startup';
import StartupDirectory from './pages/StartupDirectory/StartupDirectory';
import TrainingWorkshops from './pages/TrainingWorkshops/TrainingWorkshops';
import MainLayout from './components/layout/MainLayout';
import InnovationAcceleration from './pages/Innovation/Innovation';
import HowToApply from './pages/HowToApply/HowToApply';
import FeaturedInnovations from './pages/FeaturedInnovation/FeaturedInnovations';
import SuccessStories from './pages/SuccessStories/SuccessStories';
import Resources from './pages/Resource/Resources';
import MediaGallery from './pages/MediaGallery/MediaGallery';
import DigitalGallery from './pages/DigitalGallery/DigitalGallery';
import NewsEvents from './pages/NewsEvents/NewsEvents';
import BusinessTemplates from './pages/Templates/BusinessTemplates';
import InvestmentBusinessTemplate from './pages/Templates/BusinessTemplate';
import FAQsPage from './pages/FAQs/FAQsPage';
import Policy from './pages/Policy/Policy';
import BusinessTools from './pages/BusinessTools/BusinessTools';
import SuccessStory from './pages/Success/SuccessStory';
import Investments from './pages/Investment/Investments';
import Zones from './pages/Investment/Zones';
import StepsToInvest from './pages/Invest/StepsToInvest';
import Services from './pages/Services/Services';
import Loading from './components/Loading';

const App: React.FC = () => (
  <Router>
    <Loading />
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incubation" element={<Incubation />} />
        <Route path="/incubation/startups" element={<StartupPage />} />
        <Route path="/incubation/startups/directory" element={<StartupDirectory />} />
        <Route path="/incubation/training" element={<TrainingWorkshops />} />
        <Route path="/incubation/innovation-programs" element={<InnovationAcceleration />} />
        <Route path="/incubation/how-to-apply" element={<HowToApply />} />
        <Route path="/incubation/startups/featured" element={<FeaturedInnovations />} />
        <Route path="/incubation/startups/success" element={<SuccessStories />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/digital" element={<DigitalGallery />} />
        <Route path="/resources/digital/gallery" element={<MediaGallery />} />
        <Route path="/resources/digital/news" element={<NewsEvents />} />
        <Route path="/resources/templates" element={<BusinessTemplates />} />
        <Route path="/resources/templates/investment" element={<InvestmentBusinessTemplate />} />
        <Route path="/resources/faqs" element={<FAQsPage />} />
        <Route path="/resources/policy" element={<Policy />} />
        <Route path="/resources/tools" element={<BusinessTools />} />
        <Route path="/trends/success-stories" element={<SuccessStory />} />
        <Route path="/investment" element={<Investments />} />
        <Route path="/investment/zones" element={<Zones />} />
        <Route path="/investment/business-templates" element={<InvestmentBusinessTemplate />} />
        <Route path="/investment/steps-to-invest" element={<StepsToInvest />} />
        <Route path="/services" element={<Services />} />
        {/* Add more routes here as needed */}
      </Routes>
    </MainLayout>
  </Router>
);

export default App;
