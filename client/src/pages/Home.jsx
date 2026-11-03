import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import DivisionOverview from '../components/home/DivisionOverview';
import FounderNote from '../components/home/FounderNote';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ClientReviews from '../components/home/ClientReviews';
import CallToAction from '../components/home/CallToAction';
import QuickQuoteModal from '../components/layout/QuickQuoteModal';

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-[#FAF7F2] dark:bg-[#141210] min-h-screen text-[#1F1D1A] dark:text-[#F5EFE6] transition-colors">
      <HeroSection onOpenQuote={() => setIsQuoteOpen(true)} />
      <DivisionOverview onOpenQuote={() => setIsQuoteOpen(true)} />
      <FounderNote />
      <WhyChooseUs onOpenQuote={() => setIsQuoteOpen(true)} />
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
