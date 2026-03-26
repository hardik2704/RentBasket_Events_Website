import React from 'react';
import LuxuryNavbar from './components/LuxuryNavbar';
import HeroSection from './components/HeroSection';
import ValuePropositionCards from './components/ValuePropositionCards';
import ProductShowcaseCards from './components/ProductShowcaseCards';
import PrestigeGallery from './components/PrestigeGallery';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import UseCaseGrid from './components/UseCaseGrid';
import InquiryFormCard from './components/InquiryFormCard';
import TermsAccordion from './components/TermsAccordion';
import LuxuryFooter from './components/LuxuryFooter';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <LuxuryNavbar />
      
      <main>
        <HeroSection />
        <ValuePropositionCards />
        <WhyChooseUsSection />
        <ProductShowcaseCards />
        <PrestigeGallery />
        <UseCaseGrid />
        <InquiryFormCard />
        <TermsAccordion />
      </main>

      <LuxuryFooter />

    </div>
  );
}

export default App;
