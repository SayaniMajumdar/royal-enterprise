import React from 'react';

const WhyChooseUs = ({ onOpenQuote }) => {
  const steps = [
    {
      num: '1',
      title: 'Discovery & Briefing',
      detail: 'We understand your event purpose, expected guest count, venue preferences, and target budget.',
    },
    {
      num: '2',
      title: 'Concept & Budget Design',
      detail: 'We draft a customized 3D design preview, timeline breakdown, and transparent line-item budget estimate.',
    },
    {
      num: '3',
      title: 'Pre-Production',
      detail: 'Vendor allocations, technical dry-runs, catering menu tastings, sound/light checks, and legal/safety clearances.',
    },
    {
      num: '4',
      title: 'Day-of Execution',
      detail: 'A dedicated floor manager oversees artist timelines, backstage cues, dining transitions, and crowd comfort.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] dark:bg-[#141210] border-b border-[#E5DED3] dark:border-[#38312B] transition-colors">
      
      {/* 4-Step Process (Our 4-Step Work Process) */}
      <section className="py-20 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Intro */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] dark:text-[#F59E0B] block">
              How we work with you
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2] tracking-tight leading-tight">
              A straightforward process without corporate jargon.
            </h2>
            <p className="text-sm sm:text-base text-[#524C44] dark:text-[#A89F91] leading-relaxed">
              Planning a wedding or major event shouldn't feel like wrestling with a contract. Here is how we take you from the first briefing to a completed celebration.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-maroon px-6 py-2.5 text-xs font-semibold"
              >
                Start with a conversation
              </button>
            </div>
          </div>

          {/* Right Vertical Timeline Steps */}
          <div className="lg:col-span-7 space-y-8 relative pl-4 border-l-2 border-[#E5DED3] dark:border-[#38312B]">
            {steps.map((step) => (
              <div key={step.num} className="relative pl-6">
                {/* Step Marker Badge */}
                <span className="absolute -left-[27px] top-0 w-8 h-8 rounded-full bg-[#6E1423] dark:bg-[#8B1E32] text-white flex items-center justify-center font-serif text-sm font-bold border-4 border-[#FAF7F2] dark:border-[#141210]">
                  {step.num}
                </span>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F1D1A] dark:text-[#FAF7F2]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#524C44] dark:text-[#A89F91] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default WhyChooseUs;
