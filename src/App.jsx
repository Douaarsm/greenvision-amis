import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import ResponsiveNavbar from './assets/components/ResponsiveNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './assets/styles/app.css';
import './assets/styles/responsive.css';
import './assets/styles/components.css';
import './assets/styles/animations.css';
import './i18n';

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div className="loading">{t('loading')}...</div>}>
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default App;