import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ContactModalProvider, useContactModal } from './contexts/ContactModalContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Capabilities } from './components/Capabilities';
import { ProjectHighlights } from './components/ProjectHighlights';
import { WhyUs } from './components/WhyUs';
import { Clients } from './components/Clients';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { AboutUs } from './pages/AboutUs';
import { KeyProjects } from './pages/KeyProjects';
import { Capabilities as CapabilitiesPage } from './pages/Capabilities';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen">
      <Header />
      <ScrollToTop />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Capabilities />
              <ProjectHighlights />
              <WhyUs />
              <Clients />
              <Contact />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<KeyProjects />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
        </Routes>
      </main>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ContactModalProvider>
        <AppContent />
        <Analytics />
      </ContactModalProvider>
    </Router>
  );
}

export default App