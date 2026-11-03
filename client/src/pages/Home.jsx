import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import DivisionOverview from '../components/home/DivisionOverview';
import BrandStory from '../components/home/BrandStory';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ExperienceStats from '../components/home/ExperienceStats';
import CallToAction from '../components/home/CallToAction';
import QuickQuoteModal from '../components/layout/QuickQuoteModal';

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1F1D1A]">
      <HeroSection onOpenQuote={() => setIsQuoteOpen(true)} />
      <DivisionOverview onOpenQuote={() => setIsQuoteOpen(true)} />
      <BrandStory />
      <WhyChooseUs onOpenQuote={() => setIsQuoteOpen(true)} />
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
