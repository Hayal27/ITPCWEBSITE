import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, {  } from 'react';
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
import LeadershipTeam from './pages/leadership/LeadershipTeam';
import Board from './pages/Board/Board';
import CareerPage from './pages/Career/Career'
import LeasedLandPage from './pages/Space/LeasedLandPage'
import OfficePage from './pages/office/OfficePage';
import WhoWeAre from './pages/WhoWeAre/WhoWeAre';
import About from './pages/About/AboutUs';
import PartnersInvestors from './pages/investors/PartnersInvestors';
import Loading from './components/Loading';
import usePageLoader from './hooks/usePageLoader';

const App: React.FC = () => {
  const loading = usePageLoader();

  return (
    <Router>
      {loading && <Loading />}
      <MainLayout>
        <Routes>
          {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Services > IT Services */}
            <Route path="/services" element={<Services />} />

            {/* Services > Spaces */}

            {/* Investment */}
            {/* <Route path="/investment" element={<Investments />} /> */}
            <Route path="/investment/zones" element={<Zones />} />
            {/* <Route path="/resources/templates" element={<BusinessTemplates />} /> */}
            {/* <Route path="/investment/business-templates" element={<InvestmentBusinessTemplate />} /> */}
            <Route path="/investment/steps-to-invest" element={<StepsToInvest />} />

            {/* Incubation */}
            <Route path="/incubation" element={<Incubation />} />

            {/* Incubation > Startups */}
            {/* <Route path="/incubation/startups" element={<StartupPage />} /> */}
            {/* <Route path="/incubation/startups/directory" element={<StartupDirectory />} /> */}
            {/* <Route path="/incubation/startups/featured" element={<FeaturedInnovations />} /> */}
            {/* <Route path="/incubation/startups/success" element={<SuccessStories />} /> */}

            {/* Incubation > Programs */}
            <Route path="/incubation/training" element={<TrainingWorkshops />} />
            <Route path="/incubation/innovation-programs" element={<InnovationAcceleration />} />
            <Route path="/incubation/how-to-apply" element={<HowToApply />} />

            {/* Resources */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/digital" element={<DigitalGallery />} />
            <Route path="/resources/digital/gallery" element={<MediaGallery />} />
            <Route path="/resources/digital/news" element={<NewsEvents />} />
            <Route path="/resources/digital/news/:type" element={<NewsEvents />} />
            <Route path="/resources/digital/news/:type/:id" element={<NewsEvents />} />
            <Route path="/resources/tools" element={<BusinessTools />} />
            <Route path="/resources/policy" element={<Policy />} />
            <Route path="/resources/faqs" element={<FAQsPage />} />

            {/* About */}
            <Route path="/about" element={<About />} />
            <Route path="/about/leadership" element={<LeadershipTeam />} />
            <Route path="/about/board" element={<Board />} />
            <Route path="/about/who-we-are" element={<WhoWeAre/>} />
            <Route path="/about/mission-vision" element={<About/>} />
            <Route path="/about/partners" element={<PartnersInvestors />} />

            {/* Templates */}
            <Route path="/career" element={<CareerPage/>} />
            <Route path="/career/jobs" element={<CareerPage/>} />

            <Route path="/services/spaces/leased-Land" element={<LeasedLandPage/>} />
            <Route path="/services/spaces/office-Rent" element={<OfficePage/>} />


            {/* Trends */}
            {/* <Route path="/trends/success-stories" element={<SuccessStory />} /> */}

          {/* Add more routes here as needed */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;