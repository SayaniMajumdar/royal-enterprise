import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import { Crown, Sparkles, Target, Eye, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

const About = () => {
  return (
    <div className="bg-white min-h-screen text-[#1F2937]">
      {/* Hero Banner */}
      <section className="bg-charcoal text-[#FFF8F0] relative py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80"
            alt="About Royal Enterprise"
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.08] scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <div className="inline-flex items-center space-x-2.5 mb-5">
            <span className="w-5 h-px bg-gold-light/60" />
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.26em] text-gold-light font-medium">
              About Royal Enterprise
            </span>
            <span className="w-5 h-px bg-gold-light/60" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FFF8F0] tracking-tight leading-[1.12] mb-6">
            The Standard of <span className="font-editorial italic text-gold-light">Regal Hospitality</span> & Event Mastery
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 font-light leading-relaxed">
            Royal Enterprise represents an integrated luxury atelier providing comprehensive solutions across Event Management, Artisanal Catering, and Bespoke Wedding Planning in Kolkata and across India.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-[1180px] mx-auto px-5 sm:px-6 space-y-28">
        {/* Company Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-gold-dark text-[11px] font-semibold uppercase tracking-[0.24em]">
              <span className="w-5 h-px bg-gold-dark/60" />
              <span>Company Introduction</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141414] tracking-tight leading-tight">
              Welcome to <span className="font-editorial italic font-normal text-maroon">Royal Enterprise</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark/40" />
            <p className="text-[#3A352F] text-sm sm:text-base leading-relaxed font-light">
              Royal Enterprise is dedicated to delivering extraordinary experiences with uncompromising elegance and turnkey execution. We unite the precision of event architects, the refined palate of master chefs, and the artistry of wedding visionaries.
            </p>
            <p className="text-[#6B645C] text-xs sm:text-sm leading-relaxed font-light">
              Whether conceptualizing an international corporate summit, curating a multi-course banquet for thousands of honored guests, or weaving an ethereal wedding fairytale, our collective focus is unwavering reliability, discretion, and breathtaking presentation.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="theevexa-img overflow-hidden border border-[#E8E1D5] bg-[#FFFDF9] shadow-md p-2">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
                alt="Royal Enterprise Executive Excellence"
                className="w-full h-80 sm:h-96 object-cover rounded-[2px]"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 bg-[#FFFDF9] border border-[#E8E1D5] rounded-[4px] shadow-sm hover:border-gold-base/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F4] border border-gold-dark/30 flex items-center justify-center mb-6 text-gold-dark">
              <Target className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#141414] mb-3 tracking-wide">Our Mission</h3>
            <p className="text-xs sm:text-sm text-[#554F47] leading-relaxed font-light">
              To deliver world-class event production, gourmet culinary journeys, and end-to-end wedding planning with precision, warmth, and uncompromised quality—ensuring our clients celebrate every milestone with effortless confidence and joy.
            </p>
          </div>

          <div className="p-8 sm:p-10 bg-[#FFFDF9] border border-[#E8E1D5] rounded-[4px] shadow-sm hover:border-gold-base/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F4] border border-gold-dark/30 flex items-center justify-center mb-6 text-gold-dark">
              <Eye className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#141414] mb-3 tracking-wide">Our Vision</h3>
            <p className="text-xs sm:text-sm text-[#554F47] leading-relaxed font-light">
              To stand as India’s most revered and trusted luxury hospitality enterprise, recognized for redefining industry standards through aesthetic ingenuity, culinary authenticity, and client-centric integrity.
            </p>
          </div>
        </div>

        {/* Why Choose Royal Enterprise */}
        <div>
          <SectionHeader
            badge="The Foundation"
            title="Why Choose Royal Enterprise"
            subtitle="The fundamental principles that guide our enterprise and inspire the trust of our patrons."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 bg-[#FFFDF9] border border-[#E8E1D5] rounded-[4px] hover:border-gold-base/50 transition-all shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-gold-dark mb-3 stroke-[1.5]" />
              <h4 className="font-serif font-normal text-lg text-[#141414] mb-2 tracking-wide">Integrated Solutions</h4>
              <p className="text-xs sm:text-[13px] text-[#554F47] leading-relaxed font-light">
                No need to coordinate with multiple disparate vendors. Production, catering, decor, and styling harmonize under single-point accountability.
              </p>
            </div>
            <div className="p-7 bg-[#FFFDF9] border border-[#E8E1D5] rounded-[4px] hover:border-gold-base/50 transition-all shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-gold-dark mb-3 stroke-[1.5]" />
              <h4 className="font-serif font-normal text-lg text-[#141414] mb-2 tracking-wide">Culinary Integrity</h4>
              <p className="text-xs sm:text-[13px] text-[#554F47] leading-relaxed font-light">
                Authentic spices, pristine raw ingredients, and strict hygiene protocols guarantee culinary masterpieces that delight every palate.
              </p>
            </div>
            <div className="p-7 bg-[#FFFDF9] border border-[#E8E1D5] rounded-[4px] hover:border-gold-base/50 transition-all shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-gold-dark mb-3 stroke-[1.5]" />
              <h4 className="font-serif font-normal text-lg text-[#141414] mb-2 tracking-wide">Technical Sophistication</h4>
              <p className="text-xs sm:text-[13px] text-[#554F47] leading-relaxed font-light">
                State-of-the-art concert audio, 3D laser-mapped staging, and crystal LED displays built with industrial safety standards.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction Focus */}
        <div className="bg-[#FFFDF9] border border-[#E8E1D5] rounded-[4px] p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-sm relative overflow-hidden">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-base/50 to-transparent -mx-8 -mt-8 sm:-mx-14 sm:-mt-14 mb-8" />
          <HeartHandshake className="w-10 h-10 text-gold-dark mx-auto mb-4 stroke-[1.5]" />
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] mb-4 tracking-tight">
            Our Customer Satisfaction Focus
          </h3>
          <p className="text-sm sm:text-base text-[#554F47] leading-relaxed max-w-2xl mx-auto font-light">
            At Royal Enterprise, every client relationship is treated as a sacred trust. Our senior directors remain personally involved throughout the planning lifecycle, guaranteeing transparent budgets, punctual execution, and memories that last a lifetime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;