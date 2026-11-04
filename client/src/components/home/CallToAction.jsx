import React, { useState } from 'react';
import { Phone, MessageSquare, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import { useNotification } from '../../context/NotificationContext';
import { submitContactEnquiry } from '../../services/api';

const CallToAction = ({ onOpenQuote }) => {
  const { showToast } = useNotification();
  const [phoneInput, setPhoneInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleQuickCallback = async (e) => {
    e.preventDefault();
    if (!phoneInput.trim() || phoneInput.length < 8) {
      showToast('Please enter a valid phone number.', 'error');
      return;
    }

    setSubmitting(true);
    try {
      await submitContactEnquiry({
        customerName: 'Quick Callback Request',
        phone: phoneInput,
        email: 'contact@royalenterprise.com',
        subject: 'Quick Callback Request from Website Banner',
        message: 'Client requested an immediate consultation callback via homepage banner.',
      });
      setSubmitted(true);
      showToast(
        "Got it. We'll call you within 2 hours between 10:00 AM and 8:30 PM IST.",
        'success'
      );
      setPhoneInput('');
    } catch (err) {
      showToast('Unable to request callback. Opening quote form...', 'info');
      onOpenQuote();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#141210] text-white relative overflow-hidden transition-colors border-t border-[#38312B]">
      {/* Subtle Ambient Radial Lighting (Inspired by Fleava "Let's Talk") */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#6B1D2F]/20 via-[#C5A059]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Title & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[#E0CFA6]">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                Direct Consultation
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08]">
              Let's Talk. <br />
              <span className="italic font-serif text-[#E0CFA6]">Your Celebration Awaits.</span>
            </h2>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-xl">
              Dates during the Kolkata wedding seasons (November–February) fill up quickly. Drop your phone number below for an immediate callback, or speak directly with our planning directors.
            </p>

            {/* Callback Form (Logic Preserved 100%) */}
            {submitted ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-400/40 rounded-xl text-emerald-200 text-xs sm:text-sm font-medium flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Got it. Our central kitchen & planning desk will call you within 2 hours.</span>
              </div>
            ) : (
              <form onSubmit={handleQuickCallback} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 max-w-md">
                <div className="flex-1 flex items-center bg-white/10 border border-white/20 focus-within:border-[#C5A059] rounded-xl px-4 py-3 text-white transition-colors">
                  <span className="text-xs font-semibold text-[#E0CFA6] mr-2">🇮🇳 +91</span>
                  <input
                    type="tel"
                    placeholder="Enter contact number"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="w-full text-sm focus:outline-none bg-transparent font-medium placeholder:text-white/40"
                    maxLength={15}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold px-7 py-3 text-xs uppercase tracking-wider font-semibold whitespace-nowrap shadow-lg shrink-0"
                >
                  {submitting ? 'Connecting...' : 'Request Callback'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Instant Proposal Trigger */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            <div className="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-4 backdrop-blur-sm shadow-xl">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#E0CFA6] block">
                Direct Desk Channels
              </span>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp py-3.5 px-6 text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 shadow-md w-full"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Chat</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3.5 px-6 text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center justify-center space-x-2 transition-colors w-full"
              >
                <Phone className="w-4 h-4 text-[#E0CFA6]" />
                <span>Call: {COMPANY_INFO.displayPhone}</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuote}
                className="w-full py-3.5 px-6 text-xs uppercase tracking-wider font-semibold text-[#E0CFA6] hover:text-white border-t border-white/10 pt-4 flex items-center justify-between group transition-colors"
              >
                <span>Or Fill Comprehensive Event Brief</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;