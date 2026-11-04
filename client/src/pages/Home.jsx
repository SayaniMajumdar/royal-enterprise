import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import DivisionOverview from '../components/home/DivisionOverview';
import PortfolioGallery from '../components/home/PortfolioGallery';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FounderNote from '../components/home/FounderNote';
import ClientReviews from '../components/home/ClientReviews';
import CallToAction from '../components/home/CallToAction';
import QuickQuoteModal from '../components/layout/QuickQuoteModal';

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-[#FAF8F5] dark:bg-[#141210] min-h-screen text-[#2B2625] dark:text-[#FAF8F5] transition-colors">
      <HeroSection onOpenQuote={() => setIsQuoteOpen(true)} />
      <DivisionOverview onOpenQuote={() => setIsQuoteOpen(true)} />
      <PortfolioGallery />
      <WhyChooseUs onOpenQuote={() => setIsQuoteOpen(true)} />
      <FounderNote />
      <ClientReviews />
      <CallToAction onOpenQuote={() => setIsQuoteOpen(true)} />

      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
};

export default Home;