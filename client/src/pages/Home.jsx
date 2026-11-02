import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import DivisionOverview from '../components/home/DivisionOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ExperienceStats from '../components/home/ExperienceStats';
import CallToAction from '../components/home/CallToAction';
import QuickQuoteModal from '../components/layout/QuickQuoteModal';

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div>
      <HeroSection onOpenQuote={() => setIsQuoteOpen(true)} />
      <DivisionOverview onOpenQuote={() => setIsQuoteOpen(true)} />
      <WhyChooseUs />
      <ExperienceStats />
      <CallToAction onOpenQuote={() => setIsQuoteOpen(true)} />

      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
};

export default Home;
