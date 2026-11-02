import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import { Crown, Sparkles, Target, Eye, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

const About = () => {
  return (
    <div className="bg-navy-950 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80"
            alt="About Royal Enterprise"
            className="w-full h-full object-cover filter brightness-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-gold-500/40 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
            <Crown className="w-4 h-4 text-gold-400" />
            <span className="text-xs uppercase tracking-widest text-gold-300 font-medium">
              About Royal Enterprise
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight mb-6">
            The Standard of Regal Hospitality & Event Mastery
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed">
            Royal Enterprise represents an integrated luxury enterprise providing comprehensive solutions across Event Management, Catering Services, and Bespoke Wedding Planning.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Company Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Company Introduction
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">
              Welcome to Royal Enterprise
            </h2>
            <div className="w-12 h-1 bg-gold-400" />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Royal Enterprise is dedicated to delivering extraordinary experiences with uncompromising elegance and turnkey execution. We unite the precision of event architects, the refined palate of master chefs, and the artistry of wedding visionaries.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Whether conceptualizing an international corporate summit, curating a multi-course banquet for thousands of honored guests, or weaving an ethereal wedding fairytale, our collective focus is unwavering reliability, discretion, and breathtaking presentation.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden border border-gold-500/30 p-2 bg-navy-900/60 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
                alt="Royal Enterprise Executive Excellence"
                className="w-full h-80 sm:h-96 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 bg-navy-900/50 border border-slate-800 rounded-sm">
            <div className="w-12 h-12 rounded-sm bg-gold-500/10 border border-gold-400/40 flex items-center justify-center mb-6 text-gold-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-100 mb-4">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To deliver world-class event production, gourmet culinary journeys, and end-to-end wedding planning with precision, warmth, and uncompromised quality—ensuring our clients celebrate every milestone with effortless confidence and joy.
            </p>
          </div>

          <div className="p-8 sm:p-10 bg-navy-900/50 border border-slate-800 rounded-sm">
            <div className="w-12 h-12 rounded-sm bg-gold-500/10 border border-gold-400/40 flex items-center justify-center mb-6 text-gold-400">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-100 mb-4">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
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
            <div className="p-6 bg-navy-900/40 border border-slate-800 rounded-sm">
              <CheckCircle2 className="w-6 h-6 text-gold-400 mb-3" />
              <h4 className="font-serif font-bold text-base text-slate-100 mb-2">Integrated Solutions</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                No need to coordinate with multiple disparate vendors. Production, catering, decor, and styling harmonize under single-point accountability.
              </p>
            </div>
            <div className="p-6 bg-navy-900/40 border border-slate-800 rounded-sm">
              <CheckCircle2 className="w-6 h-6 text-gold-400 mb-3" />
              <h4 className="font-serif font-bold text-base text-slate-100 mb-2">Culinary Integrity</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Authentic spices, pristine raw ingredients, and strict hygiene protocols guarantee culinary masterpieces that delight every palate.
              </p>
            </div>
            <div className="p-6 bg-navy-900/40 border border-slate-800 rounded-sm">
              <CheckCircle2 className="w-6 h-6 text-gold-400 mb-3" />
              <h4 className="font-serif font-bold text-base text-slate-100 mb-2">Technical Sophistication</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                State-of-the-art concert audio, 3D laser-mapped staging, and crystal LED displays built with industrial safety standards.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction Focus */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 rounded-sm p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <HeartHandshake className="w-12 h-12 text-gold-400 mx-auto mb-4" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Our Customer Satisfaction Focus
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            At Royal Enterprise, every client relationship is treated as a sacred trust. Our senior directors remain personally involved throughout the planning lifecycle, guaranteeing transparent budgets, punctual execution, and memories that last a lifetime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
